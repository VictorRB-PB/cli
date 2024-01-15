import { Children, createContext, useState } from "react";
import { IAuthContext, IAuthContextProviderProps, ILoginData } from "./types";
import { IUser } from "../types/user";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider = ({
    children,
}: IAuthContextProviderProps) => {

    const [user, setUser] = useState<IUser>({} as IUser);

    const navigate = useNavigate();

    const handleLogin = async (loginData: ILoginData) => {
        try{
            const { data } = await api.get(`/users?email=${loginData.email}&password=${loginData.password}`);
            console.log("retorna api", data);

            if(data.length && data[0].id){
                setUser(data[0]);
                navigate("/feed");
                return
            }else{
                alert('Usuário ou senha inválido');
            }
        }catch(e){
            alert(e.message);
        }
    }
   
    const handleSignOut = () => {
        setUser({} as IUser);
        navigate("/");
    }

    return(
        <AuthContext.Provider value={{user, handleLogin, handleSignOut}}>
            {children}
        </AuthContext.Provider>
    );
};