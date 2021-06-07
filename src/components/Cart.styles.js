import styled from "styled-components"

export const Wrapper = styled.aside`
    font-family: Arial, Helvetica, sans-serif;
    position: fixed;
    max-width:600px;
    width: 60%;
    min-width:325px;
    bottom: 5.5rem;
    z-index: 103;
    padding:20px;
    background-color: white;
    display:flex;
    justify-content: center;
    box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
    .containing-cart{
        max-width:500px;

    }
`