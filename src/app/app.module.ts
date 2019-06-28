import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
// redux
import { AppState, rootReducer, INIT_STATE_VALUE, Action, } from './core/redux-store';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PrefixInterceptor } from './core/interceptors/prefix.interceptor';
import { SharedModule } from './shared/shared.module';
import { ErrorHandlerInterceptor } from './core/interceptors/error-handler.interceptor';
import { HttpService } from './core/services/http.service';
import { PreLoadModuleCustomer } from './preload-module-customer.strategy';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    IonicModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    NgReduxModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    PreLoadModuleCustomer,
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: PrefixInterceptor },
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: ErrorHandlerInterceptor },
    HttpService,
    Action,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<AppState>, devTools: DevToolsExtension) {
    ngRedux.configureStore(rootReducer, INIT_STATE_VALUE, [], devTools.isEnabled() ? [devTools.enhancer()] : []);
  }
}
