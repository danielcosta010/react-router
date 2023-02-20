import Cards from "componentes/Cards";
import styles from './Inicio.module.css'

import posts from 'json/posts.json'

function Inicio() {
  return (  
    <main>
      
      <ul className={styles.posts}>
        {posts.map(post => (
          <li key={post.id}>
            <Cards post={post}/>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Inicio;