import styled from "styled-components";
import Icon from "@mui/material/Icon";
import { HandleSave, handleDelete } from "../../Services/LocalStorage";
// import { ModalBucket } from "../../CommonComponent/Modal";
import { Close } from "../../CommonComponent/Modal";

const Form = styled.form`
  height: 25rem;
  width: 40rem;
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
  gap: 10px;
  margin-left: 20px;
`;

const ModelDiv2 = styled.div`
  height: 25rem;
  width: 20rem;
  display: flex;
  flex-direction: column;
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

export const EmployeeForm = ({
  selectEmployee,
  setSelectEmployee,
  editEmployee,
  canEdit,
  setEditEmployee,
  setCanEdit,
  setEmployeeList,
}) => {
  const handleonSave = () => {
    HandleSave(editEmployee);
    setCanEdit(false);
  };

  const handleOnDelete = () => {
    handleDelete(selectEmployee);
    setEmployeeList(JSON.parse(localStorage.getItem("EmpDetails")));
  };

  const handleEdit = () => {
    setCanEdit(true);
  };
  return (
    <>
      <div>
        <Close>
          <Button>&times;</Button>
        </Close>
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
            <Close onSave={() => handleonSave()}>
              <button className="savebtn">
                <Icon>save_alt</Icon>Save
              </button>
            </Close>
          )}
          <Close onDelete={() => handleOnDelete()}>
            <button className="deletebtn">
              <Icon>delete</Icon>Delete
            </button>
          </Close>
        </BtnDiv>
      </div>
    </>
  );
};
