import React, { useState, useEffect, createContext } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Eye, EyeOff, Building2, ShieldCheck, Users } from "lucide-react";
import API from "../CommonComponent/TokenRequest";

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: linear-gradient(-45deg, #1e293b, #312e81, #0f172a, #2563eb);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 12s ease infinite;
  overflow: hidden;
`;

const Card = styled.div`
  width: 100%;
  max-width: 1200px;
  min-height: 700px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 30px;
  overflow: hidden;
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 60px rgba(0, 0, 0, 0.4);
  animation: ${fadeIn} 0.7s ease;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const LeftPanel = styled.div`
  position: relative;
  padding: 60px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);

  @media (max-width: 900px) {
    display: none;
  }
`;

const OverlayCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);

  &:nth-child(1) {
    width: 250px;
    height: 250px;
    top: -50px;
    right: -50px;
  }

  &:nth-child(2) {
    width: 180px;
    height: 180px;
    bottom: 40px;
    left: -40px;
  }
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 40px;
`;

const Heading = styled.h1`
  font-size: 52px;
  line-height: 1.2;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  color: #d1d5db;
  line-height: 1.7;
  margin-bottom: 40px;
`;

const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FeatureCard = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 18px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  transition: 0.3s;

  &:hover {
    transform: translateX(10px);
    background: rgba(255, 255, 255, 0.12);
  }
`;

const RightPanel = styled.div`
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 420px;
`;

const FormHeading = styled.h2`
  font-size: 40px;
  color: #0f172a;
  margin-bottom: 10px;
`;

const FormSubText = styled.p`
  color: #64748b;
  margin-bottom: 35px;
  font-size: 15px;
`;

const InputGroup = styled.div`
  margin-bottom: 24px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #334155;
  font-weight: 600;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  height: 55px;
  border-radius: 16px;
  border: 1px solid #cbd5e1;
  padding: 0 18px;
  font-size: 15px;
  outline: none;
  transition: 0.3s;
  background: #f8fafc;

  &:focus {
    border-color: #4f46e5;
    box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.15);
    background: white;
  }
`;

const PasswordButton = styled.button`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #64748b;
`;

const LoginButton = styled.button`
  width: 100%;
  height: 55px;
  border: none;
  border-radius: 16px;
  font-size: 17px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  background: linear-gradient(135deg, #4f46e5, #2563eb);
  transition: 0.3s;
  margin-top: 10px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(37, 99, 235, 0.35);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const Links = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
`;

const LinkText = styled.p`
  font-size: 14px;
  color: #4f46e5;
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s;

  &:hover {
    color: #1d4ed8;
    text-decoration: underline;
  }
`;

const ErrorText = styled.p`
  margin-top: 20px;
  color: #dc2626;
  font-weight: 600;
  text-align: center;
`;

const SuccessText = styled.p`
  margin-top: 20px;
  color: #16a34a;
  font-weight: 600;
  text-align: center;
`;

export const UserContext = createContext();

export const Login = ({ Signupbtn, children }) => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // const [user, setUser] = useState({});

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const res = await API.get("/me");
  //       setUser(res.data);
  //     } catch (err) {
  //       console.log("Error fetching user:", err);
  //     }
  //   };

  //   fetchUser();
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await axios.post("auth/login", {
        UserName: e.target.userName.value,
        Password: e.target.password.value,
      });

      sessionStorage.setItem("token", response.data);

      setSuccess("Login successful. Redirecting...");

      setTimeout(() => {
        navigate("/employee-dashboard");
      }, 1500);
    } catch (err) {
      setError("Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Card>
        <LeftPanel>
          <OverlayCircle />
          <OverlayCircle />

          <Brand>
            <Building2 size={35} />
            WorkSphere
          </Brand>

          <Heading>Smart Company Management For Modern Teams</Heading>

          <Description>
            Manage employees, projects, payroll, attendance, and company growth
            from one secure and powerful dashboard.
          </Description>

          <Features>
            <FeatureCard>
              <Users size={28} />
              <div>
                <h3>Employee Management</h3>
                <p>Track employees and departments easily.</p>
              </div>
            </FeatureCard>

            <FeatureCard>
              <ShieldCheck size={28} />
              <div>
                <h3>Secure Authentication</h3>
                <p>Enterprise-level login and access control.</p>
              </div>
            </FeatureCard>
          </Features>
        </LeftPanel>

        <RightPanel>
          <FormContainer>
            <FormHeading>Welcome Back 👋</FormHeading>

            <FormSubText>Login to access your company dashboard.</FormSubText>

            <form onSubmit={handleSubmit}>
              <InputGroup>
                <Label>Username or Email</Label>
                <InputWrapper>
                  <Input
                    type="text"
                    name="userName"
                    placeholder="Enter your username"
                    required
                  />
                </InputWrapper>
              </InputGroup>

              <InputGroup>
                <Label>Password</Label>
                <InputWrapper>
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    required
                  />

                  <PasswordButton
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </PasswordButton>
                </InputWrapper>
              </InputGroup>

              <LoginButton type="submit">
                {loading ? "Please Wait..." : "Login"}
              </LoginButton>
            </form>

            {error && <ErrorText>{error}</ErrorText>}
            {success && <SuccessText>{success}</SuccessText>}

            <Links>
              <LinkText onClick={() => navigate("/signup")}>
                Create Account
              </LinkText>

              <LinkText onClick={() => navigate("/forget")}>
                Forgot Password?
              </LinkText>

              <LinkText onClick={() => navigate("/ForgetUserName")}>
                Forgot Username?
              </LinkText>
            </Links>
          </FormContainer>
        </RightPanel>
      </Card>
    </Container>
  );
};
