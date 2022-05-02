import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const createUser = async (email, password) => {
    await authenticate('signUp', email, password);
}

export const authenticate = async (mode, email, password) => {
    const url=`https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

    const response = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true
    });

    console.log(response.data);
}

export const login = async (email, password) => {
    await authenticate('signInWithPassword', email, password);
}