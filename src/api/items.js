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

// patch items

// delete items