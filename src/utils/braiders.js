import axios from 'axios';
import BaseUrl from './BaseUrl';

console.log(localStorage.getItem('api_token'));
const AuthHeader = {
	'Content-Type': 'application/json',
	'Accept': 'application/json',
	'Authorization': `Bearer ${localStorage.getItem('api_token')}`
};

export default axios.create({
	baseURL: `${BaseUrl}api/braider/`,
	headers: AuthHeader
});

