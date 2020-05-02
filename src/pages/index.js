import React from "react"
import Post from "../components/Post"
import PrimaryLayout from "../layouts/PrimaryLayout"
import { graphql } from "gatsby"
export default ({data}) =>{
  console.log(data);
  return (
    <PrimaryLayout>
      {data.allMarkdownRemark.nodes.map((node)=>(
        <Post  image= {node.frontmatter.image}
        title= {node.frontmatter.title}
         excerpt= {node.excerpt}
         readMore= {node.fields.slug}
         />
      ))}
    
    </PrimaryLayout>
  )
}
  
export const query = graphql `
{
  allMarkdownRemark{
    nodes {
      frontmatter{
        title
        date
        Keywords
        image
      }
      excerpt
      html
      fields{
        slug
      }
    } 
  }
}
`