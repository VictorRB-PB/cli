import { MdEmail, MdEmojiEmotions, MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { api } from "../../services/api";

import { Container, Title, Column, 
        EsqueciText, Row, TitleLogin, Wrapper } from "./styles"

const schema = yup
    .object({
      nome: yup.string().min(2, 'No minimo 2 caracteres').required('Campo obrigatorio'),
      email: yup.string().email('Email não é valido').required('Campo obrigatorio'),
      senha: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatorio'),
    }).required()

const Cadastro = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try{
            const { data } = await api.get(`users?email=${formData.email}`);
            console.log("retorna api", data);

            if(data.length && data[0].id){
                alert('Email já cadastrado');
            }else{
                await api.post('users', {
                    nome: formData.nome,
                    email: formData.email,
                    senha: formData.senha})
                    .then(({formData}) => { 
                    alert('Usuario cadastrado com sucesso')
                    navigate("/feed")})
                    .catch(({formData}) => 
                    alert('Houve algum erro'));
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="nome" errorMessage={errors?.nome?.message} control={control} placeholder="Nome" leftIcon={<MdEmojiEmotions />} />
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
                        <Input name="senha" errorMessage={errors?.senha?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
                        <Button title="Cadastrar" variant="secondary" type="submit" />
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Cadastro };