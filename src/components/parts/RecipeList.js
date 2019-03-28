import React, {Component} from 'react'
import ShowMore from "@tedconf/react-show-more"
import RecipeCard from "./RecipeCard";
import Icon from '@mdi/react'
import { mdiChevronUpCircleOutline } from '@mdi/js'
import './css/RecipeList.css'; 

class RecipeList extends Component {

	retrieveRecipe(id) {
		this.props.retrieveRecipe(id);
	}

	
	// When the user clicks on Up Arrow button, scroll to the top of the document
	scrollToTop() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}

	render() {

		return (

			<section className="recipe-list" style={{marginBottom: "4rem"}}>
				<h2 className="heading-2">{this.props.title}</h2>
				<ShowMore items={this.props.list} by={4}>
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

export default RecipeList;