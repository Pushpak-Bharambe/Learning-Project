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

import { X } from "lucide-react";

/* =========================
   ANIMATIONS
========================= */

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const popup = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -45%) scale(0.95);
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

  background: rgba(15, 23, 42, 0.45);

  backdrop-filter: blur(6px);

  z-index: 999;

  animation: ${fadeIn} 0.2s ease;
`;

const ModalBox = styled.div`
  width: 28rem;
  max-width: 90%;

  background: white;

  border-radius: 24px;

  position: fixed;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  z-index: 1000;

  overflow: hidden;

  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);

  animation: ${popup} 0.25s ease;
`;

const Header = styled.div`
  height: 4.5rem;

  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #f1f5f9;
`;

const Title = styled.h2`
  margin: 0;

  font-size: 1.1rem;
  font-weight: 600;

  color: #0f172a;
`;

const CloseButton = styled.button`
  height: 2.3rem;
  width: 2.3rem;

  border: none;

  border-radius: 12px;

  background: #f8fafc;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.2s;

  &:hover {
    background: #e2e8f0;
    transform: rotate(90deg);
  }
`;

const Body = styled.div`
  padding: 1.8rem;

  color: #475569;

  font-size: 0.95rem;

  line-height: 1.6;
`;

const Footer = styled.div`
  padding: 1.2rem 1.8rem;

  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  border-top: 1px solid #f1f5f9;
`;

const Button = styled.button`
  border: none;

  padding: 0.8rem 1.4rem;

  border-radius: 14px;

  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;

  background: ${(props) => (props.primary ? "#2563eb" : "#f1f5f9")};

  color: ${(props) => (props.primary ? "white" : "#0f172a")};

  &:hover {
    transform: translateY(-2px);
  }
`;

/* =========================
   CONTEXT
========================= */

export const ModelContext = createContext();

/* =========================
   MODAL PROVIDER
========================= */

export const Modal = ({ children }) => {
  const [openName, setOpenName] = useState("");

  const open = setOpenName;

  const close = () => setOpenName("");

  return (
    <ModelContext.Provider value={{ openName, open, close }}>
      {children}
    </ModelContext.Provider>
  );
};

/* =========================
   OPEN
========================= */

export const Open = ({ children, opens }) => {
  const { open } = useContext(ModelContext);

  return cloneElement(children, {
    onClick: () => open(opens),
  });
};

/* =========================
   CLOSE
========================= */

export const Close = ({ children }) => {
  const { close } = useContext(ModelContext);

  return cloneElement(children, {
    onClick: close,
  });
};

/* =========================
   WINDOW
========================= */

export const Window = ({ children, name, title = "WorkSphere" }) => {
  const modelRoot = document.getElementById("modal-root");

  const { openName, close } = useContext(ModelContext);

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

  if (name !== openName) return null;

  return createPortal(
    <>
      <Overlay />

      <ModalBox ref={ref}>
        <Header>
          <Title>{title}</Title>

          <CloseButton onClick={close}>
            <X size={18} />
          </CloseButton>
        </Header>

        <Body>{children}</Body>

        <Footer>
          <Button onClick={close}>Cancel</Button>

          <Button primary>Save</Button>
        </Footer>
      </ModalBox>
    </>,
    modelRoot,
  );
};
