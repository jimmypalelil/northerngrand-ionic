import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {MatCheckboxModule, MatSelectModule, MatSnackBarModule, MatTableModule} from '@angular/material';
import {ListService} from './services/list.service';
import {AuthService} from './services/auth.service';
import {EnsureAuthenticatedService} from './services/ensure-authenticated.service';
import {LoginRedirectService} from './services/login-redirect.service';
import {InspectionService} from './services/inspection.service';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        MatTableModule,
        MatCheckboxModule,
        MatSelectModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        MDBBootstrapModule.forRoot()
    ],
    declarations: [AppComponent],
    entryComponents: [],
    providers: [
        ListService, AuthService, EnsureAuthenticatedService, LoginRedirectService, InspectionService,
        StatusBar,
        SplashScreen,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ],
    bootstrap: [AppComponent],
    schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule {}
