ymaps.ready(function () {
  var featureMap = new ymaps.Map("feature_map", {
    center: [55.770785, 37.660368],
    zoom: 15,
    controls: []
  });

  featureMap.behaviors.disable('scrollZoom');

  var myPlacemark = new ymaps.Placemark(featureMap.getCenter(), {
  }, {

    iconLayout: 'default#image',

    iconImageHref: 'img/location-icon.svg',

    iconImageSize: [65, 65],

    iconImageOffset: [-5, -38]
  });

  featureMap.geoObjects
    .add(myPlacemark);

  if (featureMap) {
    ymaps.modules.require(['Placemark', 'Circle'], function (Placemark, Circle) {
      var placemark = new Placemark([55.770785, 37.660368]);
    });
  }
});
