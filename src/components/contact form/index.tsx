"use client";
import React, { useState } from "react";
import { TextField } from "@mui/material";

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {
      name: !formData.name,
      email: !formData.email || !/\S+@\S+\.\S+/.test(formData.email),
      message: !formData.message,
    };

    setErrors(newErrors);
    setIsSubmitDisabled(Object.values(newErrors).includes(true));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch(
        "https://formsubmit.co/xalide.haqverdiyeva@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: "New Contact Form Submission",
            _template: "table",
          }),
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="flex flex-col gap-4" noValidate onSubmit={handleSubmit}>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        variant="standard"
        error={errors.name}
        helperText={errors.name && "Name is required"}
        InputLabelProps={{ style: { color: "#ECE7E1" } }}
        InputProps={{ style: { color: "#ECE7E1" } }}
        sx={{
          "& .MuiInput-underline:before": { borderBottomColor: "#ECE7E1" },
          "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottomColor: "#ECE7E1",
          },
          "& .MuiInput-underline:after": { borderBottomColor: "#ECE7E1" },
        }}
        onBlur={validateForm}
      />

      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        type="email"
        required
        variant="standard"
        error={errors.email}
        helperText={errors.email && "Enter a valid email"}
        InputLabelProps={{ style: { color: "#ECE7E1" } }}
        InputProps={{ style: { color: "#ECE7E1" } }}
        sx={{
          "& .MuiInput-underline:before": { borderBottomColor: "#ECE7E1" },
          "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottomColor: "#ECE7E1",
          },
          "& .MuiInput-underline:after": { borderBottomColor: "#ECE7E1" },
        }}
        onBlur={validateForm}
      />

      <TextField
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        multiline
        rows={4}
        variant="standard"
        error={errors.message}
        helperText={errors.message && "Message is required"}
        InputLabelProps={{ style: { color: "#ECE7E1" } }}
        InputProps={{ style: { color: "#ECE7E1" } }}
        sx={{
          "& .MuiInput-underline:before": { borderBottomColor: "#ECE7E1" },
          "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottomColor: "#ECE7E1",
          },
          "& .MuiInput-underline:after": { borderBottomColor: "#ECE7E1" },
        }}
        onBlur={validateForm}
      />

      {submitStatus === "success" && (
        <p className="text-green-500">Message sent successfully!</p>
      )}
      {submitStatus === "error" && (
        <p className="text-red-500">
          Failed to send message. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitDisabled || isSubmitting}
        className={`bg-[#D1FD0A] font-['ClashDisplay-Medium'] text-black py-3 px-6 rounded font-semibold hover:bg-black hover:text-white transition ${
          isSubmitDisabled || isSubmitting
            ? "opacity-50 cursor-not-allowed"
            : ""
        }`}
      >
        {isSubmitting ? "Sending..." : "Send"}
      </button>
    </form>
  );
};

export default MyForm;
