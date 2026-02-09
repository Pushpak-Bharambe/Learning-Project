import styled from "styled-components";
import { createPortal } from "react-dom";
import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";

const ModalBlur = styled.div`
  position: fixed;
  inset: 0;
  backdrop-filter: blur(10px);
  z-index: 999;
`;

const ModelPage = styled.div`
  height: 35rem;
  width: 40rem;
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  box-shadow: 0 0 50px black;
`;

export const ModelContext = createContext();

export const Modal = ({ children }) => {
  const [openName, setOpenName] = useState("");
  const Close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModelContext.Provider value={{ openName, open, Close }}>
      {children}
    </ModelContext.Provider>
  );
};

export const Open = ({
  children,
  opens,
  setCanEdit,
  setEditEmployee,
  setSelectEmployee,
  emp,
}) => {
  const { open } = useContext(ModelContext);
  return cloneElement(children, {
    onClick: () => {
      open(opens);
      setSelectEmployee(emp);
      setEditEmployee(emp);
      setCanEdit(false);
    },
  });
};

export const Close = ({ children, onDelete, onSave }) => {
  const { close, open } = useContext(ModelContext);
  return cloneElement(children, {
    onClick: () => {
      open(close);
      onSave?.();
      onDelete?.();
    },
  });
};

export const Window = ({ children, name }) => {
  const modelRoot = document.getElementById("modal-root");

  const context = useContext(ModelContext);

  const ref = useRef(null);

  const { openName, close, open } = context;

  useEffect(() => {
    function handleclick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        open(close);
      }
    }

    document.addEventListener("click", handleclick, true);

    return () => {
      document.removeEventListener("click", handleclick, true);
    };
  }, [open, close]);

  // const { openName, Close } = useContext(ModelContext);
  if (name !== openName) return null;

  return createPortal(
    <ModalBlur>
      <ModelPage ref={ref}>{children}</ModelPage>
    </ModalBlur>,
    modelRoot,
  );
};
