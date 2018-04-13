"use strict";

(function () {
  window.onscroll = function () {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    // var goBack_div = document.getElementById( "js-goBack" ),
    //     goTop_div = document.getElementById( "js-goTop" );
    var goTop_div = document.getElementById("js-goTop");

    if (t >= 2400) {
      // goBack_div.style.display = "none";
      goTop_div.style.display = "block";
    } else {
      // goBack_div.style.display = "block";
      goTop_div.style.display = "none";
    }
  };

  window.onload = function () {
    var article = document.querySelector(".markdown-body");
    var targetNodeName = ["H2", "H3", "H4", "H5", "H6"];
    var titleList = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = article.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = targetNodeName[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var nodeName = _step2.value;

            if (item.nodeName === nodeName) {
              titleList.push(item);
              break;
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
              _iterator2["return"]();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"]) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    titleList.forEach(function (elem) {
      console.log(elem);
    });
  };
})();