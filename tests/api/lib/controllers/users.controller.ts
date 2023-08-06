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

    async updateUserInfo(idValue : number, avatarValue : string, emailValue : string, userNameValue : string, accessToken : string) {
        const response = await new ApiRequest()
            .prefixUrl("http://tasque.lol/")
            .method("PUT")
            .bearerToken(accessToken)
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
    async getUserFromToken(accessToken : string) {
        const response = await new ApiRequest()
            .prefixUrl("http://tasque.lol/")
            .bearerToken(accessToken)
            .method("GET")
            .url(`api/Users/fromToken`)
            .send();
        return response;
    }

    async getUserInfoFromID() {
        const response = await new ApiRequest()
            .prefixUrl("http://tasque.lol/")
            .method("GET")
            .url(`api/Users/1747`)         
            .send();
        return response;
    }

    async getUserInfoFromInvalidID() {
        const response = await new ApiRequest()
            .prefixUrl("http://tasque.lol/")
            .method("GET")
            .url(`api/Users/174717`)         
            .send();
        return response;
    }

    async getUserInfoFromInvalidIDType() {
        const response = await new ApiRequest()
            .prefixUrl("http://tasque.lol/")
            .method("GET")
            .url(`api/Users/1747172123213131321313213`)         
            .send();
        return response;
    }

    async deleteUserByID(accessToken : string,userID : string) {
        const response = await new ApiRequest()
            .prefixUrl("http://tasque.lol/")
            .method("DELETE")
            .bearerToken(accessToken)
            .url(`api/Users/`+userID)
            .body({
                
        })
            
            .send();
        return response;
    }

    async commentPost(accessToken : string, authorIdValue : number, postIdValue : number, bodyValue : string) {
        const response = await new ApiRequest()
            .prefixUrl("http://tasque.lol/")
            .method("POST")
            .bearerToken(accessToken)
            .url(`api/Comments`)
            .body({
                authorId: authorIdValue,
                postId: postIdValue,
                body: bodyValue
                
        })
            
            .send();
        return response;
    }

    async getAllPosts() {
        const response = await new ApiRequest()
            .prefixUrl("http://tasque.lol/")
            .method("GET")
            .url(`api/Posts`)
            .send();
        return response;
    }

    async createNewPost(accessToken : string, authorIdValue : number, previewImageValue : string, bodyValue : string) {
        const response = await new ApiRequest()
            .prefixUrl("http://tasque.lol/")
            .method("POST")
            .url(`api/Posts`)
            .bearerToken(accessToken)
            .body({  

                authorId: authorIdValue,
                previewImage: previewImageValue,
                body: bodyValue
        })
            
            .send();
        return response;
    }

    async addLikeReactionPost(accessToken : string, EntityIdValue : number, isLikeValue : boolean, userIdValue: number) {
        const response = await new ApiRequest()
            .prefixUrl("http://tasque.lol/")
            .method("POST")
            .url(`api/Posts/like`)
            .bearerToken(accessToken)
            .body({  

                EntityId: EntityIdValue,
                isLike: isLikeValue,
                userId : userIdValue
        })
            
            .send();
        return response;
    }
}