import { Component,OnInit,OnDestroy } from '@angular/core';
import {UiService} from './services/ui/ui.service';
import {FbService} from './services/fb/fb.service';
import {take} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'Minimus';
  showMenu = false;
  darkModeActive: boolean;

  userEmail = '';

  constructor(public ui: UiService, public fb: FbService, public router: Router) {
  }
  loggedIn= true; //this.fb.isAuth();
  subl;

  ngOnInit(): void {
    this.subl=this.ui.darkModeState.subscribe((value => {
      this.darkModeActive=value;
    }));

    /*this.fb.auth.userData().subscribe((user)=>{
      this.userEmail=user.email;
    });*/



  }

  toggleMenu() {
    this.showMenu=!this.showMenu;
  }

  modeToggleSwitch() {
    this.ui.darkModeState.next(!this.darkModeActive);
  }


  ngOnDestroy(): void {
    this.subl.unsubscribe();
  }

  logout() {
    this.toggleMenu();
    this.router.navigateByUrl('/login');
    //this.fb.auth.signout();
  }

}
