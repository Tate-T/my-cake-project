import { Header } from "./Header.styled";
import { Container } from "../Container/Container.styled";
import { Logo } from "../Logo/Logo.styled";
import Chat from "../../../imgs/chat.svg";
import Login from "../../../imgs/login.svg";
import Position from "../../../imgs/position.svg";
import styled from "styled-components";
import { Link ,NavLink } from 'react-router-dom'
import Modal1 from "../../loginModals/Modal1";
import { useState } from "react";
const LocationBtn = styled.button`
  border-radius: 36px;
  background-color: rgb(255, 242, 242);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 20px 5px 20px;
  margin-left: 30px;
`;

const HeaderList = styled.ul`
	margin-left: auto;
	margin-right: auto;
	gap: 30px;
	display: flex;
	align-items: center;

	li:hover {
		cursor: pointer;
	}
`



const HeaderBlock = styled.div`
	display: flex;
	align-items: center;
`

const ChatIcon = styled.img`
  margin-right: 30px;
  margin-left: auto;
  width: 25px;
`;
ChatIcon.defaultProps = {
  src: Chat,
};

const LoginIcon = styled.img`
  width: 25px;
  margin-right: 12.5px;
`;
LoginIcon.defaultProps = {
  src: Login,
};

const PositionIcon = styled.img`
  width: 14px;
  margin-right: 15px;
`;
PositionIcon.defaultProps = {
  src: Position,
};
const HeaderWrapper = styled.div`
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
`
const HeaderLink = styled(NavLink)`
  	font-family: 'Verdana';
	color: rgb(1, 25, 54);
	font-size: 18px;
	font-weight: 400;
	line-height: 120%;

  &.active {
   color: #8E4A4E;
 }
`
const HeaderComp = () => {
  const [isOpen, setIsOpen] = useState(false)
    return (
      <>
      <Header>
        <Container>
                  <HeaderWrapper>
                   <Link to="/"><Logo>MyCake</Logo></Link> 
                    <LocationBtn type="button">
                      <PositionIcon />
                      Вся Україна
                    </LocationBtn>
                    <HeaderList>
                      <li>
                        <HeaderLink to="/desserts">Десерти</HeaderLink>
                      </li>
                      <li>
                        <HeaderLink to="/confecionres">Кращі кондитери</HeaderLink>
                      </li>
                      <li>
                        <HeaderLink to="/articles">Корисні статті</HeaderLink>
                      </li>
                    </HeaderList>
                    <HeaderBlock>
                      <ChatIcon />
                      <LoginIcon />
                      <button
                        style={{
                          backgroundColor: 'transparent',
                          fontFamily: 'Verdana',
                        }}
                        onClick={() => {
                          setIsOpen(true) 
                        }}
                      >
                      {/* <Link to="/infoConfecoiners">Увійти</Link>
                         */}
                         Увійти
                      </button>
                    </HeaderBlock>
                  </HeaderWrapper>
                </Container>
      </Header>
      {isOpen && <Modal1/>}
      </>
      
    );
  };
  ;


export default HeaderComp;
