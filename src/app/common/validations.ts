import { Validators } from '@angular/forms'

export const EmailValidation = [Validators.required, Validators.email]
export const PasswordValidation =
[
  Validators.required,
  Validators.minLength(8),
  Validators.maxLength(50),
]
// Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$');
// 'ZipCode': [null, [Validators.maxLength(16), Validators.pattern(/^\d{1,5}$/)]]

