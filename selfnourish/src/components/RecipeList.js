import React from 'react';
import ShowMore from "@tedconf/react-show-more";
import RecipeCard from "./RecipeCard";
import Icon from '@mdi/react'
import { mdiChevronUpCircleOutline } from '@mdi/js'
import './RecipeList.css'; 

class RecipientList extends React.Component{

    constructor (props) {
        super(props);
        this.state = {
          error: null,
          isLoading: false,
          list: []
        }
    } 

		retrieveRecipe(id) {
        this.props.retrieveRecipe(id);
    }
    
    searchRecipe(ingredient){
        this.setState({ isLoading: true });

        let requestURL = `http://api.yummly.com/v1/api/recipes?_app_id=${process.env.REACT_APP_YUMMLY_APP_ID}&_app_key=${process.env.REACT_APP_YUMMLY_API_KEY}`
        //let query = '&q=onion'
        let query='&maxResult=20'
        //query +='&maxResult=21&requirePictures=true'
        
        if (!ingredient) {
            query = query + "&q=" + ingredient
        }
        console.log(query)
        fetch(requestURL+query)
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Something went wrong ...');
            }
          })
          .then(data => {this.setState({ list: data.matches, isLoading: false })})
          .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
        this.searchRecipe(this.props.ingredient)
    }

    componentDidUpdate(prevProps) {
        // window.alert(this.props.ingredient);
				// window.alert(prevProps.ingredient);
        if (this.props.ingredient !== prevProps.ingredient && this.props.doSearch ) {
					
            this.searchRecipe(this.props.ingredient)
        }
    }

    // When the user clicks on Up Arrow button, scroll to the top of the document
    scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    render() {
        const { list, isLoading, error } = this.state;

        if (error) {
          return <p>{error.message}</p>;
        }
    
        if (isLoading) {
          return <p>Loading ...</p>;
        }
    
        return (

            <section className="recipe-list" style={{marginBottom: "4rem"}}>

                <h2 className="heading-2">{this.props.title}</h2>

                <ShowMore items={list} by={4}>
                {({ current, onMore }) => (
                    <div>
                        <div className="recipe-cards-container">
                            {current.map(item => 
                                <RecipeCard 
																	key={item.id} 
																	recipe={item}
																	retrieveRecipe={this.retrieveRecipe.bind(this)}
																/>
                            )}
                        </div>
                        <div className="more-button-container">
                            <button className="more-button" title="See more recipes" disabled={!onMore} 
                                onClick={() => {
                                    if (!!onMore) onMore();
                                 }
                                }>
                                See more
                            </button>
                        </div>
                    </div>
                )}
                </ShowMore>
                <div className="top-button-container">
                    <button className="top-button" onClick={ () => { this.scrollToTop(); }} id="topBtn" title="Back to top">
                        <Icon path={mdiChevronUpCircleOutline} size={1.5} color={"grey"}/>
                    </button>
                </div>

            </section>

        );
    }
}

export default RecipientList;