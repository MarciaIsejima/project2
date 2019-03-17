import React from 'react';
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';

class SearchForm extends React.Component {

    handleChange(event){
        this.props.handleChange(event);
    }

    handleSubmit(event){
        this.props.handleSubmit(event);
    }


    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div className="search-form-div">
                    <div className="heading-2">Search Recipes</div>
                    <div className="search-field-container">
                        <Icon path={mdiMagnify} size={1.5} rotate={90} color={"grey"}/>
                        <input
                            className="search-input"
                            id = "ingredient" 
                            name="currentIngredient"
                            type="text"
                            placeholder="Enter ingredient"
                            // value={this.props.currentDetails}
                            onChange={this.props.handleChange}/>
                    </div>
                    <div className="input-field col s2">
                        <button className="button-orange"
                           type="submit" name="action">Search</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default SearchForm;
