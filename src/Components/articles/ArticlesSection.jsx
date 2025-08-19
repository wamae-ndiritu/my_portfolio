import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ArticlesSection = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@wamae-ndiritu"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.status === 'ok') {
          setArticles(data.items);
        } else {
          console.error('Error fetching articles');
        }
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
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
    <div className='container mx-auto py-12' id='blogs'>
      <div className='text-center mb-16'>
        <motion.h3
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
          My <span className='text-blue-600'>Blogs</span>
        </motion.h3>
        <div className='w-24 h-1 bg-gradient-to-r from-blue-600 to-red-500 mx-auto'></div>
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
              className='bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105'>
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
                  className='text-primary hover:underline mt-4 block'>
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
          className='bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:bg-primary-dark transition'>
          View More on Medium
        </a>
      </div>
    </div>
  );
};

export default ArticlesSection;
