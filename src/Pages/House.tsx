import Header from "../components/molecules/header";
import Introductions from "../components/organisms/Introduction";
import MessageHouse from "../components/organisms/MessageHouse";
import Statistics from "../components/organisms/Statistics";
function House() {
    return ( 
        <>
            <Header></Header>
            <Introductions></Introductions>
            <Statistics></Statistics>
            <MessageHouse></MessageHouse>
        </>
    );
}

export default House;