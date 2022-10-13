const BlogCard = ({myPosts2}) => {

 return (
    <div className="blog-card">
        <div className="blog-contents">

        <div >
        <img src={myPosts2.img} className="post-img"/>
        </div>

        <div>
       <h1>{myPosts2.title}</h1>
       </div>

       <div>
       <p>{myPosts2.body}</p> 
       </div>

    </div>
    </div>
 );
};

export default BlogCard;