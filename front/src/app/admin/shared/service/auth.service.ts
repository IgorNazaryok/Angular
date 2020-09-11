import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import { User } from '../../../shared/interface'
import { Observable } from 'rxjs'

@Injectable()
export class AuthService{
    constructor(private httpClient: HttpClient){}

    get token(): string {
    return ''
    }

    Login(user:User):Observable<any>
    {
        return this.httpClient.post('',user)
    }
    logout()
    {

    }
    isAutentificated(): boolean {
        return !!this.token
    }

    private setToken(){

    }
}