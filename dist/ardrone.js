/*
 * Cylonjs ARDrone adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/


(function() {
  'use strict';
  var LibARDrone, namespace,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  LibARDrone = require('ar-drone');

  namespace = require('node-namespace');

  require('./commands');

  namespace("Cylon.Adaptor", function() {
    return this.ARDrone = (function(_super) {
      __extends(ARDrone, _super);

      function ARDrone(opts) {
        ARDrone.__super__.constructor.apply(this, arguments);
        this.connection = opts.connection;
        this.name = opts.name;
        this.ardrone = null;
        this.proxyMethods(Cylon.ARDrone.Commands, this.ardrone, ARDrone);
      }

      ARDrone.prototype.commands = function() {
        return Cylon.ARDrone.Commands;
      };

      ARDrone.prototype.connect = function(callback) {
        var _this = this;
        Logger.debug("Connecting to ARDrone '" + this.name + "'...");
        this.ardrone = new LibARDrone.createClient({
          ip: this.connection.port.toString()
        });
        this.ardrone.on('navdata', function(data) {
          return _this.connection.emit('navdata', data);
        });
        this.connection.emit('connect');
        return callback(null);
      };

      ARDrone.prototype.disconnect = function() {
        return Logger.debug("Disconnecting from ARDrone '" + this.name + "'...");
      };

      return ARDrone;

    })(Cylon.Basestar);
  });

}).call(this);
