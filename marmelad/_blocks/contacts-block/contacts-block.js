ymaps.ready(function () {
  var mapContacts = new ymaps.Map("map_contacts", {
    center: [55.770785, 37.660368],
    zoom: 15,
    controls: []
  });

  mapContacts.behaviors.disable('scrollZoom'); 

  var myPlacemark = new ymaps.Placemark(mapContacts.getCenter(), {
  }, {
    
    iconLayout: 'default#image',
    
    iconImageHref: 'img/location-icon2.svg',
    
    iconImageSize: [93, 93],
    
    iconImageOffset: [-5, -38]
  });

  mapContacts.geoObjects
    .add(myPlacemark);
  
  if (mapContacts) {
    ymaps.modules.require(['Placemark', 'Circle'], function (Placemark, Circle) {
      var placemark = new Placemark([55.770785, 37.660368]);
    });
  }
});
