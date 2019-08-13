import { PaymentDetail } from './payment-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData: PaymentDetail;
  readonly rootUrl: 'http://localhost:51470/api'

  constructor(private http:HttpClient) { }


  postPaymentDetail(formData:PaymentDetail) {
  return this.http.post(this.rootUrl+'/Payments', formData)
  }
}