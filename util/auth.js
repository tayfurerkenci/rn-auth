import axios from 'axios';
import apiKey from '../config/env';

const API_KEY = apiKey.REACT_APP_API_KEY;

export const authenticate = async (mode, email, password) => {
    const url=`https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

    const response = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true
    });

    const token = response.data.idToken;
    return token;
}

export const login = (email, password) => {
   return authenticate('signInWithPassword', email, password);
}

export const createUser = (email, password) => {
    return authenticate('signUp', email, password);
}