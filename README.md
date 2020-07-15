## UPDATE

This is the solution to The Telegraphs technical assessment given to prospective candidates wishing to join the Spark team at their London, Victoria office. Needless to say I aced this test because I am a badass and because quite frankly I was far too good for them and far too capable for this role. Unfortunately although it is now common practise for prospective employers to screen candidates with these degrading and humiliating competency tests, the quid-quo-pro isn't available for highly-skilled workers that are in short-supply, looking to join so-called professional organisations to become valued members of their team.

This certaintly didn't rank amongst the most gruelling test I've been subjected to. In certain aspects it was actually quite fun. However as a very experienced and competent developer there was one dastardly flaw with this assessment that did not escape my attention and really did not sit well with me. I later raised and queried this with their internal team and much to my disgust I got confirmation to what I had suspected. The test had been written intentionally with misleading and incorrect instructions and was designed to misdirect and fool the test subject. In other words, it was designed to make you fail. This was their way of sorting the wheat from the chaff.

Although I had personally not fallen victim to this trap it was only because I could leverage my experience and use my better judgement to overrule and work around the issue. I thought this was really really unscrupulous tactic and most of all unethical. Giving people a test that was not possible to pass. Utterly shameful behaviour and a precursor to what was to follow...

So here you are folks. A gift from me to you. Do yourself a favour. Trust me you don't want to work for The Telegraph. Pass their silly test and then politely tell them thanks but no thanks and send them my love.


# Telegraph Media Group (Spark) - Technical assessment

Submission

## Getting started

Clone repository. From a Terminal/Command Line window navigate to the root directory

```bash
npm install
npm start
```

## Demo

[Hosted on Github pages](https://pix8.github.io/tmg-spark/)

## Explanation of tech used
Note: Build tooling and allied stack is my own concoction and maintained by myself - [Pogo App](https://github.com/pix8/pogo-app). It's boilerplate some stuff in there is not relevant; I have removed most of the cruft but retained the Vuejs supporting infrastructure to keep my options open.  

### Reactjs
Popular and universally acclaimed front-end framework. Could of quite happily gone with Vuejs however I feel React's prevalence makes it a more real-world candidate to showcase. Reactjs is ideal for rapidly building out user interfaces and component based architectures. Supported by a virtual DOM representation to drive interactions and reactivity. With reactivity itself the mechanism powering stateful transactions that bind a model(data) to drive(hydrate) the view(interface). When faced with a task declaratively describing a user interface that is hydrated by consuming a data service. Versus a clean sheet approach with vanilla javascript or using an assistive library such as Reactjs. Unless you are a sucker for pain, it really is a no-brainer.
	
### Styled Components
Stable-mate to react for producing components that define their own style and composition - Vuejs has it's equivalent baked into .vue files. Fantastic way to encapsulate styles within the modules and components that consume them avoiding the need to pollute stylesheets with unrestrained and extraneous granularity.

### Lodash
Developer's swiss army knife; a mecca of well-proven utility and convenience functions that you just know would be foolhardy and wasteful to attempt to write yourself.

### Pug
Huge fan of Pug as a powerful html preprocessor/template engine with the support and features you just need executed in javascript so super-portable too(supported by Vuejs and Express on the server-side). Super clean syntax(is space delimited so can be Marmite for some) makes writing markup a breeze and easy on the eye.

### Sass
Defactor extremely powerful/versatile css preprocessor. Boys use Less. Men use Sass.

## Improvements and enhancements
TBC

## Issues
- Instructions direct candidates to ensure images are 'safe'. However this is the default configuration for unauthenticated calls(as indicated by the suggested endpoint) from thr Flickr service and there not really anything a candidate can do to satisfy this requirement any further.
- Flickr public feed does not return a `description` field that is compatible with the wireframe supplied as guidance. For a start it is a string of `html`(so potentially unsafe to consume) and the data within is effectively an amalgamated representation of the entry itself. Wrapped in markup. Containing redundancy and duplication of information.
- The flickr public feed has a very limited and restrictive feature set e.g. 20 entries max at a time. Some of which is undocumented. Althought there is the option to use an authenticated Flickr service that is very time-consuming to both research and implement(often requiring tandem feeds to extrapolate the right data). It also requires the candidate to painstakingly exorcise the full vocabulary of the Flickr APIs to craft and shape the necessary calls to fulfil the brief. Unless you have prior and thorough knowledge of the Flickr APIs this expectation is not very practical in a limited timespan. The authenticated APIs are also more specialised and discreet in their functions and geared towards individual users and collections which would require targetting a specific userID to consume. This is contrary to a public feed that indiscriminately dispenses data and images from a random pool of users.
- Flickr public api is not open to CORs and same origin protocol will kick in if you try to consume the service from the browser. A JSONP workaround is not documented and had to be teased and researched.
- The flickr public feed does not seem to update regularly and there doesn't seem to be a way to explicitly request fresh data. Leading to large duplication of images upon a new request.
- The problem with encouraging candidates to get creative and work outside a relatively simple remit is that you quickly start to encounter pressing UX and design considerations that haven't been covered - interactivity, breakpoints, layout, styling, clashes, conflicts and regression etc.. - which introduce side effects and cognitive overhead over and above a mere coding acuity exercise and makes it a risky strategy that would be more trouble than it's worth.
