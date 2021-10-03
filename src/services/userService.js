import axios from '@/utils/braiders';

/*
|-------------------------------------------------------------------------------
| User Information
|-------------------------------------------------------------------------------
*/
export const UserInfo = async token => await axios(token).get(`user/info`);
/*
|-------------------------------------------------------------------------------
| Changed Password
|-------------------------------------------------------------------------------
*/
export const ChangePassword = async (token, data) => await axios(token).post(`user/change-password`,data);

/*
|-------------------------------------------------------------------------------
| Update Profile
|-------------------------------------------------------------------------------
*/
export const UpdateProfile = async (token, data) => await axios(token).post(`user/profile/update`,data);
