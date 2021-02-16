import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ApiService, PaymentService, ToasterService} from './services';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  providers: [
    ApiService,
    PaymentService,
    ToasterService
  ],
  declarations: [],
  imports: [
    CommonModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      progressBar: true
    }),
  ]
})
export class CoreModule { }
