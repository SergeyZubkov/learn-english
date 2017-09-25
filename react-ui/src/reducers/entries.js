import cuid from 'cuid';

const entriesInit = [
  {
    id: cuid(),
    en: 'mouse',
    ru: 'мышь'
  },
  {
    id: cuid(),
    en: 'house',
    ru: 'дом'
  }
]

const entries = (state=entriesInit, action) => {
  switch (action.type) {
    case 'ADD_ENTRY':
      return [...state, action.entry];
    case 'UPDATE_ENTRY':
      return state.map(entry => {
        if (entry.id === action.id) {
          return Object.assign({}, entry, action.newData)
        } else {
          return entry;
        }
      });
    case 'REMOVE_ENTRY':
      return state.filter(entry => entry.id !== action.id);
    default:
      return state
  }
}

export default entries;
