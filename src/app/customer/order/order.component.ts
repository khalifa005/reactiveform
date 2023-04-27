/* eslint-disable @angular-eslint/component-selector */
import { Component, Input, OnInit } from "@angular/core";
import { OrderForm } from "./order-form";

@Component({
  selector: "order",
  templateUrl: "./order.component.html",
  styles: []
})
export class OrderComponent {
  @Input() form: OrderForm;
}
