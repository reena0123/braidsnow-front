import axios from '@/utils/braiders';

/*
|-------------------------------------------------------------------------------
| store portfolio
|-------------------------------------------------------------------------------
*/
export const storePortfolio = async data => await axios.post(`portfolio/store`, data);

/*
|-------------------------------------------------------------------------------
| get portfolio
|-------------------------------------------------------------------------------
*/
export const getPortfolio = async() => await axios.post(`portfolio/index`);