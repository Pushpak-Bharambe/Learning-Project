import { useState } from "react";
import styled from "styled-components";
import { authenticateUser } from "./LocalStorage";
import { useStatus } from "./managestatus";

const Input = styled.input`
  margin-top: 10px;
`;

const Container = styled.div`
  height: 400px;
  width: 400px;
  /* background-color: blue; */
  /* display: flex; */
  text-align: center;
  margin-top: 100px;
`;

const StyledInput = styled(Input)`
  height: 30px;
  width: 200px;
`;

export const Login = ({ Signupbtn }) => {
  // const [userName, setUserName] = useState("");
  // const [userPassword, setUserPassword] = useState("");

  //   const [usersDetails, setUserDetails] = useState([]);

  //   const handleOnSubmit = (e) => {
  //     e.preventDefault();

  //     setUserDetails((previousUsers) => [
  //       ...previousUsers,
  //       { userName, userPassword },
  //     ]);
  //   };
  const { isSuccess, isError, setStatus } = useStatus("idle");
  const handleOnSubmit = (e) => {
    e.preventDefault();

    // console.log(usersDetails);

    const userCredentials = {
      userName: e.target.userName.value,
      userPassword: e.target.password.value,
    };

    if (authenticateUser(userCredentials)) {
      setStatus("Success");
      return setTimeout(() => {
        Signupbtn("home");
      }, 5000);
    } else {
      setStatus("Error");
    }
  };

  const signup = () => {
    Signupbtn("SignUp");
  };

  const forget = () => {
    Signupbtn("forget");
  };

  return (
    <>
      <Container>
        <form className="loginform" onSubmit={handleOnSubmit}>
          <h1>LOGIN</h1>
          <StyledInput
            // className=" loginuser"
            type="text"
            name="userName"
            required
            placeholder="Username"
          ></StyledInput>
          <StyledInput
            // className=" loginuser"
            type="password"
            name="password"
            required
            placeholder="Password"
          ></StyledInput>
          <br></br>
          <button className="btn" type="submit">
            Login
          </button>
          <div className="links">
            <p className="link" onClick={signup}>
              SignUp
            </p>
            <p className="linkforget" onClick={forget}>
              Forget Password
            </p>
          </div>
          {isSuccess && (
            <>
              <p className="loginsuccess">
                "Congratulations you logged in successfully"
              </p>
              <p className="successredirect">"Redirecting to Home page</p>

              <div className="spinner" />
            </>
          )}
          {isError && (
            <p className="loginerror">"Username And Password Incorrect"</p>
          )}
        </form>
      </Container>
    </>
  );
};
