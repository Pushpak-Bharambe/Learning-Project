import { Link } from "react-router-dom";

export const Pagenav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/login">login</Link>
        </li>

        <li>
          <Link to="/forget">forget</Link>
        </li>

        <li>
          <Link to="/signup">signup</Link>
        </li>

        <li>
          <Link to="/home">home</Link>
        </li>

        <li>
          <Link to="/forgetusername">forgetUserName</Link>
        </li>
      </ul>
    </div>
  );
};
