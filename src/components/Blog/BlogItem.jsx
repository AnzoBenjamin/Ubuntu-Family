import React from 'react'

const BlogItem = ({title, image, summary, date, author}) => {
  return (
    <div className="col-xl-4 col-md-6">
          <article>

            <div className="post-img">
              <img src={image} alt="" className="img-fluid"/>
            </div>

            <p className="post-category">{title}</p>

            <h2 className="title">
              <a href="blog-details.html">{summary}</a>
            </h2>

            <div className="d-flex align-items-center">
              <div className="post-meta">
                <p className="post-author-list">{author}</p>
                <p className="post-date">
                  <time>{}</time>
                </p>
              </div>
            </div>

          </article>
        </div>
  )
}

export default BlogItem