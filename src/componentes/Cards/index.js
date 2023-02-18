import { Link } from 'react-router-dom';
import styles from './Cards.module.css';

function Cards({ post }) {
  return ( 
    <Link to={`/post/${post.id}`} >
      <div className={styles.post}>
        <img 
          className={styles.capa}
          src={`assets/posts/${post.id}/capa.png`}
          alt='Imagem de capa do post'
        />

        <h2 className={styles.titulo}>{post.titulo}</h2>
        <button className={styles.botaoLer}>Ler</button>
      </div>
    
    </Link> 
  );
}

export default Cards;