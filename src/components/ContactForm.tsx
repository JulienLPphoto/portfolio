import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import FormInput from "./form-elements/FormInput";
import FormTextarea from "./form-elements/FormTextarea";
import Button from "./Button";

interface ContactFormValues {
  fullname: string;
  email: string;
  message: string;
}


const ContactFormSchema = Yup.object().shape({
  fullname: Yup.string().required("Please enter your full name"),
  email: Yup.string().email("Please enter a valid email address").required("Please enter your email"),
  message: Yup.string().required("Please enter a message"),
})

function ContactForm() {
  return (
    <Formik
      initialValues={{
        fullname: "",
        email: "",
        message: ""
      }}
      validationSchema={ContactFormSchema}
      validateOnMount={true}
      validateOnChange={true}
      onSubmit={(
        values: ContactFormValues,
        { setSubmitting }: FormikHelpers<ContactFormValues>
      ) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
    >
      {({ isSubmitting }) => (
        <Form noValidate>
          <FormInput
            type="text"
            labelText="Full name"
            name='fullname'
            placeholder="Enter full name"
          />

          <FormInput
            type="email"
            labelText="Email"
            name='email'
            placeholder="Enter email address"
          />

          <FormTextarea
            labelText="Message"
            name="message"
            placeholder="Write something here"

          />

          <Button
            type="submit"
            text="Send Message"
     
          />

        </Form>
      )}

    </Formik>
  )
}

export default ContactForm;
