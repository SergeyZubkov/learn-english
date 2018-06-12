const headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json'
}

export default {
	getInitialStateForDictionary() {
		let res = {}

		return this.getWords('select=recent')
		.then(result => {
			res = {res,...result}
			return this.getWordsCount()
		})
		.then(count => {
			res.wordsCount = count
			return res;
		})
	},
	getWordsCount() {
		return fetch('http://localhost:3000/api/words/count')
		.then(result => {
			console.log(result.status);
			return result.json()
		})
		.catch(err => console.log(err))
	},
	getWords(query = '') {
		if (query) {
			query =	"?" + query;
		}
		return fetch('http://localhost:3000/api/words' + query)
		.then(result => result.json())
		.catch(err => console.log(err))
	},
	getWordsByDate(date) {
		
		return fetch('http://localhost:3000/api/wordsByDate?date=' + date.date + '&month=' + date.month + '&year=' + date.year)
		.then(result => result.json())
		.catch(err => console.log(err))
	},
	getWordsByMonth(date) {
		return fetch('http://localhost:3000/api/wordsByMonth?&month=' + date.month + '&year=' + date.year)
		.then(result => result.json())
		.catch(err => console.log(err))
	},
	createWord(word) {
		return fetch('http://localhost:3000/api/words', {method: 'POST', body: JSON.stringify(word), headers})
		.then(() => console.log('add word success!!'))
		.catch(err => console.log(err))
	},
	updateWord(word) {
		return fetch('http://localhost:3000/api/words', {method: 'PUT', body: JSON.stringify(word), headers})
		.then((updatedWord) => console.log(updatedWord))
		.catch((err) => console.log(err))
	},
	removeWord(id) {
		return fetch('http://localhost:3000/api/words/' + id, {method: 'DELETE', headers})
	}
}