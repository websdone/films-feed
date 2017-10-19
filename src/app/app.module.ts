import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { peopleComponent } from './people/people.component';
import { StarWarsComponent } from './star-wars/star-wars.component';
import { ApiFeed } from "./shared/api-feed.service";
// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyBUZsn4NI_9tznWehwU2bIPL3iHaoCiTKI",
  authDomain: "yoobic-ionic.firebaseapp.com",
  databaseURL: "https://yoobic-ionic.firebaseio.com",
  projectId: "yoobic-ionic",
  storageBucket: "yoobic-ionic.appspot.com",
  messagingSenderId: "399886968901"
};

@NgModule({
  declarations: [
    AppComponent,
    peopleComponent,
    StarWarsComponent,
  ],
  imports: [
    AngularFireAuthModule,
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    ApiFeed
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
