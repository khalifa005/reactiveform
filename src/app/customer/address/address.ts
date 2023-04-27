export type EgyptStates =
  | "Tanta"
  | "Cairo"
  | "Alex";

export interface Address {
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: EgyptStates;
  zip: number;
}
