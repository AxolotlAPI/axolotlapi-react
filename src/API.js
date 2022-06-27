import Axios from "axios";
import Cookies from "js-cookie";

const API ={
    login(username, password) {
        return new Promise((res, rej) => {
            Axios({
                url: "http://localhost:8080/api/user/login",
                method: "POST",
                data: {
                    username: username,
                    password: password
                }
            }).then((response) => {
                Cookies.set("accessToken", response.data.accessToken, { expires: 1 }); // Set an accessToken cookie that expires in 1 day
                res(response);
            }).catch(rej);
        });
    }
}

export default API;