import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
const ArticlesSection = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@wamae-ndiritu"
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.items));
  }, []);

  console.log(articles);

  return (
    <div className='project-section container' id='projects'>
      <div className='title my-3'>
        <h3 className='h3'>Projects</h3>
        <div className='hr'></div>
      </div>
      <div className='row'>
        {articles.map((article, index) => (
          <div
            key={index}
            className='col-lg-4 col-md-6 padding-medium'
          >
            <ArticleCard article={article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesSection;
