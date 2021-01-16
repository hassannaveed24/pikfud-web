import React, { useState } from "react";
import recycle from "assets/Business/recycle.png";
import support from "assets/Business/support.png";
import coin from "assets/Business/coin.png";
import business1 from "assets/Business/business1.png";
import business2 from "assets/Business/business2.png";
import business3 from "assets/Business/business3.png";
import { useFormik } from "formik";
import { When } from "react-if";
import { instance } from "utils";
import successIcon from "assets/Business/success-icon.png";
import Joi from "joi";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pikfud - Business</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="Header">
        <div className="Header__features">
          <h1 className="Header__features-title">
          შეამცირე ჭარბი საკვების მარაგი
          </h1>
          <div className="Header__features-container">
            <div className="Header__feature-container">
              <img alt="Features Icon" src={recycle} />
              <h2>შეამცირე ნარჩენი ვარგისი საკვები</h2>
            </div>
            <div className="Header__feature-container">
              <img alt="Features Icon" src={support} />
              <h2>მოიზიდე ახალი მომხმარებლები</h2>
            </div>
            <div className="Header__feature-container">
              <img alt="Features Icon" src={coin} />
              <h2>შექმენი დამატებითი შემოსავალის წყარო</h2>
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
            <h2>გახდი პარტნიორი</h2>
            <form
              className="Header__contact-form"
              onSubmit={formik.handleSubmit}
            >
              <div className="Header__form-field">
                <label for="name">კომპანიის დასახელება</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
              </div>

              <div className="Header__form-field">
                <label for="phone">მობილურის ნომერი</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                />
              </div>

              <div className="Header__form-field">
                <label for="email">ელ.ფოსტა</label>
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
        <h1 className="Process__title">როგორ მუშაობს?</h1>
        <div className="Process__steps">
          <div className="Process__step">
            <div className="Process__counter step-1">1</div>

            <div className="Process__step-content">
              <h1 className="Process__step-content__title">
                Once you’ve signed up, you directly show in the app - let’s
                style your profile!
              </h1>
              <h2>
              1. ჩამოტვირთეთ პიკფუდის ბიზნეს აპლიკაცია ან დარეგისტრირდით აქ
                <br />
                <br />
                <br />
                2. ჩამონათვალის დამატება:
                <br />- კატეგორია
                <br /> - პროდუქტის დასახელება
                <br /> - მოკლე აღწერა
                <br />- ფოტოსურათის დამატება
                <br />- პრუდქტის ფასი
              </h2>
            </div>
            <img
              alt="Process Icon"
              src={business1}
              className="Process__image step-1"
            />
          </div>
          <div className="Process__step">
            <div className="Process__counter step-2">2</div>

            <div className="Process__step-content">
              <h1 className="Process__step-content__title">
                დაწყება
              </h1>
              <h2>
                1. დამატება წარმატებით დასრულდა.
                <br />
                <br />
                <br />
                2. შეიყვანეთ სასურველი დრო.
                <br />
                <br />
                <br />
                3. შეიყვანეთ რაოდენობა.
                <br />
                <br />
                <h5>როდესაც შეიყვანთ თქვენს პროდუქციას ჩვენს სისტემაში, აპლიკაცია ავტომატურად გაუგზავნის შეტყობინებას ახლო მდებარე მომხმარებლებს.</h5>
              </h2>
            </div>
            <img
              alt="Process Icon"
              src={business2}
              className="Process__image step-2"
            />
          </div>
          <div className="Process__step">
            <div className="Process__counter step-3">3</div>

            <div className="Process__step-content">
              <h1 className="Process__step-content__title">
              მომხმარებლები ჩვენი აპლიკაციის მეშვეობით შეიძენენ თქვენს პროდუქციას და ასაღებად მოვლენ თქვენს ლოკაციაზე
              </h1>
              <h2>
                1. ნახეთ შეკვეთები შეკვეთის  ველში.
                <br />
                <br />
                <br />
                2. აღნიშნეთ  შეკვეთილი პროდუქტი.
                <br />
                <br />
                <h5>სულ ესაა! წარმატებები</h5>
              </h2>
            </div>
            <img
              alt="Process Icon"
              src={business3}
              className="Process__image step-3"
            />
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Business;
