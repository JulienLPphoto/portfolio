import React, {ReactNode} from 'react';
import clsx from "clsx";

import {cFormGroupProps} from "../../utils";

import FormGroupErrorText from "./FormGroupErrorText";
import FormGroupHelpText from "./FormGroupHelpText";

interface FormGroupProps extends cFormGroupProps {
  name: string;
  children: ReactNode;
  hasErrors?: string | false | undefined;
  errorText?: string;
}

function FormGroup(
  {
    extraClassName,
    name,
    labelText,
    labelIsHidden,
    helpText,
    hasErrors,
    errorText,
    children,
  }: FormGroupProps) {
  return (
    <div className={clsx("c-form-group", extraClassName, hasErrors && "is-invalid" )}>

      <div className="c-form-group-wrapper">

          <label
            htmlFor={`id_${name}`}
            className={clsx(labelIsHidden && "c-visually-hidden")}
          >
            {labelText}
          </label>

          <div className="c-form-group-input-group">
            {children}
          </div>

      </div>

      {helpText && (
        <FormGroupHelpText
          helpText={helpText}
        />
      )}

      {hasErrors? (
        <FormGroupErrorText text={errorText}/>
      ) : null}

    </div>
  );
}

export default FormGroup;