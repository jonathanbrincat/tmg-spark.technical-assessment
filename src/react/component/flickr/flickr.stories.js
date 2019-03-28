import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react'
import { withInfo } from '@storybook/addon-info'
import { WithNotes } from '@storybook/addon-notes'
import { specs, describe, it } from 'storybook-addon-specifications'
import expect from "expect"

import Flickr from './'
//import specification from './flickr.spec'
import documentation from './flickr.md'


export function example1() {
	const story = (
		<Flickr />
	)

	specs(() => describe('example1', function () {
		// it('Should have the Hello World label', function () {
		// 	let output = mount(story);
		// 	expect(output.text()).toContain('Hello World');
		// });
	}));

	return story;
}

export function example2() {
	return (
		<Flickr />
	)
}

export default storiesOf('Flickr', module)
	.add('Example 1', example1)
	.add('Example 2', example2)
