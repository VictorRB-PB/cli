import { MdEmail, MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { api } from "../../services/api";

import { Container, Title, Column, CriarText, 
    EsqueciText, Row, SubtitleLogin, TitleLogin, Wrapper } from "./styles"

const schema = yup
    .object({
      email: yup.string().email('email não é valido').required('Campo obrigatorio'),
      senha: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatorio'),
    }).required()

const Login = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try{
            const { data } = await api.get(`/users?email=${formData.email}&senha=${formData.senha}`);
            console.log("retorna api", data);

            if(data.length && data[0].id){
                navigate("/feed");
                return
            }else{
                alert('Usuário ou senha inválido');
            }
        }catch(e){
            alert(e.message);
        }
    };
        
    console.log('errors', errors);

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
                    <SubtitleLogin>Faça seu login e make the change.</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
                        <Input name="senha" errorMessage={errors?.senha?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
                        <Button title="Entrar" variant="secondary" type="submit" />
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login };