import { post, } from "./apiService";

export class configServices {




    public static getMenusindex(data: any) {
        return post('menusindex', data);
    }
   

    

}