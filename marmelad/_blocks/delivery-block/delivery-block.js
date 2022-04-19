ymaps.ready(function () {
  var mapDelivery = new ymaps.Map("map_delivery", {
    center: [55.770785, 37.660368],
    zoom: 15,
    controls: []
  });

  mapDelivery.behaviors.disable('scrollZoom');

});
