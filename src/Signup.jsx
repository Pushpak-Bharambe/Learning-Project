import { useState } from "react";
import { useStatus } from "./managestatus";
import { CalculateAge } from "./ageCalculator";
import { addNewUser } from "./LocalStorage";

export const Signup = ({ Signupbtn }) => {
  const { isSuccess, isError, setStatus } = useStatus("Idle");
  const [dob, setDob] = useState("");

  // const [firstName, setFirstName] = useState("");

  // const [lastName, setLastName] = useState("");

  // const [userName, setUserName] = useState("");

  // const [password, setPassword] = useState("");

  // const [mobilenum, setMobileNum] = useState("");

  // const [status, setStatus] = useState(false);

  // const [success, setSuccess] = useState(false);

  // const [error, setError] = useState(false);

  const login = () => {
    Signupbtn("login");
  };

  // const [usersDetails, setUserDetails] = useState([]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(usersDetails);
    // console.log(e);

    // e.target.firstname.value;

    const newData = {
      firstName: e.target.firstname.value,
      lastName: e.target.lastname.value,
      userName: e.target.username.value,
      userEmail: e.target.Email.value,
      password: e.target.password.value,
      userDate: e.target.userDate.value,
      mobilenum: e.target.mobilenum.value,
      dob,
    };

    setStatus(addNewUser(newData) ? "Success" : "Error");
  };

  // let months = 0;

  // if (birthyear === previousYear) {
  //   months = 12 - birthyear;
  //   months += new Date().getFullYear();
  //   return ` Age: ${months} Month's`;
  // }
  //result % 12

  // return ` Age: ${new Date().getFullYear - birthyear} year's`;

  // if (year) {
  //   month = new Date().getMonth() - new Date(dob).getMonth();
  // }
  // if (year > 0) {
  //   return `${year}year`;
  // } else if (month > 0) {
  //   return `${month} month's`;
  // }

  return (
    <>
      <div className="signup">
        <br></br>
        <form className="signupform" onSubmit={handleOnSubmit}>
          <button className="btnlogin" onClick={login}>
            LOGIN
          </button>
          <h1>SIGNUP</h1>
          <input
            className="signupuser"
            type="text"
            name="firstname"
            required
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

          <button className="btn" type="submit">
            SignUp
          </button>
          <p className="signuperror">
            {isError ? "UserName Already exits" : ""}
          </p>
          <p className="signupsuccess">
            {isSuccess ? "SignUp Successfully" : ""}
          </p>
        </form>
      </div>
    </>
  );
};
