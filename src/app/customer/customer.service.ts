import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from './customer';

const customer = {
  firstName: 'Baker',
  lastName: 'Mayfield',
  email: 'em@il.com',
  address: {
    addressLine1: '123 Main St',
    city: 'Cleveland',
    state: 'Tanta',
    zip: 12345
  },
  orders: [
    {
      id: 1,
      total: 100,
      date: new Date()
    }
  ]
} as Customer;

@Injectable({ providedIn: 'root' })
export class CustomerService {
  constructor(private readonly http: HttpClient) {}

  getCustomer(): Observable<Customer> {
    return of(customer);
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    console.log(customer);
    return of(customer);
  }
}
