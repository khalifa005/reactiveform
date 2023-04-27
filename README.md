# Reactiveform

# An Introduction to Forms in Angular

Reactive forms are one of two approaches to building forms provided by Angular. Both of these approaches process and manage your form data differently and therefore both have their own unique tradeoffs. For very simple solutions, that do not require reusability, Template-driven forms are an excellent option. This is particularly true for teams with not a lot of form or reactive experience. In most other use-cases the benefits of using Reactive forms really begin to shine; especially as your application scales.


# Getting Started
 The first step to using Reactive forms is to import the ReactiveFormsModule into our module. In most use cases you will add it to your app's root:

```ruby
import { ReactiveFormsModule } from '@angular/forms';

    @NgModule({
        imports: [
            // all your other imports,
            ReactiveFormsModule
        ]
    })
    export class AppModule { }
```

Before we begin building our own form, it's a good time to explain the three main types of form components in Angular forms. It's a good idea to make yourself familiar with these three as you will be using all of them quite frequently.

1. FormControls: Are the individual controls of a form that keep track of value and validity.
2. FormGroup: Is a collection of controls that keep track of value and validity.
3. FormArrays: Are an array or list of controls that keep track of value and validity

### let's build out a form that will collect a user's address:


```ruby
export class AppComponent {
        form = new FormGroup({
            addressLine1: new FormControl(null, Validators.required),
            city: new FormControl(),
            state: new FormControl('Tanta'),
            zip: new FormControl(null, [Validators.required, Validators.maxLength(5), Validators.minLength(5)])
        });
    }
```

FormControl is a class that extends an abstract class of AbstractControl. It takes in three optional parameters into its constructor: formState, validatorOrOpts or asyncValidator. Let's look at each one of these properties individually.

### formState

The first property passed into a FormControl is called formState. This is an optional property of type any (unfortunately). Therefore, if you pass it nothing or null it will create a new FormControl with no initial value. In fact, whatever you pass it formState will become its initial value. So we could pass addressLine1 an initial value like new FormControl('123 Main Street') and when the page loads that value will pre-populate in the addressLine1 field with the street name of the 123 Main Street.

### validatorOrOpts

The Ultimate Guide To Angular Reactive Forms
The Ultimate Guide To Angular Reactive Forms
by Jordan Powell in Angular / Forms / Reactive / Frontend
Forms are an essential part of enterprise applications. No matter the problem you're solving, or the solution you're providing, you will inevitably need to collect form data. Though the collecting of such data may seem simple to stakeholders the reality is forms can quickly add a painful level of complexity to our applications. In this article, I will share my favorite approach to tackling form complexity using Angular's Reactive Forms. There are endless ways to build forms in your Angular applications and this article will focus on the approach I've found to be the most scalable, reusable, and maintainable from real-world enterprise experience.

An Introduction to Forms in Angular
Reactive forms are one of two approaches to building forms provided by Angular. Both of these approaches process and manage your form data differently and therefore both have their own unique tradeoffs. For very simple solutions, that do not require reusability, Template-driven forms are an excellent option. This is particularly true for teams with not a lot of form or reactive experience. In most other use-cases the benefits of using Reactive forms really begin to shine; especially as your application scales.

Overview of Reactive Forms
The Angular documentation states: "Reactive forms use an explicit and immutable approach to managing the state of a form at a given point in time. Each change to the form state returns a new state, which maintains the integrity of the model between changes. Reactive forms are built around observable streams, where form inputs and values are provided as streams of input values, which can be accessed synchronously." In essence, Reactive forms provide easier and more predictable access to form state because they are built around observable streams. Therefore, we get the power and benefits of RxJs operators to update and manage form state exactly when and where we want to. Also, unlike template-driven forms which use directives in the template, the composition, and management of the form is moved out of the template and into the class itself providing the ability for more reusability.

Getting Started
Enough hypothetical talk; let's get our hands dirty and code up an example form using Reactive forms. The first step to using Reactive forms is to import the ReactiveFormsModule into our module. In most use cases you will add it to your app's root:

import { ReactiveFormsModule } from '@angular/forms';

    @NgModule({
        imports: [
            // all your other imports,
            ReactiveFormsModule
        ]
    })
    export class AppModule { }
import { ReactiveFormsModule } from '@angular/forms';
​
    @NgModule({
        imports: [
            // all your other imports,
            ReactiveFormsModule
        ]
    })
    export class AppModule { }
Before we begin building our own form, it's a good time to explain the three main types of form components in Angular forms. It's a good idea to make yourself familiar with these three as you will be using all of them quite frequently.



FormControls: Are the individual controls of a form that keep track of value and validity.
FormGroup: Is a collection of controls that keep track of value and validity.
FormArrays: Are an array or list of controls that keep track of value and validity.


In every enterprise company I've worked with, they've had a business need to collect an address of some sort. So let's build out a form that will collect a user's address:

export class AppComponent {
        form = new FormGroup({
            addressLine1: new FormControl(),
            city: new FormControl(),
            state: new FormControl(),
            zip: new FormControl()
        });
    }
export class AppComponent {
        form = new FormGroup({
            addressLine1: new FormControl(),
            city: new FormControl(),
            state: new FormControl(),
            zip: new FormControl()
        });
    }
This example creates a parent level form or FormGroup that contains individual controls or FormControls for the individual address fields we need to collect from the user. As-is it has no default values or validation attached, so let's change that:

export class AppComponent {
        form = new FormGroup({
            addressLine1: new FormControl(null, Validators.required),
            city: new FormControl(),
            state: new FormControl('Ohio'),
            zip: new FormControl(null, [Validators.required, Validators.maxLength(5), Validators.minLength(5)])
        });
    }
export class AppComponent {
        form = new FormGroup({
            addressLine1: new FormControl(null, Validators.required),
            city: new FormControl(),
            state: new FormControl('Ohio'),
            zip: new FormControl(null, [Validators.required, Validators.maxLength(5), Validators.minLength(5)])
        });
    }
Now we have an example of creating an empty control with no state or validations, a control with no state and one validation, a control with a default value and no validations and a control with no value and multiple validations. It may seem a little confusing so let me break down for you a little bit more.



FormControl is a class that extends an abstract class of AbstractControl. It takes in three optional parameters into its constructor: formState, validatorOrOpts or asyncValidator. Let's look at each one of these properties individually.

formState
The first property passed into a FormControl is called formState. This is an optional property of type any (unfortunately). Therefore, if you pass it nothing or null it will create a new FormControl with no initial value. In fact, whatever you pass it formState will become its initial value. So we could pass addressLine1 an initial value like new FormControl('123 Main Street') and when the page loads that value will pre-populate in the addressLine1 field with the street name of the 123 Main Street.

validatorOrOpts
The second property passed into a FormControl is called validatorOrOpts. This is an optional property of type ValidatorFn | AbstractControlOptions | validatorFn[]. This will be used to declare specific control options such as updateOn or synchronous control validations. ValidatorFn is essentially just a function that takes an AbstractControl and returns either a map of ValidationErrors or null. The beautiful thing about validations in Angular is that they can be anything that returns a ValidatorFn. For most use cases you will be able to use one or more of the built-in validators provided for you in the @angular/forms package. Below is a list of those provided to you for free by Angular Validators:


```ruby
class Validators {
        static min(min: number): ValidatorFn
        static max(max: number): ValidatorFn
        static required(control: AbstractControl): ValidationErrors | null
        static requiredTrue(control: AbstractControl): ValidationErrors | null
        static email(control: AbstractControl): ValidationErrors | null
        static minLength(minLength: number): ValidatorFn
        static maxLength(maxLength: number): ValidatorFn
        static pattern(pattern: string | RegExp): ValidatorFn
        static nullValidator(control: AbstractControl): ValidationErrors | null
        static compose(validators: ValidatorFn[]): ValidatorFn | null
        static composeAsync(validators: AsyncValidatorFn[]): AsyncValidatorFn | null
    }
```

With the pattern Validator you can pass in a RegExp that can provide extremely robust validations. Below is a list of some commonly used pattern validators I've used over the years:

```ruby
import { AbstractControl, ValidatorFn, Validators } from "@angular/forms";

export const alpha: ValidatorFn = Validators.pattern('[a-zA-Z]*$');
export const alphaAllowSpaces: ValidatorFn = Validators.pattern('[a-zA-Z ]*$');
export const alphaAllowSpacesAndSplash: ValidatorFn = Validators.pattern('[a-zA-Z /]*$');
export const alphaNumeric: ValidatorFn = Validators.pattern('[a-zA-Z0-9]*$');
export const alphaNumericAllowSpaces: ValidatorFn = Validators.pattern('[a-zA-Z0-9 ]*$');
export const alphaNumericAllowDash: ValidatorFn = Validators.pattern('[a-zA-Z0-9-]*$');
export const numericAllowDash: ValidatorFn = Validators.pattern('[0-9-]*$');
export const numeric: ValidatorFn = Validators.pattern('[0-9]*$');
export const currency: ValidatorFn = Validators.pattern('[0-9,]*$');
export const addressLine: ValidatorFn = Validators.pattern('(([0-9]{1,}).(.*[a-zA-Z#/&]){2,}$)|(([RRHC]{2,}).[0-9]{1,})|(([0-9]{1,}).(.*[a-zA-Z#/&]){2,}.(.*[0-9#])$)');
export const date: ValidatorFn = Validators.pattern('((0|1)d{1})((0|1|2|3)d{1})((19|20)d{2})');

export const arabicCharacters: ValidatorFn = Validators.pattern('^[\u0600-\u06ff ]*$');
export const arabicCharactersWithNumbers: ValidatorFn = Validators.pattern('^[\u0600-\u06ff]^[0-9]*$');
export const englishAndArabicCharactersWithWhiteSpace: ValidatorFn = Validators.pattern('^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z-_\ ]*$');
export const englishAndArabicCharactersOnly: ValidatorFn = Validators.pattern('^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z-_]*$');

```


You can also create your own custom functions as well. Here are a few examples of custom validator functions I've used as well:


```ruby
export const previousDateOnly: ValidatorFn = (control: AbstractControl) =>
        moment(control?.value).isSameOrAfter(new Date(), 'day')
            ? { date: 'The date entered must be before today'}
            : null;

    export const leapYearNotAllowed: ValidatorFn = (control: AbstractControl) =>
        control?.value &&
        control.value.length === 8 &&
        control.value.substr(0, 2) === '02' &&
        control.value.substr(2, 2) === '29' &&
        moment([control.value.substr(2, 4)]).isLeapYear()
            ? { date: 'Leap Year Is Not Allowed' }
            : null;
```

As you can see, the sky is the limit when it comes to validations in Angular.

### asyncValidator
The third and final property passed into a FormControl is called asyncValidator. This is an optional property of type AsyncValidatorFn | AsyncValidatorFn[]. Like ValidatorFn, AsyncValidatorFn's receive an AbstractControl but return a Promise<ValidationErrors> | null. These will be used to handle asynchronous validations that might come from an api or some other service that can't be run synchronously.


### FormBuilder
One quick thing to note before we move forward is to talk about FormBuilder. Form builder is a class built by the Angular team to make composing forms simpler. It's syntactical sugar for form creation. It does this by creating AbstractControl(s) using a user-specified configuration. This class has three main methods group, control, and array. Sound familiar?

```ruby
class FormBuilder {
        group(controlsConfig: { [key: string]: any; }, options: AbstractControlOptions | { [key: string]: any; } = null): FormGroup
        control(formState: any, validatorOrOpts?: ValidatorFn | AbstractControlOptions | ValidatorFn[], asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[]): FormControl
        array(controlsConfig: any[], validatorOrOpts?: ValidatorFn | AbstractControlOptions | ValidatorFn[], asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[]): FormArray
    }
```

Now let's take our above AddressForm and create it using FormBuilder:


```ruby
export class AppComponent {
        constructor(fb: FormBuilder) {}

        form = fb.group({
            addressLine1: [null, Validators.required)],
            city: [],
            state: ['Tanta'],
            zip: [null, [Validators.required, Validators.maxLength(5), Validators.minLength(5)]]: 
        });
    }
```

You will quickly notice that there isn't much magic happening here other than helper methods for making form creation less verbose. I will be using FormBuilder to generate our forms moving forward so make sure you become comfortable with its syntax.


### Separating Out The Form
Ok, now that we have most of the foundation laid for Reactive forms, let's get into the fun parts. Though this form, as-is, is not very complex let's take a step back and look at this form from a high architectural level. Currently, we have a Component, template, and a form. The component is responsible for building out the form which is fine for our basic example but what if we need to use this address somewhere else? It's also important to note that the template is not reusable either. Let's tackle these two issues next.

Let's move the AddressForm into its own file that extends FormGroup:


```ruby
export class AddressForm extends FormGroup {
        readonly addressLine1 = this.get('addressLine1') as FormControl;
        readonly city = this.get('city') as FormControl;
        readonly state = this.get('state') as FormControl;
        readonly zip = this.get('zip') as FormControl;

        constructor(readonly model: Address, readonly fb: FormBuilder = new FormBuilder()) {
            super(fb.group({
                addressLine1: [model?.addressLine1, Validators.required)],
                city: [model?.city, Validators.required],
                state: [model?.state, Validators.required],
                zip: [model?.zip, [Validators.required, Validators.maxLength(5), Validators.minLength(5)]]: 
            }).controls);
        }
    }
```

How cool is that?! We completely separated the form from the component and the form now builds itself 
when it is instantiated! So our Component now looks like this:



```ruby
export class AppComponent implements OnInit {
        form: AddressForm;
        
        //below consider it the obj we get from the api service
        address: Address = {
            addressLine1: '123 Main St',
            city: 'Your City',
            state: 'Tanta',
            zip: 12345
        };
        
        ngOnInit(): void {
            this.form = new AddressForm(this.address);
        }
    }
```

The Ultimate Guide To Angular Reactive Forms
The Ultimate Guide To Angular Reactive Forms
by Jordan Powell in Angular / Forms / Reactive / Frontend
Forms are an essential part of enterprise applications. No matter the problem you're solving, or the solution you're providing, you will inevitably need to collect form data. Though the collecting of such data may seem simple to stakeholders the reality is forms can quickly add a painful level of complexity to our applications. In this article, I will share my favorite approach to tackling form complexity using Angular's Reactive Forms. There are endless ways to build forms in your Angular applications and this article will focus on the approach I've found to be the most scalable, reusable, and maintainable from real-world enterprise experience.

An Introduction to Forms in Angular
Reactive forms are one of two approaches to building forms provided by Angular. Both of these approaches process and manage your form data differently and therefore both have their own unique tradeoffs. For very simple solutions, that do not require reusability, Template-driven forms are an excellent option. This is particularly true for teams with not a lot of form or reactive experience. In most other use-cases the benefits of using Reactive forms really begin to shine; especially as your application scales.

Overview of Reactive Forms
The Angular documentation states: "Reactive forms use an explicit and immutable approach to managing the state of a form at a given point in time. Each change to the form state returns a new state, which maintains the integrity of the model between changes. Reactive forms are built around observable streams, where form inputs and values are provided as streams of input values, which can be accessed synchronously." In essence, Reactive forms provide easier and more predictable access to form state because they are built around observable streams. Therefore, we get the power and benefits of RxJs operators to update and manage form state exactly when and where we want to. Also, unlike template-driven forms which use directives in the template, the composition, and management of the form is moved out of the template and into the class itself providing the ability for more reusability.

Getting Started
Enough hypothetical talk; let's get our hands dirty and code up an example form using Reactive forms. The first step to using Reactive forms is to import the ReactiveFormsModule into our module. In most use cases you will add it to your app's root:

import { ReactiveFormsModule } from '@angular/forms';

    @NgModule({
        imports: [
            // all your other imports,
            ReactiveFormsModule
        ]
    })
    export class AppModule { }
import { ReactiveFormsModule } from '@angular/forms';
​
    @NgModule({
        imports: [
            // all your other imports,
            ReactiveFormsModule
        ]
    })
    export class AppModule { }
Before we begin building our own form, it's a good time to explain the three main types of form components in Angular forms. It's a good idea to make yourself familiar with these three as you will be using all of them quite frequently.



FormControls: Are the individual controls of a form that keep track of value and validity.
FormGroup: Is a collection of controls that keep track of value and validity.
FormArrays: Are an array or list of controls that keep track of value and validity.


In every enterprise company I've worked with, they've had a business need to collect an address of some sort. So let's build out a form that will collect a user's address:

export class AppComponent {
        form = new FormGroup({
            addressLine1: new FormControl(),
            city: new FormControl(),
            state: new FormControl(),
            zip: new FormControl()
        });
    }
export class AppComponent {
        form = new FormGroup({
            addressLine1: new FormControl(),
            city: new FormControl(),
            state: new FormControl(),
            zip: new FormControl()
        });
    }
This example creates a parent level form or FormGroup that contains individual controls or FormControls for the individual address fields we need to collect from the user. As-is it has no default values or validation attached, so let's change that:

export class AppComponent {
        form = new FormGroup({
            addressLine1: new FormControl(null, Validators.required),
            city: new FormControl(),
            state: new FormControl('Ohio'),
            zip: new FormControl(null, [Validators.required, Validators.maxLength(5), Validators.minLength(5)])
        });
    }
export class AppComponent {
        form = new FormGroup({
            addressLine1: new FormControl(null, Validators.required),
            city: new FormControl(),
            state: new FormControl('Ohio'),
            zip: new FormControl(null, [Validators.required, Validators.maxLength(5), Validators.minLength(5)])
        });
    }
Now we have an example of creating an empty control with no state or validations, a control with no state and one validation, a control with a default value and no validations and a control with no value and multiple validations. It may seem a little confusing so let me break down for you a little bit more.



FormControl is a class that extends an abstract class of AbstractControl. It takes in three optional parameters into its constructor: formState, validatorOrOpts or asyncValidator. Let's look at each one of these properties individually.

formState
The first property passed into a FormControl is called formState. This is an optional property of type any (unfortunately). Therefore, if you pass it nothing or null it will create a new FormControl with no initial value. In fact, whatever you pass it formState will become its initial value. So we could pass addressLine1 an initial value like new FormControl('123 Main Street') and when the page loads that value will pre-populate in the addressLine1 field with the street name of the 123 Main Street.

validatorOrOpts
The second property passed into a FormControl is called validatorOrOpts. This is an optional property of type ValidatorFn | AbstractControlOptions | validatorFn[]. This will be used to declare specific control options such as updateOn or synchronous control validations. ValidatorFn is essentially just a function that takes an AbstractControl and returns either a map of ValidationErrors or null. The beautiful thing about validations in Angular is that they can be anything that returns a ValidatorFn. For most use cases you will be able to use one or more of the built-in validators provided for you in the @angular/forms package. Below is a list of those provided to you for free by Angular Validators:

class Validators {
        static min(min: number): ValidatorFn
        static max(max: number): ValidatorFn
        static required(control: AbstractControl): ValidationErrors | null
        static requiredTrue(control: AbstractControl): ValidationErrors | null
        static email(control: AbstractControl): ValidationErrors | null
        static minLength(minLength: number): ValidatorFn
        static maxLength(maxLength: number): ValidatorFn
        static pattern(pattern: string | RegExp): ValidatorFn
        static nullValidator(control: AbstractControl): ValidationErrors | null
        static compose(validators: ValidatorFn[]): ValidatorFn | null
        static composeAsync(validators: AsyncValidatorFn[]): AsyncValidatorFn | null
    }
class Validators {
        static min(min: number): ValidatorFn
        static max(max: number): ValidatorFn
        static required(control: AbstractControl): ValidationErrors | null
        static requiredTrue(control: AbstractControl): ValidationErrors | null
        static email(control: AbstractControl): ValidationErrors | null
        static minLength(minLength: number): ValidatorFn
        static maxLength(maxLength: number): ValidatorFn
        static pattern(pattern: string | RegExp): ValidatorFn
        static nullValidator(control: AbstractControl): ValidationErrors | null
        static compose(validators: ValidatorFn[]): ValidatorFn | null
        static composeAsync(validators: AsyncValidatorFn[]): AsyncValidatorFn | null
    }
With the pattern Validator you can pass in a RegExp that can provide extremely robust validations. Below is a list of some commonly used pattern validators I've used over the years:

export const alpha: ValidatorFn = Validators.pattern('[a-zA-Z]*%content%#039;);
export const alphaAllowSpaces: ValidatorFn = Validators.pattern('[a-zA-Z ]*%content%#039;);
export const alphaAllowSpacesAndSplash: ValidatorFn = Validators.pattern('[a-zA-Z /]*%content%#039;);
export const alphaNumeric: ValidatorFn = Validators.pattern('[a-zA-Z0-9]*%content%#039;);
export const alphaNumericAllowSpaces: ValidatorFn = Validators.pattern('[a-zA-Z0-9 ]*%content%#039;);
export const alphaNumericAllowDash: ValidatorFn = Validators.pattern('[a-zA-Z0-9-]*%content%#039;);
export const numericAllowDash: ValidatorFn = Validators.pattern('[0-9-]*%content%#039;);
export const numeric: ValidatorFn = Validators.pattern('[0-9]*%content%#039;);
export const currency: ValidatorFn = Validators.pattern('[0-9,]*%content%#039;);
export const addressLine: ValidatorFn = Validators.pattern('(([0-9]{1,}).(.*[a-zA-Z#/&]){2,}$)|(([RRHC]{2,}).[0-9]{1,})|(([0-9]{1,}).(.*[a-zA-Z#/&]){2,}.(.*[0-9#])$)');
export const date: ValidatorFn = Validators.pattern('((0|1)d{1})((0|1|2|3)d{1})((19|20)d{2})');
You can also create your own custom functions as well. Here are a few examples of custom validator functions I've used as well:

export const previousDateOnly: ValidatorFn = (control: AbstractControl) =>
        moment(control?.value).isSameOrAfter(new Date(), 'day')
            ? { date: 'The date entered must be before today'}
            : null;

    export const leapYearNotAllowed: ValidatorFn = (control: AbstractControl) =>
        control?.value &&
        control.value.length === 8 &&
        control.value.substr(0, 2) === '02' &&
        control.value.substr(2, 2) === '29' &&
        moment([control.value.substr(2, 4)]).isLeapYear()
            ? { date: 'Leap Year Is Not Allowed' }
            : null;
export const previousDateOnly: ValidatorFn = (control: AbstractControl) =>
        moment(control?.value).isSameOrAfter(new Date(), 'day')
            ? { date: 'The date entered must be before today'}
            : null;
​
    export const leapYearNotAllowed: ValidatorFn = (control: AbstractControl) =>
        control?.value &&
        control.value.length === 8 &&
        control.value.substr(0, 2) === '02' &&
        control.value.substr(2, 2) === '29' &&
        moment([control.value.substr(2, 4)]).isLeapYear()
            ? { date: 'Leap Year Is Not Allowed' }
            : null;
As you can see, the sky is the limit when it comes to validations in Angular.



asyncValidator
The third and final property passed into a FormControl is called asyncValidator. This is an optional property of type AsyncValidatorFn | AsyncValidatorFn[]. Like ValidatorFn, AsyncValidatorFn's receive an AbstractControl but return a Promise<ValidationErrors> | null. These will be used to handle asynchronous validations that might come from an api or some other service that can't be run synchronously.

FormBuilder
One quick thing to note before we move forward is to talk about FormBuilder. Form builder is a class built by the Angular team to make composing forms simpler. It's syntactical sugar for form creation. It does this by creating AbstractControl(s) using a user-specified configuration. This class has three main methods group, control, and array. Sound familiar?

class FormBuilder {
        group(controlsConfig: { [key: string]: any; }, options: AbstractControlOptions | { [key: string]: any; } = null): FormGroup
        control(formState: any, validatorOrOpts?: ValidatorFn | AbstractControlOptions | ValidatorFn[], asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[]): FormControl
        array(controlsConfig: any[], validatorOrOpts?: ValidatorFn | AbstractControlOptions | ValidatorFn[], asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[]): FormArray
    }
class FormBuilder {
        group(controlsConfig: { [key: string]: any; }, options: AbstractControlOptions | { [key: string]: any; } = null): FormGroup
        control(formState: any, validatorOrOpts?: ValidatorFn | AbstractControlOptions | ValidatorFn[], asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[]): FormControl
        array(controlsConfig: any[], validatorOrOpts?: ValidatorFn | AbstractControlOptions | ValidatorFn[], asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[]): FormArray
    }
Now let's take our above AddressForm and create it using FormBuilder:

export class AppComponent {
        constructor(fb: FormBuilder) {}

        form = fb.group({
            addressLine1: [null, Validators.required)],
            city: [],
            state: ['Ohio'],
            zip: [null, [Validators.required, Validators.maxLength(5), Validators.minLength(5)]]: 
        });
    }
export class AppComponent {
        constructor(fb: FormBuilder) {}
​
        form = fb.group({
            addressLine1: [null, Validators.required)],
            city: [],
            state: ['Ohio'],
            zip: [null, [Validators.required, Validators.maxLength(5), Validators.minLength(5)]]: 
        });
    }
You will quickly notice that there isn't much magic happening here other than helper methods for making form creation less verbose. I will be using FormBuilder to generate our forms moving forward so make sure you become comfortable with its syntax.

Separating Out The Form
Ok, now that we have most of the foundation laid for Reactive forms, let's get into the fun parts. Though this form, as-is, is not very complex let's take a step back and look at this form from a high architectural level. Currently, we have a Component, template, and a form. The component is responsible for building out the form which is fine for our basic example but what if we need to use this address somewhere else? It's also important to note that the template is not reusable either. Let's tackle these two issues next.



Let's move the AddressForm into its own file that extends FormGroup:


```ruby
export class AddressForm extends FormGroup {
        readonly addressLine1 = this.get('addressLine1') as FormControl;
        readonly city = this.get('city') as FormControl;
        readonly state = this.get('state') as FormControl;
        readonly zip = this.get('zip') as FormControl;
​
        constructor(readonly model: Address, readonly fb: FormBuilder = new FormBuilder()) {
            super(fb.group({
                addressLine1: [model?.addressLine1, Validators.required)],
                city: [model?.city, Validators.required],
                state: [model?.state, Validators.required],
                zip: [model?.zip, [Validators.required, Validators.maxLength(5), Validators.minLength(5)]]: 
            }).controls);
        }
    }
```

How cool is that?! We completely separated the form from the component and the form now builds itself when it is instantiated! So our Component now looks like this:

```ruby
export class AppComponent implements OnInit {
        form: AddressForm;
        //consider the below obj coming from our api service
        address: Address = {
            addressLine1: '123 Main St',
            city: 'Your City',
            state: 'OH',
            zip: 12345
        };
        
        ngOnInit(): void {
            this.form = new AddressForm(this.address);
        }
    }
```

This makes our form completely reusable (and extendable) in other areas of our application. It also follows the Single Responsibility Principle. This provides us great flexibility and maintainability as our application grows. Now let's tackle the template.


### Making Reusable Form Components

Because we are using reactive forms we can very easily create reusable form elements. Let's take a look at what our template would look like if we were using Angular Material:


```ruby
<form class="address-form">
        <mat-form-field>
            <mat-label>Address Line 1</mat-label>
            <input matInput [formControl]="form.addressLine1">
        </mat-form-field>
         <mat-form-field>
            <mat-label>City</mat-label>
            <input matInput [formControl]="form.city">
        </mat-form-field>
        <mat-form-field appearance="fill">
            <mat-label>State</mat-label>
            <mat-select>
                <mat-option *ngFor="let state of states" [formControl]="form.state">
                    {{ state }}
                </mat-option>
            </mat-select>
        </mat-form-field>
         <mat-form-field>
            <mat-label>Zip</mat-label>
            <input matInput [formControl]="form.zip">
        </mat-form-field>
    </form>
```

As you can see, all we need to do to tie our AddressForm into the DOM inputs themselves is to pass it the FormControl using the formControl directive. This is pretty nice but we can do better. In our example above we are duplicating a text input three different times. Let's refactor this into one reusable component:


```ruby
export class SharedUiTextInputComponent {
        @Input() label = '';
        @Input() control: FormControl
        @Input() placeholder?: string
        @Input() messages = validationMessages
    }
```


```ruby
<mat-form-field *ngIf="control">
        <mat-label>{{ label }}</mat-label>
        <input type="text" matInput [formControl]="control" />
        <mat-error *ngFor="let error of control.errors | errorKeys">
            {{ messages[error] }}
        </mat-error>
    </mat-form-field>
```


```ruby

export const validationMessages: ValidationErrors = {
        required = 'Required',
        minlength = 'Too Short',
        maxlength = 'Too Long',
        pattern= 'Forbidden Entry',
        email = 'Invalid Entry',
        date = 'Invalid Date',
    };

    @Pipe({
        name: 'errorKeys'
    })
    export class ErrorKeysPipe implements PipeTransform {
        transform(errors: ValidationErrors): string[] {
            if (!errors) {
                return;
            }
            return Object.keys(errors);
        }   
    }
```

With a little work up front, we now have a single reusable text input component that will look and operate the same way everywhere in our app. Let's now consume this reusable component in our original Component:

```ruby
<form class="address-form">
        <shared-ui-text-input label="Address Line 1" [control]="form.addressLine1"></shared-ui-text-input>
        <shared-ui-text-input label="City" [control]="form.city"></shared-ui-text-input>
        <mat-form-field appearance="fill">
            <mat-label>State</mat-label>
            <mat-select>
                <mat-option *ngFor="let state of states" [formControl]="form.state">
                    {{ state }}
                </mat-option>
            </mat-select>
        </mat-form-field>
        <shared-ui-text-input label="Zip" [control]="form.zip"></shared-ui-text-input>
    </form>
```

To finish up this refactor let's now create a reusable dropdown component:



```ruby
export class SharedUiDropdodwnComponent {
        @Input() label = '';
        @Input() control: FormControl
        @Input() options: string[] = [];
        @Input() placeholder?: string
        @Input() messages = validationMessages
    }
```


```ruby
<mat-form-field *ngIf="control">
        <mat-label>{{ label }}</mat-label>
        <mat-select [formControl]="control">
            <mat-option *ngFor="let option of options">
                {{ option }}
            </mat-option>
        </mat-select>
        <mat-error *ngFor="let error of control.errors | errorKeys">
            {{ messages[error] }}
        </mat-error>
    </mat-form-field>
```
Because we already did the work for the shared-ui-error making this dropdown component was super simple. Now let's look at how simple and clean our original component looks:



```ruby
<form class="address-form">
        <shared-ui-text-input label="Address Line 1" [control]="form.addressLine1"></shared-ui-text-input>
        <shared-ui-text-input label="City" [control]="form.city"></shared-ui-text-input>
        <shared-ui-dropdown label="State" [control]="form.state" [options]="states"></shared-ui-dropdown>
        <shared-ui-text-input label="Zip" [control]="form.zip"></shared-ui-text-input>
    </form>
```

Now that is beautiful! We now have completely de-coupled our form from the component and made the template completely reusable. Because we know we are going to have multiple places in our application where we will be collecting a form, we can make this even more reusable. Let's create an AddressFormComponent to handle our various instances of AddressForm:



```ruby
export class AddressFormComponenet {
        @Input() form: AddressForm;
    }
```

We will then move our form markup to our new AddressFormComponent template and change our original Component to reference our reusable AddressFormComponent:

```ruby
<shared-address-form [form]="form"></shared-address-form>
```

You can't get any cleaner than that! But what happens when we need to make a slight change to one of our AddressForm instances. No problem! Let's add a new Form that extends AddressForm:

```ruby
export class MailingAddressForm extends AddressForm {
        constructor(readonly fb: FormBuilder) {
            super({} as Address, fb);

            this.addControl('addressLine2', fb.control(null, required));
        }
    }
```

Now we have an extension of AddressForm with an extra FormControl that collects an addressLine2 field. Now we just need to add a shared-ui-text-input in our AddressFormComponent for our addressLine2 instance:

```ruby
<form class="address-form">
        <shared-ui-text-input label="Address Line 1" [control]="form.addressLine1"></shared-ui-text-input>
        <shared-ui-text-input label="Address Line 2" [control]="form.addressLine2"></shared-ui-text-input>
        <shared-ui-text-input label="City" [control]="form.city"></shared-ui-text-input>
        <shared-ui-dropdown label="State" [control]="form.state" [options]="states"></shared-ui-dropdown>
        <shared-ui-text-input label="Zip" [control]="form.zip"></shared-ui-text-input>
    </form>
```

Because we added *ngIf in the template of our reusable components, the addressLine2 field will only show if that control exists on the Form. Therefore, we don't need to add conditional logic in our templates (making them reusable) and we put that responsibility solely in the Form class (supporting SRP).

## Nesting Forms
Inevitably the need to create nested form parts will arise. Fortunately, this is made simple with Reactive forms. Let's create a CustomerForm that will include our AddressForm amongst other controls:
```ruby
export class CustomerForm extends FormGroup {
        readonly firstname = this.get('firstName') as FormControl;;
        readonly lastName = this.get('lastName') as FormControl;;

        get Address(): AddressForm {
            return this.controls.address as AddressForm;
        }

        constructor(readonly customer: Customer, readonly fb: FormBuilder) {
            super(fb.group({
                firstName: [customer.firstName, Validators.required],
                lastName: [customer.lastName, Validators.required],
                address: new AddressForm(customer.address, fb)
            }).controls);
        }
    }
```



<shared-ui-text-input label="First Name" [control]="form.firstName"></shared-ui-text-input>
<shared-ui-text-input label="Last Name" [control]="form.lastName"></shared-ui-text-input>
<shared-address-form [form]="form.Address"></shared-address-form>```ruby

```
As you can see we are able to add nesting to our forms very easily with this approach. Thanks to the power of Reactive forms, you can add nesting to our forms as deep as you need to. Now let's add a list or a FormArray to our form

```ruby
export class OrderForm extends FormGroup {
        readonly id = this.get('id') as FormControl;
        readonly total = this.get('total') as FormControl;
        readonly date = this.get('date') as FormControl;

        constructor(readonly order: Order, readonly fb: FormBuilder = new FormBuilder()) {
            super(fb.group({
                id: [order.id, Validators.required],
                total: [order.total, [Validators.required, currency]],
                date: [order.date, [Validators.required, date]]
            }).controls);
        }
    }
```

```ruby
export class OrderFormComponent {
        @Input() form: OrderForm;
    }
```

```ruby
<shared-ui-text-input label="Order #" [control]="form.id"></shared-ui-text-input>
<shared-ui-text-input label="Order Total" [control]="form.total"></shared-ui-text-input>
<shared-ui-text-input label="Order Date" [control]="form.date"></shared-ui-text-input>
```

```ruby
export class CustomerForm extends FormGroup {
        readonly firstname = this.get('firstName') as FormControl;
        readonly lastName = this.get('lastName') as FormControl;

        get Address(): AddressForm {
            return this.controls.address as AddressForm;
        }

        get Orders(): OrderForm[] {
            return (this.controls.orders as FormArray).controls as OrderForm[];
        }

        constructor(readonly customer: Customer, private readonly fb: FormBuilder) {
            super(fb.group({
                firstName: [customer.firstName, Validators.required],
                lastName: [customer.lastName, Validators.required],
                address: new AddressForm(customer.address, fb),
                orders: fb.array([])
            }).controls);
        }
    }
```


```ruby
<shared-ui-text-input label="First Name" [control]="form.firstName"></shared-ui-text-input>
<shared-ui-text-input label="Last Name" [control]="form.lastName"></shared-ui-text-input>
<shared-address-form [form]="form.Address"></shared-address-form>
<shared-order-form *ngFor="let order of form.Orders" [form]="order"></shared-order-form>
```

How To Handle Advanced Form Scenarios
Up until this point, we've created pretty basic forms. Though what we've covered thus far will be sufficient for most use cases, inevitably the need to handle conditional business logic within your forms themselves will arise. Now let's add a way to handle some common form scenarios:


```ruby
export class CustomerForm extends FormGroup {
        readonly firstname = this.get('firstName') as FormControl;
        readonly lastName = this.get('lastName') as FormControl;

        email: FormControl | null;

        get Address(): AddressForm {
            return this.controls.address as AddressForm;
        }

        get Orders(): OrderForm[] {
            return (this.controls.orders as FormArray).controls as OrderForm[];
        }

        constructor(private readonly fb: FormBuilder) {
            super(fb.group({
                firstName: [null, Validators.required],
                lastName: [null, Validators.required],
                address: new AddressForm({} as Address, fb),
                orders: fb.array([])
            }).controls);

            this.handler();
        }

        private handler(): void {
            this.Address.state.valueChanges.subscribe(state => state === 'IN' ? addEmail() : removeEmail());
        }

        addEmail(): void {
            this.addControl('email', this.fb.control('', [Validators.required, Validators.email]));
            this.email = this.get('email');
        }

        removeEmail(): void {
            this.removeControl('email');
            this.email = null;
        }
    }
```

One very common form scenario is the need to conditionally add or remove controls based upon the value or validity of another part of the form. We are able to do this by adding two methods and a handler to the form. The addEmail() method handles the responsibility of adding the email FormControl to the form and the forms typed reference to this.email. removeEmail() in a similar fashion removes the email control from the form and sets this.form to null. Finally, the private handler() method takes the responsibility of listening to the valueChanges of the address state control and then calling either addEmail() or removeEmail() based upon that value. The important thing to note is that this complexity is the responsibility of the Form itself; completely de-coupling this logic from the component and template.

# Conclusion
In this deep dive of Angular Reactive Forms we covered a lot of material! Here is a quick summary of everything we covered: - What are Angular Reactive Forms and Template-Driven Forms. - What are FormControl, FormGroup, and FormArray - How to create custom Angular Form Validations - How to create powerful reusable form validation components in Angular - How to use FormBuilder - How to create Nested Forms - How To Handle Advanced Form Scenarios

--------------------------------

```ruby

```


--------------------------------

```ruby

```


--------------------------------

```ruby

```


--------------------------------

```ruby

```


--------------------------------

```ruby

```



--------------------------------

```ruby

```


--------------------------------

```ruby

```
