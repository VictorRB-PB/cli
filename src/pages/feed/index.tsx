import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Column, Container, Title, TitleHighLight} from "./styles"

const Feed = () => {
    
    return (<>
        <Header />
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
            <UserInfo percentual={80} nome="Victor Ramalho" image="https://avatars.githubusercontent.com/u/26422835?v=4" />
            <UserInfo percentual={27} nome="Victor Ramalho" image="https://avatars.githubusercontent.com/u/26422835?v=4" />
            <UserInfo percentual={89} nome="Victor Ramalho" image="https://avatars.githubusercontent.com/u/26422835?v=4" />
            <UserInfo percentual={57} nome="Victor Ramalho" image="https://avatars.githubusercontent.com/u/26422835?v=4" />
            <UserInfo percentual={10} nome="Victor Ramalho" image="https://avatars.githubusercontent.com/u/26422835?v=4" />
            </Column>
        </Container>
    </>)
}

export { Feed };