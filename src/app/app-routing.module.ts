import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { preLoadModuleCustomer } from './preload-module-customer.strategy';

const routes: Routes = [];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { preloadingStrategy: preLoadModuleCustomer }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
