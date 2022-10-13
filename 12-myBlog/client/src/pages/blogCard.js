const BlogCard = ({myPosts2}) => {

 return (
    <div className="blog-card">
        <div >
        <img src={myPosts2.img}/>
        </div>
        <div>
       <h1>{myPosts2.title}</h1>
       </div>
       <div>
       <p>{myPosts2.body}</p> 
       </div>
    </div>
 );
};

export default BlogCard;