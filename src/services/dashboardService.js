import axios from '@/utils/braiders';

/*
|-------------------------------------------------------------------------------
| Get All Appointment
|-------------------------------------------------------------------------------
*/
export const getAllAppointment = async token => await axios(token).get(`appointment/get-all`);
/*
|-------------------------------------------------------------------------------
| Today Appointment
|-------------------------------------------------------------------------------
*/
export const todayAppointment = async token => await axios(token).get(`appointment/today`);
/*
|-------------------------------------------------------------------------------
| Upcoming Appointment
|-------------------------------------------------------------------------------
*/
export const upcomingAppointment = async token => await axios(token).get(`appointment/upcoming`);
/*
|-------------------------------------------------------------------------------
| Total Customer
|-------------------------------------------------------------------------------
*/
export const totalCustomer = async token => await axios(token).get(`appointment/total-customer`);
/*
|-------------------------------------------------------------------------------
| New Customer
|-------------------------------------------------------------------------------
*/
export const newCustomer = async token => await axios(token).get(`appointment/new-customer`);
/*
|-------------------------------------------------------------------------------
| Total Appointment
|-------------------------------------------------------------------------------
*/
export const totalAppointment = async token => await axios(token).get(`appointment/total-appointment`);