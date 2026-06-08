import styled, { keyframes } from "styled-components";
import { createPortal } from "react-dom";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  cloneElement,
} from "react";

import { X, User, BadgeCheck } from "lucide-react";

/* =========================
   ANIMATIONS
========================= */

const overlayAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const modalAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -47%) scale(0.96);
  }

  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

/* =========================
   STYLES
========================= */

const Overlay = styled.div`
  position: fixed;
  inset: 0;

  background: rgba(15, 23, 42, 0.6);

  backdrop-filter: blur(7px);

  z-index: 999;

  animation: ${overlayAnimation} 0.2s ease;
`;

const ModalBox = styled.div`
  width: 54rem;

  max-width: calc(100% - 2rem);

  background: #f8fafc;

  border-radius: 26px;

  overflow: hidden;

  position: fixed;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  z-index: 1000;

  animation: ${modalAnimation} 0.25s ease;

  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.18);

  @media (max-width: 768px) {
    width: calc(100% - 1rem);

    border-radius: 20px;
  }
`;

const Header = styled.div`
  height: 9rem;

  background: linear-gradient(135deg, #2563eb, #1d4ed8);

  padding: 1.6rem 2rem;

  position: relative;

  display: flex;

  align-items: center;

  justify-content: space-between;
`;

const ProfileSection = styled.div`
  display: flex;

  align-items: center;

  gap: 1.2rem;
`;

const Avatar = styled.div`
  height: 4.3rem;
  width: 4.3rem;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.15);

  display: flex;

  align-items: center;

  justify-content: center;

  color: white;

  border: 3px solid rgba(255, 255, 255, 0.2);
`;

const Info = styled.div`
  display: flex;

  flex-direction: column;
`;

const EmployeeName = styled.h2`
  margin: 0;

  color: white;

  font-size: 1.5rem;

  font-weight: 700;
`;

const EmployeeRole = styled.p`
  margin-top: 0.25rem;

  color: rgba(255, 255, 255, 0.85);

  font-size: 0.92rem;
`;

const Status = styled.div`
  margin-top: 0.7rem;

  width: fit-content;

  padding: 0.45rem 0.9rem;

  border-radius: 30px;

  background: rgba(255, 255, 255, 0.16);

  color: white;

  display: flex;

  align-items: center;

  gap: 0.45rem;

  font-size: 0.82rem;

  font-weight: 600;
`;

const CloseButton = styled.button`
  height: 3rem;
  width: 3rem;

  border: none;

  border-radius: 16px;

  background: rgba(255, 255, 255, 0.15);

  color: white;

  display: flex;

  align-items: center;

  justify-content: center;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.25);

    transform: rotate(90deg);
  }
`;

const Body = styled.div`
  padding: 2rem;

  max-height: 70vh;

  overflow-y: auto;

  background: #f8fafc;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;

    border-radius: 20px;
  }
`;

/* =========================
   CONTEXT
========================= */

export const ModalContext = createContext();

/* =========================
   PROVIDER
========================= */

export const Modal = ({ children }) => {
  const [openName, setOpenName] = useState("");

  const open = setOpenName;

  const close = () => setOpenName("");

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
};

/* =========================
   OPEN
========================= */

// export const Open = ({ children, opens }) => {
//   const { open } = useContext(ModalContext);

//   return cloneElement(children, {
//     onClick: () => open(opens),
//   });
// };

export const Open = ({
  children,
  opens,
  setCanEdit,
  setEditEmployee,
  setSelectEmployee,
  emp,
  onOpen,
}) => {
  const { open } = useContext(ModalContext);
  return cloneElement(children, {
    onClick: () => {
      open(opens);

      if (setSelectEmployee) setSelectEmployee(emp);
      if (setEditEmployee) setEditEmployee(emp);
      if (setCanEdit) setCanEdit(false);
      onOpen?.();
    },
  });
};

/* =========================
   CLOSE
========================= */

export const Close = ({ children }) => {
  const { close } = useContext(ModalContext);

  return cloneElement(children, {
    onClick: (e) => {
      children.props.onClick?.(e);
      close();
    },
  });
};

/* =========================
   WINDOW
========================= */

export const Window = ({
  children,
  name,
  employeeName = "Pushpak Bharambe",
  employeeRole = "Frontend Developer",
  employeeStatus = "ACTIVE",
}) => {
  const modalRoot = document.getElementById("modal-root");

  const { openName, close } = useContext(ModalContext);

  const ref = useRef(null);

  useEffect(() => {
    function handleOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        close();
      }
    }

    document.addEventListener("mousedown", handleOutside);

    return () => {
      document.removeEventListener("mousedown", handleOutside);
    };
  }, [close]);

  useEffect(() => {
    function handleEscape(e) {
      if (e.key === "Escape") {
        close();
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [close]);

  if (name !== openName) return null;

  return createPortal(
    <>
      <Overlay />

      <ModalBox ref={ref}>
        <Header>
          <ProfileSection>
            <Avatar>
              <User size={26} />
            </Avatar>

            <Info>
              <EmployeeName>{employeeName}</EmployeeName>

              <EmployeeRole>{employeeRole}</EmployeeRole>

              <Status>
                <BadgeCheck size={14} />

                {employeeStatus}
              </Status>
            </Info>
          </ProfileSection>

          <CloseButton onClick={close}>
            <X size={20} />
          </CloseButton>
        </Header>

        <Body>{children}</Body>
      </ModalBox>
    </>,
    modalRoot,
  );
};
