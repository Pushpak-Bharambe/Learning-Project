import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { Card } from "../../CommonComponent/Cards";
import { Navbar } from "../../CommonComponent/Navbar";
import { UserContext } from "react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  Users,
  UserPlus,
  ClipboardList,
  Wallet,
  CalendarCheck,
  TrendingUp,
  Shield,
  ClipboardClock,
} from "lucide-react";
import API from "../../CommonComponent/TokenRequest";

/* ---------- animation ---------- */
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

/* ---------- page ---------- */
const Page = styled.div`
  min-height: 100vh;

  background: #f1f5f9; /* light dashboard background */

  color: #0f172a;
`;

/* ---------- HERO (fixed layout) ---------- */
const Hero = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 4rem;
  background:
    linear-gradient(135deg, rgba(15, 23, 42, 0.7), rgba(30, 41, 59, 0.7)),
    url("/office.jpg");

  background-size: cover;
  background-position: center;

  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const Avatar = styled.div`
  height: 90px;
  width: 90px;
  border-radius: 50%;
  background: url("/employee.jpg");
  background-size: cover;
  border: 2px solid #38bdf8;
`;

const Name = styled.div`
  h1 {
    margin: 0;
    font-size: 2rem;
  }

  p {
    margin-top: 5px;
    color: #94a3b8;
  }
`;

const Badge = styled.div`
  padding: 0.6rem 1rem;
  border-radius: 999px;
  background: rgba(56, 189, 248, 0.12);
  border: 1px solid rgba(56, 189, 248, 0.3);
  color: #38bdf8;
`;

/* ---------- MAIN LAYOUT ---------- */
const Container = styled.div`
  padding: 2.5rem 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 900px) {
    padding: 2rem;
  }
`;

/* ---------- TOP STATS ROW ---------- */
const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  animation: ${fadeUp} 0.5s ease;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.06);
  background-color: white;
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1.2rem;
  border-radius: 16px;
  transition: 0.3s;

  &:hover {
    transform: translateY(-6px);
    border-color: #38bdf8;
  }

  h2 {
    margin: 0;

    color: #9d00ff;
  }

  p {
    margin-top: 6px;
    color: #94a3b8;
  }
`;

/* ---------- SECTION TITLE ---------- */
const Title = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  /* color: #e2e8f0; */
  color: black;
`;

/* ---------- ACTION GRID (FIXED PERFECT GRID) ---------- */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const CardWrap = styled.div`
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-8px);
  }
`;

/* ---------- COMPONENT ---------- */
export const EmployeeDashboard = () => {
  const navigate = useNavigate();

  // const user = JSON.parse(sessionStorage.getItem("loggedInUser"));

  const [user, setUser] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await API.get("/me");
        setUser(res.data);
      } catch (err) {
        console.log("Error fetching user:", err);
      }
    };

    fetchUser();
  }, []);

  // const location = useLocation();

  // const user = location.state?.user;

  return (
    <Page>
      <Navbar />

      {/* HERO */}
      <Hero>
        <Profile>
          <Avatar />

          <Name>
            <h1>{user?.firstName || "Employee"}</h1>
            <p>{user?.userRole || "User"}</p>
          </Name>
        </Profile>

        <Badge>
          <Shield size={14} style={{ marginRight: "6px" }} />
          Secure Dashboard
        </Badge>
      </Hero>

      <Container>
        {/* STATS */}
        <StatsRow>
          <StatCard>
            <h2>128</h2>
            <p>Employees</p>
          </StatCard>

          <StatCard>
            <h2>12</h2>
            <p>Departments</p>
          </StatCard>

          <StatCard>
            <h2>95%</h2>
            <p>Attendance</p>
          </StatCard>

          <StatCard>
            <h2>8</h2>
            <p>Pending Tasks</p>
          </StatCard>
        </StatsRow>

        {/* QUICK ACTIONS */}
        <div>
          <Title>Quick Actions</Title>

          <Grid>
            {user?.role?.name === "HR" && (
              <>
                <CardWrap>
                  <Card
                    icon={<UserPlus size={24} />}
                    title="Add Employees"
                    onClick={() => navigate("/AddEmployee")}
                  />
                </CardWrap>

                <CardWrap>
                  <Card
                    icon={<Users size={24} />}
                    title="Manage Employees"
                    onClick={() => navigate("/ManageEmployee")}
                  />
                </CardWrap>
              </>
            )}

            <CardWrap>
              <Card icon={<ClipboardList size={24} />} title="Documents" />
            </CardWrap>

            <CardWrap>
              <Card icon={<Wallet size={24} />} title="Expense Hub" />
            </CardWrap>

            {user?.role?.name === "Manager" && (
              <CardWrap>
                <Card
                  icon={<Users size={24} />}
                  title="Employees under Me"
                  onClick={() => navigate("/managerEmployees")}
                />
              </CardWrap>
            )}
          </Grid>
        </div>

        {/* TOOLS */}
        <div>
          <Title>Tools</Title>

          <Grid>
            <CardWrap>
              <Card icon={<CalendarCheck size={24} />} title="Leave Tracker" />
            </CardWrap>

            <CardWrap>
              <Card icon={<TrendingUp size={24} />} title="Performance" />
            </CardWrap>

            <CardWrap>
              <Card
                icon={<ClipboardClock size={24} />}
                title="TimeSheet"
                onClick={() => navigate("/TimeSheet")}
              />
            </CardWrap>
          </Grid>
        </div>
      </Container>
    </Page>
  );
};
