import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { currency, date } from '../../validators/validators';
import { Order } from './order';

export class OrderForm extends FormGroup {
  readonly id = this.get('id') as FormControl;
  readonly total = this.get('total') as FormControl;
  readonly date = this.get('date') as FormControl;

  constructor(
    readonly order: Order,
    readonly fb: FormBuilder = new FormBuilder()
  ) {
    super(
      fb.group({
        id: [order.id, Validators.required],
        total: [order.total, [Validators.required, currency]],
        date: [
          order.date.getMonth() +
            1 +
            '/' +
            order.date.getDate() +
            '/' +
            order.date.getFullYear(),
          [Validators.required]
        ]
      }).controls
    );
  }
}
