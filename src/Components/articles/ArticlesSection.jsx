import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

    const imageElement = doc.querySelector("img");
    const imageUrl = imageElement ? imageElement.getAttribute("src") : null;

    const overview = doc.body.textContent?.trim().slice(0, 120) || "";

    return { imageUrl, overview };
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.6,
      },
    }),
  };

  return (
    <div className='container mx-auto py-12' id='articles'>
      <div className='text-center mb-8'>
        <h3 className='text-3xl font-bold text-primary'>Blogs</h3>
        <div className='w-16 h-1 bg-primary mx-auto mt-2'></div>
      </div>
      <p className='text-center text-gray-600 mb-12 px-4'>
        As part of sharing my knowledge, I write technical articles explaining
        various concepts across the tech world. It is through sharing that one
        can demonstrate they truly understand something.
        <em className='block mt-2'>
          “If you can’t explain something in simple terms, you don’t understand
          it.” - Richard Feynman
        </em>
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4'>
        {articles?.slice(0, 7).map((article, index) => {
          const { imageUrl, overview } = extractInfo(article);
          return (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial='hidden'
              animate='visible'
              className='bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105'
            >
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={article.title}
                  className='w-full h-40 object-cover'
                />
              )}
              <div className='p-4'>
                <h4 className='text-lg font-semibold text-gray-800'>
                  {article.title}
                </h4>
                <p className='text-gray-600 mt-2'>{overview}...</p>
                <a
                  href={article.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline mt-4 block'
                >
                  Read More
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className='text-center mt-12'>
        <a
          href='https://wamae-ndiritu.medium.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:bg-primary-dark transition'
        >
          View More on Medium
        </a>
      </div>
    </div>
  );
};

export default ArticlesSection;
