import { ValidationErrors } from "@angular/forms";

export const validationMessages: ValidationErrors = {
  required: "Required",
  minlength: "Too Short",
  maxlength: "Too Long",
  pattern: "Forbidden Entry",
  email: "Invalid Entry",
  date: "Invalid Date"
};
