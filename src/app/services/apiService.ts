import axios from 'axios';
import { env_var } from '../environments/env';

import { getFormDataHeader, getHeaderInfo, getHeaderInitial } from './tokenCreator';


/**
 * MANEJO AUTOMATICO DE PETICIONES
 * 
 * ADOLFO ANGEL GARCIA 10/08/2022
 */

const handleResponse = (response: any) => {
    let rs;
        rs = {
            RESPONSE: response.RESPONSE,
            SUCCESS: response.SUCCESS,
            NUMCODE: response.NUMCODE,
            STRMESSAGE: response.STRMESSAGE,
        }
    return rs;
}



export const post = async function (url: string, body: any) {
    let header = await getHeaderInfo();
    try {
        let resp = await axios.post(`${env_var.BASE_URL}` + url, body, header);


        return handleResponse(resp.data);
    } catch (err: any) {
        return handleResponse(err.response)
    }
};


export const get = async function (url: any, params: any = {}) {
    let header = await getHeaderInfo();
    try {
        let resp = await axios.get( 
            process.env.REACT_URL_REPORT_BACK + url,
             { ...header, params }
             );

        return handleResponse(resp.data);
    } catch (err: any) {
        return handleResponse(err.response)
    }
};








   






