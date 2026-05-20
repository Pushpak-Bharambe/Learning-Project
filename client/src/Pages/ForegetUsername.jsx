import { useState } from "react";
import { ForgetUsername } from "../Services/LocalStorage";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { Mail, User, ArrowLeft, CheckCircle, XCircle } from "lucide-react";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
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
  min-height: 650px;
  display: flex;
  border-radius: 32px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45);
  animation: ${fadeUp} 0.8s ease;

  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Left = styled.div`
  flex: 1;
  background:
    linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.92)),
    url("/forgetusername.jpg");

  background-size: cover;
  background-position: center;
  color: white;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Logo = styled.h1`
  font-size: 2.6rem;
  font-weight: 800;
  margin-bottom: 2rem;

  span {
    color: #38bdf8;
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Desc = styled.p`
  color: #cbd5e1;
  line-height: 1.9;
  font-size: 1rem;
`;

const Right = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.96);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BackBtn = styled.button`
  width: fit-content;
  padding: 0.8rem 1.3rem;
  border-radius: 12px;
  border: none;
  background: #0f172a;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    background: #1e293b;
    transform: translateY(-2px);
  }
`;

const Heading = styled.h1`
  font-size: 2.3rem;
  color: #0f172a;
  margin-top: 2rem;
`;

const Sub = styled.p`
  color: #64748b;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const InputWrap = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  height: 58px;
  border-radius: 16px;
  border: 1px solid #dbe4ee;
  background: #f8fafc;
  padding-left: 3.2rem;
  font-size: 1rem;
  transition: 0.3s;

  &:focus {
    outline: none;
    border-color: #38bdf8;
    box-shadow: 0 0 0 4px rgba(56, 189, 248, 0.15);
    background: white;
  }
`;

const IconWrap = styled.div`
  position: absolute;
  top: 18px;
  left: 16px;
  color: #64748b;
`;

const Button = styled.button`
  height: 58px;
  border: none;
  border-radius: 16px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
`;

const PrimaryBtn = styled(Button)`
  background: linear-gradient(135deg, #0ea5e9, #2563eb);
  color: white;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 30px rgba(37, 99, 235, 0.3);
  }
`;

const SecondaryBtn = styled(Button)`
  background: rgba(15, 23, 42, 0.9);
  color: white;

  &:hover {
    background: #1e293b;
  }
`;

const ResultBox = styled.div`
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 14px;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
`;

const Success = styled(ResultBox)`
  background: rgba(34, 197, 94, 0.12);
  color: #166534;
`;

const Error = styled(ResultBox)`
  background: rgba(239, 68, 68, 0.12);
  color: #b91c1c;
`;

export const ForgetUserName = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = ForgetUsername(e.target.userEmail.value);
    setUserName(result);
  };

  return (
    <Page>
      <Container>
        <Left>
          <Logo>
            Work<span>Sphere</span>
          </Logo>

          <Title>Recover Your Username</Title>

          <Desc>
            Enter your registered email to retrieve your username securely from
            the WorkSphere system. This helps you regain access to your company
            dashboard quickly and safely.
          </Desc>
        </Left>

        <Right>
          <BackBtn onClick={() => navigate("/login")}>
            <ArrowLeft size={18} />
            Back
          </BackBtn>

          <Heading>Forgot Username?</Heading>

          <Sub>We will fetch your username linked with your email address.</Sub>

          <Form onSubmit={handleSubmit}>
            <InputWrap>
              <IconWrap>
                <Mail size={20} />
              </IconWrap>

              <Input
                type="email"
                name="userEmail"
                placeholder="Enter your email address"
                required
              />
            </InputWrap>

            <PrimaryBtn type="submit">Get Username</PrimaryBtn>

            <SecondaryBtn type="button" onClick={() => navigate("/login")}>
              Go to Login
            </SecondaryBtn>
          </Form>

          {userName && userName !== undefined && (
            <Success>
              <CheckCircle size={20} />
              Your username is: {userName}
            </Success>
          )}

          {userName === undefined && (
            <Error>
              <XCircle size={20} />
              Email not found
            </Error>
          )}
        </Right>
      </Container>
    </Page>
  );
};
