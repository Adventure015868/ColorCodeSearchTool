const text=document.querySelector("#colorText");

const color=document.querySelector("#colorPicker");

//カラーピッカーを操作した時の一連の動作
const colorBg=()=>{
    //選択した色を背景色に設定
    document.body.style.backgroundColor=color.value;

    //カラーコードを表示
    if(color.value==="#ffffff"){
        //白色が選択されたとき
        text.textContent="カラーコード:"+color.value(white);
    } else if(color.value==="#000000"){
        //黒色が選択されたとき
        text.textContent="カラーコード:"+color.value(black);
    } else{
        //白色が選択されなかったとき
        text.textContent="カラーコード:"+color.value;
    }
    /*その他の書き方
    text.textContent=`カラーコード:${color.value}`;
    このようにバックティックで囲み、＋の後を${}で囲む */
}

//カラーピッカーが変更されたら関数colorBgを発動させる
color.addEventListener("input",colorBg);