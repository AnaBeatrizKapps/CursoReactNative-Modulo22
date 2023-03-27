import {Post} from './components/Post';
import {Header} from './components/Header';

import './global.css';

import styles from './App.module.css';

import { Sidebar } from './components/Sidebar';

//JSX = JavaScript + XML

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      name: 'Ana Beatriz Kapps',
      role: 'CTO @ Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Olá Devs,'},
      {type: 'paragraph', content: 'Hoje a aula foi de componentização.'},
      {type: 'paragraph', content: 'Muito importante para quem está aprendendo React assim como eu.'},
      {type: 'paragraph', content: 'Espero que curtam.'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      name: 'Micael Oliveira',
      role: 'Educator @Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Olá Devs,'},
      {type: 'paragraph', content: 'Hoje a aula foi de componentização.'},
      {type: 'paragraph', content: 'Muito importante para quem está aprendendo React assim como eu.'},
      {type: 'paragraph', content: 'Espero que curtam.'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-08-01 14:45:02'),
  },
];

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}