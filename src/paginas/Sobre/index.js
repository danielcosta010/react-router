import styles from  './Sobre.module.css'
import PostModelo from "componentes/PostModelo";
import fotoCapa from 'assets/sobre_mim_capa.png'
import fotoSobremim from 'assets/minha_foto-sobremim.png'

function Sobre() {
  return (  
    <main>
      <PostModelo
        fotoCapa={fotoCapa}
        titulo='Sobre mim'
      >
      <h3 className={styles.subtitulo}>
          Olá, sou Daniel Costa
        </h3>
        <img 
        className={styles.fotoSobreMim}
          src={fotoSobremim}
          alt='Foto Daniel Costa'
        />

        <p className={styles.paragrafo}>
          Estou em transição de carreira, focado no estudo das tecnologias de desenvolvimento e programação. Em maio de 2022 iniciei esta jornada de aprendizado, até então não sabia o que era um documento html, as vezes via um arquivo que abria em algum site e parecia muito difícil de compreender, coisa que somente os gênios da área de tecnologia conseguiriam desvendar, ao ter contato com os códigos diariamente o monstro não parecia mais tão assustador, caminhando diariamente e estudando dia após dia fui adiquirindo habilidades e ficando maravilhado de entender como os sites e apps funcionavam por debaixo dos panos. Sabendo que o html era como se fosse a sustentação do site, onde ia todo o conteúdo e bastante familiarizado com as tags &lt;&gt; &lt;/&gt; parti para o css3. Aprendi a dar estilos, formas, cores e algumas animações básicas, percebi que o css3 é uma linguagem de estilo sensacional que nos permite dar bastante vida ao site. Estudei frameworks css como bootstrap e tailwind.
        </p>
        <p className={styles.paragrafo}>
          Ao está bastante satisfeito com a evolução nos estudos das linguagens html5, css3 e frameworks, entrei em minha primeira linguagem de programação o Javascript. As funções, variáveis, classes desta linguagens era um novo desafio. Como o Javascript consegue dar interação com o usuario, click em botões, envios de formulario, dinamismo as páginas eram conceitos que descortinou um novo mundo da programação, aprofundei em lógica de programação através do desenvolvimento de alguns jogos simples com Javascript e fazendo bastante exercícios para ser fluente em JS.
        </p>
        
        <p className={styles.paragrafo}>
         O react foi o meu primeiro frameworks js no qual desenvolvi esta SPA no curso da Alura que utiliza a biblioteca react-router-Dom. Como funcionam os componentes, links e rotas da páginas que dão uma experiência ao usuáio como se estivesse dentro de um app desktop, são conteúdos deste curso. Tenho um caminho longo e desafiador pela frente, mas percebi que persitência e resiliência caminham lado a lado com esta jornada.
        </p>

        
      </PostModelo>
    </main>
  );
}

export default Sobre;