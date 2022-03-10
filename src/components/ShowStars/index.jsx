import {Container, GoldStars, GrayStars} from './styles'
import { AiFillStar } from 'react-icons/ai'

export default function ShowStars({length}) {
    var startRate = String(length * 25) + 'px'
    return (
        <Container>
            <GrayStars>
                <AiFillStar color={'#E2E2E2'} size={25}/>
                <AiFillStar color={'#E2E2E2'} size={25}/>
                <AiFillStar color={'#E2E2E2'} size={25}/>
                <AiFillStar color={'#E2E2E2'} size={25}/>
                <AiFillStar color={'#E2E2E2'} size={25}/>
            </GrayStars>
            <GoldStars length={startRate}>
                <AiFillStar color={'#FFD700'} size={25}/>
                <AiFillStar color={'#FFD700'} size={25}/>
                <AiFillStar color={'#FFD700'} size={25}/>
                <AiFillStar color={'#FFD700'} size={25}/>
                <AiFillStar color={'#FFD700'} size={25}/>
            </GoldStars>
        </Container>
    )
}
