window.onload = function() {
  document.querySelector("#js_show_wechat").onclick = function() {
    console.log('enter');
    var wechatImg = document.querySelector(".wechat-public-wrapper");
    if(wechatImg.style.display === 'none' || !wechatImg.style.display) {
      wechatImg.style.display = 'inline-block';
    }
    else wechatImg.style.display = 'none';
  }
}