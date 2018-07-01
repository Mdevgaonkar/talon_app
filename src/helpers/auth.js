import React from "react";
import axios from 'axios';

let baseUrl = 'http://localhost:5000';

export const getAuth = async () => {
    let url = baseUrl + "/";
    return await requestGET(url);
    
}

export const authorize = async (code) => {
    let url = baseUrl + "/authorize?code=" + code;
    return await requestGET(url);
}

export const logout = async (history) => {
    let url = baseUrl + "/authorize/signout";
    await requestGET(url);
        history.replace({
            pathname: "/",
            state: {
                auth: false
            }
        });
}

const requestGET = async (url) => {
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


export const redirectToLogin = (history) => {
    return (
        <div>
      {
        history.push({
          pathname: "/",
          state: {
            auth: false
          }
        })
      }
      </div>
    )
}