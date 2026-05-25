import styled from "styled-components";
import { useEffect, useState } from "react";
import { EmployeeForm } from "./ManageForm";
import { Modal, Open, Window } from "../../CommonComponent/Modal";
import { Navbar } from "../../CommonComponent/Navbar";
import API from "../../CommonComponent/TokenRequest";

/* ---------- PAGE WRAPPER ---------- */
const Page = styled.div`
  min-height: 100vh;
  background: #f6f7fb;
`;

/* ---------- TABLE WRAPPER ---------- */
const Tablediv = styled.div`
  margin: 2rem auto;
  padding: 2rem;
  width: 95%;
`;

/* ---------- HEADING ---------- */
const Caption = styled.caption`
  caption-side: top;
  text-align: center;

  font-size: 1.9rem;
  font-weight: 800;

  color: #0f172a;

  padding: 1.2rem 2rem;
  margin-bottom: 1rem;

  border-radius: 16px;

  background: linear-gradient(135deg, #ffffff, #f1f5f9, #e2e8f0);

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
`;

/* ---------- TABLE ---------- */
const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;

  background: white;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
`;

/* ---------- HEADER ---------- */
const TRHead = styled.tr`
  background: #f8fafc;
`;

const TH = styled.th`
  padding: 14px;
  text-align: center;
  font-size: 0.9rem;
  color: #334155;
  font-weight: 700;
  border-bottom: 1px solid #e2e8f0;
`;

/* ---------- ROW ---------- */
const TR = styled.tr`
  text-align: center;
  transition: all 0.2s ease;
  cursor: pointer;

  &:nth-child(even) {
    background: #f9fafb;
  }

  &:nth-child(odd) {
    background: #ffffff;
  }

  &:hover {
    background: #e0e7ff;
    transform: scale(1.002);
  }
`;

/* ---------- CELL ---------- */
const TD = styled.td`
  padding: 18px 14px;
  border-bottom: 1px solid #eef2f7;

  color: #334155;
  font-size: 0.92rem;
`;

/* ---------- NAME (IMPROVED UI STYLE) ---------- */
const Name = styled.span`
  font-weight: 800;
  font-size: 1.05rem;

  background: linear-gradient(90deg, #1e3a8a, #4f46e5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  letter-spacing: 0.3px;
`;

/* ---------- STATUS BADGE ---------- */
const Status = styled.span`
  display: inline-block;
  padding: 6px 14px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  color: ${({ status }) =>
    status?.toLowerCase() === "active" ? "#166534" : "#991b1b"};

  background: ${({ status }) =>
    status?.toLowerCase() === "active"
      ? "rgba(34, 197, 94, 0.15)"
      : "rgba(239, 68, 68, 0.15)"};

  box-shadow: ${({ status }) =>
    status?.toLowerCase() === "active"
      ? "0 4px 12px rgba(34, 197, 94, 0.12)"
      : "0 4px 12px rgba(239, 68, 68, 0.12)"};
`;

export const ManageEmployee = () => {
  const [selectEmployee, setSelectEmployee] = useState(null);
  const [editEmployee, setEditEmployee] = useState([]);
  const [canEdit, setCanEdit] = useState(false);
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await API.get("/users");
        setEmployeeList(users.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Page>
      <Navbar />

      <Modal>
        <Tablediv>
          <Table>
            <Caption>Employee Management Dashboard</Caption>

            <thead>
              <TRHead>
                <TH>Code</TH>
                <TH>Name</TH>
                <TH>Department</TH>
                <TH>Email</TH>
                <TH>Hire Date</TH>
                <TH>Position</TH>
                <TH>Status</TH>
              </TRHead>
            </thead>

            <tbody>
              {employeeList.length > 0 ? (
                employeeList.map((emp, index) => (
                  <Open
                    key={emp.id || index}
                    opens="Employee_form"
                    setSelectEmployee={setSelectEmployee}
                    setEditEmployee={setEditEmployee}
                    setCanEdit={setCanEdit}
                    emp={emp}
                  >
                    <TR>
                      <TD>{emp.employeecode}</TD>
                      <TD>
                        <Name>
                          {emp.firstname} {emp.lastname}
                        </Name>
                      </TD>
                      <TD>{emp.department}</TD>
                      <TD>{emp.email}</TD>
                      <TD>{emp.hiredate}</TD>
                      <TD>{emp.position}</TD>
                      <TD>
                        <Status status={emp.employeestatus}>
                          {emp.employeestatus}
                        </Status>
                      </TD>
                    </TR>
                  </Open>
                ))
              ) : (
                <tr>
                  <TD colSpan="7">No employees found</TD>
                </tr>
              )}
            </tbody>
          </Table>
        </Tablediv>

        <Window name="Employee_form">
          <EmployeeForm
            selectEmployee={selectEmployee}
            editEmployee={editEmployee}
            canEdit={canEdit}
            setEditEmployee={setEditEmployee}
            setCanEdit={setCanEdit}
            setEmployeeList={setEmployeeList}
            employeeList={employeeList}
          />
        </Window>
      </Modal>
    </Page>
  );
};
