import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 60px;
`

export const PresentationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        font-size: 45px;
        font-family: 'Roboto', sans-serif;
    }
    p{
        margin-left: 20px;
        font-size: 17px;
        span{
            font-weight: bold;
        }
    }
`

export const MetaDataContainer = styled.div`
    margin-top: 15px;
    display: flex;
`

export const MainContainer = styled.div`
    width: 74%;
    display: flex;
    margin: 30px auto;
    
`

export const PrepareContainer = styled.div`
    width: 69.59%;
    background-color: #FFFFFF;
    padding: 10px;
    h3{
        font-size: 23px;
        
    }
    h3.stepHeader{
        margin-top: 30px;
    }
    p{
        font-size: 17px;
        margin-top:  10px;
        margin-bottom: 10px;
    }
    p.step{
        margin-bottom: 20px;
    }
`

export const FlexContainerIngredient = styled.div`
    display: flex;
    align-items: center;
    p{
        margin-left: 7px
    }
`

export const TipsContainer = styled.div`
    width: 29.73%;
    background-color: #ffffff;
    padding: 10px;
    border: 2px solid #c3c3c3;
    margin-left: 10px;
    box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.35);
    h3{
        font-size: 20px;
        &.margin-top{
            margin-top: 30px;
        }
    }
`
export const FlexContainerTips = styled.div`
    display: flex;
    align-items: center;
    p{
        margin-left: 5px;
        font-size: 17px;
    }
`