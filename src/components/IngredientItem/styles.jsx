import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    label{
        //margin-left: 7px;
        margin: 10px 0 10px 10px;
        color: #000000;
    }

    .container {
    display: block;
    position: relative;
    padding-left: 17px;
    cursor: pointer;
    font-size: 20px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    }

    .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    }

    .checkmark {
    position: absolute;
    top: 4px;
    left: -10px;
    height: 20px;
    width: 20px;
    background-color: #E7EEEF;
    box-shadow: inset 0 1px 4px rgb(0 0 0 / 10%), 0 0 0 transparent;
    border-radius: 2px;
    }

    .container:hover input ~ .checkmark {
    background-color: #E7EEEF;
    }

    .container input:checked ~ .checkmark {
    background-color: #FFFFFF;
    box-shadow: none;
    }

    .checkmark:after {
    content: "";
    position: absolute;
    display: none;
    }

    .container input:checked ~ .label{
        color: #c3c3c3;
        text-decoration: line-through;
    }

    .container input:checked ~.checkmark:hover{
        box-shadow: inset 0 1px 4px rgb(0 0 0 / 10%), 0 0 0 transparent;
    }

    .container input:checked ~ .checkmark:after {
    display: block;
    }

    .container .checkmark:after {
    left: 7px;
    top: 4px;
    width: 3px;
    height: 8px;
    border: solid;
    border-color: #068932;
    border-width: 0 3px 3px 0;
    border-radius: 3px;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    }
`