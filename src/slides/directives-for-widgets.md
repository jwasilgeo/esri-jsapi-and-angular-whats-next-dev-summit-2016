_(SLIDE IN PROGRESS)_
## Patterns for Using & Creating Directives

[Using and Creating Esri Widgets](http://esri.github.io/angular-esri-map/#/patterns/using-creating-widgets)

1. JSAPI out-of-the-box Widget: Search Widget example
  - https://github.com/Esri/angular-esri-map/blob/master/site/app/examples/search.js
  - esriLoader.require: Search widget and SearchViewModel 
  - hook into <esri-map-view map="...” on-create="..."> to wait for starting up Search and SearchVM
  - proper tear-down/destroy() of JSAPI out-of-the-box widgets during Angular scope destroy
2. JSAPI ViewModel with directive: <esri-home-button> directive and controller src code
  - esriLoader.require: ONLY HomeViewModel
  - directive has inline UI template definition
3. Directive _without_ JSAPI Widget or ViewModel: <esri-webscene-slides> directive
  - give it 2 things: an array of JSAPI slides, and a callback func for when the active slide changes
