export const addEntry = (entry) => ({
  type: 'ADD_ENTRY',
  entry
});


export const updateEntry = (id, newData) => ({
  type: 'UPDATE_ENTRY',
  id,
  newData
});

export const removeEntry = (id) => ({
  type: 'REMOVE_ENTRY',
  id
})
