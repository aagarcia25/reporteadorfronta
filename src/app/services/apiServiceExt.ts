import axios from 'axios';



export const post = async function (url: string, body: any, token: string) {

    try {
       console.log(process.env.REACT_APP_URL_LOGIN_BACK);
        let resp = await axios.post(
            process.env.REACT_APP_URL_LOGIN_BACK +"/api/"+ url,
            body,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                   
                }
            }

        );
        
        return resp;
    } catch (err: any) {
        return err.response
    }
};





export const get = async function (url: string, token: string) {

    try {
        let resp = await axios.get(
            process.env.REACT_APP_URL_LOGIN_BACK +"/api/"+ url,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                   
                }
            }

        );
        
        return resp;
    } catch (err: any) {
        return err.response
    }
};













