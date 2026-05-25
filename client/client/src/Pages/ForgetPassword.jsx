import { useStatus } from "../Services/managestatus";
import { forgetPassword } from "../Services/LocalStorage";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { LockKeyhole, User, ArrowLeft, ShieldCheck } from "lucide-react";

const fadeUp = keyframes`
  from{
    opacity:0;
    transform:translateY(40px);
  }
  to{
    opacity:1;
    transform:translateY(0);
  }
`;

const float = keyframes`
  0%{
    transform:translateY(0px);
  }
  50%{
    transform:translateY(-12px);
  }
  100%{
    transform:translateY(0px);
  }
`;

const spin = keyframes`
  from{
    transform:rotate(0deg);
  }
  to{
    transform:rotate(360deg);
  }
`;

const Page = styled.div`
  min-height: 100vh;
  background:
    linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.9)),
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
  overflow: hidden;
  border-radius: 32px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45);
  animation: ${fadeUp} 0.8s ease;

  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  background:
    linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.92)),
    url("/forgetpassword.jpg");

  background-size: cover;
  background-position: center;
  color: white;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 900px) {
    min-height: 300px;
  }
`;

const Logo = styled.h1`
  font-size: 2.7rem;
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

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const LeftText = styled.p`
  color: #d1d5db;
  line-height: 1.9;
  font-size: 1rem;
`;

const SecurityCard = styled.div`
  margin-top: 2rem;
  padding: 1.2rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  gap: 1rem;
  width: fit-content;
`;

const RightSection = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.96);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BackButton = styled.button`
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
  transition: 0.3s;
  font-weight: 600;

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

const SubHeading = styled.p`
  color: #64748b;
  margin-bottom: 2rem;
  line-height: 1.7;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`;

const InputGroup = styled.div`
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
    background: white;
    box-shadow: 0 0 0 4px rgba(56, 189, 248, 0.15);
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 18px;
  left: 16px;
  color: #64748b;
`;

const ResetButton = styled.button`
  height: 58px;
  border: none;
  border-radius: 16px;
  background: linear-gradient(135deg, #0ea5e9, #2563eb);
  color: white;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 0.5rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 30px rgba(37, 99, 235, 0.3);
  }
`;

const SuccessMessage = styled.div`
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 14px;
  background: rgba(34, 197, 94, 0.12);
  color: #166534;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ErrorMessage = styled.div`
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 14px;
  background: rgba(239, 68, 68, 0.12);
  color: #b91c1c;
  font-weight: 600;
`;

const Spinner = styled.div`
  width: 22px;
  height: 22px;
  border: 3px solid #bbf7d0;
  border-top: 3px solid #15803d;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const Forget = () => {
  const { isSuccess, isError, setStatus } = useStatus("idle");

  const navigate = useNavigate();

  const handleforgetOnsubmit = (e) => {
    e.preventDefault();

    const forgetData = {
      username: e.target.username.value,
      newPassword: e.target.password.value,
    };

    if (forgetPassword(forgetData)) {
      setStatus("Success");

      setTimeout(() => {
        navigate("/login");
      }, 4000);
    } else {
      setStatus("Error");
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
            Reset Your
            <br />
            Password Securely
          </LeftHeading>

          <LeftText>
            Recover access to your WorkSphere company management dashboard
            securely and continue managing employees, departments, and
            organization workflows without interruption.
          </LeftText>

          <SecurityCard>
            <ShieldCheck size={28} color="#38bdf8" />

            <div>
              <h4>Enterprise Security</h4>
              <p
                style={{
                  color: "#cbd5e1",
                  marginTop: "5px",
                }}
              >
                Protected password recovery system
              </p>
            </div>
          </SecurityCard>
        </LeftSection>

        <RightSection>
          <BackButton onClick={() => navigate("/login")}>
            <ArrowLeft size={18} />
            Back To Login
          </BackButton>

          <Heading>Forgot Password?</Heading>

          <SubHeading>
            Enter your username and create a new secure password to regain
            access to your account.
          </SubHeading>

          <Form onSubmit={handleforgetOnsubmit}>
            <InputGroup>
              <IconWrapper>
                <User size={20} />
              </IconWrapper>

              <Input
                type="text"
                name="username"
                placeholder="Enter Username"
                required
              />
            </InputGroup>

            <InputGroup>
              <IconWrapper>
                <LockKeyhole size={20} />
              </IconWrapper>

              <Input
                type="password"
                name="password"
                placeholder="Enter New Password"
                required
              />
            </InputGroup>

            <ResetButton type="submit">Reset Password</ResetButton>
          </Form>

          {isSuccess && (
            <SuccessMessage>
              <Spinner />

              <div>
                <strong>Password Reset Successfully</strong>

                <p
                  style={{
                    marginTop: "5px",
                  }}
                >
                  Redirecting to login page...
                </p>
              </div>
            </SuccessMessage>
          )}

          {isError && (
            <ErrorMessage>Incorrect username. Please try again.</ErrorMessage>
          )}
        </RightSection>
      </Container>
    </Page>
  );
};
