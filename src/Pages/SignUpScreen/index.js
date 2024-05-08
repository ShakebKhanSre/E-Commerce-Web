import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Modal from "../../Components/Modal";
import { enums } from "../../Enums/Enums";
import { signUp } from "../../Redux/Action/Action.jsx";
import "./index.css";

const SignUpScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [modalState, setModalState] = useState(false);

  const onButtonPress = () => {
    setModalState(false);
    navigate("/login");
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let params = {
      email: email,
      username: userName,
      password: password,
      name: {
        firstname: firstName,
        lastname: lastName,
      },
      address: {
        city: "kilcoole",
        street: "7835 new road",
        number: 3,
        zipcode: "12926-3874",
        geolocation: {
          lat: "-37.3159",
          long: "81.1496",
        },
      },
      phone: "1-570-236-7033",
    };
    dispatch(
      signUp(
        params,
        (res) => {
          if (res?.id) {
            setModalState(true);
          }
        },
        (err) => {
          console.log(err);
        }
      )
    );
  };

  return (
    <div className="Sign-Container">
      <form>
        <h3>{enums.crateAccount}</h3>

        <label>{enums.enterEmail}</label>
        <input
          type="email"
          value={email}
          className="Outer-Input"
          onChange={(val) => {
            setEmail(val.target.value);
          }}
          required
        />

        <label>{enums.enterName}</label>
        <input
          type="text"
          value={userName}
          className="Outer-Input"
          onChange={(val) => {
            setUserName(val.target.value);
          }}
          required
        />

        <label>{enums.password}</label>
        <input
          className="Outer-Input"
          type="text"
          value={password}
          onChange={(val) => {
            setPassword(val.target.value);
          }}
          required
        />

        <div className="First-Last">
          <div className="Name">
            <label>{enums.firstName}</label>
            <input
              className="Inner-Input"
              type="text"
              value={firstName}
              onChange={(val) => {
                setFirstName(val.target.value);
              }}
              required
            />
          </div>

          <div className="Name">
            <label>{enums.lastName}</label>
            <input
              className="Inner-Input"
              type="text"
              value={lastName}
              onChange={(val) => {
                setLastName(val.target.value);
              }}
              required
            />
          </div>
        </div>
        <button onClick={handleSignUp}>{enums.signUp}</button>
      </form>
      {modalState && (
        <Modal
          headingText={enums.signedUp}
          buttonText={enums.loginPage}
          onButtonPress={onButtonPress}
        />
      )}
    </div>
  );
};

export default SignUpScreen;
