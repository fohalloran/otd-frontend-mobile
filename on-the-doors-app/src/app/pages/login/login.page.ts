import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, ) { }

  ngOnInit() {
  }

  login(){
    console.log("login")
    this.router.navigateByUrl('/tabs/events')


  }

  signup(){
    console.log("Sign up")
  }

}
