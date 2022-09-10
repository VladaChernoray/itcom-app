import { Container } from "@mui/system";
import React from "react";
import CardContainer from "../components/Card";
import NavBar from "../components/NavBar";
import { useBetween } from 'use-between'

export const useFormState = () => {
    const [categories, setCategories] = React.useState();
    return {
      categories,
      setCategories,
    };
  };
export const useSharedFormState = () => useBetween(useFormState);
export class CategoriesRoute extends React.Component 
{
    render() {
        return(
            <Container>
                <NavBar/>
                <CardContainer/>
            </Container>
        )
    }
}