import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedUiTextInputComponent } from "./ui-text-input/ui-text-input.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ErrorMessagesPipe } from "./error-messages.pipe";
import { SharedUiSelectComponent } from "./ui-select/ui-select.component";
import { MatSelectModule } from "@angular/material/select";
import { SharedUiNumberInputComponent } from "./ui-number-input/ui-number-input.component";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  declarations: [
    SharedUiTextInputComponent,
    SharedUiSelectComponent,
    SharedUiNumberInputComponent,
    ErrorMessagesPipe
  ],
  exports: [
    SharedUiTextInputComponent,
    SharedUiSelectComponent,
    SharedUiNumberInputComponent
  ]
})
export class SharedModule {}
