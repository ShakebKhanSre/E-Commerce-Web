import React, { useEffect, useState } from "react";
import { enums } from "../../Enums/Enums";
import { login, setNavbarState } from "../../Redux/Auth/Action/Action.jsx";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../Components/Modal";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [modalState, setModalState] = useState(false);

  const onButtonPress = () => {
    setModalState(false);
    navigate("/");
  };

  useEffect(() => {
    dispatch(setNavbarState(false));
  }, []);

  const handleSignUpClick = () => {
    navigate("/sign-up");
  };

  const handelLogin = (e) => {
    e.preventDefault();
    e.stopPropagation();

    let params = {
      username: "mor_2314",
      password: "83r5^_",
    };

    dispatch(
      login(
        params,
        (res) => {
          if (res?.token) {
            setModalState(true);
            localStorage.setItem("token", res?.token);
          }
        },
        (err) => {
          console.log("err", err);
        }
      )
    );
  };

  const handleChange = (val, valueType) => {
    switch (valueType) {
      case "username":
        setUserName(val.target.value);
        break;
      case "password":
        setPassword(val.target.value);
        break;
      default:
        return;
    }
  };

  return (
    <div className="Login-Page">
      <img
        width="300"
        height="300"
        src="https://static.semrush.com/blog/uploads/media/e4/81/e4815bb11c067c2e423effe13fbf2e04/ecommerce-content-marketing-strategy.svg"
      />
      <form>
        <div className="Login-Container">
          <p>{enums.pleaseLogin}</p>
          <label>
            <input
              value={userName}
              onChange={(val) => handleChange(val, "username")}
              required
            />
          </label>
          <label>
            <input
              value={password}
              onChange={(val) => handleChange(val, "password")}
              required
            />
          </label>
        </div>

        <div className="New-User" onClick={handleSignUpClick}>
          <p>{enums.createNew}</p>
        </div>

        <div className="button">
          <button onClick={handelLogin}>{enums.login}</button>
        </div>
      </form>
      {modalState && (
        <Modal
          headingText={enums.youLogged}
          buttonText={enums.goBack}
          onButtonPress={onButtonPress}
        />
      )}
    </div>
  );
};

export default Login;
