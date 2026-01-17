import { useStatus } from "./managestatus";
import { forgetPassword } from "./LocalStorage";
import { useNavigate } from "react-router-dom";

export const Forget = ({ Signupbtn }) => {
  const { isSuccess, isError, setStatus } = useStatus("idle");

  const navigate = useNavigate();

  // const login = () => {
  //   Signupbtn("login");
  // };

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
    <div className="forget">
      <form className="forgetform" onSubmit={handleforgetOnsubmit}>
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
            <p className="ifresetSuccess">password reset Successfully</p>
            <p className="ifreset">"Redirecting to login page</p>

            <div className="spinner" />
          </>
        )}
        {isError && <p className="iferror">"Username Incorrect"</p>}
      </form>
    </div>
  );
};
