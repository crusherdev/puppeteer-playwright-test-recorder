!function(n){var e={};function t(I){if(e[I])return e[I].exports;var g=e[I]={i:I,l:!1,exports:{}};return n[I].call(g.exports,g,g.exports,t),g.l=!0,g.exports}t.m=n,t.c=e,t.d=function(n,e,I){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:I})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var I=Object.create(null);if(t.r(I),Object.defineProperty(I,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var g in n)t.d(I,g,function(e){return n[e]}.bind(null,g));return I},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=10)}([,function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.Chrome = chrome;\nexports.Window = window;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy91dGlscy90eXBlcy50cz85ZDUyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1pZ25vcmVcbmV4cG9ydCBjb25zdCBDaHJvbWUgPSBjaHJvbWU7XG5leHBvcnQgY29uc3QgV2luZG93ID0gd2luZG93O1xuIl0sIm1hcHBpbmdzIjoiOzs7OztBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n')},function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.EVENT_CAPTURED = \'EVENT_CAPTURED\';\nexports.START_RECORDING_SESSION = "START_RECORDING_SESSION";\nexports.DELETE_RECORDING_SESSION = "STOP_RECORDING_SESSION";\nexports.SAVE_EVENT = \'SAVE_EVENT\';\nexports.GET_EVENTS = "GET_EVENTS";\nexports.CHECK_SESSION_STATUS = "CHECK_SESSION_STATUS";\nexports.STOP_RECORDING = "STOP_RECORDING";\nexports.GET_CODE = "GET_CODE";\nexports.DEFAULT_VALIDATION_SCRIPT = "function(html, text) {\\n    return text.toLowerCase();\\n}";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMudHM/ODVlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgRVZFTlRfQ0FQVFVSRUQgPSAnRVZFTlRfQ0FQVFVSRUQnO1xuXG5cbi8vIEFjdGlvbnNcbmV4cG9ydCBjb25zdCBTVEFSVF9SRUNPUkRJTkdfU0VTU0lPTiA9IFwiU1RBUlRfUkVDT1JESU5HX1NFU1NJT05cIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfUkVDT1JESU5HX1NFU1NJT04gPSBcIlNUT1BfUkVDT1JESU5HX1NFU1NJT05cIjtcbmV4cG9ydCBjb25zdCBTQVZFX0VWRU5UID0gJ1NBVkVfRVZFTlQnO1xuZXhwb3J0IGNvbnN0IEdFVF9FVkVOVFMgPSBcIkdFVF9FVkVOVFNcIjtcbmV4cG9ydCBjb25zdCBDSEVDS19TRVNTSU9OX1NUQVRVUyA9IFwiQ0hFQ0tfU0VTU0lPTl9TVEFUVVNcIjtcbmV4cG9ydCBjb25zdCBTVE9QX1JFQ09SRElORyA9IFwiU1RPUF9SRUNPUkRJTkdcIjtcbmV4cG9ydCBjb25zdCBHRVRfQ09ERSA9IFwiR0VUX0NPREVcIjtcblxuXG4vLyBTY3JpcHRzXG5leHBvcnQgY29uc3QgREVGQVVMVF9WQUxJREFUSU9OX1NDUklQVCA9IGBmdW5jdGlvbihodG1sLCB0ZXh0KSB7XG4gICAgcmV0dXJuIHRleHQudG9Mb3dlckNhc2UoKTtcbn1gXG4iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n')},function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar types_1 = __webpack_require__(1);\n\nfunction loadScript(name, tabId, cb) {\n  return new Promise(function (resolve, reject) {\n    if (true) {\n      types_1.Chrome.tabs.executeScript(tabId, {\n        file: "/js/" + name + ".js",\n        runAt: \'document_end\'\n      }, function () {\n        resolve(true);\n\n        if (cb) {\n          cb();\n        }\n      });\n    } else {}\n  });\n}\n\nexports.loadScript = loadScript;\n\nfunction loadAssetScript(path, tabId) {\n  return new Promise(function (resolve, reject) {\n    types_1.Chrome.tabschrome.tabs.executeScript(null, {\n      file: "codemirror.js"\n    }, function () {\n      resolve(true);\n    });\n  });\n}\n\nexports.loadAssetScript = loadAssetScript;\n\nfunction getHTMLContentOfTemplate(template, cb) {\n  fetch(types_1.Chrome.runtime.getURL(template + ".html")).then(function (res) {\n    return res.text();\n  }).then(function (res) {\n    if (cb) {\n      cb(res);\n    }\n  });\n}\n\nexports.getHTMLContentOfTemplate = getHTMLContentOfTemplate;\n\nfunction getActiveTabId() {\n  return new Promise(function (resolve, reject) {\n    types_1.Chrome.tabs.query({\n      active: true,\n      currentWindow: true\n    }, function (tabs) {\n      resolve(tabs[0].id);\n    });\n  });\n}\n\nexports.getActiveTabId = getActiveTabId;\n\nfunction sendPostDataWithForm(url, options) {\n  if (options === void 0) {\n    options = {};\n  }\n\n  var form = document.createElement(\'form\');\n  form.method = "post";\n  form.action = url;\n  form.target = "_blank";\n  var optionKeys = Object.keys(options);\n\n  for (var _i = 0, optionKeys_1 = optionKeys; _i < optionKeys_1.length; _i++) {\n    var optionKey = optionKeys_1[_i];\n    var hiddenField = document.createElement(\'input\');\n    hiddenField.type = \'hidden\';\n    hiddenField.name = optionKey;\n    hiddenField.value = options[optionKey];\n    form.appendChild(hiddenField);\n  }\n\n  document.body.appendChild(form);\n  form.submit();\n  form.remove();\n}\n\nexports.sendPostDataWithForm = sendPostDataWithForm;\n\nfunction changeExtensionIcon(icon) {\n  types_1.Chrome.browserAction.setIcon({\n    path: icon\n  });\n}\n\nexports.changeExtensionIcon = changeExtensionIcon;\n\nfunction getSentenceCaseString(str) {\n  return str[0].toUpperCase() + str.slice(1).toLowerCase();\n}\n\nexports.getSentenceCaseString = getSentenceCaseString;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy91dGlscy9oZWxwZXJzLnRzPzI4ZjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hyb21lIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkU2NyaXB0KG5hbWU6IHN0cmluZywgdGFiSWQ6IGFueSwgY2I6IGFueSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBDaHJvbWUudGFicy5leGVjdXRlU2NyaXB0KHRhYklkLCB7IGZpbGU6IGAvanMvJHtuYW1lfS5qc2AsIHJ1bkF0OiAnZG9jdW1lbnRfZW5kJyB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgIGlmKGNiKSB7XG4gICAgICAgICAgY2IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGRldjogYXN5bmMgZmV0Y2ggYnVuZGxlXG4gICAgICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2pzLyR7bmFtZX0uanNgKVxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy50ZXh0KCkpXG4gICAgICAgICAgLnRoZW4oKGZldGNoUmVzKSA9PiB7XG4gICAgICAgICAgICBDaHJvbWUudGFicy5leGVjdXRlU2NyaXB0KHRhYklkLCB7IGNvZGU6IGZldGNoUmVzLCBydW5BdDogJ2RvY3VtZW50X2VuZCcgfSwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgaWYoY2IpIHtcbiAgICAgICAgICAgICAgICBjYigpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZEFzc2V0U2NyaXB0KHBhdGg6IHN0cmluZywgdGFiSWQ6IGFueSl7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+IHtcbiAgICBDaHJvbWUudGFic2Nocm9tZS50YWJzLmV4ZWN1dGVTY3JpcHQobnVsbCwgeyBmaWxlOiBcImNvZGVtaXJyb3IuanNcIiB9LCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICB9KTtcbn0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SFRNTENvbnRlbnRPZlRlbXBsYXRlKHRlbXBsYXRlOiBzdHJpbmcsIGNiOmFueSkge1xuICBmZXRjaChDaHJvbWUucnVudGltZS5nZXRVUkwoYCR7dGVtcGxhdGV9Lmh0bWxgKSlcbiAgICAudGhlbigocmVzKSA9PiByZXMudGV4dCgpKVxuICAgIC50aGVuKChyZXMpID0+IHsgaWYoY2IpIHsgY2IocmVzKTt9IH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWN0aXZlVGFiSWQoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgQ2hyb21lLnRhYnMucXVlcnkoe2FjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZX0sICh0YWJzOiBhbnkpID0+IHtcbiAgICAgIHJlc29sdmUodGFic1swXS5pZCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VuZFBvc3REYXRhV2l0aEZvcm0odXJsOiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KXtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgZm9ybS5tZXRob2QgPSBcInBvc3RcIjtcbiAgZm9ybS5hY3Rpb24gPSB1cmw7XG4gIGZvcm0udGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgY29uc3Qgb3B0aW9uS2V5cyA9IE9iamVjdC5rZXlzKG9wdGlvbnMpO1xuICBmb3IobGV0IG9wdGlvbktleSBvZiBvcHRpb25LZXlzKXtcbiAgICBjb25zdCBoaWRkZW5GaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaGlkZGVuRmllbGQudHlwZSA9ICdoaWRkZW4nO1xuICAgIGhpZGRlbkZpZWxkLm5hbWUgPSBvcHRpb25LZXk7XG4gICAgaGlkZGVuRmllbGQudmFsdWUgPSBvcHRpb25zW29wdGlvbktleV07XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGhpZGRlbkZpZWxkKTtcbiAgfVxuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIGZvcm0uc3VibWl0KCk7XG4gIGZvcm0ucmVtb3ZlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VFeHRlbnNpb25JY29uKGljb246IHN0cmluZyl7XG4gICAgQ2hyb21lLmJyb3dzZXJBY3Rpb24uc2V0SWNvbih7cGF0aDppY29ufSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZW50ZW5jZUNhc2VTdHJpbmcoc3RyOiBzdHJpbmcpe1xuICByZXR1cm4gc3RyWzBdLnRvVXBwZXJDYXNlKCkrc3RyLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBWUE7QUFDQTtBQUNBO0FBQ0E7QUF4QkE7QUFDQTtBQXdCQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkJBO0FBQ0E7QUFtQkE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n')},,function(module,exports,__webpack_require__){eval("/* global __webpack_public_path__ __HOST__ __PORT__ */\n\n/* eslint no-global-assign: 0 camelcase: 0 */\nif (true) {\n  __webpack_require__.p = chrome.extension.getURL('/');\n} else { var path; }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3dlYnBhY2svY3VzdG9tUHVibGljUGF0aC5qcz9jOGUzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyBfX0hPU1RfXyBfX1BPUlRfXyAqL1xuLyogZXNsaW50IG5vLWdsb2JhbC1hc3NpZ246IDAgY2FtZWxjYXNlOiAwICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gY2hyb21lLmV4dGVuc2lvbi5nZXRVUkwoJy8nKTtcbn0gZWxzZSB7XG4gIC8vIEluIGRldmVsb3BtZW50IG1vZGUsXG4gIC8vIHRoZSBpZnJhbWUgb2YgaW5qZWN0cGFnZSBjYW5ub3QgZ2V0IGNvcnJlY3QgcGF0aCxcbiAgLy8gaXQgbmVlZCB0byBnZXQgcGFyZW50IHBhZ2UgcHJvdG9jb2wuXG4gIGNvbnN0IHBhdGggPSBgLy8ke19fSE9TVF9ffToke19fUE9SVF9ffS9qcy9gO1xuICBpZiAobG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwczonIHx8IGxvY2F0aW9uLnNlYXJjaC5pbmRleE9mKCdwcm90b2NvbD1odHRwcycpICE9PSAtMSkge1xuICAgIF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gYGh0dHBzOiR7cGF0aH1gO1xuICB9IGVsc2Uge1xuICAgIF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gYGh0dHA6JHtwYXRofWA7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n")},,,,,function(n,e,t){t(5),n.exports=t(11)},function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar Messages = __webpack_require__(12);\n\nMessages.init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC50cz8xMmQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIE1lc3NhZ2VzIGZyb20gJy4vc2NyaXB0cy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2luZGV4JztcblxuTWVzc2FnZXMuaW5pdCgpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///11\n')},function(module,exports,__webpack_require__){"use strict";eval('\n\nvar __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {\n  function adopt(value) {\n    return value instanceof P ? value : new P(function (resolve) {\n      resolve(value);\n    });\n  }\n\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function rejected(value) {\n      try {\n        step(generator["throw"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function step(result) {\n      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);\n    }\n\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n};\n\nvar __generator = this && this.__generator || function (thisArg, body) {\n  var _ = {\n    label: 0,\n    sent: function sent() {\n      if (t[0] & 1) throw t[1];\n      return t[1];\n    },\n    trys: [],\n    ops: []\n  },\n      f,\n      y,\n      t,\n      g;\n  return g = {\n    next: verb(0),\n    "throw": verb(1),\n    "return": verb(2)\n  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {\n    return this;\n  }), g;\n\n  function verb(n) {\n    return function (v) {\n      return step([n, v]);\n    };\n  }\n\n  function step(op) {\n    if (f) throw new TypeError("Generator is already executing.");\n\n    while (_) {\n      try {\n        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n        if (y = 0, t) op = [op[0] & 2, t.value];\n\n        switch (op[0]) {\n          case 0:\n          case 1:\n            t = op;\n            break;\n\n          case 4:\n            _.label++;\n            return {\n              value: op[1],\n              done: false\n            };\n\n          case 5:\n            _.label++;\n            y = op[1];\n            op = [0];\n            continue;\n\n          case 7:\n            op = _.ops.pop();\n\n            _.trys.pop();\n\n            continue;\n\n          default:\n            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {\n              _ = 0;\n              continue;\n            }\n\n            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {\n              _.label = op[1];\n              break;\n            }\n\n            if (op[0] === 6 && _.label < t[1]) {\n              _.label = t[1];\n              t = op;\n              break;\n            }\n\n            if (t && _.label < t[2]) {\n              _.label = t[2];\n\n              _.ops.push(op);\n\n              break;\n            }\n\n            if (t[2]) _.ops.pop();\n\n            _.trys.pop();\n\n            continue;\n        }\n\n        op = body.call(thisArg, _);\n      } catch (e) {\n        op = [6, e];\n        y = 0;\n      } finally {\n        f = t = 0;\n      }\n    }\n\n    if (op[0] & 5) throw op[1];\n    return {\n      value: op[0] ? op[1] : void 0,\n      done: true\n    };\n  }\n};\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar types_1 = __webpack_require__(1);\n\nvar constants_1 = __webpack_require__(2);\n\nvar store_1 = __webpack_require__(13);\n\nvar helpers_1 = __webpack_require__(3);\n\nfunction handleNewEvent(payload, tabId) {\n  var event_type = payload.event_type,\n      selector = payload.selector,\n      value = payload.value;\n  return store_1.dispatch({\n    type: constants_1.SAVE_EVENT,\n    event_type: event_type,\n    selector: selector,\n    value: value,\n    tabId: tabId\n  });\n}\n\nfunction init() {\n  types_1.Chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {\n    var _this = this;\n\n    if (!!store_1.getState().sessions[tabId]) {\n      types_1.Chrome.tabs.query({\n        active: true,\n        currentWindow: true\n      }, function (tabs) {\n        return __awaiter(_this, void 0, void 0, function () {\n          return __generator(this, function (_a) {\n            switch (_a.label) {\n              case 0:\n                return [4, helpers_1.loadScript(\'inject\', tabs[0].id)];\n\n              case 1:\n                _a.sent();\n\n                return [2];\n            }\n          });\n        });\n      });\n    } else {}\n  });\n  types_1.Chrome.tabs.onActivated.addListener(function (activeInfo) {\n    var tabId = activeInfo.tabId;\n\n    if (!!store_1.getState().sessions[tabId]) {\n      helpers_1.changeExtensionIcon("icons/ongoing_recording.png");\n    } else {\n      helpers_1.changeExtensionIcon("icons/extension_icon.png");\n    }\n  });\n  types_1.Chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {\n    var type = request.type,\n        payload = request.payload;\n\n    switch (type) {\n      case constants_1.START_RECORDING_SESSION:\n        store_1.dispatch({\n          type: constants_1.START_RECORDING_SESSION,\n          tabId: sender.tab.id\n        });\n        helpers_1.changeExtensionIcon("icons/ongoing_recording.png");\n        return sendResponse("Started new session");\n        break;\n\n      case constants_1.DELETE_RECORDING_SESSION:\n        helpers_1.getActiveTabId().then(function (tabId) {\n          store_1.dispatch({\n            type: constants_1.DELETE_RECORDING_SESSION,\n            tabId: tabId\n          });\n          helpers_1.changeExtensionIcon("icons/extension_icon.png");\n          console.log(store_1.getState());\n          sendResponse("Stopped previous session");\n        });\n        return true;\n        break;\n\n      case constants_1.EVENT_CAPTURED:\n        return sendResponse(handleNewEvent(payload, sender.tab.id));\n        break;\n\n      case constants_1.CHECK_SESSION_STATUS:\n        helpers_1.getActiveTabId().then(function (tabId) {\n          sendResponse({\n            isSessionGoingOn: !!store_1.getState().sessions[tabId]\n          });\n        });\n        return true;\n        break;\n\n      case constants_1.GET_EVENTS:\n        helpers_1.getActiveTabId().then(function (tabId) {\n          var events = store_1.getState().events && store_1.getState().events[payload.tabId ? payload.tabId : tabId];\n          return sendResponse(events ? events : []);\n        });\n        return true;\n\n      default:\n        break;\n    }\n  });\n}\n\nexports.init = init;\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9iYWNrZ3JvdW5kL21lc3NhZ2VzL2luZGV4LnRzPzUyZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hyb21lIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdHlwZXMnO1xuaW1wb3J0IHtcbiAgICBDSEVDS19TRVNTSU9OX1NUQVRVUyxcbiAgICBFVkVOVF9DQVBUVVJFRCxcbiAgICBHRVRfRVZFTlRTLFxuICAgIFNBVkVfRVZFTlQsXG4gICAgU1RBUlRfUkVDT1JESU5HX1NFU1NJT04sXG4gICAgREVMRVRFX1JFQ09SRElOR19TRVNTSU9OXG59IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQge2NoYW5nZUV4dGVuc2lvbkljb24sIGdldEFjdGl2ZVRhYklkLCBsb2FkQXNzZXRTY3JpcHQsIGxvYWRTY3JpcHR9IGZyb20gXCIuLi8uLi8uLi91dGlscy9oZWxwZXJzXCI7XG5cbmZ1bmN0aW9uIGhhbmRsZU5ld0V2ZW50KHBheWxvYWQ6IGFueSwgdGFiSWQ6IGFueSl7XG4gICAgY29uc3Qge2V2ZW50X3R5cGUsIHNlbGVjdG9yLCB2YWx1ZX0gID0gcGF5bG9hZDtcbiAgICByZXR1cm4gZGlzcGF0Y2goe3R5cGU6IFNBVkVfRVZFTlQsIGV2ZW50X3R5cGUsIHNlbGVjdG9yLCB2YWx1ZSwgdGFiSWR9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgQ2hyb21lLnRhYnMub25VcGRhdGVkLmFkZExpc3RlbmVyKGZ1bmN0aW9uKHRhYklkOiBhbnksIGNoYW5nZUluZm86IGFueSwgdGFiOiBhbnkpIHtcbiAgICAgICAgaWYoISFnZXRTdGF0ZSgpLnNlc3Npb25zW3RhYklkXSl7XG4gICAgICAgICAgICBDaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCBhc3luYyAodGFiczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIGF3YWl0IGxvYWRTY3JpcHQoJ2luamVjdCcsIHRhYnNbMF0uaWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIENocm9tZS50YWJzLm9uQWN0aXZhdGVkLmFkZExpc3RlbmVyKGZ1bmN0aW9uKGFjdGl2ZUluZm86IGFueSkge1xuICAgICAgICBjb25zdCB7dGFiSWR9ID0gYWN0aXZlSW5mbztcbiAgICAgICAgaWYoISFnZXRTdGF0ZSgpLnNlc3Npb25zW3RhYklkXSkge1xuICAgICAgICAgICAgY2hhbmdlRXh0ZW5zaW9uSWNvbihcImljb25zL29uZ29pbmdfcmVjb3JkaW5nLnBuZ1wiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoYW5nZUV4dGVuc2lvbkljb24oXCJpY29ucy9leHRlbnNpb25faWNvbi5wbmdcIik7XG5cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gIENocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihcbiAgICAocmVxdWVzdDogYW55LCBzZW5kZXI6IGFueSwgc2VuZFJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3Qge3R5cGUsIHBheWxvYWR9ID0gcmVxdWVzdDtcbiAgICAgICAgc3dpdGNoKHR5cGUpe1xuICAgICAgICAgICAgY2FzZSBTVEFSVF9SRUNPUkRJTkdfU0VTU0lPTjpcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogU1RBUlRfUkVDT1JESU5HX1NFU1NJT04sIHRhYklkOiBzZW5kZXIudGFiLmlkfSk7XG4gICAgICAgICAgICAgICAgY2hhbmdlRXh0ZW5zaW9uSWNvbihcImljb25zL29uZ29pbmdfcmVjb3JkaW5nLnBuZ1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKFwiU3RhcnRlZCBuZXcgc2Vzc2lvblwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgREVMRVRFX1JFQ09SRElOR19TRVNTSU9OOlxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBnZXRBY3RpdmVUYWJJZCgpLnRoZW4odGFiSWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogREVMRVRFX1JFQ09SRElOR19TRVNTSU9OLCB0YWJJZDogdGFiSWR9KTtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlRXh0ZW5zaW9uSWNvbihcImljb25zL2V4dGVuc2lvbl9pY29uLnBuZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZ2V0U3RhdGUoKSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZShcIlN0b3BwZWQgcHJldmlvdXMgc2Vzc2lvblwiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRVZFTlRfQ0FQVFVSRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShoYW5kbGVOZXdFdmVudChwYXlsb2FkLCBzZW5kZXIudGFiLmlkKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENIRUNLX1NFU1NJT05fU1RBVFVTOlxuICAgICAgICAgICAgICAgIGdldEFjdGl2ZVRhYklkKCkudGhlbih0YWJJZCA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2Uoe2lzU2Vzc2lvbkdvaW5nT246ICEhZ2V0U3RhdGUoKS5zZXNzaW9uc1t0YWJJZF19KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEdFVF9FVkVOVFM6XG4gICAgICAgICAgICAgICAgZ2V0QWN0aXZlVGFiSWQoKS50aGVuKHRhYklkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXZlbnRzID0gZ2V0U3RhdGUoKS5ldmVudHMgJiYgZ2V0U3RhdGUoKS5ldmVudHNbcGF5bG9hZC50YWJJZCA/IHBheWxvYWQudGFiSWQgOiB0YWJJZF07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UoZXZlbnRzID8gZXZlbnRzIDogW10pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSxcbiAgKTtcbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFFQTtBQUNBOztBQURBO0FBQ0E7Ozs7QUFIQTtBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckNBO0FBdUNBO0FBRUE7QUFDQTtBQWxFQTtBQWlFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///12\n')},function(module,exports,__webpack_require__){"use strict";eval('\n\nvar __assign = this && this.__assign || function () {\n  __assign = Object.assign || function (t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n      s = arguments[i];\n\n      for (var p in s) {\n        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\n      }\n    }\n\n    return t;\n  };\n\n  return __assign.apply(this, arguments);\n};\n\nvar __spreadArrays = this && this.__spreadArrays || function () {\n  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {\n    s += arguments[i].length;\n  }\n\n  for (var r = Array(s), k = 0, i = 0; i < il; i++) {\n    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {\n      r[k] = a[j];\n    }\n  }\n\n  return r;\n};\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar constants_1 = __webpack_require__(2);\n\nvar state = {\n  events: {},\n  sessions: {}\n};\n\nfunction dispatch(action) {\n  var _a, _b, _c, _d;\n\n  var type = action.type;\n\n  switch (type) {\n    case constants_1.START_RECORDING_SESSION:\n      var tabId = action.tabId;\n      return state = __assign(__assign({}, state), {\n        sessions: __assign(__assign({}, state.sessions), (_a = {}, _a[tabId] = true, _a))\n      });\n      break;\n\n    case constants_1.DELETE_RECORDING_SESSION:\n      var tabId = action.tabId;\n      return state = __assign(__assign({}, state), {\n        events: __assign(__assign({}, state.events), (_b = {}, _b[tabId] = [], _b)),\n        sessions: __assign(__assign({}, state.sessions), (_c = {}, _c[tabId] = false, _c))\n      });\n      break;\n\n    case constants_1.SAVE_EVENT:\n      var event_type = action.event_type,\n          selector = action.selector,\n          value = action.value,\n          tabId = action.tabId;\n      return state = __assign(__assign({}, state), {\n        events: __assign(__assign({}, state.events), (_d = {}, _d[tabId] = __spreadArrays(state.events[tabId] ? state.events[tabId] : [], [{\n          event_type: event_type,\n          selector: selector,\n          value: value\n        }]), _d))\n      });\n      break;\n\n    default:\n      break;\n  }\n}\n\nexports.dispatch = dispatch;\n\nfunction getState() {\n  return state;\n}\n\nexports.getState = getState;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9iYWNrZ3JvdW5kL3N0b3JlLnRzPzA3NDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTQVZFX0VWRU5ULCBTVEFSVF9SRUNPUkRJTkdfU0VTU0lPTiwgU1RPUF9SRUNPUkRJTkcsIERFTEVURV9SRUNPUkRJTkdfU0VTU0lPTn0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxubGV0IHN0YXRlOiBhbnkgPSB7XG4gIGV2ZW50czoge30sXG4gIHNlc3Npb25zOiB7fVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BhdGNoKGFjdGlvbjogYW55KSB7XG4gIGNvbnN0IHsgdHlwZSB9ID0gYWN0aW9uO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgU1RBUlRfUkVDT1JESU5HX1NFU1NJT046XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBjb25zdCB7dGFiSWR9ID0gYWN0aW9uO1xuICAgICAgcmV0dXJuIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2Vzc2lvbnM6IHsuLi5zdGF0ZS5zZXNzaW9ucywgW3RhYklkXTogdHJ1ZX1cbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgREVMRVRFX1JFQ09SRElOR19TRVNTSU9OOlxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgY29uc3Qge3RhYklkfSA9IGFjdGlvbjtcbiAgICAgIHJldHVybiBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGV2ZW50czogey4uLnN0YXRlLmV2ZW50cywgW3RhYklkXTogW119LFxuICAgICAgICBzZXNzaW9uczogey4uLnN0YXRlLnNlc3Npb25zLCBbdGFiSWRdOiBmYWxzZX1cbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgU0FWRV9FVkVOVDpcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGNvbnN0IHtldmVudF90eXBlLCBzZWxlY3RvciwgdmFsdWUsIHRhYklkfSA9IGFjdGlvbjtcbiAgICAgIHJldHVybiBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGV2ZW50czoge1xuICAgICAgICAgIC4uLnN0YXRlLmV2ZW50cyxcbiAgICAgICAgICBbdGFiSWRdOiBbXG4gICAgICAgICAgICAuLi4oc3RhdGUuZXZlbnRzW3RhYklkXSA/IHN0YXRlLmV2ZW50c1t0YWJJZF0gOiBbXSksXG4gICAgICAgICAgICB7ZXZlbnRfdHlwZSwgc2VsZWN0b3IsIHZhbHVlfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxufVxuXG4vLyBAdHMtaWdub3JlXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBU0E7QUFDQTtBQUFBO0FBQ0E7QUFqQ0E7QUFtQ0E7QUFDQTtBQXZDQTtBQUNBO0FBd0NBO0FBQ0E7QUFDQTtBQUNBO0FBSEEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///13\n')}]);