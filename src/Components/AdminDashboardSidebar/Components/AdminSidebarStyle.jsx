import styled from "styled-components";

export const SideBarContainer = styled.div`
  position: relative;
  height: 100vh;
  background-color: #fcfcfc;
  box-sizing: border-box;
  // padding: 15px;
  padding: ${({ Close }) => (Close ? "20px" : "15px")};

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: ${({ Close }) => (Close ? "" : "center")};

  transition: all 0.8s ease;
  // border:0.5px solid grey;
  width: ${({ Close }) => (Close ? "5vw" : "15vw")};
  // border-radius: ${({ Close }) => (Close ? "4px" : "8px")};
  // box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  @media (max-width: 1600px) {
    padding: ${({ Close }) => (Close ? "15px" : "15px")};
  }
  @media (max-width: 1400px) {
    padding: 10px;
  }
`;

export const SideBarButton = styled.button`
  cursor: pointer;
  background-color: lightgrey;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  // aspect-ratio: 1;
  display: grid;
  place-content: center;
  border: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  position: absolute;
  top: 50%;
  right: -10px;
  z-index: 999999;
  transition: all 0.8s ease;
  transform: ${({ Close }) => (Close ? "rotate(180deg)" : "rotate(0deg)")};
  :hover {
    // box-shadow: rgba(99, 99, 99, 0.5) 0px 2px 8px 0px;
    transition: all 0.5s ease;
  }
  @media (max-width: 1600px) {
    height: 30px;
    width: 30px;
  }
  @media (max-width: 1400px) {
    height: 25px;
    width: 25px;
  }
`;

export const Navbar = styled.div`
  background-color: #f1f1f1;
  height: 10vh;
  // padding-left: 30px;
  width: ${({ Close }) => (Close ? "95vw" : "85vw")};
  // @media(max-width:1200px){
  //   width:100vw;
  // }
`;

export const LogoWrapper = styled.div`
  display: grid;
  grid-template-columns: max-content auto;
  align-items: center;
  margin-bottom: 25px;
  column-gap: 0.75rem;
  overflow: hidden;
  padding: 0 2px;

  @media (max-width: 1600px) {
    margin-bottom: 15px;]
  }
  @media (max-width: 1400px) {
    margin-bottom: 10px;
  }
`;
export const UserWrapper = styled.div`
  width: 95%;
  display: grid;
  grid-template-columns: max-content auto;
  align-items: center;
  margin-bottom: 25px;
  column-gap: 0.75rem;
  overflow: hidden;
  padding: 0 5px;
  border-radius:5px;

  @media (max-width: 1600px) {
    margin-bottom: 20px;
  }
  @media (max-width: 1400px) {
    margin-bottom: 25px;
    column-gap: 0.5rem;
  }
`;

export const Logo = styled.div`
  // border-radius: 12px;
  // display: grid;
  // place-items: center;
  // padding: 5px 5px 5px 10px;
  // box-sizing: border-box;
  // cursor: pointer;
  // justify-content: center;

  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`;
export const LogoText = styled.div`
  // opacity: ${({ Close }) => (Close ? "0" : "1")};
  display: ${({ Close }) => (Close ? "none" : "block")};
  font-size: 16px;
  transition: all 0.1s ease;
  color: #000;
  margin-left: 5px;
  span {
    font-weight: 400;
  }
`;

export const SideTabWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const TopWrapper = styled.div`
  flex: 1 1 auto;
`;

export const BottomWrapper = styled.div`
  flex: 0 1 auto;
`;

export const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 40px;
  width: ${({ Close }) => (Close ? "5vw" : "15vw")};

  @media (max-width: 1600px) {
    margin-bottom: 30px;
  }
`;
