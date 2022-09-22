const quiz =[
  {
    id:1,
    score:2,
    question : "Q1: バスや電車を使って１人で外出できますか",
    answers : [
    "はい",
    "いいえ",
  ],
  correct:"いいえ",
  },{
    id:2,
    score:3,
    question : "Q2: 日用品の買い物ができますか",
    answers : [
      "はい",
      "いいえ",
    ],
    correct:"いいえ",
  },{
    id:3,
    score:2,
    question : "Q3: 預貯金の出し入れが自分でできますか",
    answers : [
      "はい",
      "いいえ",
    ],
    correct:"いいえ",
  },{
    id:4,
    score:3,
    question : "Q4: 階段を手すりや壁を伝わらずに登っていますか",
    answers : [
      "はい",
      "いいえ",
    ],
    correct:"いいえ",
  },{
    id:5,
    score:2,
    question : "Q5: 椅子に座った状態から何もつかまらずに立ち上がっていますか",
    answers : [
      "はい",
      "いいえ",
    ],
    correct:"いいえ",
  },{
    id:6,
    score:1,
    question : "Q6: 15分くらい続けて歩いていますか",
    answers : [
      "はい",
      "いいえ",
    ],
    correct:"いいえ",  
  },{
    id:7,
    score:2,
    question : "Q7: この１年間に転んだことがありますか",
    answers : [
      "はい",
      "いいえ",
    ],
    correct:"はい",
  },{
    id:8,
    score:2,
    question : "Q8: 転倒に対する不安は大きいですか",
    answers : [
      "はい",
      "いいえ",
    ],
    correct:"はい",
  },{
    id:9,
    score:3,
    question : "Q9: 昨年と比べて外出の回数が減っていますか",
    answers : [
      "はい",
      "いいえ",
    ],
    correct:"はい",
  },{
    id:10,
    score:1,
    question : "Q10: 性別を教えてください",
    answers : [
      "男性",
      "女性",
    ],
    correct:"男性",
  }
]

const quiz2 =   
    {
      id:11,
      question : "Q11: 身長と体重はいくつですか"
    }
  

  const quiz3 = 
    {
      id:12,
      question : "Q12: 年齢はいくつですか"
    }
  
  const age_list =[
    {  
    get_age:65, 
    age_score:0
  },{ 
    get_age:66,  
    age_score:0
  },{ 
    get_age:67,  
    age_score:1
  },{ 
    get_age:68,  
    age_score:1
  },{ 
    get_age:69,  
    age_score:2
  },{ 
    get_age:70,  
    age_score:3
  },{ 
    get_age:71,  
    age_score:5
  },{ 
    get_age:72,  
    age_score:6
  },{ 
    get_age:73,  
    age_score:7
  },{ 
    get_age:74,  
    age_score:9
  },{ 
    get_age:75,  
    age_score:10
  },{ 
    get_age:76,  
    age_score:10
  },{ 
    get_age:77,  
    age_score:11
  },{ 
    get_age:78,  
    age_score:12
  },{ 
    get_age:79,  
    age_score:14
  },{ 
    get_age:80,  
    age_score:15
  },{ 
    get_age:81,  
    age_score:17
  },{ 
    get_age:82,  
    age_score:18
  },{ 
    get_age:83,  
    age_score:18
  },{ 
    get_age:84,  
    age_score:20
  },{ 
    get_age:85,  
    age_score:20
  },{ 
    get_age:86,  
    age_score:21
  },{ 
    get_age:87,  
    age_score:23
  },{ 
    get_age:88,  
    age_score:23
  },{ 
    get_age:89,  
    age_score:23
  },{ 
    get_age:90,  
    age_score:24
  }
] 
 
  





const $btn_list = document.getElementById('button-list');
const quizLength = quiz.length;
let quizIndex = 0;
let quiz2Index = 0;
let total = 0;
const $button = document.getElementsByTagName('button');
let buttonLength = $button.length;
const $age = document.getElementById('age');
const $result = document.getElementById('result');
const $result_btn = document.getElementById('result_btn');
const $dummyForm = document.getElementById('dummy-form');
const $dummyBtn = document.getElementById('dummy-btn');
const $get_height = document.getElementById('height');
const $get_weight = document.getElementById('weight');

const $input2 = document.createElement('input');
  $input2.setAttribute("type","text");
  $input2.setAttribute("placeholder","例：体重をキログラムでご入力ください");


const $input1 = document.createElement('input');
  $input1.setAttribute("type","text");
  $input1.setAttribute("placeholder","例：身長をメートルでご入力ください");

const $next_btn = document.createElement('div');
$next_btn.setAttribute("class","next_btn");
const $btn_next_text = document.createTextNode('次へ');
$next_btn.appendChild($btn_next_text);



//クイズ問題文、選択肢を定義
const setupQuiz = () =>{
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();

const setupQuiz2 = () =>{
  document.getElementById('js-question').textContent = quiz2.question;
  $get_height.style.display = 'block';
  $get_weight.style.display = 'block';
  $btn_list.appendChild($next_btn);
  $button[1].style.display = 'none';
  $button[0].style.display = 'none';

  next_click();
}

const setupQuiz3 = () =>{
  document.getElementById('js-question').textContent = quiz3.question;
  $get_height.style.display = 'none';
  $get_weight.style.display = 'none';
  $next_btn.style.display = 'none';
  $age.style.display = 'block';
  $dummyForm.style.display = 'block';
  result_click();
}




//eはイベント（今回はクリックイベント）でそのオブジェクトのtarget（今クリックされたボタンを表す）を指す
 const clickHandler = (e)=>{
    e.target.classList.add('click-hilight');
    new Promise((result)=>{
      setTimeout(()=>{
        e.target.classList.remove('click-hilight');
        result();
      },100);
    }).then(()=>{
      if(quiz[quizIndex].correct === e.target.textContent){
        total += quiz[quizIndex].score;
        console.log(total);
      }
       quizIndex++;
       if(quizIndex < quizLength){
         setupQuiz();
       }else{
         setupQuiz2();
       }
    });
 }



 //クリックしたら正誤判定
 let handleIndex = 0;
 while(handleIndex < buttonLength){
   $button[handleIndex].addEventListener('click',(e)=>{     
    clickHandler(e);
 });
 handleIndex++;
 }



 const next_click = () =>{
   $next_btn.addEventListener('click',()=>{
    if($get_height.value !== 'null' && $get_weight.value !== 'null'){
      const height = $get_height.value; 
      const weight = $get_weight.value;
      const bmi = weight / height /height;
      if(bmi < 18.5){
        total += 3;       
      }
      setupQuiz3(); 
    }else{
      window.alert('値を選択してください');
      console.log($get_height.value);
      console.log($get_weight.value);
    }
   });
 }

 const result_click = () => {
  $dummyBtn.addEventListener('click',(e)=>{
    if($age.value === 'null' ){
      window.alert('年齢を選択してください');
    }else{
      total += age_list[$age.value].age_score;
      sessionStorage.setItem('getTotal',total);
      actAge = parseInt($age.value);
      sessionStorage.setItem('getAge',actAge + 65);
      $result_btn.click();
    }
   });
 }


