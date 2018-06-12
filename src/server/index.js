import serialize from 'serialize-javascript';
import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import sourceMapSupport from 'source-map-support';
import mongoose from 'mongoose';
import fetch from 'isomorphic-fetch';
import bodyParser from 'body-parser';
import {StaticRouter, matchPath} from 'react-router-dom';

import connectDB from './db/connect';
import App from '../shared/App'
import wordCtrl from './db/controllers/word';
import routes from '../shared/routes';

if (process.env.NODE_ENV==='development') {
	sourceMapSupport.install()
}

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

connectDB();

app.get('/api/words', wordCtrl.getWords);
app.get('/api/words/count', wordCtrl.getCount);
app.get('/api/wordsByDate', wordCtrl.getWordsByDate);
app.get('/api/wordsByMonth', wordCtrl.getWordsByMonth);
app.post('/api/words', wordCtrl.create);
app.put('/api/words', wordCtrl.update);
app.delete('/api/words/:id', wordCtrl.remove);



app.get('*', (req, res, next) => {
	if (req.url == '/favicon.ico'||req.url == '/robots.txt') return next();

	const currentRoute = routes.find(route => matchPath(req.url, route));
	const requestInitialState = 
		currentRoute.component.requestInitialState && currentRoute.component.requestInitialState();

	Promise.resolve(requestInitialState)
	.then(initialState => {

		const markup = renderToString(
			<StaticRouter location={req.url} context={{initialState}}>
				<App />
			</StaticRouter>
		);

    // JSON.stringify(initialState) - делает наше приложение уязвимым для XSS и code-injection
    // use serialize-javascript
		return res.send(`
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<title>Document</title>
				<link rel="stylesheet" type="text/css" href="/css/main.css">
				<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
				<!-- Latest compiled and minified CSS -->
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
				<script src='/bundle.js' defer> </script>
				<script>
					window.__initialState__ = ${serialize(initialState)}
				</script>
			</head>
			<body>
				<div id='root'>${markup}</div>
			</body>
			</html>
		`)
	})
})

app.listen(process.env.PORT||'3000', () => {
	console.log("server is run!")
})