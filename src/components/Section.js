import React from 'react'
import styled from 'styled-components'

function Section() {
    return (
        <Wrap>
            <ItemText>
                <h1>Model X</h1>
                <p>Order online for touches delievery.</p>
            </ItemText>
            <ButtonGroup>
                <LeftButton>
                    Custom Order
                </LeftButton>
                <RightButton>
                    Existing Inventory
                </RightButton>
            </ButtonGroup>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/model-x.jpg'); 
    display: flex;
    flex-direction: column;
    justify-content: space-between; //Vertical alignment
    align-items: center; // horizontal
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 1.75rem;
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 2.5rem;
    width: 16rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6rem;
    text-transform: uppercase;
    opacity:0.85;
    font-size: 0.8rem;
    cursor: pointer;
`

const RightButton = styled(LeftButton)`
    color: rgba(23, 26, 32, 0.8);
    background-color: white;
`