import styled from "styled-components";
import { createPortal } from "react-dom";

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
  /* background-color: skyblue; */
  position: fixed;
  /* display: flex; */
  /* justify-content: center; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  box-shadow: 0 0 50px black;
`;

export const ModalBucket = ({ children }) => {
  const modelRoot = document.getElementById("modal-root");
  return createPortal(
    <ModalBlur>
      <ModelPage>{children}</ModelPage>
    </ModalBlur>,
    modelRoot,
  );
};
