import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFFee;
    box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.36);
    position: fixed;
    top: 0;
    z-index: 1000;
`

export const NavContainer = styled.nav`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 1000;
    a{
        text-decoration: none;
        color: #000000;
        font-size: 20px;
        font-weight: 600;
        &.active{
            border-bottom: 2px solid #ff9f4a;
        }
    }
    span{
        width: 2px;
        border: 1px solid #ff9f4a;
        height: 30px;
    }
`