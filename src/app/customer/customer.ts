import { Address } from "./address/address";
import { Order } from "./order/order";

export interface Customer {
  firstName: string;
  lastName: string;
  email: string;
  address: Address;
  orders: Order[];
}
