import CuadroModal from "../components/molecules/CuadroModal";
import Header from "../components/molecules/header";
import LugaresOrg from "../components/organisms/LugaresOrg";
import { useState } from "react";
function Lugares() {
    const [modal, setModal] = useState(false);

    const click = () =>{
        setModal(true);
    }

    const clickExit = () =>{
        setModal(false);
    }

    return ( 
        <>
        <Header></Header>
        <LugaresOrg></LugaresOrg>
        </>
    );
}

export default Lugares;