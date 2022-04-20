if ($('#feature_map').length) {
  ymaps.ready(function () {
    var featureMap = new ymaps.Map("feature_map", {
      center: [55.770785, 37.660368],
      zoom: 15,
      controls: [],
    }),

    MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
      '<div class="popover">' +
      '<div class="popover-inner">' +
      '$[[options.contentLayout observeSize minWidth=270 maxWidth=270 maxHeight=335]]' +
      '</div>' +
      '</div>', {
      
      build: function () {
        this.constructor.superclass.build.call(this);

        this._$element = $('.popover', this.getParentElement());

        this.applyElementOffset();

      },


      onSublayoutSizeChange: function () {
        MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);

        if (!this._isElement(this._$element)) {
          return;
        }

        this.applyElementOffset();

        this.events.fire('shapechange');
      },

      applyElementOffset: function () {
        this._$element.css({
          left: -(this._$element[0].offsetWidth / 2),
          top: -(this._$element[0].offsetHeight + this._$element.find('.popup-map-thumb')[0].offsetHeight)
        });
      },


      onCloseClick: function (e) {
        e.preventDefault();

        this.events.fire('userclose');
      },

      getShape: function () {
        if (!this._isElement(this._$element)) {
          return MyBalloonLayout.superclass.getShape.call(this);
        }

        var position = this._$element.position();

        return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
          [position.left, position.top], [
            position.left + this._$element[0].offsetWidth,
            position.top + this._$element[0].offsetHeight + this._$element.find('.popup-map-thumb')[0].offsetHeight
          ]
        ]));
      },

      _isElement: function (element) {
        return element && element[0] && element.find('.popup-map-thumb')[0];
      }
    }),

    // Создание вложенного макета содержимого балуна.
    MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div class="popup-map-thumb">'+
        '<div class="popup-map-thumb__body">'+
          '<div class="popup-map-thumb__img">'+
            '<img src="img/photo-reports-img3.jpg" alt="">'+
          '</div>'+
          '<div class="popup-map-thumb__content">'+
            '<div class="popup-map-thumb__name">Баня бочка тип 1</div>'+
            '<div class="popup-map-thumb__text">Московская область, деревня Посевки</div>'+
            '<a class="popup-map-thumb__link-show button-default button-default--large" href="#">'+
              'Смотреть проект'+
            '</a>'+
          '</div>'+
        '</div>'+
      '</div>'
    ),

    myPlacemark = new ymaps.Placemark(featureMap.getCenter(), {
    }, {
      balloonShadow: false,
      balloonLayout: MyBalloonLayout,
      balloonContentLayout: MyBalloonContentLayout,
      balloonPanelMaxMapArea: 0,
      hideIconOnBalloonOpen: false,
      balloonOffset: [35, -290],
      iconLayout: 'default#image',

      iconImageHref: 'img/location-icon.svg',

      iconImageSize: [65, 65],

      iconImageOffset: [1, 1]
    });

    featureMap.geoObjects.add(myPlacemark);
    featureMap.behaviors.disable('scrollZoom');

  });
}