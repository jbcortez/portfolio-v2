import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Button from "./Button";
import { useAppDispatch } from "../redux/reduxHooks";
import { handleIsInteractive } from "../util/functions";

const ContactForm = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: unknown) => {
    console.log("form data: ", data);
  };

  return (
    <Form>
      <FormControl>
        <Label htmlFor={"name"}>Name</Label>
        <Input
          id={"name"}
          {...register("name")}
          onMouseOver={() => handleIsInteractive(dispatch, true)}
          onMouseLeave={() => handleIsInteractive(dispatch, false)}
          placeholder={"Enter name"}
        />
      </FormControl>

      <FormControl>
        <Label htmlFor={"email"}>Email</Label>
        <Input
          id={"email"}
          type={"email"}
          {...register("email")}
          placeholder={"Enter email"}
        />
      </FormControl>
      <FormControl>
        <Label htmlFor={"email"}>Message</Label>
        <TextArea
          id={"message"}
          {...register("message")}
          placeholder={"Enter message"}
        />
      </FormControl>

      <Button translateVariant={"two"} style={{ width: "10.6rem" }}>
        Submit
      </Button>
    </Form>
  );
};

export default ContactForm;

const Form = styled.form`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-end;
`;

const Input = styled.input`
  background: ${(props) => props.theme.colors.primary};
  border: none;
  padding: ${(props) => props.theme.spacing[3]};
  border-radius: 5px;
  height: 3.9rem;
  width: 100%;
  margin-bottom: ${(props) => props.theme.spacing[5]};
  font-size: 1.6rem;
  font-family: "PP Neue Montreal", sans-serif;

  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
    font-style: italic;
  }
`;

const TextArea = styled.textarea`
  background: ${(props) => props.theme.colors.primary};
  border: none;
  padding: ${(props) => props.theme.spacing[3]};
  border-radius: 5px;
  min-height: 11.7rem;
  width: 100%;
  margin-bottom: ${(props) => props.theme.spacing[5]};
  font-size: 1.6rem;
  font-family: "PP Neue Montreal", sans-serif;

  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
    font-style: italic;
  }
`;

const Label = styled.label`
  font-family: "PP Migra", sans-serif;
  font-weight: bold;
  font-size: 1.6rem;
  padding-bottom: ${(props) => props.theme.spacing[2]};
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
