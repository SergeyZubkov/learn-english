import Test from './Test/Test';
import Dictionary from './Dictionary/Dictionary';
import CreateWordForm from './Dictionary/CreateWordForm';
import EditWordForm from './Dictionary/EditWordForm';
const routes = [
	{
		path: '/',
		component: Test,
		exact: true
	},
	{
		path: '/dictionary',
		component: Dictionary,
		exact: true
	},
	{
		path: '/dictionary/create-word',
		component: CreateWordForm,
		exact: true
	},
	{
		path: '/dictionary/edit-word/id=:id&en=:en&ru=:ru',
		component: EditWordForm,
		exact: true
	}
]

export default routes;