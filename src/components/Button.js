import React from "react";

import "../css/Button.css";

export default class Button extends React.Component {
    render() {
        return (
            <div className="btn btn-primary" onClick={this.props.onClick}>
                {this.props.children}
            </div>
        );
    }
}