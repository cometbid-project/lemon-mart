import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import {NgModule} from '@angular/core'
import {initializeApp, provideFirebaseApp} from '@angular/fire/app'
import {getAuth, provideAuth} from '@angular/fire/auth'
import {AngularFireModule} from '@angular/fire/compat'
import {AngularFireAuthModule} from '@angular/fire/compat/auth'
import {FlexLayoutModule} from '@angular/flex-layout'
import {ReactiveFormsModule} from '@angular/forms'
import {BrowserModule} from '@angular/platform-browser'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import {environment} from '../environments/environment'
import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {AuthHttpInterceptor} from './auth/auth-http-interceptor'
import {FirebaseAuthService} from './auth/auth.firebase.service'
import {InMemoryAuthService} from './auth/auth.inmemory.service'
import {AuthService} from './auth/auth.service'
import {SimpleDialogComponent} from './common/simple-dialog.component'
import {HomeComponent} from './home/home.component'
import {LoginComponent} from './login/login.component'
import {MaterialModule} from './material.module'
import {NavigationMenuComponent} from './navigation-menu/navigation-menu.component'
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    SimpleDialogComponent,
    NavigationMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: [
    {
      provide: AuthService,
      useClass: FirebaseAuthService,
      // useClass: InMemoryAuthService,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  // entryComponents: [SimpleDialogComponent],
})
export class AppModule { }
