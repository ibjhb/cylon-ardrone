'use strict';

var EventEmitter = require('events').EventEmitter;

var Nav = source('nav');

describe('Cylon.Drivers.ARDrone.Nav', function() {
  var driver = new Nav({ device: new EventEmitter });

  describe("#start", function() {
    var callback;

    beforeEach(function() {
      callback = spy();
      stub(driver, 'defineDriverEvent');
    });

    afterEach(function() {
      driver.defineDriverEvent.restore();
    });

    it("defines driver events for the ARDrone", function() {
      driver.start(callback);

      var events = [
        'navdata', 'landing', 'landed', 'takeoff', 'hovering', 'flying',
        'lowBattery', 'batteryChange', 'altitudeChange', 'update'
      ];

      events.forEach(function(e) {
        expect(driver.defineDriverEvent).to.be.calledWith({ eventName: e });
      });
    });
  });
});
