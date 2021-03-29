import React from "react"
import Default from "../layouts/default.js"

export default function RecipePage({pageContext}) {

    const { recipe} = pageContext;
    return (
        <Default>

            <div className="row">
                <div className="col-sm-6">

                <h1>{recipe.name}</h1>

                
                <img src={recipe.image.file.url} /> 

                </div>
                <div className="col-sm-6">
                <p>{recipe.description.description}</p>
                
                </div>
                
            </div>

            

            

            












        </Default>
    )
}