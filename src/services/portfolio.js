import axios from '@/utils/braiders';

/*
|-------------------------------------------------------------------------------
| store portfolio
|-------------------------------------------------------------------------------
*/
export const storePortfolio = async (token, data) => await axios(token).post(`portfolio/store`, data);

/*
|-------------------------------------------------------------------------------
| get portfolio
|-------------------------------------------------------------------------------
*/
export const getPortfolio = async token => await axios(token).post(`portfolio/index`);