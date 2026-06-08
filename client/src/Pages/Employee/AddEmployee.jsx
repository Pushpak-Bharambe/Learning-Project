import styled from "styled-components";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import API from "../../CommonComponent/TokenRequest";
import { Navbar } from "../../CommonComponent/Navbar";

/* ---------- PAGE LAYOUT ---------- */
const Page = styled.div`
  min-height: 100vh;
  background: #f4f6fb;
`;

/* ---------- CONTENT WRAPPER ---------- */
const Wrapper = styled.div`
  display: flex;
  margin-top: 1rem;
`;

/* ---------- LEFT PANEL (IMAGE + INFO) ---------- */
const SidePanel = styled.div`
  width: 320px;
  background: white;
  margin: 1rem;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
`;

const SideImage = styled.img`
  width: 100%;
  border-radius: 12px;
  margin-bottom: 1rem;
`;

const SideTitle = styled.h3`
  color: #0f172a;
  margin-bottom: 0.5rem;
`;

const SideText = styled.p`
  color: #64748b;
  font-size: 0.9rem;
`;

/* ---------- FORM AREA ---------- */
const FormArea = styled.form`
  flex: 1;
  margin: 1rem;
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h2`
  color: #0f172a;
  margin-bottom: 1.5rem;
`;

/* ---------- SECTION ---------- */
const Section = styled.div`
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h4`
  color: #4f46e5;
  margin-bottom: 1rem;
`;

/* ---------- GRID ---------- */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

/* ---------- INPUTS ---------- */
const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #556376;
  margin-bottom: 4px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  background: #f9fafb;
  font-weight: 600;

  &:focus {
    outline: none;
    border-color: #6366f1;
    background: white;
  }
`;

const Select = styled.select`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  background: #f9fafb;
`;

/* ---------- BUTTON ---------- */
const Button = styled.button`
  margin-top: 2rem;
  padding: 12px 18px;
  border: none;
  border-radius: 12px;

  background: #4f46e5;
  color: white;
  font-weight: 600;

  cursor: pointer;

  &:hover {
    background: #4338ca;
  }
`;

/* ---------- COMPONENT ---------- */
export const AddEmployee = () => {
  const [rolesdata, setRolesData] = useState([]);
  const [managersData, setManagersData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRoles = async () => {
      const res = await API.get("/roles");

      setRolesData(res.data);
    };
    fetchRoles();
  }, []);

  useEffect(() => {
    const fetchRoles = async () => {
      const managers = await API.get("/managers");

      setManagersData(managers.data);
    };
    fetchRoles();
  }, []);

  const HandleOnAdd = async (e) => {
    e.preventDefault();

    const EmployeeData = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      employeecode: e.target.employeecode.value,
      address: e.target.address.value,
      dateofbirth: e.target.dateofbirth.value,
      hiredate: e.target.hiredate.value,
      gender: e.target.gender.value,
      department: e.target.department.value,
      employeestatus: e.target.employeestatus.value,
      position: e.target.position.value,
      email: e.target.email.value,
      username: e.target.username.value,
      password: e.target.password.value,
      role: {
        id: e.target.roles.value,
      },
      manager: {
        Id: e.target.manager.value,
      },
    };

    try {
      const res = await API.post("/users", EmployeeData);
      toast.success("Employee Added Successfully");
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  return (
    <Page>
      <Navbar />

      <Wrapper>
        <SidePanel>
          <SideImage src="/addemployee.jpg" />
          <SideTitle>Employee Onboarding</SideTitle>
          <SideText>
            Add new employees to your organization and assign roles,
            departments, and access levels in a structured way.
          </SideText>
        </SidePanel>

        <FormArea onSubmit={HandleOnAdd}>
          <Title>Add Employee</Title>

          <Section>
            <SectionTitle>Personal Info</SectionTitle>

            <Grid>
              <Field>
                <Label>First Name</Label>
                <Input name="firstname" />
              </Field>

              <Field>
                <Label>Last Name</Label>
                <Input name="lastname" />
              </Field>

              <Field>
                <Label>Email</Label>
                <Input name="email" />
              </Field>

              <Field>
                <Label>Gender</Label>
                <Select name="gender">
                  <option>MALE</option>
                  <option>FEMALE</option>
                </Select>
              </Field>

              <Field>
                <Label>UserName</Label>
                <Input name="username" />
              </Field>

              <Field>
                <Label>Password</Label>
                <Input name="password" />
              </Field>
            </Grid>
          </Section>

          <Section>
            <SectionTitle>Work Details</SectionTitle>

            <Grid>
              <Field>
                <Label>Employee Code</Label>
                <Input name="employeecode" />
              </Field>

              <Field>
                <Label>Department</Label>
                <Select name="department">
                  <option>IT</option>
                  <option>HR</option>
                </Select>
              </Field>

              <Field>
                <Label>Position</Label>
                <Select name="position">
                  <option>Developer</option>
                  <option>Manager</option>
                </Select>
              </Field>

              <Field>
                <Label>Role</Label>
                <Select name="roles">
                  <option value="">Select Role</option>

                  {rolesdata?.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.name}
                    </option>
                  ))}
                </Select>
              </Field>

              <Field>
                <Label>Manager</Label>
                <Select name="manager">
                  <option value="">Select Manager</option>
                  {managersData?.map((managers) => (
                    <option key={managers.Id} value={managers.Id}>
                      {managers.firstname}
                    </option>
                  ))}
                </Select>
              </Field>
            </Grid>
          </Section>

          <Section>
            <SectionTitle>System Info</SectionTitle>

            <Grid>
              <Field>
                <Label>Hire Date</Label>
                <Input type="date" name="hiredate" />
              </Field>

              <Field>
                <Label>Date of Birth</Label>
                <Input type="date" name="dateofbirth" />
              </Field>

              <Field>
                <Label>Status</Label>
                <Select name="employeestatus">
                  <option>Active</option>
                  <option>Inactive</option>
                </Select>
              </Field>

              <Field>
                <Label>Address</Label>
                <Input name="address" />
              </Field>
            </Grid>
          </Section>
          <h1>{error}</h1>

          <Button type="submit">Create Employee</Button>
        </FormArea>
      </Wrapper>
    </Page>
  );
};
