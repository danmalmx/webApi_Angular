import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from './../../shared/payment-detail.model';
import { PaymentDetailService } from './../../shared/payment-detail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styles: []
})
export class PaymentDetailListComponent implements OnInit {

  constructor(public service: PaymentDetailService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(pd: PaymentDetail) {
    this.service.formData = Object.assign({}, pd);
  }

  onDelete(PMId){
    if(confirm('Are you sure you want to delete this record')) {
      this.service.deletePaymentDetail(PMId)
      .subscribe(res=> {
        this.service.refreshList();
        this.toastr.warning('Deleted succefully', 'Payment Detail Deleted');
      },
        err => {
          console.log(err);
        });
    }
  }

}
