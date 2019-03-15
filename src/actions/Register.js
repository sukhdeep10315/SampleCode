import {post} from './BaseApi';
import {URLList} from "../config/URLs";

export const registration = userDetails => dispatch => { 
	let url = URLList.getRegistrationURL();
	return post(url,  userDetails )
		.then(res => dispatch({ type: "REGISTRATION", payload: res.data }))
		.catch(err => console.log("Error from Registration", err))
};
