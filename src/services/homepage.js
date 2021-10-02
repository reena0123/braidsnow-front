import axios from '@/utils/common';

/*
|-------------------------------------------------------------------------------
| Top Rated braiders
|-------------------------------------------------------------------------------
*/
export const getTopBraider = async () => await axios.get(`homepage/top-braider`);
export const getService = async () => await axios.get(`homepage/service`);