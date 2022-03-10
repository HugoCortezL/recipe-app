import {Container, PresentationContainer, PrepareContainer,ImageContainer, FlexContainerTips,MainContainer, TipsContainer, MetaDataContainer} from './styles'
import Header from '../../components/Header'
import IngredientItem from '../../components/IngredientItem'
import PreparationItem from '../../components/PreparationItem'
import ShowStars from '../../components/ShowStars'
import { useParams } from "react-router-dom";
import {getRecipeView} from '../../services/getRecipeView'
import { AiOutlineCaretRight } from 'react-icons/ai'

export default function RecipeInfo() {
    let params = useParams()
    params.recipeName = params.recipeName.replaceAll('-', ' ')

    var recipe = getRecipeView(params.recipeName)

    return (
        <Container>
            <Header/>
            <PresentationContainer>
                <h1>{recipe.name}</h1>
                <MetaDataContainer>
                    <ShowStars length={recipe.rate}/>
                    <p>Tempo de preparo: <span> {recipe.time} </span></p>
                    <p>Tipo: <span>{recipe.type}</span> </p>
                    <p>Serve: <span>{recipe.serves}</span> </p>
                </MetaDataContainer>
            </PresentationContainer>
            <ImageContainer>
                <img src={recipe.image} alt="" />
            </ImageContainer>
            <MainContainer>
                <PrepareContainer>
                    <h3>Ingerdientes:</h3>
                    {recipe.ingredients.map((ingredient) => (
                        <IngredientItem key={ingredient.id} ingredient={ingredient}/>
                        ))}

                    <h3 className="stepHeader">Preparo:</h3>
                    {recipe.preparation.map((step) => (
                        <PreparationItem key={step.id} step={step}/>
                    ))}
                </PrepareContainer>
                
                <TipsContainer>
                    <h3>Combina com:</h3>
                    {recipe.goodWith.map((recipe) => (
                        <FlexContainerTips  key={recipe.id}>
                            <AiOutlineCaretRight/>
                            <p className="recipe">{recipe.recipe}</p>
                        </FlexContainerTips>
                    ))}

                    <h3 className="margin-top">Quando fazer:</h3>
                    {recipe.goodWere.map((local) => (
                        <FlexContainerTips  key={local.id}>
                            <AiOutlineCaretRight/>
                            <p className="local">{local.local}</p>
                        </FlexContainerTips>
                    ))}

                    <h3 className="margin-top">O que beber:</h3>
                    {recipe.drinksWith.map((drink) => (
                        <FlexContainerTips  key={drink.id}>
                            <AiOutlineCaretRight/>
                            <p className="drink">{drink.drink}</p>
                        </FlexContainerTips>
                    ))}
                </TipsContainer>
            </MainContainer>
        </Container>
    )
}
