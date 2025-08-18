const ArticleCard = ({article}) => {
  const { title, overview, imageUrl, link, pubDate } = article;

  return (
    <div className='article-card shadow-sm p-2 rounded'>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <img src={imageUrl} alt={title} className='img-fluid' />
      </a>
      <h3
        className='article-title'
        dangerouslySetInnerHTML={{ __html: title }}
      ></h3>
      <p className='article-description'>{overview}</p>
      <a
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        className='read-more'
      >
        Read More...
      </a>
    </div>
  );
};

export default ArticleCard;
