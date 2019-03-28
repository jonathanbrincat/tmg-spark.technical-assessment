'use strict';

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route, NavLink, HashRouter as Router } from 'react-router-dom'

import { Home, Stuff, Nonesense } from './route'
import FlickrComponent from './component/flickr/Flickr.component'

import FlickrService from '../js/api/flickr'

import _ from 'lodash'


export default class App extends Component {

	constructor() {
		super();

		// Declare initial states
		this.state = {
			data: null,
			flickr: [],
			filterByTag: [],
			isLoading: false,
			isError: false,
		}

		this.flickRComponent = null;
		this.animationStack = [];

		this.tween = new TimelineLite();
	}

	componentWillMount() {

		// Initiate app data hydration
		this.hydrate();
	}

	componentWillUnmount() {

		// Destroy scroll event listener associated with infinite scoll loading
		window.removeEventListener("scroll", this.scrollHandler);
	}

	hydrate(_filter = []) {

		this.setState({
			isLoading: true
		}, () => {

			/*
			* Endpoint: flickr GET => public feed
			*****************/
			FlickrService.getPublicFeed(this.state.filterByTag)
				.then( (response) => {

					this.setState({
						data: response,
						flickr: this.state.flickr.concat(response.items),
						isLoading: false
					}, () => {

						this.tween.staggerFrom(this.animationStack, 0.5, {autoAlpha: 1, y: 200}, 0.1);
					});

					// Register event listener to expedite infinite scroll polling
					window.addEventListener("scroll", this.scrollHandler, false);

				}).catch( (error) => {
					console.error("Opps something went wrong requesting the data from the Flickr api :: ", error.message);

					this.setState({
						isLoading: false,
						isError: true
					});
				});
		})
	}

	reset() {
		this.setState({
			flickr: []
		},

			this.hydrate()
		)
	}

	updateFilterByTag = (_filterByTag) => {
		this.setState({
			filterByTag: _filterByTag
		},
			this.reset()
		);
	}

	// DEVNOTE: Candidate for dedicated/discreet reusable module with adaptation/refinement
	// Infinite scroll handler - poll the browser and rehydrate the flickr component once trailing edge has reached the bottom of the inner chrome
	// ;'debounce' to restrict firing of expensive operation repeatedly
	scrollHandler = _.debounce( (event) => {

		if(this.state.isLoading) return;

		const el = ReactDOM.findDOMNode(this.flickrComponent);
		let offset = this.calculateOffset(el);

		if(offset < 0) {

			// Destroy scroll event listener associated with infinite scoll loading and prevent further polling
			window.removeEventListener("scroll", this.scrollHandler);

			// Rehydrate; top up with fresh data; once to ensure the method call only executes once if multiple scroll event fires occurs
			_.once(this.hydrate).call(this);
		}
	}, 200);


	calculateOffset(el) {
		if(!el) return 0;

		return (
			this.calculateTopPosition(el) + 
			(el.offsetHeight - (window.pageYOffset || document.documentElement.scrollTop) - (window.innerHeight || document.documentElement.clientHeight))
		);
	}

	calculateTopPosition(el) {
		if(!el) return 0;

		return el.offsetTop + this.calculateTopPosition(el.offsetParent);
	}

	CSS_CLASS() {
		let obj = {
			'status__loading': this.state.isLoading
		}

		return Object.entries(obj).reduce((accumulator, curr) => {
			if(curr[1] === true) accumulator.push(curr[0]);

			return accumulator;
		}, []).join(' ');
	}

	render() {
		const { data, flickr, filterByTag, isLoading } = this.state;

		return (
			<Router>				
				<header id="app--masthead" role="complementary">
					<h1><span>Telegraph Media Group</span></h1>
					<h2><span>Spark technical assessment</span></h2>
				</header>

				<nav id="nav--primary">
					<ul className="header">
						<li><NavLink to="/" exact>Home</NavLink></li>
						<li><NavLink to="/stuff">Stuff</NavLink></li>
						<li><NavLink to="/nonesense">Nonesense</NavLink></li>
					</ul>
				</nav>

				<main id="app--body" role="main" className={ this.CSS_CLASS() }>
					<section>
						<div className="container">
							<Route path="/" exact component={ Home } />
							<Route path="/stuff" component={ Stuff } />
							<Route path="/nonesense" component={ Nonesense } />
						</div>
					</section>

					<section>
						<div className="container">
							<h2>Flickr Public Feed</h2>
							<p><strong>Warning:</strong> this is a 3rd party consumed public service that we do not control. Although we will do our utmost to safeguard your user experience within the realms of the mechanisms we have at our disposal. We ultimately can not control rogue or malevolent content submitted by individual users that do not abide by the terms of the flickr service. No kittens were harmed in the making of this component.</p>
							
							<FlickrComponent
								status={ isLoading }
								data={ flickr }
								animationStack = { this.animationStack }
								filterByTag={ filterByTag }
								updateFilterByTag={ this.updateFilterByTag }
								ref={ (el) => this.flickrComponent = el }
								/>
						</div>
					</section>
				</main>

				<footer id="app--footer">
					<div className="container">
						<p>Powered by pix'ie dust. Fuelled by tea. &copy; <a href="http://pix8.co.uk" target="_blank">pix8 Ltd</a> 2019.</p>
					</div>
				</footer>
			</Router>
		)
	}
}
