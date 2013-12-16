###
 * Cylong ARDrone navigation data driver
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
###

'use strict';
require './cylon-ardrone'
namespace = require 'node-namespace'
require './commands'

namespace "Cylon.Drivers.ARDrone", ->
  class @Nav extends Cylon.Drivers.Driver
    start: (callback) ->
      Logger.debug "ARDrone nav started"

      @defineDriverEvent(eventName: 'navdata')
      @defineDriverEvent(eventName: 'landing')
      @defineDriverEvent(eventName: 'landed')
      @defineDriverEvent(eventName: 'takeoff')
      @defineDriverEvent(eventName: 'hovering')
      @defineDriverEvent(eventName: 'flying')
      @defineDriverEvent(eventName: 'lowBattery')
      @defineDriverEvent(eventName: 'batteryChange')
      @defineDriverEvent(eventName: 'altitudeChange')
      @defineDriverEvent(eventName: 'update')

      super
