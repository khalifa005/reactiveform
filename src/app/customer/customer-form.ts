import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { AddressForm } from "./address/address-form";
import { Customer } from "./customer";
import { OrderForm } from "./order/order-form";

export class CustomerForm extends FormGroup {
  readonly firstName = this.get("firstName") as FormControl;
  readonly lastName = this.get("lastName") as FormControl;
  email: FormControl | null;

  get Address(): AddressForm {
    return this.controls["address"] as AddressForm;
  }

  get Orders(): OrderForm[] {
    return (this.controls["orders"] as FormArray).controls as OrderForm[];
  }

  constructor(
    private readonly customer: Customer,
    private readonly fb: FormBuilder = new FormBuilder()
  ) {
    super(
      fb.group({
        firstName: [customer.firstName, Validators.required],
        lastName: [customer.lastName, Validators.required],
        address: new AddressForm(customer.address, fb),
        orders: fb.array([])
      }).controls
    );

    customer.orders.map(order => this.Orders.push(new OrderForm(order)));
  }
}
