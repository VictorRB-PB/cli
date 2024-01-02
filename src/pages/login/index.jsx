import { MdEmail, MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Container, TextContent, Title, Column, CriarText, 
    EsqueciText, Row, SubtitleLogin, TitleLogin, Wrapper } from "./styles"

const Login = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate("/feed")
    }

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                  A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>    
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <TitleLogin>Faça seu login e make the change.</TitleLogin>
                    <form>
                        <Input placeholder="E-mail" leftIcon={<MdEmail />}/>
                        <Input placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                        <Button title="Entrar" variant="secondary" onClick={handleClickSignIn} type="button" />
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
                <Input placeholder="email" />
            </Column>
        </Container>
    </>)
}

export { Login };