import axios from "axios";

const API ={
    login(email, password) {
        return new Promise((res, rej) => {
            axios({
                url: "http://localhost:8080/api/user/login",
                method: "POST",
                data: {
                    email: email,
                    password: password
                }
            }).then((response) => {
                // Set a 24h valid cookie in ReactJS
                document.cookie = `accessToken=${response.data.accessToken}; max-age=${24 * 60 * 60 * 1000};`;
                res(response);
            });
        });
    }
}

export default API;