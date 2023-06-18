import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  public static passwordValidator(
    password: FormControl
  ): ValidationErrors | null {
    if (!password?.value?.match(/\d/)) {
      return { containsDigit: true };
    }

    if (password?.value?.length < 6) {
      return { minLength: true };
    }

    if (!password?.value?.match(/[a-z]/)){
      return { containsLowercase:true};
    }

    if (!password?.value?.match(/[A-Z]/)){
      return { containsUppercase:true};
    }

    return null;
  }
}
