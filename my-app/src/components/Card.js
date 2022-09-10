import { Container, Card, CardContent, Typography, Button } from "@mui/material"
import React from "react"
import data from "../data/Data"
import { styled } from '@mui/material/styles';
import { useSharedFormState } from "../routes/Categories";

const StyledContainer = styled(Container)`
border-radius: 16px;
padding: 20px; 
background-color: #392e54;
margin: 30px 0;
text-align: center;
`
const StyledCard = styled(Card)`
text-align: start;
margin: 30px;
background-color: #4b4172;
display: inline-block;
width: 400px;
height: 240px;
border-radius: 16px;
`
const StyledButton = styled(Button)`
color: white;
`
export default function CardContainer(){
    const {categories} = useSharedFormState(); 
    console.log(categories);

    const filterCategories = data.filter(a => a.categories === categories)
    return(
        <StyledContainer>
            {filterCategories.map(({categories, subcategories}) => (
                subcategories.map(({id,  subcategory}) => (
                <StyledCard key={id}>
                    <CardContent>
                        <Typography>
                            {categories}
                        </Typography>
                        <Typography>
                            {subcategory}
                        </Typography>
                        <StyledButton>Demo</StyledButton>
                    </CardContent>
                </StyledCard>
                ))
                ))}
        </StyledContainer>
    )
}