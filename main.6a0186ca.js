parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=r(e))){var n=0,t=function(){};return{s:t,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o,i=!0,c=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==a.return||a.return()}finally{if(c)throw o}}}}function n(e){return o(e)||a(e)||r(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,n){if(e){if("string"==typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(e,n):void 0}}function a(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return i(e)}function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var c=document.querySelector("body"),l=document.querySelector("table"),s=document.querySelector("tbody"),u=l.querySelector("thead"),d=n(s.rows);function f(e){for(var n="",t=0;t<=e.length;t++)isNaN(+e[t])||(n+=e[t]);return+n}var m=function(e,n,t,r,a){var o=document.createElement("div");o.setAttribute("data-qa","notification"),o.classList.add("notification"),o.classList.add(a),o.innerHTML="\n    <h2 class='title'>".concat(t,"</h2>\n    <p>").concat(r,"</p>\n  "),o.style.top="".concat(e,"px"),o.style.right="".concat(n,"px"),c.append(o),setTimeout(function(){o.style.display="none"},5e3)},p="";u.addEventListener("click",function(t){var r=t.target;if(r){var a=n(document.querySelectorAll("th")).findIndex(function(e){return e.innerText===r.innerText});switch(r.innerText){case"Name":case"Position":case"Office":p!==r.innerText?(p=r.innerText,d=n(s.rows).sort(function(e,n){var t=e.cells[a].innerText,r=n.cells[a].innerText;return t.localeCompare(r)})):p===r.innerText&&(p="",d.reverse());break;case"Age":p!==r.innerText?(p=r.innerText,d=n(s.rows).sort(function(e,n){return e.cells[a].innerText-n.cells[a].innerText})):p===r.innerText&&(p="",d.reverse());break;case"Salary":p!==r.innerText?(p=r.innerText,d=n(s.rows).sort(function(e,n){return f(e.cells[a].innerText)-f(n.cells[a].innerText)})):p===r.innerText&&(p="",d.reverse())}var o,i=e(d);try{for(i.s();!(o=i.n()).done;){var c=o.value;s.append(c)}}catch(l){i.e(l)}finally{i.f()}}}),s.addEventListener("click",function(e){var t=e.target.closest("tr");n(s.rows).forEach(function(e){e.classList.remove("active")}),t.classList.toggle("active")});var y=document.createElement("form");y.classList.add("new-employee-form");var v='\n  <label>Name:\n    <input data-qa="name" name="name" type="text" required>\n  </label>\n  <label>Position:\n    <input data-qa="position" name="position" type="text" required>\n  </label>\n  <label>Office:\n    <select data-qa="office" >\n      <option>Tokyo</option>\n      <option>Singapore</option>\n      <option>London</option>\n      <option>New York</option>\n      <option>Edinburgh</option>\n      <option>San Francisco</option>\n    </select>\n  </label>\n  <label>Age:\n    <input data-qa="age" name="age" type="text" required>\n  </label>\n  <label>Salary:\n    <input data-qa="salary" name="salary" type="text" required>\n  </label>\n  <button type="submit">Save to table</button>\n';function b(){document.querySelectorAll(".notification").forEach(function(e){return e.remove()})}function x(e,n,t,r){switch(e.innerText){case"Name":!/([\d])/g.test(n)&&n.length>=4?(t.innerText=n,r.remove(),b()):(b(),m(450,10,"ERROR","Вводимые данны должны быть СТРОКОЙ \n и содержать более 4-х символов","error"));break;case"Position":case"Office":/[A-Za-z]/g.test(n)?(t.innerText=n,r.remove(),b()):/[A-Za-z]/g.test(n)||(b(),m(450,10,"ERROR","Вводимые данны должны быть СТРОКОЙ.","error"));break;case"Age":!isNaN(+n)&&+n>18&&+n<90?(t.innerText=n,r.remove(),b()):isNaN(+n)?(b(),m(600,10,"ERROR","Введите Ваш возраст в числовом формате.","error")):(+n<18||+n>90)&&(b(),m(600,10,"ERROR","Ваш возраст должен быть от 18 до 90 лет.","error"));break;case"Salary":isNaN(+n)?(b(),m(750,10,"ERROR","Введите Вашу заработную плату в числовом формате.","error")):(b(),t.innerText="$"+new Intl.NumberFormat("en-EN").format(+n))}}y.insertAdjacentHTML("afterbegin",v),c.append(y),y.addEventListener("submit",function(e){var t=document.querySelector("select");e.preventDefault();var r=t.value,a=new FormData(y);a.append("office",r);var o=n(a.entries()),i=o[0],c=o[1],l=o[2],u=o[3],d=o[4],f=0;if(i[1].length<4?(b(),m(450,10,"ERROR","Имя должно сожержать более 4-х символов.","error")):f++,isNaN(+l[1])?(b(),m(600,10,"ERROR","Введите Ваш возраст в числовом формате.","error")):+l[1]<18||+l[1]>90?(b(),m(600,10,"ERROR","Ваш возраст должен быть от 18 до 90 лет.","error")):f++,isNaN(+u[1])?(b(),m(750,10,"ERROR","Введите Вашу заработную плату в числовом формате.","error")):(u[1]="$"+new Intl.NumberFormat("en-EN").format(+u[1]),f++),f>=3){b(),m(450,10,"SUCCESS","Это успешный УСПЕХ","success");var p=document.createElement("tr");p.innerHTML="\n      <td>".concat(i[1],"</td>\n      <td>").concat(c[1],"</td>\n      <td>").concat(d[1],"</td>\n      <td>").concat(l[1],"</td>\n      <td>").concat(u[1],"</td>\n    "),s.insertAdjacentElement("beforeend",p)}}),s.addEventListener("dblclick",function(e){var t=e.target,r=t.innerText,a=n(document.querySelectorAll("th"))[t.cellIndex];t.innerText="";var o=document.createElement("input");o.classList.add("cell-input"),t.append(o),o.value=r,o.addEventListener("blur",function(){var e=o.value.trim();e.length<=0&&(t.innerText=r),x(a,e,t,o)}),document.addEventListener("keydown",function(e){var n=o.value.trim();"Enter"===e.key&&n.length<=0?t.innerText=r:"Enter"===e.key&&n.length>0&&x(a,n,t,o)})});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.6a0186ca.js.map