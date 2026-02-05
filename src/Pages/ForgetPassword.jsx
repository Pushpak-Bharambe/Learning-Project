import { useStatus } from "../Services/managestatus";
import { forgetPassword } from "../Services/LocalStorage";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainDiv = styled.div`
  height: 400px;
  width: 800px;
  text-align: center;
  margin-top: 100px;
  margin-left: 390px;
  display: flex;
  background-color: red;
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
  padding-bottom: 10px;
  .forgetuser {
    margin-top: 10px;
    height: 30px;
    width: 200px;
    border: none;
    border-bottom: 2px solid #1e1e36;
    outline: none;
    font-size: small;
    font-weight: bold;
  }

  .forgetuser:hover {
    border-bottom: 3px solid #5858d0;
  }

  .forgetuser:hover::placeholder {
    color: #5858d0;
    font-size: 13.5px;
  }

  .btn {
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

  .ifreset {
    color: rgb(7, 32, 28);
    font-family: Arial, Helvetica, sans-serif;
  }

  .spinner {
    width: 50px;
    height: 50px;
    border: 6px solid #ddd;
    border-top: 6px solid #041927;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const IfResetSuccess = styled.p`
  color: rgb(5, 111, 42);
  font-family: Arial, Helvetica, sans-serif;
`;

const IfError = styled.p`
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

export const Forget = ({ Signupbtn }) => {
  const { isSuccess, isError, setStatus } = useStatus("idle");

  const navigate = useNavigate();

  const handleforgetOnsubmit = (e) => {
    e.preventDefault();
    const forgetData = {
      username: e.target.username.value,
      newPassword: e.target.password.value,
    };

    if (forgetPassword(forgetData)) {
      setStatus("Success");
      setTimeout(() => {
        navigate("/login");
      }, 5000);
    } else {
      setStatus("Error");
    }
  };

  return (
    <MainDiv>
      <ImgDiv>
        <Img src="/forgetpassword.jpg" alt="forget"></Img>
      </ImgDiv>
      <ForgetForm onSubmit={handleforgetOnsubmit}>
        <h1>Forget Password</h1>
        <input
          name="username"
          className="forgetuser"
          placeholder="userName"
          type="text"
          required
        ></input>

        <input
          type="password"
          placeholder="password"
          className="forgetuser"
          name="password"
          required
        ></input>

        <button className="btn" type="submit">
          RESET
        </button>

        {isSuccess && (
          <>
            <IfResetSuccess>password reset Successfully</IfResetSuccess>
            <p>"Redirecting to login page</p>

            <div className="spinner" />
          </>
        )}
        {isError && <IfError>"Username Incorrect"</IfError>}
      </ForgetForm>
    </MainDiv>
  );
};
