import { useState } from "react";
import errorIcon from "../images/icon-error.svg";

const Form = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    const [formErrors, setFormErrors] = useState({});
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    function handleOnChange(event) {
        setFormData((prevFormData) => {
            const { name, value } = event.target;
            return {
                ...prevFormData,
                [name]: value,
            };
        });
    }

    const validate = (values) => {
        const errors = {};
        if (!values.firstName) {
            errors.firstName = "First name cannot be empty";
        }
        if (!values.lastName) {
            errors.lastName = "Last name cannot be empty";
        }
        if (!values.email) {
            errors.email = "Email cannot be empty";
        } else if (!regex.test(values.email)) {
            errors.email = "This does not look like an email address";
        }
        if (!values.password) {
            errors.password = "Password name cannot be empty";
        }
        return errors;
    };

    const clearFormData = () => {
        alert("Thank You For Your Subscription!!😁");
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        });
    };

    function handleOnSubmit(event) {
        event.preventDefault();
        setFormErrors(validate(formData));
        if (
            formData.firstName &&
            formData.lastName &&
            regex.test(formData.email) &&
            formData.password
        ) {
            clearFormData();
        }
    }

    return (
        <main className="form-container">
            <div className="subtitle-container">
                <h2 className="subtitle">
                    <span className="subtitle-accent">Try it free 7 days</span>{" "}
                    then $20/mo. thereafter
                </h2>
            </div>
            <form className="form" onSubmit={handleOnSubmit}>
                <div className="form-input-container">
                    <input
                        className="form-input"
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleOnChange}
                        style={{
                            borderColor: formErrors.firstName
                                ? "#FF7979"
                                : null,
                        }}
                    />
                    {formErrors.firstName ? (
                        <img
                            src={errorIcon}
                            alt="error icon"
                            className="error-icon"
                        />
                    ) : null}
                    <p className="error-msg">{formErrors.firstName}</p>
                </div>
                <div className="form-input-container">
                    <input
                        className="form-input"
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleOnChange}
                        style={{
                            borderColor: formErrors.lastName ? "#FF7979" : null,
                        }}
                    />
                    {formErrors.lastName ? (
                        <img
                            src={errorIcon}
                            alt="error icon"
                            className="error-icon"
                        />
                    ) : null}
                    <p className="error-msg">{formErrors.lastName}</p>
                </div>
                <div className="form-input-container">
                    <input
                        className="form-input"
                        type="text"
                        placeholder="Email Address"
                        name="email"
                        value={formData.email}
                        onChange={handleOnChange}
                        style={{
                            color: formErrors.email ? "#FF7979" : null,
                            borderColor: formErrors.email ? "#FF7979" : null,
                        }}
                    />
                    {formErrors.email ? (
                        <img
                            src={errorIcon}
                            alt="error icon"
                            className="error-icon"
                        />
                    ) : null}
                    <p className="error-msg">{formErrors.email}</p>
                </div>
                <div className="form-input-container">
                    <input
                        className="form-input"
                        type="text"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleOnChange}
                        style={{
                            borderColor: formErrors.password ? "#FF7979" : null,
                        }}
                    />
                    {formErrors.password ? (
                        <img
                            src={errorIcon}
                            alt="error icon"
                            className="error-icon"
                        />
                    ) : null}
                    <p className="error-msg">{formErrors.password}</p>
                </div>

                <button className="form-btn" type="submit">
                    Claim your free trial
                </button>
                <p className="form-subtext">
                    By clicking the button, you are agreeing to our{" "}
                    <span className="form-subtext-accent">
                        Terms and Services
                    </span>
                </p>
            </form>
        </main>
    );
};

export default Form;
