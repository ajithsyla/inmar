import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../core/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  email: string;
  model: any = {};

  constructor(private appConfigService: AppConfigService, private router : Router) {}

  ngOnInit(): void {
    this.email = this.appConfigService.apiEmail;
   // console.log( '>>',this.email)
  }
  
  public title = 'Inor';
  public login: boolean = true;
  public register: boolean;

  registration(){
    this.login = false;
    this.register = true;
  }

  logins(){
    this.login = true;
    this.register = false;
  }

  onSubmit() {
    let userEmail = this.model.email.split("@").pop();
     if(userEmail == this.email){
      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model.email));
      localStorage.setItem('userInfo', JSON.stringify(this.model));
      this.router.navigate(['/dashboard']);
     }else{
       alert('not in same domain');
      //  let retrievedObject = localStorage.getItem('userInfo');
      //  console.log('retrievedObject: ', JSON.parse(retrievedObject));
     }
    
  }

  logIn(){
    let retrievedObject = localStorage.getItem('userInfo');
    let userInfo = JSON.parse(retrievedObject);
    // console.log('retrievedObject: ', JSON.parse(userInfo), this.model);
    if(this.model.email == userInfo.email && this.model.password == userInfo.password){
      this.router.navigate(['/dashboard']);
    }
   }


}
