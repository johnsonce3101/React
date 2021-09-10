import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const {data: blogs, isPending,  error} = useFetch('http://localhost8000/blogs');
    console.log(blogs);
    
        
    //     [
    //    { title: "My New Website", body: "lorem ipsum...", author: "CJ", id: 1},
    //    { title: "Welcome to The Suck", body: "lorem ipsum...", author: "Amn Johnson", id: 2},
    //    { title: "Web Dev Top Tips", body: "lorem ipsum...", author: "Christopher", id: 3}
    // ]
       
       
    // const [name, setName] = useState("CJ");

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }


    // },[name]);

    return (
        <div className="home">
          { error && <div>{ error }</div> }
          { isPending && <div>Loading...</div> }
          {blogs && <BlogList blogs={blogs} title="All Blogs" />}    
          {/* handleDelete={handleDelete} */}
          {/* <button onClick={() => setName ('Christopher')}>change name</button>
          <p>{ name }</p> */}
          {/* <BlogList blogs={blogs.filter((blog) => blog.author === "CJ" )} title="CJ's blogs" /> */}
        </div>
    );    

}
 
export default Home;