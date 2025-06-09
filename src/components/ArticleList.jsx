import Article from './Article';

function ArticleList() {
  const articles = [
    {
      title: 'React — библиотека будущего',
      text: 'JSX, компоненты и virtual DOM делают React мощным инструментом.'
    },
    {
      title: 'Почему Vite лучше CRA',
      text: 'Vite обеспечивает быструю сборку, горячую перезагрузку и современный стек.'
    },
    {
      title: 'Props: магия повторного использования',
      text: 'С помощью props можно создавать универсальные компоненты.'
    },
    {
      title: 'JSX: HTML внутри JavaScript',
      text: 'JSX позволяет писать HTML-подобный код прямо в JS-функциях.'
    }
  ];

  return (
    <main>
      {articles.map((article, index) => (
        <Article
          key={index}
          title={article.title}
          text={article.text}
        />
      ))}
    </main>
  );
}

export default ArticleList;
