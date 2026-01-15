import { Accordian } from "./Accordian";
import { useNavigate } from "react-router-dom";

export const Home = ({ usersDetails, Signupbtn }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="home"></div>
      <button
        className="btn-logout"
        onClick={() => {
          sessionStorage.clear();
          navigate("/login");
        }}
      >
        LogOut
      </button>
      <Accordian data={JSON.parse(localStorage.getItem("userDetails"))} />
    </>
  );
};
