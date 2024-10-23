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
        // step 5 take width
        <div className="md:w-2/3">
            <h1 className="text-3xl font-bold">Blogs : {blogs.length}</h1>
        </div>
    );
};

export default Blogs;