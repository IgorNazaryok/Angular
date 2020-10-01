import {Injectable} from '@angular/core'
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { User, AuthRespons } from '../../../shared/interface'
import { Observable, Subject, throwError } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'


import {environment} from '../../../../environments/environment'

@Injectable({providedIn: 'root'})
export class AuthService{
    public error$: Subject<string>=new Subject<string>()

    constructor(private httpClient: HttpClient){}

    get token(): string {
    const expDate = new Date(localStorage.getItem('fb-token'))
/*     if(new Date()> expDate){
        this.logout()
        return null
    } */
    return localStorage.getItem('fb-token')
    }

    Login(user:User):Observable<any>
    {
       // return this.httpClient.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`,user)
        return this.httpClient.post(`https://localhost:5001/Account`,user)
        .pipe(
           tap(this.setToken),
           catchError(this.handleError.bind(this)) 
        )
    }
    logout()
    {
        this.setToken(null)
    }
    isAutentificated(): boolean {
        return !!this.token
    }

    private handleError (err: HttpErrorResponse) {
        this.error$.next(err.error.errorText)
         return throwError(err)
        
    }

    // private setToken(res:AuthRespons|null){
    private setToken(res){        
      if(res){
        const expDate = new Date(new Date().getTime())
        localStorage.setItem('fb-token', res.access_token)
        localStorage.setItem('fb-token-exp', expDate.toString())
       }
       else localStorage.clear()
        
    }
}