import axios from 'axios';


let baseUrl = 'http://localhost:5000';

export const getAuth = async () => {
    let url = baseUrl+"/";
    try {
        const auth_obj = await axios(url, {
            method: 'GET',
            // mode: 'no-cors',
            // headers: {
            //   'Access-Control-Allow-Origin': '*',
            //   'Content-Type': 'application/json',
            // },
            withCredentials: true,
            credentials: 'include'
        });
        return auth_obj.data;
        
    } catch (error) {
        console.log('ERROR', error);
        return {
            auth: "error",
        };

    }
}

export const authorize = async (code) => {
    let url = baseUrl+"/authorize?code="+code;
    try {
        const auth_obj = await axios(url, {
            method: 'GET',
            // mode: 'no-cors',
            // headers: {
            //   'Access-Control-Allow-Origin': '*',
            //   'Content-Type': 'application/json',
            // },
            withCredentials: true,
            credentials: 'include'
        });
        return auth_obj.data;
        
    } catch (error) {
        console.log('ERROR', error);
        return {
            auth: "error",
        };

    }
}