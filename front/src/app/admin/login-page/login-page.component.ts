import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {User} from '../../shared/interface'
import { AuthService } from '../shared/service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form:FormGroup


  constructor(
    public auth:AuthService,
    private router: Router
  ) { }


  ngOnInit(): void {

    this.form=new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    })
  }

  submit(){
    const user:User = {
      email: this.form.value.email,
      password: this.form.value.password,
      returnSecureToken:true 
    }
    this.auth.Login(user).subscribe(()=>{
      this.form.reset
      alert(`Добро пожаловать ${user.email}`)
      this.router.navigate(['/admin', 'dashboard'])
    })
  }



}
