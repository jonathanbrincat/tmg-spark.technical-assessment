import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
	StyledCard,
	CardImage,
	CardHeader,
	CardBody,
	CardFooter,
	ClipText
} from './FlickrCard.style';


export default class FlickrCard extends Component {

	static propTypes = {
		item: PropTypes.object.isRequired
	}

	constructor(props) {
		super(props);

		this.state = {
			isToggled: false
		}
	}

	getTitle = () => {
		return this.props.item.title.length > 1 ? this.props.item.title : <span className='status__nodata'>Untitled</span>
	}

	getAuthor = () => {
		return this.props.item.author.match(/\("(.*?)"\)/i)[1];
	}

	createTags = () => {
		return this.props.item.tags.split(" ").map( (item, i) => {
			return React.createElement("span", {className: "ui__badge", key: i}, item);
		});
	}

	handleToggleClick = (event) => {
		this.setState({
			isToggled: !this.state.isToggled
		})
	}

	CSS_CLASS() {
		let obj = {
			'status__active': this.state.isToggled
		}

		return Object.entries(obj).reduce((accumulator, curr) => {
			if(curr[1] === true) accumulator.push(curr[0]);

			return accumulator;
		}, []).join(' ');
	}

	render() {
		const { media, link, author_id, description, tags } = this.props.item;

		return (
			<StyledCard>
				<CardHeader>
					<CardImage style={ {backgroundImage: `url(${media.m})`, minHeight: '200px' } } />
				</CardHeader>
				
				<CardBody>
					<p>
						<ClipText href={ link } className="clip" style={ { maxWidth: '45%', verticalAlign: 'middle'} }>{ this.getTitle() }</ClipText>
						<span style={ {display: 'inline-block', verticalAlign: 'middle'} }>&nbsp;by&nbsp;</span>
						<ClipText href={ `https://www.flickr.com/people/${author_id}` } className="clip" style={ { maxWidth: '45%', verticalAlign: 'middle'} }>{ this.getAuthor() }</ClipText>
					</p>
					
					{
						description && <p>Placeholder description. Flickr schema doesn't satisfy the wireframe guidance.</p>
					}				
				</CardBody>

				{
					tags &&
					<CardFooter>

						<p>
							<button type="button" className={ `ui__btn btn__toggle ${this.CSS_CLASS()}` } onClick={ this.handleToggleClick } style={ {margin: '0 auto', display: 'block'} }>Tags</button>
						</p>
						
						{
							this.state.isToggled &&
							<p>{ this.createTags() }</p>
						}
					</CardFooter>	
				}
			</StyledCard>
		)
	}	
}
