import React from 'react'
import logo from "../../assets/logo-dio.jpg";
import { Button } from "../Button";

import {
    BuscarInputContainer,
    Column,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from "./styles"

const Header = ({autenticado}) => {
  return (
    <Wrapper>
        <Container>
            <Row>
              <img src="#" alt="Logo da dio" />
              {autenticado ? (
                <>
              <BuscarInputContainer>
                <Input placeholder='Buscar...'  />    
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu> 
              </>
              ): null}
            </Row>
            <Row>
                {autenticado ? (
                  <UserPicture src=""/> ) : ( <>
                <MenuRight href="#">Home</MenuRight>
                <Button title="Entrar"/>
                <Button title="Cadastrar"/>
                </> )}
            </Row>
        </Container>
    </Wrapper>
  )
}   

export { Header }
