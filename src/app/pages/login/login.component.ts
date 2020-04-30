import { Component, OnInit } from '@angular/core';
import {FbService} from '../../services/fb/fb.service';
import {first, tap} from 'rxjs/operators';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage = '';
  constructor(public fb: FbService, public router: Router) {
  }

  ngOnInit() {
  }

  login(e) {
    //this.fb.signin(e.target.email.value, e.target.password.value).subscribe(() => {
      this.router.navigateByUrl('');
   // },(err) => {
     // this.errorMessage = err;
     // setTimeout(() => this.errorMessage = '', 2000);
    //});
  }


}
