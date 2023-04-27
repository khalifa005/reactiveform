/* eslint-disable @angular-eslint/component-selector */
import { Component, Input, OnInit } from '@angular/core';
import { debounceTime, filter, take } from 'rxjs/operators';
import { Customer } from './customer';
import { CustomerForm } from './customer-form';
import { CustomerService } from './customer.service';
import { Order } from './order/order';
import { OrderForm } from './order/order-form';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styles: []
})
export class CustomerComponent implements OnInit {
  form: CustomerForm;

  constructor(private readonly customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService
      .getCustomer()
      .pipe(take(1))
      .subscribe(customer => (this.form = new CustomerForm(customer)));

    this.form.valueChanges
      .pipe(
        filter(() => this.form.valid),
        debounceTime(2000)
      )
      .subscribe(values => this.handleForm(values));
  }

  submit(): void {
    if (this.form.valid) {
      this.handleForm(this.form);
    }
  }

  handleForm(form: CustomerForm): void {
    this.customerService.saveCustomer(this.mapFormToCustomer(form));
  }

  private mapFormToCustomer(form: CustomerForm): Customer {
    return {
      ...form.value,
      orders: this.mapOrders(form.Orders)
    } as Customer;
  }

  private mapOrders(form: OrderForm[]): Order[] {
    return form.map(order => ({
      ...order.value
    }));
  }
}
