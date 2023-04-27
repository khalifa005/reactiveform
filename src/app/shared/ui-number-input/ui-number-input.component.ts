/* eslint-disable @angular-eslint/component-selector */
import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { validationMessages } from "../messages";

@Component({
  selector: "shared-ui-number",
  templateUrl: "./ui-number-input.component.html",
  styleUrls: ['./ui-number-input.component.scss'],
})
export class SharedUiNumberInputComponent {
  @Input() label = "";
  @Input() control: FormControl;
  @Input() placeholder?: string;
  @Input() messages = validationMessages;
}
