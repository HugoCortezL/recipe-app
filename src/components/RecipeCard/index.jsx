import {Container, Info, FavoriteContainer, RateContainer, Content} from './styles'
import { AiFillHeart, AiFillStar} from 'react-icons/ai'

export default function RecipeCard({recipe}) {
    return (
        <Container>
            <img src={recipe.image} alt="" />
            <Content>
                <FavoriteContainer>
                    <AiFillHeart color={'#FFFFFFE0'} size={20}/>
                </FavoriteContainer>
                <RateContainer>
                    <p>{recipe.rate}</p>
                    <AiFillStar color={'#FFD700'} size={17}/>
                </RateContainer>
                <Info>
                    <h4>{recipe.name}</h4>
                    <p>Tempo de preparo: {recipe.time}</p>
                    <p>Tipo: {recipe.type}</p>
                    <p>Serve: {recipe.serves}</p>
                </Info>
            </Content>
        </Container>
    )
}
