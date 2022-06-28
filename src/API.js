import Axios from "axios";

const hostname = "http://localhost:8080";

const API = {
    login(username, password) {
        return new Promise((res, rej) => {
            Axios({
                url: `${hostname}/api/user/login`,
                method: "POST",
                data: {
                    username: username,
                    password: password
                }
            }).then((response) => {
                localStorage.setItem("accessToken", response.data.accessToken);
                res(response);
            }).catch(rej);
        });
    },

    register(username, password, email) {
        return new Promise((res, rej) => {
            Axios({
                url: `${hostname}/api/user/register`,
                method: "POST",
                data: {
                    username: username,
                    password: password,
                    email: email
                }
            }).then((response) => {
                localStorage.setItem("accessToken", response.data.accessToken);
                res(response);
            }).catch(rej);
        })
    }
}

export default API;