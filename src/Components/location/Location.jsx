import { motion } from "framer-motion";

const Location = () => {
  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const mapVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <div className='py-12 bg-gray-100' id='contacts'>
      <div className='container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {/* Form Section */}
        <motion.div
          className='bg-white shadow-md rounded-lg p-6'
          variants={formVariants}
          initial='hidden'
          animate='visible'
        >
          <h5 className='text-xl font-bold text-primary mb-4'>For Inquiries</h5>
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-700'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              placeholder='John Doe'
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              placeholder='johndoe@gmail.com'
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='message'
              className='block text-sm font-medium text-gray-700'
            >
              Your Message
            </label>
            <textarea
              id='message'
              placeholder='Type your message here...'
              rows='5'
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary'
            ></textarea>
          </div>
          <button className='w-full py-2 px-4 bg-primary text-white rounded-lg shadow-md hover:bg-primary-dark focus:ring-2 focus:ring-primary focus:outline-none'>
            Send Message
          </button>
        </motion.div>

        {/* Map Section */}
        <motion.div
          className='rounded-lg overflow-hidden shadow-md'
          variants={mapVariants}
          initial='hidden'
          animate='visible'
        >
          <iframe
            title='my-location'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7892149394097!2d36.75927681573665!3d-1.3013686333959997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1b3cc1982859%3A0x88993b1e5d46cc20!2sKenya%20Science%20Campus%2C%20University%20of%20Nairobi!5e0!3m2!1sen!2ske!4v1680884613720!5m2!1sen!2ske'
            width='100%'
            height='450'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Location;
