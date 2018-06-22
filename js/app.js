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
 $ul.attr('storage', 'trunk');
 // How do I add attribute of "storage"

 const $li = $('<li>butter beer</li>');

 const $li2 = $('<li>invisibility cloak</li>');
 $li2.addClass('secret');

 const $li3 = $('<li>time turner</li>');
 $li3.addClass('secret');

 const $li4 = $('<li>leash</li>');
 $li4.addClass('Badass');

 const $li5 = $('<li>Bertie Botts Every Flavor Beans</li>');

 const $li6 = $('<li>magic map</li>');
 $li6.addClass('secret');

 $ul.append($li, $li2, $li3, $li4, $li5, $li6);




const $h5 = $('<h5>Spring 2017</h5>');
$body.append($h5);

const $table = $('<table></table>');

const $thead = $('<thead></thead>');
const $th = $('<th>Day</th>');
const $th2 = $('<th>Classes</th>');

const $tr = $('<tr>Schedule</tr>');
const $td = $('<td>Monday</td>');
const $td2 = $('<td>Herbology, Defense Against the Dark Arts, Quidditch practice</td>');
const $td3 = $('<td>Tuesday</td>');
const $td4 = $('<td>Divination</td>');
const $td5 = $('<td>Wednesday</td>');
const $td6 = $('<td>History of Magic Charms</td>');
const $td7 = $('<td>Thursday</td>');
const $td8 = $('<td>Potions</td>');
const $td9 = $('<td>Friday</td>');
const $td0 = $('<td>Transfiguration');

$table.append($thead);
$thead.append($th, $th2);
$tr.append($td, $td2, $td3, $td4, $td5, $td6, $td7, $td8, $td9, $td0);
$body.append($table);








