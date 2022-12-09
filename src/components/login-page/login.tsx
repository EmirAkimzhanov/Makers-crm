import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./style";

const LoginPage = () => {
  const navigate = useNavigate();
  const API = "http://35.184.247.17/";
  const [isUser, setIsUser] = useState({
    username: "",
    password: "",
  });

  const login = async () => {
    try {
      

      let res = await axios.post(`${API}api/token/`, { ...isUser });
      localStorage.setItem("token", JSON.stringify(res.data));
      navigate("/users/");
      console.log("worked");
      
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ marginLeft: "20%", marginTop: "10%" }}>
      <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          {/* <form > */}
          <label className={styles.label}>Login</label>
          
          <input
            type="text"
            value={isUser.username}
            required
            className={styles.input}
            placeholder="username"
            onChange={({ target: { value } }) =>
              setIsUser({ ...isUser, username: value })
            }
          />
          <input
            type="text"
            required
            value={isUser.password}
            className={styles.input}
            placeholder="password"
            onChange={({ target: { value } }) =>
              setIsUser({ ...isUser, password: value })
            }
          />
          <div className="flex space-x-2 justify-center">
            <button type="submit" className={styles.button}  onClick={login}>
              Click me
            </button>
          </div>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
