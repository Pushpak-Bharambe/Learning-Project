import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Login } from "../Pages/Login";
import { Signup } from "../Pages/Signup";
import { Forget } from "../Pages/ForgetPassword";
import { Home } from "../Pages/Home";
import { ForgetUserName } from "../Pages/ForegetUsername";
import { PageNotFound } from "../Pages/PageNotFound";
import { EmployeeDashboard } from "../Pages/Employee/employeeDash";
import { Navbar } from "../CommonComponent/Navbar";
import { AddEmployee } from "../Pages/Employee/AddEmployee";
import { ManageEmployee } from "../Pages/Employee/ManageEmployee";

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
            <Route path="AddEmployee" element={<AddEmployee />} />
            <Route path="ManageEmployee" element={<ManageEmployee />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};
