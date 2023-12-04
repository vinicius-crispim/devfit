import Title from '../../components/Title';
import * as S from './style'
const Load = () => {
    return (
        <S.LoadContainer>
            <Title>Carregando...</Title>
            <S.Load></S.Load>
        </S.LoadContainer>
    )
}

export default Load;