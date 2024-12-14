import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/player';

export const getPlayers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching players:', error);
    throw error;
  }
};

export const getPlayerByName = async (name) => {
  try {
    const response = await axios.get(`${API_URL}?name=${name}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching player:', error);
    throw error;
  }
};

export const addPlayer = async (player) => {
  try {
    const response = await axios.post(API_URL, player);
    return response.data;
  } catch (error) {
    console.error('Error adding player:', error);
    throw error;
  }
};

export const updatePlayer = async (player) => {
  try {
    const response = await axios.put(API_URL, player);
    return response.data;
  } catch (error) {
    console.error('Error updating player:', error);
    throw error;
  }
};

export const deletePlayer = async (name) => {
  try {
    await axios.delete(`${API_URL}/${name}`);
  } catch (error) {
    console.error('Error deleting player:', error);
    throw error;
  }
};

