import React from "react";
import { Formik, Form, Field, FormikProps } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("email is required"),
  password: Yup.string()
    .min(3, "Password must be 3 characters at minimum")
    .required("password is required"),
});

interface MyFormValues {
  email: string;
  password: string;
}

const App: React.FC<object> = () => {
  const initialValues: MyFormValues = { email: "", password: "" };

  return (
    <div style={{ margin: "40px" }}>
      <h1>My Example</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props: FormikProps<MyFormValues>) => {
          const { values, errors, touched, handleChange } = props;

          console.log(props);
          return (
            <Form>
              <div>
                <label htmlFor="email">Email :</label>
                <Field
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                />
                {touched.email && errors.email ? (
                  <div style={{ color: "red" }}>{errors.email}</div>
                ) : null}
              </div>
              <div>
                <label htmlFor="password">Password :</label>
                <Field
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                />
                {touched.password && errors.password ? (
                  <div style={{ color: "red" }}>{errors.password}</div>
                ) : null}
              </div>
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default App;
