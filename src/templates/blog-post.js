<Helmet
htmlAttributes={{ lang: 'en' }}
meta={[{ name: 'description', content: siteDescription }]}
title={siteTitle}
link={[{
  href:"https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css",
  rel:"stylesheet",
  type:"text/css" 
}]}
script={[{ 
  type: 'text/javascript', 
  url:"",
  id: "snipcart",
  "data-api-key": "MGUyMWI4NjktZGZmYS00N2RlLThlNGQtZmU5YjZmNTBhNGMwNjM4NDA1ODg3MzI5MTQ4Mzg4",
  src:"https://cdn.snipcart.com/scripts/2.0/snipcart.js" 
},{
  type: 'text/javascript',
  src:"https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"
}]} />
  export const pageQuery = graphql`
      query BlogPostBySlug($slug: String!) {
        site {
          siteMetadata {
            title
            author
          }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
          id
          excerpt
          html
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            price
            id
            path
            description
            image
          }
        }
      }
      <a 
    href='#' 
    className='snipcart-add-item'
    data-item-id={post.id}
    data-item-price={post.price}
    data-item-image={post.image}
    data-item-name={post.title}
    data-item-description={post.description}
    data-item-url={"http://snipcart-gatsby.netlify.com" + post.path}>
    Buy
</a>

<img src={imgSrc}></img>

<div dangerouslySetInnerHTML={{ __html: post.html }} /> 

<a
    href='#' 
    className='snipcart-add-item buyBtn'
    data-item-id={post.frontmatter.id}
    data-item-price={post.frontmatter.price}
    data-item-image={post.frontmatter.image}
    data-item-name={post.frontmatter.title}
    data-item-description={post.frontmatter.description}
    data-item-url={"http://snipcart-gatsby.netlify.com" + post.frontmatter.path}>
    Buy
</a>
    `
       
          
 
