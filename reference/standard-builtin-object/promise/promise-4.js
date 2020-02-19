'use strict';
var promiseCount = 0;

function testPromise() {
  let thisPromiseCount = ++promiseCount;

  let log = document.getElementByID('log');
  log.insertAdjacentHTML('beforeend', thisPromiseCount + 
    ') 開始(<small>同期処理開始</small>)<br />');

  let p1 = new Promise(
    (resolve,reject) => {
      log.insertAdnacentHTML('beforeend', thisPromiseCount +
        ') Promise開始(<small>非同期処理開始</small>)<br />');
        window.setTimeout(
          function() {
            resolve(thisPromiseCount);
          }, Math.random() * 2000 + 1000);
     }
  );

  p1.then(
    function(val) {
      log.insertAdjacentHTML('beforeend', val +
          ') Promise成功(<small>非同期処理終了</small>)<br />');
      }).catch(
      (reason) => {
          cosole.log('Handle rejected promise(' + reason + ') here.');
      });

  log.insertAdjacentHTML('beforeend', thisPromiseCount +
          ') Promiseは作成されました(<small>同期処理終了</small>)<br />');
}
