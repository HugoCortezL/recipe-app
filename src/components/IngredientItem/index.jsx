import {Container} from './styles'

export default function IngredientItem({ingredient}) {
    return (
        <Container>
            <label className="container" htmlFor={ingredient.id}>
                <input type="checkbox" id={ingredient.id}/>
                <span className="label"> {ingredient.quantity} {ingredient.name} </span>
                <span className="checkmark"></span>
            </label>
        </Container>
    )
}
