import React from "react";
import Form from "../components/organisms/Form"
import { CONTRACT_DATA } from ".././app/consts"
function Home() {
    console.log(CONTRACT_DATA.idl)
    return (
        
        <div className="w-100% h-screen flex justify-center items-center bg-[url('img.jpg')] bg-no-repeat bg-cover">
            <Form />
        </div>
    )
}

export default Home; 