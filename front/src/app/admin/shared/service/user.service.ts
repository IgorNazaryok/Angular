import {Injectable} from '@angular/core'
import {HttpClient, HttpHeaders, HttpInterceptor} from '@angular/common/http'
import { User, AuthRespons } from '../../../shared/interface'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'


import {environment} from '../../../../environments/environment'

@Injectable()
export class UserService {
    constructor(private httpClient: HttpClient){}   
  

    GetUsers():Observable<any>
    {
        const myHeaders = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('fb-token')}`);
        return this.httpClient.get(`https://localhost:5001/users`, {headers:myHeaders})
        .pipe(
           tap(this.getUsers) 
        )
    }


    private getUsers(res:any){
        console.log(res);
    }
}