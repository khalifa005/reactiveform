/* eslint-disable @angular-eslint/component-selector */
import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { validationMessages } from "../messages";

@Component({
  selector: "shared-ui-text",
  templateUrl: "./ui-text-input.component.html",
  styleUrls: ['./ui-text-input.componenet.scss'],

})
export class SharedUiTextInputComponent {
  @Input() label = "";
  @Input() control: FormControl;
  @Input() placeholder?: string;
  @Input() messages = validationMessages;
}
