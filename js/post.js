"use strict";

(function () {
    var get = function (selector) {
        return document.querySelector(selector);
    };

    window.onload = function () {
        //监听滚动，显示goTop
        window.onscroll = function () {
            //有了目录，直接就goTop功能多余了去掉
            // var t = document.documentElement.scrollTop || document.body.scrollTop; 
            // // var goBack_div = document.getElementById( "js-goBack" ),
            // //     goTop_div = document.getElementById( "js-goTop" );
            // var  goTop_div = document.getElementById( "js-goTop" );

            // if( t >= 2400 ) {
            //   // goBack_div.style.display = "none";
            //   goTop_div.style.display = "block";
            // } else {
            //   // goBack_div.style.display = "block";
            //   goTop_div.style.display = "none";
            // }
            updateCurrTitle();
            syncToc();
        };

        //获取所有的标题
        var article = get(".markdown-body");
        var targetNodeName = ["H2", "H3", "H4", "H5", "H6"];
        var titleList = [];
        var tocLevel2List = document.getElementsByClassName("toc-level-2");
        var tocLinkList = document.getElementsByClassName("toc-link");

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

        // titleList.forEach( function(elem) {
        //   console.log(elem);
        //   //得到内容
        //   elem.getAttribute('id')
        //   //打印出elem发现只需要取出其中的a元素和textValueji可
        // });
        //得到a元素
        // console.log(titleList[1].children[0]);
        //给a元素加上内容
        // var title = titleList[1].textContent;
        // titleList[1].children[0].innerHTML = title;
        // for(let i=0; i<titleList.length; i++) {
        //   if()
        // }
        // for(let elem of titleList ) {
        // }

        {
            var markTocLink = function markTocLink(tocChild) {
                var links = tocChild.getElementsByClassName("toc-link");
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = links[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var item = _step3.value;

                        item.dataTocChild = tocChild;
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
                            _iterator3["return"]();
                        }
                    } finally {
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }
            };
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = tocLevel2List[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var item = _step3.value;
                    var _iteratorNormalCompletion4 = true;
                    var _didIteratorError4 = false;
                    var _iteratorError4 = undefined;

                    try {
                        for (var _iterator4 = item.children[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                            var child = _step4.value;

                            if (child.classList.contains("toc-child")) {
                                markTocLink(child);
                            }
                        }
                    } catch (err) {
                        _didIteratorError4 = true;
                        _iteratorError4 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
                                _iterator4["return"]();
                            }
                        } finally {
                            if (_didIteratorError4) {
                                throw _iteratorError4;
                            }
                        }
                    }
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
                        _iterator3["return"]();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        }

        // 更新正在阅读的目录标题的方法
        var currTitle = null;
        var updateCurrTitle = function updateCurrTitle() {
            for (var i = 0, len = titleList.length; i < len; i++) {
                if (i === len - 1) {
                    currTitle = titleList[len - 1];
                    return;
                }

                var itemRect = titleList[i].getBoundingClientRect(),
                    nextItemRect = titleList[i + 1].getBoundingClientRect();
                if (itemRect.top - 15 > 0) {
                    if (i === 0) {
                        currTitle = titleList[i];
                        return;
                    }
                } else if (itemRect.top - 15 < 0) {
                    if (nextItemRect.top - 15 > 0) {
                        currTitle = titleList[i];
                        return;
                    }
                }
            }
            console.warn("目录更新失败");
        };

        // 同步目录阅读位置的方法
        var syncToc = function syncToc() {
            var titleId = currTitle.id;
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
                for (var _iterator5 = tocLinkList[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var tocLink = _step5.value;

                    if (tocLink.getAttribute("href") === "#" + titleId) {
                        tocLink.classList.add("active");
                        if (lastTocLink && lastTocLink !== tocLink) {
                            lastTocLink.classList.remove("active");
                        }
                        lastTocLink = tocLink;
                        if (lastTocChild && lastTocChild !== tocLink.dataTocChild) {
                            lastTocChild.classList.remove("active");
                        }
                        if (tocLink.dataTocChild) {
                            tocLink.dataTocChild.classList.add("active");
                            lastTocChild = tocLink.dataTocChild;
                        }
                        break;
                    }
                }
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion5 && _iterator5["return"]) {
                        _iterator5["return"]();
                    }
                } finally {
                    if (_didIteratorError5) {
                        throw _iteratorError5;
                    }
                }
            }
        };

        // 记录目录状态
        var lastTocChild = null;
        var lastTocLink = null;

        // copyLinkElem(".menu", title);
        updateCurrTitle();
        syncToc();

        //准备的复制a元素的函数，几乎没用上。。。
        function copyLinkElem(hook, title, className) {
            var linkElem = document.createElement("a");
            var parent = get(hook);
            linkElem.setAttribute("href", title);
            linkElem.innerHTML = title;
            if (Array.isArray(className)) {
                className.forEach(function (elem) {
                    linkElem.addClass(elem);
                });
            } else if (className != null) {
                linkElem.addClass(className);
            }
            parent.appendChild(linkElem);
        }
    };
})();