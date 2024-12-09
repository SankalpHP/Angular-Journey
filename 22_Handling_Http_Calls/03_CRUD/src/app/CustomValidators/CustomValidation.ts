import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function onlyNumbers(): ValidatorFn{
    return (control: AbstractControl):ValidationErrors | null => {
        const isValid = /^[0-9]+$/.test(control.value);
        return isValid ? null : { onlyNumbers: true };
    };
}

export function onlyAlphabets(): ValidatorFn{
    return (control: AbstractControl):ValidationErrors | null => {
        const isValid = /^[a-zA-Z0-9]+( [a-zA-Z0-9]+)*$/.test(control.value);
        return isValid ? null : { onlyAlphabets: true };
    }
}

export function onlyNumbersTypeValidator(): ValidatorFn{
    return (control: AbstractControl):ValidationErrors | null => {
        const isValid = typeof control.value === 'number' && !isNaN(control.value);
        return isValid ? null : { onlyNumberType: true };
    }
}