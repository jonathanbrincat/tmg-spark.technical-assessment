'use strict';


//========= REACT
import React from 'react'
import ReactDOM from 'react-dom'
import ReactApp from '../react/App'

//import jsonp from 'jsonp'
//import jQuery from 'jquery'


document.documentElement.classList.remove('no-js');


/*const URL = "https://api.flickr.com/services/feeds/photos_public.gne";
var query = "?format=json";

$.ajax({
	url: URL + query,
	dataType: "jsonp",
	jsonpCallback: 'jsonFlickrFeed',
	success: (result, status, xhr) => {
		console.log("jquery.result >> ", result);
	},
	error: (xhr, status, error) => {

	}
})*/

/*jsonp(URL + query, {
	name: 'jsonFlickrFeed'
}, (err, data) => {
	if(err) {
		console.error(err.message);
	}else {
		console.log("jsonp.result >> ", data);
	}
});*/


/*function javaScriptFetch() {
	var script = document.createElement('script');
	script.src = URL + query;	
	document.querySelector('head').appendChild(script);
}

window.jsonFlickrFeed = function(data) {

	console.log("vanilla.result :: ", data);
}

javaScriptFetch();*/


ReactDOM.render(
	<ReactApp />
, document.getElementById('app--react'));


if(module.hot) {
	module.hot.accept();
}

