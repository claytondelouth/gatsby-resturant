import * as React from "react";
import Default from "../layouts/default.js";
import "./index.css";

import { graphql } from 'gatsby';
import MenuItemPreview from "../components/menuItemPreview.js"




// markup
const IndexPage = ( {data}) => {
  return (
    <Default>
   <h2>WelCome To The Bar</h2>

   

   {data.allContentfulRecipes.nodes.map(recipe => (
    <MenuItemPreview recipe={recipe}></MenuItemPreview>
   ))}
  
  
    </Default>
  )
}
export default IndexPage

export const query = graphql`
query MyQuery {
  allContentfulRecipes {
    nodes {
      id
      name
      description {
        description
      }
      image {
        file {
          url
        }
      }
    }
  }
} 
`