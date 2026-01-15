import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Login } from "../Login";
import { Signup } from "../Signup";
import { Forget } from "../Forget";
import { Home } from "../Home";
import { ForgetUserName } from "../ForegetUsername";
import { PageNotFound } from "../PageNotFound";

export const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route index element={<Navigate to="/login" replace />} /> */}
          <Route index element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forget" element={<Forget />} />
          <Route path="home" element={<Home />} />
          <Route path="forgetusername" element={<ForgetUserName />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
