import { useState } from "react";
import { ForgetUsername } from "./LocalStorage";
// import { Pagenav } from "./pagenav/pageNav";
import { useNavigate } from "react-router-dom";

export const ForgetUserName = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const HandleOnSubmitUserName = (e) => {
    e.preventDefault();

    // const ForegtUserData = {
    //   userEmail: e.target.userEmail.value,
    // };

    const result = ForgetUsername(e.target.userEmail.value);
    setUserName(result);
  };

  return (
    <div className="forget">
      <form className="Forgetuserform" onSubmit={HandleOnSubmitUserName}>
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
          <p className="forgetSucces">{` Your username is : ${userName}`}</p>
        )}
        {userName === undefined && (
          <p className="forgeterror">Email not found</p>
        )}
      </form>
    </div>
  );
};
