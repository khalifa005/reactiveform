import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Address, EgyptStates } from "./address";

export class AddressForm extends FormGroup {
  readonly addressLine1 = this.get('addressLine1') as FormControl;
  readonly city = this.get('city') as FormControl;
  readonly state = this.get('state') as FormControl;
  readonly zip = this.get('zip') as FormControl;

  constructor(readonly model: Address, readonly fb: FormBuilder = new FormBuilder()) {
      super(fb.group({
          addressLine1: [model?.addressLine1, Validators.required],
          city: [model?.city, Validators.required],
          state: [model?.state, Validators.required],
          zip: [model?.zip, [Validators.required, Validators.maxLength(5), Validators.minLength(5)]]
      }).controls);
  }

  stateOptions: EgyptStates[] = [
  "Tanta",
  "Cairo",
  "Alex", ];
}
