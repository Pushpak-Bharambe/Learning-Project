import styled from "styled-components";
import { authenticateUser } from "../Services/LocalStorage";
import { useStatus } from "../Services/managestatus";
import { useNavigate } from "react-router-dom";

const Input = styled.input`
  margin-top: 10px;
`;

const Container = styled.div`
  height: 400px;
  width: 800px;
  text-align: center;
  margin-top: 100px;
  margin-left: 390px;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 30px black;
`;

const StyledInput = styled(Input)`
  height: 30px;
  width: 200px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  height: 400px;
  width: 400px;
  margin-top: 0px;
  align-items: center;
  padding-bottom: 20px;
  padding-top: 15px;

  .loginuser {
    margin-top: 10px;
    height: 30px;
    width: 200px;
    border: none;
    border-bottom: 2px solid #1e1e36;
    outline: none;
    font-size: small;
    font-weight: bold;
  }

  .loginuser:hover {
    border-bottom: 3px solid #5858d0;
  }

  .loginuser:hover::placeholder {
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

  .btn:active {
    background: #5151db;
    transform: scale(0.95);
  }

  h1 {
    font-family: cursive;
    color: rgb(2, 78, 70);
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
  .links {
    display: flex;
    width: 300px;

    justify-content: space-evenly;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

    .linkforget {
      color: red;
    }
  }

  .links {
    display: flex;
    width: 400px;

    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    .linkforget {
      color: red;
    }
  }
`;

const Loginerror = styled.p`
  color: red;
  font-family: Arial, Helvetica, sans-serif;
`;

const Loginsuccess = styled.p`
  color: green;
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

export const Login = ({ Signupbtn }) => {
  const navigate = useNavigate();

  const { isSuccess, isError, setStatus } = useStatus("idle");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const userCredentials = {
      userNameOrEmail: e.target.userName.value,
      userPassword: e.target.password.value,
    };

    if (authenticateUser(userCredentials)) {
      setStatus("Success");
      return setTimeout(() => {
        navigate("/home");
      }, 5000);
    } else {
      setStatus("Error");
    }
  };

  return (
    <>
      <Container>
        <ImgDiv>
          <Img src="/loginimage.jpg" alt="login"></Img>
        </ImgDiv>
        <LoginForm onSubmit={handleOnSubmit}>
          <h1>LOGIN</h1>
          <StyledInput
            className=" loginuser"
            type="text"
            name="userName"
            required
            placeholder="Username/UserEmail"
          ></StyledInput>
          <StyledInput
            className=" loginuser"
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
            <p
              className="link"
              onClick={() => {
                navigate("/signup");
              }}
            >
              SignUp
            </p>
            <p
              className="linkforget"
              onClick={() => {
                navigate("/forget");
              }}
            >
              Forget Password
            </p>

            <p
              className="linkforget"
              onClick={() => {
                navigate("/ForgetUserName");
              }}
            >
              Forget UserName
            </p>
          </div>
          {isSuccess && (
            <>
              <Loginsuccess>
                "Congratulations you logged in successfully"
              </Loginsuccess>
              <p>"Redirecting to Home page</p>

              <div className="spinner" />
            </>
          )}
          {isError && (
            <Loginerror>"Username And Password Incorrect"</Loginerror>
          )}
        </LoginForm>
      </Container>
    </>
  );
};
