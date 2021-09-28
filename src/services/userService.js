import axios from '@/utils/braiders';

/*
|-------------------------------------------------------------------------------
| User Information
|-------------------------------------------------------------------------------
*/
export const UserInfo = async () => await axios.get(`user/info`);
/*
|-------------------------------------------------------------------------------
| Changed Password
|-------------------------------------------------------------------------------
*/
export const ChangePassword = async data => await axios.post(`user/change-password`,data);