import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  currentUser = {
    email: '',
    password: ''
  };

  constructor(private route: Router, public ngFireAuth: AngularFireAuth) {
    

   }

  ngOnInit() {
  }

  async homeNav(){
    const user = await this.ngFireAuth.signInWithEmailAndPassword(this.currentUser.email, this.currentUser.password);
    if(user.user.email){
      this.route.navigate(['home']);
    }
    else{
      alert("Invalid Credentials");
    }
  }


  async signUpNav(){
    const user = this.ngFireAuth.createUserWithEmailAndPassword(this.currentUser.email, this.currentUser.password);

    if((await user).user.email){
      alert("Account Created");
      this.route.navigate(['home']);
    }
    else{
      alert("Invalid Credentials");
    }

    console.log(user);
    
  }


}
