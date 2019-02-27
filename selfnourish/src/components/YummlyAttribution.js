import React from 'react';
import parse from 'html-react-parser';

const YummlyAttribution = (props) => {

    return(
        <div className="recipe-attribution">{parse(props.recipe.attribution.html)}</div>
    );
    
}

export default YummlyAttribution;
