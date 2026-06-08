import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Login } from "../Pages/Login";
import { Signup } from "../Pages/Signup";
import { Forget } from "../Pages/ForgetPassword";
import { Home } from "../Pages/Home";
import { ForgetUserName } from "../Pages/ForegetUsername";
import { PageNotFound } from "../Pages/PageNotFound";
import { EmployeeDashboard } from "../Pages/Employee/employeeDash";
import { Toaster } from "react-hot-toast";
import { AddEmployee } from "../Pages/Employee/AddEmployee";
import { ManageEmployee } from "../Pages/Employee/ManageEmployee";
import { ProtectedRoute } from "./ProtectedRoute";
import { ManagerEmployees } from "../Pages/Employee/ManagerEmployees";
import { Timesheet } from "../Pages/Employee/TimeSheet";

export const Layout = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Navigate to="/home" replace />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="forget" element={<Forget />} />
            <Route path="/managerEmployees" element={<ManagerEmployees />} />

            <Route path="forgetusername" element={<ForgetUserName />} />

            <Route
              path="/employee-dashboard"
              element={
                // <ProtectedRoute>

                <EmployeeDashboard />

                // </ProtectedRoute>
              }
            />

            <Route
              path="AddEmployee"
              element={
                // <ProtectedRoute>
                <AddEmployee />
                // </ProtectedRoute>
              }
            />

            <Route
              path="ManageEmployee"
              element={
                // <ProtectedRoute>
                <ManageEmployee />
                // </ProtectedRoute>
              }
            />

            <Route path="TimeSheet" element={<Timesheet />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toasterId="default"
          toastOptions={{
            style: {
              background: "#464646",
              color: "white",
              height: "5rem",
              width: "20rem",
            },

            success: {
              duration: 3000,
              iconTheme: {
                primary: "green",
                secondary: "black",
              },
            },

            error: {
              duration: 3000,
              iconTheme: {
                primary: "red",
                secondary: "black",
              },
            },
          }}
        />
      </div>
    </>
  );
};
