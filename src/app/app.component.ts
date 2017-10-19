import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Star Wars Api ->' ;
  public isNavbarCollapsed = true;
  user: Observable<firebase.User>

  //Property for child component one
  peopleName = 'Indian City Names';
  cityArray = ['Varanasi', 'Delhi', 'Mumbai'];
  stdAddMsg = 'Add Student';

  constructor(private afAuth: AngularFireAuth) {
    this.user = this.afAuth.authState
  }
  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .catch(function (error){
        alert('${error.message} Please try again')
      })
  }
  loginFacebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .catch(function (error){
        alert('${error.message} Please try again')
      })
  }
  logout() {
    this.afAuth.auth.signOut();
  }


}
