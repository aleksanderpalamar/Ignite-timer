import { FooterContainer } from "./styles";

export function Footer() {
  return (
    <FooterContainer>
      <span>
        Desenvolvido com{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>{" "}
        por{" "}
        <a href="https://www.palamarsolutionit.com.br/">Aleksander Palamar</a>
      </span>
    </FooterContainer>
  );
}
