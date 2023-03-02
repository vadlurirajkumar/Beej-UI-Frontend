import styled from "styled-components";

export const SideBarContainer = styled.div`
  position: relative;
  height: 100vh;
  background-color: #fcfcfc;
  box-sizing: border-box;
  padding: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: ${({ Close }) => (Close ? "" : "center")};
  transition: all 0.8s ease;
  // border:0.5px solid grey;
  width: ${({ Close }) => (Close ? "5vw" : "18vw")};
  // border-radius: ${({ Close }) => (Close ? "4px" : "8px")};
  // box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const SideBarButton = styled.button`
cursor: pointer;
background-color: LightGrey;
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
transform: ${({ Close }) => (Close ? "rotate(180deg)" : "rotate(0deg)")} translateY:-50%;
:hover {
  // box-shadow: rgba(99, 99, 99, 0.5) 0px 2px 8px 0px;
  transition: all 0.5s ease;
}
@media (max-width: 1600px) {
  height: 30px;
  width: 30px;
}
@media (max-width: 1400px) {
  cursor: pointer;
  height: 25px;
  width: 25px;
}
`;

export const Navbar = styled.div`
  background-color: #f5f5f5;
  height: 10vh;
  // padding-left: 30px;
  width: ${({ Close }) => (Close ? "95vw" : "82vw")};
  @media(max-width:1240px){
    width:100vw;
  }
`;

export const LogoWrapper = styled.div`
  display: grid;
  grid-template-columns: max-content auto;
  align-items: center;
  margin-bottom: 25px;
  column-gap: 10px;
  overflow: hidden;
  padding: 0 5px;
  @media (max-width: 1700px) {
    margin-bottom: 20px;
    column-gap: 5px;
  }
  @media (max-width: 1450px) {
    margin-bottom: 15px;
    column-gap: 5px;
    padding: 0 0px;
  }
`;
export const Logo = styled.div`
  border-radius: 12px;
  display: grid;
  place-items: center;
  padding: 5px 5px 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  // background-color:green;
  justify-content: center;
`;
export const LogoText = styled.div`
  font-size: 16px;
  opacity: ${({ Close }) => (Close ? "0" : "1")};

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
