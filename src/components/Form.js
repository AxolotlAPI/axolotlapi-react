import React from "react";

import Button from "../components/Button"

import "../css/Form.css";

function randomBytes(length=8) {
    let res = "";
    for (let i = 0; i < length; i++) {
        res += Math.floor(Math.random() * 36).toString(36);
    }
    return res;
}

export default class Form extends React.Component {
    render() {
        let rows = [];

        if (this.props.name) {
            rows.push(
                <div className="form-row" key={randomBytes()}>
                    <h2>{this.props.name}</h2>
                </div>
            );
        }

        Object.entries(this.props.schema).forEach(([name, data]) => {
            rows.push(
                <div className="form-row" key={randomBytes()}>
                    <label>{data.label}</label>
                    <input name={name} type={data.type}></input>
                </div>
            );
        });

        if (this.props.buttons) {
            this.props.buttons.forEach(([name, handler]) => {
                function customHandler(e) {
                    e.preventDefault();

                    let inputs = {};
                    e.target.parentElement.querySelectorAll("input").forEach(input => {
                        inputs[input.name] = input.value;
                    });
                    
                    handler(e.target, inputs);
                }

                rows.push(
                    <Button onClick={customHandler} key={randomBytes()}>{name}</Button>
                );
            });
        }

        return (
            <form>
                {rows}
            </form>
        );
    }
}