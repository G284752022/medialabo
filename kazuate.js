// 答え
let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）' + kotae);

//入力回数
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを削除する
// 代わりにここではボタンを押したら hantei(); を呼び出すイベント処理をする
hantei();

// ボタンを押した後の処理をする関数 hantei(); の定義
function hantei(){
    // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
    let yoso = 4;

    // 課題3-1: 正解判定にする
    // kotae と yoso が一致するかどうか調べて結果を出力する
    // 課題3-1における出力先はコンソール

    console.log(kaisu + 1 + "回目の予想: ");

    kaisu = kaisu + 1;
    if(yoso === kotae){
        let spankaisu = document.querySelector('span#kaisu');
        spankaisu.textContent = kaisu;
        let spananswer = document.querySelector('span#answer');
        spananswer.textContent = yoso;
        let result = document.querySelector('p#result');
        result.textContent = "正解です。おめでとう！";
    }else if(kaisu > 4){
        let spankaisu = document.querySelector('span#kaisu');
        spankaisu.textContent = kaisu;
        let spananswer = document.querySelector('span#answer');
        spananswer.textContent = yoso;
        let result = document.querySelector('p#result');
        result.textContent = "答えは" + kotae + "でした。すでにゲームは終わっています。";
    }else if(yoso !== kotae){
        if(yoso > kotae){
            let spankaisu = document.querySelector('span#kaisu');
            spankaisu.textContent = kaisu;
            let spananswer = document.querySelector('span#answer');
            spananswer.textContent = yoso;
            let result = document.querySelector('p#result');
            result.textContent = "まちがい。答えはもっと小さいです。";
        }else{
            let spankaisu = document.querySelector('span#kaisu');
            spankaisu.textContent = kaisu;
            let spananswer = document.querySelector('span#answer');
            spananswer.textContent = yoso;
            let result = document.querySelector('p#result');
            result.textContent = "まちがい。答えはもっと大きいです。";
        }
    }
}