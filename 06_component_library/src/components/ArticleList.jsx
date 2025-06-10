import Article from './Article';

const articles = [
  { id: 1, title: 'React — библиотека будущего', content: 'JSX, компоненты и virtual DOM делают React мощным инструментом.' },
  { id: 2, title: 'Почему Vite лучше CRA', content: 'Vite обеспечивает быструю сборку, горячую перезагрузку и современный стек.' },
  { id: 3, title: 'Props: магия повторного использования', content: 'С помощью props можно создавать универсальные компоненты.' },
  { id: 4, title: 'JSX: HTML внутри JavaScript', content: 'JSX позволяет писать HTML-подобный код прямо в JS-функциях.' }
];

export default function ArticleList() {
  return (
    <div>
      {articles.map((article) => (
        <Article key={article.id} title={article.title} content={article.content} />
      ))}
    </div>
  );
}