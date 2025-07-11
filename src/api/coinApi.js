import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchCoins = () => axios.get(`${BASE_URL}/coins`);
export const fetchAllHistory = () => axios.get(`${BASE_URL}/history`);

export const fetchHistoryByCoinId = (coinId) =>
  axios.get(`${BASE_URL}/history/${coinId}`);
