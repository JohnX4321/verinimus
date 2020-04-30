import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AddCardComponent } from './ui/add-card/add-card.component';
import { ErrorComponent } from './ui/error/error.component';
import { WeatherCardComponent } from './ui/weather-card/weather-card.component';
import { AddComponent } from './pages/add/add.component';
import { DetailsComponent } from './pages/details/details.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

import {HttpClientModule} from '@angular/common/http';
import {UiService} from './services/ui/ui.service';
import {WeatherService} from './services/weather/weather.service';
import {environment} from '../environments/environment';
//import {ServiceWorkerModule} from '@angular/service-worker'
import {FormsModule} from '@angular/forms';
import {NguiAutoCompleteModule} from '@ngui/auto-complete'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddCardComponent,
    ErrorComponent,
    WeatherCardComponent,
    AddComponent,
    DetailsComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NguiAutoCompleteModule,
    FormsModule,
    //ServiceWorkerModule.register('ngsw-worker.js',{enabled: environment.production})
  ],
  providers: [
    WeatherService,
    UiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
