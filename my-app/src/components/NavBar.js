import React, { useState } from "react";
import { Card, Container, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { styled, withTheme } from '@mui/material/styles';
import data from "../data/Data";
import { useSharedFormState } from "../routes/Categories";

const StyledContainer = styled(Container)`
margin: 30px 0 0;
width: 100%;
background-color: #392e54;
border-radius: 16px;
`
const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .MuiToggleButtonGroup-grouped': {
      color: "white",
      border: 0,
      '&.Mui-disabled': {
        border: 0,
      },
      '&:not(:first-of-type)': {
        borderRadius: theme.shape.borderRadius,
      },
      '&:first-of-type': {
        borderRadius: theme.shape.borderRadius,
      },
    },
  }));

const StyledToggleButton = styled(ToggleButton)`
margin:  20px 50px;
`



export default function NavBar() {
    const [alignment, setAlignment] = React.useState('web');

    const { categories, setCategories } = useSharedFormState();


    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };
        return(
            <StyledContainer>
                <StyledToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform">
                    {data.map(({categories}) => (
                        <StyledToggleButton value={categories} 
                        onClick={(el) => setCategories(el.target.value,
                            console.log(el.target.value))}
                        >{categories}</StyledToggleButton>
                    ))}
                </StyledToggleButtonGroup>
            </StyledContainer>
        )
}