import styled from 'styled-components'


const ModuleFlickr = styled.div`
	margin: 5rem 0;

	label:first-child {
		display: inline-block;
		margin: 0;
	}
`

const FlickrGallery = styled.ul`
	position: relative;
	list-style: none;
	padding: 0;
	display: flex;
	flex-wrap: wrap;
	margin-left: -10px;
	margin-right: -10px;
`

const FlickrToolbar = styled.div`

`

const FlickrFilter = styled.div`

	p:first-child {
		line-height: 1;
		margin-top: 0;
		margin-bottom: 0;
	}

	ul {
		margin: 15px -5px 0;
		list-style: none;
		padding: 0;
		min-height: 40px;
		max-height: 125px;
		overflow: auto;

		&:after {
			content: "";
			display: table;
			clear: both;
		}
	}

	li {
		margin: 5px;
		display: block;
		float: left;
	}
`

const FlickrItem = styled.li`
	width: 100%;
	padding-left: 10px;
	padding-right: 10px;
	margin-top: 1rem;
	margin-bottom: 1rem;

	@media (min-width: 600px) {
		width: 33.333%;
	}

	@media (min-width: 900px) {
		width: 25%;
	}
`

const FlickrStatus = styled.div`
	position: relative;
	min-height: 10vh;
	padding-top: 1em;
`
const FlickrMessage = styled.p`
	font-size: 48px;
	color: rgb(236,0,140);
	text-align: center;

	@media (min-width: 600px) {
		font-size: 64px;
	}
`

export {
	ModuleFlickr,
	FlickrGallery,
	FlickrToolbar,
	FlickrFilter,
	FlickrItem,
	FlickrStatus,
	FlickrMessage
}
