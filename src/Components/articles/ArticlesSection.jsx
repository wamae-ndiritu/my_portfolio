import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import "./Articles.css"
const ArticlesSection = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@wamae-ndiritu"
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.items));
  }, []);

  function extractInfo(article) {
    const htmlContent = article.description;
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");

    // Extract image URL
    const imageElement = doc.querySelector("img");
    const imageUrl = imageElement ? imageElement.getAttribute("src") : null;

    // Extract article overview
    const overviewElement = doc.querySelector(".postArticle-content");
    const overview = overviewElement
      ? overviewElement.textContent.trim()
      : null;

    return { imageUrl, overview };
  }

  return (
    <div className='project-section container' id='projects'>
      <div className='title my-3'>
        <h3 className='h3'>Blogs</h3>
        <div className='hr'></div>
      </div>
      <p>
        As part of sharing my knowledge, I write techinal articles that explain
        various concepts across the tech world. It is through sharing. that one
        can demonstrate that they truly understand it. “If you can&lsquo;t
        explain something in simple terms, you don&lsquo;t understand it.”
        Richard Feynman
      </p>
      <div className='row'>
        {articles.slice(0, 7).map((article, index) => {
          const { imageUrl, overview } = extractInfo(article);
          return (
            <div key={index} className='col-lg-3 col-md-6 padding-medium'>
              <ArticleCard article={{ ...article, imageUrl, overview }} />
            </div>
          );
        })}
        <a
          href='https://wamae-ndiritu.medium.com/'
          target='_blank'
          rel='noopener noreferrer'
          className="view-more-medium"
        >
          View More in Medium...
        </a>
      </div>
    </div>
  );
};

export default ArticlesSection;
