import { Header } from './components/Header.js';
import { Post } from './components/Post.js';
import { Sidebar } from './components/Sidebar.js';
import styles from './App.module.css';
import './global.css';

// author: {avatarUrl, name:"" , role:""}
// publishedAt: Date
// content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/72351181?v=4',
      name: 'Etizel Azevedo',
      role: 'Developer Full Stack',
    },
    content: [
      { type: 'paragraph', content: 'Falaaa Galera!' },
      {
        type: 'paragraph',
        content:
          'Intusiastas da música e tech lovers, É com grande satisfação que anuncio a adição mais recente ao meu portfólio de desenvolvimento: uma experiência musical imersiva inspirada na interface do Spotify.',
      },
      { type: 'link', content: '👉 etizel.com', href: 'etizel.com' },
    ],
    publishedAt: new Date('2025-04-07 20:08:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://xsgames.co/randomusers/assets/avatars/male/21.jpg',
      name: 'Franklin Nunes',
      role: 'CTO RocketUniversal',
    },
    content: [
      { type: 'paragraph', content: 'Eaaai Pessoal!' },
      {
        type: 'paragraph',
        content:
          '🎬 Cinéfilos e entusiastas do design, é com grande entusiasmo que compartilho a mais recente adição ao meu portfólio de desenvolvimento: uma experiência cinematográfica imersiva inspirada na interface da Netflix.',
      },
      { type: 'link', content: '👉 etizel.com', href: 'etizel.com' },
    ],
    publishedAt: new Date('2025-04-07 20:08:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
