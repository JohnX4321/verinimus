import {Injectable} from '@angular/core';
//import {AngularFireLiteAuth, AngularFireLiteFirestore} from 'angularfire-lite';
import {first, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FbService {

  constructor() {
  }

  isAuth() {
    return true;
  }

  signin(email, pass) {
    return true;
  }

  signup(email, pass) {
    return true;
  }


  getCities() {
    return []/*this.auth.uid().pipe(switchMap((uid) => {
      return this.fs.read(`${uid}`);
    }));*/
  }

  addCity(name: string) {
    /*return this.auth.uid()
      .pipe(switchMap((uid) => {
        return this.fs
          .write(`${uid}/${name}`, {name, added: new Date()})
          .pipe(first());
      }), first());*/
    return null
  }

}

