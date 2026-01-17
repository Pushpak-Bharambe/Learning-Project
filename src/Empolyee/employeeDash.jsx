import styled from "styled-components";
import { Navbar } from "./Navbar";
import { Card } from "./Cards";

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

const Container = styled.main`
  background-color: white;
  height: 60rem;
  width: 80rem;
  margin-top: 1rem;
  color: #dd1818;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding-right: 5rem;
  padding-left: 5rem;
  margin-left: 12.5rem;
`;

export const EmployeeDashboard = () => {
  return (
    <MainDiv>
      <Information>
        <h1>This is Employee Page</h1>
      </Information>

      <Container className="dashmain">
        <Card icon={"insert_drive_file"} title={"Payslips / documents"} />
        <Card icon={"account_balance_wallet "} title={"Expense Hub"} />
        <Card icon={"calendar_month"} title={"Leave & Time Off Tracker"} />
        <Card icon={"assessment"} title={"Talent / Performance"} />
      </Container>
    </MainDiv>
  );
};
