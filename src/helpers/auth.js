import axios from 'axios';


export const getAuth = async () => {
    let url = "http://localhost:5000/";
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