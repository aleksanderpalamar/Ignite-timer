import { Box, FormContactContainer, FormControl } from "./styles";
import * as yup from "yup";

export function Contato() {  
  return (
    <>
    <h1>Contato</h1>
    <FormContactContainer>
      <Box id="Contato">
        <form action="">
          <FormControl id="name">
            <label htmlFor="">Nome</label>
            <input type="text" placeholder="Nome Completo" />
          </FormControl>
          <FormControl id="email">
            <label htmlFor="">E-mail</label>
            <input type="email" placeholder="E-mail" />
          </FormControl>
          <FormControl id="phone">
            <label htmlFor="">Telefone</label>
            <input type="text" placeholder="Telefone" />
          </FormControl>
          <FormControl id="assunto">
            <label htmlFor="">Assunto</label>
            <input type="text" placeholder="Assunto" />
          </FormControl>
          <FormControl id="message">
            <label htmlFor="">Mensagem</label>
            <textarea placeholder="Mensagem" />
          </FormControl>
          <FormControl id="name">
            <button type="submit" onClick={() => {}}>
              Enviar
            </button>
          </FormControl>
        </form>
      </Box>
    </FormContactContainer>
  </>
  )
}
