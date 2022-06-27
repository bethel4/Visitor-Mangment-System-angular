import { Validators } from '@angular/forms';

export enum ControlType {
  Hidden = 'hidden',
  Text = 'text',
  Numeric = 'numeric',
  Date = 'date',
  Radio = 'radio',
  Select = 'select',
  Checkbox = 'checkboxselect'
}

export interface FormField {
  name: string;
  label: string;
  validators: Validators[];
  controlType: ControlType;
  options: any;
  optionsVariable: string | undefined;
  displayField: string | undefined;
  valueField: string | undefined;
}
