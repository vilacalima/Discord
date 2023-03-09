import './Suporte.scss';
import '../../common/fonts/fonts.scss';

import Card from '../../common/card/Card.js';
import HeaderSuporte from '../../common/header/HeaderSuporte.js';
import MenuSuporte from '../../common/menu/MenuSuporte.js';

/* Importando imagens */
import megafone from '../../assets/images/suporte/megafone.svg';
import page from '../../assets/images/suporte/page.svg';
import motor from '../../assets/images/suporte/motor.svg';
import comentario from '../../assets/images/suporte/comentario.svg';
import mesa from '../../assets/images/suporte/mesa.svg';
import losango from '../../assets/images/suporte/losango.svg';
import loja from '../../assets/images/suporte/loja.svg';
import papel from '../../assets/images/suporte/papel.svg';
import escudo from '../../assets/images/suporte/escudo.svg';
import lupa from '../../assets/images/suporte/lupa.svg';
import mensagem from '../../assets/images/suporte/mensagem.svg';
import celular from '../../assets/images/suporte/celular.svg';

export default function Suporte() { 
    return (

    <div className="grid">
      
      <header>
        <MenuSuporte />
        <HeaderSuporte titulo="Central de Ajuda"/>
      </header>

      <div className="grid-column-1">
        <h1>Precisa de ajuda? Conte com a gente.</h1>
        <p>De configurações de conta a permissões, encontre ajuda sobre tudo para o Discord <br />
            Se você é novo no Discord e está precisando de umas dicas, dê uma olhada no nosso Guia do Iniciante!</p>
      </div>
      <div className="grid-column-5">
        <Card imagem = {megafone} titulo="Anúncios" conteudo="Estamos de olho no que está acontecendo. Aqui está o que nós sabemos que não está certo." />
        <Card imagem = {page} titulo="Interface do Discord" conteudo="PRA QUE SERVE ESSE BOTÃO!?!!" />
        <Card imagem = {motor} titulo="Configurações da Conta" conteudo="Você é importante e sua conta também." />
        <Card imagem = {comentario} titulo="Começando" conteudo="Comece com o pé direito! Não com o esquerdo!" />
        <Card imagem = {mesa} titulo="Configurações de Servidor" conteudo="Quase tão emocionante quanto decoração de interiores." />
        <Card imagem = {losango} titulo="Programas Comunitários" conteudo="Hype para HypeSquaders, party para Parceiros" />
        <Card imagem = {loja} titulo="Nitro" conteudo="Por favor, não compre até cair. Deixe a gente te ajudar." />
        <Card imagem = {papel} titulo="Formas de Pagamento" conteudo="Aquela sensação quando você olha o seu saldo." />
        <Card imagem = {escudo} titulo="Confiança & Segurança" conteudo="Mantenha as coisas sãs e salvas para você e seus amigos." />
        <Card imagem = {lupa} titulo="F.A.Q.s" conteudo="Tudo o que você puder fazer num auto-atendimento." />
      </div>

      <h2>Outras formas de conseguir ajuda!</h2>
      
      <div className="grid-column-2">
    
        <Card imagem = {mensagem} titulo="Desenvolvedores de Jogos" conteudo="Sua casa para suporte com o desenvolvimento de bots, aplicativos e jogos usando nossa API e SDK!" />
        <Card imagem = {celular} titulo="Twitter" conteudo="Alguma perguntinha rápida? Chame a gente no Twitter" />
      </div>

      <footer>
        
      </footer>
    </div>

    );
}