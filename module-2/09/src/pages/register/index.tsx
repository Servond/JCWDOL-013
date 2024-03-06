import { Box, Container } from "@chakra-ui/react";
// import axios from "axios";
import { withFormik } from "formik";
import * as Yup from "yup";

import instance from "../../api/api_instance";
import { FormValues, FormProps } from "./types";
import InnerForm from "./components/innerForm";
import { useEffect, useState } from "react";

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

interface IUsers {
  id: number;
  name: string;
  email: string;
  password: string;
  age: number;
}

export default function Register() {
  const [user, setUser] = useState<IUsers>();

  const register = async (props: FormValues) => {
    const { name, email, password, age } = props;
    await instance.post("users", {
      name,
      email,
      password,
      age,
    });
  };

  const fetchUser = async (id: number) => {
    const { data } = await instance.get(`users/${id}`);
    console.log(data);
    setUser(data);
  };

  useEffect(() => {
    fetchUser(1);
  }, []);

  const MyForm = withFormik<FormProps, FormValues>({
    mapPropsToValues: (props) => ({
      name: props.initialName || user?.name || "",
      email: props.initialEmail || user?.email || "",
      password: props.initialPassword || user?.password || "",
      age: props.initialAge || user?.age || 0,
    }),
    validationSchema: RegisterSchema,
    enableReinitialize: true,
    handleSubmit({ name, email, password, age }: FormValues, { resetForm }) {
      register({ name, email, password, age });
      resetForm();
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
