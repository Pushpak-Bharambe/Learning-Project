import styled, { keyframes } from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Bell, User } from "lucide-react";

/* ---------- animation ---------- */
const drop = keyframes`
  from { opacity: 0; transform: translateY(-10px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

/* ---------- NAVBAR ---------- */
const Nav = styled.nav`
  height: 72px;
  width: 100%;

  background: #ffffff;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 2.5rem;

  position: sticky;
  top: 0;
  z-index: 100;

  border-bottom: 1px solid #e2e8f0;

  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
`;

/* ---------- LOGO ---------- */
const Logo = styled.div`
  font-size: 1.3rem;
  font-weight: 800;
  color: #0f172a;

  span {
    color: #2563eb;
  }
`;

/* ---------- MENU ---------- */
const Menu = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
  align-items: center;

  li {
    font-size: 0.95rem;
    color: #475569;
    cursor: pointer;
    padding: 0.4rem 0.6rem;
    border-radius: 10px;

    transition: 0.2s;

    &:hover {
      color: #2563eb;
      background: #eff6ff;
    }
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

/* ---------- RIGHT ---------- */
const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

/* ---------- ICON BUTTON ---------- */
const IconBtn = styled.div`
  height: 38px;
  width: 38px;

  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  color: #475569;

  background: #f8fafc;

  border: 1px solid #e2e8f0;

  transition: 0.2s;

  &:hover {
    background: #eff6ff;
    color: #2563eb;
    transform: translateY(-2px);
  }
`;

/* ---------- SEARCH BAR ---------- */
const SearchBar = styled.div`
  display: flex;
  align-items: center;
  height: 2rem;

  width: ${(props) => (props.open ? "260px" : "0px")};
  opacity: ${(props) => (props.open ? 1 : 0)};

  overflow: hidden;

  transition: all 0.25s ease;

  background: #ffffff;

  border: 1px solid #e2e8f0;

  border-radius: 14px;

  margin-right: ${(props) => (props.open ? "0.6rem" : "0")};

  box-shadow: ${(props) =>
    props.open ? "0 6px 18px rgba(0,0,0,0.08)" : "none"};

  &:focus-within {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
  }
`;

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0 0.8rem;

  width: 100%;
`;

const SearchInput = styled.input`
  width: 100%;

  border: none;
  outline: none;

  font-size: 0.92rem;

  color: #0f172a;

  background: transparent;

  &::placeholder {
    color: #94a3b8;
  }
`;

/* ---------- PROFILE ---------- */
const Profile = styled.div`
  height: 40px;
  width: 40px;

  border-radius: 12px;

  background: linear-gradient(135deg, #2563eb, #7c3aed);

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

/* ---------- DROPDOWN ---------- */
const Dropdown = styled.div`
  position: absolute;
  right: 2rem;
  top: 78px;

  width: 220px;

  background: white;

  border: 1px solid #e2e8f0;

  border-radius: 14px;

  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);

  padding: 0.5rem;

  animation: ${drop} 0.2s ease;
`;

const Item = styled.div`
  padding: 0.7rem 0.8rem;

  border-radius: 10px;

  font-size: 0.95rem;

  color: #0f172a;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: #f1f5f9;
  }
`;

const Logout = styled(Link)`
  text-decoration: none;
  color: #ef4444;
  font-weight: 600;
`;

/* ---------- COMPONENT ---------- */
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <Nav>
      {/* LOGO */}
      <Logo>
        Work<span>Sphere</span>
      </Logo>

      {/* MENU */}
      <Menu>
        <li>Dashboard</li>
        <li>Employees</li>
        <li>Attendance</li>
        <li>Payroll</li>
        <li>Projects</li>
        <li>Reports</li>
      </Menu>

      {/* RIGHT */}
      <Right>
        {/* SEARCH */}
        <SearchBar open={searchOpen}>
          <SearchInputWrapper>
            <Search size={16} color="#94a3b8" />
            <SearchInput placeholder="Search employees..." />
          </SearchInputWrapper>
        </SearchBar>

        <IconBtn onClick={() => setSearchOpen((p) => !p)}>
          <Search size={18} />
        </IconBtn>

        <IconBtn>
          <Bell size={18} />
        </IconBtn>

        <Profile onClick={() => setOpen(!open)}>
          <User size={18} />
        </Profile>
      </Right>

      {/* DROPDOWN */}
      {open && (
        <Dropdown>
          <Item>Profile</Item>
          <Item>Settings</Item>
          <Item>Help</Item>

          <Item>
            <Logout
              to="/home"
              onClick={() => {
                sessionStorage.clear();
                navigate("/home");
              }}
            >
              Logout
            </Logout>
          </Item>
        </Dropdown>
      )}
    </Nav>
  );
};
