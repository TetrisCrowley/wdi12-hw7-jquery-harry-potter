// if (typeof jQuery == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {
//   console.log('I did it! I linked jQuery and this js file!')
// };





 const $body = $('body');
 const $container =  $('#container');


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


 const $ul = $('<ul>trunk</ul>');
 $container.append($ul);

 const $li = $('<li>butter beer</li>');

 const $li2 = $('<li>invisibility cloak</li>');
 $li2.addClass('secret');

 const $li3 = $('<li>time turner</li>');
 $li3.addClass('secret');

 const $li4 = $('<li>leash</li>');

 const $li5 = $('<li>Bertie Botts Every Flavor Beans</li>');

 const $li6 = $('<li>magic map</li>')
 $li6.addClass('secret');
 $ul.append($li, $li2, $li3, $li4, $li5, $li6);














