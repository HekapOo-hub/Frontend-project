import {useTheme} from "styled-components/macro";
import {DarkMode} from "@styled-icons/material/DarkMode";
import {LightMode} from "@styled-icons/material/LightMode";

import IconButton from "../IconButton";


import {Container, LogoContainer, Title} from "./styled";

const Header = ({toggleMode}) => {
    const theme = useTheme();

    return (
        <Container>
            <LogoContainer href="/">
                <Title>YoReceipts</Title>
            </LogoContainer>
            <IconButton
                color="primaryContrast"
                icon={theme.mode === "dark" ? DarkMode : LightMode}
                label="Toggle theme"
                onClick={toggleMode}
            />
        </Container>
    );
};

export default Header;