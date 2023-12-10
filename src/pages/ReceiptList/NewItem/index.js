import {useState} from "react";

import {addReceipt} from "../../../api/receipts";

import {AddButton, Container, MiniContainer, Input, InputFile} from "./styled";

const NewItem = ({isReceiptsLoading, requestReceipts}) => {
    const [text, setText] = useState("");
    const [firstImage, firstSetImage] = useState("");
    const [secondImage, secondSetImage] = useState("");

    const handleInputChange = (event) => {
        setText(event.target.value);
    };

    const handleFirstImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            firstSetImage(URL.createObjectURL(event.target.files[0]));
        }
    }
    const handleSecondImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            secondSetImage(URL.createObjectURL(event.target.files[0]));
        }
    }

    const handleAddClick = async () => {
        if (text && firstImage) {
            if (secondImage) {
                await addReceipt(text, firstImage, secondImage);
            }else {
                await(addReceipt(text, firstImage, firstImage))
            }
            requestReceipts();
            setText("");
        }
    };

    return (
        <Container>
            <Input value={text} onChange={handleInputChange}></Input>
            <MiniContainer>
                First part of check(required)
                <InputFile type="file" onChange={handleFirstImageChange}/>
            </MiniContainer>
            <MiniContainer>
                Second part of check(if exists)
                <InputFile type="file" onChange={handleSecondImageChange}/>
            </MiniContainer>
            <AddButton disabled={!text || isReceiptsLoading} onClick={handleAddClick}>
                Add
            </AddButton>
        </Container>
    );
};

export default NewItem;