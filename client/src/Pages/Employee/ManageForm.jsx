import styled from "styled-components";
import Icon from "@mui/material/Icon";
import { HandleSave, handleDelete } from "../../Services/LocalStorage";
import toast from "react-hot-toast";
import API from "../../CommonComponent/TokenRequest";
import { useEffect } from "react";

/* =========================
   STYLES
========================= */

const Container = styled.div`
  width: 100%;
`;

const H2 = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ModelDiv1 = styled.div`
  width: 23rem;
  background: white;
  border-radius: 22px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
`;

const ModelDiv2 = styled.div`
  width: 23rem;
  background: white;
  border-radius: 22px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
`;

const Label = styled.label`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-size: 0.92rem;
  font-weight: 600;
  color: #334155;
`;

const Input = styled.input`
  height: 3rem;
  border-radius: 14px;
  border: 1px solid #dbeafe;
  padding: 0 1rem;
  font-size: 0.95rem;
  background: ${(props) => (props.disabled ? "#f8fafc" : "white")};

  transition: 0.2s;

  &:focus {
    outline: none;
    border: 1px solid #2563eb;
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
  }
`;

const BtnDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;

  .editbtn,
  .savebtn,
  .deletebtn {
    min-width: 9rem;
    height: 3.2rem;
    border: none;
    border-radius: 16px;
    color: white;
    font-size: 0.95rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: 0.25s;
  }

  .editbtn {
    background: linear-gradient(135deg, #0284c7, #38bdf8);
  }

  .savebtn {
    background: linear-gradient(135deg, #16a34a, #4ade80);
  }

  .deletebtn {
    background: linear-gradient(135deg, #dc2626, #f87171);
  }

  .editbtn:hover,
  .savebtn:hover,
  .deletebtn:hover {
    transform: translateY(-2px);
  }
`;

/* =========================
   COMPONENT
========================= */

export const EmployeeForm = ({
  selectEmployee,
  editEmployee,
  canEdit,
  setEditEmployee,
  setCanEdit,
  setEmployeeList,
}) => {
  useEffect(() => {
    setCanEdit(false);
  }, [selectEmployee]);
  /* =========================
     SAVE
  ========================= */

  const handleonSave = async () => {
    try {
      const updateuser = await API.put(
        `/users/${editEmployee.Id}`,
        editEmployee,
      );

      setCanEdit(false);

      toast.success("Employee Edited Successfully");
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  /* =========================
     DELETE
  ========================= */

  const handleOnDelete = async () => {
    if (window.confirm("Are you Sure You Want to Delete")) {
      await API.delete(`/users/${editEmployee.Id}`);
      toast.success("Employee Deleted Successfully");
    } else {
      toast.error("You canceled");
    }
  };

  /* =========================
     EDIT
  ========================= */

  const handleEdit = () => {
    setCanEdit(true);
  };

  return (
    <Container>
      <H2>Employee Details</H2>

      <Form>
        <ModelDiv1>
          <Label htmlFor="employeeCode">Employee Code</Label>

          <Input
            id="employeeCode"
            type="text"
            value={editEmployee?.employeecode || ""}
            disabled
          />

          <Label htmlFor="FirstName">First Name</Label>

          <Input
            id="FirstName"
            type="text"
            value={editEmployee?.firstname || ""}
            disabled={!canEdit}
            onChange={(e) =>
              setEditEmployee({
                ...editEmployee,
                firstname: e.target.value,
              })
            }
          />

          <Label htmlFor="LastName">Last Name</Label>

          <Input
            id="LastName"
            type="text"
            value={editEmployee?.lastname || ""}
            disabled={!canEdit}
            onChange={(e) =>
              setEditEmployee({
                ...editEmployee,
                lastname: e.target.value,
              })
            }
          />

          <Label htmlFor="Department">Department</Label>

          <Input
            id="Department"
            type="text"
            value={editEmployee?.department || ""}
            disabled={!canEdit}
            onChange={(e) =>
              setEditEmployee({
                ...editEmployee,
                department: e.target.value,
              })
            }
          />
        </ModelDiv1>

        {/* RIGHT SIDE */}

        <ModelDiv2>
          <Label htmlFor="Email">Email</Label>

          <Input
            id="Email"
            type="text"
            value={editEmployee?.email || ""}
            disabled={!canEdit}
            onChange={(e) =>
              setEditEmployee({
                ...editEmployee,
                email: e.target.value,
              })
            }
          />

          <Label htmlFor="HireDate">Hire Date</Label>

          <Input
            id="HireDate"
            type="text"
            value={editEmployee?.hiredate || ""}
            disabled={!canEdit}
            onChange={(e) =>
              setEditEmployee({
                ...editEmployee,
                hiredate: e.target.value,
              })
            }
          />

          <Label htmlFor="Role">Role</Label>

          <Input
            id="Role"
            type="text"
            value={editEmployee?.position || ""}
            disabled={!canEdit}
            onChange={(e) =>
              setEditEmployee({
                ...editEmployee,
                position: e.target.value,
              })
            }
          />

          <Label htmlFor="Status">Status</Label>

          <Input
            id="Status"
            type="text"
            value={editEmployee?.employeestatus || ""}
            disabled={!canEdit}
            onChange={(e) =>
              setEditEmployee({
                ...editEmployee,
                employeestatus: e.target.value,
              })
            }
          />
        </ModelDiv2>
      </Form>

      {/* BUTTONS */}

      <BtnDiv>
        {/* SHOW EDIT BUTTON */}

        {canEdit === false ? (
          <button type="button" className="editbtn" onClick={handleEdit}>
            <Icon>edit_square</Icon>
            Edit
          </button>
        ) : (
          /* SHOW SAVE BUTTON */

          <button type="button" className="savebtn" onClick={handleonSave}>
            <Icon>save_alt</Icon>
            Save
          </button>
        )}

        <button type="button" className="deletebtn" onClick={handleOnDelete}>
          <Icon>delete</Icon>
          Delete
        </button>
      </BtnDiv>
    </Container>
  );
};
