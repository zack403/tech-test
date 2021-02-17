import { AbstractControl, ValidatorFn } from "@angular/forms";

export function expiryDateValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const isValid = new Date(control.value) < new Date();
      return isValid ? {forbiddenDate: {value: control.value}} : null;
    };
  }