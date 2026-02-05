import styled from "styled-components";

import { Card } from "../../CommonComponent/Cards";

import { useNavigate } from "react-router-dom";

const MainDiv = styled.div`
  background-color: white;

  width: 100rem;
  height: 100rem;
`;

const Information = styled.div`
  height: 20rem;
  width: 100rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: xxx-large;
  color: #ba9152;
  padding-left: 2rem;
  background-size: cover;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("office.jpg");
  background-repeat: no-repeat;
`;

const EmployeeDiv = styled.div`
  height: 25rem;
  width: 80rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10rem;
  gap: 40px;
  margin-top: 1rem;
  background-color: white;
`;

const Container = styled.main`
  background-color: white;
  height: 60rem;
  width: 80rem;
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding-right: 5rem;
  padding-left: 3rem;
  margin-left: 12.5rem;
`;

export const EmployeeDashboard = () => {
  const navigate = useNavigate();
  return (
    <MainDiv>
      <Information>
        <h1>This is Employee Page</h1>
      </Information>
      <EmployeeDiv>
        <Card
          icon={"person_add"}
          title={"Add Employees"}
          onClick={() => navigate("/AddEmployee")}
        />
        <Card
          icon={"manage_accounts"}
          title={"Manage Employees"}
          onClick={() => navigate("/ManageEmployee")}
        />
      </EmployeeDiv>
      <Container className="dashmain">
        <Card icon={"insert_drive_file"} title={"Payslips / documents"} />
        <Card icon={"account_balance_wallet "} title={"Expense Hub"} />
        <Card icon={"calendar_month"} title={"Leave & Time Off Tracker"} />
        <Card icon={"assessment"} title={"Talent / Performance"} />
      </Container>
    </MainDiv>
  );
};
