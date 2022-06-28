import React from "react";

import Form from "../components/Form";

import API from "../API";

export default function PageLogin() {
    function handleLogin(button, inputs) {
        if (inputs.username === "" || inputs.password === "") return console.error("Missing required fields.");

        API.login(inputs.username, inputs.password).then(() => {
            window.location.href = "/dashboard";
            return <></>;
        });
    }

    function redirectRegister() {
        window.location.href = "/register";
        return <></>;
    }

    const schema = {
        "username": {
            "label": "Username"
        },
        "password": {
            "type": "password",
            "label": "Password"
        }
    }

    return (
        <Form name="Login" buttons={[["Login", handleLogin], ["Register", redirectRegister]]} schema={schema} />
    );
}