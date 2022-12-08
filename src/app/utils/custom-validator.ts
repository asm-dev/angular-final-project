import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
 
export class CustomValidators {

    static noShaunonian(control: AbstractControl): ValidationErrors | null {
        const value = control.value.toLowerCase();
        if (value === "shaunonian") {
        return { noShaunoonian: true }; // trigger error
        }
        return null; // valid response
    }

    static validLevel(min: number, max: number): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
        if (control.value > max || control.value < min) {
            return { validLevel: true }; // trigger error
        }
        return null; // valid response
        };
    }
}