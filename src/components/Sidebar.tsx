import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar.js';
import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Imagem de capa"
      />

      <div className={styles.profile}>
        <Avatar
          hasBorder={true}
          src="https://avatars.githubusercontent.com/u/72351181?v=4"
        />
        <strong>Etizel Azevedo</strong>
        <span>Full Stack Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu Perfil
        </a>
      </footer>
    </aside>
  );
}
