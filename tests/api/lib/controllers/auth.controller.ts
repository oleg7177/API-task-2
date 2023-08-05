import { ApiRequest } from "../request";

export class AuthController {
    async registration(idValue : number, avatarValue : string, emailValue : string, userNameValue : string, passwordValue : string ) {
        const response = await new ApiRequest()
            .prefixUrl("http://tasque.lol/")
            .method("POST")
            .url(`api/Register`)
            .body({
                
                    id: idValue,
                    avatar: avatarValue,
                    email: emailValue,
                    userName: userNameValue,
                    password: passwordValue
                  
            })
            .send();
        return response;
    }
    async login(emailValue: string, passwordValue: string) {
        const response = await new ApiRequest()
            .prefixUrl("http://tasque.lol/")
            .method("POST")
            .url(`api/Auth/login`)
            .body({
                email: emailValue,
                password: passwordValue,
            })
            .send();
        return response;
    }
}
