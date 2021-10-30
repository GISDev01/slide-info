define(['dojo/_base/declare', 'jimu/BaseWidget'],
  function (declare, BaseWidget) {
    return declare([BaseWidget], {
      baseClass: 'jimu-widget-slideinfos',

      postCreate: function () {
        this.inherited(arguments);
        console.log('postCreate');
      },

      startup: function () {
        this.inherited(arguments);
        console.log('startup');
      },

      onOpen: function () {
        console.log('onOpen');
      },

      onClose: function () {
        console.log('onClose');
      },

      onMinimize: function () {
        console.log('onMinimize');
      },

      onMaximize: function () {
        console.log('onMaximize');
      }
    });
  });