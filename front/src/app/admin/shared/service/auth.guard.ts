import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {Injectable} from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router, RouteReuseStrategy, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable()
export class AuthGuard implements CanActivate{

constructor(
  private auth:AuthService,
  private router:Router
){}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ): Observable<boolean> | Promise<boolean> | boolean {
              if (this.auth.isAutentificated()) {
                return true
              }
              else {
                this.auth.logout()
                this.router.navigate(['/admin', 'login'])
              }
      }
    
}