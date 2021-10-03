import axios from '@/utils/braiders';


/*
|-------------------------------------------------------------------------------
| get customers
|-------------------------------------------------------------------------------
*/
export const customer = async token => await axios(token).get(`customer/index`);