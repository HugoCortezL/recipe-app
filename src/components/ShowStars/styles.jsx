import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    width: 130px;
`
export const GoldStars = styled.div`
    width: ${props => props.length };
    overflow: hidden;
    white-space: nowrap;
    z-index: 1000;
    position: absolute;
`
export const GrayStars = styled.div`
    position: absolute;
    top: 0;
    z-index: 1;
`