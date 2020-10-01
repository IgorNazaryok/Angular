export interface User {
    email: string
    password: string
    returnSecureToken:boolean 
}

export interface AuthRespons {
    idToken:string
    expiresIn:string
}

export interface Post {
    id?:string
    title:string
    text:string
    author:string
    date:string 
}

export interface PostCreateError {
       Author: Array<string>
       Title: Array<string>
       Text:  Array<string>
}