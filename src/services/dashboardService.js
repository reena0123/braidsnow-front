import axios from '@/utils/braiders';

/*
|-------------------------------------------------------------------------------
| Get All Appointment
|-------------------------------------------------------------------------------
*/
export const getAllAppointment = async () => await axios.get(`appointment/get-all`);
/*
|-------------------------------------------------------------------------------
| Today Appointment
|-------------------------------------------------------------------------------
*/
export const todayAppointment = async () => await axios.get(`appointment/today`);
/*
|-------------------------------------------------------------------------------
| Upcoming Appointment
|-------------------------------------------------------------------------------
*/
export const upcomingAppointment = async () => await axios.get(`appointment/upcoming`);
/*
|-------------------------------------------------------------------------------
| Total Customer
|-------------------------------------------------------------------------------
*/
export const totalCustomer = async () => await axios.get(`appointment/total-customer`);
/*
|-------------------------------------------------------------------------------
| New Customer
|-------------------------------------------------------------------------------
*/
export const newCustomer = async () => await axios.get(`appointment/new-customer`);
/*
|-------------------------------------------------------------------------------
| Total Appointment
|-------------------------------------------------------------------------------
*/
export const totalAppointment = async () => await axios.get(`appointment/total-appointment`);