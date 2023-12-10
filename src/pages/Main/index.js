import Header from "../../components/Header";
import TodoList from "../ReceiptList";

import {Container} from "./styled";

const Main = ({toggleMode}) => {
    return (
        <>
            <Header toggleMode={toggleMode}/>
            <Container>
                <TodoList/>
            </Container>
        </>
    );
};

export default Main;