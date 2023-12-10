import {useCallback} from "react";
import {Container, SubTitle, Title} from "./styled";
import {getReceipts} from "../../api/receipts";
import useAsync from "../../hooks/use-async";
import Item from "./Item";
import NewItem from "./NewItem";

const ReceiptDeck = () => {
    const getReceiptsList = useCallback(() => getReceipts(), []);
    const {
        execute: requestReceipts,
        isLoading: isReceiptsLoading,
        value: receipts = [],
    } = useAsync(getReceiptsList);
    return (<>
        <Container>
            <Title>My receipt</Title>
            <SubTitle>Click the receipt to see second part</SubTitle>
            {receipts.map((receipt) => (
                <Item
                    key={receipt.id}
                    id={receipt.id}
                    firstImagePath={receipt.firstImagePath}
                    secondImagePath={receipt.secondImagePath}
                    isFrontView={receipt.isFrontView}
                    requestReceipts={requestReceipts}
                    text={receipt.text}
                />
            ))}
        </Container>
    <NewItem isReceiptsLoading={isReceiptsLoading} requestReceipts={requestReceipts}/>
        </>
    );
}
export default ReceiptDeck;