import styled from "styled-components";
import Footerr from "../../components/general-components/Footer/Footer.jsx";
import { useState } from "react";
import HeaderComp from "../../components/general-components/Header/Header.jsx";
const Filter = styled.div`
  width: 252px;
  height: 311px;
  h2 {
    color: #011936;
    font-family: "Yeseva One";
    font-size: 24px;
    line-height: 1.25;
    margin-bottom: 30px;
    font-weight: 400;
  }
  ul {
    font-family: "Roboto";
    display: flex;
    flex-direction: column;
    color: #011936;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.33;
    gap: 8px;
    li {
      position: relative;
      font-family: "Roboto";
      padding-left: 2px;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      gap: 10px;
      color: #011936;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.5;
      align-items: center;
      img {
        cursor: pointer;
        width: 30px;
        height: 30px;
        flex-shrink: 0;
      }
    }
  }
`;

const Card = styled.li`
  display: flex;
  flex-direction: column;
  width: 373px;
  height: 444px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 2px 10px 0px rgba(67, 96, 124, 0.25);
  padding-bottom: 20px;
  box-sizing: border-box;
  * {
    margin-bottom: 20px;
    width: 100%;
    padding: 0px 25px;
    box-sizing: border-box;
  }
  img {
    padding: 0;
    flex-shrink: 1;
    border-radius: 5px;
    height: 200px;
  }
  h3 {
    color: #43607c;
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
  }
  p {
    color: #43607c;
    font-family: "Roboto";
    font-size: 14px;
    font-weight: 400;
    line-height: 1.71;
    margin-bottom: auto;
  }
  button {
    display: flex;
    height: 40px;
    padding: 10px 20px;
    width: 333px;
    margin: 0;
    margin-left: 20px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 50px;
    background: #fdad6d;
    color: #5e2d07;
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
    transition: 350ms;
    cursor: pointer;
    &:hover {
      background: #de9960;
    }
  }
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  width: 1180px;
  margin-bottom: 30px;
`;

const LoadMore = styled.button`
  margin-right: 20px;
  width: 1180px;
  display: flex;
  height: 50px;
  padding: 5px 10px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  gap: 15px;
  align-self: stretch;
  border-radius: 49px;
  border: 1px solid #84a6c2;
  background: #fff;
  color: var(--CTA-blue, #43607c);
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
  margin-left: auto;
  margin-bottom: 40px;
  cursor: pointer;
  transition: 350ms;
  &:hover {
    background: #e5e5e5;
  }
  img {
    width: 25px;
    height: 25px;
  }
`;

const Pagination = styled.ul`
  position: relative;
  display: flex;
  width: 290px;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  height: 50px;
  margin-left: 700px;
  margin-bottom: 50px;
  li {
    color: #5e2d07;
    font-family: "Roboto";
    font-size: 18px;
    font-weight: 400;
    line-height: 1.2;
    box-sizing: border-box;
    border-radius: 50px;
    border: 1px solid #ffe2ca;
    background: #fff;
    display: flex;
    width: 50px;
    height: 50px;
    padding: 5px 10px;
    justify-content: center;
    align-items: center;
    transition: 350ms;
    cursor: pointer;
    &:hover {
      font-weight: 700;
      background: #d0d0d0;
    }
  }
`;



export default function InfoConfecoiners() {
  
  return (
    <>
        <HeaderComp></HeaderComp>
          
      <Footerr></Footerr>
    </>
  );
}
