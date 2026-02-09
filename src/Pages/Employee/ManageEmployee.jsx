import styled from "styled-components";
import { useEffect, useState } from "react";
import { EmployeeForm } from "./ManageForm";
import { Modal, Open, Window } from "../../CommonComponent/Modal";

const Tablediv = styled.div`
  max-height: 100%;
  width: 100%;
  margin-top: 2rem;
  padding-left: 5rem;
  padding-right: 5rem;
  /* box-shadow: 0 0 5px black; */
`;

const Caption = styled.caption`
  font-size: xx-large;
  font-family: cursive;
  color: rgb(2, 78, 70);
  margin-bottom: 2rem;
`;

const Table = styled.table`
  width: 100%;
  /* box-shadow: 0 0 5px black; */
  box-shadow: 0 0 5px black;

  border-collapse: collapse;
`;

const TR = styled.tr`
  height: 4rem;
  text-align: center;
  font-weight: 900;
  font-family: math;
  cursor: pointer;
  background-color: #ffffff;
  .name {
    color: #4e107d;
  }
`;

const TD = styled.td`
  border: none;
  border-bottom: 1px solid grey;
`;

const TH = styled.th`
  /* background-color: #3a3d3d; */
  background-color: #555656;

  color: white;
`;

export const ManageEmployee = () => {
  const [selectEmployee, setSelectEmployee] = useState(null);
  const [editEmployee, setEditEmployee] = useState([]);
  const [canEdit, setCanEdit] = useState(false);
  const [employeeList, setEmployeeList] = useState(
    JSON.parse(localStorage.getItem("EmpDetails")),
  );
  useEffect(() => {
    setEmployeeList(JSON.parse(localStorage.getItem("EmpDetails")));
  }, [canEdit]);

  return (
    <>
      <Modal>
        <Tablediv>
          <Table>
            <Caption>Manage Employees</Caption>
            <thead>
              <TR>
                <TH>EmployeeCode</TH>
                <TH>Name</TH>
                <TH>Department</TH>
                <TH>contact</TH>
                <TH>Hire Date</TH>
                <TH>Role</TH>
                <TH>Status</TH>
              </TR>
            </thead>

            <tbody>
              {employeeList?.map((emp) => (
                <Open
                  key={emp.EmployeeCode}
                  opens="Employee_form"
                  setSelectEmployee={setSelectEmployee}
                  setEditEmployee={setEditEmployee}
                  setCanEdit={setCanEdit}
                  emp={emp}
                >
                  <TR
                  // onClick={() => {
                  //   setSelectEmployee(emp);
                  //   setEditEmployee(emp);
                  //   setCanEdit(false);
                  // }}
                  >
                    <TD>{emp.EmployeeCode}</TD>
                    <TD className="name">
                      {emp.empFirstName} {emp.empLastName}
                    </TD>
                    <TD>{emp.empDepartment}</TD>
                    <TD>{emp.empEmail}</TD>
                    <TD>{emp.empStartDate}</TD>
                    <TD>{emp.empPosition}</TD>
                    <TD>{emp.EmployeeStatus}</TD>
                  </TR>
                </Open>
              ))}
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
          />
        </Window>
      </Modal>
    </>
  );
};
