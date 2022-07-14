import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import {NgModule} from '@angular/core'
import {FlexLayoutModule} from '@angular/flex-layout'
import {ReactiveFormsModule} from '@angular/forms'
import {BrowserModule} from '@angular/platform-browser'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {LoginComponent} from './login/login.component'
import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {AuthHttpInterceptor} from './auth/auth-http-interceptor'
import {InMemoryAuthService} from './auth/auth.inmemory.service'
import { SimpleDialogComponent } from './common/simple-dialog.component'
import {AuthService} from './auth/auth.service'
import {HomeComponent} from './home/home.component'
import {MaterialModule} from './material.module'
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component'
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
  ],
  providers: [
    {
      provide: AuthService,
      useClass: InMemoryAuthService,
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
