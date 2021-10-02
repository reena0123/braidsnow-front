import axios from '@/utils/braiders';


/*
|-------------------------------------------------------------------------------
| get customers
|-------------------------------------------------------------------------------
*/
export const customer = async() => await axios.get(`customer/index`);