console.log('LOOPING PERTAMA');
var text = "";
var i;
for (i = 1; i <= 5; i++) {
    console.log(text +  "*" );
    
}


console.log('LOOPING KEDUA');
var j;

for (j = 1; j <= 5; j++) {
    console.log(text +  "*****" );
    
}


console.log('LOOPING KETIGA');


var x,y,chr;
for(x=1; x <=6; x++)
{
   for (y=1; y < x; y++)
     {
    chr=chr+("*");        
      }
 console.log(chr);
 chr='';    
}


