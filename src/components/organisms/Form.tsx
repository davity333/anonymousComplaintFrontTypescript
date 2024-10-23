import Field from "../molecules/Field";
import { useState } from "react";
import Label from "../atoms/Label";
import TitleForm from "../atoms/TitleForm";
import CryptoJs from "crypto-js"

function Form() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const login = () => {
        let cryptPassword = CryptoJs.AES.encrypt(password, "regiber"); 
        alert(cryptPassword)
    }
    return (
        <form className="w-[60vh] h-[58vh] bg-[#000000CC] flex-col rounded-lg">
            <div className="w-full h-1/4 flex justify-center items-center">
                <TitleForm
                    title="Iniciar sesión"
                ></TitleForm>
            </div>
            <Field
                text={"Email"}
                val={email}
                fnval={setEmail}
            >
            </Field>
            <Field
                text={"Password"}
                val={password}
                fnval={setPassword}
            >
            </Field>
            <div className="w-full h-[35%] flex items-center justify-center flex-col">
                <div className="w-full h-1/2 flex justify-center items-end">
                 <button className="w-[90%] h-[50%] bg-[#48A2E7CC] rounded-sm" onClick={() => login()}>
                    Iniciar sesión
                 </button>
                </div>
                <div className="w-full h-1/2 flex justify-center items-center">
                    <Label text="¿Aun no tienes una cuenta?">
                    </Label>
                    <label className="p-2 text-red-400">
                        <a href={'./Register'}>
                            Registarte
                        </a>
                    </label>
                </div>
            </div>
        </form>
    )
}

export default Form; 