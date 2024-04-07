// 変数の初期化
let untyped = '';
let typed = '';

// 必要なHTML要素の取得
const untypedfield = document.getElementById('untyped');
const typedfield = document.getElementById('typed');
const wrap = document.getElementById('wrap');
const start = document.getElementById('start'); 
const count= document.getElementById('count');
const typecount = document.getElementById('typecount');
let score = 0;

// 複数のテキストを格納する配列
const textList =[
    'Hello World',
    'I Love JavaScript!',
    'Let it be',
    'Samurai',
    'Good Afternoon',
    'I want to be a programmer',
    'What day is today?',
    'I want to build a web app',
    'Nice to meet you',
    'Chrome Firefox Edge Safari',
    'machine learning',
    'Brendan Eich',
    'John Resig',
    'React Veu Anguler',
    'Netscape Communications',
    'undefined null NaN',
    'Thank you very much',
    'Google Apple Facebook Amazon',
    'ECMAScript',
    'consol.log',
    'for while if switch',
    'var let const',
    'Windows Mac Linux iOS Android',
];

// ランダムなテキストを表示
    const createText =() =>{
    // 正タイプした文字列をクリア
    typed = '';
    typedfield.textContent =typed;

    let random =Math.floor(Math.random()*textList.length);
    untyped =textList[random];
    untypedfield.textContent =untyped;
};

// キー入力の判定
function keyPress(e) {

    // 誤タイプの場合
    if (e.key !== untyped.substring(0, 1)) {
        console.log(e.key);
        wrap.classList.add('mistyped');
        setTimeout(() => {
            wrap.classList.remove('mistyped');
        }, 100);
        return;
    };
    
console.log(score);
    // 正タイプの場合
    if (e.key == untyped.substring(0, 1)) {
        score++;
        wrap.classList.remove('mistyped');
        typed += untyped.substring(0, 1);
        untyped = untyped.substring(1);
        typedfield.textContent = typed;
        untypedfield.textContent = untyped;
    };
        //文字数カウント
        const typecountup = () => {
            typecount.textContent =score;
} 
    typecountup();
    // テキストがなくなったら新しいテキストを表示
    if (untyped === '') {
        createText();
    }
}


// タイピングスキルのランクを判定
const rankCheck = score =>{
    let text = '';
    if(score <100){
        text = `あなたのランクはCです。\nBランクまであと${100 - score}文字です。`;
    }else if(score <200){
        text = `あなたのランクはBです。\nAランクまであと${200 - score}文字です。`;
    }else if(score <300){
        text = `あなたのランクはAです。\nSランクまであと${300 - score}文字です。`;
    }else if(score <=300){
        text = `あなたのランクはSです。\nSおめでとうございます!`
    }
    return `${score}文字打てました！\n${text}\n【OK】リトライ【キャンセル】終了`;
};

    // ゲームを終了
    const gameOver = id => {
        clearInterval(id);

        const result = confirm(rankCheck(score));
        if(result == true){
            window.location.reload();
        }
    };


// カウントダウンタイマー
const timer = () => {
    let time =count.textContent;
    const id = setInterval(() =>{
    time = time - 1;
    count.textContent = time;
    if(time <= 0){
        clearInterval(id);
        gameOver(id);
    }
}, 1000);
};



// ゲームスタート時の処理
start.addEventListener('click',() =>{
timer();
createText();
start.style.display = 'none';
document.addEventListener('keypress', keyPress);
})

untypedfield.textContent = 'スタートボタンで開始';