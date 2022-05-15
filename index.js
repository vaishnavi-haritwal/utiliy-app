console.log("Welcome!");
const readlinesync=require("readline-sync");
 let ch=readlinesync.question("Enter 1 for encoding or decoder()\nEnter 2 for base64 encoder or decoder\nEnter 3 for string hashing\nEnter 4 for convert rgb to hex\nEnter 5 for convert hex to rgb\nEnter 6 epoch converter\nEnter 7 unit converter\nEnter 8 to binary or hex or octal or decimal\n\nEnter your choice:")
switch(ch){
  case '1':
    encoder_decoder();
    break;
  case '2':
    base64_encoder_decoder();
    break;
  case '3':
    string_hashing();
    break;
  case '4':
    console.log(ConvertRGBtoHex());
    break;
  case '5':
    ConvertHextoRGB();
    break;
  case '6':
    epoch_converter();
    break;
  case '7':
    unit_converter();
    break;
  case '8':
    binary_hex_octal_decimal()
    break;
    
}

function encoder_decoder(){
  console.log("\n");
  let option=readlinesync.question("\nEnter 1 for url encoding\nEnter 2 for url decoding\n\nEnter your choice:")
  
  switch(option){
    case '1':
    const urlencode=readlinesync.question('Enter Url to be encoded: ');
    const encoded=encodeURIComponent(urlencode);
    console.log(`Encoded url is: ${encoded}`);
      break;
  
    case '2':
  
    const urldecode=readlinesync.question('Enter url to be decoded: ');
    const decoded=decodeURIComponent(urldecode);
    console.log(`Decode url is:  ${decoded}`);
      break;
    default:console.log("Wrong Input!");

}
}

function base64_encoder_decoder(){
  console.log('\n');
  let option=readlinesync.question("\nEnter 1 for base64 encoding\nEnter 2 for base64 decoding\n\nEnter your choice:")
  
  switch(option){
    case '1':
    const base64encode=readlinesync.question('Enter Url for base64encoded: ');
    const base64encoded=btoa(base64encode);
    console.log(`Encoded url is: ${base64encoded}`);
    break;
    case '2':
  
    const base64decode=readlinesync.question('Enter url for base64decoded: ');
    const base64decoded=atob(base64decode);
    console.log(`Decode url is:  ${base64decoded}`);
    break;
    default:console.log("Wrong Input!");
  }
}

function string_hashing(){
  console.log('\n');
  let hashing=readlinesync.question("\nEnter 1 for md5 hashing\nEnter 2 sha-1 hashing\nEnter 3 for sha-256 hashing\nEnter 4 for sha-512 hashing\n\nEnter your choice:")
  let r;
  switch(hashing){
      case '1':
        r='md5'
      break;
      case '2':
        r='sha-1'
      break;
      case '3':
        r='sha-256'
      break;
      case '4':
       r='sha-512'
      break;
      default:
        r= -1
  }
  if (r=== -1){
    console.log("wrong input");
  }
  else{
        const crypto = require('crypto');
        const stringhashing= readlinesync.question('Enter value:');
        const hash= crypto.createHash(r).update(stringhashing).digest('hex');
        console.log(hash);
  }
}

function Componentrgbtohex(color) {
  var hexadecimal =  parseInt(color).toString(16);
  return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

function ConvertRGBtoHex() {
  const r=readlinesync.question("\nEnter red color:");
  const g=readlinesync.question("Enter blue color:");
  const b=readlinesync.question("Enter green color:");
  return "#" + Componentrgbtohex(r) + Componentrgbtohex(g) + Componentrgbtohex(b);
  
}


function ConvertHextoRGB(){
  let hex=readlinesync.question("\nEnter the hex component:");
  let r = parseInt(hex[1]+hex[2],16);
  let g= parseInt(hex[3]+hex[4],16);
  let b = parseInt(hex[5]+hex[6],16);
  console.log(r,g,b);
}

function epoch_converter() {
  let value=readlinesync.question('\nEnter 1 to convert to humnandata:\nEnter 2 to convert to epoch\n\nEnter your choice:');
  
  switch(value){
    case '1':
      const timestamp= readlinesync.question("\nEnter the epoch value to be converted:");
      const date = new Date(timestamp*1000)
      console.log(`year:${date.getFullYear()}, month:${date.getMonth()+1}, Date:${date.getDate()}, Hours:${date.getHours()}, minutes:${date.getMinutes()}, seconds:${date.getSeconds()}\n`);
      break;

    case '2':
      var y=readlinesync.question("Enter year:");
      var m=readlinesync.question("Enter month:");
      var d=readlinesync.question("Enter date:");
      var h=readlinesync.question("Enter hour:");
      var min=readlinesync.question("Enter minutes:");
      var sec=readlinesync.question("Enter second:");
      year=parseInt(y);
      month=parseInt(m);
      data=parseInt(d);
      hour=parseInt(h);
      minute=parseInt(min);
      seconds=parseInt(sec);
      let myDate = new Date(year,month,data,hour,minute,seconds); 
      let epoch = myDate.getTime()/1000.0;
      console.log(epoch);
      break;
    default:console.log("Wrong Input!")
      
  }
}

function unit_converter()
{
  let choice=readlinesync.question('\nEnter 1 to convert centimeter to meter:\nEnter 2 to convert meter to centimetre\n\nEnter your choice:');
  let value;
  value= readlinesync.question("Enter Value to be converted:");
  switch (choice){
    case '1':  
               console.log(value/100);
               break;
    case '12': 
              console.log(value*100);
              break;
    default: console.log("Wrong input!")
  }
}

function binary_hex_octal_decimal(){
  let choice=readlinesync.question('\nEnter 1 for binary to octal\nEnter 2 for binary to hexdecimal\nEnter 3 for binary to decimal\nEnter 4 for decimal to binary\nEnter 5 for decimal to octal\nEnter 6 for decimal to hexdecimal\nEnter 7 for octal to decimal\nEnter 8 octal to binary\nEnter 9 for octal to hexadecimal\nEnter 10 for hexdecimal to binary\nEnter 11 for hexadecimal to decimal\nEnter 12 for hexdecimal to octal\n\nEnter the choice:');

  let value=readlinesync.question("Enter value:");
  switch(choice){
    case '1':
     
      let octal=parseInt(value,2).toString(8);
      console.log(octal);
      break;
    case '2':
     
      let hex=parseInt(value,2).toString(16);
      console.log(hex);
      break;
    case '3':
     
      let decimal=parseInt(value,2).toString(10);
      console.log(decimal);
      break;
    case '4':
      
      let binary=parseInt(value,10).toString(2);
      console.log(binary);
      break;
    case '5':
     
      let oct=parseInt(value,10).toString(8);
      console.log(oct);
      break;
    case '6':
      
      let hexd=parseInt(value,10).toString(16);
      console.log(hexd);
      break;
    case '7':
      
      let deci=parseInt(value,8).toString(10);
      console.log(deci);
      break;
    case '8':
     
       let bin=parseInt(value,8).toString(2);
      console.log(bin);
      break;
    case '9':
      
      let hexdecimal=parseInt(value,8).toString(16);
      console.log(hexdecimal);
      break;
    case '10':
      
      let binar=parseInt(value,16).toString(2);
      console.log(binar);
      break;
    case '11':
      
      let decima=parseInt(value,16).toString(10);
      console.log(decima);
      break;
    case '12':
     
      let octa=parseInt(value,16).toString(8);
      console.log(octa);
      break;
    default:console.log("Wrong Input!")
      
  }
}
console.log('Thank You!')
