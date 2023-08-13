const commands = {
    hello: 'Hello there!',
    help: '<========Available commands=======>\n/mybot hello: Hello there!\n' + 
          '=============================>\n/mybot time: Display Current Date and Time\n'+
          '=============================>\n/mybot help: Display All Commands\n'+
          '=============================>\n/mybot weather city : Weather Information(Ex. /mybot weather Pune)\n'+
          '=============================>\n/mybot joke: Display Random Jokes\n'+
          '=============================>\n/mybot konami: Display Easter Egg\n',
  
    time: 'Time: ' + new Date().toLocaleTimeString() + '   And   Date: ' + new Date().toLocaleDateString('en-GB'),
  
    konami: 'Congratulations! You found the Easter egg!\n🎉🐰🥚',
  };
  
  module.exports = { commands };