import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username: string;
  private password: string;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    let success = this.loginService.login(this.username, this.password);
    if (success) {
      this.router.navigate(['dashboard']);
    } else {
      alert('you dumb.');
    }
  }

}
