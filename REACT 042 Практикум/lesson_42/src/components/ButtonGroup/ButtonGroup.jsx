
import { Box, Button } from "@mui/material";

const boxStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    padding: "20px",
    backgroundColor: "#fff",
    width: "300px"
};

const redBtnStyle = {
    color: "white",
    backgroundColor: "red",
    padding: "12px 24px",
    '&:hover': {
        backgroundColor: 'darkred'
    }
};

const greenBtnStyle = {
    color: "white",
    backgroundColor: "green",
    padding: "12px 24px",
    '&:hover': {
        backgroundColor: 'darkgreen'
    }
};

const blueBtnStyle = {
    color: "white",
    backgroundColor: "blue",
    padding: "12px 24px",
    '&:hover': {
        backgroundColor: 'darkblue'
    }
};

const ButtonGroup = () => {
    return (
        <Box sx={boxStyle}>
            <Button sx={redBtnStyle}>Red</Button>
            <Button sx={greenBtnStyle}>Green</Button>
            <Button sx={blueBtnStyle}>Blue</Button>
        </Box>
    )
};

export default ButtonGroup;