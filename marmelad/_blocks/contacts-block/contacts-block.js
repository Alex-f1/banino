ymaps.ready(function () {
  var mapContacts = new ymaps.Map("map_contacts", {
    center: [55.770785, 37.660368],
    zoom: 15,
    controls: []
  });

  mapContacts.behaviors.disable('scrollZoom'); 

  // Создадим метку.
  var myPlacemark = new ymaps.Placemark(mapContacts.getCenter(), {
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: 'img/location-icon2.svg',
    // Размеры метки.
    iconImageSize: [93, 93],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
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
