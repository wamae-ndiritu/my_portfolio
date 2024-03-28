const ArticleCard = ({article}) => {
  const { title, description, link, pubDate } = article;

  return (
    <div className='article-card'>
      <h3 className='article-title'>{title}</h3>
      <p className='article-description'>{description}</p>
      <p className='article-pub-date'>Published on: {pubDate}</p>
      <a
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        className='read-more-btn'
      >
        Read Full Story
      </a>
    </div>
  );
};

export default ArticleCard;
