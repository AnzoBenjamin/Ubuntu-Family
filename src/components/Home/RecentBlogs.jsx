import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import BlogItem from "../Blog/BlogItem";

const RecentBlog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  });
  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries().then((entries) => {
          setBlogPosts(entries.items);
        });
      } catch (e) {}
    };

    getAllEntries();
  }, []);
  return (
    <section id="recent-posts" className="recent-posts sections-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Recent Blog Posts</h2>
          <p>
            Consequatur libero assumenda est voluptatem est quidem illum et
            officia imilique qui vel architecto accusamus fugit aut qui
            distinctio
          </p>
        </div>

        <div className="row gy-4">
          {blogPosts?.map((blog, index) => {
            if (index <= 3) {
              return (
                <BlogItem
                  key={blog.sys.id}
                  image={blog.fields.blogImage.fields.file.url}
                  title={blog.fields.blogTitle}
                  summary={blog.fields.blogSummary}
                  author={blog.fields.blogAuthor}
                  date={blog.fields.createdDate}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default RecentBlog;
