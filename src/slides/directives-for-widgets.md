## What should we call them?

## Widgets or directives or _?

---

## Patterns for [Using & Creating Directives](http://esri.github.io/angular-esri-map/#/patterns/using-creating-widgets)

## (1) JSAPI Out-of-the-Box Widget

- `esriLoader.require()`
  - load **BOTH** widget UI **AND** widget view model

- `on-create` callback
  - wait for starting up widget UI and view model

- `$scope.$on('$destroy'...)`
  - use for proper tear-down

---

## Demo: [Search Widget](http://esri.github.io/angular-esri-map/#/examples/search) example

---

## Patterns for [Using & Creating Directives](http://esri.github.io/angular-esri-map/#/patterns/using-creating-widgets)

## (2) JSAPI ViewModel within Directive

- `esriLoader.require()`
  - load **ONLY** widget view model

- use the view model in your own directive

---

## Demo: [`<esri-home-button>`](http://esri.github.io/angular-esri-map/#/examples/home-button) example

---

## Patterns for [Using & Creating Directives](http://esri.github.io/angular-esri-map/#/patterns/using-creating-widgets)

## (3) Directive _without_ JSAPI Widget or ViewModel

- JSAPI widget UI or widget view model aren't always necessary

- choose your own path to interact between Angular and JSAPI

  - provide callback event bindings?

  - bind MapView or SceneView references?

---

## Demo:
## [`<esri-webscene-slides>`](http://esri.github.io/angular-esri-map/#/examples/webscene-slides-as-directive) example

compare against [WebScene Slides without directive](http://esri.github.io/angular-esri-map/#/examples/webscene-slides) example
