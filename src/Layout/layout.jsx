import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Login } from "../Login";
import { Signup } from "../Signup";
import { Forget } from "../Forget";
import { Home } from "../Home";
import { ForgetUserName } from "../ForegetUsername";
import { PageNotFound } from "../PageNotFound";
import { EmployeeDashboard } from "../Empolyee/employeeDash";
import { Navbar } from "../Empolyee/Navbar";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Navigate to="/login" replace />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="forget" element={<Forget />} />
            <Route path="home" element={<Home />} />
            <Route path="forgetusername" element={<ForgetUserName />} />
            <Route path="employeedashboard" element={<EmployeeDashboard />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};
