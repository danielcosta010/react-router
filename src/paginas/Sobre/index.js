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
          Estou em transição de carreira, focado no estudo das tecnologias de desenvolvimento e programação. Em maio de 2022 iniciei esta jornada, até então não sabia o que era um documento html, as vezes via um arquivo que abria em algum site e parecia muito difícil de compreender, coisa que somente os gênios da área de tecnologia conseguiriam desvendar, ao ter contato com os códigos diariamente o monstro não parecia mais tão assustador, caminhando diariamente e estudando dia após dia fui adiquirindo habilidades e ficando maravilhado de entender como os sites e apps funcionavam por debaixo dos panos. Sabendo que o html era como se fosse a sustentação do site, onde ia todo o conteúdo e bastante familiarizado com as tags &lt;&gt; &lt;/&gt; parti para o css3. Aprendendo a dar estilos, formas, cores e algumas animções básicas percebi que o css3 é uma linguagem de estilo sensacional que nos permite dar bastante vida ao site.
        </p>
        <p className={styles.paragrafo}>
          Ao está bastante satisfeito com a evolução nos estudos das linguagens html5 e css3, entrei em minha primeira linguagem de programação o Javascript. As funções e variáve
        </p>
        
        <p className={styles.paragrafo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consequatur aperiam ut eaque magnam, consectetur illum quasi temporibus vitae nemo error unde, possimus non! Ut esse accusamus maiores labore corporis officia voluptatem at recusandae! Hic, sequi illo nesciunt quis dolorum explicabo molestias, odit porro debitis exercitationem officiis deserunt tempore soluta libero omnis nemo quod illum beatae nam recusandae voluptatum cum placeat! Saepe, ad nobis ipsum nostrum incidunt laborum molestias, dicta voluptates reprehenderit aliquam ullam iure tenetur sequi laboriosam tempore a dolor sapiente ex! Minus itaque ullam ducimus quas architecto excepturi explicabo id voluptatem porro ea, optio accusantium corrupti neque nulla reiciendis accusamus ad nemo et omnis, dolor distinctio tenetur obcaecati doloribus. Sunt ipsum odit unde beatae doloremque cum delectus aspernatur.
        </p>

        
      </PostModelo>
    </main>
  );
}

export default Sobre;