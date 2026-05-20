import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import {
  Briefcase,
  Users,
  ShieldCheck,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

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

const Page = styled.div`
  min-height: 100vh;
  background: #0f172a;
  overflow-x: hidden;
`;

const Hero = styled.div`
  min-height: 100vh;
  background:
    linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.88)),
    url("company.jpg");

  background-size: cover;
  background-position: center;
  position: relative;
`;

const Navbar = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const Logo = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1px;

  span {
    color: #38bdf8;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  color: white;

  li {
    cursor: pointer;
    transition: 0.3s;
    font-weight: 500;
  }

  li:hover {
    color: #38bdf8;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavButton = styled.button`
  padding: 0.8rem 1.4rem;
  border-radius: 12px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  background: ${(props) =>
    props.primary
      ? "linear-gradient(135deg,#0ea5e9,#2563eb)"
      : "rgba(255,255,255,0.1)"};

  color: white;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
`;

const HeroContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem;
  color: white;
  animation: ${fadeUp} 1s ease;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }
`;

const Left = styled.div`
  max-width: 650px;
`;

const Badge = styled.div`
  width: fit-content;
  padding: 0.6rem 1rem;
  border-radius: 30px;
  background: rgba(56, 189, 248, 0.15);
  color: #38bdf8;
  border: 1px solid rgba(56, 189, 248, 0.3);
  margin-bottom: 2rem;
  font-weight: 600;
`;

const MainHeading = styled.h1`
  font-size: 4rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;

  span {
    color: #38bdf8;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #d1d5db;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const PrimaryButton = styled.button`
  padding: 1rem 1.8rem;
  border: none;
  border-radius: 14px;
  background: linear-gradient(135deg, #0ea5e9, #2563eb);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 30px rgba(37, 99, 235, 0.35);
  }
`;

const SecondaryButton = styled.button`
  padding: 1rem 1.8rem;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.08);
  color: white;
  backdrop-filter: blur(10px);
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

const Right = styled.div`
  position: relative;
  animation: ${float} 5s ease-in-out infinite;
`;

const DashboardCard = styled.div`
  width: 380px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(18px);
  border-radius: 24px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 3rem;
  }
`;

const CardTitle = styled.h3`
  color: white;
  margin-bottom: 1.5rem;
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const StatBox = styled.div`
  background: rgba(255, 255, 255, 0.06);
  padding: 1.2rem;
  border-radius: 18px;
  color: white;

  h2 {
    margin-top: 0.8rem;
    font-size: 1.8rem;
  }

  p {
    color: #cbd5e1;
    margin-top: 0.3rem;
  }
`;

const FeaturesSection = styled.div`
  padding: 6rem 5rem;
  background: #111827;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const SectionHeading = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    color: white;
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    color: #9ca3af;
    max-width: 700px;
    margin: auto;
    line-height: 1.8;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled.div`
  background: linear-gradient(
    145deg,
    rgba(30, 41, 59, 0.8),
    rgba(15, 23, 42, 0.9)
  );

  border-radius: 24px;
  padding: 2rem;
  color: white;
  transition: 0.4s;
  border: 1px solid rgba(255, 255, 255, 0.08);

  &:hover {
    transform: translateY(-10px);
    border-color: #38bdf8;
    box-shadow: 0 20px 40px rgba(56, 189, 248, 0.15);
  }

  h3 {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  p {
    color: #cbd5e1;
    line-height: 1.7;
  }
`;

const Footer = styled.div`
  padding: 2rem;
  text-align: center;
  color: #9ca3af;
  background: #0f172a;
`;

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <Hero>
        <Navbar>
          <Logo>
            Work<span>Sphere</span>
          </Logo>

          <NavLinks>
            <li>Dashboard</li>
            <li>Employees</li>
            <li>Departments</li>
            <li>Analytics</li>
            <li>Contact</li>
          </NavLinks>

          <div style={{ display: "flex", gap: "1rem" }}>
            <NavButton onClick={() => navigate("/login")}>Login</NavButton>

            <NavButton primary onClick={() => navigate("/signup")}>
              Get Started
            </NavButton>
          </div>
        </Navbar>

        <HeroContent>
          <Left>
            <Badge>Smart Employee & Company Management Platform</Badge>

            <MainHeading>
              Manage Your Company With
              <span> Simplicity & Power</span>
            </MainHeading>

            <Description>
              WorkSphere helps organizations manage employees, departments,
              payrolls, projects, and analytics from a single modern dashboard
              experience.
            </Description>

            <HeroButtons>
              <PrimaryButton onClick={() => navigate("/signup")}>
                Get Started
                <ArrowRight size={18} />
              </PrimaryButton>

              <SecondaryButton>Watch Demo</SecondaryButton>
            </HeroButtons>
          </Left>

          <Right>
            <DashboardCard>
              <CardTitle>Company Overview</CardTitle>

              <StatGrid>
                <StatBox>
                  <Users size={28} />
                  <h2>250+</h2>
                  <p>Employees</p>
                </StatBox>

                <StatBox>
                  <Briefcase size={28} />
                  <h2>18</h2>
                  <p>Departments</p>
                </StatBox>

                <StatBox>
                  <BarChart3 size={28} />
                  <h2>92%</h2>
                  <p>Growth</p>
                </StatBox>

                <StatBox>
                  <ShieldCheck size={28} />
                  <h2>Secure</h2>
                  <p>System</p>
                </StatBox>
              </StatGrid>
            </DashboardCard>
          </Right>
        </HeroContent>
      </Hero>

      <FeaturesSection>
        <SectionHeading>
          <h1>Why Choose WorkSphere?</h1>

          <p>
            Designed for modern organizations with beautiful UI, powerful
            management tools, and smooth workflow experiences.
          </p>
        </SectionHeading>

        <FeaturesGrid>
          <FeatureCard>
            <Users size={40} />
            <h3>Employee Management</h3>
            <p>
              Easily manage employees, attendance, roles, departments, and work
              information.
            </p>
          </FeatureCard>

          <FeatureCard>
            <BarChart3 size={40} />
            <h3>Analytics Dashboard</h3>
            <p>
              Visualize company performance with interactive statistics and
              real-time reports.
            </p>
          </FeatureCard>

          <FeatureCard>
            <ShieldCheck size={40} />
            <h3>Secure Access</h3>
            <p>
              Advanced authentication and role-based access for secure company
              operations.
            </p>
          </FeatureCard>

          <FeatureCard>
            <CheckCircle2 size={40} />
            <h3>Easy Workflow</h3>
            <p>
              Streamline your organization with smooth task management and
              automation tools.
            </p>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>

      <Footer>© 2026 WorkSphere. All rights reserved.</Footer>
    </Page>
  );
};
