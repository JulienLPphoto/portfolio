import {ReactNode} from 'react';

interface FormGroupHelpTextProps {
  helpText?: ReactNode;
}

function FormGroupHelpText({helpText}: FormGroupHelpTextProps) {
  return (
    <small className="c-form-group-help-text">
      {helpText}
    </small>
  );
}

export default FormGroupHelpText;