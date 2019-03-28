'use strict';


//========= REACT
import React from 'react'
import ReactDOM from 'react-dom'
import ReactApp from '../react/App'

import axios from 'Axios'
import jsonp from 'jsonp'

document.documentElement.classList.remove('no-js');

ReactDOM.render(
	<ReactApp />
, document.getElementById('app--react'));



//========= VUE
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueApp from '../vue/App.vue';


Vue.config.productionTip = false


// $.ajax({
// 	url: "https://api.flickr.com/services/feeds/photos_public.gne?format=json",
// 	dataType: "jsonp",
// 	jsonpCallback: 'jsonFlickrFeed',
// 	success: (result, status, xhr) => {
// 		console.log("DATA >> ", result);
// 	},
// 	error: (xhr, status, error) => {

// 	}
// })

// jsonp('https://api.flickr.com/services/feeds/photos_public.gne?format=json', {
// 	name: 'jsonFlickrFeed'
// }, (err, data) => {
//   if(err) {
//     console.error("error :(", err.message);
//   }else {
//     console.log("success! ", data);
//   }
// });


function javaScriptFetch() {
	var script = document.createElement('script');
	
	//script.src = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=" + document.getElementById("search").value;
	script.src = "https://api.flickr.com/services/feeds/photos_public.gne?format=json";
	
	document.querySelector('head').appendChild(script);
}

window.jsonFlickrFeed = function(data) {

	console.log("HELLO :: ", data);
	// var image = "";
	// data.items.forEach(function (element) {
	// 	image += "<img src=\"" + element.media.m + "\"/>";
	// });

	// document.getElementById("outputDiv").innerHTML = image;
}

javaScriptFetch();

//afdc7fd5a9b6bc97ee59afc55452d3f0
//3d45430f424269af

//https://api.flickr.com/services

//method
//api_key=afdc7fd5a9b6bc97ee59afc55452d3f0
//format
//https://api.flickr.com/services/rest/?method=flickr.test.echo&name=value
//https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=ca2aff1be1611fbd811c015edfeb8931&nojsoncallback=1&auth_token=72157704248756602-8a40b433cf50e893&api_sig=e0ee64c4f05ddedccc799f3ebf82dadf
//https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&format=json&api_key=6f93d9bd5fef5831ec592f0b527fdeff&user_id=9395899@N08

//https://api.flickr.com/services/rest?sort=relevance&parse_tags=1&content_type=7&extras=can_comment%2Ccount_comments%2Ccount_faves%2Cdescription%2Cisfavorite%2Clicense%2Cmedia%2Cneeds_interstitial%2Cowner_name%2Cpath_alias%2Crealname%2Crotation%2Curl_c%2Curl_l%2Curl_m%2Curl_n%2Curl_q%2Curl_s%2Curl_sq%2Curl_t%2Curl_z%2Cis_marketplace_licensable&per_page=50&page=1&lang=en-US&text=dog&viewerNSID=&method=flickr.photos.search&csrf=&api_key=fb4c82e7cd32fc74eb349aa61fc1b1aa&format=json&hermes=1&hermesClient=1&reqId=f866abd5&nojsoncallback=1


// headers: {
// 	'Access-Control-Allow-Methods': 'GET',
// 	'Access-Control-Allow-Origin': '*',
// 	'Content-Type': 'application/json'
// }


//https://www.flickr.com/services/feeds/docs/photos_public/
//https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1
//http://api.flickr.com/services/feeds/photos_public.gne?tags=kitten&format=json&nojsoncallback=true

//METHOD: search
//var flickr = axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ca2aff1be1611fbd811c015edfeb8931&format=json&nojsoncallback=1&auth_token=72157704248756602-8a40b433cf50e893&api_sig=e0ee64c4f05ddedccc799f3ebf82dadf')

//METHOD: photos-public
//var flickr = axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=09f06d5b9e1bbf5ac96e6dea8d8dbdbf&format=json&nojsoncallback=1&auth_token=72157677401439657-5154e23d4e058b60&api_sig=a8ed54440f1f94ce38be2dafbbf2da70')
/*var flickr = axios.get('http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?')
	.then(function (response) {
		console.log("jb 1", response.data);
	})
	.catch(function (error) {
		console.log("jb 2", error);
	});*/

//flickr.galleries.getPhotos -> needs userID param, value obtained by another endpoint


// var vm1 = new Vue({
// 	el: '#app--vue',
// 	render: h => h(VueApp)
// });

// var vm2 = new Vue({
// 	el: 'vueapp',
// 	components: { vueapp: VueApp }
// });

// var vm3 = new Vue(VueApp).$mount("#app--vue");


if(module.hot) {
	module.hot.accept();
}

