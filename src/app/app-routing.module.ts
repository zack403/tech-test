import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/home/home.module').then(m => m.HomeModule) 
  },
  {
    path: 'credit-card-payment-details',
    loadChildren: () => import('src/app/credit-card-payment-details/credit-card-payment-details.module').then(m => m.CreditCardPaymentDetailsModule) 
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
