 import axios from 'axios';

 export const NEW_FRIEND = "NEW_FRIEND";
 export const GET_FRIENDS = "GET_FRIENDS";

 export const addFriend = (friend) => {
 	return {
 		type: NEW_FRIEND,
 		payload: friend
 	};
 };

 export const getFriends = () => {
 	const apiUrl = 'http://localhost:5000/friends';
 	const friendsRequest = axios.get(apiUrl);

 	return {
 		type: GET_FRIENDS,
 		payload: friendsRequest
 	};
 };