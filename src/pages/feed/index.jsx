import { Link } from "react-router-dom";

//import bannerImage from "../../assets/";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Column, Container, TextContent, Title, TitleHighLight} from "./styles"

const Feed = () => {
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </Column>
            <Column flex={1}>
                <TitleHighLight># RANKING 5 TOP DA SEMANA</TitleHighLight>
            <UserInfo percentual={80} nome="Victor Ramalho" image=""/>
            <UserInfo percentual={27} nome="Victor Ramalho" image=""/>
            <UserInfo percentual={89} nome="Victor Ramalho" image=""/>
            <UserInfo percentual={57} nome="Victor Ramalho" image=""/>
            <UserInfo percentual={10} nome="Victor Ramalho" image=""/>
            </Column>
        </Container>
    </>)
}

export { Feed };