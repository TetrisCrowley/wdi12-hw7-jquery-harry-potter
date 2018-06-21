// if (typeof jQuery == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {
//   console.log('I did it! I linked jQuery and this js file!')
// };





 const $body = $('body');
 const $container =  $('#container');


 console.log($container);

 const $h1 = $('<h1>Hogwarts</h1>');
 $container.append($h1);

 const $h2 = $('<h2>Steve</h2>');
 $container.append($h2);

 const $h3 = $('<h3>Slytherin</h3>');
 $container.append($h3);

 const $h4 = $('<h4>Kurt Russell</h4>');
 $h4.addClass('Badass');
 $container.append($h4);

 const $h4_2 = $('<h4>Wand</h4>');
 $h4_2.addClass('Hawthorn with Dragon Heartstring Core');
 $container.append($h4_2);
















