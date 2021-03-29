
import React from "react"
import { Link } from "gatsby"

export default function MenuItemPreview({recipe}) {
    return(
        <>
        <div className="row menu-item-preview">

            <div className="col-sm-4">
                <img src={recipe.image.file.url} alt={recipe.name} />

            </div>
            <div className="col-sm-8">
                <h4>{recipe.name}</h4>

            

             <p> {recipe.description.description} </p>


              
 <Link to={"/recipe/" + recipe.id} className="call-to-action">Learn More</Link>
            
              


            </div>
        </div>
        </>
    )
    
    }

