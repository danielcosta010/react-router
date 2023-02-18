import styles from  './Rodape.module.css';
import { ReactComponent as MarcaRegistrada } from 'assets/marca_registrada.svg';

function Rodape() {
  return (  
    <div className={styles.rodape}>
      <MarcaRegistrada />
      <p>Desenvolvido por Alura</p>
    </div>
  );
}

export default Rodape;