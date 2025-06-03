import { Helmet } from 'react-helmet';
const Blog=()=>{
    return(
        <section>
            <Helmet>
                <title>Blog</title>
            </Helmet>
            <div className="container">
                <h1>Blog</h1>
                <p>Welcome to the blog section!</p>
            </div>
        </section>
    )
}
export default Blog;