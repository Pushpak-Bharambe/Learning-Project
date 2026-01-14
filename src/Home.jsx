import { Accordian } from "./Accordian";

export const Home = ({ usersDetails, Signupbtn }) => {
  const logout = () => {
    Signupbtn("login");
  };

  return (
    <>
      <div className="home"></div>
      <button className="btn-logout" onClick={logout}>
        LogOut
      </button>
      <Accordian data={JSON.parse(localStorage.getItem("userDetails"))} />
    </>
  );
};
