
# Заметки

## Изменение схемы mongoose

Только начав знакомство с MongoDB и Mongoose я еще не знал про индексацию([indexes](http://mongoosejs.com/docs/guide.html#indexes)). А индексация полезная вещь - ускоряет
получение данных по запросам определенного вида. Индиксы могут быть разного типа, в зависимости от типа данных, который они индексируют: простые(single field), составные(compound) т.д. Индексацию следуют планировать исходя
из наиболее частых запросов имеющегося приложения. Так как в моем случае нужно часто получать из базы данных записи исходя из даты их создания: записи сделанные в 
определенный день, записи сделанные в определенный месяц, записи сделанные в определенный год, то мне следует использовать [составной индекс](https://docs.mongodb.com/manual/core/index-compound/) такого вида:
```js
	//в mongoose есть несколько вариантов включения индексикации:
	//на уровне модели и на уровне схемы. Для создания составного
	//индекса используется второй вариант.

	schema.index({"createdDate.year": -1}, {"createdDate.month": -1}, {"createdDate.day": -1})

```

У меня уже была схема моделей:
```javascript
{
	...,
	createdDate: Date
}
```

Требовалось ее изменить на такую:
```js
{
	...,
	createdDate: {
		day: Number,
		month: Number,
		year: Number,
		full: Date
	}
}
```

Реализация изменений
```js
Word.find({}).then(words => {
	words.forEach(w => {
		let d = moment(w.createdDate);

		w.createdDate = {
			day: d.date(),
			month: d.month(),
			year: d.year(),
			full: d
		}

		w.save();
	})
})
```

##Произношение слов	

[Oxford Dictionaries](https://developer.oxforddictionaries.com) Username: Coh1bAAAA, password: H6kfkb1aRJ96CTI=