// import "./Style.css";
// import { Login } from "./Login";
// import { Signup } from "./Signup";
// import { useState } from "react";
// import { Forget } from "./Forget.jsx";
// import { Home } from "./Home.jsx";
import { Layout } from "./Layout/layout";

export function App() {
  // const [activePage, setActivePage] = useState("login");
  // // console.log(usersDetails);
  // switch (activePage) {
  //   // case "login":
  //   //   return <Login Signupbtn={setActivePage} usersDetails={usersDetails} />;
  //   case "SignUp":
  //     return <Signup Signupbtn={setActivePage} />;
  //   case "forget":
  //     return <Forget Signupbtn={setActivePage} />;
  //   case "home":
  //     return <Home Signupbtn={setActivePage} />;
  //   default:
  //     return <Login Signupbtn={setActivePage} />;

  return (
    <>
      <Layout />
    </>
  );

  // }
}
