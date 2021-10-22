'use strict';

const onClickAdd = () => {
  const inputText = document.getElementById("add_text").value;
  document.getElementById('add_text').value = '';

  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById('incomplete_list').removeChild(target);
}

//未完了リストに追加する関数
const createIncompleteList = (text) => {

  //div生成・DOM作り
const div = document.createElement('div');
div.className = "list_row";

//liタグ生成
const li = document.createElement('li');
li.textContent = text;
// console.log(li);

//button(完了)タグ生成
const completeButton = document.createElement('button');
completeButton.textContent = '完了';

completeButton.addEventListener('click', () => {
  const addTarget = completeButton.parentNode;
  const text = addTarget.firstElementChild.innerText;
  
  addTarget.textContent = null;
  const li = document.createElement('li');
  li.innerText = text;
  
  // button(戻す)生成
  const backButton = document.createElement('button');
  backButton.innerText = '戻す';
  
  backButton.addEventListener('click', () => {
    const deleteTarget = backButton.parentNode;
    document.getElementById('complete_list').removeChild(deleteTarget);

    //テキストを取得
    const text = backButton.parentNode.firstElementChild.innerText;
    createIncompleteList(text)
  });

  addTarget.appendChild(li);
  addTarget.appendChild(backButton);
  console.log(addTarget);

  //完了リストに追加
  const complete = document.getElementById('complete_list');
  complete.appendChild(addTarget);
});

//button(削除)タグ生成
const deleteButton = document.createElement('button');
deleteButton.textContent = '削除';

deleteButton.addEventListener('click', () => {
 deleteFromIncompleteList(deleteButton.parentNode);
});

//divタグの下にliタグ, buttonタグを付ける
div.appendChild(li);
div.appendChild(completeButton);
div.appendChild(deleteButton);

//未完了リストにdivを付ける
document.getElementById('incomplete_list').appendChild(div);
}

document.getElementById('add_button').addEventListener('click', () => onClickAdd());