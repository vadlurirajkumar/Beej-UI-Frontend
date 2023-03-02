
import styled from 'styled-components'



export const SideBarContainer = styled.div`

position: relative;
height: 100vh;
background-color: #fcfcfc;
box-sizing: border-box;
padding: 15px;
display: flex;
justify-content: center;
flex-direction: column;
align-items:${({Close}) => (Close ? "" : "center")};
transition: all 0.6s ease;
// border:0.5px solid grey;
width: ${({ Close }) => (Close ? '5vw' : '18vw')};
`;

export const SideBarButton = styled.button`
cursor: pointer;
background-color: lightgrey;
border-radius: 50%;
height:40px;
width: 40px;
// aspect-ratio: 1;
display: grid;
place-content: center;
border: none;
// box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
position: absolute;
top: 50%;
right: -10px;
transition: all 0.8s ease;
transform: ${({ Close }) =>
  Close ? 'rotate(180deg)' : 'rotate(0deg)'};
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
  background-color: #f1f1f1;
  height: 10vh;
  
  width: ${({ Close }) => (Close ? "95vw" : "82vw")};
  @media(max-width:1240px){
    width:100vw;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  grid-template-columns: max-content auto;
  align-items: center;
  margin-bottom: 25px;
  column-gap: 0.75rem;
  overflow: hidden;
  padding: 0 2px;
`;
export const Logo = styled.div`
  border-radius: 12px;
  display: grid;
  place-items: center;
  padding: 5px 5px 5px 10px; 
  box-sizing: border-box;
  cursor:pointer;
  // background-color:green;
  justify-content: center;

`;
export const LogoText = styled.div`
  font-size: 16px;
  opacity: ${({ Close }) => (Close ? '0' : '1')};

  transition: all 0.3s ease;
  color: #000;
  margin-left:5px;
  @media(max-width:1551px){
    margin-left:-4px;
  }
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

export const Founderfinance=styled.div`
  background: #f5f5f5 0% 0% no-repeat padding-box;
        // box-shadow: 0px 10px 20px #00000029;
        // border-radius: 10px;
        margin: 0px 20px;
        
        width: ${({ Close }) => (Close ? '95vw' : '85vw')};
     
`;

