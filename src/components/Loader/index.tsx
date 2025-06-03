import { PacmanLoader } from "react-spinners"
import { colors } from "../../style"
import { Container } from "./style"

const Loader = () => {
    return (
        <Container>
            <PacmanLoader color={colors.white} />
        </Container>
    )
}
export default Loader