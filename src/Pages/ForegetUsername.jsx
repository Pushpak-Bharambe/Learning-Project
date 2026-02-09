import { useState } from "react";
import { ForgetUsername } from "../Services/LocalStorage";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainDiv = styled.div`
  height: 400px;
  width: 800px;
  text-align: center;
  margin-top: 100px;
  margin-left: 390px;
  display: flex;
  box-shadow: 0 0 30px black;
`;

const ForgetForm = styled.form`
  height: 400px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 50px;

  .Forgetusername {
    margin-top: 10px;
    height: 30px;
    width: 200px;
    border: none;
    border-bottom: 2px solid #1e1e36;
    outline: none;
    font-size: small;
    font-weight: bold;
  }

  .Forgetusername:hover {
    border-bottom: 3px solid #5858d0;
  }

  .Forgetusername:hover::placeholder {
    color: #5858d0;
    font-size: 13.5px;
  }
  .btn {
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
`;

const ForgetSuccess = styled.p`
  color: rgb(5, 111, 42);
  font-family: Arial, Helvetica, sans-serif;
  font-size: large;
`;

const ForgetError = styled.p`
  color: red;
  font-family: Arial, Helvetica, sans-serif;
`;

const Img = styled.img`
  height: 400px;
  width: 400px;
`;

const ImgDiv = styled.div`
  height: 400px;
  width: 400px;
`;

export const ForgetUserName = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const HandleOnSubmitUserName = (e) => {
    e.preventDefault();

    const result = ForgetUsername(e.target.userEmail.value);
    setUserName(result);
  };

  return (
    <MainDiv>
      <ImgDiv>
        <Img src="/forgetusername.jpg" alt="forget"></Img>
      </ImgDiv>
      <ForgetForm className="Forgetuserform" onSubmit={HandleOnSubmitUserName}>
        <h1>Forget UserName</h1>
        <input
          type="email"
          name="userEmail"
          className="Forgetusername"
          placeholder="Enter your email"
        ></input>

        <button type="submit" className="btn">
          Forget
        </button>

        <button
          className="btn"
          onClick={() => {
            navigate("/login");
          }}
        >
          To-Login
        </button>

        {userName && (
          <ForgetSuccess>{` Your username is : ${userName}`}</ForgetSuccess>
        )}
        {userName === undefined && <ForgetError>Email not found</ForgetError>}
      </ForgetForm>
    </MainDiv>
  );
};
