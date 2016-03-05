_(SLIDE IN PROGRESS)_
## Notes on Angular `$scope`

- 1- or 2-way property binding between JSAPI (e.g. mapView.watch('zoom', ...); ) and Angular
    - There’s now a pattern page and live example for property binding
    - [patterns page here](http://esri.github.io/angular-esri-map/#/patterns/property-binding)

- JSAPI async operations
  - e.g. QueryTask, geometryEngineAsync
  - ...and any results bound to Angular

- Reminder about proper tear-down/destroy() of JSAPI out-of-the-box widgets during Angular scope destroy

- (For the most part you won’t have to worry about Angular digest cycle)
