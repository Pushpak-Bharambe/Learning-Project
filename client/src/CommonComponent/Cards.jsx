import styled from "styled-components";
import Icon from "@mui/material/Icon";

const Cards = styled.div`
  position: relative;
  width: 100%;
  max-width: 280px;
  height: 150px;

  /* CLEAN WHITE CARD */
  background: #ffffff;

  border: 1px solid #e2e8f0;

  border-radius: 18px;

  padding: 1.2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  cursor: pointer;

  transition: all 0.25s ease;

  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);

  &:hover {
    transform: translateY(-6px);

    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);

    border-color: #cbd5e1;
  }

  /* subtle modern glow effect */
  &:before {
    content: "";
    position: absolute;
    inset: 0;

    background: radial-gradient(
      circle at top right,
      rgba(59, 130, 246, 0.06),
      transparent 60%
    );

    opacity: 0;
    transition: 0.3s ease;
  }

  &:hover:before {
    opacity: 1;
  }
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
`;
const IconBadge = styled.div`
  height: 38px;
  width: 38px;

  border-radius: 12px;

  background: #f8fafc;

  border: 1px solid #e2e8f0;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #475569;
`;

const Title = styled.h3`
  color: #1f2937;
  font-size: 1rem;
  margin: 0;
  font-weight: 600;
`;

const Desc = styled.p`
  color: #6b7280;
  font-size: 0.85rem;
  margin: 0;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ActionText = styled.span`
  font-size: 0.82rem;
  color: #4f46e5; /* soft indigo (calm but visible) */
  font-weight: 600;
  letter-spacing: 0.2px;

  transition: 0.2s ease;

  ${Cards}:hover & {
    color: #3730a3; /* slightly deeper on hover */
  }
`;
const Arrow = styled.div`
  color: #9ca3af;
  font-size: 1.1rem;
  transition: 0.2s;

  ${Cards}:hover & {
    transform: translateX(3px);
  }
`;

export const Card = ({ icon, title, desc = "Open module", onClick }) => {
  return (
    <Cards onClick={onClick}>
      <TopRow>
        <IconBadge>
          <Icon fontSize="small">{icon}</Icon>
        </IconBadge>
      </TopRow>

      <div>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </div>

      <Footer>
        <ActionText>Open</ActionText>
        <Arrow>→</Arrow>
      </Footer>
    </Cards>
  );
};
