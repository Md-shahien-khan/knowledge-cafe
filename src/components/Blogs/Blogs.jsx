import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    // step 1 load data from state 
    const [blogs, setBlogs] = useState([]);
    
    // step 2 loading data
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])



    return (
        <div>
            
        </div>
    );
};

export default Blogs;