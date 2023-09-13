import PropTypes from 'prop-types';
import { FaBeer,FaBookmark } from 'react-icons/fa';
const Blog = ({blog, handleAddBookmark,handleMarkAsRead}) => {
      const {id,title,cover,author_img,author,posted_date,hashtags,reading_time}=blog;
      return (
            <div className='mb-20'>
                  <img className=' mb-8' src={cover} alt={`Cover picture of title ${title}`} />
                  <div className='flex justify-between mb-4 '>
                  <div className='flex mt-4'>
                        <img className='w-14' src={author_img} alt="" />
                        <div className='ml-6 '>
                              <h3 className='text-2xl mt-4'>{author}</h3>
                              <p>{posted_date}</p>
                        </div>
                  </div>
                  <div>
                        <span>{reading_time} min read </span>
                        <button onClick={() =>handleAddBookmark(blog)} className='ml-2 text-2xl text-red-500'><FaBookmark></FaBookmark></button>
                  </div>
                  </div>
                  <h2 className='text-4xl'>{title}</h2>
                  <p>
                        {
                              hashtags.map((hash,idx )=> <span key={idx}><a>#{hash}</a></span>)
                        }
                  </p>
                  <button onClick={()=>handleMarkAsRead(id,reading_time)} className='text-purple-600 font-bold underline'>Mark as Red</button>
            </div>
      );
};
Blog.propTypes = {
      blog: PropTypes.object.isRequired,
      handleAddBookmark: PropTypes.func,
      handleMarkAsRead: PropTypes.func
}
export default Blog;