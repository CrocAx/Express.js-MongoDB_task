import axios from 'axios';

const BASE_URL = 'http://localhost:3000'; // Update with your backend URL

// Function to retrieve contacts from the backend based on a query
export async function getContacts(query) {
    const response = await axios.get(`${BASE_URL}/contacts`, {
      params: { query }
    });
    return response.data;
}

// Function to create a new contact
export async function createContact() {
  const response = await axios.post(`${BASE_URL}/contacts`);
  return response.data;
}

// Function to retrieve a specific contact by ID
export async function getContact(id) {
    const response = await axios.get(`${BASE_URL}/contacts/${id}`);
    return response.data;
}

// Function to update an existing contact with new information
export async function updateContact(id, updates) {
    const response = await axios.put(`${BASE_URL}/contacts/${id}`, updates);
    return response.data;
}

// Function to delete a contact by ID
export async function deleteContact(id) {
    await axios.delete(`${BASE_URL}/contacts/${id}`);
    return true;
}
