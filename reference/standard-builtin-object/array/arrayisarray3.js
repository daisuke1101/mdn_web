var iframe = document.createElement('iframe');
document.body.appendChild(iframe);
xArray = window.frames[window.frames.length-1].Array;
var arr = new xArray(1,2,3);  // [1,2,3]

// Arrayを正確にチェックできる
Array.isArray(arr);
// iframesで動作しないため有害
arr instanceof Array;