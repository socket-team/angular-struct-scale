import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreLoadModuleCustomer } from './preload-module-customer.strategy';

const routes: Routes = [
   { path: '', loadChildren: './modules/app/app.module#AppModule' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreLoadModuleCustomer }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
