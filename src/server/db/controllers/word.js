import Word from '../models/word';
import moment from 'moment';

export default {
	getCount(req, res) {
		Word
		.count({})
		.then(count => res.json(count))
	},
	getWords(req, res) {
		let {query} = req;
		if (query.select === 'toRepetition') {
			query = {
				repetitionDate: {"$lt": moment().endOf('day')}
			}
		}
		if (query.select === 'recent') {
			const result = {};
			let lastEntry;

			return Word
			// get latest entry
			.findOne()
			.sort({"createdDate.year": -1, "createdDate.month": -1, "createdDate.day": -1})
			.then(word => {
				lastEntry = word;

				return Word
				.find({	
					"createdDate.day": lastEntry.createdDate.day
				})
				.sort({createdDate: -1})
			})
			/* get array months 
				[
					{
						_id: 1,
						daysHaveEntries: [10, 20, 2, 3, 4]
					},
					...
				]
			*/
			.then(wordsLastDay => {
				result.wordsLastDay = wordsLastDay;
				return Word.aggregate([
					{
						$match: {"createdDate.year": lastEntry.createdDate.year}
					},
					{
						$group: {
							_id: "$createdDate.month",
							daysHaveEntries: {$addToSet: "$createdDate.day"}
						}
					},
					{
						$sort: {
							_id: -1
						}
					}
				])
			})
			.then(months => {
				result.daysHaveEntries = months[0].daysHaveEntries;
				result.monthsHaveEntries = months.map(m => m._id)
				return Word.find({}).distinct('createdDate.year');
			})
			.then(years => {
				result.yearsHaveEntries = years;

				console.log(result);

				return res.json(result);
			})
			.catch(err => console.log(err))
		}

		Word
		.find(query)
		.then(words => res.json(words||[]))
		.catch(err => console.log(err))
	},
	getWordsByDate(req, res) {
		let {date, year, month} = req.query;

		Word
		.find({
			"createdDate.year": year,
			"createdDate.month": month,
			"createdDate.day": date
		})
		.then(words => res.json(words))
		.catch(err => console.log(err))
	},
	getWordsByMonth(req, res) {
		let {month, year} = req.query;
		console.log(month)
		Word
		.find({
			"createdDate.year": year,
			"createdDate.month": month
		})
		.sort({
			"createdDate.day": -1
		})
		.then(words => {
			const latestDateInMonth= words[0].createdDate.day;
			const daysHaveEntries = [];

			words.forEach(w => daysHaveEntries.indexOf(w.createdDate.day) === -1 && daysHaveEntries.push(w.createdDate.day));

			const wordsLastDay = words.filter(w => w.createdDate.day === latestDateInMonth);

			return res.json({
				wordsLastDay,
				daysHaveEntries
			})
		})
	},
	create(req, res) {
		Word
		.create(req.body)
		.then(word => {
			console.log(word);

			res.json(word)
		})
		.catch(err => console.log(err))
	},
	update(req, res) {
		Word
		.findOneAndUpdate({_id: req.body.id}, req.body, {new: true})
		.then(word => res.json(word))
		.catch(err => console.log(err))
	},
	remove(req, res) {
		let {id} = req.params;

		Word
		.remove({_id: id})
		.then(deletedWord => res.json(deletedWord))
		.catch(err => console.log(err))
	}
}