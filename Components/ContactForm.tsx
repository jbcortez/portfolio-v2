import React, { useState } from "react";
import styled from "styled-components";
import { FieldValues, useForm } from "react-hook-form";
import Button from "./Button";
import { useAppDispatch, useAppSelector } from "../redux/reduxHooks";
import { handleIsInteractive } from "../util/functions";
import Modal from "./Modal";
import { Cover } from "../styles/Components";
import useResetFormOnSubmit from "../hooks/useResetFormOnSubmit";
import useClearTimeout from "../hooks/useClearTimeout";
import { ThemeType } from "../types";

const ContactForm = () => {
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector((state) => state.site.theme);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [timer, setTimer] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    try {
      const result = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const formData = await result.json();
      console.log("data from api: ", formData);
    } catch (e) {
      console.error("Error submitting form: ", e);
    }
  };

  useResetFormOnSubmit(isSubmitSuccessful, reset, setShowModal, setTimer);
  useClearTimeout(timer, showModal);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <Label htmlFor={"name"}>Name*</Label>
        <Input
          mode={themeMode}
          id={"name"}
          {...register("name")}
          required={true}
          onMouseOver={() => handleIsInteractive(dispatch, true)}
          onMouseLeave={() => handleIsInteractive(dispatch, false)}
          placeholder={"Enter name"}
        />
      </FormControl>

      <FormControl>
        <Label htmlFor={"email"}>Email*</Label>
        <Input
          mode={themeMode}
          required={true}
          id={"email"}
          type={"email"}
          {...register("email")}
          placeholder={"Enter email"}
        />
      </FormControl>
      <FormControl>
        <Label htmlFor={"email"}>Message*</Label>
        <TextArea
          mode={themeMode}
          required={true}
          id={"message"}
          {...register("message")}
          placeholder={"Enter message"}
        />
      </FormControl>

      <Button style={{ fontWeight: "400" }} type={"submit"}>
        Submit
      </Button>
      {showModal && (
        <>
          <Modal>
            Thanks for reaching out. I&apos;ll get back to you within 48 hours.
          </Modal>

          <Cover onClick={() => setShowModal(false)} />
        </>
      )}
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

const Input = styled.input<{ mode: ThemeType }>`
  background: ${(props) =>
    props.mode === "dark"
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  border: ${(props) =>
    props.mode === "dark" ? "none" : `3px solid ${props.theme.colors.primary}`};
  padding: ${(props) => props.theme.spacing[3]};
  border-radius: 5px;
  height: 3.9rem;
  width: 100%;
  margin-bottom: ${(props) => props.theme.spacing[5]};
  font-size: 1.6rem;
  font-family: "PP Neue Montreal", sans-serif;
  color: ${(props) =>
    props.mode === "dark"
      ? props.theme.colors.secondary
      : props.theme.colors.primary};

  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
    font-style: italic;
  }
`;

const TextArea = styled.textarea<{ mode: ThemeType }>`
  background: ${(props) =>
    props.mode === "dark"
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  border: ${(props) =>
    props.mode === "dark" ? "none" : `3px solid ${props.theme.colors.primary}`};
  padding: ${(props) => props.theme.spacing[3]};
  border-radius: 5px;
  min-height: 11.7rem;
  width: 100%;
  margin-bottom: ${(props) => props.theme.spacing[5]};
  font-size: 1.6rem;
  font-family: "PP Neue Montreal", sans-serif;
  color: ${(props) =>
    props.mode === "dark"
      ? props.theme.colors.secondary
      : props.theme.colors.primary};

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
