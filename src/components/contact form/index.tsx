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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    alert("Form Submitted");
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
        onBlur={validateForm} // Validate on blur (when input loses focus)
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
        onBlur={validateForm} // Validate on blur
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
        onBlur={validateForm} // Validate on blur
      />

      <button
        type="submit"
        disabled={isSubmitDisabled}
        className={`bg-[#D1FD0A] font-['ClashDisplay-Medium']  text-black py-3 px-6 rounded font-semibold hover:bg-black hover:text-white transition ${
          isSubmitDisabled ? " cursor-not-allowed" : ""
        }`}
      >
        Send
      </button>
    </form>
  );
};

export default MyForm;
