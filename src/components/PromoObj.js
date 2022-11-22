import React from "react";

// List of promotions
// Step 1: Add image to promotions folder
// Step 2: Grab pull the image into the file using the import call located above
// Step 3: Add promotion details to the promotions list located above
// Step 4: If this is an active promotion, set the "active" property to 'true'

function PromoObj({ promotions }) {
    return (
        <>
            <div class="row-span-3 ..."><img src={promotions.image} /></div>
            <div class="col-span-2 justify-self-center ...">{promotions.title}</div>
            <div class="row-span-2 col-span-2 ..."><p>{promotions.description}</p></div>
        </>
    )
}

export default PromoObj;