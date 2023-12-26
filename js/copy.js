document.querySelector("#copyButton").addEventListener("click", function () {
  var range = document.createRange();
  range.selectNode(document.querySelector("#copyText"));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  alert("Текст скопирован в буфер обмена!");
});
