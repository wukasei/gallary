import axios from 'axios';

const BASE_URL = 'https://69c13897085e1a9fae406ffd.mockapi.io/inventory'; 

export const inventoryApi = {
  getInventory: () => axios.get(BASE_URL),
  
  deleteItem: (id) => axios.delete(`${BASE_URL}/${id}`),
  
  createItem: (data) => axios.post(BASE_URL, data)
}; 