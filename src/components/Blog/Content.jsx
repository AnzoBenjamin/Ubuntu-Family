import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import { createClient } from "contentful";

const Content = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const client = createClient({
    space: "51vi98ddlhse",
    accessToken: "xf0wH14cPkdjgKUPCCW_166JEPzNs8cX_RGFobsDRy8",
  });
  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries().then((entries) => {
          setBlogPosts(entries.items);
        });
      } catch (e) {
      }
    };

    getAllEntries();
  }, []);
  return (
    <section id="blog" className="blog">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4 posts-list">
          {blogPosts?.map((blog) => (
            <BlogItem
              key={blog.sys.id}
              image={blog.fields.blogImage.fields.file.url}
              title={blog.fields.blogTitle}
              summary={blog.fields.blogSummary}
              author={blog.fields.blogAuthor}
              date={blog.fields.createdDate}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content;
