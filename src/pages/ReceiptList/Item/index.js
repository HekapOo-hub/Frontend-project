import { Close } from "@styled-icons/material-outlined/Close";

import { removeReceipt, updateReceipt } from "../../../api/receipts";

import { Container,Image, Content, Text } from "./styled";

const Item = ({ id, isFrontView,firstImagePath,secondImagePath, requestReceipts, text }) => {
    const handleTodoClick = async () => {
        await updateReceipt({ id, isFrontView: !isFrontView, text,firstImagePath,secondImagePath });

        requestReceipts();
    };

    const handleRemoveClick = async () => {
        await removeReceipt(id);

        requestReceipts();
    };

    return (
        <Container isFrontView={isFrontView}>
            <Content onClick={handleTodoClick}>
                {!isFrontView ? (
                    <Image src={firstImagePath} />
                ) : (
                    <Image src={secondImagePath} />
                )}
                <Text>{text}</Text>
            </Content>
            <Close size={24} title="Remove" onClick={handleRemoveClick} />
        </Container>
    );
};

export default Item;