import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import { Building2, Mail, Phone, MapPin, Globe, Landmark } from "lucide-react";

const fadeIn = keyframes`
  from{
    opacity:0;
    transform:translateY(30px);
  }
  to{
    opacity:1;
    transform:translateY(0);
  }
`;

const Page = styled.div`
  min-height: 100vh;
  background:
    linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.92)),
    url("/company.jpg");

  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const Container = styled.div`
  width: 1100px;
  min-height: 700px;
  display: flex;
  border-radius: 32px;
  overflow: hidden;
  backdrop-filter: blur(18px);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45);
  animation: ${fadeIn} 0.8s ease;

  @media (max-width: 950px) {
    flex-direction: column;
    width: 100%;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  background:
    linear-gradient(rgba(15, 23, 42, 0.82), rgba(15, 23, 42, 0.9)),
    url("/employeeimage.jpg");

  background-size: cover;
  background-position: center;
  color: white;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 950px) {
    min-height: 300px;
  }
`;

const Logo = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 2rem;
  font-weight: 800;

  span {
    color: #38bdf8;
  }
`;

const LeftHeading = styled.h2`
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
`;

const LeftText = styled.p`
  font-size: 1rem;
  line-height: 1.9;
  color: #d1d5db;
`;

const RightSection = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.96);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const LoginButton = styled.button`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 12px;
  background: #0f172a;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #1e293b;
    transform: translateY(-2px);
  }
`;

const Heading = styled.h1`
  font-size: 2.2rem;
  color: #0f172a;
  margin-top: 1rem;
`;

const SubHeading = styled.p`
  color: #64748b;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const InputGroup = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  height: 55px;
  border-radius: 16px;
  border: 1px solid #dbe4ee;
  padding-left: 3.2rem;
  font-size: 1rem;
  background: #f8fafc;
  transition: 0.3s;

  &:focus {
    outline: none;
    border-color: #38bdf8;
    background: white;
    box-shadow: 0 0 0 4px rgba(56, 189, 248, 0.15);
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  color: #64748b;
`;

const Row = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const SubmitButton = styled.button`
  height: 55px;
  border: none;
  border-radius: 16px;
  background: linear-gradient(135deg, #0ea5e9, #2563eb);
  color: white;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 1rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 30px rgba(37, 99, 235, 0.3);
  }
`;

export const Signup = () => {
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const fullAddress = `
      ${e.target.city.value},
      ${e.target.state.value},
      ${e.target.pincode.value},
      ${e.target.country.value}
    `;

    const newData = {
      name: e.target.name.value,
      address: fullAddress,
      email: e.target.email.value,
      phonenumber: e.target.phonenumber.value,
    };

    try {
      await axios.post("/organisation", newData);

      alert("Organization Registered Successfully");
      navigate("/login");
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };

  return (
    <Page>
      <Container>
        <LeftSection>
          <Logo>
            Work<span>Sphere</span>
          </Logo>

          <LeftHeading>
            Smart Company
            <br />
            Management Platform
          </LeftHeading>

          <LeftText>
            Manage employees, departments, projects, payrolls, and analytics in
            one secure and modern workspace built for growing companies.
          </LeftText>
        </LeftSection>

        <RightSection>
          <TopBar>
            <LoginButton onClick={() => navigate("/login")}>LOGIN</LoginButton>
          </TopBar>

          <Heading>Register Organization</Heading>

          <SubHeading>
            Create your organization account to start managing your company
            efficiently.
          </SubHeading>

          <Form onSubmit={handleOnSubmit}>
            <InputGroup>
              <IconWrapper>
                <Building2 size={20} />
              </IconWrapper>

              <Input
                type="text"
                name="name"
                placeholder="Organization Name"
                required
              />
            </InputGroup>

            <Row>
              <InputGroup>
                <IconWrapper>
                  <MapPin size={20} />
                </IconWrapper>

                <Input type="text" name="city" placeholder="City" required />
              </InputGroup>

              <InputGroup>
                <IconWrapper>
                  <Landmark size={20} />
                </IconWrapper>

                <Input type="text" name="state" placeholder="State" required />
              </InputGroup>
            </Row>

            <Row>
              <InputGroup>
                <IconWrapper>
                  <Globe size={20} />
                </IconWrapper>

                <Input
                  type="text"
                  name="country"
                  placeholder="Country"
                  required
                />
              </InputGroup>

              <InputGroup>
                <IconWrapper>
                  <MapPin size={20} />
                </IconWrapper>

                <Input
                  type="text"
                  name="pincode"
                  placeholder="Pin Code"
                  required
                />
              </InputGroup>
            </Row>

            <InputGroup>
              <IconWrapper>
                <Mail size={20} />
              </IconWrapper>

              <Input
                type="email"
                name="email"
                placeholder="Organization Email"
                required
              />
            </InputGroup>

            <InputGroup>
              <IconWrapper>
                <Phone size={20} />
              </IconWrapper>

              <Input
                type="text"
                name="phonenumber"
                placeholder="Phone Number"
                required
              />
            </InputGroup>

            <SubmitButton type="submit">Create Organization</SubmitButton>
          </Form>
        </RightSection>
      </Container>
    </Page>
  );
};
