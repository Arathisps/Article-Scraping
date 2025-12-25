import { useEffect, useState } from 'react';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/articles')
      .then(res => res.json())
      .then(data => setArticles(data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Articles</h2>
      {articles.map(article => (
        <div key={article.id} style={{ marginBottom: 20 }}>
          <h4>{article.title}</h4>
          <small>{article.is_generated ? 'AI Generated' : 'Original'}</small>
          <p>{article.content?.slice(0, 150)}...</p>
        </div>
      ))}
    </div>
  );
}

export default App;
