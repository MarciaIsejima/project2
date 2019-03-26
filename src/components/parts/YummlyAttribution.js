import React from 'react';
import parse from 'html-react-parser';

const YummlyAttribution = (props) => {

    return(
        <div className="recipe-attribution paragraph-small">{parse(props.recipe.attribution.html)}</div>
    );
    
}

export default YummlyAttribution;