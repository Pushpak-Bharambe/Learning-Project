import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { ArrowLeft, Home, Search } from "lucide-react";

const float = keyframes`
  0%{
    transform: translateY(0px);
  }
  50%{
    transform: translateY(-12px);
  }
  100%{
    transform: translateY(0px);
  }
`;

const fadeIn = keyframes`
  from{
    opacity:0;
    transform:translateY(30px);
  }
  to{
    opacity:1;
    transform:translateY(0);
  }
`;

const Page = styled.div`
  min-height: 100vh;
  background:
    linear-gradient(135deg, rgba(15, 23, 42, 0.96), rgba(30, 41, 59, 0.92)),
    url("/company.jpg");

  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 2rem;
`;

const Container = styled.div`
  width: 1100px;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  padding: 4rem;
  border-radius: 32px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(18px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45);
  animation: ${fadeIn} 0.8s ease;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }
`;

const Left = styled.div`
  flex: 1;
`;

const ErrorCode = styled.h1`
  font-size: 9rem;
  margin: 0;
  font-weight: 900;
  background: linear-gradient(135deg, #38bdf8, #2563eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 6rem;
  }
`;

const Heading = styled.h2`
  color: white;
  font-size: 3rem;
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  color: #cbd5e1;
  font-size: 1.1rem;
  line-height: 1.8;
  max-width: 550px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const PrimaryButton = styled.button`
  height: 55px;
  padding: 0 1.6rem;
  border-radius: 16px;
  border: none;
  background: linear-gradient(135deg, #0ea5e9, #2563eb);
  color: white;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  transition: 0.3s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 30px rgba(37, 99, 235, 0.35);
  }
`;

const SecondaryButton = styled.button`
  height: 55px;
  padding: 0 1.6rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.08);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  backdrop-filter: blur(10px);
  transition: 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  width: 420px;
  height: 420px;
  border-radius: 30px;
  overflow: hidden;
  animation: ${float} 5s ease-in-out infinite;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SearchBox = styled.div`
  margin-top: 2rem;
  width: 100%;
  max-width: 450px;
  height: 58px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

const SearchInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  color: white;
  font-size: 1rem;
  margin-left: 0.8rem;
  outline: none;

  &::placeholder {
    color: #cbd5e1;
  }
`;

export const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <Container>
        <Left>
          <ErrorCode>404</ErrorCode>

          <Heading>Oops! Page Not Found</Heading>

          <Description>
            The page you are trying to access may have been removed, renamed, or
            is temporarily unavailable in the WorkSphere management platform.
          </Description>

          <SearchBox>
            <Search color="#cbd5e1" size={20} />

            <SearchInput
              type="text"
              placeholder="Search dashboard, employees, departments..."
            />
          </SearchBox>

          <ButtonGroup>
            <PrimaryButton onClick={() => navigate("/")}>
              <Home size={18} />
              Back To Home
            </PrimaryButton>

            <SecondaryButton onClick={() => navigate(-1)}>
              <ArrowLeft size={18} />
              Go Back
            </SecondaryButton>
          </ButtonGroup>
        </Left>

        <Right>
          <ImageWrapper>
            <Img src="/404.jpg" alt="404" />
          </ImageWrapper>
        </Right>
      </Container>
    </Page>
  );
};
