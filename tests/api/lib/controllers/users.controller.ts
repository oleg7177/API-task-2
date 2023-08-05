import { ApiRequest } from "../request";

export class UsersController {
    async getAllUsers() {
        const response = await new ApiRequest()
            .prefixUrl("http://tasque.lol/")
            .method("GET")
            .url(`api/Users`)
            .send();
        return response;
    }

    async getUserById(id) {
        const response = await new ApiRequest()
            .prefixUrl("http://tasque.lol/")
            .method("GET")
            .url(`api/Users/${id}`)
            .send();
        return response;
    }
   
    async updateUser(userData: object, accessToken: string) {
        const response = await new ApiRequest()
            .prefixUrl("http://tasque.lol/")
            .method("PUT")
            .url(`api/Users`)
            .body(userData)
            .bearerToken(accessToken)
            .send();
        return response;
    }

    async updateUserInfo(idValue : number, avatarValue : string, emailValue : string, userNameValue : string) {
        const response = await new ApiRequest()
            .prefixUrl("http://tasque.lol/")
            .method("PUT")
            .url(`api/Users`)
            .body({
                
                id: idValue,
                avatar: avatarValue,
                email: emailValue,
                userName: userNameValue,
                
              
        })
            
            .send();
        return response;
    }
    async getUserFromToken(idValue : number, avatarValue : string, emailValue : string, userNameValue : string) {
        const response = await new ApiRequest()
            .prefixUrl("http://tasque.lol/")
            .method("GET")
            .url(`api/Users/fromToken`)
            .body({
                
                id: idValue,
                avatar: avatarValue,
                email: emailValue,
                userName: userNameValue,
                
              
        })
            .send();
        return response;
    }

    async getUserInfoFromID() {
        const response = await new ApiRequest()
            .prefixUrl("http://tasque.lol/")
            .method("GET")
            .url(`api/Users/1745`)
            .body({
              
        })
            
            .send();
        return response;
    }

    async deleteUserByID() {
        const response = await new ApiRequest()
            .prefixUrl("http://tasque.lol/")
            .method("DELETE")
            .url(`api/Users/1746`)
            .body({
                
        })
            
            .send();
        return response;
    }
}