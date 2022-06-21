import React from "react";

import Form from "../components/Form";

import API from "../API";

export default function PageLogin() {
    function handleLogin(button, inputs) {
        if (!inputs.email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,}$/)) return console.log("Invalid email!");

        API.login(inputs.email, inputs.password).then(() => {
            window.location.href = "/";
        });
    }

    const schema = {
        "email": {
            "label": "Email"
        },
        "password": {
            "type": "password",
            "label": "Password"
        }
    }

    return (
        <Form name="Login" buttons={[["Login", handleLogin], ["Register", handleLogin]]} schema={schema} />
    );
}