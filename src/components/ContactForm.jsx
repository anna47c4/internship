import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useFormState } from "react-hook-form";
/* onSubmit={submit} ref={theForm} */
function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm();

  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);

  const sendEmail = (formData) => {
    emailjs
      .send(
        "service_viq4n4m",
        "template_movr83b",
        formData,
        "GBcW1CZzJ1tQp4mWB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
    setIsSuccessfullySubmitted(true);
  };

  /*  const onSubmit = (data) => {
    console.log(data);
  }; */
  return (
    <>
      <form onSubmit={handleSubmit(sendEmail)}>
        <fieldset>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input
              type="name"
              name="name"
              id="name"
              {...register("name", {
                required: true,
                minLength: 1,
              })}
              disabled={formState.isSubmitting || isSuccessfullySubmitted}
            />
            {errors.name && errors.name.type === "required" && (
              <p className="errorMsg" style={{ color: "#D17575" }}>
                Name is required
              </p>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              {...register("email", {
                required: "E-mail is required",
                pattern: {
                  value:
                    /(?!(^[.-].*|[^@]*[.-]@|.*\.{2,}.*)|^.{254}.)([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@)(?!-.*|.*-\.)([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,15}/,
                  message: "E-mail is not valid",
                },
              })}
              disabled={formState.isSubmitting || isSuccessfullySubmitted}
            />
            {errors.email && (
              <p className="errorMsg" style={{ color: "#D17575" }}>
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              {...register("message", {
                required: true,
                minLength: 1,
                maxLength: 100,
              })}
              disabled={formState.isSubmitting || isSuccessfullySubmitted}
            />
            {errors.message && errors.message.type === "required" && (
              <p className="errorMsg" style={{ color: "#D17575" }}>
                Please write what your inquiry is about
              </p>
            )}
          </div>
          <div className="form-control-check">
            <input
              type="checkbox"
              id="my-id"
              name="consent"
              {...register("consent", {
                required: true,
              })}
            ></input>
            {errors.consent && errors.consent.type === "required" && (
              <p className="errorMsg">Please consent</p>
            )}
            <label for="my-id">
              By checking this box, you consent to sending your details to us
              over email. For more info check our{" "}
              <Link classname="link" to="../privacyPolicy">
                privacy policy
              </Link>{" "}
              where you will get more info on where, how and why we store your
              data.
            </label>
          </div>
          <button type="submit">SUBMIT</button>
        </fieldset>
        {isSuccessfullySubmitted && (
          <p className="submitMsg">
            Form submitted successfully, and we will get back to you as soon as
            possible!
          </p>
        )}
      </form>
    </>
  );
}

export default ContactForm;
