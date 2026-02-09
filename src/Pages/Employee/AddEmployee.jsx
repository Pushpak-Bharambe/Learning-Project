// import { useState, useEffect } from "react";
import styled from "styled-components";
import { AddNewEmployee } from "../../Services/LocalStorage";

const MainDiv = styled.div`
  height: 42rem;
  width: 65rem;
  display: flex;
  justify-content: center;
  margin-left: 16rem;
  margin-top: 2rem;
  box-shadow: 0 0 30px black;
`;

const Input = styled.input`
  margin-top: 0.2rem;
  height: 30px;
  width: 200px;
  margin-left: 1rem;
  margin-bottom: 0.1rem;
`;

const Button = styled.button`
  margin-bottom: 20px;
  height: 30px;
  width: 200px;
  font-size: large;
  color: whitesmoke;
  margin-left: 12rem;
  margin-top: 2rem;
  background-color: #5858d0;
  border: none;
  outline: none;

  && .btnadd:active {
    background: #5151db;
    transform: scale(0.95);
  }
`;

const Label = styled.label`
  margin-top: 2rem;
  margin-left: 1rem;
  font-weight: 600;
`;

const InputDiv1 = styled.div`
  height: 25rem;
  width: 15rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`;

const InputDiv2 = styled.div`
  height: 25rem;
  width: 15rem;
  margin-top: -25rem;
  display: flex;
  flex-direction: column;
  margin-left: 25rem;

  &&& label {
  }
`;

const LastDiv = styled.div`
  height: 6rem;
  display: flex;
  flex-direction: column;
  padding-left: 3rem;
  padding-right: 4.2rem;
  padding-top: 2rem;

  &&& label {
    margin-bottom: 0.2rem;
    font-weight: 600;
  }
  &&& input {
    height: 30px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 43rem;

  h1 {
    font-family: cursive;
    color: rgb(2, 78, 70);
    margin-left: 14rem;
  }

  .addemployeeinput {
    border: none;
    border-bottom: 2px solid black;
    outline: none;
    font-size: small;
    font-weight: bold;
  }

  .addemployeeinput:hover {
    border-bottom: 3px solid #5858d0;
  }

  .btnadd:active {
    background: #5151db;
    transform: scale(0.95);
  }
`;

const Select = styled.select`
  margin-top: 0.2rem;
  height: 30px;
  width: 200px;
  font-size: large;
  margin-left: 1rem;
  margin-bottom: 0.1rem;
`;

const Gender = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: 1rem;
  margin-top: 0.2rem;
`;

const Img = styled.img`
  height: 42rem;
  width: 25rem;
`;

const ImgDiv = styled.div`
  height: 42rem;
  width: 25rem;
`;

export const AddEmployee = ({ AddEmpdata }) => {
  const HandleOnAdd = (e) => {
    e.preventDefault();

    const EmployeeData = {
      empFirstName: e.target.empFirstName.value,
      empLastName: e.target.empLastName.value,
      EmployeeCode: e.target.EmployeeCode.value,
      empLocation: e.target.empLocation.value,
      empDate: e.target.empDate.value,
      empStartDate: e.target.empStartDate.value,
      empGender: e.target.empGender.value,
      empDepartment: e.target.empDepartment.value,
      EmployeeStatus: e.target.EmployeeStatus.value,
      empPosition: e.target.empPosition.value,
      empEmail: e.target.empEmail.value,
      empImg: e.target.empImg.value,
    };

    AddNewEmployee(EmployeeData);
  };

  return (
    <>
      <MainDiv>
        <ImgDiv>
          <Img src="/addemployee.jpg" alt="employee"></Img>
        </ImgDiv>
        <Form onSubmit={HandleOnAdd}>
          <h1>Add Employee</h1>
          <InputDiv1>
            <Label for="FirstName">FirstName</Label>
            <Input
              className=" addemployeeinput"
              id="FirstName"
              type="text"
              name="empFirstName"
            ></Input>

            <Label for="EmployeeCode">EmployeeCode</Label>

            <Input
              id="EmployeeCode"
              className=" addemployeeinput"
              type="text"
              name="EmployeeCode"
            ></Input>

            <Label for="Location">Location</Label>
            <Select
              id="Location"
              name="empLocation"
              className=" addemployeeinput"
            >
              <option></option>
              <option>India</option>
              <option>US</option>
              <option>London</option>
            </Select>

            <Label for="DOB">Date Of Birth</Label>
            <Input
              type="date"
              id="DOB"
              name="empDate"
              className=" addemployeeinput"
            ></Input>

            <Label for="StartDate">Start Date</Label>
            <Input
              type="date"
              id="StartDate"
              name="empStartDate"
              className=" addemployeeinput"
            ></Input>
          </InputDiv1>

          <InputDiv2>
            <Label for="LastName">LastName</Label>
            <Input
              id="LastName"
              type="text"
              name="empLastName"
              className=" addemployeeinput"
            ></Input>

            <Label for="gender">Gender</Label>
            <Gender id="gender">
              <label for="male">Male</label>

              <input
                id="male"
                type="radio"
                name="empGender"
                value="male"
                className=" addemployeeinput"
              ></input>

              <label for="female">Female</label>

              <input
                id="female"
                type="radio"
                name="empGender"
                value="female"
                className=" addemployeeinput"
              ></input>
            </Gender>

            <Label for="Department">Department</Label>
            <Select
              id="Department"
              name="empDepartment"
              className=" addemployeeinput"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </Select>

            <Label for="EmployeeStatus" name="EmployeeStatus">
              Employee Status
            </Label>
            <Select
              id="EmployeeStatus"
              name="EmployeeStatus"
              className=" addemployeeinput"
            >
              <option>a</option>
              <option>b</option>
              <option>c</option>
              <option>d</option>
            </Select>

            <Label for="Position/JobTitle">Position/Job Title</Label>
            <Select
              id="Position/JobTitle"
              name="empPosition"
              className=" addemployeeinput"
            >
              <option></option>
              <option>hello</option>
              <option>how</option>
              <option>are</option>
              <option>youdfdfgdgfdgffdfgfdg</option>
            </Select>
          </InputDiv2>
          <LastDiv>
            <label for="email">Email Address</label>
            <input
              type="Email"
              id="email"
              name="empEmail"
              className=" addemployeeinput"
            ></input>
          </LastDiv>
          <Button type="submit" className="btnadd">
            Add Employee
          </Button>
        </Form>
      </MainDiv>
    </>
  );
};
