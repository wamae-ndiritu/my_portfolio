const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-4'>
      <div className='container mx-auto text-center'>
        <p className='text-sm'>
          Designed with <span className='text-red-500'>❤️</span> by{" "}
          <a
            href='https://github.com/wamae-ndiritu'
            target='_blank'
            rel='noopener noreferrer'
            className='text-primary font-semibold hover:underline'
          >
            Wamae Ndiritu
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
