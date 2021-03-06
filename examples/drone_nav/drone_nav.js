var Cylon = require('cylon');

Cylon.robot({
  connection: { name: 'ardrone', adaptor: 'ardrone', port: '192.168.1.1' },
  devices: [
    { name: 'drone', driver: 'ardrone' },
    { name: 'nav', driver: 'ardroneNav' }
  ],

  work: function(my) {
    my.drone.config('general:navdata_demo', 'TRUE');
    my.nav.on('update', console.log);
  }
}).start();
