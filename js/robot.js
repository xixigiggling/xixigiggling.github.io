window.onload = function () {
    var right = false,
        left = false,
        top = false,
        bottom = false,
        robot = document.querySelector(".robot");
    //若全为10呢？？？    
    setInterval(function() {
      if(right) {
        robot.style.left = robot.offsetLeft+10+"px";
      }
      else if(left) {
        robot.style.left = robot.offsetLeft-10+"px";
      }
      if(top) {
        robot.style.top = robot.offsetTop-15+"px";
        setTimeout(function(){
          robot.style.top = robot.offsetTop+15+"px";
        },80);
      }
      // else if(bottom) {
      //   robot.style.top = robot.offsetTop+10+"px";
      // }
      //撞墙
      limit();
    }, 30);   
    document.onkeydown = function(event) {
      var event = event || window.event;
      switch (event.keyCode) {
        case 37: left = true; break;
        case 39: right = true; break;
        case 38: top = true; break;
        case 40: bottom = true; break;
      }
      return false;
    }
    document.onkeyup = function(event) {
      var event = event || window.event;
      switch (event.keyCode) {
        case 37: left = false; break;
        case 39: right = false; break;
        case 38: top = false; break;
        case 40: bottom = false;break;
      } 
    }
    //防止溢出
    function limit() {
      var doc = [document.documentElement.clientWidth, document.documentElement.clientHeight]
      //防止左侧溢出
      robot.offsetLeft <=0 && (robot.style.left = 0);
      //防止顶部溢出
      robot.offsetTop <=0 && (robot.style.top = 0);
      //防止右侧溢出
      doc[0] - robot.offsetLeft - robot.offsetWidth <= 0 && (robot.style.left = doc[0] - robot.offsetWidth + "px");
      //防止底部溢出
      doc[1] - robot.offsetTop - robot.offsetHeight <= 0 && (robot.style.top = doc[1] - robot.offsetHeight + "px")
    }
  }