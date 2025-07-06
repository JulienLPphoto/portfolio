import clsx from "clsx"
import {useField} from "formik"

import {cFormGroupProps, cInputProps} from "../../utils";

import FormGroup from "./FormGroup";

interface FormInputProps extends cFormGroupProps, cInputProps {}

function FormInput(
  {
    extraClassName,
    type,
    labelText,
    labelIsHidden,
    name,
    placeholder,
    helpText,
    ...rest
  }: FormInputProps) {

  const [field, meta] = useField(name);

  return (

    <FormGroup
      extraClassName={clsx(`c-form-group-${type}`, extraClassName)}
      name={name}
      labelText={labelText}
      labelIsHidden={labelIsHidden}
      helpText={helpText}
      hasErrors={meta.touched && meta.error}
      errorText={meta.error}
    >
      <input
        {...field}
        type={type? type : "text"}
        id={`id_${name}`}
        placeholder={placeholder? placeholder : ""}
        aria-invalid={!!(meta.touched && meta.error)}
        {...rest}
      />

    </FormGroup>
  )
}

export default FormInput