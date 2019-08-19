import { PaymentDetail } from './payment-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData: PaymentDetail;
  readonly rootUrl = 'http://localhost:51470/api';
  list: PaymentDetail[];

  constructor(private http: HttpClient) { }

  postPaymentDetail() {
    return this.http.post(this.rootUrl + '/Payments', this.formData);
  }

  putPaymentDetail() {
    return this.http.put(this.rootUrl + '/Payments/' + this.formData.PMId, this.formData );
  }

  deletePaymentDetail(id) {
    return this.http.delete(this.rootUrl + '/Payments/' + id );
  }

  refreshList() {
    this.http.get(this.rootUrl + '/Payments')
    .toPromise()
    .then(res => this.list = res as PaymentDetail[]);
  }

}
