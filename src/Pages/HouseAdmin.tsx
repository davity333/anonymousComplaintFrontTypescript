import HeaderAdmin from "../components/molecules/HeaderAdmin";
import Introductions from "../components/organisms/Introduction";
import MessageHouse from "../components/organisms/MessageHouse";
import Statistics from "../components/organisms/Statistics";
function HouseAdmin() {
    return ( 
        <>
            <HeaderAdmin></HeaderAdmin>
            <Introductions></Introductions>
            <Statistics></Statistics>
            <MessageHouse></MessageHouse>
        </>
    );
}

export default HouseAdmin;