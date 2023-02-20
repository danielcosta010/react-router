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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consequatur aperiam ut eaque magnam, consectetur illum quasi temporibus vitae nemo error unde, possimus non! Ut esse accusamus maiores labore corporis officia voluptatem at recusandae! Hic, sequi illo nesciunt quis dolorum explicabo molestias, odit porro debitis exercitationem officiis deserunt tempore soluta libero omnis nemo quod illum beatae nam recusandae voluptatum cum placeat! Saepe, ad nobis ipsum nostrum incidunt laborum molestias, dicta voluptates reprehenderit aliquam ullam iure tenetur sequi laboriosam tempore a dolor sapiente ex! Minus itaque ullam ducimus quas architecto excepturi explicabo id voluptatem porro ea, optio accusantium corrupti neque nulla reiciendis accusamus ad nemo et omnis, dolor distinctio tenetur obcaecati doloribus. Sunt ipsum odit unde beatae doloremque cum delectus aspernatur.
        </p>
        <p className={styles.paragrafo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consequatur aperiam ut eaque magnam, consectetur illum quasi temporibus vitae nemo error unde, possimus non! Ut esse accusamus maiores labore corporis officia voluptatem at recusandae! Hic, sequi illo nesciunt quis dolorum explicabo molestias, odit porro debitis exercitationem officiis deserunt tempore soluta libero omnis nemo quod illum beatae nam recusandae voluptatum cum placeat! Saepe, ad nobis ipsum nostrum incidunt laborum molestias, dicta voluptates reprehenderit aliquam ullam iure tenetur sequi laboriosam tempore a dolor sapiente ex! Minus itaque ullam ducimus quas architecto excepturi explicabo id voluptatem porro ea, optio accusantium corrupti neque nulla reiciendis accusamus ad nemo et omnis, dolor distinctio tenetur obcaecati doloribus. Sunt ipsum odit unde beatae doloremque cum delectus aspernatur.
        </p>
        
        <p className={styles.paragrafo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consequatur aperiam ut eaque magnam, consectetur illum quasi temporibus vitae nemo error unde, possimus non! Ut esse accusamus maiores labore corporis officia voluptatem at recusandae! Hic, sequi illo nesciunt quis dolorum explicabo molestias, odit porro debitis exercitationem officiis deserunt tempore soluta libero omnis nemo quod illum beatae nam recusandae voluptatum cum placeat! Saepe, ad nobis ipsum nostrum incidunt laborum molestias, dicta voluptates reprehenderit aliquam ullam iure tenetur sequi laboriosam tempore a dolor sapiente ex! Minus itaque ullam ducimus quas architecto excepturi explicabo id voluptatem porro ea, optio accusantium corrupti neque nulla reiciendis accusamus ad nemo et omnis, dolor distinctio tenetur obcaecati doloribus. Sunt ipsum odit unde beatae doloremque cum delectus aspernatur.
        </p>

        
      </PostModelo>
    </main>
  );
}

export default Sobre;