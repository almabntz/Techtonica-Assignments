

const BlogCard = ({myPosts2, deleteBlog}) => {
   const handleDelete = (e, id) => {
      e.preventDefault();
      deleteBlog(id);
  };
 return (
    <div className="blog-wrap">
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

      <div>
      <button
            id= "delete-user-id"
            value={myPosts2.id}
            onClick= { (e) => handleDelete (e, myPosts2.id) }
            >Delete</button>
      </div>


    </div>
    </div>
    </div>
 );
};

export default BlogCard;

/* Logic for delete is in the parent (home) and being
passed to blog card. 
a seperate instance of a delete component isnt needed in this
example because all moving parts are populating here in blogcard. 

Part of why the button logic  needs to exist here in blogcard
and  not in home is because home is simply populating a single instance
as to where blog card is a template*/