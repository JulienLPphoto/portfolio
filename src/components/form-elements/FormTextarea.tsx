import {HTMLProps} from "react";
import clsx from "clsx"
import {useField} from "formik"

import {cFormGroupProps} from "../../utils";

import FormGroup from "./FormGroup";

interface FormTextareaProps extends cFormGroupProps, HTMLProps<HTMLTextAreaElement> {
  name: string;
  rows?: number;
  placeholder?: string;
}

function FormTextarea(
  {
    extraClassName,
    labelText,
    labelIsHidden,
    name,
    rows,
    placeholder,
    helpText,
    ...rest
  }: FormTextareaProps) {

  const [field, meta] = useField(name);

  return (

    <FormGroup
      extraClassName={clsx("c-form-group-textarea", extraClassName)}
      name={name}
      labelText={labelText}
      labelIsHidden={labelIsHidden}
      helpText={helpText}
      hasErrors={meta.touched && meta.error}
      errorText={meta.error}
    >
       <textarea
        {...field}
        id={`id_${name}`}
        rows={rows? rows : 5}
        placeholder={placeholder? placeholder : ""}
        aria-invalid={!!(meta.touched && meta.error)}
        {...rest}
      />

    </FormGroup>
  )
}

export default FormTextarea