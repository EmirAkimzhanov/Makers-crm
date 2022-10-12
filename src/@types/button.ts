import {HtmlHTMLAttributes, ReactNode} from "react"
export interface IButton<T> extends HtmlHTMLAttributes<T> {
  autoFocus?: boolean;
  disabled?: boolean;
  form?: string;
  formAction?: string;
  formEncType?: string;
  formMethod?: string;
  formNoValidate?: boolean;
  formTarget?: string;
  name?: string;
  type?: 'submit' | 'reset' | 'button';
  value?: string | string[] | number;
  // children: ReactNode
}