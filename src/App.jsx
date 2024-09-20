import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [blogs, setBlogs] = useState([]); 

  function handleSubmit(){
    axios.post("http://localhost:5000", {
      title: title,
      content: content
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });

    setTitle("");
    setContent("");
  }

  useEffect(() => {
    axios.get("http://localhost:5000/").then((response) => {
      setBlogs(response.data);
      console.log(response.body);
    }).catch((error) => {
      console.log(error);
    });
  },[])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter title" onChange={(e) => setTitle(e.target.value)}/>
        <input type = "text" placeholder = "Enter Content"  onChange={(e) => setContent(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
      {
        blogs.list.map((blog) => {
          return (
            <div key={blog.id}>
              <h1>{blog.title}</h1>
              <p>{blog.content}</p>
            </div>
          )
        })
      }
    </>
  )
}

export default App
