 import { NEW_FRIEND, GET_FRIENDS } from '../actions';

 export default (friends = [], action) => {
 	switch(action.type) {
 		case NEW_FRIEND:
 			return friends.concat(action.payload);
 		case GET_FRIENDS:
 			return action.payload.data;
 		default:
 			return friends;
 	}
 };