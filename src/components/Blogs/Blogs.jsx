import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'

// step 9 add here to get the data handleAddToBookmark app theke ekhane anlam then blog e pathabo. step 20 receive it
const Blogs = ({handleAddToBookmark, handleMarkAsRead}) => {
    // step 1 load data from state 
    const [blogs, setBlogs] = useState([]);
    
    // step 2 loading data
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])



    return (
        // step 5 take width
        <div className="md:w-2/3">
            <h1 className="text-3xl font-bold">Blogs : {blogs.length}</h1>
            {
                blogs.map(blog => 
                <Blog key={blog.id} 
                blog ={blog}
                handleAddToBookmark={handleAddToBookmark}
                handleMarkAsRead={handleMarkAsRead}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark : PropTypes.func,
    handleMarkAsRead : PropTypes.func
}

export default Blogs;