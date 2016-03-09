## Demo: Quick Start

[![quickstart_v2](img/quickstart_v2.png)](https://github.com/Esri/angular-esri-map/blob/master/README.md#quick-start)

---

## Demo: Quick Start

```html
<!DOCTYPE html>
<html ng-app="esri-map-example">
    <head>
        <title>Angular Esri Quick Start</title>
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
        <meta charset="utf-8">
        <link rel="stylesheet" href="//js.arcgis.com/4.0beta3/esri/css/main.css">
    </head>
    <body ng-controller="MapController as vm">
        <esri-scene-view map="vm.map" view-options="{scale: 50000000, center: [-101.17, 21.78]}">
        </esri-scene-view>

        <!-- load Esri JSAPI -->
        <script src="//js.arcgis.com/4.0beta3/"></script>
        <!-- load AngularJS -->
        <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.js"></script>
        <!-- load angular-esri-map -->
        <script src="//npmcdn.com/angular-esri-map@2.0.0-beta.2"></script>

        <script type="text/javascript">
            angular.module('esri-map-example', ['esri.map'])
                .controller('MapController', function(esriLoader) {
                    var self = this;
                    esriLoader.require(['esri/Map'], function(Map) {
                        self.map = new Map({
                            basemap: 'streets'
                        });
                    });
                });
        </script>
    </body>
</html>
```

_(directly from [README](https://github.com/Esri/angular-esri-map/blob/master/README.md#quick-start))_

---

## Demo: Brief Tour of View Directives

[![mapview_vector-tiles](img/mapview_vector-tiles.png)](http://esri.github.io/angular-esri-map/#/examples/vector-tiles)

```html
<!-- MapView (2D) -->
<esri-map-view map="vm.map" 
    view-options="{
        zoom: 10,
        center: [-100.33, 25.69]
    }">
</esri-map-view>
```

---

## Demo: Brief Tour of View Directives

[![sceneview_extrude-polygon](img/sceneview_extrude-polygon.png)](http://esri.github.io/angular-esri-map/#/examples/extrude-polygon)

```html
<!-- SceneView (3D) -->
<esri-scene-view map="vm.map" 
    view-options="{
        camera: {
            position: [-118.25, 4.27, 6249238],
            tilt: 30,
            heading: 23
        }
    }">
</esri-scene-view>
```

---

## Tell me more about **angular-esri-map v2**!

---

## Less declarative markup
## than **angular-esri-map v1**

- Focus on

  - `<esri-map-view>`

  - `<esri-scene-view>`

---

## Predictable JavaScript

- Focus on

  - `esriLoader.require()`

- Code looks more like Esri JSAPI docs

---

## [Getting references to views](http://esri.github.io/angular-esri-map/#/patterns/references-to-views) with
  
## (1) callback event bindings

```html
<esri-scene-view 
    on-create="vm.myViewCreated"
    on-load="vm.myViewLoaded"
    on-error="vm.myViewError">
</esri-scene-view>
```
```javascript
this.myViewCreated = function(view) {
    // establish a click listener on the view reference
    res.view.on('click', function(e) {
    ...
};
```

---

## [Getting references to views](http://esri.github.io/angular-esri-map/#/patterns/references-to-views) with
  
## (2) `esriRegistry` service
```html
<esri-map-view register-as="myMapView" ... >
```
```javascript
esriRegistry.get('myMapView').then(function(res) {
    // establish a click listener on the view in the response
    res.view.on('click', function(e) {
    ...
```
