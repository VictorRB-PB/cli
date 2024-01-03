import { MdEmail, MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Container, TextContent, Title, Column, CriarText, 
    EsqueciText, Row, SubtitleLogin, TitleLogin, Wrapper } from "./styles"

const Login = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors, isValid } } = useForm();
    const onSubmit = data => console.log(data);
  
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
                        <Input name="password" control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
                        <Button title="Entrar" variant="secondary" type="submit" />
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