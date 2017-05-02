window.addEventListener("load",function () {

  document.getElementById("f_64ff90b57b6fe611925d08195d08b279").onblur = formatInput;
});

function formatInput() {
  var str = this.value.trim().replace(/\d/g, "").toLowerCase().replace(/\b\w/g, function(match) {
    return match.toUpperCase() + match.substring(1);
  });
  this.value = str;
}
