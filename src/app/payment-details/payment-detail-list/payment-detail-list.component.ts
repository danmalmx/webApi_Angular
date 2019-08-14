import { PaymentDetailService } from './../../shared/payment-detail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styles: []
})
export class PaymentDetailListComponent implements OnInit {

  constructor(private service: PaymentDetailService) { }

  ngOnInit() {
    this.service.refreshList();
  }

}
