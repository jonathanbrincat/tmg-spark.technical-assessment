import React, { Component } from 'react'
import PropTypes from 'prop-types'

import FlickrCard from '../flickrCard/FlickrCard.component'

import {
	ModuleFlickr,
	FlickrGallery,
	FlickrToolbar,
	FlickrFilter,
	FlickrItem,
	FlickrStatus,
	FlickrMessage
} from './Flickr.style'


export default class Flickr extends Component {

	static propTypes = {
		data: PropTypes.array.isRequired,
		isLoading: PropTypes.bool,
		isActive: PropTypes.bool,
		isError: PropTypes.bool,
		filterByTag: PropTypes.array,
		setIsActive: PropTypes.func,
		updateFilterByTag: PropTypes.func,
		animationStack: PropTypes.array
	}

	constructor(props) {
		super(props);

		this.state = {
			queryByTag: ""
		}		
	}

	changeToggleHandler = (event) => {
		this.props.setIsActive(event.target.checked);
	}

	changeQueryTagHandler = (event) => {
		this.setState({
			queryByTag: event.target.value
		})
	}

	keyPressQueryTagHandler = (event) => {
		const SPACE_KEY = 32;

		if(event.charCode === SPACE_KEY || event.key == " ") {
 			event.preventDefault();
			return false;
		}
	}

	clickAddTagHandler = (event) => {
		let isDupe = this.props.filterByTag.indexOf(this.state.queryByTag);

		(isDupe < 0) && this.setState({
			queryByTag: ""
		}, 
			this.props.updateFilterByTag( [...this.props.filterByTag, this.state.queryByTag] )
		);
	}

	clickRemoveTagHandler = (tag, event) => {
		this.props.updateFilterByTag( this.props.filterByTag.filter( (item, i) => item !== tag ) );
	}

	render() {
		const { queryByTag } = this.state;
		const { data, isLoading, isActive, filterByTag, animationStack } = this.props;

		return (
			<ModuleFlickr className="component__flickr">
				<FlickrToolbar className="row">
					<div className="form__field col-xs-12 col-md-3">
						<label htmlFor="flickr--toggleSwitch">Toggle visibility</label>
						<div className="form__control control__checkbox checkbox__toggle">
							<label>
								<input id="flickr--toggleSwitch" type="checkbox" value="1" checked={ isActive } onChange={ this.changeToggleHandler } /><span></span>
							</label>
						</div>
					</div>

					<div className="form__field col-xs-12 col-md-4">
						<label htmlFor="flickr--filterByTag">Filter by tag</label>
						<div className="form__control control__text input-group">
							<input id="flickr--filterByTag" type="text" value={ queryByTag } onKeyPress={ this.keyPressQueryTagHandler } onChange={ this.changeQueryTagHandler } />
							<button type="button" className="ui__btn btn__primary" disabled={ !queryByTag } onClick={ this.clickAddTagHandler }>Add +</button>
						</div>
					</div>

					<FlickrFilter className="col-xs-12 col-md-5">
						<p className="style__label">Your filter/s:</p>
					
						<ul>
							{
								filterByTag.map( (tag, i) => {
									return <li key={ i }><button className="ui__btn" onClick={ this.clickRemoveTagHandler.bind(this, tag) }>{ `${tag} x` }</button></li>
								})
							}
						</ul>
					</FlickrFilter>
				</FlickrToolbar>

				{
					isActive && <FlickrGallery>
						{
							data && data.map( (item, i) => {
								return (
									<FlickrItem key={ i } ref={ (el) => animationStack[i] = el }>
										<FlickrCard item={ item } />
									</FlickrItem>
								)
							})
						}
					</FlickrGallery>
				}

				{
					(isLoading || (!isLoading && !data.length) ) && <FlickrStatus>
						{
							isLoading && <FlickrMessage>Loading...</FlickrMessage>
						}

						{
							(!isLoading && !data.length) && <FlickrMessage>No images found</FlickrMessage>
						}
					</FlickrStatus>
				}
				
			</ModuleFlickr>
		)
	}
}