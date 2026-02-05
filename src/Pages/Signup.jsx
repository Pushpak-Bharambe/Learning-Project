import { useState } from "react";
import { useStatus } from "../Services/managestatus";
import { CalculateAge } from "../Services/ageCalculator";
import { addNewUser } from "../Services/LocalStorage";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainDiv = styled.div`
  height: 650px;
  width: 1000px;
  text-align: center;
  margin-top: 50px;
  margin-left: 260px;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 30px black;
`;
const SignUpForm = styled.form`
  display: flex;
  height: 650px;
  width: 500px;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  margin-left: 300px;

  .signupuser {
    margin-top: 10px;
    height: 30px;
    width: 200px;
    border: none;
    border-bottom: 2px solid #1e1e36;
    outline: none;
    font-size: small;
    font-weight: bold;
  }

  .signupuser:hover {
    border-bottom: 3px solid #5858d0;
  }
  .signupuser:hover::placeholder {
    color: #5858d0;
    font-size: 13.5px;
  }
  .btnSignup {
    margin-bottom: 20px;
    height: 30px;
    width: 200px;
    font-size: large;
    color: whitesmoke;
    background-color: #5858d0;
    border: none;
  }
  h1 {
    font-family: cursive;
    color: rgb(2, 78, 70);
  }
  .btnlogin {
    margin-top: 20px;
    margin-left: 300px;
    height: 30px;
    width: 70px;
    font-size: large;
    background-color: #5858d0;
    color: whitesmoke;
    border: none;
    outline: none;
  }
`;

const SignUpSuccess = styled.p`
  color: green;
  font-family: Arial, Helvetica, sans-serif;
`;

const SignUpError = styled.p`
  color: red;
  font-family: Arial, Helvetica, sans-serif;
`;

const ImgDiv = styled.div`
  height: 650px;
  width: 200px;
`;

const Img = styled.img`
  height: 650px;
  width: 500px;
`;

export const Signup = ({ Signupbtn }) => {
  const navigate = useNavigate();
  const { isSuccess, isError, setStatus } = useStatus("Idle");
  const [dob, setDob] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const handleOnSubmit = (e) => {
    e.preventDefault();

    const newData = {
      firstName: e.target.firstname.value,
      lastName: e.target.lastname.value,
      userName: e.target.username.value,
      userEmail: e.target.Email.value,
      password: e.target.password.value,
      userDate: e.target.userDate.value,
      mobilenum: e.target.mobilenum.value,
      confirmPassword: e.target.confirmpassword.value,
      dob,
    };

    setStatus(addNewUser(newData, setConfirmPass) ? "Success" : "Error");
  };

  return (
    <>
      <MainDiv>
        <ImgDiv>
          <Img src="/employeeimage.jpg" alt="img"></Img>
        </ImgDiv>
        <SignUpForm onSubmit={handleOnSubmit}>
          <button
            className="btnlogin"
            onClick={() => {
              navigate("/login");
            }}
          >
            LOGIN
          </button>
          <h1>SIGNUP</h1>

          <input
            className="signupuser"
            type="text"
            name="firstname"
            required
            disabled={false}
            placeholder="Enter User FirstName"
          ></input>
          <input
            className="signupuser"
            type="text"
            name="lastname"
            required
            placeholder="Enter User Lastname"
          ></input>

          <input
            className="signupuser"
            type="text"
            name="username"
            placeholder="Enter UserName"
            required
          ></input>
          <input
            className="signupuser"
            type="email"
            name="Email"
            placeholder="Enter Email"
            required
          ></input>

          <input
            className="signupuser"
            type="password"
            name="password"
            placeholder="Enter Password"
            required
          ></input>

          <input
            className="signupuser"
            type="password"
            name="confirmpassword"
            placeholder="Confirm Password"
            required
          ></input>

          <input
            className="signupuser"
            type="date"
            name="userDate"
            required
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          ></input>
          <span>{CalculateAge(dob)}</span>
          <input
            className="signupuser"
            type="text"
            name="mobilenum"
            placeholder="Enter Mobilenumber"
            required
          ></input>
          <br></br>

          <button className="btnSignup" type="submit">
            SignUp
          </button>
          {isError && <SignUpError>{confirmPass}</SignUpError>}
          {isSuccess && <SignUpSuccess> SignUp Successfully</SignUpSuccess>}
        </SignUpForm>
      </MainDiv>
    </>
  );
};
