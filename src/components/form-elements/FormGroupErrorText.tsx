interface FormGroupErrorTextProps {
  text?: string
}
function FormGroupErrorText({text}:FormGroupErrorTextProps) {
  return (
    <small className="c-form-group-error">
      {text}
    </small>
  )
}

export default FormGroupErrorText
