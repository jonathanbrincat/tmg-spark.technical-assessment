import request from 'jsonp'


const API = {
	url: "https://api.flickr.com/services/feeds/photos_public.gne",
	callback: "jsonFlickrFeed"
};

var query = "?format=json";

// DEVNOTE: Un-authed calls can only see Safe content; this is default according to Flickr docs
// querystring => `?safe_search=1`

export default {
	getPublicFeed: (_filter /* Array */) => {

		let q = (!_filter.length) ? query : query + `&tags=${_filter.join(",")}`;

		return new Promise( (resolve, reject) => {

			request(API.url + q, {
				name: API.callback
			}, (error, response) => (error) ? reject(error) : resolve(response) );

		});
	}
}
