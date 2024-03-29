# Telegraph Media Group(Spark) Technical Assessment March 2019

## Frontend developer test

Your test is to consume the public [Flickr API](https://www.flickr.com/services/api/) and display the results according to this basic wireframe.

![A UI depicting 4 cards presented in a row. Each card consists of a hero image, linked title and author alongside description and applicable tags that can be revealed by a toggle button](https://jonathanbrincat.github.io/tmg-spark.technical-assessment/image/ref/mock.png)

We would expect the main part of this task to take up to a day to complete. Please find our requirements listed below:

+ The website you create should function as a single page application
+ You should use either Vanilla.js(*Candidate comment: ...vanilla JavaScript. This was a common trick at the time to catch noobs because yes there were people out there who thought vanilla javascript was a framework/library!*), React.js or Vue.js
+ Avoid using bootstrap, or any other framework/library to style the layout
+ Your app must be fully responsive across all devices and screen sizes
+ Your app should support all the major browsers (Chrome, Firefox, Safari, IE11+)
+ If you decide to use other Flickr API feeds, note that some endpoints require an API key. You can apply for your own [here](https://www.flickr.com/services/apps/create/apply/)
+ Where possible, only request images with a 'safe' tag to ensure the application remains suitable for all ages
+ Code  should be pushed to a git repository
Please, create a document explaining why you chose the technologies you have

If you feel like you want to go the extra mile, here is a list of potential additions:

+ Think about how you might improve the speed of the page in terms of the images/content loading
+ Allow the page to have an infinite scroll (loading in more images as you scroll)
+ A search functionality based on tags, or possibly the title of the photo
+ How you can add in smooth animations that will add to the value of the application
+ Alternatively if you can think of any other features that you feel would further enhance your app, then we'd love to see what you can come up with!

---

Node: Unknown  
NPM: Unknown

## Project setup

Clone repository. From a Terminal/Command Line window navigate to the root directory

```bash
npm install
```

### Compiles and hot-reloads for development
```bash
npm start
```

### Compiles and minifies for production
```bash
npm run build
```

## Candidate commentary

### Explanation of tech used
> Candidate note: *Build tooling and allied stack is my own concoction and maintained by myself - [Pogo App](https://github.com/pix8/pogo-app). It's boilerplate some stuff in there is not relevant; I have removed most of the cruft but retained the Vuejs supporting infrastructure to keep my options open.*

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
![Gotcha!](https://jonathanbrincat.github.io/tmg-spark.technical-assessment/image/ref/issue.jpg)

> *Candidate note: It was later confirmed that my suspicions had been correct and this issue had been deliberately engineered into the problem to weed out weaker candidates; basically you were being setup to fail.*

- Instructions direct candidates to ensure images are 'safe'. However this is the default configuration for unauthenticated calls(as indicated by the suggested endpoint) from thr Flickr service and there not really anything a candidate can do to satisfy this requirement any further.
- Flickr public feed does not return a `description` field that is compatible with the wireframe supplied as guidance. For a start it is a string of `html`(so potentially unsafe to consume) and the data within is effectively an amalgamated representation of the entry itself. Wrapped in markup. Containing redundancy and duplication of information.
- The flickr public feed has a very limited and restrictive feature set e.g. 20 entries max at a time. Some of which is undocumented. Althought there is the option to use an authenticated Flickr service that is very time-consuming to both research and implement(often requiring tandem feeds to extrapolate the right data). It also requires the candidate to painstakingly exorcise the full vocabulary of the Flickr APIs to craft and shape the necessary calls to fulfil the brief. Unless you have prior and thorough knowledge of the Flickr APIs this expectation is not very practical in a limited timespan. The authenticated APIs are also more specialised and discreet in their functions and geared towards individual users and collections which would require targetting a specific userID to consume. This is contrary to a public feed that indiscriminately dispenses data and images from a random pool of users.
- Flickr public api is not open to CORs and same origin protocol will kick in if you try to consume the service from the browser. A JSONP workaround is not documented and had to be teased and researched.
- The flickr public feed does not seem to update regularly and there doesn't seem to be a way to explicitly request fresh data. Leading to large duplication of images upon a new request.
- The problem with encouraging candidates to get creative and work outside a relatively simple remit is that you quickly start to encounter pressing UX and design considerations that haven't been covered - interactivity, breakpoints, layout, styling, clashes, conflicts and regression etc.. - which introduce side effects and cognitive overhead over and above a mere coding acuity exercise and makes it a risky strategy that would be more trouble than it's worth.
