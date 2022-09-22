const total = sessionStorage.getItem('getTotal');
const age = sessionStorage.getItem('getAge');

console.log(total);
console.log(age);

const ageTable = {
  65:3.1,
  66:3.2,
  67:4.3,
  68:4.3,
  69:6.4,
  70:7.4,
  71:9.6,
  72:10.7,
  73:13.0,
  74:14.2,
  75:16.3,
  76:16.4,
  77:17.7,
  78:19.0,
  79:20.3,
  80:22.6,
  81:23.9,
  82:25.4,
  83:25.5,
  84:27.7,
  85:28.2,
  86:29.3,
  87:29.6,
  88:31.5,
  89:31.7,
  90:33.7,
}

const riskTable = {
  0:1,
  1:1,
  2:1,
  3:1,
  4:1,
  5:1,
  6:1,
  7:2,
  8:2,
  9:3,
  10:3,
  11:4,
  12:5,
  13:6,
  14:6,
  15:7,
  16:8,
  17:10,
  18:11,
  19:12,
  20:13,
  21:15,
  22:16,
  23:18,
  24:20,
  25:21,
  26:23,
  27:25,
  28:27,
  29:29,
  30:31,
  31:34,
  32:36,
  33:38,
  34:41,
  35:43,
  36:46,
  37:49,
  38:51,
  39:54,
  40:57,
  41:60,
  42:63,
  43:67,
  44:70,
  45:73,
  46:73,
  47:73,
  48:73,
}

let yourAveScore = 0;
let yourRisk = 0;


const genkidoCalc = () =>{
  for(key1 in ageTable){
    if(key1 === age ){
      yourAveScore = ageTable[key1];
    }
  }

  return round = (Math.round((48 - total)/(48 - yourAveScore)*1000))/10;
}

genkido = genkidoCalc()

document.getElementById('scoreResult').textContent = 'あなたの元気度は'+ genkido + 'スマイルです';

const $over104 = document.getElementById('over104')
const $under84 = document.getElementById('under84');
const $85To103 = document.getElementById('85To103');


const resultText= (genkido) =>{
  if(genkido >= 104){        
    $over104.style.display = 'block';
}else if(genkido <= 84){   
   $under84.style.display = 'block';
}else{    
    $85To103.style.display = 'block';
}
}

resultText(genkido);




 const riskCalc = () =>{
   for(key2 in riskTable ){
     if(key2 === total){
     return riskTable[key2];
    }
  }
}

yourRisk = riskCalc();
document.getElementById('riskResult').textContent = '3年後の要支援・要介護リスク尺度は'+ yourRisk + '％です';