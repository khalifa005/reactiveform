/* eslint-disable @angular-eslint/component-selector */
import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { validationMessages } from "../messages";

@Component({
  selector: "shared-ui-select",
  templateUrl: "./ui-select.component.html",
  styleUrls: ['./ui-select.component.css'],

})
export class SharedUiSelectComponent {
  @Input() label = "";
  @Input() control: FormControl;
  @Input() options: string[] = [];
  @Input() messages = validationMessages;
  @Input() placeholder?: string;
}
