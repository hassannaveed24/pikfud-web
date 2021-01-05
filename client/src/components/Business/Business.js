import React, { useState } from "react";
import recycle from "assets/Business/recycle.png";
import support from "assets/Business/support.png";
import coin from "assets/Business/coin.png";
import business1 from "assets/Business/business1.png";
import business2 from "assets/Business/business2.png";
import business3 from "assets/Business/business3.png";
import { useFormik } from "formik";
import { If, When, Then, Else } from "react-if";
import { Loader } from "components/common";

import { instance } from "utils";
import successIcon from "assets/Business/success-icon.png";
import Joi from "joi";
const formSchema = {
  name: Joi.string().trim().required().messages({
    "string.base": `Invalid name`,
    "string.empty": `Please enter a name`,
    "any.required": `Please enter a name`,
  }),
  phone: Joi.number().positive().required().messages({
    "number.base": `Please enter a valid phone number`,
    "number.empty": `Please enter a phone number`,
    "any.required": `Please enter a phone number`,
  }),
  email: Joi.string()
    .trim()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.base": `Invalid email`,
      "string.empty": `Please enter a email`,
      "any.required": `Please enter a email`,
    }),
};
const Business = () => {
  const [error, seterror] = useState(null);
  const [isLoading, setisLoading] = useState(null);
  const [success, setsuccess] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    validate: (values) => {
      let errors = {};
      const { name, phone, email } = values;

      const nameError = formSchema.name.validate(name);
      if (nameError?.error) errors.name = nameError.error.details[0].message;

      const phoneError = formSchema.phone.validate(phone);
      if (phoneError?.error) errors.phone = phoneError.error.details[0].message;

      const emailError = formSchema.email.validate(email);
      if (emailError?.error) errors.email = emailError.error.details[0].message;

      return errors;
    },
    onSubmit: async (values) => {
      const { name, phone, email } = values;
      setisLoading(true);
      try {
        await instance.post("/admin/bussiness", { name, phone, email });
        formik.resetForm();
        seterror(null);
        setsuccess(true);
        setTimeout(() => setsuccess(false), 5000);
      } catch (error) {
        seterror(error.message);
      }

      setisLoading(false);
    },
  });
  return (
    <>
      <div className="Header">
        <div className="Header__features">
          <h1 className="Header__features-title">
            Selling surplus food just got easy
          </h1>
          <div className="Header__features-container">
            <div className="Header__feature-container">
              <img alt="Features Icon" src={recycle} />
              <h2>Cut your waste</h2>
            </div>
            <div className="Header__feature-container">
              <img alt="Features Icon" src={support} />
              <h2>Attract new customers</h2>
            </div>
            <div className="Header__feature-container">
              <img alt="Features Icon" src={coin} />
              <h2>Win back sunk costs</h2>
            </div>
          </div>
        </div>

        <div className="Header__contact-container">
          <When condition={success}>
            <div className="Header__message-overlay">
              <img src={successIcon} alt="Request Succesfull" />
              <h3>
                We’ve got your request! Please check your inbox for next steps.
              </h3>
            </div>
          </When>
          <div className="Header__contact">
            <h2>Become Partner</h2>
            <form
              className="Header__contact-form"
              onSubmit={formik.handleSubmit}
            >
              <div className="Header__form-field">
                <label for="name">Name of Business</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
              </div>

              <div className="Header__form-field">
                <label for="phone">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                />
              </div>

              <div className="Header__form-field">
                <label for="email">Email address</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </div>
              <button type="submit">
                {isLoading ? "PLEASE WAIT" : "NEXT"}
              </button>
            </form>
            {formik.touched.name && (
              <p className="form-feedback">{formik.errors.name}</p>
            )}
            {formik.touched.phone && (
              <p className="form-feedback"> {formik.errors.phone}</p>
            )}
            {formik.touched.email && (
              <p className="form-feedback">{formik.errors.email}</p>
            )}
            {<p className="form-feedback">{error}</p>}
          </div>
        </div>
      </div>
      <div className="Process">
        <h1 className="Process__title">How it works?</h1>
        <div className="Process__steps">
          <div className="Process__step">
            <div className="Process__counter-1">1</div>

            <div className="Process__step-content">
              <h1 className="Process__step-content__title">
                Once you’ve signed up, you directly show in the app - let’s
                style your profile!
              </h1>
              <h2>
                1. Download the Pikfud Retailer app or sign up here.
                <br />
                <br />
                <br />
                2. Go to Sales planner and add:
                <br />- Logo
                <br /> - Profile background
                <br /> - Description
                <br />- Pick up information
              </h2>
            </div>
            <img
              alt="Process Icon"
              src={business1}
              className="Process__image-1"
            />
          </div>
          <div className="Process__step">
            <div className="Process__counter-2">2</div>

            <div className="Process__step-content">
              <h1 className="Process__step-content__title">
                Once you’ve signed up, you directly show in the app - let’s
                style your profile!
              </h1>
              <h2>
                1. Download the Pikfud Retailer app or sign up here.
                <br />
                <br />
                <br />
                2. Go to Sales planner and add:
                <br />- Logo
                <br /> - Profile background
                <br /> - Description
                <br />- Pick up information
              </h2>
            </div>
            <img
              alt="Process Icon"
              src={business2}
              className="Process__image-2"
            />
          </div>
          <div className="Process__step">
            <div className="Process__counter-3">3</div>

            <div className="Process__step-content">
              <h1 className="Process__step-content__title">
                Once you’ve signed up, you directly show in the app - let’s
                style your profile!
              </h1>
              <h2>
                1. Download the Pikfud Retailer app or sign up here.
                <br />
                <br />
                <br />
                2. Go to Sales planner and add:
                <br />- Logo
                <br /> - Profile background
                <br /> - Description
                <br />- Pick up information
              </h2>
            </div>
            <img
              alt="Process Icon"
              src={business3}
              className="Process__image-3"
            />
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Business;
