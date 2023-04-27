/* eslint-disable @angular-eslint/component-selector */
import { Component, Input, OnInit } from "@angular/core";
import { AddressForm } from "./address-form";

@Component({
  selector: "address",
  templateUrl: "./address.component.html",
  styles: []
})
export class AddressComponent {
  @Input() form: AddressForm;
}
