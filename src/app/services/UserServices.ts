import {   get, post } from "./apiServiceExt";



export class UserServices {


    public static  verify(data: any,token: string) {
        return  post('verify', data,token);
    }


    public static async userDetail(data: any,token: string) {
        return await post('user-detail', data,token);
    }

   
    
  
    





}
