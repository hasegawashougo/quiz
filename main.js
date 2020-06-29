let que = document.getElementById("que");
let res = document.getElementById("res");
let mon = document.getElementById("monndai");
let A = document.getElementById("A");
let B = document.getElementById("B");
let cnt = 40;
let sco = 0;
let flag = true;
//タイマー処理
let time = setInterval(() => {
  if (cnt > 0) {
    cnt--;
    res.textContent = "スコア：" + sco + "｜時間：" + cnt + "秒";
  } else {
    res.textContent = "スコア：" + sco + "｜終了";
    que.textContent = "時間切れ！";
    flag = false;
    clearInterval(time);
  }
}, 1000);
let num = 0;
let max = 10;
let seikai = new Array(max);
seikai = ["A", "C", "D", "B", "B", "A", "C", "A", "D", "D"];

A.addEventListener("click", () => {
  answer("A");
});

B.addEventListener("click", () => {
  answer("B");
});

C.addEventListener("click", () => {
  answer("C");
});

D.addEventListener("click", () => {
  answer("D");
}); //選択肢を増やしました

let answer = (str) => {
  if (flag) {
    if (seikai[num] == str) {
      que.textContent = "問題" + (num + 1) + "正解";
      sco++;
      res.textContent = "スコア：" + sco + "｜時間：" + cnt + "秒";
    } else {
      console.log("不正解");
      que.textContent = "問題" + (num + 1) + "不正解";
    }
    num++;
    if (num < max) {
      flag = false;
      setTimeout(() => {
        flag = true; //flagを0.5秒falseにすることでクリック連打に対処しました
        que.textContent = "問題" + (num + 1);
        mon.src = "img/" + num + ".png";
      }, 500);
    } else {
      que.textContent = "問題の回答終了！";
      if (sco == max) {
        que.textContent = "全問正解！やば。！！！！";
        mon.src = "img/clear.png";
      }
      flag = false;
      clearInterval(time);
    }
  }
}; //関数でまとめました
