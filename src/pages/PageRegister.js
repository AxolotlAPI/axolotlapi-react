import React from "react";

import Form from "../components/Form";

import API from "../API";

export default function PageRegister() {
    function handleRegister(button, inputs) {
        if (inputs.username === "" || inputs.password === "" || inputs.confirmPassword === "" || inputs.email === "") return console.error("Missing required fields.");
        if (inputs.password !== inputs.confirmPassword) return console.error("Passwords don't match.");

        API.register(inputs.username, inputs.password, inputs.email).then(() => {
            window.location.href = "/dashboard";
            return <></>;
        });
    }

    function redirectLogin() {
        window.location.href = "/login";
        return <></>;
    }

    const schema = {
        "username": {
            "label": "Username"
        },
        "password": {
            "type": "password",
            "label": "Password"
        },
        "confirmPassword": {
            "type": "password",
            "label": "Confirm password"
        },
        "email": {
            "label": "E-mail"
        }
    }

    return (
        <Form name="Register" buttons={[["Register", handleRegister], ["Login", redirectLogin]]} schema={schema} />
    );
}