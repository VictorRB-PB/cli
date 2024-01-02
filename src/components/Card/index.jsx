import React from 'react'

import { FiThumbsUp } from "react-icons/fi"
import { CardContainer,
         Content, 
         HasInfo, 
         ImageBackground, 
         PostInfo, 
         UserPicture, 
         Userinfo} from "./styles";

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground />
        <Content>
            <Userinfo>
                <UserPicture />
                <div>
                    <h4>Victor Ramalho</h4>
                    <p>Há 8 minutos</p>
                </div>
            </Userinfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito o curso de html e css no bootcamp dio do Global avanade... <strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JavaScript</h4>
                <p>
                    <FiThumbsUp />10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }