import styles from './NaoEncontrada.module.css';
import cachorro from 'assets/erro_404.png'
import BotaoPrincipal from 'componentes/BotaoPrincipal';
function NaoEncontrada() {
  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>

        <h1 className={styles.titulo}>Ops! Páginanão encontrada</h1>

        <p className={styles.paragrafo}>
          Tem certeza de que era isso que você estava procurando?
        </p>
        <p className={styles.paragrafo}>
          Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
        </p>
        <div className={styles.botaoContainer}>
          <BotaoPrincipal tamanho='lg'>Voltar</BotaoPrincipal>
        </div>
        <img
          className={styles.imagemCachorro}
          src={cachorro}
          alt='Imagem de cachorro usando óculos com roupa'
        />
      </div>
      <div className={styles.espacoEmBranco}></div>
    </>


  );
}

export default NaoEncontrada;