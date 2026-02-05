import styled from "styled-components";
import Icon from "@mui/material/Icon";
import { useState } from "react";
// import { Modal } from "../../Empolyee/Model";
import { ModalBucket } from "../../CommonComponent/Modal";
import { HandleSave, handleDelete } from "../../Services/LocalStorage";

const Tablediv = styled.div`
  height: 100vh;
  width: 100%;
  margin-top: 2rem;
  padding-left: 5rem;
  padding-right: 5rem;
`;

const Caption = styled.caption`
  font-size: xx-large;
  font-family: cursive;
  color: rgb(2, 78, 70);
  margin-bottom: 2rem;
`;

// const Thead = styled.thead`
//   //   height: 4rem;
//   //   width: 100%;
// `;

const Table = styled.table`
  width: 100%;
  // ${({ isBlur }) => isBlur && `filter: blur(10px)`}
`;

const TR = styled.tr`
  height: 4rem;

  border: none;
  text-align: center;
  font-weight: 900;
  font-family: math;
  cursor: pointer;
  background-color: #b2b2f4;
`;

const Form = styled.form`
  height: 25rem;
  width: 40rem;
  /* background-color: rebeccapurple; */
  display: flex;
  margin-right: 50rem;
  gap: 20px;
  margin-top: 15px;
`;

const ModelDiv1 = styled.div`
  height: 25rem;
  width: 20rem;
  display: flex;
  flex-direction: column;
  /* background-color: yellow; */
  gap: 10px;
  margin-left: 20px;
`;

const ModelDiv2 = styled.div`
  height: 25rem;
  width: 20rem;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  gap: 10px;
  margin-left: 5rem;
`;

const Input = styled.input`
  height: 30px;
  width: 200px;
  margin-left: 1rem;
  margin-bottom: 0.1rem;
  border: none;
  outline: none;
  border-bottom: 2px solid black;
`;

const Label = styled.label`
  margin-top: 1.5rem;
  margin-left: 1rem;
  font-weight: 600;
`;

const Button = styled.button`
  margin-left: 620px;
  font-weight: bold;
  font-size: xx-large;
  outline: none;
  border: none;
  background-color: transparent;
`;

const H2 = styled.h2`
  margin-left: 210px;
  font-family: cursive;
  color: rgb(2, 78, 70);
  top: 0;
  margin-bottom: 2rem;
`;

const BtnDiv = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 20px;

  .editbtn {
    background-color: #5aa1bd;
    height: 30px;
    width: 70px;
    border: none;
    outline: none;
    border-radius: 3px;
    color: white;
    font-size: large;
    font-weight: bold;
    display: flex;
    padding: 3px;
  }

  .deletebtn {
    background-color: #d85c5c;
    height: 30px;
    width: 90px;
    border: none;
    outline: none;
    border-radius: 3px;
    color: white;
    font-size: large;
    font-weight: bold;
    display: flex;
    padding: 3px;
  }

  .savebtn {
    background-color: #79cf79;
    height: 30px;
    width: 90px;
    border: none;
    outline: none;
    border-radius: 3px;
    color: white;
    font-size: large;
    font-weight: bold;
    display: flex;
    padding: 3px;
    gap: 5px;
  }
`;

export const ManageEmployee = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [selectEmployee, setSelectEmployee] = useState(null);
  const [editEmployee, setEditEmployee] = useState([]);
  const [canEdit, setCanEdit] = useState(false);

  const handleEdit = () => {
    setCanEdit(true);
  };
  const handleonSave = () => {
    HandleSave(editEmployee);
  };

  const handleOnDelete = () => {
    handleDelete(selectEmployee);
  };

  return (
    <>
      <Tablediv>
        <Table>
          <Caption>Manage Employees</Caption>
          <thead>
            <TR>
              <th>EmployeeCode</th>
              <th>Name</th>
              <th>Department</th>
              <th>contact</th>
              <th>Hire Date</th>
              <th>Role</th>
              <th>Status</th>
            </TR>
          </thead>

          <tbody>
            {JSON.parse(localStorage.getItem("EmpDetails"))?.map((emp) => (
              <TR
                onClick={() => {
                  setSelectEmployee(emp);
                  setEditEmployee(emp);
                  setCanEdit(false);
                }}
                key={emp.EmployeeCode}
              >
                <td>{emp.EmployeeCode}</td>
                <td style={{ color: " rgb(67, 28, 147)" }}>
                  {emp.empFirstName + "  " + emp.empLastName}
                </td>
                <td>{emp.empDepartment}</td>
                <td>{emp.empEmail}</td>
                <td>{emp.empStartDate}</td>
                <td>{emp.empPosition}</td>
                <td>{emp.EmployeeStatus}</td>
              </TR>
            ))}
          </tbody>
        </Table>
      </Tablediv>

      {selectEmployee && (
        <ModalBucket>
          <Button onClick={() => setSelectEmployee(null)}>&times;</Button>
          <H2>Employee Details</H2>

          <Form>
            <ModelDiv1>
              <Label for="employeeCode">Employee Code :</Label>
              <Input
                id="employeeCode"
                type="text"
                value={editEmployee?.EmployeeCode || ""}
                disabled
              />

              <Label for="FirstName">FirstName :</Label>
              <Input
                id="FirstName"
                type="text"
                value={editEmployee?.empFirstName || ""}
                disabled={!canEdit}
                onChange={(e) =>
                  setEditEmployee({
                    ...editEmployee,
                    empFirstName: e.target.value,
                  })
                }
              />

              <Label for="LastName">LastName :</Label>
              <Input
                id="LastName "
                type="text"
                value={editEmployee?.empLastName || ""}
                disabled={!canEdit}
                onChange={(e) =>
                  setEditEmployee({
                    ...editEmployee,
                    empLastName: e.target.value,
                  })
                }
              />

              <Label for="Department">Department :</Label>

              <Input
                id="Department"
                disabled={!canEdit}
                value={editEmployee?.empDepartment || ""}
                onChange={(e) =>
                  setEditEmployee({
                    ...editEmployee,
                    empDepartment: e.target.value,
                  })
                }
              />
            </ModelDiv1>

            <ModelDiv2>
              <Label for="Email">Email :</Label>
              <Input
                id="Email "
                type="text"
                value={editEmployee?.empEmail || ""}
                disabled={!canEdit}
                onChange={(e) =>
                  setEditEmployee({
                    ...editEmployee,
                    empEmail: e.target.value,
                  })
                }
              />

              <Label for="Hire Date">Hire Date :</Label>
              <Input
                id="Hire Date "
                type="text"
                value={editEmployee?.empStartDate}
                disabled={!canEdit}
                onChange={(e) =>
                  setEditEmployee({
                    ...editEmployee,
                    empStartDate: e.target.value,
                  })
                }
              />

              <Label for="Role">Role :</Label>
              <Input
                id="Role"
                type="text"
                value={editEmployee?.empPosition}
                disabled={!canEdit}
                onChange={(e) =>
                  setEditEmployee({
                    ...editEmployee,
                    empPosition: e.target.value,
                  })
                }
              />

              <Label for="Status">Status :</Label>
              <Input
                id="Status"
                type="text"
                value={editEmployee?.EmployeeStatus}
                disabled={!canEdit}
                onChange={(e) =>
                  setEditEmployee({
                    ...editEmployee,
                    EmployeeStatus: e.target.value,
                  })
                }
              />
            </ModelDiv2>
          </Form>
          <BtnDiv>
            {canEdit === false ? (
              <button
                className="editbtn"
                onClick={() => {
                  handleEdit();
                }}
              >
                <Icon>edit_Square </Icon>Edit
              </button>
            ) : (
              <button className="savebtn" onClick={handleonSave}>
                <Icon>save_alt</Icon>Save
              </button>
            )}
            <button className="deletebtn" onClick={handleOnDelete}>
              <Icon>delete</Icon>Delete
            </button>
          </BtnDiv>
        </ModalBucket>
      )}
    </>
  );
};
