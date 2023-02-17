import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png'

function Banner() {
  return (  
    <div className={styles.banner}>
      <div>
        <h1 className={styles.titulo}>
          Olá, Mundo!
        </h1>
        <p>Bem vindo, sou Daniel Costa estudante na Alura, apaixonado pelo processo de aprendizagem nas tecnologias de desenvovimento e programação. desenvolvendo esta SPA (Single Page Aplication) em react, utilizando a biblioteca router-Dom.</p>
      </div>

      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
          alt='Circulo colorido'
        />
        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt='foto perfil Daniel Costa'
        />

      </div>

    </div>
  );
}

export default Banner;