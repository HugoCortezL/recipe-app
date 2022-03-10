import {Container} from './styles'

export default function PreparationItem({step}) {
    return (
        <Container>
            <label className="container">
                <input type="checkbox"/>
                <span className="label">{step.description}</span>
                <span className="checkmark"></span>
            </label>
        </Container>
    )
}
