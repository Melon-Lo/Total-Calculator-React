import axios from 'axios'
const baseUrl = 'http://localhost:3001'

// get items
export const getItems = async () => {
  try {
    const res = await axios.get(`${baseUrl}/items`)
    return res.data
  } catch (error) {
    console.error('[Get items failed]: ', error)
  }
}

// create items
export const createItem = async (payload) => {
  const { name, price, amount } = payload
  try {
    const res = await axios.post(`${baseUrl}/items`, {
      name,
      price,
      amount,
    })
    return res.data
  } catch (error) {
    console.error('[Create item failed]: ', error)
  }
}

// patch items
export const patchItem = async (payload) => {
  const { id, name, price, amount } = payload
  try {
    const res = await axios.patch(`${baseUrl}/items/${id}`, {
      name,
      price,
      amount
    })
    return res.data
  } catch (error) {
    console.error('[Patch item failed]: ', error)
  }
}

// delete items
export const deleteItem = async (id) => {
  try {
    const res = await axios.delete(`${baseUrl}/items/${id}`)
    return res.data
  } catch (error) {
    console.error('[Delete item failed]: ', error)
  }
}