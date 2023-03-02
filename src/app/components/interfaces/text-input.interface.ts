import { AbstractControl, FormControl } from '@angular/forms';

export interface ITextInput {
  label: string;
  placeholder: string;
  formControl?: AbstractControl | any;
}

export interface ITextInputConfig {
  type: 'text' | 'password';
}
