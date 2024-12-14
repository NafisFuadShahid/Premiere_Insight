import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/player'; // Adjust if the backend is on a different port

export const getPlayers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getPlayerByName = async (name) => {
  const response = await axios.get(`${API_URL}?name=${name}`);
  return response.data;
};

export const addPlayer = async (player) => {
  const response = await axios.post(API_URL, player);
  return response.data;
};

export const updatePlayer = async (player) => {
  const response = await axios.put(API_URL, player);
  return response.data;
};

export const deletePlayer = async (name) => {
  await axios.delete(`${API_URL}/${name}`);
};
