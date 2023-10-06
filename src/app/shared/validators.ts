import { AbstractControl, ValidatorFn } from '@angular/forms';
import { cpf, cnpj } from 'cpf-cnpj-validator';

export function cpfCnpjValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    if (!value) {
      return null;
    }
    const isValid = cpf.isValid(value) || cnpj.isValid(value);
    return isValid ? null : { cpfCnpjInvalid: true };
  };
}
