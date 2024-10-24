import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
// step 10 receive here handleAddToBookmark={handleAddToBookmark}
const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {title, cover_image, author_img, reading_time, author, posted_date, hashtags} = blog;
    return (
        <div className='mb-20 space-y-5'>
            <img className='w-full' src={cover_image} alt="" />
            <div className='flex justify-between items-center mb-4'>
                <div className='flex mt-4'>
                    <img className='w-1/12 rounded-full' src={author_img} alt="" />
                    <div className='ml-3'>
                        <h3 className='font-bold'>{author}</h3>
                        <p className='text-xs'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex'>
                    <p className='text-xs'>{reading_time} Min Read</p>
                    {/* step 11 send blog in the onclick and add arrow function */}
                    <button onClick={()=>handleAddToBookmark(blog)} className='ml-2 text-red-600 text-xl'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map(hash => <span><a href="">{hash}</a></span>)
                }
            </p>
            {/* step 20 */}
            <button className='text-purple-500 underline' onClick={()=>handleMarkAsRead(reading_time)}>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog : PropTypes.object.isRequired,
    handleAddToBookmark : PropTypes.func,
    handleMarkAsRead : PropTypes.func
}

export default Blog;