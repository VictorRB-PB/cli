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
        FazerLoginText, Row, TitleLogin, Wrapper, SubtitleLogin } from "./styles"
import { IFormData } from "./types";

const schema = yup
    .object({
      name: yup.string().min(2, 'No minimo 2 caracteres').required('Campo obrigatorio'),
      email: yup.string().email('Email não é valido').required('Campo obrigatorio'),
      password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatorio'),
    }).required()

const Cadastro = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async (formData: IFormData) => {
        try{
            const { data } = await api.get(`users?email=${formData.email}`);
            console.log("retorna api", data);

            if(data.length && data[0].id){
                alert('Email já cadastrado');
            }else{
                await api.post('users', {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password})
                    .then(() => { 
                    alert('Usuario cadastrado com sucesso')
                    navigate("/login")})
                    .catch(() => 
                    alert('Houve algum erro'));
            }
        }catch(e){
            alert(e.message);
        }
    };
        
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
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <SubtitleLogin>Crie sua conta e make the change.</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="nome" errorMessage={errors?.name?.message} control={control} placeholder="Nome completo" leftIcon={<MdEmojiEmotions />} />
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
                        <Input name="senha" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
                        <Button title="Criar minha conta" variant="secondary" type="submit" />
                    </form>
                    <Row>
                        <SubtitleLogin>
                            Ao clicar em "criar minha conta grátis",
                            declaro que aceito as Políticas de 
                            Privacidade e os Termos de Uso da DIO.
                        </SubtitleLogin>
                    </Row>
                    <Row>
                        <FazerLoginText>Já tenho conta. <em>Fazer login</em></FazerLoginText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Cadastro };