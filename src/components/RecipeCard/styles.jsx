import styled from 'styled-components'

export const Container = styled.div`
    max-width: 200px;
    height: 200px;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    cursor: pointer;
    margin-top: 20px;
    img{
        width: 200px;
        height: 200px;
    }
`

export const Content = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`

export const Info = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 45%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(143, 143, 143, 0.56) 100%);;
    color: #FFE9D6;
    padding: 5px;
    h4{
        font-size: 15px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    p{
        font-size: 13px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

export const FavoriteContainer = styled.div`
    background: rgba(255, 255, 255, 0.8);
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 11px;
    right: 11px;
    AiFillHeart{
        color: #fff;
    }
`

export const RateContainer = styled.div`
    width: max-content;
    height: 16px;
    padding: 10px 7px; 
    background: rgba(255, 255, 255, 0.8);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    position: absolute;
    right: 5px;
    bottom: calc(45% + 5px)
`