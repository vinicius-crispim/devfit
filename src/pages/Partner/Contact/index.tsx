import Title from '../../../components/Title'
import * as S from './style'

const Contact = () => {
    return (
        <S.ContactSection>
            <Title>Entre em Contato!</Title>
            <p>Complete o formulário que nós olharemos e faremos uma avaliação.</p>
            <S.ContactForm>
                <S.ContactFormQuestions>
                    <div>
                        <S.ContactFormLabel htmlFor="name">Nome</S.ContactFormLabel>
                        <S.ContactFormInput type='text' id='name' name='name' placeholder='Nome' required />
                        <S.ContactFormLabel htmlFor="email">E-mail</S.ContactFormLabel>
                        <S.ContactFormInput type='email' id='email' name='email' placeholder='contato@gmail.com' required />
                        <S.ContactFormLabel htmlFor="cidade">Cidade</S.ContactFormLabel>
                        <S.ContactFormInput type='cidade' id='cidade' name='cidade' placeholder='Sua cidade' required />
                    </div>
                    <div>
                        <S.ContactFormLabel htmlFor="renda">Renda mensal</S.ContactFormLabel>
                        <S.ContactFormInput type='renda' id='renda' name='renda' placeholder='Ex: R$5.000,00' required />
                        <S.ContactFormLabel htmlFor="message">Mensagem</S.ContactFormLabel>
                        <S.ContactFormTextArea id='message' name='message' placeholder='Uma mensagem que você deseja nós enviar' rows={4} cols={50}></S.ContactFormTextArea>
                    </div>
                </S.ContactFormQuestions>
                <S.ContactFormButton type="submit">Enviar</S.ContactFormButton>
            </S.ContactForm>
        </S.ContactSection>
    )
}

export default Contact;