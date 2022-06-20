import React from "react";
import Button from "../components/Button";

export default class PageLogin extends React.Component {
    constructor(props) {
        super(props);
        
        // this.schema = yup.object({
        //     email: yup.string().email().required(),
        //     password: yup.string().required()
        // });
    }

    handleSubmit(values, form) {
        console.log(values);
        console.log(form);
    }

    render() {
        return (
            <form>
                <div className="form-row">
                    <h2>Login</h2>
                </div>

                <div className="form-row">
                    <h4>E-mail</h4>
                    <input name="email"></input>
                </div>

                <div className="form-row">
                    <h4>Password</h4>
                    <input name="password" type="password"></input>
                </div>

                <div className="form-row">
                    <Button onClick={this.handleSubmit}>Test</Button>
                </div>
            </form>
        );
    }

    // return (
    //     <div className="marginedContent">
    //         <Form schema={loginSchema} handleSubmit={handleSubmit}>

    //         </Form>
    //     </div>
    // );
}