import { Box, Container } from "@chakra-ui/react";
import axios from "axios";
import instance from "../../api/api_instance";
import { withFormik } from "formik";
import * as Yup from "yup";

import { FormValues, FormProps } from "./types";
import InnerForm from "./components/innerForm";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  age: Yup.number()
    .positive("Age must be greater than zero")
    .required("Age is required"),
});

export default function Register() {
  const register = async (props: FormValues) => {
    const { name, email, password, age } = props;
    await instance.post("users", {
      name,
      email,
      password,
      age,
    });
  };

  const MyForm = withFormik<FormProps, FormValues>({
    mapPropsToValues: (props) => ({
      name: props.initialName || "",
      email: props.initialEmail || "",
      password: props.initialPassword || "",
      age: props.initialAge || 0,
    }),
    validationSchema: RegisterSchema,
    handleSubmit({ name, email, password, age }: FormValues) {
      register({ name, email, password, age });
    },
  })(InnerForm);

  return (
    <Box
      sx={{
        marginTop: "64px",
      }}
    >
      <Container>
        <MyForm />
      </Container>
    </Box>
  );
}
