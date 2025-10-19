/*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m="1.11.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(l.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:k&&!k.call("\ufeff\xa0")?function(a){return null==a?"":k.call(a)}:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||n.guid++,e):void 0},now:function(){return+new Date},support:l}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=a.document,A=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,B=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:A.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:z,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=z.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return y.find(a);this.length=1,this[0]=d}return this.context=z,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};B.prototype=n.fn,y=n(z);var C=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!n(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function E(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return E(a,"nextSibling")},prev:function(a){return E(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(D[a]||(e=n.unique(e)),C.test(a)&&(e=e.reverse())),this.pushStack(e)}});var F=/\S+/g,G={};function H(a){var b=G[a]={};return n.each(a.match(F)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?G[a]||H(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&n.each(arguments,function(a,c){var d;while((d=n.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){if(a===!0?!--n.readyWait:!n.isReady){if(!z.body)return setTimeout(n.ready);n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(z,[n]),n.fn.trigger&&n(z).trigger("ready").off("ready"))}}});function J(){z.addEventListener?(z.removeEventListener("DOMContentLoaded",K,!1),a.removeEventListener("load",K,!1)):(z.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(z.addEventListener||"load"===event.type||"complete"===z.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===z.readyState)setTimeout(n.ready);else if(z.addEventListener)z.addEventListener("DOMContentLoaded",K,!1),a.addEventListener("load",K,!1);else{z.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&z.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!n.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}J(),n.ready()}}()}return I.promise(b)};var L="undefined",M;for(M in n(l))break;l.ownLast="0"!==M,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c=z.getElementsByTagName("body")[0];c&&(a=z.createElement("div"),a.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",b=z.createElement("div"),c.appendChild(a).appendChild(b),typeof b.style.zoom!==L&&(b.style.cssText="border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",(l.inlineBlockNeedsLayout=3===b.offsetWidth)&&(c.style.zoom=1)),c.removeChild(a),a=b=null)}),function(){var a=z.createElement("div");if(null==l.deleteExpando){l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}}a=null}(),n.acceptData=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(n.acceptData(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f
}}function S(a,b,c){if(n.acceptData(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d]));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},W=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},X=/^(?:checkbox|radio)$/i;!function(){var a=z.createDocumentFragment(),b=z.createElement("div"),c=z.createElement("input");if(b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a>",l.leadingWhitespace=3===b.firstChild.nodeType,l.tbody=!b.getElementsByTagName("tbody").length,l.htmlSerialize=!!b.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==z.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,a.appendChild(c),l.appendChecked=c.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,a.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){l.noCloneEvent=!1}),b.cloneNode(!0).click()),null==l.deleteExpando){l.deleteExpando=!0;try{delete b.test}catch(d){l.deleteExpando=!1}}a=b=c=null}(),function(){var b,c,d=z.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),l[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var Y=/^(?:input|select|textarea)$/i,Z=/^key/,$=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,ab=/^([^.]*)(?:\.(.+)|)$/;function bb(){return!0}function cb(){return!1}function db(){try{return z.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof n===L||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(F)||[""],h=b.length;while(h--)f=ab.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(F)||[""],j=b.length;while(j--)if(h=ab.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,m,o=[d||z],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||z,3!==d.nodeType&&8!==d.nodeType&&!_.test(p+n.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[n.expando]?b:new n.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),k=n.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!n.isWindow(d)){for(i=k.delegateType||p,_.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||z)&&o.push(l.defaultView||l.parentWindow||a)}m=0;while((h=o[m++])&&!b.isPropagationStopped())b.type=m>1?i:k.bindType||p,f=(n._data(h,"events")||{})[b.type]&&n._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&n.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&n.acceptData(d)&&g&&d[p]&&!n.isWindow(d)){l=d[g],l&&(d[g]=null),n.event.triggered=p;try{d[p]()}catch(r){}n.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((n.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?n(c,this).index(i)>=0:n.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=$.test(e)?this.mouseHooks:Z.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||z),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||z,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==db()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===db()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=z.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===L&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&(a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault())?bb:cb):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:cb,isPropagationStopped:cb,isImmediatePropagationStopped:cb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=bb,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=bb,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submitBubbles||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?b.form:void 0;c&&!n._data(c,"submitBubbles")&&(n.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),n._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.changeBubbles||(n.event.special.change={setup:function(){return Y.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),n.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),n.event.simulate("change",this,a,!0)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;Y.test(b.nodeName)&&!n._data(b,"changeBubbles")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a,!0)}),n._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!Y.test(this.nodeName)}}),l.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=cb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return n().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=cb),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});function eb(a){var b=fb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var fb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gb=/ jQuery\d+="(?:null|\d+)"/g,hb=new RegExp("<(?:"+fb+")[\\s/>]","i"),ib=/^\s+/,jb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,kb=/<([\w:]+)/,lb=/<tbody/i,mb=/<|&#?\w+;/,nb=/<(?:script|style|link)/i,ob=/checked\s*(?:[^=]|=\s*.checked.)/i,pb=/^$|\/(?:java|ecma)script/i,qb=/^true\/(.*)/,rb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,sb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},tb=eb(z),ub=tb.appendChild(z.createElement("div"));sb.optgroup=sb.option,sb.tbody=sb.tfoot=sb.colgroup=sb.caption=sb.thead,sb.th=sb.td;function vb(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==L?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==L?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,vb(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function wb(a){X.test(a.type)&&(a.defaultChecked=a.checked)}function xb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function yb(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function zb(a){var b=qb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ab(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}function Bb(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Cb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(yb(b).text=a.text,zb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&X.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}n.extend({clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!hb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ub.innerHTML=a.outerHTML,ub.removeChild(f=ub.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=vb(f),h=vb(a),g=0;null!=(e=h[g]);++g)d[g]&&Cb(e,d[g]);if(b)if(c)for(h=h||vb(a),d=d||vb(f),g=0;null!=(e=h[g]);g++)Bb(e,d[g]);else Bb(a,f);return d=vb(f,"script"),d.length>0&&Ab(d,!i&&vb(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k,m=a.length,o=eb(b),p=[],q=0;m>q;q++)if(f=a[q],f||0===f)if("object"===n.type(f))n.merge(p,f.nodeType?[f]:f);else if(mb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(kb.exec(f)||["",""])[1].toLowerCase(),k=sb[i]||sb._default,h.innerHTML=k[1]+f.replace(jb,"<$1></$2>")+k[2],e=k[0];while(e--)h=h.lastChild;if(!l.leadingWhitespace&&ib.test(f)&&p.push(b.createTextNode(ib.exec(f)[0])),!l.tbody){f="table"!==i||lb.test(f)?"<table>"!==k[1]||lb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)n.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}n.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),l.appendChecked||n.grep(vb(p,"input"),wb),q=0;while(f=p[q++])if((!d||-1===n.inArray(f,d))&&(g=n.contains(f.ownerDocument,f),h=vb(o.appendChild(f),"script"),g&&Ab(h),c)){e=0;while(f=h[e++])pb.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.deleteExpando,m=n.event.special;null!=(d=a[h]);h++)if((b||n.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k?delete d[i]:typeof d.removeAttribute!==L?d.removeAttribute(i):d[i]=null,c.push(f))}}}),n.fn.extend({text:function(a){return W(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||z).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(vb(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&Ab(vb(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(vb(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return W(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(gb,""):void 0;if(!("string"!=typeof a||nb.test(a)||!l.htmlSerialize&&hb.test(a)||!l.leadingWhitespace&&ib.test(a)||sb[(kb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(jb,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(vb(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(vb(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,o=k-1,p=a[0],q=n.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&ob.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(i=n.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=n.map(vb(i,"script"),yb),f=g.length;k>j;j++)d=i,j!==o&&(d=n.clone(d,!0,!0),f&&n.merge(g,vb(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,n.map(g,zb),j=0;f>j;j++)d=g[j],pb.test(d.type||"")&&!n._data(d,"globalEval")&&n.contains(h,d)&&(d.src?n._evalUrl&&n._evalUrl(d.src):n.globalEval((d.text||d.textContent||d.innerHTML||"").replace(rb,"")));i=c=null}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],g=n(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Db,Eb={};function Fb(b,c){var d=n(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:n.css(d[0],"display");return d.detach(),e}function Gb(a){var b=z,c=Eb[a];return c||(c=Fb(a,b),"none"!==c&&c||(Db=(Db||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Db[0].contentWindow||Db[0].contentDocument).document,b.write(),b.close(),c=Fb(a,b),Db.detach()),Eb[a]=c),c}!function(){var a,b,c=z.createElement("div"),d="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],a.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(a.style.opacity),l.cssFloat=!!a.style.cssFloat,c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===c.style.backgroundClip,a=c=null,l.shrinkWrapBlocks=function(){var a,c,e,f;if(null==b){if(a=z.getElementsByTagName("body")[0],!a)return;f="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",c=z.createElement("div"),e=z.createElement("div"),a.appendChild(c).appendChild(e),b=!1,typeof e.style.zoom!==L&&(e.style.cssText=d+";width:1px;padding:1px;zoom:1",e.innerHTML="<div></div>",e.firstChild.style.width="5px",b=3!==e.offsetWidth),a.removeChild(c),a=c=e=null}return b}}();var Hb=/^margin/,Ib=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Jb,Kb,Lb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Jb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),Ib.test(g)&&Hb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):z.documentElement.currentStyle&&(Jb=function(a){return a.currentStyle},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ib.test(g)&&!Lb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Mb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h=z.createElement("div"),i="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",j="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";h.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",b=h.getElementsByTagName("a")[0],b.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(b.style.opacity),l.cssFloat=!!b.style.cssFloat,h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,b=h=null,n.extend(l,{reliableHiddenOffsets:function(){if(null!=c)return c;var a,b,d,e=z.createElement("div"),f=z.getElementsByTagName("body")[0];if(f)return e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=z.createElement("div"),a.style.cssText=i,f.appendChild(a).appendChild(e),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",b=e.getElementsByTagName("td"),b[0].style.cssText="padding:0;margin:0;border:0;display:none",d=0===b[0].offsetHeight,b[0].style.display="",b[1].style.display="none",c=d&&0===b[0].offsetHeight,f.removeChild(a),e=f=null,c},boxSizing:function(){return null==d&&k(),d},boxSizingReliable:function(){return null==e&&k(),e},pixelPosition:function(){return null==f&&k(),f},reliableMarginRight:function(){var b,c,d,e;if(null==g&&a.getComputedStyle){if(b=z.getElementsByTagName("body")[0],!b)return;c=z.createElement("div"),d=z.createElement("div"),c.style.cssText=i,b.appendChild(c).appendChild(d),e=d.appendChild(z.createElement("div")),e.style.cssText=d.style.cssText=j,e.style.marginRight=e.style.width="0",d.style.width="1px",g=!parseFloat((a.getComputedStyle(e,null)||{}).marginRight),b.removeChild(c)}return g}});function k(){var b,c,h=z.getElementsByTagName("body")[0];h&&(b=z.createElement("div"),c=z.createElement("div"),b.style.cssText=i,h.appendChild(b).appendChild(c),c.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",n.swap(h,null!=h.style.zoom?{zoom:1}:{},function(){d=4===c.offsetWidth}),e=!0,f=!1,g=!0,a.getComputedStyle&&(f="1%"!==(a.getComputedStyle(c,null)||{}).top,e="4px"===(a.getComputedStyle(c,null)||{width:"4px"}).width),h.removeChild(b),c=h=null)}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Nb=/alpha\([^)]*\)/i,Ob=/opacity\s*=\s*([^)]*)/,Pb=/^(none|table(?!-c[ea]).+)/,Qb=new RegExp("^("+T+")(.*)$","i"),Rb=new RegExp("^([+-])=("+T+")","i"),Sb={position:"absolute",visibility:"hidden",display:"block"},Tb={letterSpacing:0,fontWeight:400},Ub=["Webkit","O","Moz","ms"];function Vb(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ub.length;while(e--)if(b=Ub[e]+c,b in a)return b;return d}function Wb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=n._data(d,"olddisplay",Gb(d.nodeName)))):f[g]||(e=V(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Xb(a,b,c){var d=Qb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Yb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Zb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Jb(a),g=l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Kb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ib.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Yb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Kb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=Vb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Rb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]="",i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Vb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Kb(a,b,d)),"normal"===f&&b in Tb&&(f=Tb[b]),""===c||c?(e=parseFloat(f),c===!0||n.isNumeric(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&Pb.test(n.css(a,"display"))?n.swap(a,Sb,function(){return Zb(a,b,d)}):Zb(a,b,d):void 0},set:function(a,c,d){var e=d&&Jb(a);return Xb(a,c,d?Yb(a,b,d,l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Ob.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Nb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Nb.test(f)?f.replace(Nb,e):f+" "+e)}}),n.cssHooks.marginRight=Mb(l.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},Kb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Hb.test(a)||(n.cssHooks[a+b].set=Xb)}),n.fn.extend({css:function(a,b){return W(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Jb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)
},a,b,arguments.length>1)},show:function(){return Wb(this,!0)},hide:function(){return Wb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function $b(a,b,c,d,e){return new $b.prototype.init(a,b,c,d,e)}n.Tween=$b,$b.prototype={constructor:$b,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=$b.propHooks[this.prop];return a&&a.get?a.get(this):$b.propHooks._default.get(this)},run:function(a){var b,c=$b.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):$b.propHooks._default.set(this),this}},$b.prototype.init.prototype=$b.prototype,$b.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},$b.propHooks.scrollTop=$b.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=$b.prototype.init,n.fx.step={};var _b,ac,bc=/^(?:toggle|show|hide)$/,cc=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),dc=/queueHooks$/,ec=[jc],fc={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=cc.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&cc.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function gc(){return setTimeout(function(){_b=void 0}),_b=n.now()}function hc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=U[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function ic(a,b,c){for(var d,e=(fc[b]||[]).concat(fc["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function jc(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&V(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k=Gb(a.nodeName),"none"===j&&(j=k),"inline"===j&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==k?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],bc.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}if(!n.isEmptyObject(o)){r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=ic(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function kc(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function lc(a,b,c){var d,e,f=0,g=ec.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=_b||gc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:_b||gc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(kc(k,j.opts.specialEasing);g>f;f++)if(d=ec[f].call(j,a,k,j.opts))return d;return n.map(k,ic,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(lc,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],fc[c]=fc[c]||[],fc[c].unshift(b)},prefilter:function(a,b){b?ec.unshift(a):ec.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=lc(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&dc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(hc(b,!0),a,d,e)}}),n.each({slideDown:hc("show"),slideUp:hc("hide"),slideToggle:hc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(_b=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),_b=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ac||(ac=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(ac),ac=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e=z.createElement("div");e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=e.getElementsByTagName("a")[0],c=z.createElement("select"),d=c.appendChild(z.createElement("option")),b=e.getElementsByTagName("input")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==e.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=d.selected,l.enctype=!!z.createElement("form").enctype,c.disabled=!0,l.optDisabled=!d.disabled,b=z.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value,a=b=c=d=e=null}();var mc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(mc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.text(a)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var nc,oc,pc=n.expr.attrHandle,qc=/^(?:checked|selected)$/i,rc=l.getSetAttribute,sc=l.input;n.fn.extend({attr:function(a,b){return W(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===L?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?oc:nc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(F);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?sc&&rc||!qc.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(rc?c:d)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),oc={set:function(a,b,c){return b===!1?n.removeAttr(a,c):sc&&rc||!qc.test(c)?a.setAttribute(!rc&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=pc[b]||n.find.attr;pc[b]=sc&&rc||!qc.test(b)?function(a,b,d){var e,f;return d||(f=pc[b],pc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,pc[b]=f),e}:function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),sc&&rc||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):nc&&nc.set(a,b,c)}}),rc||(nc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},pc.id=pc.name=pc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:nc.set},n.attrHooks.contenteditable={set:function(a,b,c){nc.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var tc=/^(?:input|select|textarea|button|object)$/i,uc=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return W(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):tc.test(a.nodeName)||uc.test(a.nodeName)&&a.href?0:-1}}}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var vc=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(F)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===L||"boolean"===c)&&(this.className&&n._data(this,"__className__",this.className),this.className=this.className||a===!1?"":n._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(vc," ").indexOf(b)>=0)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var wc=n.now(),xc=/\?/,yc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(yc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var zc,Ac,Bc=/#.*$/,Cc=/([?&])_=[^&]*/,Dc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Ec=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Fc=/^(?:GET|HEAD)$/,Gc=/^\/\//,Hc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ic={},Jc={},Kc="*/".concat("*");try{Ac=location.href}catch(Lc){Ac=z.createElement("a"),Ac.href="",Ac=Ac.href}zc=Hc.exec(Ac.toLowerCase())||[];function Mc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(F)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nc(a,b,c,d){var e={},f=a===Jc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Oc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Pc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Qc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ac,type:"GET",isLocal:Ec.test(zc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Oc(Oc(a,n.ajaxSettings),b):Oc(n.ajaxSettings,a)},ajaxPrefilter:Mc(Ic),ajaxTransport:Mc(Jc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Dc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||Ac)+"").replace(Bc,"").replace(Gc,zc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(F)||[""],null==k.crossDomain&&(c=Hc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===zc[1]&&c[2]===zc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(zc[3]||("http:"===zc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),Nc(Ic,k,b,v),2===t)return v;h=k.global,h&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Fc.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(xc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Cc.test(e)?e.replace(Cc,"$1_="+wc++):e+(xc.test(e)?"&":"?")+"_="+wc++)),k.ifModified&&(n.lastModified[e]&&v.setRequestHeader("If-Modified-Since",n.lastModified[e]),n.etag[e]&&v.setRequestHeader("If-None-Match",n.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Kc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Nc(Jc,k,b,v)){v.readyState=1,h&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Pc(k,v,c)),u=Qc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(n.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!l.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||n.css(a,"display"))},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Rc=/%20/g,Sc=/\[\]$/,Tc=/\r?\n/g,Uc=/^(?:submit|button|image|reset|file)$/i,Vc=/^(?:input|select|textarea|keygen)/i;function Wc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Sc.test(a)?d(a,e):Wc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Wc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Wc(c,a[c],b,e);return d.join("&").replace(Rc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Vc.test(this.nodeName)&&!Uc.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Tc,"\r\n")}}):{name:b.name,value:c.replace(Tc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&$c()||_c()}:$c;var Xc=0,Yc={},Zc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Yc)Yc[a](void 0,!0)}),l.cors=!!Zc&&"withCredentials"in Zc,Zc=l.ajax=!!Zc,Zc&&n.ajaxTransport(function(a){if(!a.crossDomain||l.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Xc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Yc[g],b=void 0,f.onreadystatechange=n.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Yc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function $c(){try{return new a.XMLHttpRequest}catch(b){}}function _c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=z.head||n("head")[0]||z.documentElement;return{send:function(d,e){b=z.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ad=[],bd=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ad.pop()||n.expando+"_"+wc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(bd.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&bd.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(bd,"$1"+e):b.jsonp!==!1&&(b.url+=(xc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ad.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||z;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var cd=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&cd)return cd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h,a.length),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&n.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var dd=a.document.documentElement;function ed(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?(typeof e.getBoundingClientRect!==L&&(d=e.getBoundingClientRect()),c=ed(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||dd;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||dd})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return W(this,function(a,d,e){var f=ed(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Mb(l.pixelPosition,function(a,c){return c?(c=Kb(a,b),Ib.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return W(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var fd=a.jQuery,gd=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=gd),b&&a.jQuery===n&&(a.jQuery=fd),n},typeof b===L&&(a.jQuery=a.$=n),n});

// lodash library
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(){var n,t="Expected a function",r="__lodash_hash_undefined__",e="__lodash_placeholder__",u=16,i=32,o=64,f=128,a=256,c=1/0,l=9007199254740991,s=NaN,h=4294967295,p=[["ary",f],["bind",1],["bindKey",2],["curry",8],["curryRight",u],["flip",512],["partial",i],["partialRight",o],["rearg",a]],v="[object Arguments]",_="[object Array]",g="[object Boolean]",y="[object Date]",d="[object Error]",b="[object Function]",w="[object GeneratorFunction]",m="[object Map]",x="[object Number]",j="[object Object]",A="[object Promise]",k="[object RegExp]",O="[object Set]",I="[object String]",R="[object Symbol]",z="[object WeakMap]",E="[object ArrayBuffer]",S="[object DataView]",W="[object Float32Array]",L="[object Float64Array]",C="[object Int8Array]",U="[object Int16Array]",B="[object Int32Array]",T="[object Uint8Array]",$="[object Uint8ClampedArray]",D="[object Uint16Array]",M="[object Uint32Array]",F=/\b__p \+= '';/g,N=/\b(__p \+=) '' \+/g,P=/(__e\(.*?\)|\b__t\)) \+\n'';/g,q=/&(?:amp|lt|gt|quot|#39);/g,Z=/[&<>"']/g,K=RegExp(q.source),V=RegExp(Z.source),G=/<%-([\s\S]+?)%>/g,H=/<%([\s\S]+?)%>/g,J=/<%=([\s\S]+?)%>/g,Y=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Q=/^\w*$/,X=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,nn=/[\\^$.*+?()[\]{}|]/g,tn=RegExp(nn.source),rn=/^\s+|\s+$/g,en=/^\s+/,un=/\s+$/,on=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,fn=/\{\n\/\* \[wrapped with (.+)\] \*/,an=/,? & /,cn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,ln=/\\(\\)?/g,sn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,hn=/\w*$/,pn=/^[-+]0x[0-9a-f]+$/i,vn=/^0b[01]+$/i,_n=/^\[object .+?Constructor\]$/,gn=/^0o[0-7]+$/i,yn=/^(?:0|[1-9]\d*)$/,dn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,bn=/($^)/,wn=/['\n\r\u2028\u2029\\]/g,mn="\\ud800-\\udfff",xn="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",jn="\\u2700-\\u27bf",An="a-z\\xdf-\\xf6\\xf8-\\xff",kn="A-Z\\xc0-\\xd6\\xd8-\\xde",On="\\ufe0e\\ufe0f",In="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Rn="['’]",zn="["+mn+"]",En="["+In+"]",Sn="["+xn+"]",Wn="\\d+",Ln="["+jn+"]",Cn="["+An+"]",Un="[^"+mn+In+Wn+jn+An+kn+"]",Bn="\\ud83c[\\udffb-\\udfff]",Tn="[^"+mn+"]",$n="(?:\\ud83c[\\udde6-\\uddff]){2}",Dn="[\\ud800-\\udbff][\\udc00-\\udfff]",Mn="["+kn+"]",Fn="\\u200d",Nn="(?:"+Cn+"|"+Un+")",Pn="(?:"+Mn+"|"+Un+")",qn="(?:['’](?:d|ll|m|re|s|t|ve))?",Zn="(?:['’](?:D|LL|M|RE|S|T|VE))?",Kn="(?:"+Sn+"|"+Bn+")"+"?",Vn="["+On+"]?",Gn=Vn+Kn+("(?:"+Fn+"(?:"+[Tn,$n,Dn].join("|")+")"+Vn+Kn+")*"),Hn="(?:"+[Ln,$n,Dn].join("|")+")"+Gn,Jn="(?:"+[Tn+Sn+"?",Sn,$n,Dn,zn].join("|")+")",Yn=RegExp(Rn,"g"),Qn=RegExp(Sn,"g"),Xn=RegExp(Bn+"(?="+Bn+")|"+Jn+Gn,"g"),nt=RegExp([Mn+"?"+Cn+"+"+qn+"(?="+[En,Mn,"$"].join("|")+")",Pn+"+"+Zn+"(?="+[En,Mn+Nn,"$"].join("|")+")",Mn+"?"+Nn+"+"+qn,Mn+"+"+Zn,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Wn,Hn].join("|"),"g"),tt=RegExp("["+Fn+mn+xn+On+"]"),rt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,et=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],ut=-1,it={};it[W]=it[L]=it[C]=it[U]=it[B]=it[T]=it[$]=it[D]=it[M]=!0,it[v]=it[_]=it[E]=it[g]=it[S]=it[y]=it[d]=it[b]=it[m]=it[x]=it[j]=it[k]=it[O]=it[I]=it[z]=!1;var ot={};ot[v]=ot[_]=ot[E]=ot[S]=ot[g]=ot[y]=ot[W]=ot[L]=ot[C]=ot[U]=ot[B]=ot[m]=ot[x]=ot[j]=ot[k]=ot[O]=ot[I]=ot[R]=ot[T]=ot[$]=ot[D]=ot[M]=!0,ot[d]=ot[b]=ot[z]=!1;var ft={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},at=parseFloat,ct=parseInt,lt="object"==typeof global&&global&&global.Object===Object&&global,st="object"==typeof self&&self&&self.Object===Object&&self,ht=lt||st||Function("return this")(),pt="object"==typeof exports&&exports&&!exports.nodeType&&exports,vt=pt&&"object"==typeof module&&module&&!module.nodeType&&module,_t=vt&&vt.exports===pt,gt=_t&&lt.process,yt=function(){try{var n=vt&&vt.require&&vt.require("util").types;return n||gt&&gt.binding&&gt.binding("util")}catch(n){}}(),dt=yt&&yt.isArrayBuffer,bt=yt&&yt.isDate,wt=yt&&yt.isMap,mt=yt&&yt.isRegExp,xt=yt&&yt.isSet,jt=yt&&yt.isTypedArray;function At(n,t,r){switch(r.length){case 0:return n.call(t);case 1:return n.call(t,r[0]);case 2:return n.call(t,r[0],r[1]);case 3:return n.call(t,r[0],r[1],r[2])}return n.apply(t,r)}function kt(n,t,r,e){for(var u=-1,i=null==n?0:n.length;++u<i;){var o=n[u];t(e,o,r(o),n)}return e}function Ot(n,t){for(var r=-1,e=null==n?0:n.length;++r<e&&!1!==t(n[r],r,n););return n}function It(n,t){for(var r=null==n?0:n.length;r--&&!1!==t(n[r],r,n););return n}function Rt(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(!t(n[r],r,n))return!1;return!0}function zt(n,t){for(var r=-1,e=null==n?0:n.length,u=0,i=[];++r<e;){var o=n[r];t(o,r,n)&&(i[u++]=o)}return i}function Et(n,t){return!!(null==n?0:n.length)&&Mt(n,t,0)>-1}function St(n,t,r){for(var e=-1,u=null==n?0:n.length;++e<u;)if(r(t,n[e]))return!0;return!1}function Wt(n,t){for(var r=-1,e=null==n?0:n.length,u=Array(e);++r<e;)u[r]=t(n[r],r,n);return u}function Lt(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function Ct(n,t,r,e){var u=-1,i=null==n?0:n.length;for(e&&i&&(r=n[++u]);++u<i;)r=t(r,n[u],u,n);return r}function Ut(n,t,r,e){var u=null==n?0:n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r}function Bt(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(t(n[r],r,n))return!0;return!1}var Tt=qt("length");function $t(n,t,r){var e;return r(n,(function(n,r,u){if(t(n,r,u))return e=r,!1})),e}function Dt(n,t,r,e){for(var u=n.length,i=r+(e?1:-1);e?i--:++i<u;)if(t(n[i],i,n))return i;return-1}function Mt(n,t,r){return t==t?function(n,t,r){var e=r-1,u=n.length;for(;++e<u;)if(n[e]===t)return e;return-1}(n,t,r):Dt(n,Nt,r)}function Ft(n,t,r,e){for(var u=r-1,i=n.length;++u<i;)if(e(n[u],t))return u;return-1}function Nt(n){return n!=n}function Pt(n,t){var r=null==n?0:n.length;return r?Vt(n,t)/r:s}function qt(t){return function(r){return null==r?n:r[t]}}function Zt(t){return function(r){return null==t?n:t[r]}}function Kt(n,t,r,e,u){return u(n,(function(n,u,i){r=e?(e=!1,n):t(r,n,u,i)})),r}function Vt(t,r){for(var e,u=-1,i=t.length;++u<i;){var o=r(t[u]);o!==n&&(e=e===n?o:e+o)}return e}function Gt(n,t){for(var r=-1,e=Array(n);++r<n;)e[r]=t(r);return e}function Ht(n){return function(t){return n(t)}}function Jt(n,t){return Wt(t,(function(t){return n[t]}))}function Yt(n,t){return n.has(t)}function Qt(n,t){for(var r=-1,e=n.length;++r<e&&Mt(t,n[r],0)>-1;);return r}function Xt(n,t){for(var r=n.length;r--&&Mt(t,n[r],0)>-1;);return r}var nr=Zt({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),tr=Zt({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function rr(n){return"\\"+ft[n]}function er(n){return tt.test(n)}function ur(n){var t=-1,r=Array(n.size);return n.forEach((function(n,e){r[++t]=[e,n]})),r}function ir(n,t){return function(r){return n(t(r))}}function or(n,t){for(var r=-1,u=n.length,i=0,o=[];++r<u;){var f=n[r];f!==t&&f!==e||(n[r]=e,o[i++]=r)}return o}function fr(n){var t=-1,r=Array(n.size);return n.forEach((function(n){r[++t]=n})),r}function ar(n){var t=-1,r=Array(n.size);return n.forEach((function(n){r[++t]=[n,n]})),r}function cr(n){return er(n)?function(n){var t=Xn.lastIndex=0;for(;Xn.test(n);)++t;return t}(n):Tt(n)}function lr(n){return er(n)?function(n){return n.match(Xn)||[]}(n):function(n){return n.split("")}(n)}var sr=Zt({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});var hr=function mn(xn){var jn,An=(xn=null==xn?ht:hr.defaults(ht.Object(),xn,hr.pick(ht,et))).Array,kn=xn.Date,On=xn.Error,In=xn.Function,Rn=xn.Math,zn=xn.Object,En=xn.RegExp,Sn=xn.String,Wn=xn.TypeError,Ln=An.prototype,Cn=In.prototype,Un=zn.prototype,Bn=xn["__core-js_shared__"],Tn=Cn.toString,$n=Un.hasOwnProperty,Dn=0,Mn=(jn=/[^.]+$/.exec(Bn&&Bn.keys&&Bn.keys.IE_PROTO||""))?"Symbol(src)_1."+jn:"",Fn=Un.toString,Nn=Tn.call(zn),Pn=ht._,qn=En("^"+Tn.call($n).replace(nn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Zn=_t?xn.Buffer:n,Kn=xn.Symbol,Vn=xn.Uint8Array,Gn=Zn?Zn.allocUnsafe:n,Hn=ir(zn.getPrototypeOf,zn),Jn=zn.create,Xn=Un.propertyIsEnumerable,tt=Ln.splice,ft=Kn?Kn.isConcatSpreadable:n,lt=Kn?Kn.iterator:n,st=Kn?Kn.toStringTag:n,pt=function(){try{var n=si(zn,"defineProperty");return n({},"",{}),n}catch(n){}}(),vt=xn.clearTimeout!==ht.clearTimeout&&xn.clearTimeout,gt=kn&&kn.now!==ht.Date.now&&kn.now,yt=xn.setTimeout!==ht.setTimeout&&xn.setTimeout,Tt=Rn.ceil,Zt=Rn.floor,pr=zn.getOwnPropertySymbols,vr=Zn?Zn.isBuffer:n,_r=xn.isFinite,gr=Ln.join,yr=ir(zn.keys,zn),dr=Rn.max,br=Rn.min,wr=kn.now,mr=xn.parseInt,xr=Rn.random,jr=Ln.reverse,Ar=si(xn,"DataView"),kr=si(xn,"Map"),Or=si(xn,"Promise"),Ir=si(xn,"Set"),Rr=si(xn,"WeakMap"),zr=si(zn,"create"),Er=Rr&&new Rr,Sr={},Wr=Ti(Ar),Lr=Ti(kr),Cr=Ti(Or),Ur=Ti(Ir),Br=Ti(Rr),Tr=Kn?Kn.prototype:n,$r=Tr?Tr.valueOf:n,Dr=Tr?Tr.toString:n;function Mr(n){if(tf(n)&&!qo(n)&&!(n instanceof qr)){if(n instanceof Pr)return n;if($n.call(n,"__wrapped__"))return $i(n)}return new Pr(n)}var Fr=function(){function t(){}return function(r){if(!nf(r))return{};if(Jn)return Jn(r);t.prototype=r;var e=new t;return t.prototype=n,e}}();function Nr(){}function Pr(t,r){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=n}function qr(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=h,this.__views__=[]}function Zr(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Kr(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Vr(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Gr(n){var t=-1,r=null==n?0:n.length;for(this.__data__=new Vr;++t<r;)this.add(n[t])}function Hr(n){var t=this.__data__=new Kr(n);this.size=t.size}function Jr(n,t){var r=qo(n),e=!r&&Po(n),u=!r&&!e&&Go(n),i=!r&&!e&&!u&&lf(n),o=r||e||u||i,f=o?Gt(n.length,Sn):[],a=f.length;for(var c in n)!t&&!$n.call(n,c)||o&&("length"==c||u&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||di(c,a))||f.push(c);return f}function Yr(t){var r=t.length;return r?t[Ge(0,r-1)]:n}function Qr(n,t){return Ci(zu(n),fe(t,0,n.length))}function Xr(n){return Ci(zu(n))}function ne(t,r,e){(e!==n&&!Mo(t[r],e)||e===n&&!(r in t))&&ie(t,r,e)}function te(t,r,e){var u=t[r];$n.call(t,r)&&Mo(u,e)&&(e!==n||r in t)||ie(t,r,e)}function re(n,t){for(var r=n.length;r--;)if(Mo(n[r][0],t))return r;return-1}function ee(n,t,r,e){return he(n,(function(n,u,i){t(e,n,r(n),i)})),e}function ue(n,t){return n&&Eu(t,Wf(t),n)}function ie(n,t,r){"__proto__"==t&&pt?pt(n,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):n[t]=r}function oe(t,r){for(var e=-1,u=r.length,i=An(u),o=null==t;++e<u;)i[e]=o?n:If(t,r[e]);return i}function fe(t,r,e){return t==t&&(e!==n&&(t=t<=e?t:e),r!==n&&(t=t>=r?t:r)),t}function ae(t,r,e,u,i,o){var f,a=1&r,c=2&r,l=4&r;if(e&&(f=i?e(t,u,i,o):e(t)),f!==n)return f;if(!nf(t))return t;var s=qo(t);if(s){if(f=function(n){var t=n.length,r=new n.constructor(t);t&&"string"==typeof n[0]&&$n.call(n,"index")&&(r.index=n.index,r.input=n.input);return r}(t),!a)return zu(t,f)}else{var h=vi(t),p=h==b||h==w;if(Go(t))return ju(t,a);if(h==j||h==v||p&&!i){if(f=c||p?{}:gi(t),!a)return c?function(n,t){return Eu(n,pi(n),t)}(t,function(n,t){return n&&Eu(t,Lf(t),n)}(f,t)):function(n,t){return Eu(n,hi(n),t)}(t,ue(f,t))}else{if(!ot[h])return i?t:{};f=function(n,t,r){var e=n.constructor;switch(t){case E:return Au(n);case g:case y:return new e(+n);case S:return function(n,t){var r=t?Au(n.buffer):n.buffer;return new n.constructor(r,n.byteOffset,n.byteLength)}(n,r);case W:case L:case C:case U:case B:case T:case $:case D:case M:return ku(n,r);case m:return new e;case x:case I:return new e(n);case k:return function(n){var t=new n.constructor(n.source,hn.exec(n));return t.lastIndex=n.lastIndex,t}(n);case O:return new e;case R:return u=n,$r?zn($r.call(u)):{}}var u}(t,h,a)}}o||(o=new Hr);var _=o.get(t);if(_)return _;o.set(t,f),ff(t)?t.forEach((function(n){f.add(ae(n,r,e,n,t,o))})):rf(t)&&t.forEach((function(n,u){f.set(u,ae(n,r,e,u,t,o))}));var d=s?n:(l?c?ui:ei:c?Lf:Wf)(t);return Ot(d||t,(function(n,u){d&&(n=t[u=n]),te(f,u,ae(n,r,e,u,t,o))})),f}function ce(t,r,e){var u=e.length;if(null==t)return!u;for(t=zn(t);u--;){var i=e[u],o=r[i],f=t[i];if(f===n&&!(i in t)||!o(f))return!1}return!0}function le(r,e,u){if("function"!=typeof r)throw new Wn(t);return Ei((function(){r.apply(n,u)}),e)}function se(n,t,r,e){var u=-1,i=Et,o=!0,f=n.length,a=[],c=t.length;if(!f)return a;r&&(t=Wt(t,Ht(r))),e?(i=St,o=!1):t.length>=200&&(i=Yt,o=!1,t=new Gr(t));n:for(;++u<f;){var l=n[u],s=null==r?l:r(l);if(l=e||0!==l?l:0,o&&s==s){for(var h=c;h--;)if(t[h]===s)continue n;a.push(l)}else i(t,s,e)||a.push(l)}return a}Mr.templateSettings={escape:G,evaluate:H,interpolate:J,variable:"",imports:{_:Mr}},Mr.prototype=Nr.prototype,Mr.prototype.constructor=Mr,Pr.prototype=Fr(Nr.prototype),Pr.prototype.constructor=Pr,qr.prototype=Fr(Nr.prototype),qr.prototype.constructor=qr,Zr.prototype.clear=function(){this.__data__=zr?zr(null):{},this.size=0},Zr.prototype.delete=function(n){var t=this.has(n)&&delete this.__data__[n];return this.size-=t?1:0,t},Zr.prototype.get=function(t){var e=this.__data__;if(zr){var u=e[t];return u===r?n:u}return $n.call(e,t)?e[t]:n},Zr.prototype.has=function(t){var r=this.__data__;return zr?r[t]!==n:$n.call(r,t)},Zr.prototype.set=function(t,e){var u=this.__data__;return this.size+=this.has(t)?0:1,u[t]=zr&&e===n?r:e,this},Kr.prototype.clear=function(){this.__data__=[],this.size=0},Kr.prototype.delete=function(n){var t=this.__data__,r=re(t,n);return!(r<0)&&(r==t.length-1?t.pop():tt.call(t,r,1),--this.size,!0)},Kr.prototype.get=function(t){var r=this.__data__,e=re(r,t);return e<0?n:r[e][1]},Kr.prototype.has=function(n){return re(this.__data__,n)>-1},Kr.prototype.set=function(n,t){var r=this.__data__,e=re(r,n);return e<0?(++this.size,r.push([n,t])):r[e][1]=t,this},Vr.prototype.clear=function(){this.size=0,this.__data__={hash:new Zr,map:new(kr||Kr),string:new Zr}},Vr.prototype.delete=function(n){var t=ci(this,n).delete(n);return this.size-=t?1:0,t},Vr.prototype.get=function(n){return ci(this,n).get(n)},Vr.prototype.has=function(n){return ci(this,n).has(n)},Vr.prototype.set=function(n,t){var r=ci(this,n),e=r.size;return r.set(n,t),this.size+=r.size==e?0:1,this},Gr.prototype.add=Gr.prototype.push=function(n){return this.__data__.set(n,r),this},Gr.prototype.has=function(n){return this.__data__.has(n)},Hr.prototype.clear=function(){this.__data__=new Kr,this.size=0},Hr.prototype.delete=function(n){var t=this.__data__,r=t.delete(n);return this.size=t.size,r},Hr.prototype.get=function(n){return this.__data__.get(n)},Hr.prototype.has=function(n){return this.__data__.has(n)},Hr.prototype.set=function(n,t){var r=this.__data__;if(r instanceof Kr){var e=r.__data__;if(!kr||e.length<199)return e.push([n,t]),this.size=++r.size,this;r=this.__data__=new Vr(e)}return r.set(n,t),this.size=r.size,this};var he=Lu(we),pe=Lu(me,!0);function ve(n,t){var r=!0;return he(n,(function(n,e,u){return r=!!t(n,e,u)})),r}function _e(t,r,e){for(var u=-1,i=t.length;++u<i;){var o=t[u],f=r(o);if(null!=f&&(a===n?f==f&&!cf(f):e(f,a)))var a=f,c=o}return c}function ge(n,t){var r=[];return he(n,(function(n,e,u){t(n,e,u)&&r.push(n)})),r}function ye(n,t,r,e,u){var i=-1,o=n.length;for(r||(r=yi),u||(u=[]);++i<o;){var f=n[i];t>0&&r(f)?t>1?ye(f,t-1,r,e,u):Lt(u,f):e||(u[u.length]=f)}return u}var de=Cu(),be=Cu(!0);function we(n,t){return n&&de(n,t,Wf)}function me(n,t){return n&&be(n,t,Wf)}function xe(n,t){return zt(t,(function(t){return Yo(n[t])}))}function je(t,r){for(var e=0,u=(r=bu(r,t)).length;null!=t&&e<u;)t=t[Bi(r[e++])];return e&&e==u?t:n}function Ae(n,t,r){var e=t(n);return qo(n)?e:Lt(e,r(n))}function ke(t){return null==t?t===n?"[object Undefined]":"[object Null]":st&&st in zn(t)?function(t){var r=$n.call(t,st),e=t[st];try{t[st]=n;var u=!0}catch(n){}var i=Fn.call(t);u&&(r?t[st]=e:delete t[st]);return i}(t):function(n){return Fn.call(n)}(t)}function Oe(n,t){return n>t}function Ie(n,t){return null!=n&&$n.call(n,t)}function Re(n,t){return null!=n&&t in zn(n)}function ze(t,r,e){for(var u=e?St:Et,i=t[0].length,o=t.length,f=o,a=An(o),c=1/0,l=[];f--;){var s=t[f];f&&r&&(s=Wt(s,Ht(r))),c=br(s.length,c),a[f]=!e&&(r||i>=120&&s.length>=120)?new Gr(f&&s):n}s=t[0];var h=-1,p=a[0];n:for(;++h<i&&l.length<c;){var v=s[h],_=r?r(v):v;if(v=e||0!==v?v:0,!(p?Yt(p,_):u(l,_,e))){for(f=o;--f;){var g=a[f];if(!(g?Yt(g,_):u(t[f],_,e)))continue n}p&&p.push(_),l.push(v)}}return l}function Ee(t,r,e){var u=null==(t=Ii(t,r=bu(r,t)))?t:t[Bi(Hi(r))];return null==u?n:At(u,t,e)}function Se(n){return tf(n)&&ke(n)==v}function We(t,r,e,u,i){return t===r||(null==t||null==r||!tf(t)&&!tf(r)?t!=t&&r!=r:function(t,r,e,u,i,o){var f=qo(t),a=qo(r),c=f?_:vi(t),l=a?_:vi(r),s=(c=c==v?j:c)==j,h=(l=l==v?j:l)==j,p=c==l;if(p&&Go(t)){if(!Go(r))return!1;f=!0,s=!1}if(p&&!s)return o||(o=new Hr),f||lf(t)?ti(t,r,e,u,i,o):function(n,t,r,e,u,i,o){switch(r){case S:if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)return!1;n=n.buffer,t=t.buffer;case E:return!(n.byteLength!=t.byteLength||!i(new Vn(n),new Vn(t)));case g:case y:case x:return Mo(+n,+t);case d:return n.name==t.name&&n.message==t.message;case k:case I:return n==t+"";case m:var f=ur;case O:var a=1&e;if(f||(f=fr),n.size!=t.size&&!a)return!1;var c=o.get(n);if(c)return c==t;e|=2,o.set(n,t);var l=ti(f(n),f(t),e,u,i,o);return o.delete(n),l;case R:if($r)return $r.call(n)==$r.call(t)}return!1}(t,r,c,e,u,i,o);if(!(1&e)){var b=s&&$n.call(t,"__wrapped__"),w=h&&$n.call(r,"__wrapped__");if(b||w){var A=b?t.value():t,z=w?r.value():r;return o||(o=new Hr),i(A,z,e,u,o)}}if(!p)return!1;return o||(o=new Hr),function(t,r,e,u,i,o){var f=1&e,a=ei(t),c=a.length,l=ei(r),s=l.length;if(c!=s&&!f)return!1;var h=c;for(;h--;){var p=a[h];if(!(f?p in r:$n.call(r,p)))return!1}var v=o.get(t);if(v&&o.get(r))return v==r;var _=!0;o.set(t,r),o.set(r,t);var g=f;for(;++h<c;){var y=t[p=a[h]],d=r[p];if(u)var b=f?u(d,y,p,r,t,o):u(y,d,p,t,r,o);if(!(b===n?y===d||i(y,d,e,u,o):b)){_=!1;break}g||(g="constructor"==p)}if(_&&!g){var w=t.constructor,m=r.constructor;w==m||!("constructor"in t)||!("constructor"in r)||"function"==typeof w&&w instanceof w&&"function"==typeof m&&m instanceof m||(_=!1)}return o.delete(t),o.delete(r),_}(t,r,e,u,i,o)}(t,r,e,u,We,i))}function Le(t,r,e,u){var i=e.length,o=i,f=!u;if(null==t)return!o;for(t=zn(t);i--;){var a=e[i];if(f&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++i<o;){var c=(a=e[i])[0],l=t[c],s=a[1];if(f&&a[2]){if(l===n&&!(c in t))return!1}else{var h=new Hr;if(u)var p=u(l,s,c,t,r,h);if(!(p===n?We(s,l,3,u,h):p))return!1}}return!0}function Ce(n){return!(!nf(n)||(t=n,Mn&&Mn in t))&&(Yo(n)?qn:_n).test(Ti(n));var t}function Ue(n){return"function"==typeof n?n:null==n?ua:"object"==typeof n?qo(n)?Fe(n[0],n[1]):Me(n):pa(n)}function Be(n){if(!ji(n))return yr(n);var t=[];for(var r in zn(n))$n.call(n,r)&&"constructor"!=r&&t.push(r);return t}function Te(n){if(!nf(n))return function(n){var t=[];if(null!=n)for(var r in zn(n))t.push(r);return t}(n);var t=ji(n),r=[];for(var e in n)("constructor"!=e||!t&&$n.call(n,e))&&r.push(e);return r}function $e(n,t){return n<t}function De(n,t){var r=-1,e=Ko(n)?An(n.length):[];return he(n,(function(n,u,i){e[++r]=t(n,u,i)})),e}function Me(n){var t=li(n);return 1==t.length&&t[0][2]?ki(t[0][0],t[0][1]):function(r){return r===n||Le(r,n,t)}}function Fe(t,r){return wi(t)&&Ai(r)?ki(Bi(t),r):function(e){var u=If(e,t);return u===n&&u===r?Rf(e,t):We(r,u,3)}}function Ne(t,r,e,u,i){t!==r&&de(r,(function(o,f){if(i||(i=new Hr),nf(o))!function(t,r,e,u,i,o,f){var a=Ri(t,e),c=Ri(r,e),l=f.get(c);if(l)return void ne(t,e,l);var s=o?o(a,c,e+"",t,r,f):n,h=s===n;if(h){var p=qo(c),v=!p&&Go(c),_=!p&&!v&&lf(c);s=c,p||v||_?qo(a)?s=a:Vo(a)?s=zu(a):v?(h=!1,s=ju(c,!0)):_?(h=!1,s=ku(c,!0)):s=[]:uf(c)||Po(c)?(s=a,Po(a)?s=df(a):nf(a)&&!Yo(a)||(s=gi(c))):h=!1}h&&(f.set(c,s),i(s,c,u,o,f),f.delete(c));ne(t,e,s)}(t,r,f,e,Ne,u,i);else{var a=u?u(Ri(t,f),o,f+"",t,r,i):n;a===n&&(a=o),ne(t,f,a)}}),Lf)}function Pe(t,r){var e=t.length;if(e)return di(r+=r<0?e:0,e)?t[r]:n}function qe(n,t,r){var e=-1;t=Wt(t.length?t:[ua],Ht(ai()));var u=De(n,(function(n,r,u){var i=Wt(t,(function(t){return t(n)}));return{criteria:i,index:++e,value:n}}));return function(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].value;return n}(u,(function(n,t){return function(n,t,r){var e=-1,u=n.criteria,i=t.criteria,o=u.length,f=r.length;for(;++e<o;){var a=Ou(u[e],i[e]);if(a)return e>=f?a:a*("desc"==r[e]?-1:1)}return n.index-t.index}(n,t,r)}))}function Ze(n,t,r){for(var e=-1,u=t.length,i={};++e<u;){var o=t[e],f=je(n,o);r(f,o)&&Xe(i,bu(o,n),f)}return i}function Ke(n,t,r,e){var u=e?Ft:Mt,i=-1,o=t.length,f=n;for(n===t&&(t=zu(t)),r&&(f=Wt(n,Ht(r)));++i<o;)for(var a=0,c=t[i],l=r?r(c):c;(a=u(f,l,a,e))>-1;)f!==n&&tt.call(f,a,1),tt.call(n,a,1);return n}function Ve(n,t){for(var r=n?t.length:0,e=r-1;r--;){var u=t[r];if(r==e||u!==i){var i=u;di(u)?tt.call(n,u,1):su(n,u)}}return n}function Ge(n,t){return n+Zt(xr()*(t-n+1))}function He(n,t){var r="";if(!n||t<1||t>l)return r;do{t%2&&(r+=n),(t=Zt(t/2))&&(n+=n)}while(t);return r}function Je(n,t){return Si(Oi(n,t,ua),n+"")}function Ye(n){return Yr(Ff(n))}function Qe(n,t){var r=Ff(n);return Ci(r,fe(t,0,r.length))}function Xe(t,r,e,u){if(!nf(t))return t;for(var i=-1,o=(r=bu(r,t)).length,f=o-1,a=t;null!=a&&++i<o;){var c=Bi(r[i]),l=e;if(i!=f){var s=a[c];(l=u?u(s,c,a):n)===n&&(l=nf(s)?s:di(r[i+1])?[]:{})}te(a,c,l),a=a[c]}return t}var nu=Er?function(n,t){return Er.set(n,t),n}:ua,tu=pt?function(n,t){return pt(n,"toString",{configurable:!0,enumerable:!1,value:ta(t),writable:!0})}:ua;function ru(n){return Ci(Ff(n))}function eu(n,t,r){var e=-1,u=n.length;t<0&&(t=-t>u?0:u+t),(r=r>u?u:r)<0&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0;for(var i=An(u);++e<u;)i[e]=n[e+t];return i}function uu(n,t){var r;return he(n,(function(n,e,u){return!(r=t(n,e,u))})),!!r}function iu(n,t,r){var e=0,u=null==n?e:n.length;if("number"==typeof t&&t==t&&u<=2147483647){for(;e<u;){var i=e+u>>>1,o=n[i];null!==o&&!cf(o)&&(r?o<=t:o<t)?e=i+1:u=i}return u}return ou(n,t,ua,r)}function ou(t,r,e,u){r=e(r);for(var i=0,o=null==t?0:t.length,f=r!=r,a=null===r,c=cf(r),l=r===n;i<o;){var s=Zt((i+o)/2),h=e(t[s]),p=h!==n,v=null===h,_=h==h,g=cf(h);if(f)var y=u||_;else y=l?_&&(u||p):a?_&&p&&(u||!v):c?_&&p&&!v&&(u||!g):!v&&!g&&(u?h<=r:h<r);y?i=s+1:o=s}return br(o,4294967294)}function fu(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r],f=t?t(o):o;if(!r||!Mo(f,a)){var a=f;i[u++]=0===o?0:o}}return i}function au(n){return"number"==typeof n?n:cf(n)?s:+n}function cu(n){if("string"==typeof n)return n;if(qo(n))return Wt(n,cu)+"";if(cf(n))return Dr?Dr.call(n):"";var t=n+"";return"0"==t&&1/n==-1/0?"-0":t}function lu(n,t,r){var e=-1,u=Et,i=n.length,o=!0,f=[],a=f;if(r)o=!1,u=St;else if(i>=200){var c=t?null:Hu(n);if(c)return fr(c);o=!1,u=Yt,a=new Gr}else a=t?[]:f;n:for(;++e<i;){var l=n[e],s=t?t(l):l;if(l=r||0!==l?l:0,o&&s==s){for(var h=a.length;h--;)if(a[h]===s)continue n;t&&a.push(s),f.push(l)}else u(a,s,r)||(a!==f&&a.push(s),f.push(l))}return f}function su(n,t){return null==(n=Ii(n,t=bu(t,n)))||delete n[Bi(Hi(t))]}function hu(n,t,r,e){return Xe(n,t,r(je(n,t)),e)}function pu(n,t,r,e){for(var u=n.length,i=e?u:-1;(e?i--:++i<u)&&t(n[i],i,n););return r?eu(n,e?0:i,e?i+1:u):eu(n,e?i+1:0,e?u:i)}function vu(n,t){var r=n;return r instanceof qr&&(r=r.value()),Ct(t,(function(n,t){return t.func.apply(t.thisArg,Lt([n],t.args))}),r)}function _u(n,t,r){var e=n.length;if(e<2)return e?lu(n[0]):[];for(var u=-1,i=An(e);++u<e;)for(var o=n[u],f=-1;++f<e;)f!=u&&(i[u]=se(i[u]||o,n[f],t,r));return lu(ye(i,1),t,r)}function gu(t,r,e){for(var u=-1,i=t.length,o=r.length,f={};++u<i;){var a=u<o?r[u]:n;e(f,t[u],a)}return f}function yu(n){return Vo(n)?n:[]}function du(n){return"function"==typeof n?n:ua}function bu(n,t){return qo(n)?n:wi(n,t)?[n]:Ui(bf(n))}var wu=Je;function mu(t,r,e){var u=t.length;return e=e===n?u:e,!r&&e>=u?t:eu(t,r,e)}var xu=vt||function(n){return ht.clearTimeout(n)};function ju(n,t){if(t)return n.slice();var r=n.length,e=Gn?Gn(r):new n.constructor(r);return n.copy(e),e}function Au(n){var t=new n.constructor(n.byteLength);return new Vn(t).set(new Vn(n)),t}function ku(n,t){var r=t?Au(n.buffer):n.buffer;return new n.constructor(r,n.byteOffset,n.length)}function Ou(t,r){if(t!==r){var e=t!==n,u=null===t,i=t==t,o=cf(t),f=r!==n,a=null===r,c=r==r,l=cf(r);if(!a&&!l&&!o&&t>r||o&&f&&c&&!a&&!l||u&&f&&c||!e&&c||!i)return 1;if(!u&&!o&&!l&&t<r||l&&e&&i&&!u&&!o||a&&e&&i||!f&&i||!c)return-1}return 0}function Iu(n,t,r,e){for(var u=-1,i=n.length,o=r.length,f=-1,a=t.length,c=dr(i-o,0),l=An(a+c),s=!e;++f<a;)l[f]=t[f];for(;++u<o;)(s||u<i)&&(l[r[u]]=n[u]);for(;c--;)l[f++]=n[u++];return l}function Ru(n,t,r,e){for(var u=-1,i=n.length,o=-1,f=r.length,a=-1,c=t.length,l=dr(i-f,0),s=An(l+c),h=!e;++u<l;)s[u]=n[u];for(var p=u;++a<c;)s[p+a]=t[a];for(;++o<f;)(h||u<i)&&(s[p+r[o]]=n[u++]);return s}function zu(n,t){var r=-1,e=n.length;for(t||(t=An(e));++r<e;)t[r]=n[r];return t}function Eu(t,r,e,u){var i=!e;e||(e={});for(var o=-1,f=r.length;++o<f;){var a=r[o],c=u?u(e[a],t[a],a,e,t):n;c===n&&(c=t[a]),i?ie(e,a,c):te(e,a,c)}return e}function Su(n,t){return function(r,e){var u=qo(r)?kt:ee,i=t?t():{};return u(r,n,ai(e,2),i)}}function Wu(t){return Je((function(r,e){var u=-1,i=e.length,o=i>1?e[i-1]:n,f=i>2?e[2]:n;for(o=t.length>3&&"function"==typeof o?(i--,o):n,f&&bi(e[0],e[1],f)&&(o=i<3?n:o,i=1),r=zn(r);++u<i;){var a=e[u];a&&t(r,a,u,o)}return r}))}function Lu(n,t){return function(r,e){if(null==r)return r;if(!Ko(r))return n(r,e);for(var u=r.length,i=t?u:-1,o=zn(r);(t?i--:++i<u)&&!1!==e(o[i],i,o););return r}}function Cu(n){return function(t,r,e){for(var u=-1,i=zn(t),o=e(t),f=o.length;f--;){var a=o[n?f:++u];if(!1===r(i[a],a,i))break}return t}}function Uu(t){return function(r){var e=er(r=bf(r))?lr(r):n,u=e?e[0]:r.charAt(0),i=e?mu(e,1).join(""):r.slice(1);return u[t]()+i}}function Bu(n){return function(t){return Ct(Qf(qf(t).replace(Yn,"")),n,"")}}function Tu(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=Fr(n.prototype),e=n.apply(r,t);return nf(e)?e:r}}function $u(t){return function(r,e,u){var i=zn(r);if(!Ko(r)){var o=ai(e,3);r=Wf(r),e=function(n){return o(i[n],n,i)}}var f=t(r,e,u);return f>-1?i[o?r[f]:f]:n}}function Du(r){return ri((function(e){var u=e.length,i=u,o=Pr.prototype.thru;for(r&&e.reverse();i--;){var f=e[i];if("function"!=typeof f)throw new Wn(t);if(o&&!a&&"wrapper"==oi(f))var a=new Pr([],!0)}for(i=a?i:u;++i<u;){var c=oi(f=e[i]),l="wrapper"==c?ii(f):n;a=l&&mi(l[0])&&424==l[1]&&!l[4].length&&1==l[9]?a[oi(l[0])].apply(a,l[3]):1==f.length&&mi(f)?a[c]():a.thru(f)}return function(){var n=arguments,t=n[0];if(a&&1==n.length&&qo(t))return a.plant(t).value();for(var r=0,i=u?e[r].apply(this,n):t;++r<u;)i=e[r].call(this,i);return i}}))}function Mu(t,r,e,u,i,o,a,c,l,s){var h=r&f,p=1&r,v=2&r,_=24&r,g=512&r,y=v?n:Tu(t);return function f(){for(var d=arguments.length,b=An(d),w=d;w--;)b[w]=arguments[w];if(_)var m=fi(f),x=function(n,t){for(var r=n.length,e=0;r--;)n[r]===t&&++e;return e}(b,m);if(u&&(b=Iu(b,u,i,_)),o&&(b=Ru(b,o,a,_)),d-=x,_&&d<s){var j=or(b,m);return Vu(t,r,Mu,f.placeholder,e,b,j,c,l,s-d)}var A=p?e:this,k=v?A[t]:t;return d=b.length,c?b=function(t,r){var e=t.length,u=br(r.length,e),i=zu(t);for(;u--;){var o=r[u];t[u]=di(o,e)?i[o]:n}return t}(b,c):g&&d>1&&b.reverse(),h&&l<d&&(b.length=l),this&&this!==ht&&this instanceof f&&(k=y||Tu(k)),k.apply(A,b)}}function Fu(n,t){return function(r,e){return function(n,t,r,e){return we(n,(function(n,u,i){t(e,r(n),u,i)})),e}(r,n,t(e),{})}}function Nu(t,r){return function(e,u){var i;if(e===n&&u===n)return r;if(e!==n&&(i=e),u!==n){if(i===n)return u;"string"==typeof e||"string"==typeof u?(e=cu(e),u=cu(u)):(e=au(e),u=au(u)),i=t(e,u)}return i}}function Pu(n){return ri((function(t){return t=Wt(t,Ht(ai())),Je((function(r){var e=this;return n(t,(function(n){return At(n,e,r)}))}))}))}function qu(t,r){var e=(r=r===n?" ":cu(r)).length;if(e<2)return e?He(r,t):r;var u=He(r,Tt(t/cr(r)));return er(r)?mu(lr(u),0,t).join(""):u.slice(0,t)}function Zu(t){return function(r,e,u){return u&&"number"!=typeof u&&bi(r,e,u)&&(e=u=n),r=vf(r),e===n?(e=r,r=0):e=vf(e),function(n,t,r,e){for(var u=-1,i=dr(Tt((t-n)/(r||1)),0),o=An(i);i--;)o[e?i:++u]=n,n+=r;return o}(r,e,u=u===n?r<e?1:-1:vf(u),t)}}function Ku(n){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=yf(t),r=yf(r)),n(t,r)}}function Vu(t,r,e,u,f,a,c,l,s,h){var p=8&r;r|=p?i:o,4&(r&=~(p?o:i))||(r&=-4);var v=[t,r,f,p?a:n,p?c:n,p?n:a,p?n:c,l,s,h],_=e.apply(n,v);return mi(t)&&zi(_,v),_.placeholder=u,Wi(_,t,r)}function Gu(n){var t=Rn[n];return function(n,r){if(n=yf(n),(r=null==r?0:br(_f(r),292))&&_r(n)){var e=(bf(n)+"e").split("e");return+((e=(bf(t(e[0]+"e"+(+e[1]+r)))+"e").split("e"))[0]+"e"+(+e[1]-r))}return t(n)}}var Hu=Ir&&1/fr(new Ir([,-0]))[1]==c?function(n){return new Ir(n)}:ca;function Ju(n){return function(t){var r=vi(t);return r==m?ur(t):r==O?ar(t):function(n,t){return Wt(t,(function(t){return[t,n[t]]}))}(t,n(t))}}function Yu(r,c,l,s,h,p,v,_){var g=2&c;if(!g&&"function"!=typeof r)throw new Wn(t);var y=s?s.length:0;if(y||(c&=-97,s=h=n),v=v===n?v:dr(_f(v),0),_=_===n?_:_f(_),y-=h?h.length:0,c&o){var d=s,b=h;s=h=n}var w=g?n:ii(r),m=[r,c,l,s,h,d,b,p,v,_];if(w&&function(n,t){var r=n[1],u=t[1],i=r|u,o=i<131,c=u==f&&8==r||u==f&&r==a&&n[7].length<=t[8]||384==u&&t[7].length<=t[8]&&8==r;if(!o&&!c)return n;1&u&&(n[2]=t[2],i|=1&r?0:4);var l=t[3];if(l){var s=n[3];n[3]=s?Iu(s,l,t[4]):l,n[4]=s?or(n[3],e):t[4]}(l=t[5])&&(s=n[5],n[5]=s?Ru(s,l,t[6]):l,n[6]=s?or(n[5],e):t[6]);(l=t[7])&&(n[7]=l);u&f&&(n[8]=null==n[8]?t[8]:br(n[8],t[8]));null==n[9]&&(n[9]=t[9]);n[0]=t[0],n[1]=i}(m,w),r=m[0],c=m[1],l=m[2],s=m[3],h=m[4],!(_=m[9]=m[9]===n?g?0:r.length:dr(m[9]-y,0))&&24&c&&(c&=-25),c&&1!=c)x=8==c||c==u?function(t,r,e){var u=Tu(t);return function i(){for(var o=arguments.length,f=An(o),a=o,c=fi(i);a--;)f[a]=arguments[a];var l=o<3&&f[0]!==c&&f[o-1]!==c?[]:or(f,c);return(o-=l.length)<e?Vu(t,r,Mu,i.placeholder,n,f,l,n,n,e-o):At(this&&this!==ht&&this instanceof i?u:t,this,f)}}(r,c,_):c!=i&&33!=c||h.length?Mu.apply(n,m):function(n,t,r,e){var u=1&t,i=Tu(n);return function t(){for(var o=-1,f=arguments.length,a=-1,c=e.length,l=An(c+f),s=this&&this!==ht&&this instanceof t?i:n;++a<c;)l[a]=e[a];for(;f--;)l[a++]=arguments[++o];return At(s,u?r:this,l)}}(r,c,l,s);else var x=function(n,t,r){var e=1&t,u=Tu(n);return function t(){return(this&&this!==ht&&this instanceof t?u:n).apply(e?r:this,arguments)}}(r,c,l);return Wi((w?nu:zi)(x,m),r,c)}function Qu(t,r,e,u){return t===n||Mo(t,Un[e])&&!$n.call(u,e)?r:t}function Xu(t,r,e,u,i,o){return nf(t)&&nf(r)&&(o.set(r,t),Ne(t,r,n,Xu,o),o.delete(r)),t}function ni(t){return uf(t)?n:t}function ti(t,r,e,u,i,o){var f=1&e,a=t.length,c=r.length;if(a!=c&&!(f&&c>a))return!1;var l=o.get(t);if(l&&o.get(r))return l==r;var s=-1,h=!0,p=2&e?new Gr:n;for(o.set(t,r),o.set(r,t);++s<a;){var v=t[s],_=r[s];if(u)var g=f?u(_,v,s,r,t,o):u(v,_,s,t,r,o);if(g!==n){if(g)continue;h=!1;break}if(p){if(!Bt(r,(function(n,t){if(!Yt(p,t)&&(v===n||i(v,n,e,u,o)))return p.push(t)}))){h=!1;break}}else if(v!==_&&!i(v,_,e,u,o)){h=!1;break}}return o.delete(t),o.delete(r),h}function ri(t){return Si(Oi(t,n,qi),t+"")}function ei(n){return Ae(n,Wf,hi)}function ui(n){return Ae(n,Lf,pi)}var ii=Er?function(n){return Er.get(n)}:ca;function oi(n){for(var t=n.name+"",r=Sr[t],e=$n.call(Sr,t)?r.length:0;e--;){var u=r[e],i=u.func;if(null==i||i==n)return u.name}return t}function fi(n){return($n.call(Mr,"placeholder")?Mr:n).placeholder}function ai(){var n=Mr.iteratee||ia;return n=n===ia?Ue:n,arguments.length?n(arguments[0],arguments[1]):n}function ci(n,t){var r,e,u=n.__data__;return("string"==(e=typeof(r=t))||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==r:null===r)?u["string"==typeof t?"string":"hash"]:u.map}function li(n){for(var t=Wf(n),r=t.length;r--;){var e=t[r],u=n[e];t[r]=[e,u,Ai(u)]}return t}function si(t,r){var e=function(t,r){return null==t?n:t[r]}(t,r);return Ce(e)?e:n}var hi=pr?function(n){return null==n?[]:(n=zn(n),zt(pr(n),(function(t){return Xn.call(n,t)})))}:ga,pi=pr?function(n){for(var t=[];n;)Lt(t,hi(n)),n=Hn(n);return t}:ga,vi=ke;function _i(n,t,r){for(var e=-1,u=(t=bu(t,n)).length,i=!1;++e<u;){var o=Bi(t[e]);if(!(i=null!=n&&r(n,o)))break;n=n[o]}return i||++e!=u?i:!!(u=null==n?0:n.length)&&Xo(u)&&di(o,u)&&(qo(n)||Po(n))}function gi(n){return"function"!=typeof n.constructor||ji(n)?{}:Fr(Hn(n))}function yi(n){return qo(n)||Po(n)||!!(ft&&n&&n[ft])}function di(n,t){var r=typeof n;return!!(t=null==t?l:t)&&("number"==r||"symbol"!=r&&yn.test(n))&&n>-1&&n%1==0&&n<t}function bi(n,t,r){if(!nf(r))return!1;var e=typeof t;return!!("number"==e?Ko(r)&&di(t,r.length):"string"==e&&t in r)&&Mo(r[t],n)}function wi(n,t){if(qo(n))return!1;var r=typeof n;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=n&&!cf(n))||(Q.test(n)||!Y.test(n)||null!=t&&n in zn(t))}function mi(n){var t=oi(n),r=Mr[t];if("function"!=typeof r||!(t in qr.prototype))return!1;if(n===r)return!0;var e=ii(r);return!!e&&n===e[0]}(Ar&&vi(new Ar(new ArrayBuffer(1)))!=S||kr&&vi(new kr)!=m||Or&&vi(Or.resolve())!=A||Ir&&vi(new Ir)!=O||Rr&&vi(new Rr)!=z)&&(vi=function(t){var r=ke(t),e=r==j?t.constructor:n,u=e?Ti(e):"";if(u)switch(u){case Wr:return S;case Lr:return m;case Cr:return A;case Ur:return O;case Br:return z}return r});var xi=Bn?Yo:ya;function ji(n){var t=n&&n.constructor;return n===("function"==typeof t&&t.prototype||Un)}function Ai(n){return n==n&&!nf(n)}function ki(t,r){return function(e){return null!=e&&(e[t]===r&&(r!==n||t in zn(e)))}}function Oi(t,r,e){return r=dr(r===n?t.length-1:r,0),function(){for(var n=arguments,u=-1,i=dr(n.length-r,0),o=An(i);++u<i;)o[u]=n[r+u];u=-1;for(var f=An(r+1);++u<r;)f[u]=n[u];return f[r]=e(o),At(t,this,f)}}function Ii(n,t){return t.length<2?n:je(n,eu(t,0,-1))}function Ri(n,t){if(("constructor"!==t||"function"!=typeof n[t])&&"__proto__"!=t)return n[t]}var zi=Li(nu),Ei=yt||function(n,t){return ht.setTimeout(n,t)},Si=Li(tu);function Wi(n,t,r){var e=t+"";return Si(n,function(n,t){var r=t.length;if(!r)return n;var e=r-1;return t[e]=(r>1?"& ":"")+t[e],t=t.join(r>2?", ":" "),n.replace(on,"{\n/* [wrapped with "+t+"] */\n")}(e,function(n,t){return Ot(p,(function(r){var e="_."+r[0];t&r[1]&&!Et(n,e)&&n.push(e)})),n.sort()}(function(n){var t=n.match(fn);return t?t[1].split(an):[]}(e),r)))}function Li(t){var r=0,e=0;return function(){var u=wr(),i=16-(u-e);if(e=u,i>0){if(++r>=800)return arguments[0]}else r=0;return t.apply(n,arguments)}}function Ci(t,r){var e=-1,u=t.length,i=u-1;for(r=r===n?u:r;++e<r;){var o=Ge(e,i),f=t[o];t[o]=t[e],t[e]=f}return t.length=r,t}var Ui=function(n){var t=Co(n,(function(n){return 500===r.size&&r.clear(),n})),r=t.cache;return t}((function(n){var t=[];return 46===n.charCodeAt(0)&&t.push(""),n.replace(X,(function(n,r,e,u){t.push(e?u.replace(ln,"$1"):r||n)})),t}));function Bi(n){if("string"==typeof n||cf(n))return n;var t=n+"";return"0"==t&&1/n==-1/0?"-0":t}function Ti(n){if(null!=n){try{return Tn.call(n)}catch(n){}try{return n+""}catch(n){}}return""}function $i(n){if(n instanceof qr)return n.clone();var t=new Pr(n.__wrapped__,n.__chain__);return t.__actions__=zu(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}var Di=Je((function(n,t){return Vo(n)?se(n,ye(t,1,Vo,!0)):[]})),Mi=Je((function(t,r){var e=Hi(r);return Vo(e)&&(e=n),Vo(t)?se(t,ye(r,1,Vo,!0),ai(e,2)):[]})),Fi=Je((function(t,r){var e=Hi(r);return Vo(e)&&(e=n),Vo(t)?se(t,ye(r,1,Vo,!0),n,e):[]}));function Ni(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=null==r?0:_f(r);return u<0&&(u=dr(e+u,0)),Dt(n,ai(t,3),u)}function Pi(t,r,e){var u=null==t?0:t.length;if(!u)return-1;var i=u-1;return e!==n&&(i=_f(e),i=e<0?dr(u+i,0):br(i,u-1)),Dt(t,ai(r,3),i,!0)}function qi(n){return(null==n?0:n.length)?ye(n,1):[]}function Zi(t){return t&&t.length?t[0]:n}var Ki=Je((function(n){var t=Wt(n,yu);return t.length&&t[0]===n[0]?ze(t):[]})),Vi=Je((function(t){var r=Hi(t),e=Wt(t,yu);return r===Hi(e)?r=n:e.pop(),e.length&&e[0]===t[0]?ze(e,ai(r,2)):[]})),Gi=Je((function(t){var r=Hi(t),e=Wt(t,yu);return(r="function"==typeof r?r:n)&&e.pop(),e.length&&e[0]===t[0]?ze(e,n,r):[]}));function Hi(t){var r=null==t?0:t.length;return r?t[r-1]:n}var Ji=Je(Yi);function Yi(n,t){return n&&n.length&&t&&t.length?Ke(n,t):n}var Qi=ri((function(n,t){var r=null==n?0:n.length,e=oe(n,t);return Ve(n,Wt(t,(function(n){return di(n,r)?+n:n})).sort(Ou)),e}));function Xi(n){return null==n?n:jr.call(n)}var no=Je((function(n){return lu(ye(n,1,Vo,!0))})),to=Je((function(t){var r=Hi(t);return Vo(r)&&(r=n),lu(ye(t,1,Vo,!0),ai(r,2))})),ro=Je((function(t){var r=Hi(t);return r="function"==typeof r?r:n,lu(ye(t,1,Vo,!0),n,r)}));function eo(n){if(!n||!n.length)return[];var t=0;return n=zt(n,(function(n){if(Vo(n))return t=dr(n.length,t),!0})),Gt(t,(function(t){return Wt(n,qt(t))}))}function uo(t,r){if(!t||!t.length)return[];var e=eo(t);return null==r?e:Wt(e,(function(t){return At(r,n,t)}))}var io=Je((function(n,t){return Vo(n)?se(n,t):[]})),oo=Je((function(n){return _u(zt(n,Vo))})),fo=Je((function(t){var r=Hi(t);return Vo(r)&&(r=n),_u(zt(t,Vo),ai(r,2))})),ao=Je((function(t){var r=Hi(t);return r="function"==typeof r?r:n,_u(zt(t,Vo),n,r)})),co=Je(eo);var lo=Je((function(t){var r=t.length,e=r>1?t[r-1]:n;return e="function"==typeof e?(t.pop(),e):n,uo(t,e)}));function so(n){var t=Mr(n);return t.__chain__=!0,t}function ho(n,t){return t(n)}var po=ri((function(t){var r=t.length,e=r?t[0]:0,u=this.__wrapped__,i=function(n){return oe(n,t)};return!(r>1||this.__actions__.length)&&u instanceof qr&&di(e)?((u=u.slice(e,+e+(r?1:0))).__actions__.push({func:ho,args:[i],thisArg:n}),new Pr(u,this.__chain__).thru((function(t){return r&&!t.length&&t.push(n),t}))):this.thru(i)}));var vo=Su((function(n,t,r){$n.call(n,r)?++n[r]:ie(n,r,1)}));var _o=$u(Ni),go=$u(Pi);function yo(n,t){return(qo(n)?Ot:he)(n,ai(t,3))}function bo(n,t){return(qo(n)?It:pe)(n,ai(t,3))}var wo=Su((function(n,t,r){$n.call(n,r)?n[r].push(t):ie(n,r,[t])}));var mo=Je((function(n,t,r){var e=-1,u="function"==typeof t,i=Ko(n)?An(n.length):[];return he(n,(function(n){i[++e]=u?At(t,n,r):Ee(n,t,r)})),i})),xo=Su((function(n,t,r){ie(n,r,t)}));function jo(n,t){return(qo(n)?Wt:De)(n,ai(t,3))}var Ao=Su((function(n,t,r){n[r?0:1].push(t)}),(function(){return[[],[]]}));var ko=Je((function(n,t){if(null==n)return[];var r=t.length;return r>1&&bi(n,t[0],t[1])?t=[]:r>2&&bi(t[0],t[1],t[2])&&(t=[t[0]]),qe(n,ye(t,1),[])})),Oo=gt||function(){return ht.Date.now()};function Io(t,r,e){return r=e?n:r,r=t&&null==r?t.length:r,Yu(t,f,n,n,n,n,r)}function Ro(r,e){var u;if("function"!=typeof e)throw new Wn(t);return r=_f(r),function(){return--r>0&&(u=e.apply(this,arguments)),r<=1&&(e=n),u}}var zo=Je((function(n,t,r){var e=1;if(r.length){var u=or(r,fi(zo));e|=i}return Yu(n,e,t,r,u)})),Eo=Je((function(n,t,r){var e=3;if(r.length){var u=or(r,fi(Eo));e|=i}return Yu(t,e,n,r,u)}));function So(r,e,u){var i,o,f,a,c,l,s=0,h=!1,p=!1,v=!0;if("function"!=typeof r)throw new Wn(t);function _(t){var e=i,u=o;return i=o=n,s=t,a=r.apply(u,e)}function g(t){var r=t-l;return l===n||r>=e||r<0||p&&t-s>=f}function y(){var n=Oo();if(g(n))return d(n);c=Ei(y,function(n){var t=e-(n-l);return p?br(t,f-(n-s)):t}(n))}function d(t){return c=n,v&&i?_(t):(i=o=n,a)}function b(){var t=Oo(),r=g(t);if(i=arguments,o=this,l=t,r){if(c===n)return function(n){return s=n,c=Ei(y,e),h?_(n):a}(l);if(p)return xu(c),c=Ei(y,e),_(l)}return c===n&&(c=Ei(y,e)),a}return e=yf(e)||0,nf(u)&&(h=!!u.leading,f=(p="maxWait"in u)?dr(yf(u.maxWait)||0,e):f,v="trailing"in u?!!u.trailing:v),b.cancel=function(){c!==n&&xu(c),s=0,i=l=o=c=n},b.flush=function(){return c===n?a:d(Oo())},b}var Wo=Je((function(n,t){return le(n,1,t)})),Lo=Je((function(n,t,r){return le(n,yf(t)||0,r)}));function Co(n,r){if("function"!=typeof n||null!=r&&"function"!=typeof r)throw new Wn(t);var e=function(){var t=arguments,u=r?r.apply(this,t):t[0],i=e.cache;if(i.has(u))return i.get(u);var o=n.apply(this,t);return e.cache=i.set(u,o)||i,o};return e.cache=new(Co.Cache||Vr),e}function Uo(n){if("function"!=typeof n)throw new Wn(t);return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}Co.Cache=Vr;var Bo=wu((function(n,t){var r=(t=1==t.length&&qo(t[0])?Wt(t[0],Ht(ai())):Wt(ye(t,1),Ht(ai()))).length;return Je((function(e){for(var u=-1,i=br(e.length,r);++u<i;)e[u]=t[u].call(this,e[u]);return At(n,this,e)}))})),To=Je((function(t,r){var e=or(r,fi(To));return Yu(t,i,n,r,e)})),$o=Je((function(t,r){var e=or(r,fi($o));return Yu(t,o,n,r,e)})),Do=ri((function(t,r){return Yu(t,a,n,n,n,r)}));function Mo(n,t){return n===t||n!=n&&t!=t}var Fo=Ku(Oe),No=Ku((function(n,t){return n>=t})),Po=Se(function(){return arguments}())?Se:function(n){return tf(n)&&$n.call(n,"callee")&&!Xn.call(n,"callee")},qo=An.isArray,Zo=dt?Ht(dt):function(n){return tf(n)&&ke(n)==E};function Ko(n){return null!=n&&Xo(n.length)&&!Yo(n)}function Vo(n){return tf(n)&&Ko(n)}var Go=vr||ya,Ho=bt?Ht(bt):function(n){return tf(n)&&ke(n)==y};function Jo(n){if(!tf(n))return!1;var t=ke(n);return t==d||"[object DOMException]"==t||"string"==typeof n.message&&"string"==typeof n.name&&!uf(n)}function Yo(n){if(!nf(n))return!1;var t=ke(n);return t==b||t==w||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Qo(n){return"number"==typeof n&&n==_f(n)}function Xo(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=l}function nf(n){var t=typeof n;return null!=n&&("object"==t||"function"==t)}function tf(n){return null!=n&&"object"==typeof n}var rf=wt?Ht(wt):function(n){return tf(n)&&vi(n)==m};function ef(n){return"number"==typeof n||tf(n)&&ke(n)==x}function uf(n){if(!tf(n)||ke(n)!=j)return!1;var t=Hn(n);if(null===t)return!0;var r=$n.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&Tn.call(r)==Nn}var of=mt?Ht(mt):function(n){return tf(n)&&ke(n)==k};var ff=xt?Ht(xt):function(n){return tf(n)&&vi(n)==O};function af(n){return"string"==typeof n||!qo(n)&&tf(n)&&ke(n)==I}function cf(n){return"symbol"==typeof n||tf(n)&&ke(n)==R}var lf=jt?Ht(jt):function(n){return tf(n)&&Xo(n.length)&&!!it[ke(n)]};var sf=Ku($e),hf=Ku((function(n,t){return n<=t}));function pf(n){if(!n)return[];if(Ko(n))return af(n)?lr(n):zu(n);if(lt&&n[lt])return function(n){for(var t,r=[];!(t=n.next()).done;)r.push(t.value);return r}(n[lt]());var t=vi(n);return(t==m?ur:t==O?fr:Ff)(n)}function vf(n){return n?(n=yf(n))===c||n===-1/0?17976931348623157e292*(n<0?-1:1):n==n?n:0:0===n?n:0}function _f(n){var t=vf(n),r=t%1;return t==t?r?t-r:t:0}function gf(n){return n?fe(_f(n),0,h):0}function yf(n){if("number"==typeof n)return n;if(cf(n))return s;if(nf(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=nf(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(rn,"");var r=vn.test(n);return r||gn.test(n)?ct(n.slice(2),r?2:8):pn.test(n)?s:+n}function df(n){return Eu(n,Lf(n))}function bf(n){return null==n?"":cu(n)}var wf=Wu((function(n,t){if(ji(t)||Ko(t))Eu(t,Wf(t),n);else for(var r in t)$n.call(t,r)&&te(n,r,t[r])})),mf=Wu((function(n,t){Eu(t,Lf(t),n)})),xf=Wu((function(n,t,r,e){Eu(t,Lf(t),n,e)})),jf=Wu((function(n,t,r,e){Eu(t,Wf(t),n,e)})),Af=ri(oe);var kf=Je((function(t,r){t=zn(t);var e=-1,u=r.length,i=u>2?r[2]:n;for(i&&bi(r[0],r[1],i)&&(u=1);++e<u;)for(var o=r[e],f=Lf(o),a=-1,c=f.length;++a<c;){var l=f[a],s=t[l];(s===n||Mo(s,Un[l])&&!$n.call(t,l))&&(t[l]=o[l])}return t})),Of=Je((function(t){return t.push(n,Xu),At(Uf,n,t)}));function If(t,r,e){var u=null==t?n:je(t,r);return u===n?e:u}function Rf(n,t){return null!=n&&_i(n,t,Re)}var zf=Fu((function(n,t,r){null!=t&&"function"!=typeof t.toString&&(t=Fn.call(t)),n[t]=r}),ta(ua)),Ef=Fu((function(n,t,r){null!=t&&"function"!=typeof t.toString&&(t=Fn.call(t)),$n.call(n,t)?n[t].push(r):n[t]=[r]}),ai),Sf=Je(Ee);function Wf(n){return Ko(n)?Jr(n):Be(n)}function Lf(n){return Ko(n)?Jr(n,!0):Te(n)}var Cf=Wu((function(n,t,r){Ne(n,t,r)})),Uf=Wu((function(n,t,r,e){Ne(n,t,r,e)})),Bf=ri((function(n,t){var r={};if(null==n)return r;var e=!1;t=Wt(t,(function(t){return t=bu(t,n),e||(e=t.length>1),t})),Eu(n,ui(n),r),e&&(r=ae(r,7,ni));for(var u=t.length;u--;)su(r,t[u]);return r}));var Tf=ri((function(n,t){return null==n?{}:function(n,t){return Ze(n,t,(function(t,r){return Rf(n,r)}))}(n,t)}));function $f(n,t){if(null==n)return{};var r=Wt(ui(n),(function(n){return[n]}));return t=ai(t),Ze(n,r,(function(n,r){return t(n,r[0])}))}var Df=Ju(Wf),Mf=Ju(Lf);function Ff(n){return null==n?[]:Jt(n,Wf(n))}var Nf=Bu((function(n,t,r){return t=t.toLowerCase(),n+(r?Pf(t):t)}));function Pf(n){return Yf(bf(n).toLowerCase())}function qf(n){return(n=bf(n))&&n.replace(dn,nr).replace(Qn,"")}var Zf=Bu((function(n,t,r){return n+(r?"-":"")+t.toLowerCase()})),Kf=Bu((function(n,t,r){return n+(r?" ":"")+t.toLowerCase()})),Vf=Uu("toLowerCase");var Gf=Bu((function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}));var Hf=Bu((function(n,t,r){return n+(r?" ":"")+Yf(t)}));var Jf=Bu((function(n,t,r){return n+(r?" ":"")+t.toUpperCase()})),Yf=Uu("toUpperCase");function Qf(t,r,e){return t=bf(t),(r=e?n:r)===n?function(n){return rt.test(n)}(t)?function(n){return n.match(nt)||[]}(t):function(n){return n.match(cn)||[]}(t):t.match(r)||[]}var Xf=Je((function(t,r){try{return At(t,n,r)}catch(n){return Jo(n)?n:new On(n)}})),na=ri((function(n,t){return Ot(t,(function(t){t=Bi(t),ie(n,t,zo(n[t],n))})),n}));function ta(n){return function(){return n}}var ra=Du(),ea=Du(!0);function ua(n){return n}function ia(n){return Ue("function"==typeof n?n:ae(n,1))}var oa=Je((function(n,t){return function(r){return Ee(r,n,t)}})),fa=Je((function(n,t){return function(r){return Ee(n,r,t)}}));function aa(n,t,r){var e=Wf(t),u=xe(t,e);null!=r||nf(t)&&(u.length||!e.length)||(r=t,t=n,n=this,u=xe(t,Wf(t)));var i=!(nf(r)&&"chain"in r&&!r.chain),o=Yo(n);return Ot(u,(function(r){var e=t[r];n[r]=e,o&&(n.prototype[r]=function(){var t=this.__chain__;if(i||t){var r=n(this.__wrapped__);return(r.__actions__=zu(this.__actions__)).push({func:e,args:arguments,thisArg:n}),r.__chain__=t,r}return e.apply(n,Lt([this.value()],arguments))})})),n}function ca(){}var la=Pu(Wt),sa=Pu(Rt),ha=Pu(Bt);function pa(n){return wi(n)?qt(Bi(n)):function(n){return function(t){return je(t,n)}}(n)}var va=Zu(),_a=Zu(!0);function ga(){return[]}function ya(){return!1}var da=Nu((function(n,t){return n+t}),0),ba=Gu("ceil"),wa=Nu((function(n,t){return n/t}),1),ma=Gu("floor");var xa,ja=Nu((function(n,t){return n*t}),1),Aa=Gu("round"),ka=Nu((function(n,t){return n-t}),0);return Mr.after=function(n,r){if("function"!=typeof r)throw new Wn(t);return n=_f(n),function(){if(--n<1)return r.apply(this,arguments)}},Mr.ary=Io,Mr.assign=wf,Mr.assignIn=mf,Mr.assignInWith=xf,Mr.assignWith=jf,Mr.at=Af,Mr.before=Ro,Mr.bind=zo,Mr.bindAll=na,Mr.bindKey=Eo,Mr.castArray=function(){if(!arguments.length)return[];var n=arguments[0];return qo(n)?n:[n]},Mr.chain=so,Mr.chunk=function(t,r,e){r=(e?bi(t,r,e):r===n)?1:dr(_f(r),0);var u=null==t?0:t.length;if(!u||r<1)return[];for(var i=0,o=0,f=An(Tt(u/r));i<u;)f[o++]=eu(t,i,i+=r);return f},Mr.compact=function(n){for(var t=-1,r=null==n?0:n.length,e=0,u=[];++t<r;){var i=n[t];i&&(u[e++]=i)}return u},Mr.concat=function(){var n=arguments.length;if(!n)return[];for(var t=An(n-1),r=arguments[0],e=n;e--;)t[e-1]=arguments[e];return Lt(qo(r)?zu(r):[r],ye(t,1))},Mr.cond=function(n){var r=null==n?0:n.length,e=ai();return n=r?Wt(n,(function(n){if("function"!=typeof n[1])throw new Wn(t);return[e(n[0]),n[1]]})):[],Je((function(t){for(var e=-1;++e<r;){var u=n[e];if(At(u[0],this,t))return At(u[1],this,t)}}))},Mr.conforms=function(n){return function(n){var t=Wf(n);return function(r){return ce(r,n,t)}}(ae(n,1))},Mr.constant=ta,Mr.countBy=vo,Mr.create=function(n,t){var r=Fr(n);return null==t?r:ue(r,t)},Mr.curry=function t(r,e,u){var i=Yu(r,8,n,n,n,n,n,e=u?n:e);return i.placeholder=t.placeholder,i},Mr.curryRight=function t(r,e,i){var o=Yu(r,u,n,n,n,n,n,e=i?n:e);return o.placeholder=t.placeholder,o},Mr.debounce=So,Mr.defaults=kf,Mr.defaultsDeep=Of,Mr.defer=Wo,Mr.delay=Lo,Mr.difference=Di,Mr.differenceBy=Mi,Mr.differenceWith=Fi,Mr.drop=function(t,r,e){var u=null==t?0:t.length;return u?eu(t,(r=e||r===n?1:_f(r))<0?0:r,u):[]},Mr.dropRight=function(t,r,e){var u=null==t?0:t.length;return u?eu(t,0,(r=u-(r=e||r===n?1:_f(r)))<0?0:r):[]},Mr.dropRightWhile=function(n,t){return n&&n.length?pu(n,ai(t,3),!0,!0):[]},Mr.dropWhile=function(n,t){return n&&n.length?pu(n,ai(t,3),!0):[]},Mr.fill=function(t,r,e,u){var i=null==t?0:t.length;return i?(e&&"number"!=typeof e&&bi(t,r,e)&&(e=0,u=i),function(t,r,e,u){var i=t.length;for((e=_f(e))<0&&(e=-e>i?0:i+e),(u=u===n||u>i?i:_f(u))<0&&(u+=i),u=e>u?0:gf(u);e<u;)t[e++]=r;return t}(t,r,e,u)):[]},Mr.filter=function(n,t){return(qo(n)?zt:ge)(n,ai(t,3))},Mr.flatMap=function(n,t){return ye(jo(n,t),1)},Mr.flatMapDeep=function(n,t){return ye(jo(n,t),c)},Mr.flatMapDepth=function(t,r,e){return e=e===n?1:_f(e),ye(jo(t,r),e)},Mr.flatten=qi,Mr.flattenDeep=function(n){return(null==n?0:n.length)?ye(n,c):[]},Mr.flattenDepth=function(t,r){return(null==t?0:t.length)?ye(t,r=r===n?1:_f(r)):[]},Mr.flip=function(n){return Yu(n,512)},Mr.flow=ra,Mr.flowRight=ea,Mr.fromPairs=function(n){for(var t=-1,r=null==n?0:n.length,e={};++t<r;){var u=n[t];e[u[0]]=u[1]}return e},Mr.functions=function(n){return null==n?[]:xe(n,Wf(n))},Mr.functionsIn=function(n){return null==n?[]:xe(n,Lf(n))},Mr.groupBy=wo,Mr.initial=function(n){return(null==n?0:n.length)?eu(n,0,-1):[]},Mr.intersection=Ki,Mr.intersectionBy=Vi,Mr.intersectionWith=Gi,Mr.invert=zf,Mr.invertBy=Ef,Mr.invokeMap=mo,Mr.iteratee=ia,Mr.keyBy=xo,Mr.keys=Wf,Mr.keysIn=Lf,Mr.map=jo,Mr.mapKeys=function(n,t){var r={};return t=ai(t,3),we(n,(function(n,e,u){ie(r,t(n,e,u),n)})),r},Mr.mapValues=function(n,t){var r={};return t=ai(t,3),we(n,(function(n,e,u){ie(r,e,t(n,e,u))})),r},Mr.matches=function(n){return Me(ae(n,1))},Mr.matchesProperty=function(n,t){return Fe(n,ae(t,1))},Mr.memoize=Co,Mr.merge=Cf,Mr.mergeWith=Uf,Mr.method=oa,Mr.methodOf=fa,Mr.mixin=aa,Mr.negate=Uo,Mr.nthArg=function(n){return n=_f(n),Je((function(t){return Pe(t,n)}))},Mr.omit=Bf,Mr.omitBy=function(n,t){return $f(n,Uo(ai(t)))},Mr.once=function(n){return Ro(2,n)},Mr.orderBy=function(t,r,e,u){return null==t?[]:(qo(r)||(r=null==r?[]:[r]),qo(e=u?n:e)||(e=null==e?[]:[e]),qe(t,r,e))},Mr.over=la,Mr.overArgs=Bo,Mr.overEvery=sa,Mr.overSome=ha,Mr.partial=To,Mr.partialRight=$o,Mr.partition=Ao,Mr.pick=Tf,Mr.pickBy=$f,Mr.property=pa,Mr.propertyOf=function(t){return function(r){return null==t?n:je(t,r)}},Mr.pull=Ji,Mr.pullAll=Yi,Mr.pullAllBy=function(n,t,r){return n&&n.length&&t&&t.length?Ke(n,t,ai(r,2)):n},Mr.pullAllWith=function(t,r,e){return t&&t.length&&r&&r.length?Ke(t,r,n,e):t},Mr.pullAt=Qi,Mr.range=va,Mr.rangeRight=_a,Mr.rearg=Do,Mr.reject=function(n,t){return(qo(n)?zt:ge)(n,Uo(ai(t,3)))},Mr.remove=function(n,t){var r=[];if(!n||!n.length)return r;var e=-1,u=[],i=n.length;for(t=ai(t,3);++e<i;){var o=n[e];t(o,e,n)&&(r.push(o),u.push(e))}return Ve(n,u),r},Mr.rest=function(r,e){if("function"!=typeof r)throw new Wn(t);return Je(r,e=e===n?e:_f(e))},Mr.reverse=Xi,Mr.sampleSize=function(t,r,e){return r=(e?bi(t,r,e):r===n)?1:_f(r),(qo(t)?Qr:Qe)(t,r)},Mr.set=function(n,t,r){return null==n?n:Xe(n,t,r)},Mr.setWith=function(t,r,e,u){return u="function"==typeof u?u:n,null==t?t:Xe(t,r,e,u)},Mr.shuffle=function(n){return(qo(n)?Xr:ru)(n)},Mr.slice=function(t,r,e){var u=null==t?0:t.length;return u?(e&&"number"!=typeof e&&bi(t,r,e)?(r=0,e=u):(r=null==r?0:_f(r),e=e===n?u:_f(e)),eu(t,r,e)):[]},Mr.sortBy=ko,Mr.sortedUniq=function(n){return n&&n.length?fu(n):[]},Mr.sortedUniqBy=function(n,t){return n&&n.length?fu(n,ai(t,2)):[]},Mr.split=function(t,r,e){return e&&"number"!=typeof e&&bi(t,r,e)&&(r=e=n),(e=e===n?h:e>>>0)?(t=bf(t))&&("string"==typeof r||null!=r&&!of(r))&&!(r=cu(r))&&er(t)?mu(lr(t),0,e):t.split(r,e):[]},Mr.spread=function(n,r){if("function"!=typeof n)throw new Wn(t);return r=null==r?0:dr(_f(r),0),Je((function(t){var e=t[r],u=mu(t,0,r);return e&&Lt(u,e),At(n,this,u)}))},Mr.tail=function(n){var t=null==n?0:n.length;return t?eu(n,1,t):[]},Mr.take=function(t,r,e){return t&&t.length?eu(t,0,(r=e||r===n?1:_f(r))<0?0:r):[]},Mr.takeRight=function(t,r,e){var u=null==t?0:t.length;return u?eu(t,(r=u-(r=e||r===n?1:_f(r)))<0?0:r,u):[]},Mr.takeRightWhile=function(n,t){return n&&n.length?pu(n,ai(t,3),!1,!0):[]},Mr.takeWhile=function(n,t){return n&&n.length?pu(n,ai(t,3)):[]},Mr.tap=function(n,t){return t(n),n},Mr.throttle=function(n,r,e){var u=!0,i=!0;if("function"!=typeof n)throw new Wn(t);return nf(e)&&(u="leading"in e?!!e.leading:u,i="trailing"in e?!!e.trailing:i),So(n,r,{leading:u,maxWait:r,trailing:i})},Mr.thru=ho,Mr.toArray=pf,Mr.toPairs=Df,Mr.toPairsIn=Mf,Mr.toPath=function(n){return qo(n)?Wt(n,Bi):cf(n)?[n]:zu(Ui(bf(n)))},Mr.toPlainObject=df,Mr.transform=function(n,t,r){var e=qo(n),u=e||Go(n)||lf(n);if(t=ai(t,4),null==r){var i=n&&n.constructor;r=u?e?new i:[]:nf(n)&&Yo(i)?Fr(Hn(n)):{}}return(u?Ot:we)(n,(function(n,e,u){return t(r,n,e,u)})),r},Mr.unary=function(n){return Io(n,1)},Mr.union=no,Mr.unionBy=to,Mr.unionWith=ro,Mr.uniq=function(n){return n&&n.length?lu(n):[]},Mr.uniqBy=function(n,t){return n&&n.length?lu(n,ai(t,2)):[]},Mr.uniqWith=function(t,r){return r="function"==typeof r?r:n,t&&t.length?lu(t,n,r):[]},Mr.unset=function(n,t){return null==n||su(n,t)},Mr.unzip=eo,Mr.unzipWith=uo,Mr.update=function(n,t,r){return null==n?n:hu(n,t,du(r))},Mr.updateWith=function(t,r,e,u){return u="function"==typeof u?u:n,null==t?t:hu(t,r,du(e),u)},Mr.values=Ff,Mr.valuesIn=function(n){return null==n?[]:Jt(n,Lf(n))},Mr.without=io,Mr.words=Qf,Mr.wrap=function(n,t){return To(du(t),n)},Mr.xor=oo,Mr.xorBy=fo,Mr.xorWith=ao,Mr.zip=co,Mr.zipObject=function(n,t){return gu(n||[],t||[],te)},Mr.zipObjectDeep=function(n,t){return gu(n||[],t||[],Xe)},Mr.zipWith=lo,Mr.entries=Df,Mr.entriesIn=Mf,Mr.extend=mf,Mr.extendWith=xf,aa(Mr,Mr),Mr.add=da,Mr.attempt=Xf,Mr.camelCase=Nf,Mr.capitalize=Pf,Mr.ceil=ba,Mr.clamp=function(t,r,e){return e===n&&(e=r,r=n),e!==n&&(e=(e=yf(e))==e?e:0),r!==n&&(r=(r=yf(r))==r?r:0),fe(yf(t),r,e)},Mr.clone=function(n){return ae(n,4)},Mr.cloneDeep=function(n){return ae(n,5)},Mr.cloneDeepWith=function(t,r){return ae(t,5,r="function"==typeof r?r:n)},Mr.cloneWith=function(t,r){return ae(t,4,r="function"==typeof r?r:n)},Mr.conformsTo=function(n,t){return null==t||ce(n,t,Wf(t))},Mr.deburr=qf,Mr.defaultTo=function(n,t){return null==n||n!=n?t:n},Mr.divide=wa,Mr.endsWith=function(t,r,e){t=bf(t),r=cu(r);var u=t.length,i=e=e===n?u:fe(_f(e),0,u);return(e-=r.length)>=0&&t.slice(e,i)==r},Mr.eq=Mo,Mr.escape=function(n){return(n=bf(n))&&V.test(n)?n.replace(Z,tr):n},Mr.escapeRegExp=function(n){return(n=bf(n))&&tn.test(n)?n.replace(nn,"\\$&"):n},Mr.every=function(t,r,e){var u=qo(t)?Rt:ve;return e&&bi(t,r,e)&&(r=n),u(t,ai(r,3))},Mr.find=_o,Mr.findIndex=Ni,Mr.findKey=function(n,t){return $t(n,ai(t,3),we)},Mr.findLast=go,Mr.findLastIndex=Pi,Mr.findLastKey=function(n,t){return $t(n,ai(t,3),me)},Mr.floor=ma,Mr.forEach=yo,Mr.forEachRight=bo,Mr.forIn=function(n,t){return null==n?n:de(n,ai(t,3),Lf)},Mr.forInRight=function(n,t){return null==n?n:be(n,ai(t,3),Lf)},Mr.forOwn=function(n,t){return n&&we(n,ai(t,3))},Mr.forOwnRight=function(n,t){return n&&me(n,ai(t,3))},Mr.get=If,Mr.gt=Fo,Mr.gte=No,Mr.has=function(n,t){return null!=n&&_i(n,t,Ie)},Mr.hasIn=Rf,Mr.head=Zi,Mr.identity=ua,Mr.includes=function(n,t,r,e){n=Ko(n)?n:Ff(n),r=r&&!e?_f(r):0;var u=n.length;return r<0&&(r=dr(u+r,0)),af(n)?r<=u&&n.indexOf(t,r)>-1:!!u&&Mt(n,t,r)>-1},Mr.indexOf=function(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=null==r?0:_f(r);return u<0&&(u=dr(e+u,0)),Mt(n,t,u)},Mr.inRange=function(t,r,e){return r=vf(r),e===n?(e=r,r=0):e=vf(e),function(n,t,r){return n>=br(t,r)&&n<dr(t,r)}(t=yf(t),r,e)},Mr.invoke=Sf,Mr.isArguments=Po,Mr.isArray=qo,Mr.isArrayBuffer=Zo,Mr.isArrayLike=Ko,Mr.isArrayLikeObject=Vo,Mr.isBoolean=function(n){return!0===n||!1===n||tf(n)&&ke(n)==g},Mr.isBuffer=Go,Mr.isDate=Ho,Mr.isElement=function(n){return tf(n)&&1===n.nodeType&&!uf(n)},Mr.isEmpty=function(n){if(null==n)return!0;if(Ko(n)&&(qo(n)||"string"==typeof n||"function"==typeof n.splice||Go(n)||lf(n)||Po(n)))return!n.length;var t=vi(n);if(t==m||t==O)return!n.size;if(ji(n))return!Be(n).length;for(var r in n)if($n.call(n,r))return!1;return!0},Mr.isEqual=function(n,t){return We(n,t)},Mr.isEqualWith=function(t,r,e){var u=(e="function"==typeof e?e:n)?e(t,r):n;return u===n?We(t,r,n,e):!!u},Mr.isError=Jo,Mr.isFinite=function(n){return"number"==typeof n&&_r(n)},Mr.isFunction=Yo,Mr.isInteger=Qo,Mr.isLength=Xo,Mr.isMap=rf,Mr.isMatch=function(n,t){return n===t||Le(n,t,li(t))},Mr.isMatchWith=function(t,r,e){return e="function"==typeof e?e:n,Le(t,r,li(r),e)},Mr.isNaN=function(n){return ef(n)&&n!=+n},Mr.isNative=function(n){if(xi(n))throw new On("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Ce(n)},Mr.isNil=function(n){return null==n},Mr.isNull=function(n){return null===n},Mr.isNumber=ef,Mr.isObject=nf,Mr.isObjectLike=tf,Mr.isPlainObject=uf,Mr.isRegExp=of,Mr.isSafeInteger=function(n){return Qo(n)&&n>=-9007199254740991&&n<=l},Mr.isSet=ff,Mr.isString=af,Mr.isSymbol=cf,Mr.isTypedArray=lf,Mr.isUndefined=function(t){return t===n},Mr.isWeakMap=function(n){return tf(n)&&vi(n)==z},Mr.isWeakSet=function(n){return tf(n)&&"[object WeakSet]"==ke(n)},Mr.join=function(n,t){return null==n?"":gr.call(n,t)},Mr.kebabCase=Zf,Mr.last=Hi,Mr.lastIndexOf=function(t,r,e){var u=null==t?0:t.length;if(!u)return-1;var i=u;return e!==n&&(i=(i=_f(e))<0?dr(u+i,0):br(i,u-1)),r==r?function(n,t,r){for(var e=r+1;e--;)if(n[e]===t)return e;return e}(t,r,i):Dt(t,Nt,i,!0)},Mr.lowerCase=Kf,Mr.lowerFirst=Vf,Mr.lt=sf,Mr.lte=hf,Mr.max=function(t){return t&&t.length?_e(t,ua,Oe):n},Mr.maxBy=function(t,r){return t&&t.length?_e(t,ai(r,2),Oe):n},Mr.mean=function(n){return Pt(n,ua)},Mr.meanBy=function(n,t){return Pt(n,ai(t,2))},Mr.min=function(t){return t&&t.length?_e(t,ua,$e):n},Mr.minBy=function(t,r){return t&&t.length?_e(t,ai(r,2),$e):n},Mr.stubArray=ga,Mr.stubFalse=ya,Mr.stubObject=function(){return{}},Mr.stubString=function(){return""},Mr.stubTrue=function(){return!0},Mr.multiply=ja,Mr.nth=function(t,r){return t&&t.length?Pe(t,_f(r)):n},Mr.noConflict=function(){return ht._===this&&(ht._=Pn),this},Mr.noop=ca,Mr.now=Oo,Mr.pad=function(n,t,r){n=bf(n);var e=(t=_f(t))?cr(n):0;if(!t||e>=t)return n;var u=(t-e)/2;return qu(Zt(u),r)+n+qu(Tt(u),r)},Mr.padEnd=function(n,t,r){n=bf(n);var e=(t=_f(t))?cr(n):0;return t&&e<t?n+qu(t-e,r):n},Mr.padStart=function(n,t,r){n=bf(n);var e=(t=_f(t))?cr(n):0;return t&&e<t?qu(t-e,r)+n:n},Mr.parseInt=function(n,t,r){return r||null==t?t=0:t&&(t=+t),mr(bf(n).replace(en,""),t||0)},Mr.random=function(t,r,e){if(e&&"boolean"!=typeof e&&bi(t,r,e)&&(r=e=n),e===n&&("boolean"==typeof r?(e=r,r=n):"boolean"==typeof t&&(e=t,t=n)),t===n&&r===n?(t=0,r=1):(t=vf(t),r===n?(r=t,t=0):r=vf(r)),t>r){var u=t;t=r,r=u}if(e||t%1||r%1){var i=xr();return br(t+i*(r-t+at("1e-"+((i+"").length-1))),r)}return Ge(t,r)},Mr.reduce=function(n,t,r){var e=qo(n)?Ct:Kt,u=arguments.length<3;return e(n,ai(t,4),r,u,he)},Mr.reduceRight=function(n,t,r){var e=qo(n)?Ut:Kt,u=arguments.length<3;return e(n,ai(t,4),r,u,pe)},Mr.repeat=function(t,r,e){return r=(e?bi(t,r,e):r===n)?1:_f(r),He(bf(t),r)},Mr.replace=function(){var n=arguments,t=bf(n[0]);return n.length<3?t:t.replace(n[1],n[2])},Mr.result=function(t,r,e){var u=-1,i=(r=bu(r,t)).length;for(i||(i=1,t=n);++u<i;){var o=null==t?n:t[Bi(r[u])];o===n&&(u=i,o=e),t=Yo(o)?o.call(t):o}return t},Mr.round=Aa,Mr.runInContext=mn,Mr.sample=function(n){return(qo(n)?Yr:Ye)(n)},Mr.size=function(n){if(null==n)return 0;if(Ko(n))return af(n)?cr(n):n.length;var t=vi(n);return t==m||t==O?n.size:Be(n).length},Mr.snakeCase=Gf,Mr.some=function(t,r,e){var u=qo(t)?Bt:uu;return e&&bi(t,r,e)&&(r=n),u(t,ai(r,3))},Mr.sortedIndex=function(n,t){return iu(n,t)},Mr.sortedIndexBy=function(n,t,r){return ou(n,t,ai(r,2))},Mr.sortedIndexOf=function(n,t){var r=null==n?0:n.length;if(r){var e=iu(n,t);if(e<r&&Mo(n[e],t))return e}return-1},Mr.sortedLastIndex=function(n,t){return iu(n,t,!0)},Mr.sortedLastIndexBy=function(n,t,r){return ou(n,t,ai(r,2),!0)},Mr.sortedLastIndexOf=function(n,t){if(null==n?0:n.length){var r=iu(n,t,!0)-1;if(Mo(n[r],t))return r}return-1},Mr.startCase=Hf,Mr.startsWith=function(n,t,r){return n=bf(n),r=null==r?0:fe(_f(r),0,n.length),t=cu(t),n.slice(r,r+t.length)==t},Mr.subtract=ka,Mr.sum=function(n){return n&&n.length?Vt(n,ua):0},Mr.sumBy=function(n,t){return n&&n.length?Vt(n,ai(t,2)):0},Mr.template=function(t,r,e){var u=Mr.templateSettings;e&&bi(t,r,e)&&(r=n),t=bf(t),r=xf({},r,u,Qu);var i,o,f=xf({},r.imports,u.imports,Qu),a=Wf(f),c=Jt(f,a),l=0,s=r.interpolate||bn,h="__p += '",p=En((r.escape||bn).source+"|"+s.source+"|"+(s===J?sn:bn).source+"|"+(r.evaluate||bn).source+"|$","g"),v="//# sourceURL="+($n.call(r,"sourceURL")?(r.sourceURL+"").replace(/[\r\n]/g," "):"lodash.templateSources["+ ++ut+"]")+"\n";t.replace(p,(function(n,r,e,u,f,a){return e||(e=u),h+=t.slice(l,a).replace(wn,rr),r&&(i=!0,h+="' +\n__e("+r+") +\n'"),f&&(o=!0,h+="';\n"+f+";\n__p += '"),e&&(h+="' +\n((__t = ("+e+")) == null ? '' : __t) +\n'"),l=a+n.length,n})),h+="';\n";var _=$n.call(r,"variable")&&r.variable;_||(h="with (obj) {\n"+h+"\n}\n"),h=(o?h.replace(F,""):h).replace(N,"$1").replace(P,"$1;"),h="function("+(_||"obj")+") {\n"+(_?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(i?", __e = _.escape":"")+(o?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+h+"return __p\n}";var g=Xf((function(){return In(a,v+"return "+h).apply(n,c)}));if(g.source=h,Jo(g))throw g;return g},Mr.times=function(n,t){if((n=_f(n))<1||n>l)return[];var r=h,e=br(n,h);t=ai(t),n-=h;for(var u=Gt(e,t);++r<n;)t(r);return u},Mr.toFinite=vf,Mr.toInteger=_f,Mr.toLength=gf,Mr.toLower=function(n){return bf(n).toLowerCase()},Mr.toNumber=yf,Mr.toSafeInteger=function(n){return n?fe(_f(n),-9007199254740991,l):0===n?n:0},Mr.toString=bf,Mr.toUpper=function(n){return bf(n).toUpperCase()},Mr.trim=function(t,r,e){if((t=bf(t))&&(e||r===n))return t.replace(rn,"");if(!t||!(r=cu(r)))return t;var u=lr(t),i=lr(r);return mu(u,Qt(u,i),Xt(u,i)+1).join("")},Mr.trimEnd=function(t,r,e){if((t=bf(t))&&(e||r===n))return t.replace(un,"");if(!t||!(r=cu(r)))return t;var u=lr(t);return mu(u,0,Xt(u,lr(r))+1).join("")},Mr.trimStart=function(t,r,e){if((t=bf(t))&&(e||r===n))return t.replace(en,"");if(!t||!(r=cu(r)))return t;var u=lr(t);return mu(u,Qt(u,lr(r))).join("")},Mr.truncate=function(t,r){var e=30,u="...";if(nf(r)){var i="separator"in r?r.separator:i;e="length"in r?_f(r.length):e,u="omission"in r?cu(r.omission):u}var o=(t=bf(t)).length;if(er(t)){var f=lr(t);o=f.length}if(e>=o)return t;var a=e-cr(u);if(a<1)return u;var c=f?mu(f,0,a).join(""):t.slice(0,a);if(i===n)return c+u;if(f&&(a+=c.length-a),of(i)){if(t.slice(a).search(i)){var l,s=c;for(i.global||(i=En(i.source,bf(hn.exec(i))+"g")),i.lastIndex=0;l=i.exec(s);)var h=l.index;c=c.slice(0,h===n?a:h)}}else if(t.indexOf(cu(i),a)!=a){var p=c.lastIndexOf(i);p>-1&&(c=c.slice(0,p))}return c+u},Mr.unescape=function(n){return(n=bf(n))&&K.test(n)?n.replace(q,sr):n},Mr.uniqueId=function(n){var t=++Dn;return bf(n)+t},Mr.upperCase=Jf,Mr.upperFirst=Yf,Mr.each=yo,Mr.eachRight=bo,Mr.first=Zi,aa(Mr,(xa={},we(Mr,(function(n,t){$n.call(Mr.prototype,t)||(xa[t]=n)})),xa),{chain:!1}),Mr.VERSION="4.17.15",Ot(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(n){Mr[n].placeholder=Mr})),Ot(["drop","take"],(function(t,r){qr.prototype[t]=function(e){e=e===n?1:dr(_f(e),0);var u=this.__filtered__&&!r?new qr(this):this.clone();return u.__filtered__?u.__takeCount__=br(e,u.__takeCount__):u.__views__.push({size:br(e,h),type:t+(u.__dir__<0?"Right":"")}),u},qr.prototype[t+"Right"]=function(n){return this.reverse()[t](n).reverse()}})),Ot(["filter","map","takeWhile"],(function(n,t){var r=t+1,e=1==r||3==r;qr.prototype[n]=function(n){var t=this.clone();return t.__iteratees__.push({iteratee:ai(n,3),type:r}),t.__filtered__=t.__filtered__||e,t}})),Ot(["head","last"],(function(n,t){var r="take"+(t?"Right":"");qr.prototype[n]=function(){return this[r](1).value()[0]}})),Ot(["initial","tail"],(function(n,t){var r="drop"+(t?"":"Right");qr.prototype[n]=function(){return this.__filtered__?new qr(this):this[r](1)}})),qr.prototype.compact=function(){return this.filter(ua)},qr.prototype.find=function(n){return this.filter(n).head()},qr.prototype.findLast=function(n){return this.reverse().find(n)},qr.prototype.invokeMap=Je((function(n,t){return"function"==typeof n?new qr(this):this.map((function(r){return Ee(r,n,t)}))})),qr.prototype.reject=function(n){return this.filter(Uo(ai(n)))},qr.prototype.slice=function(t,r){t=_f(t);var e=this;return e.__filtered__&&(t>0||r<0)?new qr(e):(t<0?e=e.takeRight(-t):t&&(e=e.drop(t)),r!==n&&(e=(r=_f(r))<0?e.dropRight(-r):e.take(r-t)),e)},qr.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},qr.prototype.toArray=function(){return this.take(h)},we(qr.prototype,(function(t,r){var e=/^(?:filter|find|map|reject)|While$/.test(r),u=/^(?:head|last)$/.test(r),i=Mr[u?"take"+("last"==r?"Right":""):r],o=u||/^find/.test(r);i&&(Mr.prototype[r]=function(){var r=this.__wrapped__,f=u?[1]:arguments,a=r instanceof qr,c=f[0],l=a||qo(r),s=function(n){var t=i.apply(Mr,Lt([n],f));return u&&h?t[0]:t};l&&e&&"function"==typeof c&&1!=c.length&&(a=l=!1);var h=this.__chain__,p=!!this.__actions__.length,v=o&&!h,_=a&&!p;if(!o&&l){r=_?r:new qr(this);var g=t.apply(r,f);return g.__actions__.push({func:ho,args:[s],thisArg:n}),new Pr(g,h)}return v&&_?t.apply(this,f):(g=this.thru(s),v?u?g.value()[0]:g.value():g)})})),Ot(["pop","push","shift","sort","splice","unshift"],(function(n){var t=Ln[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|shift)$/.test(n);Mr.prototype[n]=function(){var n=arguments;if(e&&!this.__chain__){var u=this.value();return t.apply(qo(u)?u:[],n)}return this[r]((function(r){return t.apply(qo(r)?r:[],n)}))}})),we(qr.prototype,(function(n,t){var r=Mr[t];if(r){var e=r.name+"";$n.call(Sr,e)||(Sr[e]=[]),Sr[e].push({name:t,func:r})}})),Sr[Mu(n,2).name]=[{name:"wrapper",func:n}],qr.prototype.clone=function(){var n=new qr(this.__wrapped__);return n.__actions__=zu(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=zu(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=zu(this.__views__),n},qr.prototype.reverse=function(){if(this.__filtered__){var n=new qr(this);n.__dir__=-1,n.__filtered__=!0}else(n=this.clone()).__dir__*=-1;return n},qr.prototype.value=function(){var n=this.__wrapped__.value(),t=this.__dir__,r=qo(n),e=t<0,u=r?n.length:0,i=function(n,t,r){var e=-1,u=r.length;for(;++e<u;){var i=r[e],o=i.size;switch(i.type){case"drop":n+=o;break;case"dropRight":t-=o;break;case"take":t=br(t,n+o);break;case"takeRight":n=dr(n,t-o)}}return{start:n,end:t}}(0,u,this.__views__),o=i.start,f=i.end,a=f-o,c=e?f:o-1,l=this.__iteratees__,s=l.length,h=0,p=br(a,this.__takeCount__);if(!r||!e&&u==a&&p==a)return vu(n,this.__actions__);var v=[];n:for(;a--&&h<p;){for(var _=-1,g=n[c+=t];++_<s;){var y=l[_],d=y.iteratee,b=y.type,w=d(g);if(2==b)g=w;else if(!w){if(1==b)continue n;break n}}v[h++]=g}return v},Mr.prototype.at=po,Mr.prototype.chain=function(){return so(this)},Mr.prototype.commit=function(){return new Pr(this.value(),this.__chain__)},Mr.prototype.next=function(){this.__values__===n&&(this.__values__=pf(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?n:this.__values__[this.__index__++]}},Mr.prototype.plant=function(t){for(var r,e=this;e instanceof Nr;){var u=$i(e);u.__index__=0,u.__values__=n,r?i.__wrapped__=u:r=u;var i=u;e=e.__wrapped__}return i.__wrapped__=t,r},Mr.prototype.reverse=function(){var t=this.__wrapped__;if(t instanceof qr){var r=t;return this.__actions__.length&&(r=new qr(this)),(r=r.reverse()).__actions__.push({func:ho,args:[Xi],thisArg:n}),new Pr(r,this.__chain__)}return this.thru(Xi)},Mr.prototype.toJSON=Mr.prototype.valueOf=Mr.prototype.value=function(){return vu(this.__wrapped__,this.__actions__)},Mr.prototype.first=Mr.prototype.head,lt&&(Mr.prototype[lt]=function(){return this}),Mr}();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(ht._=hr,define((function(){return hr}))):vt?((vt.exports=hr)._=hr,pt._=hr):ht._=hr}).call(this);

/*!
jQuery Cookie Plugin v1.3.1
https://github.com/carhartl/jquery-cookie

Copyright 2013 Klaus Hartl
Released under the MIT license
*/(function(factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory);}else{factory(jQuery);}}(function($){var pluses=/\+/g;function raw(s){return s;}function decoded(s){return decodeURIComponent(s.replace(pluses,' '));}function converted(s){if(s.indexOf('"')===0){s=s.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,'\\');}try{return config.json?JSON.parse(s):s;}catch(er){}}var config=$.cookie=function(key,value,options){if(value!==undefined){options=$.extend({},config.defaults,options);if(typeof options.expires==='number'){var days=options.expires,t=options.expires=new Date();t.setDate(t.getDate()+days);}value=config.json?JSON.stringify(value):String(value);return(document.cookie=[config.raw?key:encodeURIComponent(key),'=',config.raw?value:encodeURIComponent(value),options.expires?'; expires='+options.expires.toUTCString():'',options.path?'; path='+options.path:'',options.domain?'; domain='+options.domain:'',options.secure?'; secure':''].join(''));}var decode=config.raw?raw:decoded;var cookies=document.cookie.split('; ');var result=key?undefined:{};for(var i=0,l=cookies.length;i<l;i++){var parts=cookies[i].split('=');var name=decode(parts.shift());var cookie=decode(parts.join('='));if(key&&key===name){result=converted(cookie);break;}if(!key){result[name]=converted(cookie);}}return result;};config.defaults={};$.removeCookie=function(key,options){if($.cookie(key)!==undefined){$.cookie(key,'',$.extend(options,{expires:-1}));return true;}return false;};}));
/*!
  * Bootstrap v5.3.6 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap=e()}(this,(function(){"use strict";const t=new Map,e={set(e,i,n){t.has(e)||t.set(e,new Map);const s=t.get(e);s.has(i)||0===s.size?s.set(i,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)},get:(e,i)=>t.has(e)&&t.get(e).get(i)||null,remove(e,i){if(!t.has(e))return;const n=t.get(e);n.delete(i),0===n.size&&t.delete(e)}},i="transitionend",n=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,((t,e)=>`#${CSS.escape(e)}`))),t),s=t=>{t.dispatchEvent(new Event(i))},o=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),r=t=>o(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(n(t)):null,a=t=>{if(!o(t)||0===t.getClientRects().length)return!1;const e="visible"===getComputedStyle(t).getPropertyValue("visibility"),i=t.closest("details:not([open])");if(!i)return e;if(i!==t){const e=t.closest("summary");if(e&&e.parentNode!==i)return!1;if(null===e)return!1}return e},l=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),c=t=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?c(t.parentNode):null},h=()=>{},d=t=>{t.offsetHeight},u=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,f=[],p=()=>"rtl"===document.documentElement.dir,m=t=>{var e;e=()=>{const e=u();if(e){const i=t.NAME,n=e.fn[i];e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=n,t.jQueryInterface)}},"loading"===document.readyState?(f.length||document.addEventListener("DOMContentLoaded",(()=>{for(const t of f)t()})),f.push(e)):e()},g=(t,e=[],i=t)=>"function"==typeof t?t.call(...e):i,_=(t,e,n=!0)=>{if(!n)return void g(t);const o=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t);const n=Number.parseFloat(e),s=Number.parseFloat(i);return n||s?(e=e.split(",")[0],i=i.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(i))):0})(e)+5;let r=!1;const a=({target:n})=>{n===e&&(r=!0,e.removeEventListener(i,a),g(t))};e.addEventListener(i,a),setTimeout((()=>{r||s(e)}),o)},b=(t,e,i,n)=>{const s=t.length;let o=t.indexOf(e);return-1===o?!i&&n?t[s-1]:t[0]:(o+=i?1:-1,n&&(o=(o+s)%s),t[Math.max(0,Math.min(o,s-1))])},v=/[^.]*(?=\..*)\.|.*/,y=/\..*/,w=/::\d+$/,A={};let E=1;const T={mouseenter:"mouseover",mouseleave:"mouseout"},C=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function O(t,e){return e&&`${e}::${E++}`||t.uidEvent||E++}function x(t){const e=O(t);return t.uidEvent=e,A[e]=A[e]||{},A[e]}function k(t,e,i=null){return Object.values(t).find((t=>t.callable===e&&t.delegationSelector===i))}function L(t,e,i){const n="string"==typeof e,s=n?i:e||i;let o=I(t);return C.has(o)||(o=t),[n,s,o]}function S(t,e,i,n,s){if("string"!=typeof e||!t)return;let[o,r,a]=L(e,i,n);if(e in T){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};r=t(r)}const l=x(t),c=l[a]||(l[a]={}),h=k(c,r,o?i:null);if(h)return void(h.oneOff=h.oneOff&&s);const d=O(r,e.replace(v,"")),u=o?function(t,e,i){return function n(s){const o=t.querySelectorAll(e);for(let{target:r}=s;r&&r!==this;r=r.parentNode)for(const a of o)if(a===r)return P(s,{delegateTarget:r}),n.oneOff&&N.off(t,s.type,e,i),i.apply(r,[s])}}(t,i,r):function(t,e){return function i(n){return P(n,{delegateTarget:t}),i.oneOff&&N.off(t,n.type,e),e.apply(t,[n])}}(t,r);u.delegationSelector=o?i:null,u.callable=r,u.oneOff=s,u.uidEvent=d,c[d]=u,t.addEventListener(a,u,o)}function D(t,e,i,n,s){const o=k(e[i],n,s);o&&(t.removeEventListener(i,o,Boolean(s)),delete e[i][o.uidEvent])}function $(t,e,i,n){const s=e[i]||{};for(const[o,r]of Object.entries(s))o.includes(n)&&D(t,e,i,r.callable,r.delegationSelector)}function I(t){return t=t.replace(y,""),T[t]||t}const N={on(t,e,i,n){S(t,e,i,n,!1)},one(t,e,i,n){S(t,e,i,n,!0)},off(t,e,i,n){if("string"!=typeof e||!t)return;const[s,o,r]=L(e,i,n),a=r!==e,l=x(t),c=l[r]||{},h=e.startsWith(".");if(void 0===o){if(h)for(const i of Object.keys(l))$(t,l,i,e.slice(1));for(const[i,n]of Object.entries(c)){const s=i.replace(w,"");a&&!e.includes(s)||D(t,l,r,n.callable,n.delegationSelector)}}else{if(!Object.keys(c).length)return;D(t,l,r,o,s?i:null)}},trigger(t,e,i){if("string"!=typeof e||!t)return null;const n=u();let s=null,o=!0,r=!0,a=!1;e!==I(e)&&n&&(s=n.Event(e,i),n(t).trigger(s),o=!s.isPropagationStopped(),r=!s.isImmediatePropagationStopped(),a=s.isDefaultPrevented());const l=P(new Event(e,{bubbles:o,cancelable:!0}),i);return a&&l.preventDefault(),r&&t.dispatchEvent(l),l.defaultPrevented&&s&&s.preventDefault(),l}};function P(t,e={}){for(const[i,n]of Object.entries(e))try{t[i]=n}catch(e){Object.defineProperty(t,i,{configurable:!0,get:()=>n})}return t}function j(t){if("true"===t)return!0;if("false"===t)return!1;if(t===Number(t).toString())return Number(t);if(""===t||"null"===t)return null;if("string"!=typeof t)return t;try{return JSON.parse(decodeURIComponent(t))}catch(e){return t}}function M(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const F={setDataAttribute(t,e,i){t.setAttribute(`data-bs-${M(e)}`,i)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${M(e)}`)},getDataAttributes(t){if(!t)return{};const e={},i=Object.keys(t.dataset).filter((t=>t.startsWith("bs")&&!t.startsWith("bsConfig")));for(const n of i){let i=n.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1),e[i]=j(t.dataset[n])}return e},getDataAttribute:(t,e)=>j(t.getAttribute(`data-bs-${M(e)}`))};class H{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const i=o(e)?F.getDataAttribute(e,"config"):{};return{...this.constructor.Default,..."object"==typeof i?i:{},...o(e)?F.getDataAttributes(e):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[n,s]of Object.entries(e)){const e=t[n],r=o(e)?"element":null==(i=e)?`${i}`:Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(s).test(r))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${s}".`)}var i}}class W extends H{constructor(t,i){super(),(t=r(t))&&(this._element=t,this._config=this._getConfig(i),e.set(this._element,this.constructor.DATA_KEY,this))}dispose(){e.remove(this._element,this.constructor.DATA_KEY),N.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,i=!0){_(t,e,i)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return e.get(r(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.3.6"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const B=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),e=i&&"#"!==i?i.trim():null}return e?e.split(",").map((t=>n(t))).join(","):null},z={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const i=[];let n=t.parentNode.closest(e);for(;n;)i.push(n),n=n.parentNode.closest(e);return i},prev(t,e){let i=t.previousElementSibling;for(;i;){if(i.matches(e))return[i];i=i.previousElementSibling}return[]},next(t,e){let i=t.nextElementSibling;for(;i;){if(i.matches(e))return[i];i=i.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(",");return this.find(e,t).filter((t=>!l(t)&&a(t)))},getSelectorFromElement(t){const e=B(t);return e&&z.findOne(e)?e:null},getElementFromSelector(t){const e=B(t);return e?z.findOne(e):null},getMultipleElementsFromSelector(t){const e=B(t);return e?z.find(e):[]}},R=(t,e="hide")=>{const i=`click.dismiss${t.EVENT_KEY}`,n=t.NAME;N.on(document,i,`[data-bs-dismiss="${n}"]`,(function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),l(this))return;const s=z.getElementFromSelector(this)||this.closest(`.${n}`);t.getOrCreateInstance(s)[e]()}))},q=".bs.alert",V=`close${q}`,K=`closed${q}`;class Q extends W{static get NAME(){return"alert"}close(){if(N.trigger(this._element,V).defaultPrevented)return;this._element.classList.remove("show");const t=this._element.classList.contains("fade");this._queueCallback((()=>this._destroyElement()),this._element,t)}_destroyElement(){this._element.remove(),N.trigger(this._element,K),this.dispose()}static jQueryInterface(t){return this.each((function(){const e=Q.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}R(Q,"close"),m(Q);const X='[data-bs-toggle="button"]';class Y extends W{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each((function(){const e=Y.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}N.on(document,"click.bs.button.data-api",X,(t=>{t.preventDefault();const e=t.target.closest(X);Y.getOrCreateInstance(e).toggle()})),m(Y);const U=".bs.swipe",G=`touchstart${U}`,J=`touchmove${U}`,Z=`touchend${U}`,tt=`pointerdown${U}`,et=`pointerup${U}`,it={endCallback:null,leftCallback:null,rightCallback:null},nt={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class st extends H{constructor(t,e){super(),this._element=t,t&&st.isSupported()&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return it}static get DefaultType(){return nt}static get NAME(){return"swipe"}dispose(){N.off(this._element,U)}_start(t){this._supportPointerEvents?this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX):this._deltaX=t.touches[0].clientX}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),g(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=40)return;const e=t/this._deltaX;this._deltaX=0,e&&g(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(N.on(this._element,tt,(t=>this._start(t))),N.on(this._element,et,(t=>this._end(t))),this._element.classList.add("pointer-event")):(N.on(this._element,G,(t=>this._start(t))),N.on(this._element,J,(t=>this._move(t))),N.on(this._element,Z,(t=>this._end(t))))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&("pen"===t.pointerType||"touch"===t.pointerType)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const ot=".bs.carousel",rt=".data-api",at="ArrowLeft",lt="ArrowRight",ct="next",ht="prev",dt="left",ut="right",ft=`slide${ot}`,pt=`slid${ot}`,mt=`keydown${ot}`,gt=`mouseenter${ot}`,_t=`mouseleave${ot}`,bt=`dragstart${ot}`,vt=`load${ot}${rt}`,yt=`click${ot}${rt}`,wt="carousel",At="active",Et=".active",Tt=".carousel-item",Ct=Et+Tt,Ot={[at]:ut,[lt]:dt},xt={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},kt={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Lt extends W{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=z.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===wt&&this.cycle()}static get Default(){return xt}static get DefaultType(){return kt}static get NAME(){return"carousel"}next(){this._slide(ct)}nextWhenVisible(){!document.hidden&&a(this._element)&&this.next()}prev(){this._slide(ht)}pause(){this._isSliding&&s(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?N.one(this._element,pt,(()=>this.cycle())):this.cycle())}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding)return void N.one(this._element,pt,(()=>this.to(t)));const i=this._getItemIndex(this._getActive());if(i===t)return;const n=t>i?ct:ht;this._slide(n,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&N.on(this._element,mt,(t=>this._keydown(t))),"hover"===this._config.pause&&(N.on(this._element,gt,(()=>this.pause())),N.on(this._element,_t,(()=>this._maybeEnableCycle()))),this._config.touch&&st.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const t of z.find(".carousel-item img",this._element))N.on(t,bt,(t=>t.preventDefault()));const t={leftCallback:()=>this._slide(this._directionToOrder(dt)),rightCallback:()=>this._slide(this._directionToOrder(ut)),endCallback:()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),500+this._config.interval))}};this._swipeHelper=new st(this._element,t)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=Ot[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=z.findOne(Et,this._indicatorsElement);e.classList.remove(At),e.removeAttribute("aria-current");const i=z.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);i&&(i.classList.add(At),i.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const i=this._getActive(),n=t===ct,s=e||b(this._getItems(),i,n,this._config.wrap);if(s===i)return;const o=this._getItemIndex(s),r=e=>N.trigger(this._element,e,{relatedTarget:s,direction:this._orderToDirection(t),from:this._getItemIndex(i),to:o});if(r(ft).defaultPrevented)return;if(!i||!s)return;const a=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=s;const l=n?"carousel-item-start":"carousel-item-end",c=n?"carousel-item-next":"carousel-item-prev";s.classList.add(c),d(s),i.classList.add(l),s.classList.add(l),this._queueCallback((()=>{s.classList.remove(l,c),s.classList.add(At),i.classList.remove(At,c,l),this._isSliding=!1,r(pt)}),i,this._isAnimated()),a&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return z.findOne(Ct,this._element)}_getItems(){return z.find(Tt,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return p()?t===dt?ht:ct:t===dt?ct:ht}_orderToDirection(t){return p()?t===ht?dt:ut:t===ht?ut:dt}static jQueryInterface(t){return this.each((function(){const e=Lt.getOrCreateInstance(this,t);if("number"!=typeof t){if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}else e.to(t)}))}}N.on(document,yt,"[data-bs-slide], [data-bs-slide-to]",(function(t){const e=z.getElementFromSelector(this);if(!e||!e.classList.contains(wt))return;t.preventDefault();const i=Lt.getOrCreateInstance(e),n=this.getAttribute("data-bs-slide-to");return n?(i.to(n),void i._maybeEnableCycle()):"next"===F.getDataAttribute(this,"slide")?(i.next(),void i._maybeEnableCycle()):(i.prev(),void i._maybeEnableCycle())})),N.on(window,vt,(()=>{const t=z.find('[data-bs-ride="carousel"]');for(const e of t)Lt.getOrCreateInstance(e)})),m(Lt);const St=".bs.collapse",Dt=`show${St}`,$t=`shown${St}`,It=`hide${St}`,Nt=`hidden${St}`,Pt=`click${St}.data-api`,jt="show",Mt="collapse",Ft="collapsing",Ht=`:scope .${Mt} .${Mt}`,Wt='[data-bs-toggle="collapse"]',Bt={parent:null,toggle:!0},zt={parent:"(null|element)",toggle:"boolean"};class Rt extends W{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const i=z.find(Wt);for(const t of i){const e=z.getSelectorFromElement(t),i=z.find(e).filter((t=>t===this._element));null!==e&&i.length&&this._triggerArray.push(t)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Bt}static get DefaultType(){return zt}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t=>t!==this._element)).map((t=>Rt.getOrCreateInstance(t,{toggle:!1})))),t.length&&t[0]._isTransitioning)return;if(N.trigger(this._element,Dt).defaultPrevented)return;for(const e of t)e.hide();const e=this._getDimension();this._element.classList.remove(Mt),this._element.classList.add(Ft),this._element.style[e]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=`scroll${e[0].toUpperCase()+e.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(Ft),this._element.classList.add(Mt,jt),this._element.style[e]="",N.trigger(this._element,$t)}),this._element,!0),this._element.style[e]=`${this._element[i]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(N.trigger(this._element,It).defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,d(this._element),this._element.classList.add(Ft),this._element.classList.remove(Mt,jt);for(const t of this._triggerArray){const e=z.getElementFromSelector(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0,this._element.style[t]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(Ft),this._element.classList.add(Mt),N.trigger(this._element,Nt)}),this._element,!0)}_isShown(t=this._element){return t.classList.contains(jt)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=r(t.parent),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(Wt);for(const e of t){const t=z.getElementFromSelector(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}}_getFirstLevelChildren(t){const e=z.find(Ht,this._config.parent);return z.find(t,this._config.parent).filter((t=>!e.includes(t)))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const i of t)i.classList.toggle("collapsed",!e),i.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1),this.each((function(){const i=Rt.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t]()}}))}}N.on(document,Pt,Wt,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();for(const t of z.getMultipleElementsFromSelector(this))Rt.getOrCreateInstance(t,{toggle:!1}).toggle()})),m(Rt);var qt="top",Vt="bottom",Kt="right",Qt="left",Xt="auto",Yt=[qt,Vt,Kt,Qt],Ut="start",Gt="end",Jt="clippingParents",Zt="viewport",te="popper",ee="reference",ie=Yt.reduce((function(t,e){return t.concat([e+"-"+Ut,e+"-"+Gt])}),[]),ne=[].concat(Yt,[Xt]).reduce((function(t,e){return t.concat([e,e+"-"+Ut,e+"-"+Gt])}),[]),se="beforeRead",oe="read",re="afterRead",ae="beforeMain",le="main",ce="afterMain",he="beforeWrite",de="write",ue="afterWrite",fe=[se,oe,re,ae,le,ce,he,de,ue];function pe(t){return t?(t.nodeName||"").toLowerCase():null}function me(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function ge(t){return t instanceof me(t).Element||t instanceof Element}function _e(t){return t instanceof me(t).HTMLElement||t instanceof HTMLElement}function be(t){return"undefined"!=typeof ShadowRoot&&(t instanceof me(t).ShadowRoot||t instanceof ShadowRoot)}const ve={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var i=e.styles[t]||{},n=e.attributes[t]||{},s=e.elements[t];_e(s)&&pe(s)&&(Object.assign(s.style,i),Object.keys(n).forEach((function(t){var e=n[t];!1===e?s.removeAttribute(t):s.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,i={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,i.popper),e.styles=i,e.elements.arrow&&Object.assign(e.elements.arrow.style,i.arrow),function(){Object.keys(e.elements).forEach((function(t){var n=e.elements[t],s=e.attributes[t]||{},o=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:i[t]).reduce((function(t,e){return t[e]="",t}),{});_e(n)&&pe(n)&&(Object.assign(n.style,o),Object.keys(s).forEach((function(t){n.removeAttribute(t)})))}))}},requires:["computeStyles"]};function ye(t){return t.split("-")[0]}var we=Math.max,Ae=Math.min,Ee=Math.round;function Te(){var t=navigator.userAgentData;return null!=t&&t.brands&&Array.isArray(t.brands)?t.brands.map((function(t){return t.brand+"/"+t.version})).join(" "):navigator.userAgent}function Ce(){return!/^((?!chrome|android).)*safari/i.test(Te())}function Oe(t,e,i){void 0===e&&(e=!1),void 0===i&&(i=!1);var n=t.getBoundingClientRect(),s=1,o=1;e&&_e(t)&&(s=t.offsetWidth>0&&Ee(n.width)/t.offsetWidth||1,o=t.offsetHeight>0&&Ee(n.height)/t.offsetHeight||1);var r=(ge(t)?me(t):window).visualViewport,a=!Ce()&&i,l=(n.left+(a&&r?r.offsetLeft:0))/s,c=(n.top+(a&&r?r.offsetTop:0))/o,h=n.width/s,d=n.height/o;return{width:h,height:d,top:c,right:l+h,bottom:c+d,left:l,x:l,y:c}}function xe(t){var e=Oe(t),i=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-i)<=1&&(i=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:i,height:n}}function ke(t,e){var i=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(i&&be(i)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Le(t){return me(t).getComputedStyle(t)}function Se(t){return["table","td","th"].indexOf(pe(t))>=0}function De(t){return((ge(t)?t.ownerDocument:t.document)||window.document).documentElement}function $e(t){return"html"===pe(t)?t:t.assignedSlot||t.parentNode||(be(t)?t.host:null)||De(t)}function Ie(t){return _e(t)&&"fixed"!==Le(t).position?t.offsetParent:null}function Ne(t){for(var e=me(t),i=Ie(t);i&&Se(i)&&"static"===Le(i).position;)i=Ie(i);return i&&("html"===pe(i)||"body"===pe(i)&&"static"===Le(i).position)?e:i||function(t){var e=/firefox/i.test(Te());if(/Trident/i.test(Te())&&_e(t)&&"fixed"===Le(t).position)return null;var i=$e(t);for(be(i)&&(i=i.host);_e(i)&&["html","body"].indexOf(pe(i))<0;){var n=Le(i);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||e&&"filter"===n.willChange||e&&n.filter&&"none"!==n.filter)return i;i=i.parentNode}return null}(t)||e}function Pe(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function je(t,e,i){return we(t,Ae(e,i))}function Me(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function Fe(t,e){return e.reduce((function(e,i){return e[i]=t,e}),{})}const He={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,i=t.state,n=t.name,s=t.options,o=i.elements.arrow,r=i.modifiersData.popperOffsets,a=ye(i.placement),l=Pe(a),c=[Qt,Kt].indexOf(a)>=0?"height":"width";if(o&&r){var h=function(t,e){return Me("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:Fe(t,Yt))}(s.padding,i),d=xe(o),u="y"===l?qt:Qt,f="y"===l?Vt:Kt,p=i.rects.reference[c]+i.rects.reference[l]-r[l]-i.rects.popper[c],m=r[l]-i.rects.reference[l],g=Ne(o),_=g?"y"===l?g.clientHeight||0:g.clientWidth||0:0,b=p/2-m/2,v=h[u],y=_-d[c]-h[f],w=_/2-d[c]/2+b,A=je(v,w,y),E=l;i.modifiersData[n]=((e={})[E]=A,e.centerOffset=A-w,e)}},effect:function(t){var e=t.state,i=t.options.element,n=void 0===i?"[data-popper-arrow]":i;null!=n&&("string"!=typeof n||(n=e.elements.popper.querySelector(n)))&&ke(e.elements.popper,n)&&(e.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function We(t){return t.split("-")[1]}var Be={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ze(t){var e,i=t.popper,n=t.popperRect,s=t.placement,o=t.variation,r=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,h=t.roundOffsets,d=t.isFixed,u=r.x,f=void 0===u?0:u,p=r.y,m=void 0===p?0:p,g="function"==typeof h?h({x:f,y:m}):{x:f,y:m};f=g.x,m=g.y;var _=r.hasOwnProperty("x"),b=r.hasOwnProperty("y"),v=Qt,y=qt,w=window;if(c){var A=Ne(i),E="clientHeight",T="clientWidth";A===me(i)&&"static"!==Le(A=De(i)).position&&"absolute"===a&&(E="scrollHeight",T="scrollWidth"),(s===qt||(s===Qt||s===Kt)&&o===Gt)&&(y=Vt,m-=(d&&A===w&&w.visualViewport?w.visualViewport.height:A[E])-n.height,m*=l?1:-1),s!==Qt&&(s!==qt&&s!==Vt||o!==Gt)||(v=Kt,f-=(d&&A===w&&w.visualViewport?w.visualViewport.width:A[T])-n.width,f*=l?1:-1)}var C,O=Object.assign({position:a},c&&Be),x=!0===h?function(t,e){var i=t.x,n=t.y,s=e.devicePixelRatio||1;return{x:Ee(i*s)/s||0,y:Ee(n*s)/s||0}}({x:f,y:m},me(i)):{x:f,y:m};return f=x.x,m=x.y,l?Object.assign({},O,((C={})[y]=b?"0":"",C[v]=_?"0":"",C.transform=(w.devicePixelRatio||1)<=1?"translate("+f+"px, "+m+"px)":"translate3d("+f+"px, "+m+"px, 0)",C)):Object.assign({},O,((e={})[y]=b?m+"px":"",e[v]=_?f+"px":"",e.transform="",e))}const Re={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,i=t.options,n=i.gpuAcceleration,s=void 0===n||n,o=i.adaptive,r=void 0===o||o,a=i.roundOffsets,l=void 0===a||a,c={placement:ye(e.placement),variation:We(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,ze(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:r,roundOffsets:l})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,ze(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}};var qe={passive:!0};const Ve={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,i=t.instance,n=t.options,s=n.scroll,o=void 0===s||s,r=n.resize,a=void 0===r||r,l=me(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&c.forEach((function(t){t.addEventListener("scroll",i.update,qe)})),a&&l.addEventListener("resize",i.update,qe),function(){o&&c.forEach((function(t){t.removeEventListener("scroll",i.update,qe)})),a&&l.removeEventListener("resize",i.update,qe)}},data:{}};var Ke={left:"right",right:"left",bottom:"top",top:"bottom"};function Qe(t){return t.replace(/left|right|bottom|top/g,(function(t){return Ke[t]}))}var Xe={start:"end",end:"start"};function Ye(t){return t.replace(/start|end/g,(function(t){return Xe[t]}))}function Ue(t){var e=me(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Ge(t){return Oe(De(t)).left+Ue(t).scrollLeft}function Je(t){var e=Le(t),i=e.overflow,n=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(i+s+n)}function Ze(t){return["html","body","#document"].indexOf(pe(t))>=0?t.ownerDocument.body:_e(t)&&Je(t)?t:Ze($e(t))}function ti(t,e){var i;void 0===e&&(e=[]);var n=Ze(t),s=n===(null==(i=t.ownerDocument)?void 0:i.body),o=me(n),r=s?[o].concat(o.visualViewport||[],Je(n)?n:[]):n,a=e.concat(r);return s?a:a.concat(ti($e(r)))}function ei(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function ii(t,e,i){return e===Zt?ei(function(t,e){var i=me(t),n=De(t),s=i.visualViewport,o=n.clientWidth,r=n.clientHeight,a=0,l=0;if(s){o=s.width,r=s.height;var c=Ce();(c||!c&&"fixed"===e)&&(a=s.offsetLeft,l=s.offsetTop)}return{width:o,height:r,x:a+Ge(t),y:l}}(t,i)):ge(e)?function(t,e){var i=Oe(t,!1,"fixed"===e);return i.top=i.top+t.clientTop,i.left=i.left+t.clientLeft,i.bottom=i.top+t.clientHeight,i.right=i.left+t.clientWidth,i.width=t.clientWidth,i.height=t.clientHeight,i.x=i.left,i.y=i.top,i}(e,i):ei(function(t){var e,i=De(t),n=Ue(t),s=null==(e=t.ownerDocument)?void 0:e.body,o=we(i.scrollWidth,i.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),r=we(i.scrollHeight,i.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-n.scrollLeft+Ge(t),l=-n.scrollTop;return"rtl"===Le(s||i).direction&&(a+=we(i.clientWidth,s?s.clientWidth:0)-o),{width:o,height:r,x:a,y:l}}(De(t)))}function ni(t){var e,i=t.reference,n=t.element,s=t.placement,o=s?ye(s):null,r=s?We(s):null,a=i.x+i.width/2-n.width/2,l=i.y+i.height/2-n.height/2;switch(o){case qt:e={x:a,y:i.y-n.height};break;case Vt:e={x:a,y:i.y+i.height};break;case Kt:e={x:i.x+i.width,y:l};break;case Qt:e={x:i.x-n.width,y:l};break;default:e={x:i.x,y:i.y}}var c=o?Pe(o):null;if(null!=c){var h="y"===c?"height":"width";switch(r){case Ut:e[c]=e[c]-(i[h]/2-n[h]/2);break;case Gt:e[c]=e[c]+(i[h]/2-n[h]/2)}}return e}function si(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=void 0===n?t.placement:n,o=i.strategy,r=void 0===o?t.strategy:o,a=i.boundary,l=void 0===a?Jt:a,c=i.rootBoundary,h=void 0===c?Zt:c,d=i.elementContext,u=void 0===d?te:d,f=i.altBoundary,p=void 0!==f&&f,m=i.padding,g=void 0===m?0:m,_=Me("number"!=typeof g?g:Fe(g,Yt)),b=u===te?ee:te,v=t.rects.popper,y=t.elements[p?b:u],w=function(t,e,i,n){var s="clippingParents"===e?function(t){var e=ti($e(t)),i=["absolute","fixed"].indexOf(Le(t).position)>=0&&_e(t)?Ne(t):t;return ge(i)?e.filter((function(t){return ge(t)&&ke(t,i)&&"body"!==pe(t)})):[]}(t):[].concat(e),o=[].concat(s,[i]),r=o[0],a=o.reduce((function(e,i){var s=ii(t,i,n);return e.top=we(s.top,e.top),e.right=Ae(s.right,e.right),e.bottom=Ae(s.bottom,e.bottom),e.left=we(s.left,e.left),e}),ii(t,r,n));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}(ge(y)?y:y.contextElement||De(t.elements.popper),l,h,r),A=Oe(t.elements.reference),E=ni({reference:A,element:v,placement:s}),T=ei(Object.assign({},v,E)),C=u===te?T:A,O={top:w.top-C.top+_.top,bottom:C.bottom-w.bottom+_.bottom,left:w.left-C.left+_.left,right:C.right-w.right+_.right},x=t.modifiersData.offset;if(u===te&&x){var k=x[s];Object.keys(O).forEach((function(t){var e=[Kt,Vt].indexOf(t)>=0?1:-1,i=[qt,Vt].indexOf(t)>=0?"y":"x";O[t]+=k[i]*e}))}return O}function oi(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=i.boundary,o=i.rootBoundary,r=i.padding,a=i.flipVariations,l=i.allowedAutoPlacements,c=void 0===l?ne:l,h=We(n),d=h?a?ie:ie.filter((function(t){return We(t)===h})):Yt,u=d.filter((function(t){return c.indexOf(t)>=0}));0===u.length&&(u=d);var f=u.reduce((function(e,i){return e[i]=si(t,{placement:i,boundary:s,rootBoundary:o,padding:r})[ye(i)],e}),{});return Object.keys(f).sort((function(t,e){return f[t]-f[e]}))}const ri={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0===r||r,l=i.fallbackPlacements,c=i.padding,h=i.boundary,d=i.rootBoundary,u=i.altBoundary,f=i.flipVariations,p=void 0===f||f,m=i.allowedAutoPlacements,g=e.options.placement,_=ye(g),b=l||(_!==g&&p?function(t){if(ye(t)===Xt)return[];var e=Qe(t);return[Ye(t),e,Ye(e)]}(g):[Qe(g)]),v=[g].concat(b).reduce((function(t,i){return t.concat(ye(i)===Xt?oi(e,{placement:i,boundary:h,rootBoundary:d,padding:c,flipVariations:p,allowedAutoPlacements:m}):i)}),[]),y=e.rects.reference,w=e.rects.popper,A=new Map,E=!0,T=v[0],C=0;C<v.length;C++){var O=v[C],x=ye(O),k=We(O)===Ut,L=[qt,Vt].indexOf(x)>=0,S=L?"width":"height",D=si(e,{placement:O,boundary:h,rootBoundary:d,altBoundary:u,padding:c}),$=L?k?Kt:Qt:k?Vt:qt;y[S]>w[S]&&($=Qe($));var I=Qe($),N=[];if(o&&N.push(D[x]<=0),a&&N.push(D[$]<=0,D[I]<=0),N.every((function(t){return t}))){T=O,E=!1;break}A.set(O,N)}if(E)for(var P=function(t){var e=v.find((function(e){var i=A.get(e);if(i)return i.slice(0,t).every((function(t){return t}))}));if(e)return T=e,"break"},j=p?3:1;j>0&&"break"!==P(j);j--);e.placement!==T&&(e.modifiersData[n]._skip=!0,e.placement=T,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function ai(t,e,i){return void 0===i&&(i={x:0,y:0}),{top:t.top-e.height-i.y,right:t.right-e.width+i.x,bottom:t.bottom-e.height+i.y,left:t.left-e.width-i.x}}function li(t){return[qt,Kt,Vt,Qt].some((function(e){return t[e]>=0}))}const ci={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,i=t.name,n=e.rects.reference,s=e.rects.popper,o=e.modifiersData.preventOverflow,r=si(e,{elementContext:"reference"}),a=si(e,{altBoundary:!0}),l=ai(r,n),c=ai(a,s,o),h=li(l),d=li(c);e.modifiersData[i]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:h,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":h,"data-popper-escaped":d})}},hi={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.offset,o=void 0===s?[0,0]:s,r=ne.reduce((function(t,i){return t[i]=function(t,e,i){var n=ye(t),s=[Qt,qt].indexOf(n)>=0?-1:1,o="function"==typeof i?i(Object.assign({},e,{placement:t})):i,r=o[0],a=o[1];return r=r||0,a=(a||0)*s,[Qt,Kt].indexOf(n)>=0?{x:a,y:r}:{x:r,y:a}}(i,e.rects,o),t}),{}),a=r[e.placement],l=a.x,c=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[n]=r}},di={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,i=t.name;e.modifiersData[i]=ni({reference:e.rects.reference,element:e.rects.popper,placement:e.placement})},data:{}},ui={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0!==r&&r,l=i.boundary,c=i.rootBoundary,h=i.altBoundary,d=i.padding,u=i.tether,f=void 0===u||u,p=i.tetherOffset,m=void 0===p?0:p,g=si(e,{boundary:l,rootBoundary:c,padding:d,altBoundary:h}),_=ye(e.placement),b=We(e.placement),v=!b,y=Pe(_),w="x"===y?"y":"x",A=e.modifiersData.popperOffsets,E=e.rects.reference,T=e.rects.popper,C="function"==typeof m?m(Object.assign({},e.rects,{placement:e.placement})):m,O="number"==typeof C?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C),x=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,k={x:0,y:0};if(A){if(o){var L,S="y"===y?qt:Qt,D="y"===y?Vt:Kt,$="y"===y?"height":"width",I=A[y],N=I+g[S],P=I-g[D],j=f?-T[$]/2:0,M=b===Ut?E[$]:T[$],F=b===Ut?-T[$]:-E[$],H=e.elements.arrow,W=f&&H?xe(H):{width:0,height:0},B=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},z=B[S],R=B[D],q=je(0,E[$],W[$]),V=v?E[$]/2-j-q-z-O.mainAxis:M-q-z-O.mainAxis,K=v?-E[$]/2+j+q+R+O.mainAxis:F+q+R+O.mainAxis,Q=e.elements.arrow&&Ne(e.elements.arrow),X=Q?"y"===y?Q.clientTop||0:Q.clientLeft||0:0,Y=null!=(L=null==x?void 0:x[y])?L:0,U=I+K-Y,G=je(f?Ae(N,I+V-Y-X):N,I,f?we(P,U):P);A[y]=G,k[y]=G-I}if(a){var J,Z="x"===y?qt:Qt,tt="x"===y?Vt:Kt,et=A[w],it="y"===w?"height":"width",nt=et+g[Z],st=et-g[tt],ot=-1!==[qt,Qt].indexOf(_),rt=null!=(J=null==x?void 0:x[w])?J:0,at=ot?nt:et-E[it]-T[it]-rt+O.altAxis,lt=ot?et+E[it]+T[it]-rt-O.altAxis:st,ct=f&&ot?function(t,e,i){var n=je(t,e,i);return n>i?i:n}(at,et,lt):je(f?at:nt,et,f?lt:st);A[w]=ct,k[w]=ct-et}e.modifiersData[n]=k}},requiresIfExists:["offset"]};function fi(t,e,i){void 0===i&&(i=!1);var n,s,o=_e(e),r=_e(e)&&function(t){var e=t.getBoundingClientRect(),i=Ee(e.width)/t.offsetWidth||1,n=Ee(e.height)/t.offsetHeight||1;return 1!==i||1!==n}(e),a=De(e),l=Oe(t,r,i),c={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(o||!o&&!i)&&(("body"!==pe(e)||Je(a))&&(c=(n=e)!==me(n)&&_e(n)?{scrollLeft:(s=n).scrollLeft,scrollTop:s.scrollTop}:Ue(n)),_e(e)?((h=Oe(e,!0)).x+=e.clientLeft,h.y+=e.clientTop):a&&(h.x=Ge(a))),{x:l.left+c.scrollLeft-h.x,y:l.top+c.scrollTop-h.y,width:l.width,height:l.height}}function pi(t){var e=new Map,i=new Set,n=[];function s(t){i.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!i.has(t)){var n=e.get(t);n&&s(n)}})),n.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){i.has(t.name)||s(t)})),n}var mi={placement:"bottom",modifiers:[],strategy:"absolute"};function gi(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function _i(t){void 0===t&&(t={});var e=t,i=e.defaultModifiers,n=void 0===i?[]:i,s=e.defaultOptions,o=void 0===s?mi:s;return function(t,e,i){void 0===i&&(i=o);var s,r,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},mi,o),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},l=[],c=!1,h={state:a,setOptions:function(i){var s="function"==typeof i?i(a.options):i;d(),a.options=Object.assign({},o,a.options,s),a.scrollParents={reference:ge(t)?ti(t):t.contextElement?ti(t.contextElement):[],popper:ti(e)};var r,c,u=function(t){var e=pi(t);return fe.reduce((function(t,i){return t.concat(e.filter((function(t){return t.phase===i})))}),[])}((r=[].concat(n,a.options.modifiers),c=r.reduce((function(t,e){var i=t[e.name];return t[e.name]=i?Object.assign({},i,e,{options:Object.assign({},i.options,e.options),data:Object.assign({},i.data,e.data)}):e,t}),{}),Object.keys(c).map((function(t){return c[t]}))));return a.orderedModifiers=u.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,i=t.options,n=void 0===i?{}:i,s=t.effect;if("function"==typeof s){var o=s({state:a,name:e,instance:h,options:n});l.push(o||function(){})}})),h.update()},forceUpdate:function(){if(!c){var t=a.elements,e=t.reference,i=t.popper;if(gi(e,i)){a.rects={reference:fi(e,Ne(i),"fixed"===a.options.strategy),popper:xe(i)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}));for(var n=0;n<a.orderedModifiers.length;n++)if(!0!==a.reset){var s=a.orderedModifiers[n],o=s.fn,r=s.options,l=void 0===r?{}:r,d=s.name;"function"==typeof o&&(a=o({state:a,options:l,name:d,instance:h})||a)}else a.reset=!1,n=-1}}},update:(s=function(){return new Promise((function(t){h.forceUpdate(),t(a)}))},function(){return r||(r=new Promise((function(t){Promise.resolve().then((function(){r=void 0,t(s())}))}))),r}),destroy:function(){d(),c=!0}};if(!gi(t,e))return h;function d(){l.forEach((function(t){return t()})),l=[]}return h.setOptions(i).then((function(t){!c&&i.onFirstUpdate&&i.onFirstUpdate(t)})),h}}var bi=_i(),vi=_i({defaultModifiers:[Ve,di,Re,ve]}),yi=_i({defaultModifiers:[Ve,di,Re,ve,hi,ri,ui,He,ci]});const wi=Object.freeze(Object.defineProperty({__proto__:null,afterMain:ce,afterRead:re,afterWrite:ue,applyStyles:ve,arrow:He,auto:Xt,basePlacements:Yt,beforeMain:ae,beforeRead:se,beforeWrite:he,bottom:Vt,clippingParents:Jt,computeStyles:Re,createPopper:yi,createPopperBase:bi,createPopperLite:vi,detectOverflow:si,end:Gt,eventListeners:Ve,flip:ri,hide:ci,left:Qt,main:le,modifierPhases:fe,offset:hi,placements:ne,popper:te,popperGenerator:_i,popperOffsets:di,preventOverflow:ui,read:oe,reference:ee,right:Kt,start:Ut,top:qt,variationPlacements:ie,viewport:Zt,write:de},Symbol.toStringTag,{value:"Module"})),Ai="dropdown",Ei=".bs.dropdown",Ti=".data-api",Ci="ArrowUp",Oi="ArrowDown",xi=`hide${Ei}`,ki=`hidden${Ei}`,Li=`show${Ei}`,Si=`shown${Ei}`,Di=`click${Ei}${Ti}`,$i=`keydown${Ei}${Ti}`,Ii=`keyup${Ei}${Ti}`,Ni="show",Pi='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',ji=`${Pi}.${Ni}`,Mi=".dropdown-menu",Fi=p()?"top-end":"top-start",Hi=p()?"top-start":"top-end",Wi=p()?"bottom-end":"bottom-start",Bi=p()?"bottom-start":"bottom-end",zi=p()?"left-start":"right-start",Ri=p()?"right-start":"left-start",qi={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Vi={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Ki extends W{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=z.next(this._element,Mi)[0]||z.prev(this._element,Mi)[0]||z.findOne(Mi,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return qi}static get DefaultType(){return Vi}static get NAME(){return Ai}toggle(){return this._isShown()?this.hide():this.show()}show(){if(l(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!N.trigger(this._element,Li,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const t of[].concat(...document.body.children))N.on(t,"mouseover",h);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Ni),this._element.classList.add(Ni),N.trigger(this._element,Si,t)}}hide(){if(l(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!N.trigger(this._element,xi,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))N.off(t,"mouseover",h);this._popper&&this._popper.destroy(),this._menu.classList.remove(Ni),this._element.classList.remove(Ni),this._element.setAttribute("aria-expanded","false"),F.removeDataAttribute(this._menu,"popper"),N.trigger(this._element,ki,t),this._element.focus()}}_getConfig(t){if("object"==typeof(t=super._getConfig(t)).reference&&!o(t.reference)&&"function"!=typeof t.reference.getBoundingClientRect)throw new TypeError(`${Ai.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(void 0===wi)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let t=this._element;"parent"===this._config.reference?t=this._parent:o(this._config.reference)?t=r(this._config.reference):"object"==typeof this._config.reference&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=yi(t,this._menu,e)}_isShown(){return this._menu.classList.contains(Ni)}_getPlacement(){const t=this._parent;if(t.classList.contains("dropend"))return zi;if(t.classList.contains("dropstart"))return Ri;if(t.classList.contains("dropup-center"))return"top";if(t.classList.contains("dropdown-center"))return"bottom";const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains("dropup")?e?Hi:Fi:e?Bi:Wi}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(F.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...g(this._config.popperConfig,[void 0,t])}}_selectMenuItem({key:t,target:e}){const i=z.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter((t=>a(t)));i.length&&b(i,e,t===Oi,!i.includes(e)).focus()}static jQueryInterface(t){return this.each((function(){const e=Ki.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}static clearMenus(t){if(2===t.button||"keyup"===t.type&&"Tab"!==t.key)return;const e=z.find(ji);for(const i of e){const e=Ki.getInstance(i);if(!e||!1===e._config.autoClose)continue;const n=t.composedPath(),s=n.includes(e._menu);if(n.includes(e._element)||"inside"===e._config.autoClose&&!s||"outside"===e._config.autoClose&&s)continue;if(e._menu.contains(t.target)&&("keyup"===t.type&&"Tab"===t.key||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const o={relatedTarget:e._element};"click"===t.type&&(o.clickEvent=t),e._completeHide(o)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),i="Escape"===t.key,n=[Ci,Oi].includes(t.key);if(!n&&!i)return;if(e&&!i)return;t.preventDefault();const s=this.matches(Pi)?this:z.prev(this,Pi)[0]||z.next(this,Pi)[0]||z.findOne(Pi,t.delegateTarget.parentNode),o=Ki.getOrCreateInstance(s);if(n)return t.stopPropagation(),o.show(),void o._selectMenuItem(t);o._isShown()&&(t.stopPropagation(),o.hide(),s.focus())}}N.on(document,$i,Pi,Ki.dataApiKeydownHandler),N.on(document,$i,Mi,Ki.dataApiKeydownHandler),N.on(document,Di,Ki.clearMenus),N.on(document,Ii,Ki.clearMenus),N.on(document,Di,Pi,(function(t){t.preventDefault(),Ki.getOrCreateInstance(this).toggle()})),m(Ki);const Qi="backdrop",Xi="show",Yi=`mousedown.bs.${Qi}`,Ui={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Gi={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Ji extends H{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return Ui}static get DefaultType(){return Gi}static get NAME(){return Qi}show(t){if(!this._config.isVisible)return void g(t);this._append();const e=this._getElement();this._config.isAnimated&&d(e),e.classList.add(Xi),this._emulateAnimation((()=>{g(t)}))}hide(t){this._config.isVisible?(this._getElement().classList.remove(Xi),this._emulateAnimation((()=>{this.dispose(),g(t)}))):g(t)}dispose(){this._isAppended&&(N.off(this._element,Yi),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add("fade"),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=r(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),N.on(t,Yi,(()=>{g(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(t){_(t,this._getElement(),this._config.isAnimated)}}const Zi=".bs.focustrap",tn=`focusin${Zi}`,en=`keydown.tab${Zi}`,nn="backward",sn={autofocus:!0,trapElement:null},on={autofocus:"boolean",trapElement:"element"};class rn extends H{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return sn}static get DefaultType(){return on}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),N.off(document,Zi),N.on(document,tn,(t=>this._handleFocusin(t))),N.on(document,en,(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,N.off(document,Zi))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const i=z.focusableChildren(e);0===i.length?e.focus():this._lastTabNavDirection===nn?i[i.length-1].focus():i[0].focus()}_handleKeydown(t){"Tab"===t.key&&(this._lastTabNavDirection=t.shiftKey?nn:"forward")}}const an=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",ln=".sticky-top",cn="padding-right",hn="margin-right";class dn{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,cn,(e=>e+t)),this._setElementAttributes(an,cn,(e=>e+t)),this._setElementAttributes(ln,hn,(e=>e-t))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,cn),this._resetElementAttributes(an,cn),this._resetElementAttributes(ln,hn)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const n=this.getWidth();this._applyManipulationCallback(t,(t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+n)return;this._saveInitialAttribute(t,e);const s=window.getComputedStyle(t).getPropertyValue(e);t.style.setProperty(e,`${i(Number.parseFloat(s))}px`)}))}_saveInitialAttribute(t,e){const i=t.style.getPropertyValue(e);i&&F.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){this._applyManipulationCallback(t,(t=>{const i=F.getDataAttribute(t,e);null!==i?(F.removeDataAttribute(t,e),t.style.setProperty(e,i)):t.style.removeProperty(e)}))}_applyManipulationCallback(t,e){if(o(t))e(t);else for(const i of z.find(t,this._element))e(i)}}const un=".bs.modal",fn=`hide${un}`,pn=`hidePrevented${un}`,mn=`hidden${un}`,gn=`show${un}`,_n=`shown${un}`,bn=`resize${un}`,vn=`click.dismiss${un}`,yn=`mousedown.dismiss${un}`,wn=`keydown.dismiss${un}`,An=`click${un}.data-api`,En="modal-open",Tn="show",Cn="modal-static",On={backdrop:!0,focus:!0,keyboard:!0},xn={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class kn extends W{constructor(t,e){super(t,e),this._dialog=z.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new dn,this._addEventListeners()}static get Default(){return On}static get DefaultType(){return xn}static get NAME(){return"modal"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||N.trigger(this._element,gn,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(En),this._adjustDialog(),this._backdrop.show((()=>this._showElement(t))))}hide(){this._isShown&&!this._isTransitioning&&(N.trigger(this._element,fn).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Tn),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated())))}dispose(){N.off(window,un),N.off(this._dialog,un),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Ji({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new rn({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=z.findOne(".modal-body",this._dialog);e&&(e.scrollTop=0),d(this._element),this._element.classList.add(Tn),this._queueCallback((()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,N.trigger(this._element,_n,{relatedTarget:t})}),this._dialog,this._isAnimated())}_addEventListeners(){N.on(this._element,wn,(t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())})),N.on(window,bn,(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),N.on(this._element,yn,(t=>{N.one(this._element,vn,(e=>{this._element===t.target&&this._element===e.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(En),this._resetAdjustments(),this._scrollBar.reset(),N.trigger(this._element,mn)}))}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(N.trigger(this._element,pn).defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._element.style.overflowY;"hidden"===e||this._element.classList.contains(Cn)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(Cn),this._queueCallback((()=>{this._element.classList.remove(Cn),this._queueCallback((()=>{this._element.style.overflowY=e}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;if(i&&!t){const t=p()?"paddingLeft":"paddingRight";this._element.style[t]=`${e}px`}if(!i&&t){const t=p()?"paddingRight":"paddingLeft";this._element.style[t]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const i=kn.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}N.on(document,An,'[data-bs-toggle="modal"]',(function(t){const e=z.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),N.one(e,gn,(t=>{t.defaultPrevented||N.one(e,mn,(()=>{a(this)&&this.focus()}))}));const i=z.findOne(".modal.show");i&&kn.getInstance(i).hide(),kn.getOrCreateInstance(e).toggle(this)})),R(kn),m(kn);const Ln=".bs.offcanvas",Sn=".data-api",Dn=`load${Ln}${Sn}`,$n="show",In="showing",Nn="hiding",Pn=".offcanvas.show",jn=`show${Ln}`,Mn=`shown${Ln}`,Fn=`hide${Ln}`,Hn=`hidePrevented${Ln}`,Wn=`hidden${Ln}`,Bn=`resize${Ln}`,zn=`click${Ln}${Sn}`,Rn=`keydown.dismiss${Ln}`,qn={backdrop:!0,keyboard:!0,scroll:!1},Vn={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Kn extends W{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return qn}static get DefaultType(){return Vn}static get NAME(){return"offcanvas"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||N.trigger(this._element,jn,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||(new dn).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(In),this._queueCallback((()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add($n),this._element.classList.remove(In),N.trigger(this._element,Mn,{relatedTarget:t})}),this._element,!0))}hide(){this._isShown&&(N.trigger(this._element,Fn).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Nn),this._backdrop.hide(),this._queueCallback((()=>{this._element.classList.remove($n,Nn),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new dn).reset(),N.trigger(this._element,Wn)}),this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=Boolean(this._config.backdrop);return new Ji({className:"offcanvas-backdrop",isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?()=>{"static"!==this._config.backdrop?this.hide():N.trigger(this._element,Hn)}:null})}_initializeFocusTrap(){return new rn({trapElement:this._element})}_addEventListeners(){N.on(this._element,Rn,(t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():N.trigger(this._element,Hn))}))}static jQueryInterface(t){return this.each((function(){const e=Kn.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}N.on(document,zn,'[data-bs-toggle="offcanvas"]',(function(t){const e=z.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),l(this))return;N.one(e,Wn,(()=>{a(this)&&this.focus()}));const i=z.findOne(Pn);i&&i!==e&&Kn.getInstance(i).hide(),Kn.getOrCreateInstance(e).toggle(this)})),N.on(window,Dn,(()=>{for(const t of z.find(Pn))Kn.getOrCreateInstance(t).show()})),N.on(window,Bn,(()=>{for(const t of z.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(t).position&&Kn.getOrCreateInstance(t).hide()})),R(Kn),m(Kn);const Qn={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Xn=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Yn=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Un=(t,e)=>{const i=t.nodeName.toLowerCase();return e.includes(i)?!Xn.has(i)||Boolean(Yn.test(t.nodeValue)):e.filter((t=>t instanceof RegExp)).some((t=>t.test(i)))},Gn={allowList:Qn,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Jn={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Zn={entry:"(string|element|function|null)",selector:"(string|element)"};class ts extends H{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return Gn}static get DefaultType(){return Jn}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map((t=>this._resolvePossibleFunction(t))).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[e,i]of Object.entries(this._config.content))this._setContent(t,i,e);const e=t.children[0],i=this._resolvePossibleFunction(this._config.extraClass);return i&&e.classList.add(...i.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,i]of Object.entries(t))super._typeCheckConfig({selector:e,entry:i},Zn)}_setContent(t,e,i){const n=z.findOne(i,t);n&&((e=this._resolvePossibleFunction(e))?o(e)?this._putElementInTemplate(r(e),n):this._config.html?n.innerHTML=this._maybeSanitize(e):n.textContent=e:n.remove())}_maybeSanitize(t){return this._config.sanitize?function(t,e,i){if(!t.length)return t;if(i&&"function"==typeof i)return i(t);const n=(new window.DOMParser).parseFromString(t,"text/html"),s=[].concat(...n.body.querySelectorAll("*"));for(const t of s){const i=t.nodeName.toLowerCase();if(!Object.keys(e).includes(i)){t.remove();continue}const n=[].concat(...t.attributes),s=[].concat(e["*"]||[],e[i]||[]);for(const e of n)Un(e,s)||t.removeAttribute(e.nodeName)}return n.body.innerHTML}(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return g(t,[void 0,this])}_putElementInTemplate(t,e){if(this._config.html)return e.innerHTML="",void e.append(t);e.textContent=t.textContent}}const es=new Set(["sanitize","allowList","sanitizeFn"]),is="fade",ns="show",ss=".tooltip-inner",os=".modal",rs="hide.bs.modal",as="hover",ls="focus",cs={AUTO:"auto",TOP:"top",RIGHT:p()?"left":"right",BOTTOM:"bottom",LEFT:p()?"right":"left"},hs={allowList:Qn,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},ds={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class us extends W{constructor(t,e){if(void 0===wi)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return hs}static get DefaultType(){return ds}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),N.off(this._element.closest(os),rs,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const t=N.trigger(this._element,this.constructor.eventName("show")),e=(c(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!e)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:n}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(n.append(i),N.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(i),i.classList.add(ns),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))N.on(t,"mouseover",h);this._queueCallback((()=>{N.trigger(this._element,this.constructor.eventName("shown")),!1===this._isHovered&&this._leave(),this._isHovered=!1}),this.tip,this._isAnimated())}hide(){if(this._isShown()&&!N.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(ns),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))N.off(t,"mouseover",h);this._activeTrigger.click=!1,this._activeTrigger[ls]=!1,this._activeTrigger[as]=!1,this._isHovered=null,this._queueCallback((()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),N.trigger(this._element,this.constructor.eventName("hidden")))}),this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(is,ns),e.classList.add(`bs-${this.constructor.NAME}-auto`);const i=(t=>{do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t));return t})(this.constructor.NAME).toString();return e.setAttribute("id",i),this._isAnimated()&&e.classList.add(is),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new ts({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[ss]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(is)}_isShown(){return this.tip&&this.tip.classList.contains(ns)}_createPopper(t){const e=g(this._config.placement,[this,t,this._element]),i=cs[e.toUpperCase()];return yi(this._element,t,this._getPopperConfig(i))}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_resolvePossibleFunction(t){return g(t,[this._element,this._element])}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:t=>{this._getTipElement().setAttribute("data-popper-placement",t.state.placement)}}]};return{...e,...g(this._config.popperConfig,[void 0,e])}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if("click"===e)N.on(this._element,this.constructor.eventName("click"),this._config.selector,(t=>{this._initializeOnDelegatedTarget(t).toggle()}));else if("manual"!==e){const t=e===as?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),i=e===as?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");N.on(this._element,t,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusin"===t.type?ls:as]=!0,e._enter()})),N.on(this._element,i,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusout"===t.type?ls:as]=e._element.contains(t.relatedTarget),e._leave()}))}this._hideModalHandler=()=>{this._element&&this.hide()},N.on(this._element.closest(os),rs,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout((()=>{this._isHovered&&this.show()}),this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout((()=>{this._isHovered||this.hide()}),this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=F.getDataAttributes(this._element);for(const t of Object.keys(e))es.has(t)&&delete e[t];return t={...e,..."object"==typeof t&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=!1===t.container?document.body:r(t.container),"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[e,i]of Object.entries(this._config))this.constructor.Default[e]!==i&&(t[e]=i);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each((function(){const e=us.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}m(us);const fs=".popover-header",ps=".popover-body",ms={...us.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},gs={...us.DefaultType,content:"(null|string|element|function)"};class _s extends us{static get Default(){return ms}static get DefaultType(){return gs}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[fs]:this._getTitle(),[ps]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each((function(){const e=_s.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}m(_s);const bs=".bs.scrollspy",vs=`activate${bs}`,ys=`click${bs}`,ws=`load${bs}.data-api`,As="active",Es="[href]",Ts=".nav-link",Cs=`${Ts}, .nav-item > ${Ts}, .list-group-item`,Os={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},xs={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class ks extends W{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Os}static get DefaultType(){return xs}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=r(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,"string"==typeof t.threshold&&(t.threshold=t.threshold.split(",").map((t=>Number.parseFloat(t)))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(N.off(this._config.target,ys),N.on(this._config.target,ys,Es,(t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const i=this._rootElement||window,n=e.offsetTop-this._element.offsetTop;if(i.scrollTo)return void i.scrollTo({top:n,behavior:"smooth"});i.scrollTop=n}})))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver((t=>this._observerCallback(t)),t)}_observerCallback(t){const e=t=>this._targetLinks.get(`#${t.target.id}`),i=t=>{this._previousScrollData.visibleEntryTop=t.target.offsetTop,this._process(e(t))},n=(this._rootElement||document.documentElement).scrollTop,s=n>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=n;for(const o of t){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(o));continue}const t=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(s&&t){if(i(o),!n)return}else s||t||i(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=z.find(Es,this._config.target);for(const e of t){if(!e.hash||l(e))continue;const t=z.findOne(decodeURI(e.hash),this._element);a(t)&&(this._targetLinks.set(decodeURI(e.hash),e),this._observableSections.set(e.hash,t))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(As),this._activateParents(t),N.trigger(this._element,vs,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains("dropdown-item"))z.findOne(".dropdown-toggle",t.closest(".dropdown")).classList.add(As);else for(const e of z.parents(t,".nav, .list-group"))for(const t of z.prev(e,Cs))t.classList.add(As)}_clearActiveClass(t){t.classList.remove(As);const e=z.find(`${Es}.${As}`,t);for(const t of e)t.classList.remove(As)}static jQueryInterface(t){return this.each((function(){const e=ks.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}N.on(window,ws,(()=>{for(const t of z.find('[data-bs-spy="scroll"]'))ks.getOrCreateInstance(t)})),m(ks);const Ls=".bs.tab",Ss=`hide${Ls}`,Ds=`hidden${Ls}`,$s=`show${Ls}`,Is=`shown${Ls}`,Ns=`click${Ls}`,Ps=`keydown${Ls}`,js=`load${Ls}`,Ms="ArrowLeft",Fs="ArrowRight",Hs="ArrowUp",Ws="ArrowDown",Bs="Home",zs="End",Rs="active",qs="fade",Vs="show",Ks=".dropdown-toggle",Qs=`:not(${Ks})`,Xs='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Ys=`.nav-link${Qs}, .list-group-item${Qs}, [role="tab"]${Qs}, ${Xs}`,Us=`.${Rs}[data-bs-toggle="tab"], .${Rs}[data-bs-toggle="pill"], .${Rs}[data-bs-toggle="list"]`;class Gs extends W{constructor(t){super(t),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),N.on(this._element,Ps,(t=>this._keydown(t))))}static get NAME(){return"tab"}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),i=e?N.trigger(e,Ss,{relatedTarget:t}):null;N.trigger(t,$s,{relatedTarget:e}).defaultPrevented||i&&i.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){t&&(t.classList.add(Rs),this._activate(z.getElementFromSelector(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),N.trigger(t,Is,{relatedTarget:e})):t.classList.add(Vs)}),t,t.classList.contains(qs)))}_deactivate(t,e){t&&(t.classList.remove(Rs),t.blur(),this._deactivate(z.getElementFromSelector(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),N.trigger(t,Ds,{relatedTarget:e})):t.classList.remove(Vs)}),t,t.classList.contains(qs)))}_keydown(t){if(![Ms,Fs,Hs,Ws,Bs,zs].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=this._getChildren().filter((t=>!l(t)));let i;if([Bs,zs].includes(t.key))i=e[t.key===Bs?0:e.length-1];else{const n=[Fs,Ws].includes(t.key);i=b(e,t.target,n,!0)}i&&(i.focus({preventScroll:!0}),Gs.getOrCreateInstance(i).show())}_getChildren(){return z.find(Ys,this._parent)}_getActiveElem(){return this._getChildren().find((t=>this._elemIsActive(t)))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const t of e)this._setInitialAttributesOnChild(t)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),i=this._getOuterElement(t);t.setAttribute("aria-selected",e),i!==t&&this._setAttributeIfNotExists(i,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=z.getElementFromSelector(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,e){const i=this._getOuterElement(t);if(!i.classList.contains("dropdown"))return;const n=(t,n)=>{const s=z.findOne(t,i);s&&s.classList.toggle(n,e)};n(Ks,Rs),n(".dropdown-menu",Vs),i.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,i){t.hasAttribute(e)||t.setAttribute(e,i)}_elemIsActive(t){return t.classList.contains(Rs)}_getInnerElement(t){return t.matches(Ys)?t:z.findOne(Ys,t)}_getOuterElement(t){return t.closest(".nav-item, .list-group-item")||t}static jQueryInterface(t){return this.each((function(){const e=Gs.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}N.on(document,Ns,Xs,(function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),l(this)||Gs.getOrCreateInstance(this).show()})),N.on(window,js,(()=>{for(const t of z.find(Us))Gs.getOrCreateInstance(t)})),m(Gs);const Js=".bs.toast",Zs=`mouseover${Js}`,to=`mouseout${Js}`,eo=`focusin${Js}`,io=`focusout${Js}`,no=`hide${Js}`,so=`hidden${Js}`,oo=`show${Js}`,ro=`shown${Js}`,ao="hide",lo="show",co="showing",ho={animation:"boolean",autohide:"boolean",delay:"number"},uo={animation:!0,autohide:!0,delay:5e3};class fo extends W{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return uo}static get DefaultType(){return ho}static get NAME(){return"toast"}show(){N.trigger(this._element,oo).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(ao),d(this._element),this._element.classList.add(lo,co),this._queueCallback((()=>{this._element.classList.remove(co),N.trigger(this._element,ro),this._maybeScheduleHide()}),this._element,this._config.animation))}hide(){this.isShown()&&(N.trigger(this._element,no).defaultPrevented||(this._element.classList.add(co),this._queueCallback((()=>{this._element.classList.add(ao),this._element.classList.remove(co,lo),N.trigger(this._element,so)}),this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(lo),super.dispose()}isShown(){return this._element.classList.contains(lo)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e}if(e)return void this._clearTimeout();const i=t.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){N.on(this._element,Zs,(t=>this._onInteraction(t,!0))),N.on(this._element,to,(t=>this._onInteraction(t,!1))),N.on(this._element,eo,(t=>this._onInteraction(t,!0))),N.on(this._element,io,(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=fo.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return R(fo),m(fo),{Alert:Q,Button:Y,Carousel:Lt,Collapse:Rt,Dropdown:Ki,Modal:kn,Offcanvas:Kn,Popover:_s,ScrollSpy:ks,Tab:Gs,Toast:fo,Tooltip:us}}));
//# sourceMappingURL=bootstrap.bundle.min.js.map
/*! Select2 4.1.0-rc.0 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function(n){"function"==typeof define&&define.amd?define(["jquery"],n):"object"==typeof module&&module.exports?module.exports=function(e,t){return void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),n(t),t}:n(jQuery)}(function(t){var e,n,p,o,r,h,f,g,m,v,y,s,i,_,a,a=(t&&t.fn&&t.fn.select2&&t.fn.select2.amd&&(u=t.fn.select2.amd),u&&u.requirejs||(u?n=u:u={},g={},m={},v={},y={},s=Object.prototype.hasOwnProperty,i=[].slice,_=/\.js$/,h=function(e,t){var n,s,i=c(e),o=i[0],t=t[1];return e=i[1],o&&(n=x(o=l(o,t))),o?e=n&&n.normalize?n.normalize(e,(s=t,function(e){return l(e,s)})):l(e,t):(o=(i=c(e=l(e,t)))[0],e=i[1],o&&(n=x(o))),{f:o?o+"!"+e:e,n:e,pr:o,p:n}},f={require:function(e){return w(e)},exports:function(e){var t=g[e];return void 0!==t?t:g[e]={}},module:function(e){return{id:e,uri:"",exports:g[e],config:(t=e,function(){return v&&v.config&&v.config[t]||{}})};var t}},o=function(e,t,n,s){var i,o,r,a,l,c=[],u=typeof n,d=A(s=s||e);if("undefined"==u||"function"==u){for(t=!t.length&&n.length?["require","exports","module"]:t,a=0;a<t.length;a+=1)if("require"===(o=(r=h(t[a],d)).f))c[a]=f.require(e);else if("exports"===o)c[a]=f.exports(e),l=!0;else if("module"===o)i=c[a]=f.module(e);else if(b(g,o)||b(m,o)||b(y,o))c[a]=x(o);else{if(!r.p)throw new Error(e+" missing "+o);r.p.load(r.n,w(s,!0),function(t){return function(e){g[t]=e}}(o),{}),c[a]=g[o]}u=n?n.apply(g[e],c):void 0,e&&(i&&i.exports!==p&&i.exports!==g[e]?g[e]=i.exports:u===p&&l||(g[e]=u))}else e&&(g[e]=n)},e=n=r=function(e,t,n,s,i){if("string"==typeof e)return f[e]?f[e](t):x(h(e,A(t)).f);if(!e.splice){if((v=e).deps&&r(v.deps,v.callback),!t)return;t.splice?(e=t,t=n,n=null):e=p}return t=t||function(){},"function"==typeof n&&(n=s,s=i),s?o(p,e,t,n):setTimeout(function(){o(p,e,t,n)},4),r},r.config=function(e){return r(e)},e._defined=g,(a=function(e,t,n){if("string"!=typeof e)throw new Error("See almond README: incorrect module build, no module name");t.splice||(n=t,t=[]),b(g,e)||b(m,e)||(m[e]=[e,t,n])}).amd={jQuery:!0},u.requirejs=e,u.require=n,u.define=a),u.define("almond",function(){}),u.define("jquery",[],function(){var e=t||$;return null==e&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),e}),u.define("select2/utils",["jquery"],function(o){var s={};function c(e){var t,n=e.prototype,s=[];for(t in n)"function"==typeof n[t]&&"constructor"!==t&&s.push(t);return s}s.Extend=function(e,t){var n,s={}.hasOwnProperty;function i(){this.constructor=e}for(n in t)s.call(t,n)&&(e[n]=t[n]);return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e},s.Decorate=function(s,i){var e=c(i),t=c(s);function o(){var e=Array.prototype.unshift,t=i.prototype.constructor.length,n=s.prototype.constructor;0<t&&(e.call(arguments,s.prototype.constructor),n=i.prototype.constructor),n.apply(this,arguments)}i.displayName=s.displayName,o.prototype=new function(){this.constructor=o};for(var n=0;n<t.length;n++){var r=t[n];o.prototype[r]=s.prototype[r]}for(var a=0;a<e.length;a++){var l=e[a];o.prototype[l]=function(e){var t=function(){};e in o.prototype&&(t=o.prototype[e]);var n=i.prototype[e];return function(){return Array.prototype.unshift.call(arguments,t),n.apply(this,arguments)}}(l)}return o};function e(){this.listeners={}}e.prototype.on=function(e,t){this.listeners=this.listeners||{},e in this.listeners?this.listeners[e].push(t):this.listeners[e]=[t]},e.prototype.trigger=function(e){var t=Array.prototype.slice,n=t.call(arguments,1);this.listeners=this.listeners||{},null==n&&(n=[]),0===n.length&&n.push({}),(n[0]._type=e)in this.listeners&&this.invoke(this.listeners[e],t.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},e.prototype.invoke=function(e,t){for(var n=0,s=e.length;n<s;n++)e[n].apply(this,t)},s.Observable=e,s.generateChars=function(e){for(var t="",n=0;n<e;n++)t+=Math.floor(36*Math.random()).toString(36);return t},s.bind=function(e,t){return function(){e.apply(t,arguments)}},s._convertData=function(e){for(var t in e){var n=t.split("-"),s=e;if(1!==n.length){for(var i=0;i<n.length;i++){var o=n[i];(o=o.substring(0,1).toLowerCase()+o.substring(1))in s||(s[o]={}),i==n.length-1&&(s[o]=e[t]),s=s[o]}delete e[t]}}return e},s.hasScroll=function(e,t){var n=o(t),s=t.style.overflowX,i=t.style.overflowY;return(s!==i||"hidden"!==i&&"visible"!==i)&&("scroll"===s||"scroll"===i||(n.innerHeight()<t.scrollHeight||n.innerWidth()<t.scrollWidth))},s.escapeMarkup=function(e){var t={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof e?e:String(e).replace(/[&<>"'\/\\]/g,function(e){return t[e]})},s.__cache={};var n=0;return s.GetUniqueElementId=function(e){var t=e.getAttribute("data-select2-id");return null!=t||(t=e.id?"select2-data-"+e.id:"select2-data-"+(++n).toString()+"-"+s.generateChars(4),e.setAttribute("data-select2-id",t)),t},s.StoreData=function(e,t,n){e=s.GetUniqueElementId(e);s.__cache[e]||(s.__cache[e]={}),s.__cache[e][t]=n},s.GetData=function(e,t){var n=s.GetUniqueElementId(e);return t?s.__cache[n]&&null!=s.__cache[n][t]?s.__cache[n][t]:o(e).data(t):s.__cache[n]},s.RemoveData=function(e){var t=s.GetUniqueElementId(e);null!=s.__cache[t]&&delete s.__cache[t],e.removeAttribute("data-select2-id")},s.copyNonInternalCssClasses=function(e,t){var n=(n=e.getAttribute("class").trim().split(/\s+/)).filter(function(e){return 0===e.indexOf("select2-")}),t=(t=t.getAttribute("class").trim().split(/\s+/)).filter(function(e){return 0!==e.indexOf("select2-")}),t=n.concat(t);e.setAttribute("class",t.join(" "))},s}),u.define("select2/results",["jquery","./utils"],function(d,p){function s(e,t,n){this.$element=e,this.data=n,this.options=t,s.__super__.constructor.call(this)}return p.Extend(s,p.Observable),s.prototype.render=function(){var e=d('<ul class="select2-results__options" role="listbox"></ul>');return this.options.get("multiple")&&e.attr("aria-multiselectable","true"),this.$results=e},s.prototype.clear=function(){this.$results.empty()},s.prototype.displayMessage=function(e){var t=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var n=d('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),s=this.options.get("translations").get(e.message);n.append(t(s(e.args))),n[0].className+=" select2-results__message",this.$results.append(n)},s.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},s.prototype.append=function(e){this.hideLoading();var t=[];if(null!=e.results&&0!==e.results.length){e.results=this.sort(e.results);for(var n=0;n<e.results.length;n++){var s=e.results[n],s=this.option(s);t.push(s)}this.$results.append(t)}else 0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"})},s.prototype.position=function(e,t){t.find(".select2-results").append(e)},s.prototype.sort=function(e){return this.options.get("sorter")(e)},s.prototype.highlightFirstItem=function(){var e=this.$results.find(".select2-results__option--selectable"),t=e.filter(".select2-results__option--selected");(0<t.length?t:e).first().trigger("mouseenter"),this.ensureHighlightVisible()},s.prototype.setClasses=function(){var t=this;this.data.current(function(e){var s=e.map(function(e){return e.id.toString()});t.$results.find(".select2-results__option--selectable").each(function(){var e=d(this),t=p.GetData(this,"data"),n=""+t.id;null!=t.element&&t.element.selected||null==t.element&&-1<s.indexOf(n)?(this.classList.add("select2-results__option--selected"),e.attr("aria-selected","true")):(this.classList.remove("select2-results__option--selected"),e.attr("aria-selected","false"))})})},s.prototype.showLoading=function(e){this.hideLoading();e={disabled:!0,loading:!0,text:this.options.get("translations").get("searching")(e)},e=this.option(e);e.className+=" loading-results",this.$results.prepend(e)},s.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},s.prototype.option=function(e){var t=document.createElement("li");t.classList.add("select2-results__option"),t.classList.add("select2-results__option--selectable");var n,s={role:"option"},i=window.Element.prototype.matches||window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector;for(n in(null!=e.element&&i.call(e.element,":disabled")||null==e.element&&e.disabled)&&(s["aria-disabled"]="true",t.classList.remove("select2-results__option--selectable"),t.classList.add("select2-results__option--disabled")),null==e.id&&t.classList.remove("select2-results__option--selectable"),null!=e._resultId&&(t.id=e._resultId),e.title&&(t.title=e.title),e.children&&(s.role="group",s["aria-label"]=e.text,t.classList.remove("select2-results__option--selectable"),t.classList.add("select2-results__option--group")),s){var o=s[n];t.setAttribute(n,o)}if(e.children){var r=d(t),a=document.createElement("strong");a.className="select2-results__group",this.template(e,a);for(var l=[],c=0;c<e.children.length;c++){var u=e.children[c],u=this.option(u);l.push(u)}i=d("<ul></ul>",{class:"select2-results__options select2-results__options--nested",role:"none"});i.append(l),r.append(a),r.append(i)}else this.template(e,t);return p.StoreData(t,"data",e),t},s.prototype.bind=function(t,e){var i=this,n=t.id+"-results";this.$results.attr("id",n),t.on("results:all",function(e){i.clear(),i.append(e.data),t.isOpen()&&(i.setClasses(),i.highlightFirstItem())}),t.on("results:append",function(e){i.append(e.data),t.isOpen()&&i.setClasses()}),t.on("query",function(e){i.hideMessages(),i.showLoading(e)}),t.on("select",function(){t.isOpen()&&(i.setClasses(),i.options.get("scrollAfterSelect")&&i.highlightFirstItem())}),t.on("unselect",function(){t.isOpen()&&(i.setClasses(),i.options.get("scrollAfterSelect")&&i.highlightFirstItem())}),t.on("open",function(){i.$results.attr("aria-expanded","true"),i.$results.attr("aria-hidden","false"),i.setClasses(),i.ensureHighlightVisible()}),t.on("close",function(){i.$results.attr("aria-expanded","false"),i.$results.attr("aria-hidden","true"),i.$results.removeAttr("aria-activedescendant")}),t.on("results:toggle",function(){var e=i.getHighlightedResults();0!==e.length&&e.trigger("mouseup")}),t.on("results:select",function(){var e,t=i.getHighlightedResults();0!==t.length&&(e=p.GetData(t[0],"data"),t.hasClass("select2-results__option--selected")?i.trigger("close",{}):i.trigger("select",{data:e}))}),t.on("results:previous",function(){var e,t=i.getHighlightedResults(),n=i.$results.find(".select2-results__option--selectable"),s=n.index(t);s<=0||(e=s-1,0===t.length&&(e=0),(s=n.eq(e)).trigger("mouseenter"),t=i.$results.offset().top,n=s.offset().top,s=i.$results.scrollTop()+(n-t),0===e?i.$results.scrollTop(0):n-t<0&&i.$results.scrollTop(s))}),t.on("results:next",function(){var e,t=i.getHighlightedResults(),n=i.$results.find(".select2-results__option--selectable"),s=n.index(t)+1;s>=n.length||((e=n.eq(s)).trigger("mouseenter"),t=i.$results.offset().top+i.$results.outerHeight(!1),n=e.offset().top+e.outerHeight(!1),e=i.$results.scrollTop()+n-t,0===s?i.$results.scrollTop(0):t<n&&i.$results.scrollTop(e))}),t.on("results:focus",function(e){e.element[0].classList.add("select2-results__option--highlighted"),e.element[0].setAttribute("aria-selected","true")}),t.on("results:message",function(e){i.displayMessage(e)}),d.fn.mousewheel&&this.$results.on("mousewheel",function(e){var t=i.$results.scrollTop(),n=i.$results.get(0).scrollHeight-t+e.deltaY,t=0<e.deltaY&&t-e.deltaY<=0,n=e.deltaY<0&&n<=i.$results.height();t?(i.$results.scrollTop(0),e.preventDefault(),e.stopPropagation()):n&&(i.$results.scrollTop(i.$results.get(0).scrollHeight-i.$results.height()),e.preventDefault(),e.stopPropagation())}),this.$results.on("mouseup",".select2-results__option--selectable",function(e){var t=d(this),n=p.GetData(this,"data");t.hasClass("select2-results__option--selected")?i.options.get("multiple")?i.trigger("unselect",{originalEvent:e,data:n}):i.trigger("close",{}):i.trigger("select",{originalEvent:e,data:n})}),this.$results.on("mouseenter",".select2-results__option--selectable",function(e){var t=p.GetData(this,"data");i.getHighlightedResults().removeClass("select2-results__option--highlighted").attr("aria-selected","false"),i.trigger("results:focus",{data:t,element:d(this)})})},s.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},s.prototype.destroy=function(){this.$results.remove()},s.prototype.ensureHighlightVisible=function(){var e,t,n,s,i=this.getHighlightedResults();0!==i.length&&(e=this.$results.find(".select2-results__option--selectable").index(i),s=this.$results.offset().top,t=i.offset().top,n=this.$results.scrollTop()+(t-s),s=t-s,n-=2*i.outerHeight(!1),e<=2?this.$results.scrollTop(0):(s>this.$results.outerHeight()||s<0)&&this.$results.scrollTop(n))},s.prototype.template=function(e,t){var n=this.options.get("templateResult"),s=this.options.get("escapeMarkup"),e=n(e,t);null==e?t.style.display="none":"string"==typeof e?t.innerHTML=s(e):d(t).append(e)},s}),u.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),u.define("select2/selection/base",["jquery","../utils","../keys"],function(n,s,i){function o(e,t){this.$element=e,this.options=t,o.__super__.constructor.call(this)}return s.Extend(o,s.Observable),o.prototype.render=function(){var e=n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=s.GetData(this.$element[0],"old-tabindex")?this._tabindex=s.GetData(this.$element[0],"old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),e.attr("title",this.$element.attr("title")),e.attr("tabindex",this._tabindex),e.attr("aria-disabled","false"),this.$selection=e},o.prototype.bind=function(e,t){var n=this,s=e.id+"-results";this.container=e,this.$selection.on("focus",function(e){n.trigger("focus",e)}),this.$selection.on("blur",function(e){n._handleBlur(e)}),this.$selection.on("keydown",function(e){n.trigger("keypress",e),e.which===i.SPACE&&e.preventDefault()}),e.on("results:focus",function(e){n.$selection.attr("aria-activedescendant",e.data._resultId)}),e.on("selection:update",function(e){n.update(e.data)}),e.on("open",function(){n.$selection.attr("aria-expanded","true"),n.$selection.attr("aria-owns",s),n._attachCloseHandler(e)}),e.on("close",function(){n.$selection.attr("aria-expanded","false"),n.$selection.removeAttr("aria-activedescendant"),n.$selection.removeAttr("aria-owns"),n.$selection.trigger("focus"),n._detachCloseHandler(e)}),e.on("enable",function(){n.$selection.attr("tabindex",n._tabindex),n.$selection.attr("aria-disabled","false")}),e.on("disable",function(){n.$selection.attr("tabindex","-1"),n.$selection.attr("aria-disabled","true")})},o.prototype._handleBlur=function(e){var t=this;window.setTimeout(function(){document.activeElement==t.$selection[0]||n.contains(t.$selection[0],document.activeElement)||t.trigger("blur",e)},1)},o.prototype._attachCloseHandler=function(e){n(document.body).on("mousedown.select2."+e.id,function(e){var t=n(e.target).closest(".select2");n(".select2.select2-container--open").each(function(){this!=t[0]&&s.GetData(this,"element").select2("close")})})},o.prototype._detachCloseHandler=function(e){n(document.body).off("mousedown.select2."+e.id)},o.prototype.position=function(e,t){t.find(".selection").append(e)},o.prototype.destroy=function(){this._detachCloseHandler(this.container)},o.prototype.update=function(e){throw new Error("The `update` method must be defined in child classes.")},o.prototype.isEnabled=function(){return!this.isDisabled()},o.prototype.isDisabled=function(){return this.options.get("disabled")},o}),u.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(e,t,n,s){function i(){i.__super__.constructor.apply(this,arguments)}return n.Extend(i,t),i.prototype.render=function(){var e=i.__super__.render.call(this);return e[0].classList.add("select2-selection--single"),e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),e},i.prototype.bind=function(t,e){var n=this;i.__super__.bind.apply(this,arguments);var s=t.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",s).attr("role","textbox").attr("aria-readonly","true"),this.$selection.attr("aria-labelledby",s),this.$selection.attr("aria-controls",s),this.$selection.on("mousedown",function(e){1===e.which&&n.trigger("toggle",{originalEvent:e})}),this.$selection.on("focus",function(e){}),this.$selection.on("blur",function(e){}),t.on("focus",function(e){t.isOpen()||n.$selection.trigger("focus")})},i.prototype.clear=function(){var e=this.$selection.find(".select2-selection__rendered");e.empty(),e.removeAttr("title")},i.prototype.display=function(e,t){var n=this.options.get("templateSelection");return this.options.get("escapeMarkup")(n(e,t))},i.prototype.selectionContainer=function(){return e("<span></span>")},i.prototype.update=function(e){var t,n;0!==e.length?(n=e[0],t=this.$selection.find(".select2-selection__rendered"),e=this.display(n,t),t.empty().append(e),(n=n.title||n.text)?t.attr("title",n):t.removeAttr("title")):this.clear()},i}),u.define("select2/selection/multiple",["jquery","./base","../utils"],function(i,e,c){function o(e,t){o.__super__.constructor.apply(this,arguments)}return c.Extend(o,e),o.prototype.render=function(){var e=o.__super__.render.call(this);return e[0].classList.add("select2-selection--multiple"),e.html('<ul class="select2-selection__rendered"></ul>'),e},o.prototype.bind=function(e,t){var n=this;o.__super__.bind.apply(this,arguments);var s=e.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",s),this.$selection.on("click",function(e){n.trigger("toggle",{originalEvent:e})}),this.$selection.on("click",".select2-selection__choice__remove",function(e){var t;n.isDisabled()||(t=i(this).parent(),t=c.GetData(t[0],"data"),n.trigger("unselect",{originalEvent:e,data:t}))}),this.$selection.on("keydown",".select2-selection__choice__remove",function(e){n.isDisabled()||e.stopPropagation()})},o.prototype.clear=function(){var e=this.$selection.find(".select2-selection__rendered");e.empty(),e.removeAttr("title")},o.prototype.display=function(e,t){var n=this.options.get("templateSelection");return this.options.get("escapeMarkup")(n(e,t))},o.prototype.selectionContainer=function(){return i('<li class="select2-selection__choice"><button type="button" class="select2-selection__choice__remove" tabindex="-1"><span aria-hidden="true">&times;</span></button><span class="select2-selection__choice__display"></span></li>')},o.prototype.update=function(e){if(this.clear(),0!==e.length){for(var t=[],n=this.$selection.find(".select2-selection__rendered").attr("id")+"-choice-",s=0;s<e.length;s++){var i=e[s],o=this.selectionContainer(),r=this.display(i,o),a=n+c.generateChars(4)+"-";i.id?a+=i.id:a+=c.generateChars(4),o.find(".select2-selection__choice__display").append(r).attr("id",a);var l=i.title||i.text;l&&o.attr("title",l);r=this.options.get("translations").get("removeItem"),l=o.find(".select2-selection__choice__remove");l.attr("title",r()),l.attr("aria-label",r()),l.attr("aria-describedby",a),c.StoreData(o[0],"data",i),t.push(o)}this.$selection.find(".select2-selection__rendered").append(t)}},o}),u.define("select2/selection/placeholder",[],function(){function e(e,t,n){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n)}return e.prototype.normalizePlaceholder=function(e,t){return"string"==typeof t&&(t={id:"",text:t}),t},e.prototype.createPlaceholder=function(e,t){var n=this.selectionContainer();n.html(this.display(t)),n[0].classList.add("select2-selection__placeholder"),n[0].classList.remove("select2-selection__choice");t=t.title||t.text||n.text();return this.$selection.find(".select2-selection__rendered").attr("title",t),n},e.prototype.update=function(e,t){var n=1==t.length&&t[0].id!=this.placeholder.id;if(1<t.length||n)return e.call(this,t);this.clear();t=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(t)},e}),u.define("select2/selection/allowClear",["jquery","../keys","../utils"],function(i,s,a){function e(){}return e.prototype.bind=function(e,t,n){var s=this;e.call(this,t,n),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(e){s._handleClear(e)}),t.on("keypress",function(e){s._handleKeyboardClear(e,t)})},e.prototype._handleClear=function(e,t){if(!this.isDisabled()){var n=this.$selection.find(".select2-selection__clear");if(0!==n.length){t.stopPropagation();var s=a.GetData(n[0],"data"),i=this.$element.val();this.$element.val(this.placeholder.id);var o={data:s};if(this.trigger("clear",o),o.prevented)this.$element.val(i);else{for(var r=0;r<s.length;r++)if(o={data:s[r]},this.trigger("unselect",o),o.prevented)return void this.$element.val(i);this.$element.trigger("input").trigger("change"),this.trigger("toggle",{})}}}},e.prototype._handleKeyboardClear=function(e,t,n){n.isOpen()||t.which!=s.DELETE&&t.which!=s.BACKSPACE||this._handleClear(t)},e.prototype.update=function(e,t){var n,s;e.call(this,t),this.$selection.find(".select2-selection__clear").remove(),this.$selection[0].classList.remove("select2-selection--clearable"),0<this.$selection.find(".select2-selection__placeholder").length||0===t.length||(n=this.$selection.find(".select2-selection__rendered").attr("id"),s=this.options.get("translations").get("removeAllItems"),(e=i('<button type="button" class="select2-selection__clear" tabindex="-1"><span aria-hidden="true">&times;</span></button>')).attr("title",s()),e.attr("aria-label",s()),e.attr("aria-describedby",n),a.StoreData(e[0],"data",t),this.$selection.prepend(e),this.$selection[0].classList.add("select2-selection--clearable"))},e}),u.define("select2/selection/search",["jquery","../utils","../keys"],function(s,a,l){function e(e,t,n){e.call(this,t,n)}return e.prototype.render=function(e){var t=this.options.get("translations").get("search"),n=s('<span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" ></textarea></span>');this.$searchContainer=n,this.$search=n.find("textarea"),this.$search.prop("autocomplete",this.options.get("autocomplete")),this.$search.attr("aria-label",t());e=e.call(this);return this._transferTabIndex(),e.append(this.$searchContainer),e},e.prototype.bind=function(e,t,n){var s=this,i=t.id+"-results",o=t.id+"-container";e.call(this,t,n),s.$search.attr("aria-describedby",o),t.on("open",function(){s.$search.attr("aria-controls",i),s.$search.trigger("focus")}),t.on("close",function(){s.$search.val(""),s.resizeSearch(),s.$search.removeAttr("aria-controls"),s.$search.removeAttr("aria-activedescendant"),s.$search.trigger("focus")}),t.on("enable",function(){s.$search.prop("disabled",!1),s._transferTabIndex()}),t.on("disable",function(){s.$search.prop("disabled",!0)}),t.on("focus",function(e){s.$search.trigger("focus")}),t.on("results:focus",function(e){e.data._resultId?s.$search.attr("aria-activedescendant",e.data._resultId):s.$search.removeAttr("aria-activedescendant")}),this.$selection.on("focusin",".select2-search--inline",function(e){s.trigger("focus",e)}),this.$selection.on("focusout",".select2-search--inline",function(e){s._handleBlur(e)}),this.$selection.on("keydown",".select2-search--inline",function(e){var t;e.stopPropagation(),s.trigger("keypress",e),s._keyUpPrevented=e.isDefaultPrevented(),e.which!==l.BACKSPACE||""!==s.$search.val()||0<(t=s.$selection.find(".select2-selection__choice").last()).length&&(t=a.GetData(t[0],"data"),s.searchRemoveChoice(t),e.preventDefault())}),this.$selection.on("click",".select2-search--inline",function(e){s.$search.val()&&e.stopPropagation()});var t=document.documentMode,r=t&&t<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(e){r?s.$selection.off("input.search input.searchcheck"):s.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(e){var t;r&&"input"===e.type?s.$selection.off("input.search input.searchcheck"):(t=e.which)!=l.SHIFT&&t!=l.CTRL&&t!=l.ALT&&t!=l.TAB&&s.handleSearch(e)})},e.prototype._transferTabIndex=function(e){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},e.prototype.createPlaceholder=function(e,t){this.$search.attr("placeholder",t.text)},e.prototype.update=function(e,t){var n=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),e.call(this,t),this.resizeSearch(),n&&this.$search.trigger("focus")},e.prototype.handleSearch=function(){var e;this.resizeSearch(),this._keyUpPrevented||(e=this.$search.val(),this.trigger("query",{term:e})),this._keyUpPrevented=!1},e.prototype.searchRemoveChoice=function(e,t){this.trigger("unselect",{data:t}),this.$search.val(t.text),this.handleSearch()},e.prototype.resizeSearch=function(){this.$search.css("width","25px");var e="100%";""===this.$search.attr("placeholder")&&(e=.75*(this.$search.val().length+1)+"em"),this.$search.css("width",e)},e}),u.define("select2/selection/selectionCss",["../utils"],function(n){function e(){}return e.prototype.render=function(e){var t=e.call(this),e=this.options.get("selectionCssClass")||"";return-1!==e.indexOf(":all:")&&(e=e.replace(":all:",""),n.copyNonInternalCssClasses(t[0],this.$element[0])),t.addClass(e),t},e}),u.define("select2/selection/eventRelay",["jquery"],function(r){function e(){}return e.prototype.bind=function(e,t,n){var s=this,i=["open","opening","close","closing","select","selecting","unselect","unselecting","clear","clearing"],o=["opening","closing","selecting","unselecting","clearing"];e.call(this,t,n),t.on("*",function(e,t){var n;-1!==i.indexOf(e)&&(t=t||{},n=r.Event("select2:"+e,{params:t}),s.$element.trigger(n),-1!==o.indexOf(e)&&(t.prevented=n.isDefaultPrevented()))})},e}),u.define("select2/translation",["jquery","require"],function(t,n){function s(e){this.dict=e||{}}return s.prototype.all=function(){return this.dict},s.prototype.get=function(e){return this.dict[e]},s.prototype.extend=function(e){this.dict=t.extend({},e.all(),this.dict)},s._cache={},s.loadPath=function(e){var t;return e in s._cache||(t=n(e),s._cache[e]=t),new s(s._cache[e])},s}),u.define("select2/diacritics",[],function(){return{"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Œ":"OE","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","œ":"oe","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ώ":"ω","ς":"σ","’":"'"}}),u.define("select2/data/base",["../utils"],function(n){function s(e,t){s.__super__.constructor.call(this)}return n.Extend(s,n.Observable),s.prototype.current=function(e){throw new Error("The `current` method must be defined in child classes.")},s.prototype.query=function(e,t){throw new Error("The `query` method must be defined in child classes.")},s.prototype.bind=function(e,t){},s.prototype.destroy=function(){},s.prototype.generateResultId=function(e,t){e=e.id+"-result-";return e+=n.generateChars(4),null!=t.id?e+="-"+t.id.toString():e+="-"+n.generateChars(4),e},s}),u.define("select2/data/select",["./base","../utils","jquery"],function(e,a,l){function n(e,t){this.$element=e,this.options=t,n.__super__.constructor.call(this)}return a.Extend(n,e),n.prototype.current=function(e){var t=this;e(Array.prototype.map.call(this.$element[0].querySelectorAll(":checked"),function(e){return t.item(l(e))}))},n.prototype.select=function(i){var e,o=this;if(i.selected=!0,null!=i.element&&"option"===i.element.tagName.toLowerCase())return i.element.selected=!0,void this.$element.trigger("input").trigger("change");this.$element.prop("multiple")?this.current(function(e){var t=[];(i=[i]).push.apply(i,e);for(var n=0;n<i.length;n++){var s=i[n].id;-1===t.indexOf(s)&&t.push(s)}o.$element.val(t),o.$element.trigger("input").trigger("change")}):(e=i.id,this.$element.val(e),this.$element.trigger("input").trigger("change"))},n.prototype.unselect=function(i){var o=this;if(this.$element.prop("multiple")){if(i.selected=!1,null!=i.element&&"option"===i.element.tagName.toLowerCase())return i.element.selected=!1,void this.$element.trigger("input").trigger("change");this.current(function(e){for(var t=[],n=0;n<e.length;n++){var s=e[n].id;s!==i.id&&-1===t.indexOf(s)&&t.push(s)}o.$element.val(t),o.$element.trigger("input").trigger("change")})}},n.prototype.bind=function(e,t){var n=this;(this.container=e).on("select",function(e){n.select(e.data)}),e.on("unselect",function(e){n.unselect(e.data)})},n.prototype.destroy=function(){this.$element.find("*").each(function(){a.RemoveData(this)})},n.prototype.query=function(t,e){var n=[],s=this;this.$element.children().each(function(){var e;"option"!==this.tagName.toLowerCase()&&"optgroup"!==this.tagName.toLowerCase()||(e=l(this),e=s.item(e),null!==(e=s.matches(t,e))&&n.push(e))}),e({results:n})},n.prototype.addOptions=function(e){this.$element.append(e)},n.prototype.option=function(e){var t;e.children?(t=document.createElement("optgroup")).label=e.text:void 0!==(t=document.createElement("option")).textContent?t.textContent=e.text:t.innerText=e.text,void 0!==e.id&&(t.value=e.id),e.disabled&&(t.disabled=!0),e.selected&&(t.selected=!0),e.title&&(t.title=e.title);e=this._normalizeItem(e);return e.element=t,a.StoreData(t,"data",e),l(t)},n.prototype.item=function(e){var t={};if(null!=(t=a.GetData(e[0],"data")))return t;var n=e[0];if("option"===n.tagName.toLowerCase())t={id:e.val(),text:e.text(),disabled:e.prop("disabled"),selected:e.prop("selected"),title:e.prop("title")};else if("optgroup"===n.tagName.toLowerCase()){t={text:e.prop("label"),children:[],title:e.prop("title")};for(var s=e.children("option"),i=[],o=0;o<s.length;o++){var r=l(s[o]),r=this.item(r);i.push(r)}t.children=i}return(t=this._normalizeItem(t)).element=e[0],a.StoreData(e[0],"data",t),t},n.prototype._normalizeItem=function(e){e!==Object(e)&&(e={id:e,text:e});return null!=(e=l.extend({},{text:""},e)).id&&(e.id=e.id.toString()),null!=e.text&&(e.text=e.text.toString()),null==e._resultId&&e.id&&null!=this.container&&(e._resultId=this.generateResultId(this.container,e)),l.extend({},{selected:!1,disabled:!1},e)},n.prototype.matches=function(e,t){return this.options.get("matcher")(e,t)},n}),u.define("select2/data/array",["./select","../utils","jquery"],function(e,t,c){function s(e,t){this._dataToConvert=t.get("data")||[],s.__super__.constructor.call(this,e,t)}return t.Extend(s,e),s.prototype.bind=function(e,t){s.__super__.bind.call(this,e,t),this.addOptions(this.convertToOptions(this._dataToConvert))},s.prototype.select=function(n){var e=this.$element.find("option").filter(function(e,t){return t.value==n.id.toString()});0===e.length&&(e=this.option(n),this.addOptions(e)),s.__super__.select.call(this,n)},s.prototype.convertToOptions=function(e){var t=this,n=this.$element.find("option"),s=n.map(function(){return t.item(c(this)).id}).get(),i=[];for(var o=0;o<e.length;o++){var r,a,l=this._normalizeItem(e[o]);0<=s.indexOf(l.id)?(r=n.filter(function(e){return function(){return c(this).val()==e.id}}(l)),a=this.item(r),a=c.extend(!0,{},l,a),a=this.option(a),r.replaceWith(a)):(a=this.option(l),l.children&&(l=this.convertToOptions(l.children),a.append(l)),i.push(a))}return i},s}),u.define("select2/data/ajax",["./array","../utils","jquery"],function(e,t,o){function n(e,t){this.ajaxOptions=this._applyDefaults(t.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),n.__super__.constructor.call(this,e,t)}return t.Extend(n,e),n.prototype._applyDefaults=function(e){var t={data:function(e){return o.extend({},e,{q:e.term})},transport:function(e,t,n){e=o.ajax(e);return e.then(t),e.fail(n),e}};return o.extend({},t,e,!0)},n.prototype.processResults=function(e){return e},n.prototype.query=function(t,n){var s=this;null!=this._request&&("function"==typeof this._request.abort&&this._request.abort(),this._request=null);var i=o.extend({type:"GET"},this.ajaxOptions);function e(){var e=i.transport(i,function(e){e=s.processResults(e,t);s.options.get("debug")&&window.console&&console.error&&(e&&e.results&&Array.isArray(e.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),n(e)},function(){"status"in e&&(0===e.status||"0"===e.status)||s.trigger("results:message",{message:"errorLoading"})});s._request=e}"function"==typeof i.url&&(i.url=i.url.call(this.$element,t)),"function"==typeof i.data&&(i.data=i.data.call(this.$element,t)),this.ajaxOptions.delay&&null!=t.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(e,this.ajaxOptions.delay)):e()},n}),u.define("select2/data/tags",["jquery"],function(t){function e(e,t,n){var s=n.get("tags"),i=n.get("createTag");void 0!==i&&(this.createTag=i);i=n.get("insertTag");if(void 0!==i&&(this.insertTag=i),e.call(this,t,n),Array.isArray(s))for(var o=0;o<s.length;o++){var r=s[o],r=this._normalizeItem(r),r=this.option(r);this.$element.append(r)}}return e.prototype.query=function(e,c,u){var d=this;this._removeOldTags(),null!=c.term&&null==c.page?e.call(this,c,function e(t,n){for(var s=t.results,i=0;i<s.length;i++){var o=s[i],r=null!=o.children&&!e({results:o.children},!0);if((o.text||"").toUpperCase()===(c.term||"").toUpperCase()||r)return!n&&(t.data=s,void u(t))}if(n)return!0;var a,l=d.createTag(c);null!=l&&((a=d.option(l)).attr("data-select2-tag","true"),d.addOptions([a]),d.insertTag(s,l)),t.results=s,u(t)}):e.call(this,c,u)},e.prototype.createTag=function(e,t){if(null==t.term)return null;t=t.term.trim();return""===t?null:{id:t,text:t}},e.prototype.insertTag=function(e,t,n){t.unshift(n)},e.prototype._removeOldTags=function(e){this.$element.find("option[data-select2-tag]").each(function(){this.selected||t(this).remove()})},e}),u.define("select2/data/tokenizer",["jquery"],function(c){function e(e,t,n){var s=n.get("tokenizer");void 0!==s&&(this.tokenizer=s),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){e.call(this,t,n),this.$search=t.dropdown.$search||t.selection.$search||n.find(".select2-search__field")},e.prototype.query=function(e,t,n){var s=this;t.term=t.term||"";var i=this.tokenizer(t,this.options,function(e){var t,n=s._normalizeItem(e);s.$element.find("option").filter(function(){return c(this).val()===n.id}).length||((t=s.option(n)).attr("data-select2-tag",!0),s._removeOldTags(),s.addOptions([t])),t=n,s.trigger("select",{data:t})});i.term!==t.term&&(this.$search.length&&(this.$search.val(i.term),this.$search.trigger("focus")),t.term=i.term),e.call(this,t,n)},e.prototype.tokenizer=function(e,t,n,s){for(var i=n.get("tokenSeparators")||[],o=t.term,r=0,a=this.createTag||function(e){return{id:e.term,text:e.term}};r<o.length;){var l=o[r];-1!==i.indexOf(l)?(l=o.substr(0,r),null!=(l=a(c.extend({},t,{term:l})))?(s(l),o=o.substr(r+1)||"",r=0):r++):r++}return{term:o}},e}),u.define("select2/data/minimumInputLength",[],function(){function e(e,t,n){this.minimumInputLength=n.get("minimumInputLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.term=t.term||"",t.term.length<this.minimumInputLength?this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:t.term,params:t}}):e.call(this,t,n)},e}),u.define("select2/data/maximumInputLength",[],function(){function e(e,t,n){this.maximumInputLength=n.get("maximumInputLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.term=t.term||"",0<this.maximumInputLength&&t.term.length>this.maximumInputLength?this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:t.term,params:t}}):e.call(this,t,n)},e}),u.define("select2/data/maximumSelectionLength",[],function(){function e(e,t,n){this.maximumSelectionLength=n.get("maximumSelectionLength"),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){var s=this;e.call(this,t,n),t.on("select",function(){s._checkIfMaximumSelected()})},e.prototype.query=function(e,t,n){var s=this;this._checkIfMaximumSelected(function(){e.call(s,t,n)})},e.prototype._checkIfMaximumSelected=function(e,t){var n=this;this.current(function(e){e=null!=e?e.length:0;0<n.maximumSelectionLength&&e>=n.maximumSelectionLength?n.trigger("results:message",{message:"maximumSelected",args:{maximum:n.maximumSelectionLength}}):t&&t()})},e}),u.define("select2/dropdown",["jquery","./utils"],function(t,e){function n(e,t){this.$element=e,this.options=t,n.__super__.constructor.call(this)}return e.Extend(n,e.Observable),n.prototype.render=function(){var e=t('<span class="select2-dropdown"><span class="select2-results"></span></span>');return e.attr("dir",this.options.get("dir")),this.$dropdown=e},n.prototype.bind=function(){},n.prototype.position=function(e,t){},n.prototype.destroy=function(){this.$dropdown.remove()},n}),u.define("select2/dropdown/search",["jquery"],function(o){function e(){}return e.prototype.render=function(e){var t=e.call(this),n=this.options.get("translations").get("search"),e=o('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');return this.$searchContainer=e,this.$search=e.find("input"),this.$search.prop("autocomplete",this.options.get("autocomplete")),this.$search.attr("aria-label",n()),t.prepend(e),t},e.prototype.bind=function(e,t,n){var s=this,i=t.id+"-results";e.call(this,t,n),this.$search.on("keydown",function(e){s.trigger("keypress",e),s._keyUpPrevented=e.isDefaultPrevented()}),this.$search.on("input",function(e){o(this).off("keyup")}),this.$search.on("keyup input",function(e){s.handleSearch(e)}),t.on("open",function(){s.$search.attr("tabindex",0),s.$search.attr("aria-controls",i),s.$search.trigger("focus"),window.setTimeout(function(){s.$search.trigger("focus")},0)}),t.on("close",function(){s.$search.attr("tabindex",-1),s.$search.removeAttr("aria-controls"),s.$search.removeAttr("aria-activedescendant"),s.$search.val(""),s.$search.trigger("blur")}),t.on("focus",function(){t.isOpen()||s.$search.trigger("focus")}),t.on("results:all",function(e){null!=e.query.term&&""!==e.query.term||(s.showSearch(e)?s.$searchContainer[0].classList.remove("select2-search--hide"):s.$searchContainer[0].classList.add("select2-search--hide"))}),t.on("results:focus",function(e){e.data._resultId?s.$search.attr("aria-activedescendant",e.data._resultId):s.$search.removeAttr("aria-activedescendant")})},e.prototype.handleSearch=function(e){var t;this._keyUpPrevented||(t=this.$search.val(),this.trigger("query",{term:t})),this._keyUpPrevented=!1},e.prototype.showSearch=function(e,t){return!0},e}),u.define("select2/dropdown/hidePlaceholder",[],function(){function e(e,t,n,s){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n,s)}return e.prototype.append=function(e,t){t.results=this.removePlaceholder(t.results),e.call(this,t)},e.prototype.normalizePlaceholder=function(e,t){return"string"==typeof t&&(t={id:"",text:t}),t},e.prototype.removePlaceholder=function(e,t){for(var n=t.slice(0),s=t.length-1;0<=s;s--){var i=t[s];this.placeholder.id===i.id&&n.splice(s,1)}return n},e}),u.define("select2/dropdown/infiniteScroll",["jquery"],function(n){function e(e,t,n,s){this.lastParams={},e.call(this,t,n,s),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return e.prototype.append=function(e,t){this.$loadingMore.remove(),this.loading=!1,e.call(this,t),this.showLoadingMore(t)&&(this.$results.append(this.$loadingMore),this.loadMoreIfNeeded())},e.prototype.bind=function(e,t,n){var s=this;e.call(this,t,n),t.on("query",function(e){s.lastParams=e,s.loading=!0}),t.on("query:append",function(e){s.lastParams=e,s.loading=!0}),this.$results.on("scroll",this.loadMoreIfNeeded.bind(this))},e.prototype.loadMoreIfNeeded=function(){var e=n.contains(document.documentElement,this.$loadingMore[0]);!this.loading&&e&&(e=this.$results.offset().top+this.$results.outerHeight(!1),this.$loadingMore.offset().top+this.$loadingMore.outerHeight(!1)<=e+50&&this.loadMore())},e.prototype.loadMore=function(){this.loading=!0;var e=n.extend({},{page:1},this.lastParams);e.page++,this.trigger("query:append",e)},e.prototype.showLoadingMore=function(e,t){return t.pagination&&t.pagination.more},e.prototype.createLoadingMore=function(){var e=n('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),t=this.options.get("translations").get("loadingMore");return e.html(t(this.lastParams)),e},e}),u.define("select2/dropdown/attachBody",["jquery","../utils"],function(u,r){function e(e,t,n){this.$dropdownParent=u(n.get("dropdownParent")||document.body),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){var s=this;e.call(this,t,n),t.on("open",function(){s._showDropdown(),s._attachPositioningHandler(t),s._bindContainerResultHandlers(t)}),t.on("close",function(){s._hideDropdown(),s._detachPositioningHandler(t)}),this.$dropdownContainer.on("mousedown",function(e){e.stopPropagation()})},e.prototype.destroy=function(e){e.call(this),this.$dropdownContainer.remove()},e.prototype.position=function(e,t,n){t.attr("class",n.attr("class")),t[0].classList.remove("select2"),t[0].classList.add("select2-container--open"),t.css({position:"absolute",top:-999999}),this.$container=n},e.prototype.render=function(e){var t=u("<span></span>"),e=e.call(this);return t.append(e),this.$dropdownContainer=t},e.prototype._hideDropdown=function(e){this.$dropdownContainer.detach()},e.prototype._bindContainerResultHandlers=function(e,t){var n;this._containerResultsHandlersBound||(n=this,t.on("results:all",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("results:append",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("results:message",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("select",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("unselect",function(){n._positionDropdown(),n._resizeDropdown()}),this._containerResultsHandlersBound=!0)},e.prototype._attachPositioningHandler=function(e,t){var n=this,s="scroll.select2."+t.id,i="resize.select2."+t.id,o="orientationchange.select2."+t.id,t=this.$container.parents().filter(r.hasScroll);t.each(function(){r.StoreData(this,"select2-scroll-position",{x:u(this).scrollLeft(),y:u(this).scrollTop()})}),t.on(s,function(e){var t=r.GetData(this,"select2-scroll-position");u(this).scrollTop(t.y)}),u(window).on(s+" "+i+" "+o,function(e){n._positionDropdown(),n._resizeDropdown()})},e.prototype._detachPositioningHandler=function(e,t){var n="scroll.select2."+t.id,s="resize.select2."+t.id,t="orientationchange.select2."+t.id;this.$container.parents().filter(r.hasScroll).off(n),u(window).off(n+" "+s+" "+t)},e.prototype._positionDropdown=function(){var e=u(window),t=this.$dropdown[0].classList.contains("select2-dropdown--above"),n=this.$dropdown[0].classList.contains("select2-dropdown--below"),s=null,i=this.$container.offset();i.bottom=i.top+this.$container.outerHeight(!1);var o={height:this.$container.outerHeight(!1)};o.top=i.top,o.bottom=i.top+o.height;var r=this.$dropdown.outerHeight(!1),a=e.scrollTop(),l=e.scrollTop()+e.height(),c=a<i.top-r,e=l>i.bottom+r,a={left:i.left,top:o.bottom},l=this.$dropdownParent;"static"===l.css("position")&&(l=l.offsetParent());i={top:0,left:0};(u.contains(document.body,l[0])||l[0].isConnected)&&(i=l.offset()),a.top-=i.top,a.left-=i.left,t||n||(s="below"),e||!c||t?!c&&e&&t&&(s="below"):s="above",("above"==s||t&&"below"!==s)&&(a.top=o.top-i.top-r),null!=s&&(this.$dropdown[0].classList.remove("select2-dropdown--below"),this.$dropdown[0].classList.remove("select2-dropdown--above"),this.$dropdown[0].classList.add("select2-dropdown--"+s),this.$container[0].classList.remove("select2-container--below"),this.$container[0].classList.remove("select2-container--above"),this.$container[0].classList.add("select2-container--"+s)),this.$dropdownContainer.css(a)},e.prototype._resizeDropdown=function(){var e={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(e.minWidth=e.width,e.position="relative",e.width="auto"),this.$dropdown.css(e)},e.prototype._showDropdown=function(e){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},e}),u.define("select2/dropdown/minimumResultsForSearch",[],function(){function e(e,t,n,s){this.minimumResultsForSearch=n.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),e.call(this,t,n,s)}return e.prototype.showSearch=function(e,t){return!(function e(t){for(var n=0,s=0;s<t.length;s++){var i=t[s];i.children?n+=e(i.children):n++}return n}(t.data.results)<this.minimumResultsForSearch)&&e.call(this,t)},e}),u.define("select2/dropdown/selectOnClose",["../utils"],function(s){function e(){}return e.prototype.bind=function(e,t,n){var s=this;e.call(this,t,n),t.on("close",function(e){s._handleSelectOnClose(e)})},e.prototype._handleSelectOnClose=function(e,t){if(t&&null!=t.originalSelect2Event){var n=t.originalSelect2Event;if("select"===n._type||"unselect"===n._type)return}n=this.getHighlightedResults();n.length<1||(null!=(n=s.GetData(n[0],"data")).element&&n.element.selected||null==n.element&&n.selected||this.trigger("select",{data:n}))},e}),u.define("select2/dropdown/closeOnSelect",[],function(){function e(){}return e.prototype.bind=function(e,t,n){var s=this;e.call(this,t,n),t.on("select",function(e){s._selectTriggered(e)}),t.on("unselect",function(e){s._selectTriggered(e)})},e.prototype._selectTriggered=function(e,t){var n=t.originalEvent;n&&(n.ctrlKey||n.metaKey)||this.trigger("close",{originalEvent:n,originalSelect2Event:t})},e}),u.define("select2/dropdown/dropdownCss",["../utils"],function(n){function e(){}return e.prototype.render=function(e){var t=e.call(this),e=this.options.get("dropdownCssClass")||"";return-1!==e.indexOf(":all:")&&(e=e.replace(":all:",""),n.copyNonInternalCssClasses(t[0],this.$element[0])),t.addClass(e),t},e}),u.define("select2/dropdown/tagsSearchHighlight",["../utils"],function(s){function e(){}return e.prototype.highlightFirstItem=function(e){var t=this.$results.find(".select2-results__option--selectable:not(.select2-results__option--selected)");if(0<t.length){var n=t.first(),t=s.GetData(n[0],"data").element;if(t&&t.getAttribute&&"true"===t.getAttribute("data-select2-tag"))return void n.trigger("mouseenter")}e.call(this)},e}),u.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(e){var t=e.input.length-e.maximum,e="Please delete "+t+" character";return 1!=t&&(e+="s"),e},inputTooShort:function(e){return"Please enter "+(e.minimum-e.input.length)+" or more characters"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(e){var t="You can only select "+e.maximum+" item";return 1!=e.maximum&&(t+="s"),t},noResults:function(){return"No results found"},searching:function(){return"Searching…"},removeAllItems:function(){return"Remove all items"},removeItem:function(){return"Remove item"},search:function(){return"Search"}}}),u.define("select2/defaults",["jquery","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/selectionCss","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./dropdown/dropdownCss","./dropdown/tagsSearchHighlight","./i18n/en"],function(l,o,r,a,c,u,d,p,h,f,g,t,m,v,y,_,b,w,$,x,A,D,S,O,L,E,C,T,q,I,e){function n(){this.reset()}return n.prototype.apply=function(e){var t;null==(e=l.extend(!0,{},this.defaults,e)).dataAdapter&&(null!=e.ajax?e.dataAdapter=y:null!=e.data?e.dataAdapter=v:e.dataAdapter=m,0<e.minimumInputLength&&(e.dataAdapter=f.Decorate(e.dataAdapter,w)),0<e.maximumInputLength&&(e.dataAdapter=f.Decorate(e.dataAdapter,$)),0<e.maximumSelectionLength&&(e.dataAdapter=f.Decorate(e.dataAdapter,x)),e.tags&&(e.dataAdapter=f.Decorate(e.dataAdapter,_)),null==e.tokenSeparators&&null==e.tokenizer||(e.dataAdapter=f.Decorate(e.dataAdapter,b))),null==e.resultsAdapter&&(e.resultsAdapter=o,null!=e.ajax&&(e.resultsAdapter=f.Decorate(e.resultsAdapter,O)),null!=e.placeholder&&(e.resultsAdapter=f.Decorate(e.resultsAdapter,S)),e.selectOnClose&&(e.resultsAdapter=f.Decorate(e.resultsAdapter,C)),e.tags&&(e.resultsAdapter=f.Decorate(e.resultsAdapter,I))),null==e.dropdownAdapter&&(e.multiple?e.dropdownAdapter=A:(t=f.Decorate(A,D),e.dropdownAdapter=t),0!==e.minimumResultsForSearch&&(e.dropdownAdapter=f.Decorate(e.dropdownAdapter,E)),e.closeOnSelect&&(e.dropdownAdapter=f.Decorate(e.dropdownAdapter,T)),null!=e.dropdownCssClass&&(e.dropdownAdapter=f.Decorate(e.dropdownAdapter,q)),e.dropdownAdapter=f.Decorate(e.dropdownAdapter,L)),null==e.selectionAdapter&&(e.multiple?e.selectionAdapter=a:e.selectionAdapter=r,null!=e.placeholder&&(e.selectionAdapter=f.Decorate(e.selectionAdapter,c)),e.allowClear&&(e.selectionAdapter=f.Decorate(e.selectionAdapter,u)),e.multiple&&(e.selectionAdapter=f.Decorate(e.selectionAdapter,d)),null!=e.selectionCssClass&&(e.selectionAdapter=f.Decorate(e.selectionAdapter,p)),e.selectionAdapter=f.Decorate(e.selectionAdapter,h)),e.language=this._resolveLanguage(e.language),e.language.push("en");for(var n=[],s=0;s<e.language.length;s++){var i=e.language[s];-1===n.indexOf(i)&&n.push(i)}return e.language=n,e.translations=this._processTranslations(e.language,e.debug),e},n.prototype.reset=function(){function a(e){return e.replace(/[^\u0000-\u007E]/g,function(e){return t[e]||e})}this.defaults={amdLanguageBase:"./i18n/",autocomplete:"off",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:f.escapeMarkup,language:{},matcher:function e(t,n){if(null==t.term||""===t.term.trim())return n;if(n.children&&0<n.children.length){for(var s=l.extend(!0,{},n),i=n.children.length-1;0<=i;i--)null==e(t,n.children[i])&&s.children.splice(i,1);return 0<s.children.length?s:e(t,s)}var o=a(n.text).toUpperCase(),r=a(t.term).toUpperCase();return-1<o.indexOf(r)?n:null},minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,scrollAfterSelect:!1,sorter:function(e){return e},templateResult:function(e){return e.text},templateSelection:function(e){return e.text},theme:"default",width:"resolve"}},n.prototype.applyFromElement=function(e,t){var n=e.language,s=this.defaults.language,i=t.prop("lang"),t=t.closest("[lang]").prop("lang"),t=Array.prototype.concat.call(this._resolveLanguage(i),this._resolveLanguage(n),this._resolveLanguage(s),this._resolveLanguage(t));return e.language=t,e},n.prototype._resolveLanguage=function(e){if(!e)return[];if(l.isEmptyObject(e))return[];if(l.isPlainObject(e))return[e];for(var t,n=Array.isArray(e)?e:[e],s=[],i=0;i<n.length;i++)s.push(n[i]),"string"==typeof n[i]&&0<n[i].indexOf("-")&&(t=n[i].split("-")[0],s.push(t));return s},n.prototype._processTranslations=function(e,t){for(var n=new g,s=0;s<e.length;s++){var i=new g,o=e[s];if("string"==typeof o)try{i=g.loadPath(o)}catch(e){try{o=this.defaults.amdLanguageBase+o,i=g.loadPath(o)}catch(e){t&&window.console&&console.warn&&console.warn('Select2: The language file for "'+o+'" could not be automatically loaded. A fallback will be used instead.')}}else i=l.isPlainObject(o)?new g(o):o;n.extend(i)}return n},n.prototype.set=function(e,t){var n={};n[l.camelCase(e)]=t;n=f._convertData(n);l.extend(!0,this.defaults,n)},new n}),u.define("select2/options",["jquery","./defaults","./utils"],function(c,n,u){function e(e,t){this.options=e,null!=t&&this.fromElement(t),null!=t&&(this.options=n.applyFromElement(this.options,t)),this.options=n.apply(this.options)}return e.prototype.fromElement=function(e){var t=["select2"];null==this.options.multiple&&(this.options.multiple=e.prop("multiple")),null==this.options.disabled&&(this.options.disabled=e.prop("disabled")),null==this.options.autocomplete&&e.prop("autocomplete")&&(this.options.autocomplete=e.prop("autocomplete")),null==this.options.dir&&(e.prop("dir")?this.options.dir=e.prop("dir"):e.closest("[dir]").prop("dir")?this.options.dir=e.closest("[dir]").prop("dir"):this.options.dir="ltr"),e.prop("disabled",this.options.disabled),e.prop("multiple",this.options.multiple),u.GetData(e[0],"select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),u.StoreData(e[0],"data",u.GetData(e[0],"select2Tags")),u.StoreData(e[0],"tags",!0)),u.GetData(e[0],"ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),e.attr("ajax--url",u.GetData(e[0],"ajaxUrl")),u.StoreData(e[0],"ajax-Url",u.GetData(e[0],"ajaxUrl")));var n={};function s(e,t){return t.toUpperCase()}for(var i=0;i<e[0].attributes.length;i++){var o=e[0].attributes[i].name,r="data-";o.substr(0,r.length)==r&&(o=o.substring(r.length),r=u.GetData(e[0],o),n[o.replace(/-([a-z])/g,s)]=r)}c.fn.jquery&&"1."==c.fn.jquery.substr(0,2)&&e[0].dataset&&(n=c.extend(!0,{},e[0].dataset,n));var a,l=c.extend(!0,{},u.GetData(e[0]),n);for(a in l=u._convertData(l))-1<t.indexOf(a)||(c.isPlainObject(this.options[a])?c.extend(this.options[a],l[a]):this.options[a]=l[a]);return this},e.prototype.get=function(e){return this.options[e]},e.prototype.set=function(e,t){this.options[e]=t},e}),u.define("select2/core",["jquery","./options","./utils","./keys"],function(t,i,o,s){var r=function(e,t){null!=o.GetData(e[0],"select2")&&o.GetData(e[0],"select2").destroy(),this.$element=e,this.id=this._generateId(e),t=t||{},this.options=new i(t,e),r.__super__.constructor.call(this);var n=e.attr("tabindex")||0;o.StoreData(e[0],"old-tabindex",n),e.attr("tabindex","-1");t=this.options.get("dataAdapter");this.dataAdapter=new t(e,this.options);n=this.render();this._placeContainer(n);t=this.options.get("selectionAdapter");this.selection=new t(e,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,n);t=this.options.get("dropdownAdapter");this.dropdown=new t(e,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,n);n=this.options.get("resultsAdapter");this.results=new n(e,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var s=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(e){s.trigger("selection:update",{data:e})}),e[0].classList.add("select2-hidden-accessible"),e.attr("aria-hidden","true"),this._syncAttributes(),o.StoreData(e[0],"select2",this),e.data("select2",this)};return o.Extend(r,o.Observable),r.prototype._generateId=function(e){return"select2-"+(null!=e.attr("id")?e.attr("id"):null!=e.attr("name")?e.attr("name")+"-"+o.generateChars(2):o.generateChars(4)).replace(/(:|\.|\[|\]|,)/g,"")},r.prototype._placeContainer=function(e){e.insertAfter(this.$element);var t=this._resolveWidth(this.$element,this.options.get("width"));null!=t&&e.css("width",t)},r.prototype._resolveWidth=function(e,t){var n=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==t){var s=this._resolveWidth(e,"style");return null!=s?s:this._resolveWidth(e,"element")}if("element"==t){s=e.outerWidth(!1);return s<=0?"auto":s+"px"}if("style"!=t)return"computedstyle"!=t?t:window.getComputedStyle(e[0]).width;e=e.attr("style");if("string"!=typeof e)return null;for(var i=e.split(";"),o=0,r=i.length;o<r;o+=1){var a=i[o].replace(/\s/g,"").match(n);if(null!==a&&1<=a.length)return a[1]}return null},r.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},r.prototype._registerDomEvents=function(){var t=this;this.$element.on("change.select2",function(){t.dataAdapter.current(function(e){t.trigger("selection:update",{data:e})})}),this.$element.on("focus.select2",function(e){t.trigger("focus",e)}),this._syncA=o.bind(this._syncAttributes,this),this._syncS=o.bind(this._syncSubtree,this),this._observer=new window.MutationObserver(function(e){t._syncA(),t._syncS(e)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})},r.prototype._registerDataEvents=function(){var n=this;this.dataAdapter.on("*",function(e,t){n.trigger(e,t)})},r.prototype._registerSelectionEvents=function(){var n=this,s=["toggle","focus"];this.selection.on("toggle",function(){n.toggleDropdown()}),this.selection.on("focus",function(e){n.focus(e)}),this.selection.on("*",function(e,t){-1===s.indexOf(e)&&n.trigger(e,t)})},r.prototype._registerDropdownEvents=function(){var n=this;this.dropdown.on("*",function(e,t){n.trigger(e,t)})},r.prototype._registerResultsEvents=function(){var n=this;this.results.on("*",function(e,t){n.trigger(e,t)})},r.prototype._registerEvents=function(){var n=this;this.on("open",function(){n.$container[0].classList.add("select2-container--open")}),this.on("close",function(){n.$container[0].classList.remove("select2-container--open")}),this.on("enable",function(){n.$container[0].classList.remove("select2-container--disabled")}),this.on("disable",function(){n.$container[0].classList.add("select2-container--disabled")}),this.on("blur",function(){n.$container[0].classList.remove("select2-container--focus")}),this.on("query",function(t){n.isOpen()||n.trigger("open",{}),this.dataAdapter.query(t,function(e){n.trigger("results:all",{data:e,query:t})})}),this.on("query:append",function(t){this.dataAdapter.query(t,function(e){n.trigger("results:append",{data:e,query:t})})}),this.on("keypress",function(e){var t=e.which;n.isOpen()?t===s.ESC||t===s.UP&&e.altKey?(n.close(e),e.preventDefault()):t===s.ENTER||t===s.TAB?(n.trigger("results:select",{}),e.preventDefault()):t===s.SPACE&&e.ctrlKey?(n.trigger("results:toggle",{}),e.preventDefault()):t===s.UP?(n.trigger("results:previous",{}),e.preventDefault()):t===s.DOWN&&(n.trigger("results:next",{}),e.preventDefault()):(t===s.ENTER||t===s.SPACE||t===s.DOWN&&e.altKey)&&(n.open(),e.preventDefault())})},r.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.isDisabled()?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},r.prototype._isChangeMutation=function(e){var t=this;if(e.addedNodes&&0<e.addedNodes.length){for(var n=0;n<e.addedNodes.length;n++)if(e.addedNodes[n].selected)return!0}else{if(e.removedNodes&&0<e.removedNodes.length)return!0;if(Array.isArray(e))return e.some(function(e){return t._isChangeMutation(e)})}return!1},r.prototype._syncSubtree=function(e){var e=this._isChangeMutation(e),t=this;e&&this.dataAdapter.current(function(e){t.trigger("selection:update",{data:e})})},r.prototype.trigger=function(e,t){var n=r.__super__.trigger,s={open:"opening",close:"closing",select:"selecting",unselect:"unselecting",clear:"clearing"};if(void 0===t&&(t={}),e in s){var i=s[e],s={prevented:!1,name:e,args:t};if(n.call(this,i,s),s.prevented)return void(t.prevented=!0)}n.call(this,e,t)},r.prototype.toggleDropdown=function(){this.isDisabled()||(this.isOpen()?this.close():this.open())},r.prototype.open=function(){this.isOpen()||this.isDisabled()||this.trigger("query",{})},r.prototype.close=function(e){this.isOpen()&&this.trigger("close",{originalEvent:e})},r.prototype.isEnabled=function(){return!this.isDisabled()},r.prototype.isDisabled=function(){return this.options.get("disabled")},r.prototype.isOpen=function(){return this.$container[0].classList.contains("select2-container--open")},r.prototype.hasFocus=function(){return this.$container[0].classList.contains("select2-container--focus")},r.prototype.focus=function(e){this.hasFocus()||(this.$container[0].classList.add("select2-container--focus"),this.trigger("focus",{}))},r.prototype.enable=function(e){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),null!=e&&0!==e.length||(e=[!0]);e=!e[0];this.$element.prop("disabled",e)},r.prototype.data=function(){this.options.get("debug")&&0<arguments.length&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var t=[];return this.dataAdapter.current(function(e){t=e}),t},r.prototype.val=function(e){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==e||0===e.length)return this.$element.val();e=e[0];Array.isArray(e)&&(e=e.map(function(e){return e.toString()})),this.$element.val(e).trigger("input").trigger("change")},r.prototype.destroy=function(){o.RemoveData(this.$container[0]),this.$container.remove(),this._observer.disconnect(),this._observer=null,this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",o.GetData(this.$element[0],"old-tabindex")),this.$element[0].classList.remove("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),o.RemoveData(this.$element[0]),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},r.prototype.render=function(){var e=t('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return e.attr("dir",this.options.get("dir")),this.$container=e,this.$container[0].classList.add("select2-container--"+this.options.get("theme")),o.StoreData(e[0],"element",this.$element),e},r}),u.define("select2/dropdown/attachContainer",[],function(){function e(e,t,n){e.call(this,t,n)}return e.prototype.position=function(e,t,n){n.find(".dropdown-wrapper").append(t),t[0].classList.add("select2-dropdown--below"),n[0].classList.add("select2-container--below")},e}),u.define("select2/dropdown/stopPropagation",[],function(){function e(){}return e.prototype.bind=function(e,t,n){e.call(this,t,n);this.$dropdown.on(["blur","change","click","dblclick","focus","focusin","focusout","input","keydown","keyup","keypress","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseup","search","touchend","touchstart"].join(" "),function(e){e.stopPropagation()})},e}),u.define("select2/selection/stopPropagation",[],function(){function e(){}return e.prototype.bind=function(e,t,n){e.call(this,t,n);this.$selection.on(["blur","change","click","dblclick","focus","focusin","focusout","input","keydown","keyup","keypress","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseup","search","touchend","touchstart"].join(" "),function(e){e.stopPropagation()})},e}),a=function(u){var d,p,e=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],t="onwheel"in document||9<=document.documentMode?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],h=Array.prototype.slice;if(u.event.fixHooks)for(var n=e.length;n;)u.event.fixHooks[e[--n]]=u.event.mouseHooks;var f=u.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var e=t.length;e;)this.addEventListener(t[--e],s,!1);else this.onmousewheel=s;u.data(this,"mousewheel-line-height",f.getLineHeight(this)),u.data(this,"mousewheel-page-height",f.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var e=t.length;e;)this.removeEventListener(t[--e],s,!1);else this.onmousewheel=null;u.removeData(this,"mousewheel-line-height"),u.removeData(this,"mousewheel-page-height")},getLineHeight:function(e){var t=u(e),e=t["offsetParent"in u.fn?"offsetParent":"parent"]();return e.length||(e=u("body")),parseInt(e.css("fontSize"),10)||parseInt(t.css("fontSize"),10)||16},getPageHeight:function(e){return u(e).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};function s(e){var t,n=e||window.event,s=h.call(arguments,1),i=0,o=0,r=0,a=0,l=0,c=0;if(e=u.event.fix(n),e.type="mousewheel","detail"in n&&(r=-1*n.detail),"wheelDelta"in n&&(r=n.wheelDelta),"wheelDeltaY"in n&&(r=n.wheelDeltaY),"wheelDeltaX"in n&&(o=-1*n.wheelDeltaX),"axis"in n&&n.axis===n.HORIZONTAL_AXIS&&(o=-1*r,r=0),i=0===r?o:r,"deltaY"in n&&(i=r=-1*n.deltaY),"deltaX"in n&&(o=n.deltaX,0===r&&(i=-1*o)),0!==r||0!==o)return 1===n.deltaMode?(i*=t=u.data(this,"mousewheel-line-height"),r*=t,o*=t):2===n.deltaMode&&(i*=t=u.data(this,"mousewheel-page-height"),r*=t,o*=t),a=Math.max(Math.abs(r),Math.abs(o)),(!p||a<p)&&m(n,p=a)&&(p/=40),m(n,a)&&(i/=40,o/=40,r/=40),i=Math[1<=i?"floor":"ceil"](i/p),o=Math[1<=o?"floor":"ceil"](o/p),r=Math[1<=r?"floor":"ceil"](r/p),f.settings.normalizeOffset&&this.getBoundingClientRect&&(a=this.getBoundingClientRect(),l=e.clientX-a.left,c=e.clientY-a.top),e.deltaX=o,e.deltaY=r,e.deltaFactor=p,e.offsetX=l,e.offsetY=c,e.deltaMode=0,s.unshift(e,i,o,r),d&&clearTimeout(d),d=setTimeout(g,200),(u.event.dispatch||u.event.handle).apply(this,s)}function g(){p=null}function m(e,t){return f.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120==0}u.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})},"function"==typeof u.define&&u.define.amd?u.define("jquery-mousewheel",["jquery"],a):"object"==typeof exports?module.exports=a:a(t),u.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults","./select2/utils"],function(i,e,o,t,r){var a;return null==i.fn.select2&&(a=["open","close","destroy"],i.fn.select2=function(t){if("object"==typeof(t=t||{}))return this.each(function(){var e=i.extend(!0,{},t);new o(i(this),e)}),this;if("string"!=typeof t)throw new Error("Invalid arguments for Select2: "+t);var n,s=Array.prototype.slice.call(arguments,1);return this.each(function(){var e=r.GetData(this,"select2");null==e&&window.console&&console.error&&console.error("The select2('"+t+"') method was called on an element that is not using Select2."),n=e[t].apply(e,s)}),-1<a.indexOf(t)?this:n}),null==i.fn.select2.defaults&&(i.fn.select2.defaults=t),o}),{define:u.define,require:u.require});function b(e,t){return s.call(e,t)}function l(e,t){var n,s,i,o,r,a,l,c,u,d,p=t&&t.split("/"),h=v.map,f=h&&h["*"]||{};if(e){for(t=(e=e.split("/")).length-1,v.nodeIdCompat&&_.test(e[t])&&(e[t]=e[t].replace(_,"")),"."===e[0].charAt(0)&&p&&(e=p.slice(0,p.length-1).concat(e)),c=0;c<e.length;c++)"."===(d=e[c])?(e.splice(c,1),--c):".."===d&&(0===c||1===c&&".."===e[2]||".."===e[c-1]||0<c&&(e.splice(c-1,2),c-=2));e=e.join("/")}if((p||f)&&h){for(c=(n=e.split("/")).length;0<c;--c){if(s=n.slice(0,c).join("/"),p)for(u=p.length;0<u;--u)if(i=h[p.slice(0,u).join("/")],i=i&&i[s]){o=i,r=c;break}if(o)break;!a&&f&&f[s]&&(a=f[s],l=c)}!o&&a&&(o=a,r=l),o&&(n.splice(0,r,o),e=n.join("/"))}return e}function w(t,n){return function(){var e=i.call(arguments,0);return"string"!=typeof e[0]&&1===e.length&&e.push(null),r.apply(p,e.concat([t,n]))}}function x(e){var t;if(b(m,e)&&(t=m[e],delete m[e],y[e]=!0,o.apply(p,t)),!b(g,e)&&!b(y,e))throw new Error("No "+e);return g[e]}function c(e){var t,n=e?e.indexOf("!"):-1;return-1<n&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function A(e){return e?c(e):[]}var u=a.require("jquery.select2");return t.fn.select2.amd=a,u});
//! moment.js
//! version : 2.18.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b()}(this,function(){"use strict";function a(){return sd.apply(null,arguments)}function b(a){sd=a}function c(a){return a instanceof Array||"[object Array]"===Object.prototype.toString.call(a)}function d(a){return null!=a&&"[object Object]"===Object.prototype.toString.call(a)}function e(a){var b;for(b in a)return!1;return!0}function f(a){return void 0===a}function g(a){return"number"==typeof a||"[object Number]"===Object.prototype.toString.call(a)}function h(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function i(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function j(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function k(a,b){for(var c in b)j(b,c)&&(a[c]=b[c]);return j(b,"toString")&&(a.toString=b.toString),j(b,"valueOf")&&(a.valueOf=b.valueOf),a}function l(a,b,c,d){return sb(a,b,c,d,!0).utc()}function m(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function n(a){return null==a._pf&&(a._pf=m()),a._pf}function o(a){if(null==a._isValid){var b=n(a),c=ud.call(b.parsedDateParts,function(a){return null!=a}),d=!isNaN(a._d.getTime())&&b.overflow<0&&!b.empty&&!b.invalidMonth&&!b.invalidWeekday&&!b.nullInput&&!b.invalidFormat&&!b.userInvalidated&&(!b.meridiem||b.meridiem&&c);if(a._strict&&(d=d&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour),null!=Object.isFrozen&&Object.isFrozen(a))return d;a._isValid=d}return a._isValid}function p(a){var b=l(NaN);return null!=a?k(n(b),a):n(b).userInvalidated=!0,b}function q(a,b){var c,d,e;if(f(b._isAMomentObject)||(a._isAMomentObject=b._isAMomentObject),f(b._i)||(a._i=b._i),f(b._f)||(a._f=b._f),f(b._l)||(a._l=b._l),f(b._strict)||(a._strict=b._strict),f(b._tzm)||(a._tzm=b._tzm),f(b._isUTC)||(a._isUTC=b._isUTC),f(b._offset)||(a._offset=b._offset),f(b._pf)||(a._pf=n(b)),f(b._locale)||(a._locale=b._locale),vd.length>0)for(c=0;c<vd.length;c++)d=vd[c],e=b[d],f(e)||(a[d]=e);return a}function r(b){q(this,b),this._d=new Date(null!=b._d?b._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),wd===!1&&(wd=!0,a.updateOffset(this),wd=!1)}function s(a){return a instanceof r||null!=a&&null!=a._isAMomentObject}function t(a){return a<0?Math.ceil(a)||0:Math.floor(a)}function u(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=t(b)),c}function v(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;d<e;d++)(c&&a[d]!==b[d]||!c&&u(a[d])!==u(b[d]))&&g++;return g+f}function w(b){a.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+b)}function x(b,c){var d=!0;return k(function(){if(null!=a.deprecationHandler&&a.deprecationHandler(null,b),d){for(var e,f=[],g=0;g<arguments.length;g++){if(e="","object"==typeof arguments[g]){e+="\n["+g+"] ";for(var h in arguments[0])e+=h+": "+arguments[0][h]+", ";e=e.slice(0,-2)}else e=arguments[g];f.push(e)}w(b+"\nArguments: "+Array.prototype.slice.call(f).join("")+"\n"+(new Error).stack),d=!1}return c.apply(this,arguments)},c)}function y(b,c){null!=a.deprecationHandler&&a.deprecationHandler(b,c),xd[b]||(w(c),xd[b]=!0)}function z(a){return a instanceof Function||"[object Function]"===Object.prototype.toString.call(a)}function A(a){var b,c;for(c in a)b=a[c],z(b)?this[c]=b:this["_"+c]=b;this._config=a,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function B(a,b){var c,e=k({},a);for(c in b)j(b,c)&&(d(a[c])&&d(b[c])?(e[c]={},k(e[c],a[c]),k(e[c],b[c])):null!=b[c]?e[c]=b[c]:delete e[c]);for(c in a)j(a,c)&&!j(b,c)&&d(a[c])&&(e[c]=k({},e[c]));return e}function C(a){null!=a&&this.set(a)}function D(a,b,c){var d=this._calendar[a]||this._calendar.sameElse;return z(d)?d.call(b,c):d}function E(a){var b=this._longDateFormat[a],c=this._longDateFormat[a.toUpperCase()];return b||!c?b:(this._longDateFormat[a]=c.replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a])}function F(){return this._invalidDate}function G(a){return this._ordinal.replace("%d",a)}function H(a,b,c,d){var e=this._relativeTime[c];return z(e)?e(a,b,c,d):e.replace(/%d/i,a)}function I(a,b){var c=this._relativeTime[a>0?"future":"past"];return z(c)?c(b):c.replace(/%s/i,b)}function J(a,b){var c=a.toLowerCase();Hd[c]=Hd[c+"s"]=Hd[b]=a}function K(a){return"string"==typeof a?Hd[a]||Hd[a.toLowerCase()]:void 0}function L(a){var b,c,d={};for(c in a)j(a,c)&&(b=K(c),b&&(d[b]=a[c]));return d}function M(a,b){Id[a]=b}function N(a){var b=[];for(var c in a)b.push({unit:c,priority:Id[c]});return b.sort(function(a,b){return a.priority-b.priority}),b}function O(b,c){return function(d){return null!=d?(Q(this,b,d),a.updateOffset(this,c),this):P(this,b)}}function P(a,b){return a.isValid()?a._d["get"+(a._isUTC?"UTC":"")+b]():NaN}function Q(a,b,c){a.isValid()&&a._d["set"+(a._isUTC?"UTC":"")+b](c)}function R(a){return a=K(a),z(this[a])?this[a]():this}function S(a,b){if("object"==typeof a){a=L(a);for(var c=N(a),d=0;d<c.length;d++)this[c[d].unit](a[c[d].unit])}else if(a=K(a),z(this[a]))return this[a](b);return this}function T(a,b,c){var d=""+Math.abs(a),e=b-d.length,f=a>=0;return(f?c?"+":"":"-")+Math.pow(10,Math.max(0,e)).toString().substr(1)+d}function U(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(Md[a]=e),b&&(Md[b[0]]=function(){return T(e.apply(this,arguments),b[1],b[2])}),c&&(Md[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)})}function V(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function W(a){var b,c,d=a.match(Jd);for(b=0,c=d.length;b<c;b++)Md[d[b]]?d[b]=Md[d[b]]:d[b]=V(d[b]);return function(b){var e,f="";for(e=0;e<c;e++)f+=z(d[e])?d[e].call(b,a):d[e];return f}}function X(a,b){return a.isValid()?(b=Y(b,a.localeData()),Ld[b]=Ld[b]||W(b),Ld[b](a)):a.localeData().invalidDate()}function Y(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Kd.lastIndex=0;d>=0&&Kd.test(a);)a=a.replace(Kd,c),Kd.lastIndex=0,d-=1;return a}function Z(a,b,c){ce[a]=z(b)?b:function(a,d){return a&&c?c:b}}function $(a,b){return j(ce,a)?ce[a](b._strict,b._locale):new RegExp(_(a))}function _(a){return aa(a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e}))}function aa(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function ba(a,b){var c,d=b;for("string"==typeof a&&(a=[a]),g(b)&&(d=function(a,c){c[b]=u(a)}),c=0;c<a.length;c++)de[a[c]]=d}function ca(a,b){ba(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function da(a,b,c){null!=b&&j(de,a)&&de[a](b,c._a,c,a)}function ea(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function fa(a,b){return a?c(this._months)?this._months[a.month()]:this._months[(this._months.isFormat||oe).test(b)?"format":"standalone"][a.month()]:c(this._months)?this._months:this._months.standalone}function ga(a,b){return a?c(this._monthsShort)?this._monthsShort[a.month()]:this._monthsShort[oe.test(b)?"format":"standalone"][a.month()]:c(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function ha(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],d=0;d<12;++d)f=l([2e3,d]),this._shortMonthsParse[d]=this.monthsShort(f,"").toLocaleLowerCase(),this._longMonthsParse[d]=this.months(f,"").toLocaleLowerCase();return c?"MMM"===b?(e=ne.call(this._shortMonthsParse,g),e!==-1?e:null):(e=ne.call(this._longMonthsParse,g),e!==-1?e:null):"MMM"===b?(e=ne.call(this._shortMonthsParse,g),e!==-1?e:(e=ne.call(this._longMonthsParse,g),e!==-1?e:null)):(e=ne.call(this._longMonthsParse,g),e!==-1?e:(e=ne.call(this._shortMonthsParse,g),e!==-1?e:null))}function ia(a,b,c){var d,e,f;if(this._monthsParseExact)return ha.call(this,a,b,c);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;d<12;d++){if(e=l([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}}function ja(a,b){var c;if(!a.isValid())return a;if("string"==typeof b)if(/^\d+$/.test(b))b=u(b);else if(b=a.localeData().monthsParse(b),!g(b))return a;return c=Math.min(a.date(),ea(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a}function ka(b){return null!=b?(ja(this,b),a.updateOffset(this,!0),this):P(this,"Month")}function la(){return ea(this.year(),this.month())}function ma(a){return this._monthsParseExact?(j(this,"_monthsRegex")||oa.call(this),a?this._monthsShortStrictRegex:this._monthsShortRegex):(j(this,"_monthsShortRegex")||(this._monthsShortRegex=re),this._monthsShortStrictRegex&&a?this._monthsShortStrictRegex:this._monthsShortRegex)}function na(a){return this._monthsParseExact?(j(this,"_monthsRegex")||oa.call(this),a?this._monthsStrictRegex:this._monthsRegex):(j(this,"_monthsRegex")||(this._monthsRegex=se),this._monthsStrictRegex&&a?this._monthsStrictRegex:this._monthsRegex)}function oa(){function a(a,b){return b.length-a.length}var b,c,d=[],e=[],f=[];for(b=0;b<12;b++)c=l([2e3,b]),d.push(this.monthsShort(c,"")),e.push(this.months(c,"")),f.push(this.months(c,"")),f.push(this.monthsShort(c,""));for(d.sort(a),e.sort(a),f.sort(a),b=0;b<12;b++)d[b]=aa(d[b]),e[b]=aa(e[b]);for(b=0;b<24;b++)f[b]=aa(f[b]);this._monthsRegex=new RegExp("^("+f.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+e.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+d.join("|")+")","i")}function pa(a){return qa(a)?366:365}function qa(a){return a%4===0&&a%100!==0||a%400===0}function ra(){return qa(this.year())}function sa(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return a<100&&a>=0&&isFinite(h.getFullYear())&&h.setFullYear(a),h}function ta(a){var b=new Date(Date.UTC.apply(null,arguments));return a<100&&a>=0&&isFinite(b.getUTCFullYear())&&b.setUTCFullYear(a),b}function ua(a,b,c){var d=7+b-c,e=(7+ta(a,0,d).getUTCDay()-b)%7;return-e+d-1}function va(a,b,c,d,e){var f,g,h=(7+c-d)%7,i=ua(a,d,e),j=1+7*(b-1)+h+i;return j<=0?(f=a-1,g=pa(f)+j):j>pa(a)?(f=a+1,g=j-pa(a)):(f=a,g=j),{year:f,dayOfYear:g}}function wa(a,b,c){var d,e,f=ua(a.year(),b,c),g=Math.floor((a.dayOfYear()-f-1)/7)+1;return g<1?(e=a.year()-1,d=g+xa(e,b,c)):g>xa(a.year(),b,c)?(d=g-xa(a.year(),b,c),e=a.year()+1):(e=a.year(),d=g),{week:d,year:e}}function xa(a,b,c){var d=ua(a,b,c),e=ua(a+1,b,c);return(pa(a)-d+e)/7}function ya(a){return wa(a,this._week.dow,this._week.doy).week}function za(){return this._week.dow}function Aa(){return this._week.doy}function Ba(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function Ca(a){var b=wa(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}function Da(a,b){return"string"!=typeof a?a:isNaN(a)?(a=b.weekdaysParse(a),"number"==typeof a?a:null):parseInt(a,10)}function Ea(a,b){return"string"==typeof a?b.weekdaysParse(a)%7||7:isNaN(a)?null:a}function Fa(a,b){return a?c(this._weekdays)?this._weekdays[a.day()]:this._weekdays[this._weekdays.isFormat.test(b)?"format":"standalone"][a.day()]:c(this._weekdays)?this._weekdays:this._weekdays.standalone}function Ga(a){return a?this._weekdaysShort[a.day()]:this._weekdaysShort}function Ha(a){return a?this._weekdaysMin[a.day()]:this._weekdaysMin}function Ia(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],d=0;d<7;++d)f=l([2e3,1]).day(d),this._minWeekdaysParse[d]=this.weekdaysMin(f,"").toLocaleLowerCase(),this._shortWeekdaysParse[d]=this.weekdaysShort(f,"").toLocaleLowerCase(),this._weekdaysParse[d]=this.weekdays(f,"").toLocaleLowerCase();return c?"dddd"===b?(e=ne.call(this._weekdaysParse,g),e!==-1?e:null):"ddd"===b?(e=ne.call(this._shortWeekdaysParse,g),e!==-1?e:null):(e=ne.call(this._minWeekdaysParse,g),e!==-1?e:null):"dddd"===b?(e=ne.call(this._weekdaysParse,g),e!==-1?e:(e=ne.call(this._shortWeekdaysParse,g),e!==-1?e:(e=ne.call(this._minWeekdaysParse,g),e!==-1?e:null))):"ddd"===b?(e=ne.call(this._shortWeekdaysParse,g),e!==-1?e:(e=ne.call(this._weekdaysParse,g),e!==-1?e:(e=ne.call(this._minWeekdaysParse,g),e!==-1?e:null))):(e=ne.call(this._minWeekdaysParse,g),e!==-1?e:(e=ne.call(this._weekdaysParse,g),e!==-1?e:(e=ne.call(this._shortWeekdaysParse,g),e!==-1?e:null)))}function Ja(a,b,c){var d,e,f;if(this._weekdaysParseExact)return Ia.call(this,a,b,c);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),d=0;d<7;d++){if(e=l([2e3,1]).day(d),c&&!this._fullWeekdaysParse[d]&&(this._fullWeekdaysParse[d]=new RegExp("^"+this.weekdays(e,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[d]=new RegExp("^"+this.weekdaysShort(e,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[d]=new RegExp("^"+this.weekdaysMin(e,"").replace(".",".?")+"$","i")),this._weekdaysParse[d]||(f="^"+this.weekdays(e,"")+"|^"+this.weekdaysShort(e,"")+"|^"+this.weekdaysMin(e,""),this._weekdaysParse[d]=new RegExp(f.replace(".",""),"i")),c&&"dddd"===b&&this._fullWeekdaysParse[d].test(a))return d;if(c&&"ddd"===b&&this._shortWeekdaysParse[d].test(a))return d;if(c&&"dd"===b&&this._minWeekdaysParse[d].test(a))return d;if(!c&&this._weekdaysParse[d].test(a))return d}}function Ka(a){if(!this.isValid())return null!=a?this:NaN;var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=Da(a,this.localeData()),this.add(a-b,"d")):b}function La(a){if(!this.isValid())return null!=a?this:NaN;var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")}function Ma(a){if(!this.isValid())return null!=a?this:NaN;if(null!=a){var b=Ea(a,this.localeData());return this.day(this.day()%7?b:b-7)}return this.day()||7}function Na(a){return this._weekdaysParseExact?(j(this,"_weekdaysRegex")||Qa.call(this),a?this._weekdaysStrictRegex:this._weekdaysRegex):(j(this,"_weekdaysRegex")||(this._weekdaysRegex=ye),this._weekdaysStrictRegex&&a?this._weekdaysStrictRegex:this._weekdaysRegex)}function Oa(a){return this._weekdaysParseExact?(j(this,"_weekdaysRegex")||Qa.call(this),a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(j(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=ze),this._weekdaysShortStrictRegex&&a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Pa(a){return this._weekdaysParseExact?(j(this,"_weekdaysRegex")||Qa.call(this),a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(j(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Ae),this._weekdaysMinStrictRegex&&a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Qa(){function a(a,b){return b.length-a.length}var b,c,d,e,f,g=[],h=[],i=[],j=[];for(b=0;b<7;b++)c=l([2e3,1]).day(b),d=this.weekdaysMin(c,""),e=this.weekdaysShort(c,""),f=this.weekdays(c,""),g.push(d),h.push(e),i.push(f),j.push(d),j.push(e),j.push(f);for(g.sort(a),h.sort(a),i.sort(a),j.sort(a),b=0;b<7;b++)h[b]=aa(h[b]),i[b]=aa(i[b]),j[b]=aa(j[b]);this._weekdaysRegex=new RegExp("^("+j.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+h.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+g.join("|")+")","i")}function Ra(){return this.hours()%12||12}function Sa(){return this.hours()||24}function Ta(a,b){U(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}function Ua(a,b){return b._meridiemParse}function Va(a){return"p"===(a+"").toLowerCase().charAt(0)}function Wa(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"}function Xa(a){return a?a.toLowerCase().replace("_","-"):a}function Ya(a){for(var b,c,d,e,f=0;f<a.length;){for(e=Xa(a[f]).split("-"),b=e.length,c=Xa(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=Za(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&v(e,c,!0)>=b-1)break;b--}f++}return null}function Za(a){var b=null;if(!Fe[a]&&"undefined"!=typeof module&&module&&module.exports)try{b=Be._abbr,require("./locale/"+a),$a(b)}catch(a){}return Fe[a]}function $a(a,b){var c;return a&&(c=f(b)?bb(a):_a(a,b),c&&(Be=c)),Be._abbr}function _a(a,b){if(null!==b){var c=Ee;if(b.abbr=a,null!=Fe[a])y("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),c=Fe[a]._config;else if(null!=b.parentLocale){if(null==Fe[b.parentLocale])return Ge[b.parentLocale]||(Ge[b.parentLocale]=[]),Ge[b.parentLocale].push({name:a,config:b}),null;c=Fe[b.parentLocale]._config}return Fe[a]=new C(B(c,b)),Ge[a]&&Ge[a].forEach(function(a){_a(a.name,a.config)}),$a(a),Fe[a]}return delete Fe[a],null}function ab(a,b){if(null!=b){var c,d=Ee;null!=Fe[a]&&(d=Fe[a]._config),b=B(d,b),c=new C(b),c.parentLocale=Fe[a],Fe[a]=c,$a(a)}else null!=Fe[a]&&(null!=Fe[a].parentLocale?Fe[a]=Fe[a].parentLocale:null!=Fe[a]&&delete Fe[a]);return Fe[a]}function bb(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return Be;if(!c(a)){if(b=Za(a))return b;a=[a]}return Ya(a)}function cb(){return Ad(Fe)}function db(a){var b,c=a._a;return c&&n(a).overflow===-2&&(b=c[fe]<0||c[fe]>11?fe:c[ge]<1||c[ge]>ea(c[ee],c[fe])?ge:c[he]<0||c[he]>24||24===c[he]&&(0!==c[ie]||0!==c[je]||0!==c[ke])?he:c[ie]<0||c[ie]>59?ie:c[je]<0||c[je]>59?je:c[ke]<0||c[ke]>999?ke:-1,n(a)._overflowDayOfYear&&(b<ee||b>ge)&&(b=ge),n(a)._overflowWeeks&&b===-1&&(b=le),n(a)._overflowWeekday&&b===-1&&(b=me),n(a).overflow=b),a}function eb(a){var b,c,d,e,f,g,h=a._i,i=He.exec(h)||Ie.exec(h);if(i){for(n(a).iso=!0,b=0,c=Ke.length;b<c;b++)if(Ke[b][1].exec(i[1])){e=Ke[b][0],d=Ke[b][2]!==!1;break}if(null==e)return void(a._isValid=!1);if(i[3]){for(b=0,c=Le.length;b<c;b++)if(Le[b][1].exec(i[3])){f=(i[2]||" ")+Le[b][0];break}if(null==f)return void(a._isValid=!1)}if(!d&&null!=f)return void(a._isValid=!1);if(i[4]){if(!Je.exec(i[4]))return void(a._isValid=!1);g="Z"}a._f=e+(f||"")+(g||""),lb(a)}else a._isValid=!1}function fb(a){var b,c,d,e,f,g,h,i,j={" GMT":" +0000"," EDT":" -0400"," EST":" -0500"," CDT":" -0500"," CST":" -0600"," MDT":" -0600"," MST":" -0700"," PDT":" -0700"," PST":" -0800"},k="YXWVUTSRQPONZABCDEFGHIKLM";if(b=a._i.replace(/\([^\)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s|\s$/g,""),c=Ne.exec(b)){if(d=c[1]?"ddd"+(5===c[1].length?", ":" "):"",e="D MMM "+(c[2].length>10?"YYYY ":"YY "),f="HH:mm"+(c[4]?":ss":""),c[1]){var l=new Date(c[2]),m=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][l.getDay()];if(c[1].substr(0,3)!==m)return n(a).weekdayMismatch=!0,void(a._isValid=!1)}switch(c[5].length){case 2:0===i?h=" +0000":(i=k.indexOf(c[5][1].toUpperCase())-12,h=(i<0?" -":" +")+(""+i).replace(/^-?/,"0").match(/..$/)[0]+"00");break;case 4:h=j[c[5]];break;default:h=j[" GMT"]}c[5]=h,a._i=c.splice(1).join(""),g=" ZZ",a._f=d+e+f+g,lb(a),n(a).rfc2822=!0}else a._isValid=!1}function gb(b){var c=Me.exec(b._i);return null!==c?void(b._d=new Date(+c[1])):(eb(b),void(b._isValid===!1&&(delete b._isValid,fb(b),b._isValid===!1&&(delete b._isValid,a.createFromInputFallback(b)))))}function hb(a,b,c){return null!=a?a:null!=b?b:c}function ib(b){var c=new Date(a.now());return b._useUTC?[c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()]:[c.getFullYear(),c.getMonth(),c.getDate()]}function jb(a){var b,c,d,e,f=[];if(!a._d){for(d=ib(a),a._w&&null==a._a[ge]&&null==a._a[fe]&&kb(a),null!=a._dayOfYear&&(e=hb(a._a[ee],d[ee]),(a._dayOfYear>pa(e)||0===a._dayOfYear)&&(n(a)._overflowDayOfYear=!0),c=ta(e,0,a._dayOfYear),a._a[fe]=c.getUTCMonth(),a._a[ge]=c.getUTCDate()),b=0;b<3&&null==a._a[b];++b)a._a[b]=f[b]=d[b];for(;b<7;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];24===a._a[he]&&0===a._a[ie]&&0===a._a[je]&&0===a._a[ke]&&(a._nextDay=!0,a._a[he]=0),a._d=(a._useUTC?ta:sa).apply(null,f),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[he]=24)}}function kb(a){var b,c,d,e,f,g,h,i;if(b=a._w,null!=b.GG||null!=b.W||null!=b.E)f=1,g=4,c=hb(b.GG,a._a[ee],wa(tb(),1,4).year),d=hb(b.W,1),e=hb(b.E,1),(e<1||e>7)&&(i=!0);else{f=a._locale._week.dow,g=a._locale._week.doy;var j=wa(tb(),f,g);c=hb(b.gg,a._a[ee],j.year),d=hb(b.w,j.week),null!=b.d?(e=b.d,(e<0||e>6)&&(i=!0)):null!=b.e?(e=b.e+f,(b.e<0||b.e>6)&&(i=!0)):e=f}d<1||d>xa(c,f,g)?n(a)._overflowWeeks=!0:null!=i?n(a)._overflowWeekday=!0:(h=va(c,d,e,f,g),a._a[ee]=h.year,a._dayOfYear=h.dayOfYear)}function lb(b){if(b._f===a.ISO_8601)return void eb(b);if(b._f===a.RFC_2822)return void fb(b);b._a=[],n(b).empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,j=0;for(e=Y(b._f,b._locale).match(Jd)||[],c=0;c<e.length;c++)f=e[c],d=(h.match($(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&n(b).unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),j+=d.length),Md[f]?(d?n(b).empty=!1:n(b).unusedTokens.push(f),da(f,d,b)):b._strict&&!d&&n(b).unusedTokens.push(f);n(b).charsLeftOver=i-j,h.length>0&&n(b).unusedInput.push(h),b._a[he]<=12&&n(b).bigHour===!0&&b._a[he]>0&&(n(b).bigHour=void 0),n(b).parsedDateParts=b._a.slice(0),n(b).meridiem=b._meridiem,b._a[he]=mb(b._locale,b._a[he],b._meridiem),jb(b),db(b)}function mb(a,b,c){var d;return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&b<12&&(b+=12),d||12!==b||(b=0),b):b}function nb(a){var b,c,d,e,f;if(0===a._f.length)return n(a).invalidFormat=!0,void(a._d=new Date(NaN));for(e=0;e<a._f.length;e++)f=0,b=q({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._f=a._f[e],lb(b),o(b)&&(f+=n(b).charsLeftOver,f+=10*n(b).unusedTokens.length,n(b).score=f,(null==d||f<d)&&(d=f,c=b));k(a,c||b)}function ob(a){if(!a._d){var b=L(a._i);a._a=i([b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],function(a){return a&&parseInt(a,10)}),jb(a)}}function pb(a){var b=new r(db(qb(a)));return b._nextDay&&(b.add(1,"d"),b._nextDay=void 0),b}function qb(a){var b=a._i,d=a._f;return a._locale=a._locale||bb(a._l),null===b||void 0===d&&""===b?p({nullInput:!0}):("string"==typeof b&&(a._i=b=a._locale.preparse(b)),s(b)?new r(db(b)):(h(b)?a._d=b:c(d)?nb(a):d?lb(a):rb(a),o(a)||(a._d=null),a))}function rb(b){var e=b._i;f(e)?b._d=new Date(a.now()):h(e)?b._d=new Date(e.valueOf()):"string"==typeof e?gb(b):c(e)?(b._a=i(e.slice(0),function(a){return parseInt(a,10)}),jb(b)):d(e)?ob(b):g(e)?b._d=new Date(e):a.createFromInputFallback(b)}function sb(a,b,f,g,h){var i={};return f!==!0&&f!==!1||(g=f,f=void 0),(d(a)&&e(a)||c(a)&&0===a.length)&&(a=void 0),i._isAMomentObject=!0,i._useUTC=i._isUTC=h,i._l=f,i._i=a,i._f=b,i._strict=g,pb(i)}function tb(a,b,c,d){return sb(a,b,c,d,!1)}function ub(a,b){var d,e;if(1===b.length&&c(b[0])&&(b=b[0]),!b.length)return tb();for(d=b[0],e=1;e<b.length;++e)b[e].isValid()&&!b[e][a](d)||(d=b[e]);return d}function vb(){var a=[].slice.call(arguments,0);return ub("isBefore",a)}function wb(){var a=[].slice.call(arguments,0);return ub("isAfter",a)}function xb(a){for(var b in a)if(Re.indexOf(b)===-1||null!=a[b]&&isNaN(a[b]))return!1;for(var c=!1,d=0;d<Re.length;++d)if(a[Re[d]]){if(c)return!1;parseFloat(a[Re[d]])!==u(a[Re[d]])&&(c=!0)}return!0}function yb(){return this._isValid}function zb(){return Sb(NaN)}function Ab(a){var b=L(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._isValid=xb(b),this._milliseconds=+k+1e3*j+6e4*i+1e3*h*60*60,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=bb(),this._bubble()}function Bb(a){return a instanceof Ab}function Cb(a){return a<0?Math.round(-1*a)*-1:Math.round(a)}function Db(a,b){U(a,0,0,function(){var a=this.utcOffset(),c="+";return a<0&&(a=-a,c="-"),c+T(~~(a/60),2)+b+T(~~a%60,2)})}function Eb(a,b){var c=(b||"").match(a);if(null===c)return null;var d=c[c.length-1]||[],e=(d+"").match(Se)||["-",0,0],f=+(60*e[1])+u(e[2]);return 0===f?0:"+"===e[0]?f:-f}function Fb(b,c){var d,e;return c._isUTC?(d=c.clone(),e=(s(b)||h(b)?b.valueOf():tb(b).valueOf())-d.valueOf(),d._d.setTime(d._d.valueOf()+e),a.updateOffset(d,!1),d):tb(b).local()}function Gb(a){return 15*-Math.round(a._d.getTimezoneOffset()/15)}function Hb(b,c,d){var e,f=this._offset||0;if(!this.isValid())return null!=b?this:NaN;if(null!=b){if("string"==typeof b){if(b=Eb(_d,b),null===b)return this}else Math.abs(b)<16&&!d&&(b=60*b);return!this._isUTC&&c&&(e=Gb(this)),this._offset=b,this._isUTC=!0,null!=e&&this.add(e,"m"),f!==b&&(!c||this._changeInProgress?Xb(this,Sb(b-f,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?f:Gb(this)}function Ib(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function Jb(a){return this.utcOffset(0,a)}function Kb(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Gb(this),"m")),this}function Lb(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var a=Eb($d,this._i);null!=a?this.utcOffset(a):this.utcOffset(0,!0)}return this}function Mb(a){return!!this.isValid()&&(a=a?tb(a).utcOffset():0,(this.utcOffset()-a)%60===0)}function Nb(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Ob(){if(!f(this._isDSTShifted))return this._isDSTShifted;var a={};if(q(a,this),a=qb(a),a._a){var b=a._isUTC?l(a._a):tb(a._a);this._isDSTShifted=this.isValid()&&v(a._a,b.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function Pb(){return!!this.isValid()&&!this._isUTC}function Qb(){return!!this.isValid()&&this._isUTC}function Rb(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}function Sb(a,b){var c,d,e,f=a,h=null;return Bb(a)?f={ms:a._milliseconds,d:a._days,M:a._months}:g(a)?(f={},b?f[b]=a:f.milliseconds=a):(h=Te.exec(a))?(c="-"===h[1]?-1:1,f={y:0,d:u(h[ge])*c,h:u(h[he])*c,m:u(h[ie])*c,s:u(h[je])*c,ms:u(Cb(1e3*h[ke]))*c}):(h=Ue.exec(a))?(c="-"===h[1]?-1:1,f={y:Tb(h[2],c),M:Tb(h[3],c),w:Tb(h[4],c),d:Tb(h[5],c),h:Tb(h[6],c),m:Tb(h[7],c),s:Tb(h[8],c)}):null==f?f={}:"object"==typeof f&&("from"in f||"to"in f)&&(e=Vb(tb(f.from),tb(f.to)),f={},f.ms=e.milliseconds,f.M=e.months),d=new Ab(f),Bb(a)&&j(a,"_locale")&&(d._locale=a._locale),d}function Tb(a,b){var c=a&&parseFloat(a.replace(",","."));return(isNaN(c)?0:c)*b}function Ub(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function Vb(a,b){var c;return a.isValid()&&b.isValid()?(b=Fb(b,a),a.isBefore(b)?c=Ub(a,b):(c=Ub(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c):{milliseconds:0,months:0}}function Wb(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(y(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=Sb(c,d),Xb(this,e,a),this}}function Xb(b,c,d,e){var f=c._milliseconds,g=Cb(c._days),h=Cb(c._months);b.isValid()&&(e=null==e||e,f&&b._d.setTime(b._d.valueOf()+f*d),g&&Q(b,"Date",P(b,"Date")+g*d),h&&ja(b,P(b,"Month")+h*d),e&&a.updateOffset(b,g||h))}function Yb(a,b){var c=a.diff(b,"days",!0);return c<-6?"sameElse":c<-1?"lastWeek":c<0?"lastDay":c<1?"sameDay":c<2?"nextDay":c<7?"nextWeek":"sameElse"}function Zb(b,c){var d=b||tb(),e=Fb(d,this).startOf("day"),f=a.calendarFormat(this,e)||"sameElse",g=c&&(z(c[f])?c[f].call(this,d):c[f]);return this.format(g||this.localeData().calendar(f,this,tb(d)))}function $b(){return new r(this)}function _b(a,b){var c=s(a)?a:tb(a);return!(!this.isValid()||!c.isValid())&&(b=K(f(b)?"millisecond":b),"millisecond"===b?this.valueOf()>c.valueOf():c.valueOf()<this.clone().startOf(b).valueOf())}function ac(a,b){var c=s(a)?a:tb(a);return!(!this.isValid()||!c.isValid())&&(b=K(f(b)?"millisecond":b),"millisecond"===b?this.valueOf()<c.valueOf():this.clone().endOf(b).valueOf()<c.valueOf())}function bc(a,b,c,d){return d=d||"()",("("===d[0]?this.isAfter(a,c):!this.isBefore(a,c))&&(")"===d[1]?this.isBefore(b,c):!this.isAfter(b,c))}function cc(a,b){var c,d=s(a)?a:tb(a);return!(!this.isValid()||!d.isValid())&&(b=K(b||"millisecond"),"millisecond"===b?this.valueOf()===d.valueOf():(c=d.valueOf(),this.clone().startOf(b).valueOf()<=c&&c<=this.clone().endOf(b).valueOf()))}function dc(a,b){return this.isSame(a,b)||this.isAfter(a,b)}function ec(a,b){return this.isSame(a,b)||this.isBefore(a,b)}function fc(a,b,c){var d,e,f,g;return this.isValid()?(d=Fb(a,this),d.isValid()?(e=6e4*(d.utcOffset()-this.utcOffset()),b=K(b),"year"===b||"month"===b||"quarter"===b?(g=gc(this,d),"quarter"===b?g/=3:"year"===b&&(g/=12)):(f=this-d,g="second"===b?f/1e3:"minute"===b?f/6e4:"hour"===b?f/36e5:"day"===b?(f-e)/864e5:"week"===b?(f-e)/6048e5:f),c?g:t(g)):NaN):NaN}function gc(a,b){var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),f=a.clone().add(e,"months");return b-f<0?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)||0}function hc(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function ic(){if(!this.isValid())return null;var a=this.clone().utc();return a.year()<0||a.year()>9999?X(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):z(Date.prototype.toISOString)?this.toDate().toISOString():X(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function jc(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var a="moment",b="";this.isLocal()||(a=0===this.utcOffset()?"moment.utc":"moment.parseZone",b="Z");var c="["+a+'("]',d=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",e="-MM-DD[T]HH:mm:ss.SSS",f=b+'[")]';return this.format(c+d+e+f)}function kc(b){b||(b=this.isUtc()?a.defaultFormatUtc:a.defaultFormat);var c=X(this,b);return this.localeData().postformat(c)}function lc(a,b){return this.isValid()&&(s(a)&&a.isValid()||tb(a).isValid())?Sb({to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function mc(a){return this.from(tb(),a)}function nc(a,b){return this.isValid()&&(s(a)&&a.isValid()||tb(a).isValid())?Sb({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function oc(a){return this.to(tb(),a)}function pc(a){var b;return void 0===a?this._locale._abbr:(b=bb(a),null!=b&&(this._locale=b),this)}function qc(){return this._locale}function rc(a){switch(a=K(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function sc(a){return a=K(a),void 0===a||"millisecond"===a?this:("date"===a&&(a="day"),this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms"))}function tc(){return this._d.valueOf()-6e4*(this._offset||0)}function uc(){return Math.floor(this.valueOf()/1e3)}function vc(){return new Date(this.valueOf())}function wc(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()]}function xc(){var a=this;return{years:a.year(),months:a.month(),date:a.date(),hours:a.hours(),minutes:a.minutes(),seconds:a.seconds(),milliseconds:a.milliseconds()}}function yc(){return this.isValid()?this.toISOString():null}function zc(){return o(this)}function Ac(){
return k({},n(this))}function Bc(){return n(this).overflow}function Cc(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Dc(a,b){U(0,[a,a.length],0,b)}function Ec(a){return Ic.call(this,a,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Fc(a){return Ic.call(this,a,this.isoWeek(),this.isoWeekday(),1,4)}function Gc(){return xa(this.year(),1,4)}function Hc(){var a=this.localeData()._week;return xa(this.year(),a.dow,a.doy)}function Ic(a,b,c,d,e){var f;return null==a?wa(this,d,e).year:(f=xa(a,d,e),b>f&&(b=f),Jc.call(this,a,b,c,d,e))}function Jc(a,b,c,d,e){var f=va(a,b,c,d,e),g=ta(f.year,0,f.dayOfYear);return this.year(g.getUTCFullYear()),this.month(g.getUTCMonth()),this.date(g.getUTCDate()),this}function Kc(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)}function Lc(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")}function Mc(a,b){b[ke]=u(1e3*("0."+a))}function Nc(){return this._isUTC?"UTC":""}function Oc(){return this._isUTC?"Coordinated Universal Time":""}function Pc(a){return tb(1e3*a)}function Qc(){return tb.apply(null,arguments).parseZone()}function Rc(a){return a}function Sc(a,b,c,d){var e=bb(),f=l().set(d,b);return e[c](f,a)}function Tc(a,b,c){if(g(a)&&(b=a,a=void 0),a=a||"",null!=b)return Sc(a,b,c,"month");var d,e=[];for(d=0;d<12;d++)e[d]=Sc(a,d,c,"month");return e}function Uc(a,b,c,d){"boolean"==typeof a?(g(b)&&(c=b,b=void 0),b=b||""):(b=a,c=b,a=!1,g(b)&&(c=b,b=void 0),b=b||"");var e=bb(),f=a?e._week.dow:0;if(null!=c)return Sc(b,(c+f)%7,d,"day");var h,i=[];for(h=0;h<7;h++)i[h]=Sc(b,(h+f)%7,d,"day");return i}function Vc(a,b){return Tc(a,b,"months")}function Wc(a,b){return Tc(a,b,"monthsShort")}function Xc(a,b,c){return Uc(a,b,c,"weekdays")}function Yc(a,b,c){return Uc(a,b,c,"weekdaysShort")}function Zc(a,b,c){return Uc(a,b,c,"weekdaysMin")}function $c(){var a=this._data;return this._milliseconds=df(this._milliseconds),this._days=df(this._days),this._months=df(this._months),a.milliseconds=df(a.milliseconds),a.seconds=df(a.seconds),a.minutes=df(a.minutes),a.hours=df(a.hours),a.months=df(a.months),a.years=df(a.years),this}function _c(a,b,c,d){var e=Sb(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()}function ad(a,b){return _c(this,a,b,1)}function bd(a,b){return _c(this,a,b,-1)}function cd(a){return a<0?Math.floor(a):Math.ceil(a)}function dd(){var a,b,c,d,e,f=this._milliseconds,g=this._days,h=this._months,i=this._data;return f>=0&&g>=0&&h>=0||f<=0&&g<=0&&h<=0||(f+=864e5*cd(fd(h)+g),g=0,h=0),i.milliseconds=f%1e3,a=t(f/1e3),i.seconds=a%60,b=t(a/60),i.minutes=b%60,c=t(b/60),i.hours=c%24,g+=t(c/24),e=t(ed(g)),h+=e,g-=cd(fd(e)),d=t(h/12),h%=12,i.days=g,i.months=h,i.years=d,this}function ed(a){return 4800*a/146097}function fd(a){return 146097*a/4800}function gd(a){if(!this.isValid())return NaN;var b,c,d=this._milliseconds;if(a=K(a),"month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+ed(b),"month"===a?c:c/12;switch(b=this._days+Math.round(fd(this._months)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 1440*b+d/6e4;case"second":return 86400*b+d/1e3;case"millisecond":return Math.floor(864e5*b)+d;default:throw new Error("Unknown unit "+a)}}function hd(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*u(this._months/12):NaN}function id(a){return function(){return this.as(a)}}function jd(a){return a=K(a),this.isValid()?this[a+"s"]():NaN}function kd(a){return function(){return this.isValid()?this._data[a]:NaN}}function ld(){return t(this.days()/7)}function md(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function nd(a,b,c){var d=Sb(a).abs(),e=uf(d.as("s")),f=uf(d.as("m")),g=uf(d.as("h")),h=uf(d.as("d")),i=uf(d.as("M")),j=uf(d.as("y")),k=e<=vf.ss&&["s",e]||e<vf.s&&["ss",e]||f<=1&&["m"]||f<vf.m&&["mm",f]||g<=1&&["h"]||g<vf.h&&["hh",g]||h<=1&&["d"]||h<vf.d&&["dd",h]||i<=1&&["M"]||i<vf.M&&["MM",i]||j<=1&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,md.apply(null,k)}function od(a){return void 0===a?uf:"function"==typeof a&&(uf=a,!0)}function pd(a,b){return void 0!==vf[a]&&(void 0===b?vf[a]:(vf[a]=b,"s"===a&&(vf.ss=b-1),!0))}function qd(a){if(!this.isValid())return this.localeData().invalidDate();var b=this.localeData(),c=nd(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function rd(){if(!this.isValid())return this.localeData().invalidDate();var a,b,c,d=wf(this._milliseconds)/1e3,e=wf(this._days),f=wf(this._months);a=t(d/60),b=t(a/60),d%=60,a%=60,c=t(f/12),f%=12;var g=c,h=f,i=e,j=b,k=a,l=d,m=this.asSeconds();return m?(m<0?"-":"")+"P"+(g?g+"Y":"")+(h?h+"M":"")+(i?i+"D":"")+(j||k||l?"T":"")+(j?j+"H":"")+(k?k+"M":"")+(l?l+"S":""):"P0D"}var sd,td;td=Array.prototype.some?Array.prototype.some:function(a){for(var b=Object(this),c=b.length>>>0,d=0;d<c;d++)if(d in b&&a.call(this,b[d],d,b))return!0;return!1};var ud=td,vd=a.momentProperties=[],wd=!1,xd={};a.suppressDeprecationWarnings=!1,a.deprecationHandler=null;var yd;yd=Object.keys?Object.keys:function(a){var b,c=[];for(b in a)j(a,b)&&c.push(b);return c};var zd,Ad=yd,Bd={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Cd={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Dd="Invalid date",Ed="%d",Fd=/\d{1,2}/,Gd={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Hd={},Id={},Jd=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Kd=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Ld={},Md={},Nd=/\d/,Od=/\d\d/,Pd=/\d{3}/,Qd=/\d{4}/,Rd=/[+-]?\d{6}/,Sd=/\d\d?/,Td=/\d\d\d\d?/,Ud=/\d\d\d\d\d\d?/,Vd=/\d{1,3}/,Wd=/\d{1,4}/,Xd=/[+-]?\d{1,6}/,Yd=/\d+/,Zd=/[+-]?\d+/,$d=/Z|[+-]\d\d:?\d\d/gi,_d=/Z|[+-]\d\d(?::?\d\d)?/gi,ae=/[+-]?\d+(\.\d{1,3})?/,be=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,ce={},de={},ee=0,fe=1,ge=2,he=3,ie=4,je=5,ke=6,le=7,me=8;zd=Array.prototype.indexOf?Array.prototype.indexOf:function(a){var b;for(b=0;b<this.length;++b)if(this[b]===a)return b;return-1};var ne=zd;U("M",["MM",2],"Mo",function(){return this.month()+1}),U("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)}),U("MMMM",0,0,function(a){return this.localeData().months(this,a)}),J("month","M"),M("month",8),Z("M",Sd),Z("MM",Sd,Od),Z("MMM",function(a,b){return b.monthsShortRegex(a)}),Z("MMMM",function(a,b){return b.monthsRegex(a)}),ba(["M","MM"],function(a,b){b[fe]=u(a)-1}),ba(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);null!=e?b[fe]=e:n(c).invalidMonth=a});var oe=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,pe="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),qe="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),re=be,se=be;U("Y",0,0,function(){var a=this.year();return a<=9999?""+a:"+"+a}),U(0,["YY",2],0,function(){return this.year()%100}),U(0,["YYYY",4],0,"year"),U(0,["YYYYY",5],0,"year"),U(0,["YYYYYY",6,!0],0,"year"),J("year","y"),M("year",1),Z("Y",Zd),Z("YY",Sd,Od),Z("YYYY",Wd,Qd),Z("YYYYY",Xd,Rd),Z("YYYYYY",Xd,Rd),ba(["YYYYY","YYYYYY"],ee),ba("YYYY",function(b,c){c[ee]=2===b.length?a.parseTwoDigitYear(b):u(b)}),ba("YY",function(b,c){c[ee]=a.parseTwoDigitYear(b)}),ba("Y",function(a,b){b[ee]=parseInt(a,10)}),a.parseTwoDigitYear=function(a){return u(a)+(u(a)>68?1900:2e3)};var te=O("FullYear",!0);U("w",["ww",2],"wo","week"),U("W",["WW",2],"Wo","isoWeek"),J("week","w"),J("isoWeek","W"),M("week",5),M("isoWeek",5),Z("w",Sd),Z("ww",Sd,Od),Z("W",Sd),Z("WW",Sd,Od),ca(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=u(a)});var ue={dow:0,doy:6};U("d",0,"do","day"),U("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)}),U("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),U("dddd",0,0,function(a){return this.localeData().weekdays(this,a)}),U("e",0,0,"weekday"),U("E",0,0,"isoWeekday"),J("day","d"),J("weekday","e"),J("isoWeekday","E"),M("day",11),M("weekday",11),M("isoWeekday",11),Z("d",Sd),Z("e",Sd),Z("E",Sd),Z("dd",function(a,b){return b.weekdaysMinRegex(a)}),Z("ddd",function(a,b){return b.weekdaysShortRegex(a)}),Z("dddd",function(a,b){return b.weekdaysRegex(a)}),ca(["dd","ddd","dddd"],function(a,b,c,d){var e=c._locale.weekdaysParse(a,d,c._strict);null!=e?b.d=e:n(c).invalidWeekday=a}),ca(["d","e","E"],function(a,b,c,d){b[d]=u(a)});var ve="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),we="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),xe="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),ye=be,ze=be,Ae=be;U("H",["HH",2],0,"hour"),U("h",["hh",2],0,Ra),U("k",["kk",2],0,Sa),U("hmm",0,0,function(){return""+Ra.apply(this)+T(this.minutes(),2)}),U("hmmss",0,0,function(){return""+Ra.apply(this)+T(this.minutes(),2)+T(this.seconds(),2)}),U("Hmm",0,0,function(){return""+this.hours()+T(this.minutes(),2)}),U("Hmmss",0,0,function(){return""+this.hours()+T(this.minutes(),2)+T(this.seconds(),2)}),Ta("a",!0),Ta("A",!1),J("hour","h"),M("hour",13),Z("a",Ua),Z("A",Ua),Z("H",Sd),Z("h",Sd),Z("k",Sd),Z("HH",Sd,Od),Z("hh",Sd,Od),Z("kk",Sd,Od),Z("hmm",Td),Z("hmmss",Ud),Z("Hmm",Td),Z("Hmmss",Ud),ba(["H","HH"],he),ba(["k","kk"],function(a,b,c){var d=u(a);b[he]=24===d?0:d}),ba(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a}),ba(["h","hh"],function(a,b,c){b[he]=u(a),n(c).bigHour=!0}),ba("hmm",function(a,b,c){var d=a.length-2;b[he]=u(a.substr(0,d)),b[ie]=u(a.substr(d)),n(c).bigHour=!0}),ba("hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[he]=u(a.substr(0,d)),b[ie]=u(a.substr(d,2)),b[je]=u(a.substr(e)),n(c).bigHour=!0}),ba("Hmm",function(a,b,c){var d=a.length-2;b[he]=u(a.substr(0,d)),b[ie]=u(a.substr(d))}),ba("Hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[he]=u(a.substr(0,d)),b[ie]=u(a.substr(d,2)),b[je]=u(a.substr(e))});var Be,Ce=/[ap]\.?m?\.?/i,De=O("Hours",!0),Ee={calendar:Bd,longDateFormat:Cd,invalidDate:Dd,ordinal:Ed,dayOfMonthOrdinalParse:Fd,relativeTime:Gd,months:pe,monthsShort:qe,week:ue,weekdays:ve,weekdaysMin:xe,weekdaysShort:we,meridiemParse:Ce},Fe={},Ge={},He=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ie=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Je=/Z|[+-]\d\d(?::?\d\d)?/,Ke=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Le=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Me=/^\/?Date\((\-?\d+)/i,Ne=/^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;a.createFromInputFallback=x("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),a.ISO_8601=function(){},a.RFC_2822=function(){};var Oe=x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=tb.apply(null,arguments);return this.isValid()&&a.isValid()?a<this?this:a:p()}),Pe=x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=tb.apply(null,arguments);return this.isValid()&&a.isValid()?a>this?this:a:p()}),Qe=function(){return Date.now?Date.now():+new Date},Re=["year","quarter","month","week","day","hour","minute","second","millisecond"];Db("Z",":"),Db("ZZ",""),Z("Z",_d),Z("ZZ",_d),ba(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=Eb(_d,a)});var Se=/([\+\-]|\d\d)/gi;a.updateOffset=function(){};var Te=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Ue=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;Sb.fn=Ab.prototype,Sb.invalid=zb;var Ve=Wb(1,"add"),We=Wb(-1,"subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",a.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Xe=x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});U(0,["gg",2],0,function(){return this.weekYear()%100}),U(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Dc("gggg","weekYear"),Dc("ggggg","weekYear"),Dc("GGGG","isoWeekYear"),Dc("GGGGG","isoWeekYear"),J("weekYear","gg"),J("isoWeekYear","GG"),M("weekYear",1),M("isoWeekYear",1),Z("G",Zd),Z("g",Zd),Z("GG",Sd,Od),Z("gg",Sd,Od),Z("GGGG",Wd,Qd),Z("gggg",Wd,Qd),Z("GGGGG",Xd,Rd),Z("ggggg",Xd,Rd),ca(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=u(a)}),ca(["gg","GG"],function(b,c,d,e){c[e]=a.parseTwoDigitYear(b)}),U("Q",0,"Qo","quarter"),J("quarter","Q"),M("quarter",7),Z("Q",Nd),ba("Q",function(a,b){b[fe]=3*(u(a)-1)}),U("D",["DD",2],"Do","date"),J("date","D"),M("date",9),Z("D",Sd),Z("DD",Sd,Od),Z("Do",function(a,b){return a?b._dayOfMonthOrdinalParse||b._ordinalParse:b._dayOfMonthOrdinalParseLenient}),ba(["D","DD"],ge),ba("Do",function(a,b){b[ge]=u(a.match(Sd)[0],10)});var Ye=O("Date",!0);U("DDD",["DDDD",3],"DDDo","dayOfYear"),J("dayOfYear","DDD"),M("dayOfYear",4),Z("DDD",Vd),Z("DDDD",Pd),ba(["DDD","DDDD"],function(a,b,c){c._dayOfYear=u(a)}),U("m",["mm",2],0,"minute"),J("minute","m"),M("minute",14),Z("m",Sd),Z("mm",Sd,Od),ba(["m","mm"],ie);var Ze=O("Minutes",!1);U("s",["ss",2],0,"second"),J("second","s"),M("second",15),Z("s",Sd),Z("ss",Sd,Od),ba(["s","ss"],je);var $e=O("Seconds",!1);U("S",0,0,function(){return~~(this.millisecond()/100)}),U(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),U(0,["SSS",3],0,"millisecond"),U(0,["SSSS",4],0,function(){return 10*this.millisecond()}),U(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),U(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),U(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),U(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),U(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),J("millisecond","ms"),M("millisecond",16),Z("S",Vd,Nd),Z("SS",Vd,Od),Z("SSS",Vd,Pd);var _e;for(_e="SSSS";_e.length<=9;_e+="S")Z(_e,Yd);for(_e="S";_e.length<=9;_e+="S")ba(_e,Mc);var af=O("Milliseconds",!1);U("z",0,0,"zoneAbbr"),U("zz",0,0,"zoneName");var bf=r.prototype;bf.add=Ve,bf.calendar=Zb,bf.clone=$b,bf.diff=fc,bf.endOf=sc,bf.format=kc,bf.from=lc,bf.fromNow=mc,bf.to=nc,bf.toNow=oc,bf.get=R,bf.invalidAt=Bc,bf.isAfter=_b,bf.isBefore=ac,bf.isBetween=bc,bf.isSame=cc,bf.isSameOrAfter=dc,bf.isSameOrBefore=ec,bf.isValid=zc,bf.lang=Xe,bf.locale=pc,bf.localeData=qc,bf.max=Pe,bf.min=Oe,bf.parsingFlags=Ac,bf.set=S,bf.startOf=rc,bf.subtract=We,bf.toArray=wc,bf.toObject=xc,bf.toDate=vc,bf.toISOString=ic,bf.inspect=jc,bf.toJSON=yc,bf.toString=hc,bf.unix=uc,bf.valueOf=tc,bf.creationData=Cc,bf.year=te,bf.isLeapYear=ra,bf.weekYear=Ec,bf.isoWeekYear=Fc,bf.quarter=bf.quarters=Kc,bf.month=ka,bf.daysInMonth=la,bf.week=bf.weeks=Ba,bf.isoWeek=bf.isoWeeks=Ca,bf.weeksInYear=Hc,bf.isoWeeksInYear=Gc,bf.date=Ye,bf.day=bf.days=Ka,bf.weekday=La,bf.isoWeekday=Ma,bf.dayOfYear=Lc,bf.hour=bf.hours=De,bf.minute=bf.minutes=Ze,bf.second=bf.seconds=$e,bf.millisecond=bf.milliseconds=af,bf.utcOffset=Hb,bf.utc=Jb,bf.local=Kb,bf.parseZone=Lb,bf.hasAlignedHourOffset=Mb,bf.isDST=Nb,bf.isLocal=Pb,bf.isUtcOffset=Qb,bf.isUtc=Rb,bf.isUTC=Rb,bf.zoneAbbr=Nc,bf.zoneName=Oc,bf.dates=x("dates accessor is deprecated. Use date instead.",Ye),bf.months=x("months accessor is deprecated. Use month instead",ka),bf.years=x("years accessor is deprecated. Use year instead",te),bf.zone=x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Ib),bf.isDSTShifted=x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Ob);var cf=C.prototype;cf.calendar=D,cf.longDateFormat=E,cf.invalidDate=F,cf.ordinal=G,cf.preparse=Rc,cf.postformat=Rc,cf.relativeTime=H,cf.pastFuture=I,cf.set=A,cf.months=fa,cf.monthsShort=ga,cf.monthsParse=ia,cf.monthsRegex=na,cf.monthsShortRegex=ma,cf.week=ya,cf.firstDayOfYear=Aa,cf.firstDayOfWeek=za,cf.weekdays=Fa,cf.weekdaysMin=Ha,cf.weekdaysShort=Ga,cf.weekdaysParse=Ja,cf.weekdaysRegex=Na,cf.weekdaysShortRegex=Oa,cf.weekdaysMinRegex=Pa,cf.isPM=Va,cf.meridiem=Wa,$a("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===u(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),a.lang=x("moment.lang is deprecated. Use moment.locale instead.",$a),a.langData=x("moment.langData is deprecated. Use moment.localeData instead.",bb);var df=Math.abs,ef=id("ms"),ff=id("s"),gf=id("m"),hf=id("h"),jf=id("d"),kf=id("w"),lf=id("M"),mf=id("y"),nf=kd("milliseconds"),of=kd("seconds"),pf=kd("minutes"),qf=kd("hours"),rf=kd("days"),sf=kd("months"),tf=kd("years"),uf=Math.round,vf={ss:44,s:45,m:45,h:22,d:26,M:11},wf=Math.abs,xf=Ab.prototype;return xf.isValid=yb,xf.abs=$c,xf.add=ad,xf.subtract=bd,xf.as=gd,xf.asMilliseconds=ef,xf.asSeconds=ff,xf.asMinutes=gf,xf.asHours=hf,xf.asDays=jf,xf.asWeeks=kf,xf.asMonths=lf,xf.asYears=mf,xf.valueOf=hd,xf._bubble=dd,xf.get=jd,xf.milliseconds=nf,xf.seconds=of,xf.minutes=pf,xf.hours=qf,xf.days=rf,xf.weeks=ld,xf.months=sf,xf.years=tf,xf.humanize=qd,xf.toISOString=rd,xf.toString=rd,xf.toJSON=rd,xf.locale=pc,xf.localeData=qc,xf.toIsoString=x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",rd),xf.lang=Xe,U("X",0,0,"unix"),U("x",0,0,"valueOf"),Z("x",Zd),Z("X",ae),ba("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10))}),ba("x",function(a,b,c){c._d=new Date(u(a))}),a.version="2.18.1",b(tb),a.fn=bf,a.min=vb,a.max=wb,a.now=Qe,a.utc=l,a.unix=Pc,a.months=Vc,a.isDate=h,a.locale=$a,a.invalid=p,a.duration=Sb,a.isMoment=s,a.weekdays=Xc,a.parseZone=Qc,a.localeData=bb,a.isDuration=Bb,a.monthsShort=Wc,a.weekdaysMin=Zc,a.defineLocale=_a,a.updateLocale=ab,a.locales=cb,a.weekdaysShort=Yc,a.normalizeUnits=K,a.relativeTimeRounding=od,a.relativeTimeThreshold=pd,a.calendarFormat=Yb,a.prototype=bf,a});
/**
 * Minified by jsDelivr using Terser v5.37.0.
 * Original file: /npm/daterangepicker@3.1.0/daterangepicker.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/**
* @version: 3.1
* @author: Dan Grossman http://www.dangrossman.info/
* @copyright: Copyright (c) 2012-2019 Dan Grossman. All rights reserved.
* @license: Licensed under the MIT license. See http://www.opensource.org/licenses/mit-license.php
* @website: http://www.daterangepicker.com/
*/
!function(t,e){if("function"==typeof define&&define.amd)define(["moment","jquery"],(function(t,a){return a.fn||(a.fn={}),"function"!=typeof t&&t.hasOwnProperty("default")&&(t=t.default),e(t,a)}));else if("object"==typeof module&&module.exports){var a="undefined"!=typeof window?window.jQuery:void 0;a||(a=require("jquery")).fn||(a.fn={});var i="undefined"!=typeof window&&void 0!==window.moment?window.moment:require("moment");module.exports=e(i,a)}else t.daterangepicker=e(t.moment,t.jQuery)}(this,(function(t,e){var a=function(a,i,s){if(this.parentEl="body",this.element=e(a),this.startDate=t().startOf("day"),this.endDate=t().endOf("day"),this.minDate=!1,this.maxDate=!1,this.maxSpan=!1,this.autoApply=!1,this.singleDatePicker=!1,this.showDropdowns=!1,this.minYear=t().subtract(100,"year").format("YYYY"),this.maxYear=t().add(100,"year").format("YYYY"),this.showWeekNumbers=!1,this.showISOWeekNumbers=!1,this.showCustomRangeLabel=!0,this.timePicker=!1,this.timePicker24Hour=!1,this.timePickerIncrement=1,this.timePickerSeconds=!1,this.linkedCalendars=!0,this.autoUpdateInput=!0,this.alwaysShowCalendars=!1,this.ranges={},this.opens="right",this.element.hasClass("pull-right")&&(this.opens="left"),this.drops="down",this.element.hasClass("dropup")&&(this.drops="up"),this.buttonClasses="btn btn-sm",this.applyButtonClasses="btn-primary",this.cancelButtonClasses="btn-default",this.locale={direction:"ltr",format:t.localeData().longDateFormat("L"),separator:" - ",applyLabel:"Apply",cancelLabel:"Cancel",weekLabel:"W",customRangeLabel:"Custom Range",daysOfWeek:t.weekdaysMin(),monthNames:t.monthsShort(),firstDay:t.localeData().firstDayOfWeek()},this.callback=function(){},this.isShowing=!1,this.leftCalendar={},this.rightCalendar={},"object"==typeof i&&null!==i||(i={}),"string"==typeof(i=e.extend(this.element.data(),i)).template||i.template instanceof e||(i.template='<div class="daterangepicker"><div class="ranges"></div><div class="drp-calendar left"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-calendar right"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-buttons"><span class="drp-selected"></span><button class="cancelBtn" type="button"></button><button class="applyBtn" disabled="disabled" type="button"></button> </div></div>'),this.parentEl=i.parentEl&&e(i.parentEl).length?e(i.parentEl):e(this.parentEl),this.container=e(i.template).appendTo(this.parentEl),"object"==typeof i.locale&&("string"==typeof i.locale.direction&&(this.locale.direction=i.locale.direction),"string"==typeof i.locale.format&&(this.locale.format=i.locale.format),"string"==typeof i.locale.separator&&(this.locale.separator=i.locale.separator),"object"==typeof i.locale.daysOfWeek&&(this.locale.daysOfWeek=i.locale.daysOfWeek.slice()),"object"==typeof i.locale.monthNames&&(this.locale.monthNames=i.locale.monthNames.slice()),"number"==typeof i.locale.firstDay&&(this.locale.firstDay=i.locale.firstDay),"string"==typeof i.locale.applyLabel&&(this.locale.applyLabel=i.locale.applyLabel),"string"==typeof i.locale.cancelLabel&&(this.locale.cancelLabel=i.locale.cancelLabel),"string"==typeof i.locale.weekLabel&&(this.locale.weekLabel=i.locale.weekLabel),"string"==typeof i.locale.customRangeLabel)){(p=document.createElement("textarea")).innerHTML=i.locale.customRangeLabel;var n=p.value;this.locale.customRangeLabel=n}if(this.container.addClass(this.locale.direction),"string"==typeof i.startDate&&(this.startDate=t(i.startDate,this.locale.format)),"string"==typeof i.endDate&&(this.endDate=t(i.endDate,this.locale.format)),"string"==typeof i.minDate&&(this.minDate=t(i.minDate,this.locale.format)),"string"==typeof i.maxDate&&(this.maxDate=t(i.maxDate,this.locale.format)),"object"==typeof i.startDate&&(this.startDate=t(i.startDate)),"object"==typeof i.endDate&&(this.endDate=t(i.endDate)),"object"==typeof i.minDate&&(this.minDate=t(i.minDate)),"object"==typeof i.maxDate&&(this.maxDate=t(i.maxDate)),this.minDate&&this.startDate.isBefore(this.minDate)&&(this.startDate=this.minDate.clone()),this.maxDate&&this.endDate.isAfter(this.maxDate)&&(this.endDate=this.maxDate.clone()),"string"==typeof i.applyButtonClasses&&(this.applyButtonClasses=i.applyButtonClasses),"string"==typeof i.applyClass&&(this.applyButtonClasses=i.applyClass),"string"==typeof i.cancelButtonClasses&&(this.cancelButtonClasses=i.cancelButtonClasses),"string"==typeof i.cancelClass&&(this.cancelButtonClasses=i.cancelClass),"object"==typeof i.maxSpan&&(this.maxSpan=i.maxSpan),"object"==typeof i.dateLimit&&(this.maxSpan=i.dateLimit),"string"==typeof i.opens&&(this.opens=i.opens),"string"==typeof i.drops&&(this.drops=i.drops),"boolean"==typeof i.showWeekNumbers&&(this.showWeekNumbers=i.showWeekNumbers),"boolean"==typeof i.showISOWeekNumbers&&(this.showISOWeekNumbers=i.showISOWeekNumbers),"string"==typeof i.buttonClasses&&(this.buttonClasses=i.buttonClasses),"object"==typeof i.buttonClasses&&(this.buttonClasses=i.buttonClasses.join(" ")),"boolean"==typeof i.showDropdowns&&(this.showDropdowns=i.showDropdowns),"number"==typeof i.minYear&&(this.minYear=i.minYear),"number"==typeof i.maxYear&&(this.maxYear=i.maxYear),"boolean"==typeof i.showCustomRangeLabel&&(this.showCustomRangeLabel=i.showCustomRangeLabel),"boolean"==typeof i.singleDatePicker&&(this.singleDatePicker=i.singleDatePicker,this.singleDatePicker&&(this.endDate=this.startDate.clone())),"boolean"==typeof i.timePicker&&(this.timePicker=i.timePicker),"boolean"==typeof i.timePickerSeconds&&(this.timePickerSeconds=i.timePickerSeconds),"number"==typeof i.timePickerIncrement&&(this.timePickerIncrement=i.timePickerIncrement),"boolean"==typeof i.timePicker24Hour&&(this.timePicker24Hour=i.timePicker24Hour),"boolean"==typeof i.autoApply&&(this.autoApply=i.autoApply),"boolean"==typeof i.autoUpdateInput&&(this.autoUpdateInput=i.autoUpdateInput),"boolean"==typeof i.linkedCalendars&&(this.linkedCalendars=i.linkedCalendars),"function"==typeof i.isInvalidDate&&(this.isInvalidDate=i.isInvalidDate),"function"==typeof i.isCustomDate&&(this.isCustomDate=i.isCustomDate),"boolean"==typeof i.alwaysShowCalendars&&(this.alwaysShowCalendars=i.alwaysShowCalendars),0!=this.locale.firstDay)for(var r=this.locale.firstDay;r>0;)this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift()),r--;var o,h,l;if(void 0===i.startDate&&void 0===i.endDate&&e(this.element).is(":text")){var c=e(this.element).val(),d=c.split(this.locale.separator);o=h=null,2==d.length?(o=t(d[0],this.locale.format),h=t(d[1],this.locale.format)):this.singleDatePicker&&""!==c&&(o=t(c,this.locale.format),h=t(c,this.locale.format)),null!==o&&null!==h&&(this.setStartDate(o),this.setEndDate(h))}if("object"==typeof i.ranges){for(l in i.ranges){o="string"==typeof i.ranges[l][0]?t(i.ranges[l][0],this.locale.format):t(i.ranges[l][0]),h="string"==typeof i.ranges[l][1]?t(i.ranges[l][1],this.locale.format):t(i.ranges[l][1]),this.minDate&&o.isBefore(this.minDate)&&(o=this.minDate.clone());var m=this.maxDate;if(this.maxSpan&&m&&o.clone().add(this.maxSpan).isAfter(m)&&(m=o.clone().add(this.maxSpan)),m&&h.isAfter(m)&&(h=m.clone()),!(this.minDate&&h.isBefore(this.minDate,this.timepicker?"minute":"day")||m&&o.isAfter(m,this.timepicker?"minute":"day"))){var p;(p=document.createElement("textarea")).innerHTML=l;n=p.value;this.ranges[n]=[o,h]}}var f="<ul>";for(l in this.ranges)f+='<li data-range-key="'+l+'">'+l+"</li>";this.showCustomRangeLabel&&(f+='<li data-range-key="'+this.locale.customRangeLabel+'">'+this.locale.customRangeLabel+"</li>"),f+="</ul>",this.container.find(".ranges").prepend(f)}"function"==typeof s&&(this.callback=s),this.timePicker||(this.startDate=this.startDate.startOf("day"),this.endDate=this.endDate.endOf("day"),this.container.find(".calendar-time").hide()),this.timePicker&&this.autoApply&&(this.autoApply=!1),this.autoApply&&this.container.addClass("auto-apply"),"object"==typeof i.ranges&&this.container.addClass("show-ranges"),this.singleDatePicker&&(this.container.addClass("single"),this.container.find(".drp-calendar.left").addClass("single"),this.container.find(".drp-calendar.left").show(),this.container.find(".drp-calendar.right").hide(),!this.timePicker&&this.autoApply&&this.container.addClass("auto-apply")),(void 0===i.ranges&&!this.singleDatePicker||this.alwaysShowCalendars)&&this.container.addClass("show-calendar"),this.container.addClass("opens"+this.opens),this.container.find(".applyBtn, .cancelBtn").addClass(this.buttonClasses),this.applyButtonClasses.length&&this.container.find(".applyBtn").addClass(this.applyButtonClasses),this.cancelButtonClasses.length&&this.container.find(".cancelBtn").addClass(this.cancelButtonClasses),this.container.find(".applyBtn").html(this.locale.applyLabel),this.container.find(".cancelBtn").html(this.locale.cancelLabel),this.container.find(".drp-calendar").on("click.daterangepicker",".prev",e.proxy(this.clickPrev,this)).on("click.daterangepicker",".next",e.proxy(this.clickNext,this)).on("mousedown.daterangepicker","td.available",e.proxy(this.clickDate,this)).on("mouseenter.daterangepicker","td.available",e.proxy(this.hoverDate,this)).on("change.daterangepicker","select.yearselect",e.proxy(this.monthOrYearChanged,this)).on("change.daterangepicker","select.monthselect",e.proxy(this.monthOrYearChanged,this)).on("change.daterangepicker","select.hourselect,select.minuteselect,select.secondselect,select.ampmselect",e.proxy(this.timeChanged,this)),this.container.find(".ranges").on("click.daterangepicker","li",e.proxy(this.clickRange,this)),this.container.find(".drp-buttons").on("click.daterangepicker","button.applyBtn",e.proxy(this.clickApply,this)).on("click.daterangepicker","button.cancelBtn",e.proxy(this.clickCancel,this)),this.element.is("input")||this.element.is("button")?this.element.on({"click.daterangepicker":e.proxy(this.show,this),"focus.daterangepicker":e.proxy(this.show,this),"keyup.daterangepicker":e.proxy(this.elementChanged,this),"keydown.daterangepicker":e.proxy(this.keydown,this)}):(this.element.on("click.daterangepicker",e.proxy(this.toggle,this)),this.element.on("keydown.daterangepicker",e.proxy(this.toggle,this))),this.updateElement()};return a.prototype={constructor:a,setStartDate:function(e){"string"==typeof e&&(this.startDate=t(e,this.locale.format)),"object"==typeof e&&(this.startDate=t(e)),this.timePicker||(this.startDate=this.startDate.startOf("day")),this.timePicker&&this.timePickerIncrement&&this.startDate.minute(Math.round(this.startDate.minute()/this.timePickerIncrement)*this.timePickerIncrement),this.minDate&&this.startDate.isBefore(this.minDate)&&(this.startDate=this.minDate.clone(),this.timePicker&&this.timePickerIncrement&&this.startDate.minute(Math.round(this.startDate.minute()/this.timePickerIncrement)*this.timePickerIncrement)),this.maxDate&&this.startDate.isAfter(this.maxDate)&&(this.startDate=this.maxDate.clone(),this.timePicker&&this.timePickerIncrement&&this.startDate.minute(Math.floor(this.startDate.minute()/this.timePickerIncrement)*this.timePickerIncrement)),this.isShowing||this.updateElement(),this.updateMonthsInView()},setEndDate:function(e){"string"==typeof e&&(this.endDate=t(e,this.locale.format)),"object"==typeof e&&(this.endDate=t(e)),this.timePicker||(this.endDate=this.endDate.endOf("day")),this.timePicker&&this.timePickerIncrement&&this.endDate.minute(Math.round(this.endDate.minute()/this.timePickerIncrement)*this.timePickerIncrement),this.endDate.isBefore(this.startDate)&&(this.endDate=this.startDate.clone()),this.maxDate&&this.endDate.isAfter(this.maxDate)&&(this.endDate=this.maxDate.clone()),this.maxSpan&&this.startDate.clone().add(this.maxSpan).isBefore(this.endDate)&&(this.endDate=this.startDate.clone().add(this.maxSpan)),this.previousRightTime=this.endDate.clone(),this.container.find(".drp-selected").html(this.startDate.format(this.locale.format)+this.locale.separator+this.endDate.format(this.locale.format)),this.isShowing||this.updateElement(),this.updateMonthsInView()},isInvalidDate:function(){return!1},isCustomDate:function(){return!1},updateView:function(){this.timePicker&&(this.renderTimePicker("left"),this.renderTimePicker("right"),this.endDate?this.container.find(".right .calendar-time select").prop("disabled",!1).removeClass("disabled"):this.container.find(".right .calendar-time select").prop("disabled",!0).addClass("disabled")),this.endDate&&this.container.find(".drp-selected").html(this.startDate.format(this.locale.format)+this.locale.separator+this.endDate.format(this.locale.format)),this.updateMonthsInView(),this.updateCalendars(),this.updateFormInputs()},updateMonthsInView:function(){if(this.endDate){if(!this.singleDatePicker&&this.leftCalendar.month&&this.rightCalendar.month&&(this.startDate.format("YYYY-MM")==this.leftCalendar.month.format("YYYY-MM")||this.startDate.format("YYYY-MM")==this.rightCalendar.month.format("YYYY-MM"))&&(this.endDate.format("YYYY-MM")==this.leftCalendar.month.format("YYYY-MM")||this.endDate.format("YYYY-MM")==this.rightCalendar.month.format("YYYY-MM")))return;this.leftCalendar.month=this.startDate.clone().date(2),this.linkedCalendars||this.endDate.month()==this.startDate.month()&&this.endDate.year()==this.startDate.year()?this.rightCalendar.month=this.startDate.clone().date(2).add(1,"month"):this.rightCalendar.month=this.endDate.clone().date(2)}else this.leftCalendar.month.format("YYYY-MM")!=this.startDate.format("YYYY-MM")&&this.rightCalendar.month.format("YYYY-MM")!=this.startDate.format("YYYY-MM")&&(this.leftCalendar.month=this.startDate.clone().date(2),this.rightCalendar.month=this.startDate.clone().date(2).add(1,"month"));this.maxDate&&this.linkedCalendars&&!this.singleDatePicker&&this.rightCalendar.month>this.maxDate&&(this.rightCalendar.month=this.maxDate.clone().date(2),this.leftCalendar.month=this.maxDate.clone().date(2).subtract(1,"month"))},updateCalendars:function(){if(this.timePicker){var t,e,a,i;if(this.endDate){if(t=parseInt(this.container.find(".left .hourselect").val(),10),e=parseInt(this.container.find(".left .minuteselect").val(),10),isNaN(e)&&(e=parseInt(this.container.find(".left .minuteselect option:last").val(),10)),a=this.timePickerSeconds?parseInt(this.container.find(".left .secondselect").val(),10):0,!this.timePicker24Hour)"PM"===(i=this.container.find(".left .ampmselect").val())&&t<12&&(t+=12),"AM"===i&&12===t&&(t=0)}else if(t=parseInt(this.container.find(".right .hourselect").val(),10),e=parseInt(this.container.find(".right .minuteselect").val(),10),isNaN(e)&&(e=parseInt(this.container.find(".right .minuteselect option:last").val(),10)),a=this.timePickerSeconds?parseInt(this.container.find(".right .secondselect").val(),10):0,!this.timePicker24Hour)"PM"===(i=this.container.find(".right .ampmselect").val())&&t<12&&(t+=12),"AM"===i&&12===t&&(t=0);this.leftCalendar.month.hour(t).minute(e).second(a),this.rightCalendar.month.hour(t).minute(e).second(a)}this.renderCalendar("left"),this.renderCalendar("right"),this.container.find(".ranges li").removeClass("active"),null!=this.endDate&&this.calculateChosenLabel()},renderCalendar:function(a){var i,s=(i="left"==a?this.leftCalendar:this.rightCalendar).month.month(),n=i.month.year(),r=i.month.hour(),o=i.month.minute(),h=i.month.second(),l=t([n,s]).daysInMonth(),c=t([n,s,1]),d=t([n,s,l]),m=t(c).subtract(1,"month").month(),p=t(c).subtract(1,"month").year(),f=t([p,m]).daysInMonth(),u=c.day();(i=[]).firstDay=c,i.lastDay=d;for(var D=0;D<6;D++)i[D]=[];var g=f-u+this.locale.firstDay+1;g>f&&(g-=7),u==this.locale.firstDay&&(g=f-6);for(var y=t([p,m,g,12,o,h]),k=(D=0,0),b=0;D<42;D++,k++,y=t(y).add(24,"hour"))D>0&&k%7==0&&(k=0,b++),i[b][k]=y.clone().hour(r).minute(o).second(h),y.hour(12),this.minDate&&i[b][k].format("YYYY-MM-DD")==this.minDate.format("YYYY-MM-DD")&&i[b][k].isBefore(this.minDate)&&"left"==a&&(i[b][k]=this.minDate.clone()),this.maxDate&&i[b][k].format("YYYY-MM-DD")==this.maxDate.format("YYYY-MM-DD")&&i[b][k].isAfter(this.maxDate)&&"right"==a&&(i[b][k]=this.maxDate.clone());"left"==a?this.leftCalendar.calendar=i:this.rightCalendar.calendar=i;var v="left"==a?this.minDate:this.startDate,C=this.maxDate,Y=("left"==a?this.startDate:this.endDate,this.locale.direction,'<table class="table-condensed">');Y+="<thead>",Y+="<tr>",(this.showWeekNumbers||this.showISOWeekNumbers)&&(Y+="<th></th>"),v&&!v.isBefore(i.firstDay)||this.linkedCalendars&&"left"!=a?Y+="<th></th>":Y+='<th class="prev available"><span></span></th>';var w=this.locale.monthNames[i[1][1].month()]+i[1][1].format(" YYYY");if(this.showDropdowns){for(var P=i[1][1].month(),x=i[1][1].year(),M=C&&C.year()||this.maxYear,I=v&&v.year()||this.minYear,S=x==I,B=x==M,A='<select class="monthselect">',L=0;L<12;L++)(!S||v&&L>=v.month())&&(!B||C&&L<=C.month())?A+="<option value='"+L+"'"+(L===P?" selected='selected'":"")+">"+this.locale.monthNames[L]+"</option>":A+="<option value='"+L+"'"+(L===P?" selected='selected'":"")+" disabled='disabled'>"+this.locale.monthNames[L]+"</option>";A+="</select>";for(var N='<select class="yearselect">',E=I;E<=M;E++)N+='<option value="'+E+'"'+(E===x?' selected="selected"':"")+">"+E+"</option>";w=A+(N+="</select>")}if(Y+='<th colspan="5" class="month">'+w+"</th>",C&&!C.isAfter(i.lastDay)||this.linkedCalendars&&"right"!=a&&!this.singleDatePicker?Y+="<th></th>":Y+='<th class="next available"><span></span></th>',Y+="</tr>",Y+="<tr>",(this.showWeekNumbers||this.showISOWeekNumbers)&&(Y+='<th class="week">'+this.locale.weekLabel+"</th>"),e.each(this.locale.daysOfWeek,(function(t,e){Y+="<th>"+e+"</th>"})),Y+="</tr>",Y+="</thead>",Y+="<tbody>",null==this.endDate&&this.maxSpan){var O=this.startDate.clone().add(this.maxSpan).endOf("day");C&&!O.isBefore(C)||(C=O)}for(b=0;b<6;b++){Y+="<tr>",this.showWeekNumbers?Y+='<td class="week">'+i[b][0].week()+"</td>":this.showISOWeekNumbers&&(Y+='<td class="week">'+i[b][0].isoWeek()+"</td>");for(k=0;k<7;k++){var W=[];i[b][k].isSame(new Date,"day")&&W.push("today"),i[b][k].isoWeekday()>5&&W.push("weekend"),i[b][k].month()!=i[1][1].month()&&W.push("off","ends"),this.minDate&&i[b][k].isBefore(this.minDate,"day")&&W.push("off","disabled"),C&&i[b][k].isAfter(C,"day")&&W.push("off","disabled"),this.isInvalidDate(i[b][k])&&W.push("off","disabled"),i[b][k].format("YYYY-MM-DD")==this.startDate.format("YYYY-MM-DD")&&W.push("active","start-date"),null!=this.endDate&&i[b][k].format("YYYY-MM-DD")==this.endDate.format("YYYY-MM-DD")&&W.push("active","end-date"),null!=this.endDate&&i[b][k]>this.startDate&&i[b][k]<this.endDate&&W.push("in-range");var H=this.isCustomDate(i[b][k]);!1!==H&&("string"==typeof H?W.push(H):Array.prototype.push.apply(W,H));var j="",R=!1;for(D=0;D<W.length;D++)j+=W[D]+" ","disabled"==W[D]&&(R=!0);R||(j+="available"),Y+='<td class="'+j.replace(/^\s+|\s+$/g,"")+'" data-title="r'+b+"c"+k+'">'+i[b][k].date()+"</td>"}Y+="</tr>"}Y+="</tbody>",Y+="</table>",this.container.find(".drp-calendar."+a+" .calendar-table").html(Y)},renderTimePicker:function(t){if("right"!=t||this.endDate){var e,a,i,s=this.maxDate;if(!this.maxSpan||this.maxDate&&!this.startDate.clone().add(this.maxSpan).isBefore(this.maxDate)||(s=this.startDate.clone().add(this.maxSpan)),"left"==t)a=this.startDate.clone(),i=this.minDate;else if("right"==t){a=this.endDate.clone(),i=this.startDate;var n=this.container.find(".drp-calendar.right .calendar-time");if(""!=n.html()&&(a.hour(isNaN(a.hour())?n.find(".hourselect option:selected").val():a.hour()),a.minute(isNaN(a.minute())?n.find(".minuteselect option:selected").val():a.minute()),a.second(isNaN(a.second())?n.find(".secondselect option:selected").val():a.second()),!this.timePicker24Hour)){var r=n.find(".ampmselect option:selected").val();"PM"===r&&a.hour()<12&&a.hour(a.hour()+12),"AM"===r&&12===a.hour()&&a.hour(0)}a.isBefore(this.startDate)&&(a=this.startDate.clone()),s&&a.isAfter(s)&&(a=s.clone())}e='<select class="hourselect">';for(var o=this.timePicker24Hour?0:1,h=this.timePicker24Hour?23:12,l=o;l<=h;l++){var c=l;this.timePicker24Hour||(c=a.hour()>=12?12==l?12:l+12:12==l?0:l);var d=a.clone().hour(c),m=!1;i&&d.minute(59).isBefore(i)&&(m=!0),s&&d.minute(0).isAfter(s)&&(m=!0),c!=a.hour()||m?e+=m?'<option value="'+l+'" disabled="disabled" class="disabled">'+l+"</option>":'<option value="'+l+'">'+l+"</option>":e+='<option value="'+l+'" selected="selected">'+l+"</option>"}e+="</select> ",e+=': <select class="minuteselect">';for(l=0;l<60;l+=this.timePickerIncrement){var p=l<10?"0"+l:l;d=a.clone().minute(l),m=!1;i&&d.second(59).isBefore(i)&&(m=!0),s&&d.second(0).isAfter(s)&&(m=!0),a.minute()!=l||m?e+=m?'<option value="'+l+'" disabled="disabled" class="disabled">'+p+"</option>":'<option value="'+l+'">'+p+"</option>":e+='<option value="'+l+'" selected="selected">'+p+"</option>"}if(e+="</select> ",this.timePickerSeconds){e+=': <select class="secondselect">';for(l=0;l<60;l++){p=l<10?"0"+l:l,d=a.clone().second(l),m=!1;i&&d.isBefore(i)&&(m=!0),s&&d.isAfter(s)&&(m=!0),a.second()!=l||m?e+=m?'<option value="'+l+'" disabled="disabled" class="disabled">'+p+"</option>":'<option value="'+l+'">'+p+"</option>":e+='<option value="'+l+'" selected="selected">'+p+"</option>"}e+="</select> "}if(!this.timePicker24Hour){e+='<select class="ampmselect">';var f="",u="";i&&a.clone().hour(12).minute(0).second(0).isBefore(i)&&(f=' disabled="disabled" class="disabled"'),s&&a.clone().hour(0).minute(0).second(0).isAfter(s)&&(u=' disabled="disabled" class="disabled"'),a.hour()>=12?e+='<option value="AM"'+f+'>AM</option><option value="PM" selected="selected"'+u+">PM</option>":e+='<option value="AM" selected="selected"'+f+'>AM</option><option value="PM"'+u+">PM</option>",e+="</select>"}this.container.find(".drp-calendar."+t+" .calendar-time").html(e)}},updateFormInputs:function(){this.singleDatePicker||this.endDate&&(this.startDate.isBefore(this.endDate)||this.startDate.isSame(this.endDate))?this.container.find("button.applyBtn").prop("disabled",!1):this.container.find("button.applyBtn").prop("disabled",!0)},move:function(){var t,a={top:0,left:0},i=this.drops,s=e(window).width();switch(this.parentEl.is("body")||(a={top:this.parentEl.offset().top-this.parentEl.scrollTop(),left:this.parentEl.offset().left-this.parentEl.scrollLeft()},s=this.parentEl[0].clientWidth+this.parentEl.offset().left),i){case"auto":(t=this.element.offset().top+this.element.outerHeight()-a.top)+this.container.outerHeight()>=this.parentEl[0].scrollHeight&&(t=this.element.offset().top-this.container.outerHeight()-a.top,i="up");break;case"up":t=this.element.offset().top-this.container.outerHeight()-a.top;break;default:t=this.element.offset().top+this.element.outerHeight()-a.top}this.container.css({top:0,left:0,right:"auto"});var n=this.container.outerWidth();if(this.container.toggleClass("drop-up","up"==i),"left"==this.opens){var r=s-this.element.offset().left-this.element.outerWidth();n+r>e(window).width()?this.container.css({top:t,right:"auto",left:9}):this.container.css({top:t,right:r,left:"auto"})}else if("center"==this.opens){(o=this.element.offset().left-a.left+this.element.outerWidth()/2-n/2)<0?this.container.css({top:t,right:"auto",left:9}):o+n>e(window).width()?this.container.css({top:t,left:"auto",right:0}):this.container.css({top:t,left:o,right:"auto"})}else{var o;(o=this.element.offset().left-a.left)+n>e(window).width()?this.container.css({top:t,left:"auto",right:0}):this.container.css({top:t,left:o,right:"auto"})}},show:function(t){this.isShowing||(this._outsideClickProxy=e.proxy((function(t){this.outsideClick(t)}),this),e(document).on("mousedown.daterangepicker",this._outsideClickProxy).on("touchend.daterangepicker",this._outsideClickProxy).on("click.daterangepicker","[data-toggle=dropdown]",this._outsideClickProxy).on("focusin.daterangepicker",this._outsideClickProxy),e(window).on("resize.daterangepicker",e.proxy((function(t){this.move(t)}),this)),this.oldStartDate=this.startDate.clone(),this.oldEndDate=this.endDate.clone(),this.previousRightTime=this.endDate.clone(),this.updateView(),this.container.show(),this.move(),this.element.trigger("show.daterangepicker",this),this.isShowing=!0)},hide:function(t){this.isShowing&&(this.endDate||(this.startDate=this.oldStartDate.clone(),this.endDate=this.oldEndDate.clone()),this.startDate.isSame(this.oldStartDate)&&this.endDate.isSame(this.oldEndDate)||this.callback(this.startDate.clone(),this.endDate.clone(),this.chosenLabel),this.updateElement(),e(document).off(".daterangepicker"),e(window).off(".daterangepicker"),this.container.hide(),this.element.trigger("hide.daterangepicker",this),this.isShowing=!1)},toggle:function(t){this.isShowing?this.hide():this.show()},outsideClick:function(t){var a=e(t.target);"focusin"==t.type||a.closest(this.element).length||a.closest(this.container).length||a.closest(".calendar-table").length||(this.hide(),this.element.trigger("outsideClick.daterangepicker",this))},showCalendars:function(){this.container.addClass("show-calendar"),this.move(),this.element.trigger("showCalendar.daterangepicker",this)},hideCalendars:function(){this.container.removeClass("show-calendar"),this.element.trigger("hideCalendar.daterangepicker",this)},clickRange:function(t){var e=t.target.getAttribute("data-range-key");if(this.chosenLabel=e,e==this.locale.customRangeLabel)this.showCalendars();else{var a=this.ranges[e];this.startDate=a[0],this.endDate=a[1],this.timePicker||(this.startDate.startOf("day"),this.endDate.endOf("day")),this.alwaysShowCalendars||this.hideCalendars(),this.clickApply()}},clickPrev:function(t){e(t.target).parents(".drp-calendar").hasClass("left")?(this.leftCalendar.month.subtract(1,"month"),this.linkedCalendars&&this.rightCalendar.month.subtract(1,"month")):this.rightCalendar.month.subtract(1,"month"),this.updateCalendars()},clickNext:function(t){e(t.target).parents(".drp-calendar").hasClass("left")?this.leftCalendar.month.add(1,"month"):(this.rightCalendar.month.add(1,"month"),this.linkedCalendars&&this.leftCalendar.month.add(1,"month")),this.updateCalendars()},hoverDate:function(t){if(e(t.target).hasClass("available")){var a=e(t.target).attr("data-title"),i=a.substr(1,1),s=a.substr(3,1),n=e(t.target).parents(".drp-calendar").hasClass("left")?this.leftCalendar.calendar[i][s]:this.rightCalendar.calendar[i][s],r=this.leftCalendar,o=this.rightCalendar,h=this.startDate;this.endDate||this.container.find(".drp-calendar tbody td").each((function(t,a){if(!e(a).hasClass("week")){var i=e(a).attr("data-title"),s=i.substr(1,1),l=i.substr(3,1),c=e(a).parents(".drp-calendar").hasClass("left")?r.calendar[s][l]:o.calendar[s][l];c.isAfter(h)&&c.isBefore(n)||c.isSame(n,"day")?e(a).addClass("in-range"):e(a).removeClass("in-range")}}))}},clickDate:function(t){if(e(t.target).hasClass("available")){var a=e(t.target).attr("data-title"),i=a.substr(1,1),s=a.substr(3,1),n=e(t.target).parents(".drp-calendar").hasClass("left")?this.leftCalendar.calendar[i][s]:this.rightCalendar.calendar[i][s];if(this.endDate||n.isBefore(this.startDate,"day")){if(this.timePicker){var r=parseInt(this.container.find(".left .hourselect").val(),10);if(!this.timePicker24Hour)"PM"===(l=this.container.find(".left .ampmselect").val())&&r<12&&(r+=12),"AM"===l&&12===r&&(r=0);var o=parseInt(this.container.find(".left .minuteselect").val(),10);isNaN(o)&&(o=parseInt(this.container.find(".left .minuteselect option:last").val(),10));var h=this.timePickerSeconds?parseInt(this.container.find(".left .secondselect").val(),10):0;n=n.clone().hour(r).minute(o).second(h)}this.endDate=null,this.setStartDate(n.clone())}else if(!this.endDate&&n.isBefore(this.startDate))this.setEndDate(this.startDate.clone());else{if(this.timePicker){var l;r=parseInt(this.container.find(".right .hourselect").val(),10);if(!this.timePicker24Hour)"PM"===(l=this.container.find(".right .ampmselect").val())&&r<12&&(r+=12),"AM"===l&&12===r&&(r=0);o=parseInt(this.container.find(".right .minuteselect").val(),10);isNaN(o)&&(o=parseInt(this.container.find(".right .minuteselect option:last").val(),10));h=this.timePickerSeconds?parseInt(this.container.find(".right .secondselect").val(),10):0;n=n.clone().hour(r).minute(o).second(h)}this.setEndDate(n.clone()),this.autoApply&&(this.calculateChosenLabel(),this.clickApply())}this.singleDatePicker&&(this.setEndDate(this.startDate),!this.timePicker&&this.autoApply&&this.clickApply()),this.updateView(),t.stopPropagation()}},calculateChosenLabel:function(){var t=!0,e=0;for(var a in this.ranges){if(this.timePicker){var i=this.timePickerSeconds?"YYYY-MM-DD HH:mm:ss":"YYYY-MM-DD HH:mm";if(this.startDate.format(i)==this.ranges[a][0].format(i)&&this.endDate.format(i)==this.ranges[a][1].format(i)){t=!1,this.chosenLabel=this.container.find(".ranges li:eq("+e+")").addClass("active").attr("data-range-key");break}}else if(this.startDate.format("YYYY-MM-DD")==this.ranges[a][0].format("YYYY-MM-DD")&&this.endDate.format("YYYY-MM-DD")==this.ranges[a][1].format("YYYY-MM-DD")){t=!1,this.chosenLabel=this.container.find(".ranges li:eq("+e+")").addClass("active").attr("data-range-key");break}e++}t&&(this.showCustomRangeLabel?this.chosenLabel=this.container.find(".ranges li:last").addClass("active").attr("data-range-key"):this.chosenLabel=null,this.showCalendars())},clickApply:function(t){this.hide(),this.element.trigger("apply.daterangepicker",this)},clickCancel:function(t){this.startDate=this.oldStartDate,this.endDate=this.oldEndDate,this.hide(),this.element.trigger("cancel.daterangepicker",this)},monthOrYearChanged:function(t){var a=e(t.target).closest(".drp-calendar").hasClass("left"),i=a?"left":"right",s=this.container.find(".drp-calendar."+i),n=parseInt(s.find(".monthselect").val(),10),r=s.find(".yearselect").val();a||(r<this.startDate.year()||r==this.startDate.year()&&n<this.startDate.month())&&(n=this.startDate.month(),r=this.startDate.year()),this.minDate&&(r<this.minDate.year()||r==this.minDate.year()&&n<this.minDate.month())&&(n=this.minDate.month(),r=this.minDate.year()),this.maxDate&&(r>this.maxDate.year()||r==this.maxDate.year()&&n>this.maxDate.month())&&(n=this.maxDate.month(),r=this.maxDate.year()),a?(this.leftCalendar.month.month(n).year(r),this.linkedCalendars&&(this.rightCalendar.month=this.leftCalendar.month.clone().add(1,"month"))):(this.rightCalendar.month.month(n).year(r),this.linkedCalendars&&(this.leftCalendar.month=this.rightCalendar.month.clone().subtract(1,"month"))),this.updateCalendars()},timeChanged:function(t){var a=e(t.target).closest(".drp-calendar"),i=a.hasClass("left"),s=parseInt(a.find(".hourselect").val(),10),n=parseInt(a.find(".minuteselect").val(),10);isNaN(n)&&(n=parseInt(a.find(".minuteselect option:last").val(),10));var r=this.timePickerSeconds?parseInt(a.find(".secondselect").val(),10):0;if(!this.timePicker24Hour){var o=a.find(".ampmselect").val();"PM"===o&&s<12&&(s+=12),"AM"===o&&12===s&&(s=0)}if(i){var h=this.startDate.clone();h.hour(s),h.minute(n),h.second(r),this.setStartDate(h),this.singleDatePicker?this.endDate=this.startDate.clone():this.endDate&&this.endDate.format("YYYY-MM-DD")==h.format("YYYY-MM-DD")&&this.endDate.isBefore(h)&&this.setEndDate(h.clone())}else if(this.endDate){var l=this.endDate.clone();l.hour(s),l.minute(n),l.second(r),this.setEndDate(l)}this.updateCalendars(),this.updateFormInputs(),this.renderTimePicker("left"),this.renderTimePicker("right")},elementChanged:function(){if(this.element.is("input")&&this.element.val().length){var e=this.element.val().split(this.locale.separator),a=null,i=null;2===e.length&&(a=t(e[0],this.locale.format),i=t(e[1],this.locale.format)),(this.singleDatePicker||null===a||null===i)&&(i=a=t(this.element.val(),this.locale.format)),a.isValid()&&i.isValid()&&(this.setStartDate(a),this.setEndDate(i),this.updateView())}},keydown:function(t){9!==t.keyCode&&13!==t.keyCode||this.hide(),27===t.keyCode&&(t.preventDefault(),t.stopPropagation(),this.hide())},updateElement:function(){if(this.element.is("input")&&this.autoUpdateInput){var t=this.startDate.format(this.locale.format);this.singleDatePicker||(t+=this.locale.separator+this.endDate.format(this.locale.format)),t!==this.element.val()&&this.element.val(t).trigger("change")}},remove:function(){this.container.remove(),this.element.off(".daterangepicker"),this.element.removeData()}},e.fn.daterangepicker=function(t,i){var s=e.extend(!0,{},e.fn.daterangepicker.defaultOptions,t);return this.each((function(){var t=e(this);t.data("daterangepicker")&&t.data("daterangepicker").remove(),t.data("daterangepicker",new a(t,s,i))})),this},a}));
//# sourceMappingURL=/sm/88e48650a36caa41dd1aa0f1a5ee66247818a496500de85dec44b4e2e87cd438.map
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});


/*-------------------------
LetMeScroll.js
Made by: Bruno Vieira
--------------------------- */

class LetMeScroll {

    constructor(options) {

        const defaults = {
            selector : 'defaultId',
            config : {
                dimensions : {
                    width : "100%",
                    height : "500px"
                },
                scroll : {
                    bottomOffset: 0,
                    autoHide: false
                }
            },
            onComplete: function(){},
            onEnd: function(){},
            onTop: function(){},
            onMove: function(){},
            onDragStart: function(){},
            onDragStop: function(){},
            onTouchStart: function(){},
            onTouchStop: function(){}
        };      

        // Scroll Random ID
        var randomID = Math.floor(Math.random() * (9999 - 0 + 1)) + 0;
        
        this.randomID = randomID;
        this.selector = options.selector.substring(1) || defaults.selector.substring(1);
        this.onComplete = options.onComplete || defaults.onComplete;
        this.onEnd = options.onEnd || defaults.onEnd;
        this.onTop = options.onTop || defaults.onTop;
        this.onMove = options.onMove || defaults.onMove;
        this.onDragStart = options.onDragStart || defaults.onDragStart;
        this.onDragStop = options.onDragStop || defaults.onDragStop;
        this.onTouchStart = options.onTouchStart || defaults.onTouchStart;
        this.onTouchStop = options.onTouchStop || defaults.onTouchStop;
        if(!options.config){ options.config = defaults.config;}

        // Get default dimensions
        options.config.dimensions == undefined ? options.config.dimensions = defaults.config.dimensions : options.config.dimensions
        for(var key in defaults.config.dimensions)
        { options.config.dimensions[key] == undefined ? options.config.dimensions[key] = defaults.config.dimensions[key] :  options.config.dimensions[key] = options.config.dimensions[key];}

        options.config.scroll == undefined ? options.config.scroll = defaults.config.scroll : options.config.scroll
        for(var key in defaults.config.scroll)
        { options.config.scroll[key] == undefined ? options.config.scroll[key] = defaults.config.scroll[key] :  options.config.scroll[key] = options.config.scroll[key];}

        // Global
        let _this = this;
        let scrollContainer = 0;
        let scrollContentWrapper = 0;
        let scrollContent = 0;
        let contentPosition = 0;
        let scrollerBeingDragged = false;
        let scroller = 0;
        let topPosition;
        let scrollerHeight;
        let normalizedPosition = 1;
        let reachedBottom = false;

        /*
        ** Detect OS
        */
        function androidOrIOS() {
            const userAgent = navigator.userAgent;
            if (/android/i.test(userAgent)){
                return 'android';
            }
            if (/iPad|iPhone|iPod/i.test(userAgent)){
                return 'ios';
            }
        }

        /*
        ** Check Track Click
        */
        var checkTrackClick = this.checkTrackClick = function checkTrackClick(evt) {

            // Check if it is clicking in the scrollbar
            if(evt.target.classList[0] != "lms_scroller")
            {
                // if it is before the scrollbar, goes up
                if(evt.layerY < scroller.offsetTop)
                {
                    _this.scroller.style.top = _this.scroller.style.top-20;
                    _this.scrollElement.scrollTop = _this.scrollElement.scrollTop-40;
                }
                // if is is after the scrollbar, goes down
                if(evt.layerY > scroller.offsetTop)
                {
                    _this.scroller.style.top = _this.scroller.style.top+20;
                    _this.scrollElement.scrollTop = _this.scrollElement.scrollTop+40;
                }
            }
        }

        /*
        ** Hide Elements
        */
        var hideElement = this.hideElement = function hideElement(element, value) {
            element.style.opacity = value;
        }

        /*
        ** Calculate Scrollbar Height
        */
        var calculateScrollerHeight = this.calculateScrollerHeight = function calculateScrollerHeight(evt) {
            var visibleRatio = scrollContainer.offsetHeight / scrollContentWrapper.scrollHeight;
            return visibleRatio * scrollContainer.offsetHeight;
        }

        /*
        ** Move Scroll
        */
        var moveScroller = this.moveScroller = function moveScroller(evt) {
            
            var newBottomOffset, bottomScroll; 

            // Move Scroll bar to top offset
            var scrollPercentage = evt.target.scrollTop / scrollContentWrapper.scrollHeight;
            topPosition = scrollPercentage * scrollContainer.offsetHeight;
            scroller.style.top = topPosition + 'px';

            // onMove callback()
            if (typeof _this.onMove == "function") { _this.onMove(); } 

            // onEnd callback()
            if(scrollContentWrapper.scrollTopMax != undefined)
            {   
                    // ###################################################
                    // For Gecko Engine (Mozilla)
                    // ###################################################

                    bottomScroll = Number(scrollContentWrapper.scrollTopMax);

                    // Check if exists bottomOffset
                    if(options.config.scroll.bottomOffset > 0)
                    {
                        newBottomOffset = Number(scrollContentWrapper.scrollTopMax) - Number(options.config.scroll.bottomOffset);
                    } else {  newBottomOffset = scrollContentWrapper.scrollTopMax; }

                    if(evt.target.scrollTop >= newBottomOffset)
                    {
                        // Check if scroll is current in reachedBottom state, so scroll can move further without trigger any callback
                        if(reachedBottom == false)
                        {
                            if (typeof _this.onEnd == "function") { _this.onEnd(); } reachedBottom = true;
                            reachedBottom = true;
                        }
                    } else { reachedBottom = false;  }

            } else { 
                    
                    // ###################################################
                    // // For Chromium Engine (Chrome, Opera, Edge..)
                    // ###################################################

                    bottomScroll = Number(scrollContentWrapper.scrollTop);
                    var ChromiumEngineBottom = scrollContentWrapper.scrollHeight - scrollContentWrapper.clientHeight; 
                    
                    // Check if exists bottomOffset
                    if(options.config.scroll.bottomOffset > 0)
                    {
                        newBottomOffset = ChromiumEngineBottom - Number(options.config.scroll.bottomOffset);
                    } else { newBottomOffset = ChromiumEngineBottom; }

                    if(Math.ceil(bottomScroll) >= newBottomOffset)
                    {
                        // Check if scroll is current in reachedBottom state, so scroll can move further without trigger any callback
                        if(reachedBottom == false)
                        {
                            if (typeof _this.onEnd == "function") { _this.onEnd(); } reachedBottom = true;
                            reachedBottom = true;
                        }
                    } else { reachedBottom = false; }
            }

            // oTop callback()
            if(evt.target.scrollTop <= 0){ if (typeof _this.onTop == "function") { _this.onTop(); } }
            
        }

        /*
        ** Start Drag Event
        */
        var startDrag = this.startDrag = function startDrag(evt) {

            normalizedPosition = evt.pageY;
            contentPosition = scrollContentWrapper.scrollTop;
            scrollerBeingDragged = true;

            // onDragStart callback()
            if (typeof _this.onDragStart == "function") { _this.onDragStart(); } 
        }

        /*
        ** Stop Drag Event
        */
        var stopDrag = this.stopDrag = function stopDrag(evt) {

            // Dispatch event when drag is stoppped
            if(scrollerBeingDragged == true)
            {
                scrollerBeingDragged = false;
                // OnDragStop callback()
                if (typeof _this.onDragStop == "function") { _this.onDragStop(); } 
            }

        }

        /*
        ** Scrollbar Event
        */
        var scrollBarScroll = this.scrollBarScroll = function scrollBarScroll(evt) {
            if (scrollerBeingDragged === true) {
                var mouseDifferential = evt.pageY - normalizedPosition;
                var scrollEquivalent = mouseDifferential * (scrollContentWrapper.scrollHeight / scrollContainer.offsetHeight);
                scrollContentWrapper.scrollTop = contentPosition + scrollEquivalent;
            }
        }

        /*
        ** Refresh scrollbar height
        */
        var refreshScroll = this.refreshScroll = function refreshScroll(evt) {

            scrollerHeight = calculateScrollerHeight();
            if (scrollerHeight / scrollContainer.offsetHeight < 1){
                // Show track
                _this.scrollTrack.style.display = "block";
                scroller.style.height = scrollerHeight + 'px';
            } else {
                // Hide track
                _this.scrollTrack.style.display = "none";
                scroller.style.height = '0px';
            }
        }

        /*
        ** Main throttle function
        */
        function throttle (func, interval) {
            var timeout;
            return function() {
                var context = this, args = arguments;
                var later = function () {
                    timeout = false;
                };
                if (!timeout) {
                    func.apply(context, args)
                    timeout = true;
                    setTimeout(later, interval)
                }
            }
        }

        /*
        ** Scroll Structure
        */
        var SetupScroll = this.SetupScroll = function SetupScroll() {

            // Obter o element
            let selectorElement = document.getElementById(this.selector);
            // Save original css
            let originCss = selectorElement.style.cssText;

            selectorElement.classList.add("lms_scrollable");
            selectorElement.style.cssText = originCss+' width:'+options.config.dimensions.width+';height:'+options.config.dimensions.height;

            let selectorElementHTML = selectorElement.innerHTML;
            selectorElement.innerHTML = "";

            // Creates div main div
            selectorElement.insertAdjacentHTML("afterbegin", "<div id='scroll_inner_"+randomID+"' class='lms_content_wrapper'></div>");
            let scrollInner = document.getElementById("scroll_inner_"+randomID);
  
            // Creates div and track div
            scrollInner.insertAdjacentHTML("afterbegin", "<div id='scroll_content_"+randomID+"' class='lms_content'></div> <div style='display:none;' id='lms_track_"+randomID+"' class='lms_scroll_track'></div>");
            let scrollContent = document.getElementById("scroll_content_"+randomID);
            let scrollTrack = document.getElementById("lms_track_"+randomID);

            // Content from original elements into the created elements
            scrollContent.innerHTML = selectorElementHTML;

            // Define variables from new elements
            this.scrollTrack = scrollTrack;
            this.scrollElement = scrollInner;
            this.scrollContent = scrollContent;
            this.mainElement = selectorElement;

            scrollContainer = selectorElement;
            scrollContentWrapper = scrollInner;

            // Calculate scrollbar height
            scrollerHeight = calculateScrollerHeight();
            
            // Creat scrollbar div
            scrollTrack.insertAdjacentHTML("beforeend", "<div id='lms_scroller_"+randomID+"' class='lms_scroller'></div>");
            scroller = document.getElementById("lms_scroller_"+randomID);
            this.scroller = scroller;

            // Attach related draggable listeners
            scroller.addEventListener('mousedown', startDrag);
            window.addEventListener('mouseup', stopDrag);
            window.addEventListener('mousemove', scrollBarScroll);

            // Check if scrollbar is needed based on height
            if (scrollerHeight / scrollContainer.offsetHeight < 1){
                // Apply scrollbar height
                scroller.style.height = scrollerHeight + 'px';
                // Show track
                this.scrollTrack.style.display = "block";
                // Show scroll path divot
                scrollContainer.className += ' lms_showScroll';
            }
            
            scrollContentWrapper.addEventListener('scroll', moveScroller);

            // Add global listeners
            if(!androidOrIOS())
            {
                // Global listeners for Desktop
                scrollTrack.addEventListener('click', checkTrackClick);

                if(options.config.scroll.autoHide == true)
                {   
                    this.hideElement(scroller, 0);
                    scrollContainer.addEventListener("mouseover", function(){ _this.hideElement(scroller, 1); }); 
                    scrollContainer.addEventListener("mouseout", function(){  _this.hideElement(scroller, 0); });  
                } 

            } else {

                // Hide scroll onload
                if(options.config.scroll.autoHide == true){  _this.hideElement(scroller, 0); }

                // Global listeners for Mobile
                scrollContainer.addEventListener("touchstart", function(){
                    if (typeof _this.onTouchStart == "function") { _this.onTouchStart(); } 
                    if(options.config.scroll.autoHide == true) { _this.hideElement(scroller, 1);} 
                }); 
                scrollContainer.addEventListener("touchend", function(){ 
                    if (typeof _this.onTouchStop == "function") { _this.onTouchStop(); } 
                    if(options.config.scroll.autoHide == true) { _this.hideElement(scroller, 0); } 
                });   
            }

            // onComplete callback() when LetMeScroll is initialized
            if (typeof this.onComplete == "function") { this.onComplete(); } 
        }

        // Init
        this.SetupScroll();

        // Refresh content
        var ResizeWindow = throttle(function() {
            refreshScroll();
        }, 10);

        // Add EventListener
        window.addEventListener('resize', ResizeWindow);
    }

    /*
    ** Methods
    */

    // Scroll to specific value
    scrollTo(value)
    {
        // Reset current scroll position
        this.scroller.style.top = "0px";
        this.scrollElement.scrollTop = 0;

        // Scroll to given value
        this.scroller.style.top = value+"px";
        this.scrollElement.scrollTop = value;
      
    }

    // Destroy scrollbar and unbind all its events
    destroy()
    {
        // Store content from inner divs
        let tempContent = this.scrollContent.innerHTML;

        // Remove all inner divs and all its events
        this.scrollContent.remove();
        this.scrollElement.remove();

        // Places content inside original div again and removes all classes associated with LetMeScroll.js
        this.mainElement.innerHTML = tempContent;
        this.mainElement.classList.remove("lms_scrollable");
        this.mainElement.classList.remove("lms_showScroll");
    }

    // Refresh scroll
    refresh()
    {
        // Refresh scrollbar height
        this.refreshScroll();
        // Fix scroll offset when new item is added
        this.scrollTo(this.scrollElement.scrollTop);
    }

    // rebuild scroll
    build()
    {
        // rebuild scroll
        this.SetupScroll();
    }

    // Append items to scroll container
    async appendTo(properties) {
        
        // OnComplete Callback
        function onComplete(callback) { 
            if (typeof callback == "function") { callback();}
        } 

        // Get position e check if position is undefined.
        var position = properties.position;
        if(position == undefined) { var position = "beforeend"; }

        if(properties.items && typeof(properties.items) === 'object')
        {
            // Loop object and add new options to original select box
            var prop = Object.keys(properties.items).length;
            for (var i = 0; i < prop; i++) {
                this.scrollContent.insertAdjacentHTML(position, properties.items[i].content);
            }
        }

        // Refresh scrollbar position because of the new content
        this.refresh();

        // if is "onComplete" is a function, call it back.
        if (typeof properties.onComplete == "function") { onComplete(properties.onComplete); }
    } 

    /*
    ** API > Gets
    */

    // Get main element Id
    get mainElementId() { return "scroll_content_"+this.randomID; }
    // Get scrollbar id
    get scrollbarId() { return "lms_scroller_"+this.randomID; }
    // Get trackbar id
    get trackbarId() { return "lms_track_"+this.randomID; }
}

// Export module to use it in browser and NodeJS
try {
   module.exports = exports = LetMeScroll;
} catch (e) {}


/***************************************************************************************************
LoadingOverlay - A flexible loading overlay jQuery plugin
    Author          : Gaspare Sganga
    Version         : 2.1.7
    License         : MIT
    Documentation   : https://gasparesganga.com/labs/jquery-loading-overlay/
***************************************************************************************************/
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?e(require("jquery")):e(jQuery)}(function(g,a){"use strict";var t={background:"rgba(255, 255, 255, 0.8)",backgroundClass:"",image:"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 1000'><circle r='80' cx='500' cy='90'/><circle r='80' cx='500' cy='910'/><circle r='80' cx='90' cy='500'/><circle r='80' cx='910' cy='500'/><circle r='80' cx='212' cy='212'/><circle r='80' cx='788' cy='212'/><circle r='80' cx='212' cy='788'/><circle r='80' cx='788' cy='788'/></svg>",imageAnimation:"2000ms rotate_right",imageAutoResize:!0,imageResizeFactor:1,imageColor:"#202020",imageClass:"",imageOrder:1,fontawesome:"",fontawesomeAnimation:"",fontawesomeAutoResize:!0,fontawesomeResizeFactor:1,fontawesomeColor:"#202020",fontawesomeOrder:2,custom:"",customAnimation:"",customAutoResize:!0,customResizeFactor:1,customOrder:3,text:"",textAnimation:"",textAutoResize:!0,textResizeFactor:.5,textColor:"#202020",textClass:"",textOrder:4,progress:!1,progressAutoResize:!0,progressResizeFactor:.25,progressColor:"#a0a0a0",progressClass:"",progressOrder:5,progressFixedPosition:"",progressSpeed:200,progressMin:0,progressMax:100,size:50,maxSize:120,minSize:20,direction:"column",fade:!0,resizeInterval:50,zIndex:2147483647},c={overlay:{"box-sizing":"border-box",position:"relative",display:"flex","flex-wrap":"nowrap","align-items":"center","justify-content":"space-around"},element:{"box-sizing":"border-box",overflow:"visible",flex:"0 0 auto",display:"flex","justify-content":"center","align-items":"center"},element_svg:{width:"100%",height:"100%"},progress_fixed:{position:"absolute",left:"0",width:"100%"},progress_wrapper:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},progress_bar:{position:"absolute",left:"0"}},n={count:0,container:a,settings:a,wholePage:a,resizeIntervalId:a,text:a,progress:a},s={animations:["rotate_right","rotate_left","fadein","pulse"],progressPosition:["top","bottom"]},d={animations:{name:"rotate_right",time:"2000ms"},fade:[400,200]};function o(e,s){e=g(e),s.size=w(s.size),s.maxSize=parseInt(s.maxSize,10)||0,s.minSize=parseInt(s.minSize,10)||0,s.resizeInterval=parseInt(s.resizeInterval,10)||0;var t=p(e),a=u(e);if(!1===a){if((a=g.extend({},n)).container=e,a.wholePage=e.is("body"),t=g("<div>",{class:"loadingoverlay"}).css(c.overlay).css("flex-direction","row"===s.direction.toLowerCase()?"row":"column"),s.backgroundClass?t.addClass(s.backgroundClass):t.css("background",s.background),a.wholePage&&t.css({position:"fixed",top:0,left:0,width:"100%",height:"100%"}),void 0!==s.zIndex&&t.css("z-index",s.zIndex),s.image){g.isArray(s.imageColor)?0===s.imageColor.length?s.imageColor=!1:1===s.imageColor.length?s.imageColor={fill:s.imageColor[0]}:s.imageColor={fill:s.imageColor[0],stroke:s.imageColor[1]}:s.imageColor&&(s.imageColor={fill:s.imageColor});var o=v(t,s.imageOrder,s.imageAutoResize,s.imageResizeFactor,s.imageAnimation);"<svg"===s.image.slice(0,4).toLowerCase()&&"</svg>"===s.image.slice(-6).toLowerCase()?(o.append(s.image),o.children().css(c.element_svg),!s.imageClass&&s.imageColor&&o.find("*").css(s.imageColor)):".svg"===s.image.slice(-4).toLowerCase()||"data:image/svg"===s.image.slice(0,14).toLowerCase()?g.ajax({url:s.image,type:"GET",dataType:"html",global:!1}).done(function(e){o.html(e),o.children().css(c.element_svg),!s.imageClass&&s.imageColor&&o.find("*").css(s.imageColor)}):o.css({"background-image":"url("+s.image+")","background-position":"center","background-repeat":"no-repeat","background-size":"cover"}),s.imageClass&&o.addClass(s.imageClass)}if(s.fontawesome){o=v(t,s.fontawesomeOrder,s.fontawesomeAutoResize,s.fontawesomeResizeFactor,s.fontawesomeAnimation).addClass("loadingoverlay_fa");g("<div>",{class:s.fontawesome}).appendTo(o),s.fontawesomeColor&&o.css("color",s.fontawesomeColor)}if(s.custom)o=v(t,s.customOrder,s.customAutoResize,s.customResizeFactor,s.customAnimation).append(s.custom);if(s.text&&(a.text=v(t,s.textOrder,s.textAutoResize,s.textResizeFactor,s.textAnimation).addClass("loadingoverlay_text").text(s.text),s.textClass?a.text.addClass(s.textClass):s.textColor&&a.text.css("color",s.textColor)),s.progress){o=v(t,s.progressOrder,s.progressAutoResize,s.progressResizeFactor,!1).addClass("loadingoverlay_progress");var r=g("<div>").css(c.progress_wrapper).appendTo(o);a.progress={bar:g("<div>").css(c.progress_bar).appendTo(r),fixed:!1,margin:0,min:parseFloat(s.progressMin),max:parseFloat(s.progressMax),speed:parseInt(s.progressSpeed,10)};var i=(s.progressFixedPosition+"").replace(/\s\s+/g," ").toLowerCase().split(" ");2===i.length&&y(i[0])?(a.progress.fixed=i[0],a.progress.margin=w(i[1])):2===i.length&&y(i[1])?(a.progress.fixed=i[1],a.progress.margin=w(i[0])):1===i.length&&y(i[0])&&(a.progress.fixed=i[0],a.progress.margin=0),"top"===a.progress.fixed?o.css(c.progress_fixed).css("top",a.progress.margin?a.progress.margin.value+(a.progress.margin.fixed?a.progress.margin.units:"%"):0):"bottom"===a.progress.fixed&&o.css(c.progress_fixed).css("top","auto"),s.progressClass?a.progress.bar.addClass(s.progressClass):s.progressColor&&a.progress.bar.css("background",s.progressColor)}s.fade?!0===s.fade?s.fade=d.fade:"string"==typeof s.fade||"number"==typeof s.fade?s.fade=[s.fade,s.fade]:g.isArray(s.fade)&&s.fade.length<2&&(s.fade=[s.fade[0],s.fade[0]]):s.fade=[0,0],s.fade=[parseInt(s.fade[0],10),parseInt(s.fade[1],10)],a.settings=s,t.data("loadingoverlay_data",a),e.data("loadingoverlay",t),t.fadeTo(0,.01).appendTo("body"),f(e,!0),0<s.resizeInterval&&(a.resizeIntervalId=setInterval(function(){f(e,!1)},s.resizeInterval)),t.fadeTo(s.fade[0],1)}a.count++}function r(e,s){var t=p(e=g(e)),a=u(e);!1!==a&&(a.count--,(s||a.count<=0)&&t.animate({opacity:0},a.settings.fade[1],function(){a.resizeIntervalId&&clearInterval(a.resizeIntervalId),g(this).remove(),e.removeData("loadingoverlay")}))}function i(e){f(g(e),!0)}function l(e,s){var t=u(e=g(e));!1!==t&&t.text&&(!1===s?t.text.hide():t.text.show().text(s))}function m(e,s){var t=u(e=g(e));if(!1!==t&&t.progress)if(!1===s)t.progress.bar.hide();else{var a=100*((parseFloat(s)||0)-t.progress.min)/(t.progress.max-t.progress.min);a<0&&(a=0),100<a&&(a=100),t.progress.bar.show().animate({width:a+"%"},t.progress.speed)}}function f(e,t){var s=p(e),a=u(e);if(!1!==a){if(!a.wholePage){var o="fixed"===e.css("position"),r=o?e[0].getBoundingClientRect():e.offset();s.css({position:o?"fixed":"absolute",top:r.top+parseInt(e.css("border-top-width"),10),left:r.left+parseInt(e.css("border-left-width"),10),width:e.innerWidth(),height:e.innerHeight()})}if(a.settings.size){var i=a.wholePage?g(window):e,n=a.settings.size.value;a.settings.size.fixed||(n=Math.min(i.innerWidth(),i.innerHeight())*n/100,a.settings.maxSize&&n>a.settings.maxSize&&(n=a.settings.maxSize),a.settings.minSize&&n<a.settings.minSize&&(n=a.settings.minSize)),s.children(".loadingoverlay_element").each(function(){var e=g(this);if(t||e.data("loadingoverlay_autoresize")){var s=e.data("loadingoverlay_resizefactor");e.hasClass("loadingoverlay_fa")||e.hasClass("loadingoverlay_text")?e.css("font-size",n*s+a.settings.size.units):e.hasClass("loadingoverlay_progress")?(a.progress.bar.css("height",n*s+a.settings.size.units),a.progress.fixed?"bottom"===a.progress.fixed&&e.css("bottom",a.progress.margin?a.progress.margin.value+(a.progress.margin.fixed?a.progress.margin.units:"%"):0).css("bottom","+="+n*s+a.settings.size.units):a.progress.bar.css("top",e.position().top).css("top","-="+n*s*.5+a.settings.size.units)):e.css({width:n*s+a.settings.size.units,height:n*s+a.settings.size.units})}})}}}function p(e){return e.data("loadingoverlay")}function u(e){var s=p(e),t=void 0===s?a:s.data("loadingoverlay_data");return void 0===t?(g(".loadingoverlay").each(function(){var e=g(this),s=e.data("loadingoverlay_data");document.body.contains(s.container[0])||(s.resizeIntervalId&&clearInterval(s.resizeIntervalId),e.remove())}),!1):(s.toggle(e.is(":visible")),t)}function v(e,s,t,a,o){var r=g("<div>",{class:"loadingoverlay_element",css:{order:s}}).css(c.element).data({loadingoverlay_autoresize:t,loadingoverlay_resizefactor:a}).appendTo(e);if(!0===o&&(o=d.animations.time+" "+d.animations.name),"string"==typeof o){var i,n,l=o.replace(/\s\s+/g," ").toLowerCase().split(" ");2===l.length&&x(l[0])&&h(l[1])?(i=l[1],n=l[0]):2===l.length&&x(l[1])&&h(l[0])?(i=l[0],n=l[1]):1===l.length&&x(l[0])?(i=d.animations.name,n=l[0]):1===l.length&&h(l[0])&&(i=l[0],n=d.animations.time),r.css({"animation-name":"loadingoverlay_animation__"+i,"animation-duration":n,"animation-timing-function":"linear","animation-iteration-count":"infinite"})}return r}function x(e){return!isNaN(parseFloat(e))&&("s"===e.slice(-1)||"ms"===e.slice(-2))}function h(e){return-1<s.animations.indexOf(e)}function y(e){return-1<s.progressPosition.indexOf(e)}function w(e){return!(!e||e<0)&&("string"==typeof e&&-1<["vmin","vmax"].indexOf(e.slice(-4))?{fixed:!0,units:e.slice(-4),value:e.slice(0,-4)}:"string"==typeof e&&-1<["rem"].indexOf(e.slice(-3))?{fixed:!0,units:e.slice(-3),value:e.slice(0,-3)}:"string"==typeof e&&-1<["px","em","cm","mm","in","pt","pc","vh","vw"].indexOf(e.slice(-2))?{fixed:!0,units:e.slice(-2),value:e.slice(0,-2)}:{fixed:!1,units:"px",value:parseFloat(e)})}g.LoadingOverlaySetup=function(e){g.extend(!0,t,e)},g.LoadingOverlay=function(e,s){switch(e.toLowerCase()){case"show":o("body",g.extend(!0,{},t,s));break;case"hide":r("body",s);break;case"resize":i("body");break;case"text":l("body",s);break;case"progress":m("body",s)}},g.fn.LoadingOverlay=function(e,s){switch(e.toLowerCase()){case"show":return this.each(function(){o(this,g.extend(!0,{},t,s))});case"hide":return this.each(function(){r(this,s)});case"resize":return this.each(function(){i(this)});case"text":return this.each(function(){l(this,s)});case"progress":return this.each(function(){m(this,s)})}},g(function(){g("head").append(["<style>","@-webkit-keyframes loadingoverlay_animation__rotate_right {","to {","-webkit-transform : rotate(360deg);","transform : rotate(360deg);","}","}","@keyframes loadingoverlay_animation__rotate_right {","to {","-webkit-transform : rotate(360deg);","transform : rotate(360deg);","}","}","@-webkit-keyframes loadingoverlay_animation__rotate_left {","to {","-webkit-transform : rotate(-360deg);","transform : rotate(-360deg);","}","}","@keyframes loadingoverlay_animation__rotate_left {","to {","-webkit-transform : rotate(-360deg);","transform : rotate(-360deg);","}","}","@-webkit-keyframes loadingoverlay_animation__fadein {","0% {","opacity   : 0;","-webkit-transform : scale(0.1, 0.1);","transform : scale(0.1, 0.1);","}","50% {","opacity   : 1;","}","100% {","opacity   : 0;","-webkit-transform : scale(1, 1);","transform : scale(1, 1);","}","}","@keyframes loadingoverlay_animation__fadein {","0% {","opacity   : 0;","-webkit-transform : scale(0.1, 0.1);","transform : scale(0.1, 0.1);","}","50% {","opacity   : 1;","}","100% {","opacity   : 0;","-webkit-transform : scale(1, 1);","transform : scale(1, 1);","}","}","@-webkit-keyframes loadingoverlay_animation__pulse {","0% {","-webkit-transform : scale(0, 0);","transform : scale(0, 0);","}","50% {","-webkit-transform : scale(1, 1);","transform : scale(1, 1);","}","100% {","-webkit-transform : scale(0, 0);","transform : scale(0, 0);","}","}","@keyframes loadingoverlay_animation__pulse {","0% {","-webkit-transform : scale(0, 0);","transform : scale(0, 0);","}","50% {","-webkit-transform : scale(1, 1);","transform : scale(1, 1);","}","100% {","-webkit-transform : scale(0, 0);","transform : scale(0, 0);","}","}","</style>"].join(" "))})});
/*!
* sweetalert2 v11.21.0
* Released under the MIT License.
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Sweetalert2 = factory());
})(this, (function () { 'use strict';

  function _assertClassBrand(e, t, n) {
    if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
    throw new TypeError("Private element is not present on this object");
  }
  function _checkPrivateRedeclaration(e, t) {
    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
  function _classPrivateFieldGet2(s, a) {
    return s.get(_assertClassBrand(s, a));
  }
  function _classPrivateFieldInitSpec(e, t, a) {
    _checkPrivateRedeclaration(e, t), t.set(e, a);
  }
  function _classPrivateFieldSet2(s, a, r) {
    return s.set(_assertClassBrand(s, a), r), r;
  }

  const RESTORE_FOCUS_TIMEOUT = 100;

  /** @type {GlobalState} */
  const globalState = {};
  const focusPreviousActiveElement = () => {
    if (globalState.previousActiveElement instanceof HTMLElement) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  };

  /**
   * Restore previous active (focused) element
   *
   * @param {boolean} returnFocus
   * @returns {Promise<void>}
   */
  const restoreActiveElement = returnFocus => {
    return new Promise(resolve => {
      if (!returnFocus) {
        return resolve();
      }
      const x = window.scrollX;
      const y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(() => {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      window.scrollTo(x, y);
    });
  };

  const swalPrefix = 'swal2-';

  /**
   * @typedef {Record<SwalClass, string>} SwalClasses
   */

  /**
   * @typedef {'success' | 'warning' | 'info' | 'question' | 'error'} SwalIcon
   * @typedef {Record<SwalIcon, string>} SwalIcons
   */

  /** @type {SwalClass[]} */
  const classNames = ['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'show', 'hide', 'close', 'title', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error', 'draggable', 'dragging'];
  const swalClasses = classNames.reduce((acc, className) => {
    acc[className] = swalPrefix + className;
    return acc;
  }, /** @type {SwalClasses} */{});

  /** @type {SwalIcon[]} */
  const icons = ['success', 'warning', 'info', 'question', 'error'];
  const iconTypes = icons.reduce((acc, icon) => {
    acc[icon] = swalPrefix + icon;
    return acc;
  }, /** @type {SwalIcons} */{});

  const consolePrefix = 'SweetAlert2:';

  /**
   * Capitalize the first letter of a string
   *
   * @param {string} str
   * @returns {string}
   */
  const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

  /**
   * Standardize console warnings
   *
   * @param {string | string[]} message
   */
  const warn = message => {
    console.warn(`${consolePrefix} ${typeof message === 'object' ? message.join(' ') : message}`);
  };

  /**
   * Standardize console errors
   *
   * @param {string} message
   */
  const error = message => {
    console.error(`${consolePrefix} ${message}`);
  };

  /**
   * Private global state for `warnOnce`
   *
   * @type {string[]}
   * @private
   */
  const previousWarnOnceMessages = [];

  /**
   * Show a console warning, but only if it hasn't already been shown
   *
   * @param {string} message
   */
  const warnOnce = message => {
    if (!previousWarnOnceMessages.includes(message)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };

  /**
   * Show a one-time console warning about deprecated params/methods
   *
   * @param {string} deprecatedParam
   * @param {string?} useInstead
   */
  const warnAboutDeprecation = function (deprecatedParam) {
    let useInstead = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    warnOnce(`"${deprecatedParam}" is deprecated and will be removed in the next major release.${useInstead ? ` Use "${useInstead}" instead.` : ''}`);
  };

  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   *
   * @param {Function | any} arg
   * @returns {any}
   */
  const callIfFunction = arg => typeof arg === 'function' ? arg() : arg;

  /**
   * @param {any} arg
   * @returns {boolean}
   */
  const hasToPromiseFn = arg => arg && typeof arg.toPromise === 'function';

  /**
   * @param {any} arg
   * @returns {Promise<any>}
   */
  const asPromise = arg => hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);

  /**
   * @param {any} arg
   * @returns {boolean}
   */
  const isPromise = arg => arg && Promise.resolve(arg) === arg;

  /**
   * Gets the popup container which contains the backdrop and the popup itself.
   *
   * @returns {HTMLElement | null}
   */
  const getContainer = () => document.body.querySelector(`.${swalClasses.container}`);

  /**
   * @param {string} selectorString
   * @returns {HTMLElement | null}
   */
  const elementBySelector = selectorString => {
    const container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };

  /**
   * @param {string} className
   * @returns {HTMLElement | null}
   */
  const elementByClass = className => {
    return elementBySelector(`.${className}`);
  };

  /**
   * @returns {HTMLElement | null}
   */
  const getPopup = () => elementByClass(swalClasses.popup);

  /**
   * @returns {HTMLElement | null}
   */
  const getIcon = () => elementByClass(swalClasses.icon);

  /**
   * @returns {HTMLElement | null}
   */
  const getIconContent = () => elementByClass(swalClasses['icon-content']);

  /**
   * @returns {HTMLElement | null}
   */
  const getTitle = () => elementByClass(swalClasses.title);

  /**
   * @returns {HTMLElement | null}
   */
  const getHtmlContainer = () => elementByClass(swalClasses['html-container']);

  /**
   * @returns {HTMLElement | null}
   */
  const getImage = () => elementByClass(swalClasses.image);

  /**
   * @returns {HTMLElement | null}
   */
  const getProgressSteps = () => elementByClass(swalClasses['progress-steps']);

  /**
   * @returns {HTMLElement | null}
   */
  const getValidationMessage = () => elementByClass(swalClasses['validation-message']);

  /**
   * @returns {HTMLButtonElement | null}
   */
  const getConfirmButton = () => (/** @type {HTMLButtonElement} */elementBySelector(`.${swalClasses.actions} .${swalClasses.confirm}`));

  /**
   * @returns {HTMLButtonElement | null}
   */
  const getCancelButton = () => (/** @type {HTMLButtonElement} */elementBySelector(`.${swalClasses.actions} .${swalClasses.cancel}`));

  /**
   * @returns {HTMLButtonElement | null}
   */
  const getDenyButton = () => (/** @type {HTMLButtonElement} */elementBySelector(`.${swalClasses.actions} .${swalClasses.deny}`));

  /**
   * @returns {HTMLElement | null}
   */
  const getInputLabel = () => elementByClass(swalClasses['input-label']);

  /**
   * @returns {HTMLElement | null}
   */
  const getLoader = () => elementBySelector(`.${swalClasses.loader}`);

  /**
   * @returns {HTMLElement | null}
   */
  const getActions = () => elementByClass(swalClasses.actions);

  /**
   * @returns {HTMLElement | null}
   */
  const getFooter = () => elementByClass(swalClasses.footer);

  /**
   * @returns {HTMLElement | null}
   */
  const getTimerProgressBar = () => elementByClass(swalClasses['timer-progress-bar']);

  /**
   * @returns {HTMLElement | null}
   */
  const getCloseButton = () => elementByClass(swalClasses.close);

  // https://github.com/jkup/focusable/blob/master/index.js
  const focusable = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`;
  /**
   * @returns {HTMLElement[]}
   */
  const getFocusableElements = () => {
    const popup = getPopup();
    if (!popup) {
      return [];
    }
    /** @type {NodeListOf<HTMLElement>} */
    const focusableElementsWithTabindex = popup.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])');
    const focusableElementsWithTabindexSorted = Array.from(focusableElementsWithTabindex)
    // sort according to tabindex
    .sort((a, b) => {
      const tabindexA = parseInt(a.getAttribute('tabindex') || '0');
      const tabindexB = parseInt(b.getAttribute('tabindex') || '0');
      if (tabindexA > tabindexB) {
        return 1;
      } else if (tabindexA < tabindexB) {
        return -1;
      }
      return 0;
    });

    /** @type {NodeListOf<HTMLElement>} */
    const otherFocusableElements = popup.querySelectorAll(focusable);
    const otherFocusableElementsFiltered = Array.from(otherFocusableElements).filter(el => el.getAttribute('tabindex') !== '-1');
    return [...new Set(focusableElementsWithTabindexSorted.concat(otherFocusableElementsFiltered))].filter(el => isVisible$1(el));
  };

  /**
   * @returns {boolean}
   */
  const isModal = () => {
    return hasClass(document.body, swalClasses.shown) && !hasClass(document.body, swalClasses['toast-shown']) && !hasClass(document.body, swalClasses['no-backdrop']);
  };

  /**
   * @returns {boolean}
   */
  const isToast = () => {
    const popup = getPopup();
    if (!popup) {
      return false;
    }
    return hasClass(popup, swalClasses.toast);
  };

  /**
   * @returns {boolean}
   */
  const isLoading = () => {
    const popup = getPopup();
    if (!popup) {
      return false;
    }
    return popup.hasAttribute('data-loading');
  };

  /**
   * Securely set innerHTML of an element
   * https://github.com/sweetalert2/sweetalert2/issues/1926
   *
   * @param {HTMLElement} elem
   * @param {string} html
   */
  const setInnerHtml = (elem, html) => {
    elem.textContent = '';
    if (html) {
      const parser = new DOMParser();
      const parsed = parser.parseFromString(html, `text/html`);
      const head = parsed.querySelector('head');
      if (head) {
        Array.from(head.childNodes).forEach(child => {
          elem.appendChild(child);
        });
      }
      const body = parsed.querySelector('body');
      if (body) {
        Array.from(body.childNodes).forEach(child => {
          if (child instanceof HTMLVideoElement || child instanceof HTMLAudioElement) {
            elem.appendChild(child.cloneNode(true)); // https://github.com/sweetalert2/sweetalert2/issues/2507
          } else {
            elem.appendChild(child);
          }
        });
      }
    }
  };

  /**
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {boolean}
   */
  const hasClass = (elem, className) => {
    if (!className) {
      return false;
    }
    const classList = className.split(/\s+/);
    for (let i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }
    return true;
  };

  /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   */
  const removeCustomClasses = (elem, params) => {
    Array.from(elem.classList).forEach(className => {
      if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass || {}).includes(className)) {
        elem.classList.remove(className);
      }
    });
  };

  /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   * @param {string} className
   */
  const applyCustomClass = (elem, params, className) => {
    removeCustomClasses(elem, params);
    if (!params.customClass) {
      return;
    }
    const customClass = params.customClass[(/** @type {keyof SweetAlertCustomClass} */className)];
    if (!customClass) {
      return;
    }
    if (typeof customClass !== 'string' && !customClass.forEach) {
      warn(`Invalid type of customClass.${className}! Expected string or iterable object, got "${typeof customClass}"`);
      return;
    }
    addClass(elem, customClass);
  };

  /**
   * @param {HTMLElement} popup
   * @param {import('./renderers/renderInput').InputClass | SweetAlertInput} inputClass
   * @returns {HTMLInputElement | null}
   */
  const getInput$1 = (popup, inputClass) => {
    if (!inputClass) {
      return null;
    }
    switch (inputClass) {
      case 'select':
      case 'textarea':
      case 'file':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses[inputClass]}`);
      case 'checkbox':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.checkbox} input`);
      case 'radio':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:checked`) || popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:first-child`);
      case 'range':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.range} input`);
      default:
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.input}`);
    }
  };

  /**
   * @param {HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement} input
   */
  const focusInput = input => {
    input.focus();

    // place cursor at end of text in text input
    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      const val = input.value;
      input.value = '';
      input.value = val;
    }
  };

  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   * @param {boolean} condition
   */
  const toggleClass = (target, classList, condition) => {
    if (!target || !classList) {
      return;
    }
    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }
    classList.forEach(className => {
      if (Array.isArray(target)) {
        target.forEach(elem => {
          if (condition) {
            elem.classList.add(className);
          } else {
            elem.classList.remove(className);
          }
        });
      } else {
        if (condition) {
          target.classList.add(className);
        } else {
          target.classList.remove(className);
        }
      }
    });
  };

  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   */
  const addClass = (target, classList) => {
    toggleClass(target, classList, true);
  };

  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   */
  const removeClass = (target, classList) => {
    toggleClass(target, classList, false);
  };

  /**
   * Get direct child of an element by class name
   *
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {HTMLElement | undefined}
   */
  const getDirectChildByClass = (elem, className) => {
    const children = Array.from(elem.children);
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child instanceof HTMLElement && hasClass(child, className)) {
        return child;
      }
    }
  };

  /**
   * @param {HTMLElement} elem
   * @param {string} property
   * @param {*} value
   */
  const applyNumericalStyle = (elem, property, value) => {
    if (value === `${parseInt(value)}`) {
      value = parseInt(value);
    }
    if (value || parseInt(value) === 0) {
      elem.style.setProperty(property, typeof value === 'number' ? `${value}px` : value);
    } else {
      elem.style.removeProperty(property);
    }
  };

  /**
   * @param {HTMLElement | null} elem
   * @param {string} display
   */
  const show = function (elem) {
    let display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
    if (!elem) {
      return;
    }
    elem.style.display = display;
  };

  /**
   * @param {HTMLElement | null} elem
   */
  const hide = elem => {
    if (!elem) {
      return;
    }
    elem.style.display = 'none';
  };

  /**
   * @param {HTMLElement | null} elem
   * @param {string} display
   */
  const showWhenInnerHtmlPresent = function (elem) {
    let display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'block';
    if (!elem) {
      return;
    }
    new MutationObserver(() => {
      toggle(elem, elem.innerHTML, display);
    }).observe(elem, {
      childList: true,
      subtree: true
    });
  };

  /**
   * @param {HTMLElement} parent
   * @param {string} selector
   * @param {string} property
   * @param {string} value
   */
  const setStyle = (parent, selector, property, value) => {
    /** @type {HTMLElement | null} */
    const el = parent.querySelector(selector);
    if (el) {
      el.style.setProperty(property, value);
    }
  };

  /**
   * @param {HTMLElement} elem
   * @param {any} condition
   * @param {string} display
   */
  const toggle = function (elem, condition) {
    let display = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'flex';
    if (condition) {
      show(elem, display);
    } else {
      hide(elem);
    }
  };

  /**
   * borrowed from jquery $(elem).is(':visible') implementation
   *
   * @param {HTMLElement | null} elem
   * @returns {boolean}
   */
  const isVisible$1 = elem => !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));

  /**
   * @returns {boolean}
   */
  const allButtonsAreHidden = () => !isVisible$1(getConfirmButton()) && !isVisible$1(getDenyButton()) && !isVisible$1(getCancelButton());

  /**
   * @param {HTMLElement} elem
   * @returns {boolean}
   */
  const isScrollable = elem => !!(elem.scrollHeight > elem.clientHeight);

  /**
   * borrowed from https://stackoverflow.com/a/46352119
   *
   * @param {HTMLElement} elem
   * @returns {boolean}
   */
  const hasCssAnimation = elem => {
    const style = window.getComputedStyle(elem);
    const animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    const transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };

  /**
   * @param {number} timer
   * @param {boolean} reset
   */
  const animateTimerProgressBar = function (timer) {
    let reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    const timerProgressBar = getTimerProgressBar();
    if (!timerProgressBar) {
      return;
    }
    if (isVisible$1(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }
      setTimeout(() => {
        timerProgressBar.style.transition = `width ${timer / 1000}s linear`;
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  const stopTimerProgressBar = () => {
    const timerProgressBar = getTimerProgressBar();
    if (!timerProgressBar) {
      return;
    }
    const timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    const timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    const timerProgressBarPercent = timerProgressBarWidth / timerProgressBarFullWidth * 100;
    timerProgressBar.style.width = `${timerProgressBarPercent}%`;
  };

  /**
   * Detect Node env
   *
   * @returns {boolean}
   */
  const isNodeEnv = () => typeof window === 'undefined' || typeof document === 'undefined';

  const sweetHTML = `
 <div aria-labelledby="${swalClasses.title}" aria-describedby="${swalClasses['html-container']}" class="${swalClasses.popup}" tabindex="-1">
   <button type="button" class="${swalClasses.close}"></button>
   <ul class="${swalClasses['progress-steps']}"></ul>
   <div class="${swalClasses.icon}"></div>
   <img class="${swalClasses.image}" />
   <h2 class="${swalClasses.title}" id="${swalClasses.title}"></h2>
   <div class="${swalClasses['html-container']}" id="${swalClasses['html-container']}"></div>
   <input class="${swalClasses.input}" id="${swalClasses.input}" />
   <input type="file" class="${swalClasses.file}" />
   <div class="${swalClasses.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${swalClasses.select}" id="${swalClasses.select}"></select>
   <div class="${swalClasses.radio}"></div>
   <label class="${swalClasses.checkbox}">
     <input type="checkbox" id="${swalClasses.checkbox}" />
     <span class="${swalClasses.label}"></span>
   </label>
   <textarea class="${swalClasses.textarea}" id="${swalClasses.textarea}"></textarea>
   <div class="${swalClasses['validation-message']}" id="${swalClasses['validation-message']}"></div>
   <div class="${swalClasses.actions}">
     <div class="${swalClasses.loader}"></div>
     <button type="button" class="${swalClasses.confirm}"></button>
     <button type="button" class="${swalClasses.deny}"></button>
     <button type="button" class="${swalClasses.cancel}"></button>
   </div>
   <div class="${swalClasses.footer}"></div>
   <div class="${swalClasses['timer-progress-bar-container']}">
     <div class="${swalClasses['timer-progress-bar']}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, '');

  /**
   * @returns {boolean}
   */
  const resetOldContainer = () => {
    const oldContainer = getContainer();
    if (!oldContainer) {
      return false;
    }
    oldContainer.remove();
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };
  const resetValidationMessage$1 = () => {
    globalState.currentInstance.resetValidationMessage();
  };
  const addInputChangeListeners = () => {
    const popup = getPopup();
    const input = getDirectChildByClass(popup, swalClasses.input);
    const file = getDirectChildByClass(popup, swalClasses.file);
    /** @type {HTMLInputElement} */
    const range = popup.querySelector(`.${swalClasses.range} input`);
    /** @type {HTMLOutputElement} */
    const rangeOutput = popup.querySelector(`.${swalClasses.range} output`);
    const select = getDirectChildByClass(popup, swalClasses.select);
    /** @type {HTMLInputElement} */
    const checkbox = popup.querySelector(`.${swalClasses.checkbox} input`);
    const textarea = getDirectChildByClass(popup, swalClasses.textarea);
    input.oninput = resetValidationMessage$1;
    file.onchange = resetValidationMessage$1;
    select.onchange = resetValidationMessage$1;
    checkbox.onchange = resetValidationMessage$1;
    textarea.oninput = resetValidationMessage$1;
    range.oninput = () => {
      resetValidationMessage$1();
      rangeOutput.value = range.value;
    };
    range.onchange = () => {
      resetValidationMessage$1();
      rangeOutput.value = range.value;
    };
  };

  /**
   * @param {string | HTMLElement} target
   * @returns {HTMLElement}
   */
  const getTarget = target => typeof target === 'string' ? document.querySelector(target) : target;

  /**
   * @param {SweetAlertOptions} params
   */
  const setupAccessibility = params => {
    const popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');
    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };

  /**
   * @param {HTMLElement} targetElement
   */
  const setupRTL = targetElement => {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };

  /**
   * Add modal + backdrop + no-war message for Russians to DOM
   *
   * @param {SweetAlertOptions} params
   */
  const init = params => {
    // Clean up the old popup container if it exists
    const oldContainerExisted = resetOldContainer();
    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }
    const container = document.createElement('div');
    container.className = swalClasses.container;
    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }
    setInnerHtml(container, sweetHTML);
    container.dataset['swal2Theme'] = params.theme;
    const targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    if (params.topLayer) {
      container.setAttribute('popover', '');
      container.showPopover();
    }
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };

  /**
   * @param {HTMLElement | object | string} param
   * @param {HTMLElement} target
   */
  const parseHtmlToContainer = (param, target) => {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param);
    }

    // Object
    else if (typeof param === 'object') {
      handleObject(param, target);
    }

    // Plain string
    else if (param) {
      setInnerHtml(target, param);
    }
  };

  /**
   * @param {any} param
   * @param {HTMLElement} target
   */
  const handleObject = (param, target) => {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param);
    }

    // For other objects use their string representation
    else {
      setInnerHtml(target, param.toString());
    }
  };

  /**
   * @param {HTMLElement} target
   * @param {any} elem
   */
  const handleJqueryElem = (target, elem) => {
    target.textContent = '';
    if (0 in elem) {
      for (let i = 0; i in elem; i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderActions = (instance, params) => {
    const actions = getActions();
    const loader = getLoader();
    if (!actions || !loader) {
      return;
    }

    // Actions (buttons) wrapper
    if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
      hide(actions);
    } else {
      show(actions);
    }

    // Custom class
    applyCustomClass(actions, params, 'actions');

    // Render all the buttons
    renderButtons(actions, loader, params);

    // Loader
    setInnerHtml(loader, params.loaderHtml || '');
    applyCustomClass(loader, params, 'loader');
  };

  /**
   * @param {HTMLElement} actions
   * @param {HTMLElement} loader
   * @param {SweetAlertOptions} params
   */
  function renderButtons(actions, loader, params) {
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton();
    if (!confirmButton || !denyButton || !cancelButton) {
      return;
    }

    // Render buttons
    renderButton(confirmButton, 'confirm', params);
    renderButton(denyButton, 'deny', params);
    renderButton(cancelButton, 'cancel', params);
    handleButtonsStyling(confirmButton, denyButton, cancelButton, params);
    if (params.reverseButtons) {
      if (params.toast) {
        actions.insertBefore(cancelButton, confirmButton);
        actions.insertBefore(denyButton, confirmButton);
      } else {
        actions.insertBefore(cancelButton, loader);
        actions.insertBefore(denyButton, loader);
        actions.insertBefore(confirmButton, loader);
      }
    }
  }

  /**
   * @param {HTMLElement} confirmButton
   * @param {HTMLElement} denyButton
   * @param {HTMLElement} cancelButton
   * @param {SweetAlertOptions} params
   */
  function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
    if (!params.buttonsStyling) {
      removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
      return;
    }
    addClass([confirmButton, denyButton, cancelButton], swalClasses.styled);

    // Apply custom background colors to action buttons
    if (params.confirmButtonColor) {
      confirmButton.style.setProperty('--swal2-confirm-button-background-color', params.confirmButtonColor);
    }
    if (params.denyButtonColor) {
      denyButton.style.setProperty('--swal2-deny-button-background-color', params.denyButtonColor);
    }
    if (params.cancelButtonColor) {
      cancelButton.style.setProperty('--swal2-cancel-button-background-color', params.cancelButtonColor);
    }

    // Apply the outline color to action buttons
    applyOutlineColor(confirmButton);
    applyOutlineColor(denyButton);
    applyOutlineColor(cancelButton);
  }

  /**
   * @param {HTMLElement} button
   */
  function applyOutlineColor(button) {
    const buttonStyle = window.getComputedStyle(button);
    const outlineColor = buttonStyle.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/, 'rgba($1, $2, $3, 0.5)');
    button.style.setProperty('--swal2-action-button-outline', buttonStyle.getPropertyValue('--swal2-outline').replace(/ rgba\(.*/, ` ${outlineColor}`));
  }

  /**
   * @param {HTMLElement} button
   * @param {'confirm' | 'deny' | 'cancel'} buttonType
   * @param {SweetAlertOptions} params
   */
  function renderButton(button, buttonType, params) {
    const buttonName = /** @type {'Confirm' | 'Deny' | 'Cancel'} */capitalizeFirstLetter(buttonType);
    toggle(button, params[`show${buttonName}Button`], 'inline-block');
    setInnerHtml(button, params[`${buttonType}ButtonText`] || ''); // Set caption text
    button.setAttribute('aria-label', params[`${buttonType}ButtonAriaLabel`] || ''); // ARIA label

    // Add buttons custom classes
    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, `${buttonType}Button`);
  }

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderCloseButton = (instance, params) => {
    const closeButton = getCloseButton();
    if (!closeButton) {
      return;
    }
    setInnerHtml(closeButton, params.closeButtonHtml || '');

    // Custom class
    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel || '');
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderContainer = (instance, params) => {
    const container = getContainer();
    if (!container) {
      return;
    }
    handleBackdropParam(container, params.backdrop);
    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow);

    // Custom class
    applyCustomClass(container, params, 'container');
  };

  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['backdrop']} backdrop
   */
  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }

  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['position']} position
   */
  function handlePositionParam(container, position) {
    if (!position) {
      return;
    }
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }

  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['grow']} grow
   */
  function handleGrowParam(container, grow) {
    if (!grow) {
      return;
    }
    addClass(container, swalClasses[`grow-${grow}`]);
  }

  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */

  var privateProps = {
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };

  /// <reference path="../../../../sweetalert2.d.ts"/>


  /** @type {InputClass[]} */
  const inputClasses = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderInput = (instance, params) => {
    const popup = getPopup();
    if (!popup) {
      return;
    }
    const innerParams = privateProps.innerParams.get(instance);
    const rerender = !innerParams || params.input !== innerParams.input;
    inputClasses.forEach(inputClass => {
      const inputContainer = getDirectChildByClass(popup, swalClasses[inputClass]);
      if (!inputContainer) {
        return;
      }

      // set attributes
      setAttributes(inputClass, params.inputAttributes);

      // set class
      inputContainer.className = swalClasses[inputClass];
      if (rerender) {
        hide(inputContainer);
      }
    });
    if (params.input) {
      if (rerender) {
        showInput(params);
      }
      // set custom class
      setCustomClass(params);
    }
  };

  /**
   * @param {SweetAlertOptions} params
   */
  const showInput = params => {
    if (!params.input) {
      return;
    }
    if (!renderInputType[params.input]) {
      error(`Unexpected type of input! Expected ${Object.keys(renderInputType).join(' | ')}, got "${params.input}"`);
      return;
    }
    const inputContainer = getInputContainer(params.input);
    if (!inputContainer) {
      return;
    }
    const input = renderInputType[params.input](inputContainer, params);
    show(inputContainer);

    // input autofocus
    if (params.inputAutoFocus) {
      setTimeout(() => {
        focusInput(input);
      });
    }
  };

  /**
   * @param {HTMLInputElement} input
   */
  const removeAttributes = input => {
    for (let i = 0; i < input.attributes.length; i++) {
      const attrName = input.attributes[i].name;
      if (!['id', 'type', 'value', 'style'].includes(attrName)) {
        input.removeAttribute(attrName);
      }
    }
  };

  /**
   * @param {InputClass} inputClass
   * @param {SweetAlertOptions['inputAttributes']} inputAttributes
   */
  const setAttributes = (inputClass, inputAttributes) => {
    const popup = getPopup();
    if (!popup) {
      return;
    }
    const input = getInput$1(popup, inputClass);
    if (!input) {
      return;
    }
    removeAttributes(input);
    for (const attr in inputAttributes) {
      input.setAttribute(attr, inputAttributes[attr]);
    }
  };

  /**
   * @param {SweetAlertOptions} params
   */
  const setCustomClass = params => {
    if (!params.input) {
      return;
    }
    const inputContainer = getInputContainer(params.input);
    if (inputContainer) {
      applyCustomClass(inputContainer, params, 'input');
    }
  };

  /**
   * @param {HTMLInputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions} params
   */
  const setInputPlaceholder = (input, params) => {
    if (!input.placeholder && params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };

  /**
   * @param {Input} input
   * @param {Input} prependTo
   * @param {SweetAlertOptions} params
   */
  const setInputLabel = (input, prependTo, params) => {
    if (params.inputLabel) {
      const label = document.createElement('label');
      const labelClass = swalClasses['input-label'];
      label.setAttribute('for', input.id);
      label.className = labelClass;
      if (typeof params.customClass === 'object') {
        addClass(label, params.customClass.inputLabel);
      }
      label.innerText = params.inputLabel;
      prependTo.insertAdjacentElement('beforebegin', label);
    }
  };

  /**
   * @param {SweetAlertInput} inputType
   * @returns {HTMLElement | undefined}
   */
  const getInputContainer = inputType => {
    const popup = getPopup();
    if (!popup) {
      return;
    }
    return getDirectChildByClass(popup, swalClasses[(/** @type {SwalClass} */inputType)] || swalClasses.input);
  };

  /**
   * @param {HTMLInputElement | HTMLOutputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions['inputValue']} inputValue
   */
  const checkAndSetInputValue = (input, inputValue) => {
    if (['string', 'number'].includes(typeof inputValue)) {
      input.value = `${inputValue}`;
    } else if (!isPromise(inputValue)) {
      warn(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof inputValue}"`);
    }
  };

  /** @type {Record<SweetAlertInput, (input: Input | HTMLElement, params: SweetAlertOptions) => Input>} */
  const renderInputType = {};

  /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = renderInputType.search = renderInputType.date = renderInputType['datetime-local'] = renderInputType.time = renderInputType.week = renderInputType.month = /** @type {(input: Input | HTMLElement, params: SweetAlertOptions) => Input} */
  (input, params) => {
    checkAndSetInputValue(input, params.inputValue);
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };

  /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.file = (input, params) => {
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    return input;
  };

  /**
   * @param {HTMLInputElement} range
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.range = (range, params) => {
    const rangeInput = range.querySelector('input');
    const rangeOutput = range.querySelector('output');
    checkAndSetInputValue(rangeInput, params.inputValue);
    rangeInput.type = params.input;
    checkAndSetInputValue(rangeOutput, params.inputValue);
    setInputLabel(rangeInput, range, params);
    return range;
  };

  /**
   * @param {HTMLSelectElement} select
   * @param {SweetAlertOptions} params
   * @returns {HTMLSelectElement}
   */
  renderInputType.select = (select, params) => {
    select.textContent = '';
    if (params.inputPlaceholder) {
      const placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }
    setInputLabel(select, select, params);
    return select;
  };

  /**
   * @param {HTMLInputElement} radio
   * @returns {HTMLInputElement}
   */
  renderInputType.radio = radio => {
    radio.textContent = '';
    return radio;
  };

  /**
   * @param {HTMLLabelElement} checkboxContainer
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.checkbox = (checkboxContainer, params) => {
    const checkbox = getInput$1(getPopup(), 'checkbox');
    checkbox.value = '1';
    checkbox.checked = Boolean(params.inputValue);
    const label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder || params.inputLabel);
    return checkbox;
  };

  /**
   * @param {HTMLTextAreaElement} textarea
   * @param {SweetAlertOptions} params
   * @returns {HTMLTextAreaElement}
   */
  renderInputType.textarea = (textarea, params) => {
    checkAndSetInputValue(textarea, params.inputValue);
    setInputPlaceholder(textarea, params);
    setInputLabel(textarea, textarea, params);

    /**
     * @param {HTMLElement} el
     * @returns {number}
     */
    const getMargin = el => parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight);

    // https://github.com/sweetalert2/sweetalert2/issues/2291
    setTimeout(() => {
      // https://github.com/sweetalert2/sweetalert2/issues/1699
      if ('MutationObserver' in window) {
        const initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
        const textareaResizeHandler = () => {
          // check if texarea is still in document (i.e. popup wasn't closed in the meantime)
          if (!document.body.contains(textarea)) {
            return;
          }
          const textareaWidth = textarea.offsetWidth + getMargin(textarea);
          if (textareaWidth > initialPopupWidth) {
            getPopup().style.width = `${textareaWidth}px`;
          } else {
            applyNumericalStyle(getPopup(), 'width', params.width);
          }
        };
        new MutationObserver(textareaResizeHandler).observe(textarea, {
          attributes: true,
          attributeFilter: ['style']
        });
      }
    });
    return textarea;
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderContent = (instance, params) => {
    const htmlContainer = getHtmlContainer();
    if (!htmlContainer) {
      return;
    }
    showWhenInnerHtmlPresent(htmlContainer);
    applyCustomClass(htmlContainer, params, 'htmlContainer');

    // Content as HTML
    if (params.html) {
      parseHtmlToContainer(params.html, htmlContainer);
      show(htmlContainer, 'block');
    }

    // Content as plain text
    else if (params.text) {
      htmlContainer.textContent = params.text;
      show(htmlContainer, 'block');
    }

    // No content
    else {
      hide(htmlContainer);
    }
    renderInput(instance, params);
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderFooter = (instance, params) => {
    const footer = getFooter();
    if (!footer) {
      return;
    }
    showWhenInnerHtmlPresent(footer);
    toggle(footer, params.footer, 'block');
    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    }

    // Custom class
    applyCustomClass(footer, params, 'footer');
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderIcon = (instance, params) => {
    const innerParams = privateProps.innerParams.get(instance);
    const icon = getIcon();
    if (!icon) {
      return;
    }

    // if the given icon already rendered, apply the styling without re-rendering the icon
    if (innerParams && params.icon === innerParams.icon) {
      // Custom or default content
      setContent(icon, params);
      applyStyles(icon, params);
      return;
    }
    if (!params.icon && !params.iconHtml) {
      hide(icon);
      return;
    }
    if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
      error(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${params.icon}"`);
      hide(icon);
      return;
    }
    show(icon);

    // Custom or default content
    setContent(icon, params);
    applyStyles(icon, params);

    // Animate icon
    addClass(icon, params.showClass && params.showClass.icon);

    // Re-adjust the success icon on system theme change
    const colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    colorSchemeQueryList.addEventListener('change', adjustSuccessIconBackgroundColor);
  };

  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */
  const applyStyles = (icon, params) => {
    for (const [iconType, iconClassName] of Object.entries(iconTypes)) {
      if (params.icon !== iconType) {
        removeClass(icon, iconClassName);
      }
    }
    addClass(icon, params.icon && iconTypes[params.icon]);

    // Icon color
    setColor(icon, params);

    // Success icon background color
    adjustSuccessIconBackgroundColor();

    // Custom class
    applyCustomClass(icon, params, 'icon');
  };

  // Adjust success icon background color to match the popup background color
  const adjustSuccessIconBackgroundColor = () => {
    const popup = getPopup();
    if (!popup) {
      return;
    }
    const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    /** @type {NodeListOf<HTMLElement>} */
    const successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
    for (let i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };
  const successIconHtml = `
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`;
  const errorIconHtml = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`;

  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */
  const setContent = (icon, params) => {
    if (!params.icon && !params.iconHtml) {
      return;
    }
    let oldContent = icon.innerHTML;
    let newContent = '';
    if (params.iconHtml) {
      newContent = iconContent(params.iconHtml);
    } else if (params.icon === 'success') {
      newContent = successIconHtml;
      oldContent = oldContent.replace(/ style=".*?"/g, ''); // undo adjustSuccessIconBackgroundColor()
    } else if (params.icon === 'error') {
      newContent = errorIconHtml;
    } else if (params.icon) {
      const defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      newContent = iconContent(defaultIconHtml[params.icon]);
    }
    if (oldContent.trim() !== newContent.trim()) {
      setInnerHtml(icon, newContent);
    }
  };

  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */
  const setColor = (icon, params) => {
    if (!params.iconColor) {
      return;
    }
    icon.style.color = params.iconColor;
    icon.style.borderColor = params.iconColor;
    for (const sel of ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']) {
      setStyle(icon, sel, 'background-color', params.iconColor);
    }
    setStyle(icon, '.swal2-success-ring', 'border-color', params.iconColor);
  };

  /**
   * @param {string} content
   * @returns {string}
   */
  const iconContent = content => `<div class="${swalClasses['icon-content']}">${content}</div>`;

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderImage = (instance, params) => {
    const image = getImage();
    if (!image) {
      return;
    }
    if (!params.imageUrl) {
      hide(image);
      return;
    }
    show(image, '');

    // Src, alt
    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt || '');

    // Width, height
    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight);

    // Class
    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };

  let dragging = false;
  let mousedownX = 0;
  let mousedownY = 0;
  let initialX = 0;
  let initialY = 0;

  /**
   * @param {HTMLElement} popup
   */
  const addDraggableListeners = popup => {
    popup.addEventListener('mousedown', down);
    document.body.addEventListener('mousemove', move);
    popup.addEventListener('mouseup', up);
    popup.addEventListener('touchstart', down);
    document.body.addEventListener('touchmove', move);
    popup.addEventListener('touchend', up);
  };

  /**
   * @param {HTMLElement} popup
   */
  const removeDraggableListeners = popup => {
    popup.removeEventListener('mousedown', down);
    document.body.removeEventListener('mousemove', move);
    popup.removeEventListener('mouseup', up);
    popup.removeEventListener('touchstart', down);
    document.body.removeEventListener('touchmove', move);
    popup.removeEventListener('touchend', up);
  };

  /**
   * @param {MouseEvent | TouchEvent} event
   */
  const down = event => {
    const popup = getPopup();
    if (event.target === popup || getIcon().contains(/** @type {HTMLElement} */event.target)) {
      dragging = true;
      const clientXY = getClientXY(event);
      mousedownX = clientXY.clientX;
      mousedownY = clientXY.clientY;
      initialX = parseInt(popup.style.insetInlineStart) || 0;
      initialY = parseInt(popup.style.insetBlockStart) || 0;
      addClass(popup, 'swal2-dragging');
    }
  };

  /**
   * @param {MouseEvent | TouchEvent} event
   */
  const move = event => {
    const popup = getPopup();
    if (dragging) {
      let {
        clientX,
        clientY
      } = getClientXY(event);
      popup.style.insetInlineStart = `${initialX + (clientX - mousedownX)}px`;
      popup.style.insetBlockStart = `${initialY + (clientY - mousedownY)}px`;
    }
  };
  const up = () => {
    const popup = getPopup();
    dragging = false;
    removeClass(popup, 'swal2-dragging');
  };

  /**
   * @param {MouseEvent | TouchEvent} event
   * @returns {{ clientX: number, clientY: number }}
   */
  const getClientXY = event => {
    let clientX = 0,
      clientY = 0;
    if (event.type.startsWith('mouse')) {
      clientX = /** @type {MouseEvent} */event.clientX;
      clientY = /** @type {MouseEvent} */event.clientY;
    } else if (event.type.startsWith('touch')) {
      clientX = /** @type {TouchEvent} */event.touches[0].clientX;
      clientY = /** @type {TouchEvent} */event.touches[0].clientY;
    }
    return {
      clientX,
      clientY
    };
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderPopup = (instance, params) => {
    const container = getContainer();
    const popup = getPopup();
    if (!container || !popup) {
      return;
    }

    // Width
    // https://github.com/sweetalert2/sweetalert2/issues/2170
    if (params.toast) {
      applyNumericalStyle(container, 'width', params.width);
      popup.style.width = '100%';
      const loader = getLoader();
      if (loader) {
        popup.insertBefore(loader, getIcon());
      }
    } else {
      applyNumericalStyle(popup, 'width', params.width);
    }

    // Padding
    applyNumericalStyle(popup, 'padding', params.padding);

    // Color
    if (params.color) {
      popup.style.color = params.color;
    }

    // Background
    if (params.background) {
      popup.style.background = params.background;
    }
    hide(getValidationMessage());

    // Classes
    addClasses$1(popup, params);
    if (params.draggable && !params.toast) {
      addClass(popup, swalClasses.draggable);
      addDraggableListeners(popup);
    } else {
      removeClass(popup, swalClasses.draggable);
      removeDraggableListeners(popup);
    }
  };

  /**
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */
  const addClasses$1 = (popup, params) => {
    const showClass = params.showClass || {};
    // Default Class + showClass when updating Swal.update({})
    popup.className = `${swalClasses.popup} ${isVisible$1(popup) ? showClass.popup : ''}`;
    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    }

    // Custom class
    applyCustomClass(popup, params, 'popup');
    // TODO: remove in the next major
    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    }

    // Icon class (#1842)
    if (params.icon) {
      addClass(popup, swalClasses[`icon-${params.icon}`]);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderProgressSteps = (instance, params) => {
    const progressStepsContainer = getProgressSteps();
    if (!progressStepsContainer) {
      return;
    }
    const {
      progressSteps,
      currentProgressStep
    } = params;
    if (!progressSteps || progressSteps.length === 0 || currentProgressStep === undefined) {
      hide(progressStepsContainer);
      return;
    }
    show(progressStepsContainer);
    progressStepsContainer.textContent = '';
    if (currentProgressStep >= progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }
    progressSteps.forEach((step, index) => {
      const stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);
      if (index === currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }
      if (index !== progressSteps.length - 1) {
        const lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };

  /**
   * @param {string} step
   * @returns {HTMLLIElement}
   */
  const createStepElement = step => {
    const stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };

  /**
   * @param {SweetAlertOptions} params
   * @returns {HTMLLIElement}
   */
  const createLineElement = params => {
    const lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);
    if (params.progressStepsDistance) {
      applyNumericalStyle(lineEl, 'width', params.progressStepsDistance);
    }
    return lineEl;
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderTitle = (instance, params) => {
    const title = getTitle();
    if (!title) {
      return;
    }
    showWhenInnerHtmlPresent(title);
    toggle(title, params.title || params.titleText, 'block');
    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }
    if (params.titleText) {
      title.innerText = params.titleText;
    }

    // Custom class
    applyCustomClass(title, params, 'title');
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const render = (instance, params) => {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderProgressSteps(instance, params);
    renderIcon(instance, params);
    renderImage(instance, params);
    renderTitle(instance, params);
    renderCloseButton(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);
    const popup = getPopup();
    if (typeof params.didRender === 'function' && popup) {
      params.didRender(popup);
    }
    globalState.eventEmitter.emit('didRender', popup);
  };

  /*
   * Global function to determine if SweetAlert2 popup is shown
   */
  const isVisible = () => {
    return isVisible$1(getPopup());
  };

  /*
   * Global function to click 'Confirm' button
   */
  const clickConfirm = () => {
    var _dom$getConfirmButton;
    return (_dom$getConfirmButton = getConfirmButton()) === null || _dom$getConfirmButton === void 0 ? void 0 : _dom$getConfirmButton.click();
  };

  /*
   * Global function to click 'Deny' button
   */
  const clickDeny = () => {
    var _dom$getDenyButton;
    return (_dom$getDenyButton = getDenyButton()) === null || _dom$getDenyButton === void 0 ? void 0 : _dom$getDenyButton.click();
  };

  /*
   * Global function to click 'Cancel' button
   */
  const clickCancel = () => {
    var _dom$getCancelButton;
    return (_dom$getCancelButton = getCancelButton()) === null || _dom$getCancelButton === void 0 ? void 0 : _dom$getCancelButton.click();
  };

  /** @typedef {'cancel' | 'backdrop' | 'close' | 'esc' | 'timer'} DismissReason */

  /** @type {Record<DismissReason, DismissReason>} */
  const DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  /**
   * @param {GlobalState} globalState
   */
  const removeKeydownHandler = globalState => {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }
  };

  /**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {*} dismissWith
   */
  const addKeydownHandler = (globalState, innerParams, dismissWith) => {
    removeKeydownHandler(globalState);
    if (!innerParams.toast) {
      globalState.keydownHandler = e => keydownHandler(innerParams, e, dismissWith);
      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  };

  /**
   * @param {number} index
   * @param {number} increment
   */
  const setFocus = (index, increment) => {
    var _dom$getPopup;
    const focusableElements = getFocusableElements();
    // search for visible elements and select the next possible match
    if (focusableElements.length) {
      index = index + increment;

      // shift + tab when .swal2-popup is focused
      if (index === -2) {
        index = focusableElements.length - 1;
      }

      // rollover to first item
      if (index === focusableElements.length) {
        index = 0;

        // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }
      focusableElements[index].focus();
      return;
    }
    // no visible focusable elements, focus the popup
    (_dom$getPopup = getPopup()) === null || _dom$getPopup === void 0 || _dom$getPopup.focus();
  };
  const arrowKeysNextButton = ['ArrowRight', 'ArrowDown'];
  const arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp'];

  /**
   * @param {SweetAlertOptions} innerParams
   * @param {KeyboardEvent} event
   * @param {Function} dismissWith
   */
  const keydownHandler = (innerParams, event, dismissWith) => {
    if (!innerParams) {
      return; // This instance has already been destroyed
    }

    // Ignore keydown during IME composition
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event#ignoring_keydown_during_ime_composition
    // https://github.com/sweetalert2/sweetalert2/issues/720
    // https://github.com/sweetalert2/sweetalert2/issues/2406
    if (event.isComposing || event.keyCode === 229) {
      return;
    }
    if (innerParams.stopKeydownPropagation) {
      event.stopPropagation();
    }

    // ENTER
    if (event.key === 'Enter') {
      handleEnter(event, innerParams);
    }

    // TAB
    else if (event.key === 'Tab') {
      handleTab(event);
    }

    // ARROWS - switch focus between buttons
    else if ([...arrowKeysNextButton, ...arrowKeysPreviousButton].includes(event.key)) {
      handleArrows(event.key);
    }

    // ESC
    else if (event.key === 'Escape') {
      handleEsc(event, innerParams, dismissWith);
    }
  };

  /**
   * @param {KeyboardEvent} event
   * @param {SweetAlertOptions} innerParams
   */
  const handleEnter = (event, innerParams) => {
    // https://github.com/sweetalert2/sweetalert2/issues/2386
    if (!callIfFunction(innerParams.allowEnterKey)) {
      return;
    }
    const input = getInput$1(getPopup(), innerParams.input);
    if (event.target && input && event.target instanceof HTMLElement && event.target.outerHTML === input.outerHTML) {
      if (['textarea', 'file'].includes(innerParams.input)) {
        return; // do not submit
      }
      clickConfirm();
      event.preventDefault();
    }
  };

  /**
   * @param {KeyboardEvent} event
   */
  const handleTab = event => {
    const targetElement = event.target;
    const focusableElements = getFocusableElements();
    let btnIndex = -1;
    for (let i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    }

    // Cycle to the next button
    if (!event.shiftKey) {
      setFocus(btnIndex, 1);
    }

    // Cycle to the prev button
    else {
      setFocus(btnIndex, -1);
    }
    event.stopPropagation();
    event.preventDefault();
  };

  /**
   * @param {string} key
   */
  const handleArrows = key => {
    const actions = getActions();
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton();
    if (!actions || !confirmButton || !denyButton || !cancelButton) {
      return;
    }
    /** @type HTMLElement[] */
    const buttons = [confirmButton, denyButton, cancelButton];
    if (document.activeElement instanceof HTMLElement && !buttons.includes(document.activeElement)) {
      return;
    }
    const sibling = arrowKeysNextButton.includes(key) ? 'nextElementSibling' : 'previousElementSibling';
    let buttonToFocus = document.activeElement;
    if (!buttonToFocus) {
      return;
    }
    for (let i = 0; i < actions.children.length; i++) {
      buttonToFocus = buttonToFocus[sibling];
      if (!buttonToFocus) {
        return;
      }
      if (buttonToFocus instanceof HTMLButtonElement && isVisible$1(buttonToFocus)) {
        break;
      }
    }
    if (buttonToFocus instanceof HTMLButtonElement) {
      buttonToFocus.focus();
    }
  };

  /**
   * @param {KeyboardEvent} event
   * @param {SweetAlertOptions} innerParams
   * @param {Function} dismissWith
   */
  const handleEsc = (event, innerParams, dismissWith) => {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      event.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };

  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */

  var privateMethods = {
    swalPromiseResolve: new WeakMap(),
    swalPromiseReject: new WeakMap()
  };

  // From https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/
  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  const setAriaHidden = () => {
    const container = getContainer();
    const bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(el => {
      if (el.contains(container)) {
        return;
      }
      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden') || '');
      }
      el.setAttribute('aria-hidden', 'true');
    });
  };
  const unsetAriaHidden = () => {
    const bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(el => {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden') || '');
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  // @ts-ignore
  const isSafariOrIOS = typeof window !== 'undefined' && !!window.GestureEvent; // true for Safari desktop + all iOS browsers https://stackoverflow.com/a/70585394

  /**
   * Fix iOS scrolling
   * http://stackoverflow.com/q/39626302
   */
  const iOSfix = () => {
    if (isSafariOrIOS && !hasClass(document.body, swalClasses.iosfix)) {
      const offset = document.body.scrollTop;
      document.body.style.top = `${offset * -1}px`;
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
    }
  };

  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1246
   */
  const lockBodyScroll = () => {
    const container = getContainer();
    if (!container) {
      return;
    }
    /** @type {boolean} */
    let preventTouchMove;
    /**
     * @param {TouchEvent} event
     */
    container.ontouchstart = event => {
      preventTouchMove = shouldPreventTouchMove(event);
    };
    /**
     * @param {TouchEvent} event
     */
    container.ontouchmove = event => {
      if (preventTouchMove) {
        event.preventDefault();
        event.stopPropagation();
      }
    };
  };

  /**
   * @param {TouchEvent} event
   * @returns {boolean}
   */
  const shouldPreventTouchMove = event => {
    const target = event.target;
    const container = getContainer();
    const htmlContainer = getHtmlContainer();
    if (!container || !htmlContainer) {
      return false;
    }
    if (isStylus(event) || isZoom(event)) {
      return false;
    }
    if (target === container) {
      return true;
    }
    if (!isScrollable(container) && target instanceof HTMLElement && target.tagName !== 'INPUT' &&
    // #1603
    target.tagName !== 'TEXTAREA' &&
    // #2266
    !(isScrollable(htmlContainer) &&
    // #1944
    htmlContainer.contains(target))) {
      return true;
    }
    return false;
  };

  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1786
   *
   * @param {*} event
   * @returns {boolean}
   */
  const isStylus = event => {
    return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
  };

  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1891
   *
   * @param {TouchEvent} event
   * @returns {boolean}
   */
  const isZoom = event => {
    return event.touches && event.touches.length > 1;
  };
  const undoIOSfix = () => {
    if (hasClass(document.body, swalClasses.iosfix)) {
      const offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  /**
   * Measure scrollbar width for padding body during modal show/hide
   * https://github.com/twbs/bootstrap/blob/master/js/src/modal.js
   *
   * @returns {number}
   */
  const measureScrollbar = () => {
    const scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  /**
   * Remember state in cases where opening and handling a modal will fiddle with it.
   * @type {number | null}
   */
  let previousBodyPadding = null;

  /**
   * @param {string} initialBodyOverflow
   */
  const replaceScrollbarWithPadding = initialBodyOverflow => {
    // for queues, do not do this more than once
    if (previousBodyPadding !== null) {
      return;
    }
    // if the body has overflow
    if (document.body.scrollHeight > window.innerHeight || initialBodyOverflow === 'scroll' // https://github.com/sweetalert2/sweetalert2/issues/2663
    ) {
      // add padding so the content doesn't shift after removal of scrollbar
      previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = `${previousBodyPadding + measureScrollbar()}px`;
    }
  };
  const undoReplaceScrollbarWithPadding = () => {
    if (previousBodyPadding !== null) {
      document.body.style.paddingRight = `${previousBodyPadding}px`;
      previousBodyPadding = null;
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} container
   * @param {boolean} returnFocus
   * @param {Function} didClose
   */
  function removePopupAndResetState(instance, container, returnFocus, didClose) {
    if (isToast()) {
      triggerDidCloseAndDispose(instance, didClose);
    } else {
      restoreActiveElement(returnFocus).then(() => triggerDidCloseAndDispose(instance, didClose));
      removeKeydownHandler(globalState);
    }

    // workaround for https://github.com/sweetalert2/sweetalert2/issues/2088
    // for some reason removing the container in Safari will scroll the document to bottom
    if (isSafariOrIOS) {
      container.setAttribute('style', 'display:none !important');
      container.removeAttribute('class');
      container.innerHTML = '';
    } else {
      container.remove();
    }
    if (isModal()) {
      undoReplaceScrollbarWithPadding();
      undoIOSfix();
      unsetAriaHidden();
    }
    removeBodyClasses();
  }

  /**
   * Remove SweetAlert2 classes from body
   */
  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown']]);
  }

  /**
   * Instance method to close sweetAlert
   *
   * @param {any} resolveValue
   */
  function close(resolveValue) {
    resolveValue = prepareResolveValue(resolveValue);
    const swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    const didClose = triggerClosePopup(this);
    if (this.isAwaitingPromise) {
      // A swal awaiting for a promise (after a click on Confirm or Deny) cannot be dismissed anymore #2335
      if (!resolveValue.isDismissed) {
        handleAwaitingPromise(this);
        swalPromiseResolve(resolveValue);
      }
    } else if (didClose) {
      // Resolve Swal promise
      swalPromiseResolve(resolveValue);
    }
  }
  const triggerClosePopup = instance => {
    const popup = getPopup();
    if (!popup) {
      return false;
    }
    const innerParams = privateProps.innerParams.get(instance);
    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return false;
    }
    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    const backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(instance, popup, innerParams);
    return true;
  };

  /**
   * @param {any} error
   */
  function rejectPromise(error) {
    const rejectPromise = privateMethods.swalPromiseReject.get(this);
    handleAwaitingPromise(this);
    if (rejectPromise) {
      // Reject Swal promise
      rejectPromise(error);
    }
  }

  /**
   * @param {SweetAlert} instance
   */
  const handleAwaitingPromise = instance => {
    if (instance.isAwaitingPromise) {
      delete instance.isAwaitingPromise;
      // The instance might have been previously partly destroyed, we must resume the destroy process in this case #2335
      if (!privateProps.innerParams.get(instance)) {
        instance._destroy();
      }
    }
  };

  /**
   * @param {any} resolveValue
   * @returns {SweetAlertResult}
   */
  const prepareResolveValue = resolveValue => {
    // When user calls Swal.close()
    if (typeof resolveValue === 'undefined') {
      return {
        isConfirmed: false,
        isDenied: false,
        isDismissed: true
      };
    }
    return Object.assign({
      isConfirmed: false,
      isDenied: false,
      isDismissed: false
    }, resolveValue);
  };

  /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} innerParams
   */
  const handlePopupAnimation = (instance, popup, innerParams) => {
    var _globalState$eventEmi;
    const container = getContainer();
    // If animation is supported, animate
    const animationIsSupported = hasCssAnimation(popup);
    if (typeof innerParams.willClose === 'function') {
      innerParams.willClose(popup);
    }
    (_globalState$eventEmi = globalState.eventEmitter) === null || _globalState$eventEmi === void 0 || _globalState$eventEmi.emit('willClose', popup);
    if (animationIsSupported) {
      animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} popup
   * @param {HTMLElement} container
   * @param {boolean} returnFocus
   * @param {Function} didClose
   */
  const animatePopup = (instance, popup, container, returnFocus, didClose) => {
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
    /**
     * @param {AnimationEvent | TransitionEvent} e
     */
    const swalCloseAnimationFinished = function (e) {
      if (e.target === popup) {
        var _globalState$swalClos;
        (_globalState$swalClos = globalState.swalCloseEventFinishedCallback) === null || _globalState$swalClos === void 0 || _globalState$swalClos.call(globalState);
        delete globalState.swalCloseEventFinishedCallback;
        popup.removeEventListener('animationend', swalCloseAnimationFinished);
        popup.removeEventListener('transitionend', swalCloseAnimationFinished);
      }
    };
    popup.addEventListener('animationend', swalCloseAnimationFinished);
    popup.addEventListener('transitionend', swalCloseAnimationFinished);
  };

  /**
   * @param {SweetAlert} instance
   * @param {Function} didClose
   */
  const triggerDidCloseAndDispose = (instance, didClose) => {
    setTimeout(() => {
      var _globalState$eventEmi2;
      if (typeof didClose === 'function') {
        didClose.bind(instance.params)();
      }
      (_globalState$eventEmi2 = globalState.eventEmitter) === null || _globalState$eventEmi2 === void 0 || _globalState$eventEmi2.emit('didClose');
      // instance might have been destroyed already
      if (instance._destroy) {
        instance._destroy();
      }
    });
  };

  /**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   *
   * @param {HTMLButtonElement | null} [buttonToReplace]
   */
  const showLoading = buttonToReplace => {
    let popup = getPopup();
    if (!popup) {
      new Swal();
    }
    popup = getPopup();
    if (!popup) {
      return;
    }
    const loader = getLoader();
    if (isToast()) {
      hide(getIcon());
    } else {
      replaceButton(popup, buttonToReplace);
    }
    show(loader);
    popup.setAttribute('data-loading', 'true');
    popup.setAttribute('aria-busy', 'true');
    popup.focus();
  };

  /**
   * @param {HTMLElement} popup
   * @param {HTMLButtonElement | null} [buttonToReplace]
   */
  const replaceButton = (popup, buttonToReplace) => {
    const actions = getActions();
    const loader = getLoader();
    if (!actions || !loader) {
      return;
    }
    if (!buttonToReplace && isVisible$1(getConfirmButton())) {
      buttonToReplace = getConfirmButton();
    }
    show(actions);
    if (buttonToReplace) {
      hide(buttonToReplace);
      loader.setAttribute('data-button-to-replace', buttonToReplace.className);
      actions.insertBefore(loader, buttonToReplace);
    }
    addClass([popup, actions], swalClasses.loading);
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const handleInputOptionsAndValue = (instance, params) => {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].some(i => i === params.input) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      showLoading(getConfirmButton());
      handleInputValue(instance, params);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} innerParams
   * @returns {SweetAlertInputValue}
   */
  const getInputValue = (instance, innerParams) => {
    const input = instance.getInput();
    if (!input) {
      return null;
    }
    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);
      case 'radio':
        return getRadioValue(input);
      case 'file':
        return getFileValue(input);
      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };

  /**
   * @param {HTMLInputElement} input
   * @returns {number}
   */
  const getCheckboxValue = input => input.checked ? 1 : 0;

  /**
   * @param {HTMLInputElement} input
   * @returns {string | null}
   */
  const getRadioValue = input => input.checked ? input.value : null;

  /**
   * @param {HTMLInputElement} input
   * @returns {FileList | File | null}
   */
  const getFileValue = input => input.files && input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const handleInputOptions = (instance, params) => {
    const popup = getPopup();
    if (!popup) {
      return;
    }
    /**
     * @param {Record<string, any>} inputOptions
     */
    const processInputOptions = inputOptions => {
      if (params.input === 'select') {
        populateSelectOptions(popup, formatInputOptions(inputOptions), params);
      } else if (params.input === 'radio') {
        populateRadioOptions(popup, formatInputOptions(inputOptions), params);
      }
    };
    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading(getConfirmButton());
      asPromise(params.inputOptions).then(inputOptions => {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (typeof params.inputOptions === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof params.inputOptions}`);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const handleInputValue = (instance, params) => {
    const input = instance.getInput();
    if (!input) {
      return;
    }
    hide(input);
    asPromise(params.inputValue).then(inputValue => {
      input.value = params.input === 'number' ? `${parseFloat(inputValue) || 0}` : `${inputValue}`;
      show(input);
      input.focus();
      instance.hideLoading();
    }).catch(err => {
      error(`Error in inputValue promise: ${err}`);
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };

  /**
   * @param {HTMLElement} popup
   * @param {InputOptionFlattened[]} inputOptions
   * @param {SweetAlertOptions} params
   */
  function populateSelectOptions(popup, inputOptions, params) {
    const select = getDirectChildByClass(popup, swalClasses.select);
    if (!select) {
      return;
    }
    /**
     * @param {HTMLElement} parent
     * @param {string} optionLabel
     * @param {string} optionValue
     */
    const renderOption = (parent, optionLabel, optionValue) => {
      const option = document.createElement('option');
      option.value = optionValue;
      setInnerHtml(option, optionLabel);
      option.selected = isSelected(optionValue, params.inputValue);
      parent.appendChild(option);
    };
    inputOptions.forEach(inputOption => {
      const optionValue = inputOption[0];
      const optionLabel = inputOption[1];
      // <optgroup> spec:
      // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
      // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
      // check whether this is a <optgroup>
      if (Array.isArray(optionLabel)) {
        // if it is an array, then it is an <optgroup>
        const optgroup = document.createElement('optgroup');
        optgroup.label = optionValue;
        optgroup.disabled = false; // not configurable for now
        select.appendChild(optgroup);
        optionLabel.forEach(o => renderOption(optgroup, o[1], o[0]));
      } else {
        // case of <option>
        renderOption(select, optionLabel, optionValue);
      }
    });
    select.focus();
  }

  /**
   * @param {HTMLElement} popup
   * @param {InputOptionFlattened[]} inputOptions
   * @param {SweetAlertOptions} params
   */
  function populateRadioOptions(popup, inputOptions, params) {
    const radio = getDirectChildByClass(popup, swalClasses.radio);
    if (!radio) {
      return;
    }
    inputOptions.forEach(inputOption => {
      const radioValue = inputOption[0];
      const radioLabel = inputOption[1];
      const radioInput = document.createElement('input');
      const radioLabelElement = document.createElement('label');
      radioInput.type = 'radio';
      radioInput.name = swalClasses.radio;
      radioInput.value = radioValue;
      if (isSelected(radioValue, params.inputValue)) {
        radioInput.checked = true;
      }
      const label = document.createElement('span');
      setInnerHtml(label, radioLabel);
      label.className = swalClasses.label;
      radioLabelElement.appendChild(radioInput);
      radioLabelElement.appendChild(label);
      radio.appendChild(radioLabelElement);
    });
    const radios = radio.querySelectorAll('input');
    if (radios.length) {
      radios[0].focus();
    }
  }

  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   *
   * @param {Record<string, any>} inputOptions
   * @typedef {string[]} InputOptionFlattened
   * @returns {InputOptionFlattened[]}
   */
  const formatInputOptions = inputOptions => {
    /** @type {InputOptionFlattened[]} */
    const result = [];
    if (inputOptions instanceof Map) {
      inputOptions.forEach((value, key) => {
        let valueFormatted = value;
        if (typeof valueFormatted === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }
        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach(key => {
        let valueFormatted = inputOptions[key];
        if (typeof valueFormatted === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }
        result.push([key, valueFormatted]);
      });
    }
    return result;
  };

  /**
   * @param {string} optionValue
   * @param {SweetAlertInputValue} inputValue
   * @returns {boolean}
   */
  const isSelected = (optionValue, inputValue) => {
    return !!inputValue && inputValue.toString() === optionValue.toString();
  };

  /**
   * @param {SweetAlert} instance
   */
  const handleConfirmButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();
    if (innerParams.input) {
      handleConfirmOrDenyWithInput(instance, 'confirm');
    } else {
      confirm(instance, true);
    }
  };

  /**
   * @param {SweetAlert} instance
   */
  const handleDenyButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();
    if (innerParams.returnInputValueOnDeny) {
      handleConfirmOrDenyWithInput(instance, 'deny');
    } else {
      deny(instance, false);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {Function} dismissWith
   */
  const handleCancelButtonClick = (instance, dismissWith) => {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };

  /**
   * @param {SweetAlert} instance
   * @param {'confirm' | 'deny'} type
   */
  const handleConfirmOrDenyWithInput = (instance, type) => {
    const innerParams = privateProps.innerParams.get(instance);
    if (!innerParams.input) {
      error(`The "input" parameter is needed to be set when using returnInputValueOn${capitalizeFirstLetter(type)}`);
      return;
    }
    const input = instance.getInput();
    const inputValue = getInputValue(instance, innerParams);
    if (innerParams.inputValidator) {
      handleInputValidator(instance, inputValue, type);
    } else if (input && !input.checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage || input.validationMessage);
    } else if (type === 'deny') {
      deny(instance, inputValue);
    } else {
      confirm(instance, inputValue);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertInputValue} inputValue
   * @param {'confirm' | 'deny'} type
   */
  const handleInputValidator = (instance, inputValue, type) => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableInput();
    const validationPromise = Promise.resolve().then(() => asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage)));
    validationPromise.then(validationMessage => {
      instance.enableButtons();
      instance.enableInput();
      if (validationMessage) {
        instance.showValidationMessage(validationMessage);
      } else if (type === 'deny') {
        deny(instance, inputValue);
      } else {
        confirm(instance, inputValue);
      }
    });
  };

  /**
   * @param {SweetAlert} instance
   * @param {any} value
   */
  const deny = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);
    if (innerParams.showLoaderOnDeny) {
      showLoading(getDenyButton());
    }
    if (innerParams.preDeny) {
      instance.isAwaitingPromise = true; // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preDeny's promise is received
      const preDenyPromise = Promise.resolve().then(() => asPromise(innerParams.preDeny(value, innerParams.validationMessage)));
      preDenyPromise.then(preDenyValue => {
        if (preDenyValue === false) {
          instance.hideLoading();
          handleAwaitingPromise(instance);
        } else {
          instance.close({
            isDenied: true,
            value: typeof preDenyValue === 'undefined' ? value : preDenyValue
          });
        }
      }).catch(error => rejectWith(instance || undefined, error));
    } else {
      instance.close({
        isDenied: true,
        value
      });
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {any} value
   */
  const succeedWith = (instance, value) => {
    instance.close({
      isConfirmed: true,
      value
    });
  };

  /**
   *
   * @param {SweetAlert} instance
   * @param {string} error
   */
  const rejectWith = (instance, error) => {
    instance.rejectPromise(error);
  };

  /**
   *
   * @param {SweetAlert} instance
   * @param {any} value
   */
  const confirm = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);
    if (innerParams.showLoaderOnConfirm) {
      showLoading();
    }
    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      instance.isAwaitingPromise = true; // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preConfirm's promise is received
      const preConfirmPromise = Promise.resolve().then(() => asPromise(innerParams.preConfirm(value, innerParams.validationMessage)));
      preConfirmPromise.then(preConfirmValue => {
        if (isVisible$1(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
          handleAwaitingPromise(instance);
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      }).catch(error => rejectWith(instance || undefined, error));
    } else {
      succeedWith(instance, value);
    }
  };

  /**
   * Hides loader and shows back the button which was hidden by .showLoading()
   */
  function hideLoading() {
    // do nothing if popup is closed
    const innerParams = privateProps.innerParams.get(this);
    if (!innerParams) {
      return;
    }
    const domCache = privateProps.domCache.get(this);
    hide(domCache.loader);
    if (isToast()) {
      if (innerParams.icon) {
        show(getIcon());
      }
    } else {
      showRelatedButton(domCache);
    }
    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.denyButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }
  const showRelatedButton = domCache => {
    const buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));
    if (buttonToReplace.length) {
      show(buttonToReplace[0], 'inline-block');
    } else if (allButtonsAreHidden()) {
      hide(domCache.actions);
    }
  };

  /**
   * Gets the input DOM node, this method works with input parameter.
   *
   * @returns {HTMLInputElement | null}
   */
  function getInput() {
    const innerParams = privateProps.innerParams.get(this);
    const domCache = privateProps.domCache.get(this);
    if (!domCache) {
      return null;
    }
    return getInput$1(domCache.popup, innerParams.input);
  }

  /**
   * @param {SweetAlert} instance
   * @param {string[]} buttons
   * @param {boolean} disabled
   */
  function setButtonsDisabled(instance, buttons, disabled) {
    const domCache = privateProps.domCache.get(instance);
    buttons.forEach(button => {
      domCache[button].disabled = disabled;
    });
  }

  /**
   * @param {HTMLInputElement | null} input
   * @param {boolean} disabled
   */
  function setInputDisabled(input, disabled) {
    const popup = getPopup();
    if (!popup || !input) {
      return;
    }
    if (input.type === 'radio') {
      /** @type {NodeListOf<HTMLInputElement>} */
      const radios = popup.querySelectorAll(`[name="${swalClasses.radio}"]`);
      for (let i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }

  /**
   * Enable all the buttons
   * @this {SweetAlert}
   */
  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
  }

  /**
   * Disable all the buttons
   * @this {SweetAlert}
   */
  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
  }

  /**
   * Enable the input field
   * @this {SweetAlert}
   */
  function enableInput() {
    setInputDisabled(this.getInput(), false);
  }

  /**
   * Disable the input field
   * @this {SweetAlert}
   */
  function disableInput() {
    setInputDisabled(this.getInput(), true);
  }

  /**
   * Show block with validation message
   *
   * @param {string} error
   * @this {SweetAlert}
   */
  function showValidationMessage(error) {
    const domCache = privateProps.domCache.get(this);
    const params = privateProps.innerParams.get(this);
    setInnerHtml(domCache.validationMessage, error);
    domCache.validationMessage.className = swalClasses['validation-message'];
    if (params.customClass && params.customClass.validationMessage) {
      addClass(domCache.validationMessage, params.customClass.validationMessage);
    }
    show(domCache.validationMessage);
    const input = this.getInput();
    if (input) {
      input.setAttribute('aria-invalid', 'true');
      input.setAttribute('aria-describedby', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  }

  /**
   * Hide block with validation message
   *
   * @this {SweetAlert}
   */
  function resetValidationMessage() {
    const domCache = privateProps.domCache.get(this);
    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }
    const input = this.getInput();
    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedby');
      removeClass(input, swalClasses.inputerror);
    }
  }

  const defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconColor: undefined,
    iconHtml: undefined,
    template: undefined,
    toast: false,
    draggable: false,
    animation: true,
    theme: 'light',
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: {},
    target: 'body',
    color: undefined,
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: false,
    preConfirm: undefined,
    preDeny: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    denyButtonText: 'No',
    denyButtonAriaLabel: '',
    denyButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusDeny: false,
    focusCancel: false,
    returnFocus: true,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    loaderHtml: '',
    showLoaderOnConfirm: false,
    showLoaderOnDeny: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputLabel: '',
    inputValue: '',
    inputOptions: {},
    inputAutoFocus: true,
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    returnInputValueOnDeny: false,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    willOpen: undefined,
    didOpen: undefined,
    didRender: undefined,
    willClose: undefined,
    didClose: undefined,
    didDestroy: undefined,
    scrollbarPadding: true,
    topLayer: false
  };
  const updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'color', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'draggable', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'iconHtml', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'preConfirm', 'preDeny', 'progressSteps', 'returnFocus', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'theme', 'willClose'];

  /** @type {Record<string, string | undefined>} */
  const deprecatedParams = {
    allowEnterKey: undefined
  };
  const toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'draggable', 'focusConfirm', 'focusDeny', 'focusCancel', 'returnFocus', 'heightAuto', 'keydownListenerCapture'];

  /**
   * Is valid parameter
   *
   * @param {string} paramName
   * @returns {boolean}
   */
  const isValidParameter = paramName => {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };

  /**
   * Is valid parameter for Swal.update() method
   *
   * @param {string} paramName
   * @returns {boolean}
   */
  const isUpdatableParameter = paramName => {
    return updatableParams.indexOf(paramName) !== -1;
  };

  /**
   * Is deprecated parameter
   *
   * @param {string} paramName
   * @returns {string | undefined}
   */
  const isDeprecatedParameter = paramName => {
    return deprecatedParams[paramName];
  };

  /**
   * @param {string} param
   */
  const checkIfParamIsValid = param => {
    if (!isValidParameter(param)) {
      warn(`Unknown parameter "${param}"`);
    }
  };

  /**
   * @param {string} param
   */
  const checkIfToastParamIsValid = param => {
    if (toastIncompatibleParams.includes(param)) {
      warn(`The parameter "${param}" is incompatible with toasts`);
    }
  };

  /**
   * @param {string} param
   */
  const checkIfParamIsDeprecated = param => {
    const isDeprecated = isDeprecatedParameter(param);
    if (isDeprecated) {
      warnAboutDeprecation(param, isDeprecated);
    }
  };

  /**
   * Show relevant warnings for given params
   *
   * @param {SweetAlertOptions} params
   */
  const showWarningsForParams = params => {
    if (params.backdrop === false && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }
    if (params.theme && !['light', 'dark', 'auto', 'minimal', 'borderless', 'embed-iframe'].includes(params.theme)) {
      warn(`Invalid theme "${params.theme}". Expected "light", "dark", "auto", "minimal", "borderless", or "embed-iframe"`);
    }
    for (const param in params) {
      checkIfParamIsValid(param);
      if (params.toast) {
        checkIfToastParamIsValid(param);
      }
      checkIfParamIsDeprecated(param);
    }
  };

  /**
   * Updates popup parameters.
   *
   * @param {SweetAlertOptions} params
   */
  function update(params) {
    const container = getContainer();
    const popup = getPopup();
    const innerParams = privateProps.innerParams.get(this);
    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      warn(`You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.`);
      return;
    }
    const validUpdatableParams = filterValidParams(params);
    const updatedParams = Object.assign({}, innerParams, validUpdatableParams);
    showWarningsForParams(updatedParams);
    container.dataset['swal2Theme'] = updatedParams.theme;
    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: Object.assign({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }

  /**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */
  const filterValidParams = params => {
    const validUpdatableParams = {};
    Object.keys(params).forEach(param => {
      if (isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn(`Invalid parameter to update: ${param}`);
      }
    });
    return validUpdatableParams;
  };

  /**
   * Dispose the current SweetAlert2 instance
   */
  function _destroy() {
    const domCache = privateProps.domCache.get(this);
    const innerParams = privateProps.innerParams.get(this);
    if (!innerParams) {
      disposeWeakMaps(this); // The WeakMaps might have been partly destroyed, we must recall it to dispose any remaining WeakMaps #2335
      return; // This instance has already been destroyed
    }

    // Check if there is another Swal closing
    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    }
    if (typeof innerParams.didDestroy === 'function') {
      innerParams.didDestroy();
    }
    globalState.eventEmitter.emit('didDestroy');
    disposeSwal(this);
  }

  /**
   * @param {SweetAlert} instance
   */
  const disposeSwal = instance => {
    disposeWeakMaps(instance);
    // Unset this.params so GC will dispose it (#1569)
    delete instance.params;
    // Unset globalState props so GC will dispose globalState (#1569)
    delete globalState.keydownHandler;
    delete globalState.keydownTarget;
    // Unset currentInstance
    delete globalState.currentInstance;
  };

  /**
   * @param {SweetAlert} instance
   */
  const disposeWeakMaps = instance => {
    // If the current instance is awaiting a promise result, we keep the privateMethods to call them once the promise result is retrieved #2335
    if (instance.isAwaitingPromise) {
      unsetWeakMaps(privateProps, instance);
      instance.isAwaitingPromise = true;
    } else {
      unsetWeakMaps(privateMethods, instance);
      unsetWeakMaps(privateProps, instance);
      delete instance.isAwaitingPromise;
      // Unset instance methods
      delete instance.disableButtons;
      delete instance.enableButtons;
      delete instance.getInput;
      delete instance.disableInput;
      delete instance.enableInput;
      delete instance.hideLoading;
      delete instance.disableLoading;
      delete instance.showValidationMessage;
      delete instance.resetValidationMessage;
      delete instance.close;
      delete instance.closePopup;
      delete instance.closeModal;
      delete instance.closeToast;
      delete instance.rejectPromise;
      delete instance.update;
      delete instance._destroy;
    }
  };

  /**
   * @param {object} obj
   * @param {SweetAlert} instance
   */
  const unsetWeakMaps = (obj, instance) => {
    for (const i in obj) {
      obj[i].delete(instance);
    }
  };

  var instanceMethods = /*#__PURE__*/Object.freeze({
    __proto__: null,
    _destroy: _destroy,
    close: close,
    closeModal: close,
    closePopup: close,
    closeToast: close,
    disableButtons: disableButtons,
    disableInput: disableInput,
    disableLoading: hideLoading,
    enableButtons: enableButtons,
    enableInput: enableInput,
    getInput: getInput,
    handleAwaitingPromise: handleAwaitingPromise,
    hideLoading: hideLoading,
    rejectPromise: rejectPromise,
    resetValidationMessage: resetValidationMessage,
    showValidationMessage: showValidationMessage,
    update: update
  });

  /**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {Function} dismissWith
   */
  const handlePopupClick = (innerParams, domCache, dismissWith) => {
    if (innerParams.toast) {
      handleToastClick(innerParams, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache);

      // Ignore click events that had mousedown on the container but mouseup on the popup
      handleContainerMousedown(domCache);
      handleModalClick(innerParams, domCache, dismissWith);
    }
  };

  /**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {Function} dismissWith
   */
  const handleToastClick = (innerParams, domCache, dismissWith) => {
    // Closing toast by internal click
    domCache.popup.onclick = () => {
      if (innerParams && (isAnyButtonShown(innerParams) || innerParams.timer || innerParams.input)) {
        return;
      }
      dismissWith(DismissReason.close);
    };
  };

  /**
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */
  const isAnyButtonShown = innerParams => {
    return !!(innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton);
  };
  let ignoreOutsideClick = false;

  /**
   * @param {DomCache} domCache
   */
  const handleModalMousedown = domCache => {
    domCache.popup.onmousedown = () => {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = () => {};
        // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup
        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  /**
   * @param {DomCache} domCache
   */
  const handleContainerMousedown = domCache => {
    domCache.container.onmousedown = e => {
      // prevent the modal text from being selected on double click on the container (allowOutsideClick: false)
      if (e.target === domCache.container) {
        e.preventDefault();
      }
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = () => {};
        // We also need to check if the mouseup target is a child of the popup
        if (e.target === domCache.popup || e.target instanceof HTMLElement && domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  /**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {Function} dismissWith
   */
  const handleModalClick = (innerParams, domCache, dismissWith) => {
    domCache.container.onclick = e => {
      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }
      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  const isJqueryElement = elem => typeof elem === 'object' && elem.jquery;
  const isElement = elem => elem instanceof Element || isJqueryElement(elem);
  const argsToParams = args => {
    const params = {};
    if (typeof args[0] === 'object' && !isElement(args[0])) {
      Object.assign(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach((name, index) => {
        const arg = args[index];
        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error(`Unexpected type of ${name}! Expected "string" or "Element", got ${typeof arg}`);
        }
      });
    }
    return params;
  };

  /**
   * Main method to create a new SweetAlert2 popup
   *
   * @param  {...SweetAlertOptions} args
   * @returns {Promise<SweetAlertResult>}
   */
  function fire() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return new this(...args);
  }

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param {SweetAlertOptions} mixinParams
   * @returns {SweetAlert}
   */
  function mixin(mixinParams) {
    class MixinSwal extends this {
      _main(params, priorityMixinParams) {
        return super._main(params, Object.assign({}, mixinParams, priorityMixinParams));
      }
    }
    // @ts-ignore
    return MixinSwal;
  }

  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   *
   * @returns {number | undefined}
   */
  const getTimerLeft = () => {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };

  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */
  const stopTimer = () => {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };

  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */
  const resumeTimer = () => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };

  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */
  const toggleTimer = () => {
    const timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };

  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @param {number} ms
   * @returns {number | undefined}
   */
  const increaseTimer = ms => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.increase(ms);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };

  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   *
   * @returns {boolean}
   */
  const isTimerRunning = () => {
    return !!(globalState.timeout && globalState.timeout.isRunning());
  };

  let bodyClickListenerAdded = false;
  const clickHandlers = {};

  /**
   * @param {string} attr
   */
  function bindClickHandler() {
    let attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'data-swal-template';
    clickHandlers[attr] = this;
    if (!bodyClickListenerAdded) {
      document.body.addEventListener('click', bodyClickListener);
      bodyClickListenerAdded = true;
    }
  }
  const bodyClickListener = event => {
    for (let el = event.target; el && el !== document; el = el.parentNode) {
      for (const attr in clickHandlers) {
        const template = el.getAttribute(attr);
        if (template) {
          clickHandlers[attr].fire({
            template
          });
          return;
        }
      }
    }
  };

  // Source: https://gist.github.com/mudge/5830382?permalink_comment_id=2691957#gistcomment-2691957

  class EventEmitter {
    constructor() {
      /** @type {Events} */
      this.events = {};
    }

    /**
     * @param {string} eventName
     * @returns {EventHandlers}
     */
    _getHandlersByEventName(eventName) {
      if (typeof this.events[eventName] === 'undefined') {
        // not Set because we need to keep the FIFO order
        // https://github.com/sweetalert2/sweetalert2/pull/2763#discussion_r1748990334
        this.events[eventName] = [];
      }
      return this.events[eventName];
    }

    /**
     * @param {string} eventName
     * @param {EventHandler} eventHandler
     */
    on(eventName, eventHandler) {
      const currentHandlers = this._getHandlersByEventName(eventName);
      if (!currentHandlers.includes(eventHandler)) {
        currentHandlers.push(eventHandler);
      }
    }

    /**
     * @param {string} eventName
     * @param {EventHandler} eventHandler
     */
    once(eventName, eventHandler) {
      var _this = this;
      /**
       * @param {Array} args
       */
      const onceFn = function () {
        _this.removeListener(eventName, onceFn);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        eventHandler.apply(_this, args);
      };
      this.on(eventName, onceFn);
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     */
    emit(eventName) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      this._getHandlersByEventName(eventName).forEach(
      /**
       * @param {EventHandler} eventHandler
       */
      eventHandler => {
        try {
          eventHandler.apply(this, args);
        } catch (error) {
          console.error(error);
        }
      });
    }

    /**
     * @param {string} eventName
     * @param {EventHandler} eventHandler
     */
    removeListener(eventName, eventHandler) {
      const currentHandlers = this._getHandlersByEventName(eventName);
      const index = currentHandlers.indexOf(eventHandler);
      if (index > -1) {
        currentHandlers.splice(index, 1);
      }
    }

    /**
     * @param {string} eventName
     */
    removeAllListeners(eventName) {
      if (this.events[eventName] !== undefined) {
        // https://github.com/sweetalert2/sweetalert2/pull/2763#discussion_r1749239222
        this.events[eventName].length = 0;
      }
    }
    reset() {
      this.events = {};
    }
  }

  globalState.eventEmitter = new EventEmitter();

  /**
   * @param {string} eventName
   * @param {EventHandler} eventHandler
   */
  const on = (eventName, eventHandler) => {
    globalState.eventEmitter.on(eventName, eventHandler);
  };

  /**
   * @param {string} eventName
   * @param {EventHandler} eventHandler
   */
  const once = (eventName, eventHandler) => {
    globalState.eventEmitter.once(eventName, eventHandler);
  };

  /**
   * @param {string} [eventName]
   * @param {EventHandler} [eventHandler]
   */
  const off = (eventName, eventHandler) => {
    // Remove all handlers for all events
    if (!eventName) {
      globalState.eventEmitter.reset();
      return;
    }
    if (eventHandler) {
      // Remove a specific handler
      globalState.eventEmitter.removeListener(eventName, eventHandler);
    } else {
      // Remove all handlers for a specific event
      globalState.eventEmitter.removeAllListeners(eventName);
    }
  };

  var staticMethods = /*#__PURE__*/Object.freeze({
    __proto__: null,
    argsToParams: argsToParams,
    bindClickHandler: bindClickHandler,
    clickCancel: clickCancel,
    clickConfirm: clickConfirm,
    clickDeny: clickDeny,
    enableLoading: showLoading,
    fire: fire,
    getActions: getActions,
    getCancelButton: getCancelButton,
    getCloseButton: getCloseButton,
    getConfirmButton: getConfirmButton,
    getContainer: getContainer,
    getDenyButton: getDenyButton,
    getFocusableElements: getFocusableElements,
    getFooter: getFooter,
    getHtmlContainer: getHtmlContainer,
    getIcon: getIcon,
    getIconContent: getIconContent,
    getImage: getImage,
    getInputLabel: getInputLabel,
    getLoader: getLoader,
    getPopup: getPopup,
    getProgressSteps: getProgressSteps,
    getTimerLeft: getTimerLeft,
    getTimerProgressBar: getTimerProgressBar,
    getTitle: getTitle,
    getValidationMessage: getValidationMessage,
    increaseTimer: increaseTimer,
    isDeprecatedParameter: isDeprecatedParameter,
    isLoading: isLoading,
    isTimerRunning: isTimerRunning,
    isUpdatableParameter: isUpdatableParameter,
    isValidParameter: isValidParameter,
    isVisible: isVisible,
    mixin: mixin,
    off: off,
    on: on,
    once: once,
    resumeTimer: resumeTimer,
    showLoading: showLoading,
    stopTimer: stopTimer,
    toggleTimer: toggleTimer
  });

  class Timer {
    /**
     * @param {Function} callback
     * @param {number} delay
     */
    constructor(callback, delay) {
      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    /**
     * @returns {number}
     */
    start() {
      if (!this.running) {
        this.running = true;
        this.started = new Date();
        this.id = setTimeout(this.callback, this.remaining);
      }
      return this.remaining;
    }

    /**
     * @returns {number}
     */
    stop() {
      if (this.started && this.running) {
        this.running = false;
        clearTimeout(this.id);
        this.remaining -= new Date().getTime() - this.started.getTime();
      }
      return this.remaining;
    }

    /**
     * @param {number} n
     * @returns {number}
     */
    increase(n) {
      const running = this.running;
      if (running) {
        this.stop();
      }
      this.remaining += n;
      if (running) {
        this.start();
      }
      return this.remaining;
    }

    /**
     * @returns {number}
     */
    getTimerLeft() {
      if (this.running) {
        this.stop();
        this.start();
      }
      return this.remaining;
    }

    /**
     * @returns {boolean}
     */
    isRunning() {
      return this.running;
    }
  }

  const swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];

  /**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */
  const getTemplateParams = params => {
    const template = typeof params.template === 'string' ? (/** @type {HTMLTemplateElement} */document.querySelector(params.template)) : params.template;
    if (!template) {
      return {};
    }
    /** @type {DocumentFragment} */
    const templateContent = template.content;
    showWarningsForElements(templateContent);
    const result = Object.assign(getSwalParams(templateContent), getSwalFunctionParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, any>}
   */
  const getSwalParams = templateContent => {
    /** @type {Record<string, any>} */
    const result = {};
    /** @type {HTMLElement[]} */
    const swalParams = Array.from(templateContent.querySelectorAll('swal-param'));
    swalParams.forEach(param => {
      showWarningsForAttributes(param, ['name', 'value']);
      const paramName = /** @type {keyof SweetAlertOptions} */param.getAttribute('name');
      const value = param.getAttribute('value');
      if (!paramName || !value) {
        return;
      }
      if (typeof defaultParams[paramName] === 'boolean') {
        result[paramName] = value !== 'false';
      } else if (typeof defaultParams[paramName] === 'object') {
        result[paramName] = JSON.parse(value);
      } else {
        result[paramName] = value;
      }
    });
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, any>}
   */
  const getSwalFunctionParams = templateContent => {
    /** @type {Record<string, any>} */
    const result = {};
    /** @type {HTMLElement[]} */
    const swalFunctions = Array.from(templateContent.querySelectorAll('swal-function-param'));
    swalFunctions.forEach(param => {
      const paramName = /** @type {keyof SweetAlertOptions} */param.getAttribute('name');
      const value = param.getAttribute('value');
      if (!paramName || !value) {
        return;
      }
      result[paramName] = new Function(`return ${value}`)();
    });
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, any>}
   */
  const getSwalButtons = templateContent => {
    /** @type {Record<string, any>} */
    const result = {};
    /** @type {HTMLElement[]} */
    const swalButtons = Array.from(templateContent.querySelectorAll('swal-button'));
    swalButtons.forEach(button => {
      showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
      const type = button.getAttribute('type');
      if (!type || !['confirm', 'cancel', 'deny'].includes(type)) {
        return;
      }
      result[`${type}ButtonText`] = button.innerHTML;
      result[`show${capitalizeFirstLetter(type)}Button`] = true;
      if (button.hasAttribute('color')) {
        result[`${type}ButtonColor`] = button.getAttribute('color');
      }
      if (button.hasAttribute('aria-label')) {
        result[`${type}ButtonAriaLabel`] = button.getAttribute('aria-label');
      }
    });
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {Pick<SweetAlertOptions, 'imageUrl' | 'imageWidth' | 'imageHeight' | 'imageAlt'>}
   */
  const getSwalImage = templateContent => {
    const result = {};
    /** @type {HTMLElement | null} */
    const image = templateContent.querySelector('swal-image');
    if (image) {
      showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);
      if (image.hasAttribute('src')) {
        result.imageUrl = image.getAttribute('src') || undefined;
      }
      if (image.hasAttribute('width')) {
        result.imageWidth = image.getAttribute('width') || undefined;
      }
      if (image.hasAttribute('height')) {
        result.imageHeight = image.getAttribute('height') || undefined;
      }
      if (image.hasAttribute('alt')) {
        result.imageAlt = image.getAttribute('alt') || undefined;
      }
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, any>}
   */
  const getSwalIcon = templateContent => {
    const result = {};
    /** @type {HTMLElement | null} */
    const icon = templateContent.querySelector('swal-icon');
    if (icon) {
      showWarningsForAttributes(icon, ['type', 'color']);
      if (icon.hasAttribute('type')) {
        result.icon = icon.getAttribute('type');
      }
      if (icon.hasAttribute('color')) {
        result.iconColor = icon.getAttribute('color');
      }
      result.iconHtml = icon.innerHTML;
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, any>}
   */
  const getSwalInput = templateContent => {
    /** @type {Record<string, any>} */
    const result = {};
    /** @type {HTMLElement | null} */
    const input = templateContent.querySelector('swal-input');
    if (input) {
      showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
      result.input = input.getAttribute('type') || 'text';
      if (input.hasAttribute('label')) {
        result.inputLabel = input.getAttribute('label');
      }
      if (input.hasAttribute('placeholder')) {
        result.inputPlaceholder = input.getAttribute('placeholder');
      }
      if (input.hasAttribute('value')) {
        result.inputValue = input.getAttribute('value');
      }
    }
    /** @type {HTMLElement[]} */
    const inputOptions = Array.from(templateContent.querySelectorAll('swal-input-option'));
    if (inputOptions.length) {
      result.inputOptions = {};
      inputOptions.forEach(option => {
        showWarningsForAttributes(option, ['value']);
        const optionValue = option.getAttribute('value');
        if (!optionValue) {
          return;
        }
        const optionName = option.innerHTML;
        result.inputOptions[optionValue] = optionName;
      });
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @param {string[]} paramNames
   * @returns {Record<string, any>}
   */
  const getSwalStringParams = (templateContent, paramNames) => {
    /** @type {Record<string, any>} */
    const result = {};
    for (const i in paramNames) {
      const paramName = paramNames[i];
      /** @type {HTMLElement | null} */
      const tag = templateContent.querySelector(paramName);
      if (tag) {
        showWarningsForAttributes(tag, []);
        result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim();
      }
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   */
  const showWarningsForElements = templateContent => {
    const allowedElements = swalStringParams.concat(['swal-param', 'swal-function-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
    Array.from(templateContent.children).forEach(el => {
      const tagName = el.tagName.toLowerCase();
      if (!allowedElements.includes(tagName)) {
        warn(`Unrecognized element <${tagName}>`);
      }
    });
  };

  /**
   * @param {HTMLElement} el
   * @param {string[]} allowedAttributes
   */
  const showWarningsForAttributes = (el, allowedAttributes) => {
    Array.from(el.attributes).forEach(attribute => {
      if (allowedAttributes.indexOf(attribute.name) === -1) {
        warn([`Unrecognized attribute "${attribute.name}" on <${el.tagName.toLowerCase()}>.`, `${allowedAttributes.length ? `Allowed attributes are: ${allowedAttributes.join(', ')}` : 'To set the value, use HTML within the element.'}`]);
      }
    });
  };

  const SHOW_CLASS_TIMEOUT = 10;

  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param {SweetAlertOptions} params
   */
  const openPopup = params => {
    const container = getContainer();
    const popup = getPopup();
    if (typeof params.willOpen === 'function') {
      params.willOpen(popup);
    }
    globalState.eventEmitter.emit('willOpen', popup);
    const bodyStyles = window.getComputedStyle(document.body);
    const initialBodyOverflow = bodyStyles.overflowY;
    addClasses(container, popup, params);

    // scrolling is 'hidden' until animation is done, after that 'auto'
    setTimeout(() => {
      setScrollingVisibility(container, popup);
    }, SHOW_CLASS_TIMEOUT);
    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }
    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }
    if (typeof params.didOpen === 'function') {
      setTimeout(() => params.didOpen(popup));
    }
    globalState.eventEmitter.emit('didOpen', popup);
    removeClass(container, swalClasses['no-transition']);
  };

  /**
   * @param {AnimationEvent} event
   */
  const swalOpenAnimationFinished = event => {
    const popup = getPopup();
    if (event.target !== popup) {
      return;
    }
    const container = getContainer();
    popup.removeEventListener('animationend', swalOpenAnimationFinished);
    popup.removeEventListener('transitionend', swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  };

  /**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   */
  const setScrollingVisibility = (container, popup) => {
    if (hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener('animationend', swalOpenAnimationFinished);
      popup.addEventListener('transitionend', swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };

  /**
   * @param {HTMLElement} container
   * @param {boolean} scrollbarPadding
   * @param {string} initialBodyOverflow
   */
  const fixScrollContainer = (container, scrollbarPadding, initialBodyOverflow) => {
    iOSfix();
    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      replaceScrollbarWithPadding(initialBodyOverflow);
    }

    // sweetalert2/issues/1247
    setTimeout(() => {
      container.scrollTop = 0;
    });
  };

  /**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */
  const addClasses = (container, popup, params) => {
    addClass(container, params.showClass.backdrop);
    if (params.animation) {
      // this workaround with opacity is needed for https://github.com/sweetalert2/sweetalert2/issues/2059
      popup.style.setProperty('opacity', '0', 'important');
      show(popup, 'grid');
      setTimeout(() => {
        // Animate popup right after showing it
        addClass(popup, params.showClass.popup);
        // and remove the opacity workaround
        popup.style.removeProperty('opacity');
      }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062
    } else {
      show(popup, 'grid');
    }
    addClass([document.documentElement, document.body], swalClasses.shown);
    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  var defaultInputValidators = {
    /**
     * @param {string} string
     * @param {string} [validationMessage]
     * @returns {Promise<string | void>}
     */
    email: (string, validationMessage) => {
      return /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },
    /**
     * @param {string} string
     * @param {string} [validationMessage]
     * @returns {Promise<string | void>}
     */
    url: (string, validationMessage) => {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };

  /**
   * @param {SweetAlertOptions} params
   */
  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (params.inputValidator) {
      return;
    }
    if (params.input === 'email') {
      params.inputValidator = defaultInputValidators['email'];
    }
    if (params.input === 'url') {
      params.inputValidator = defaultInputValidators['url'];
    }
  }

  /**
   * @param {SweetAlertOptions} params
   */
  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }

  /**
   * Set type, text and actions on popup
   *
   * @param {SweetAlertOptions} params
   */
  function setParameters(params) {
    setDefaultInputValidators(params);

    // showLoaderOnConfirm && preConfirm
    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    }
    validateCustomTargetElement(params);

    // Replace newlines with <br> in title
    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }
    init(params);
  }

  /** @type {SweetAlert} */
  let currentInstance;
  var _promise = /*#__PURE__*/new WeakMap();
  class SweetAlert {
    /**
     * @param {...any} args
     * @this {SweetAlert}
     */
    constructor() {
      /**
       * @type {Promise<SweetAlertResult>}
       */
      _classPrivateFieldInitSpec(this, _promise, void 0);
      // Prevent run in Node env
      if (typeof window === 'undefined') {
        return;
      }
      currentInstance = this;

      // @ts-ignore
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      const outerParams = Object.freeze(this.constructor.argsToParams(args));

      /** @type {Readonly<SweetAlertOptions>} */
      this.params = outerParams;

      /** @type {boolean} */
      this.isAwaitingPromise = false;
      _classPrivateFieldSet2(_promise, this, this._main(currentInstance.params));
    }
    _main(userParams) {
      let mixinParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      showWarningsForParams(Object.assign({}, mixinParams, userParams));
      if (globalState.currentInstance) {
        const swalPromiseResolve = privateMethods.swalPromiseResolve.get(globalState.currentInstance);
        const {
          isAwaitingPromise
        } = globalState.currentInstance;
        globalState.currentInstance._destroy();
        if (!isAwaitingPromise) {
          swalPromiseResolve({
            isDismissed: true
          });
        }
        if (isModal()) {
          unsetAriaHidden();
        }
      }
      globalState.currentInstance = currentInstance;
      const innerParams = prepareParams(userParams, mixinParams);
      setParameters(innerParams);
      Object.freeze(innerParams);

      // clear the previous timer
      if (globalState.timeout) {
        globalState.timeout.stop();
        delete globalState.timeout;
      }

      // clear the restore focus timeout
      clearTimeout(globalState.restoreFocusTimeout);
      const domCache = populateDomCache(currentInstance);
      render(currentInstance, innerParams);
      privateProps.innerParams.set(currentInstance, innerParams);
      return swalPromise(currentInstance, domCache, innerParams);
    }

    // `catch` cannot be the name of a module export, so we define our thenable methods here instead
    then(onFulfilled) {
      return _classPrivateFieldGet2(_promise, this).then(onFulfilled);
    }
    finally(onFinally) {
      return _classPrivateFieldGet2(_promise, this).finally(onFinally);
    }
  }

  /**
   * @param {SweetAlert} instance
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {Promise}
   */
  const swalPromise = (instance, domCache, innerParams) => {
    return new Promise((resolve, reject) => {
      // functions to handle all closings/dismissals
      /**
       * @param {DismissReason} dismiss
       */
      const dismissWith = dismiss => {
        instance.close({
          isDismissed: true,
          dismiss
        });
      };
      privateMethods.swalPromiseResolve.set(instance, resolve);
      privateMethods.swalPromiseReject.set(instance, reject);
      domCache.confirmButton.onclick = () => {
        handleConfirmButtonClick(instance);
      };
      domCache.denyButton.onclick = () => {
        handleDenyButtonClick(instance);
      };
      domCache.cancelButton.onclick = () => {
        handleCancelButtonClick(instance, dismissWith);
      };
      domCache.closeButton.onclick = () => {
        dismissWith(DismissReason.close);
      };
      handlePopupClick(innerParams, domCache, dismissWith);
      addKeydownHandler(globalState, innerParams, dismissWith);
      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams);

      // Scroll container to top on open (#1247, #1946)
      setTimeout(() => {
        domCache.container.scrollTop = 0;
      });
    });
  };

  /**
   * @param {SweetAlertOptions} userParams
   * @param {SweetAlertOptions} mixinParams
   * @returns {SweetAlertOptions}
   */
  const prepareParams = (userParams, mixinParams) => {
    const templateParams = getTemplateParams(userParams);
    const params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131
    params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
    params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
    if (params.animation === false) {
      params.showClass = {
        backdrop: 'swal2-noanimation'
      };
      params.hideClass = {};
    }
    return params;
  };

  /**
   * @param {SweetAlert} instance
   * @returns {DomCache}
   */
  const populateDomCache = instance => {
    const domCache = {
      popup: getPopup(),
      container: getContainer(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      denyButton: getDenyButton(),
      cancelButton: getCancelButton(),
      loader: getLoader(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };

  /**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {Function} dismissWith
   */
  const setupTimer = (globalState, innerParams, dismissWith) => {
    const timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);
    if (innerParams.timer) {
      globalState.timeout = new Timer(() => {
        dismissWith('timer');
        delete globalState.timeout;
      }, innerParams.timer);
      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        applyCustomClass(timerProgressBar, innerParams, 'timerProgressBar');
        setTimeout(() => {
          if (globalState.timeout && globalState.timeout.running) {
            // timer can be already stopped or unset at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };

  /**
   * Initialize focus in the popup:
   *
   * 1. If `toast` is `true`, don't steal focus from the document.
   * 2. Else if there is an [autofocus] element, focus it.
   * 3. Else if `focusConfirm` is `true` and confirm button is visible, focus it.
   * 4. Else if `focusDeny` is `true` and deny button is visible, focus it.
   * 5. Else if `focusCancel` is `true` and cancel button is visible, focus it.
   * 6. Else focus the first focusable element in a popup (if any).
   *
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   */
  const initFocus = (domCache, innerParams) => {
    if (innerParams.toast) {
      return;
    }
    // TODO: this is dumb, remove `allowEnterKey` param in the next major version
    if (!callIfFunction(innerParams.allowEnterKey)) {
      warnAboutDeprecation('allowEnterKey');
      blurActiveElement();
      return;
    }
    if (focusAutofocus(domCache)) {
      return;
    }
    if (focusButton(domCache, innerParams)) {
      return;
    }
    setFocus(-1, 1);
  };

  /**
   * @param {DomCache} domCache
   * @returns {boolean}
   */
  const focusAutofocus = domCache => {
    const autofocusElements = Array.from(domCache.popup.querySelectorAll('[autofocus]'));
    for (const autofocusElement of autofocusElements) {
      if (autofocusElement instanceof HTMLElement && isVisible$1(autofocusElement)) {
        autofocusElement.focus();
        return true;
      }
    }
    return false;
  };

  /**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */
  const focusButton = (domCache, innerParams) => {
    if (innerParams.focusDeny && isVisible$1(domCache.denyButton)) {
      domCache.denyButton.focus();
      return true;
    }
    if (innerParams.focusCancel && isVisible$1(domCache.cancelButton)) {
      domCache.cancelButton.focus();
      return true;
    }
    if (innerParams.focusConfirm && isVisible$1(domCache.confirmButton)) {
      domCache.confirmButton.focus();
      return true;
    }
    return false;
  };
  const blurActiveElement = () => {
    if (document.activeElement instanceof HTMLElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  };

  // Dear russian users visiting russian sites. Let's have fun.
  if (typeof window !== 'undefined' && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|by|xn--p1ai)$/)) {
    const now = new Date();
    const initiationDate = localStorage.getItem('swal-initiation');
    if (!initiationDate) {
      localStorage.setItem('swal-initiation', `${now}`);
    } else if ((now.getTime() - Date.parse(initiationDate)) / (1000 * 60 * 60 * 24) > 3) {
      setTimeout(() => {
        document.body.style.pointerEvents = 'none';
        const ukrainianAnthem = document.createElement('audio');
        ukrainianAnthem.src = 'https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3';
        ukrainianAnthem.loop = true;
        document.body.appendChild(ukrainianAnthem);
        setTimeout(() => {
          ukrainianAnthem.play().catch(() => {
            // ignore
          });
        }, 2500);
      }, 500);
    }
  }

  // Assign instance methods from src/instanceMethods/*.js to prototype
  SweetAlert.prototype.disableButtons = disableButtons;
  SweetAlert.prototype.enableButtons = enableButtons;
  SweetAlert.prototype.getInput = getInput;
  SweetAlert.prototype.disableInput = disableInput;
  SweetAlert.prototype.enableInput = enableInput;
  SweetAlert.prototype.hideLoading = hideLoading;
  SweetAlert.prototype.disableLoading = hideLoading;
  SweetAlert.prototype.showValidationMessage = showValidationMessage;
  SweetAlert.prototype.resetValidationMessage = resetValidationMessage;
  SweetAlert.prototype.close = close;
  SweetAlert.prototype.closePopup = close;
  SweetAlert.prototype.closeModal = close;
  SweetAlert.prototype.closeToast = close;
  SweetAlert.prototype.rejectPromise = rejectPromise;
  SweetAlert.prototype.update = update;
  SweetAlert.prototype._destroy = _destroy;

  // Assign static methods from src/staticMethods/*.js to constructor
  Object.assign(SweetAlert, staticMethods);

  // Proxy to instance methods to constructor, for now, for backwards compatibility
  Object.keys(instanceMethods).forEach(key => {
    /**
     * @param {...any} args
     * @returns {any | undefined}
     */
    SweetAlert[key] = function () {
      if (currentInstance && currentInstance[key]) {
        return currentInstance[key](...arguments);
      }
      return null;
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '11.21.0';

  const Swal = SweetAlert;
  // @ts-ignore
  Swal.default = Swal;

  return Swal;

}));
if (typeof this !== 'undefined' && this.Sweetalert2){this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}
"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,":root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.1s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-footer-border-color: #eee;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.1s, box-shadow 0.1s;--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.1s, box-shadow 0.1s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-button-darken-hover: rgba(0, 0, 0, 0.1);--swal2-button-darken-active: rgba(0, 0, 0, 0.2);--swal2-button-transition: box-shadow 0.1s;--swal2-confirm-button-border: 0;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-deny-button-border: 0;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-cancel-button-border: 0;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(var(--swal2-button-darken-hover), var(--swal2-button-darken-hover))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(var(--swal2-button-darken-active), var(--swal2-button-darken-active))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-button-transition);box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:var(--swal2-confirm-button-border);border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:var(--swal2-deny-button-border);border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:var(--swal2-cancel-button-border);border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-outline)}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);color:inherit;font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:1px solid #d9d9d9;border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}");
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.AOS=t()}(this,function(){"use strict";var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t="Expected a function",n=NaN,o="[object Symbol]",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,l=u||d||Function("return this")(),f=Object.prototype.toString,m=Math.max,p=Math.min,b=function(){return l.Date.now()};function v(e,n,o){var i,a,r,c,s,u,d=0,l=!1,f=!1,v=!0;if("function"!=typeof e)throw new TypeError(t);function y(t){var n=i,o=a;return i=a=void 0,d=t,c=e.apply(o,n)}function h(e){var t=e-u;return void 0===u||t>=n||t<0||f&&e-d>=r}function k(){var e=b();if(h(e))return x(e);s=setTimeout(k,function(e){var t=n-(e-u);return f?p(t,r-(e-d)):t}(e))}function x(e){return s=void 0,v&&i?y(e):(i=a=void 0,c)}function O(){var e=b(),t=h(e);if(i=arguments,a=this,u=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(k,n),l?y(e):c}(u);if(f)return s=setTimeout(k,n),y(u)}return void 0===s&&(s=setTimeout(k,n)),c}return n=w(n)||0,g(o)&&(l=!!o.leading,r=(f="maxWait"in o)?m(w(o.maxWait)||0,n):r,v="trailing"in o?!!o.trailing:v),O.cancel=function(){void 0!==s&&clearTimeout(s),d=0,i=u=a=s=void 0},O.flush=function(){return void 0===s?c:x(b())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&f.call(e)==o}(e))return n;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var u=r.test(e);return u||c.test(e)?s(e.slice(2),u?2:8):a.test(e)?n:+e}var y=function(e,n,o){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError(t);return g(o)&&(i="leading"in o?!!o.leading:i,a="trailing"in o?!!o.trailing:a),v(e,n,{leading:i,maxWait:n,trailing:a})},h="Expected a function",k=NaN,x="[object Symbol]",O=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,E=/^0b[01]+$/i,N=/^0o[0-7]+$/i,z=parseInt,C="object"==typeof e&&e&&e.Object===Object&&e,A="object"==typeof self&&self&&self.Object===Object&&self,q=C||A||Function("return this")(),L=Object.prototype.toString,T=Math.max,M=Math.min,S=function(){return q.Date.now()};function D(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function H(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&L.call(e)==x}(e))return k;if(D(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=D(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(O,"");var n=E.test(e);return n||N.test(e)?z(e.slice(2),n?2:8):j.test(e)?k:+e}var $=function(e,t,n){var o,i,a,r,c,s,u=0,d=!1,l=!1,f=!0;if("function"!=typeof e)throw new TypeError(h);function m(t){var n=o,a=i;return o=i=void 0,u=t,r=e.apply(a,n)}function p(e){var n=e-s;return void 0===s||n>=t||n<0||l&&e-u>=a}function b(){var e=S();if(p(e))return v(e);c=setTimeout(b,function(e){var n=t-(e-s);return l?M(n,a-(e-u)):n}(e))}function v(e){return c=void 0,f&&o?m(e):(o=i=void 0,r)}function g(){var e=S(),n=p(e);if(o=arguments,i=this,s=e,n){if(void 0===c)return function(e){return u=e,c=setTimeout(b,t),d?m(e):r}(s);if(l)return c=setTimeout(b,t),m(s)}return void 0===c&&(c=setTimeout(b,t)),r}return t=H(t)||0,D(n)&&(d=!!n.leading,a=(l="maxWait"in n)?T(H(n.maxWait)||0,t):a,f="trailing"in n?!!n.trailing:f),g.cancel=function(){void 0!==c&&clearTimeout(c),u=0,o=s=i=c=void 0},g.flush=function(){return void 0===c?r:v(S())},g},W=function(){};function P(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes);if(function e(t){var n=void 0,o=void 0;for(n=0;n<t.length;n+=1){if((o=t[n]).dataset&&o.dataset.aos)return!0;if(o.children&&e(o.children))return!0}return!1}(t.concat(n)))return W()})}function Y(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}var _={isSupported:function(){return!!Y()},ready:function(e,t){var n=window.document,o=new(Y())(P);W=t,o.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},K=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,G=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,J=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,Q=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function R(){return navigator.userAgent||navigator.vendor||window.opera||""}var U=new(function(){function e(){B(this,e)}return F(e,[{key:"phone",value:function(){var e=R();return!(!K.test(e)&&!G.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=R();return!(!J.test(e)&&!Q.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),e}()),V=function(e,t){var n=void 0;return U.ie11()?(n=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,{detail:t}):n=new CustomEvent(e,{detail:t}),document.dispatchEvent(n)},X=function(e){return e.forEach(function(e,t){return function(e,t){var n=e.options,o=e.position,i=e.node,a=(e.data,function(){e.animated&&(function(e,t){t&&t.forEach(function(t){return e.classList.remove(t)})}(i,n.animatedClassNames),V("aos:out",i),e.options.id&&V("aos:in:"+e.options.id,i),e.animated=!1)});n.mirror&&t>=o.out&&!n.once?a():t>=o.in?e.animated||(function(e,t){t&&t.forEach(function(t){return e.classList.add(t)})}(i,n.animatedClassNames),V("aos:in",i),e.options.id&&V("aos:in:"+e.options.id,i),e.animated=!0):e.animated&&!n.once&&a()}(e,window.pageYOffset)})},Z=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}},ee=function(e,t,n){var o=e.getAttribute("data-aos-"+t);if(void 0!==o){if("true"===o)return!0;if("false"===o)return!1}return o||n},te=function(e,t){return e.forEach(function(e,n){var o=ee(e.node,"mirror",t.mirror),i=ee(e.node,"once",t.once),a=ee(e.node,"id"),r=t.useClassNames&&e.node.getAttribute("data-aos"),c=[t.animatedClassName].concat(r?r.split(" "):[]).filter(function(e){return"string"==typeof e});t.initClassName&&e.node.classList.add(t.initClassName),e.position={in:function(e,t,n){var o=window.innerHeight,i=ee(e,"anchor"),a=ee(e,"anchor-placement"),r=Number(ee(e,"offset",a?0:t)),c=a||n,s=e;i&&document.querySelectorAll(i)&&(s=document.querySelectorAll(i)[0]);var u=Z(s).top-o;switch(c){case"top-bottom":break;case"center-bottom":u+=s.offsetHeight/2;break;case"bottom-bottom":u+=s.offsetHeight;break;case"top-center":u+=o/2;break;case"center-center":u+=o/2+s.offsetHeight/2;break;case"bottom-center":u+=o/2+s.offsetHeight;break;case"top-top":u+=o;break;case"bottom-top":u+=o+s.offsetHeight;break;case"center-top":u+=o+s.offsetHeight/2}return u+r}(e.node,t.offset,t.anchorPlacement),out:o&&function(e,t){window.innerHeight;var n=ee(e,"anchor"),o=ee(e,"offset",t),i=e;return n&&document.querySelectorAll(n)&&(i=document.querySelectorAll(n)[0]),Z(i).top+i.offsetHeight-o}(e.node,t.offset)},e.options={once:i,mirror:o,animatedClassNames:c,id:a}}),e},ne=function(){var e=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(e,function(e){return{node:e}})},oe=[],ie=!1,ae={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},re=function(){return document.all&&!window.atob},ce=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(ie=!0),ie&&(oe=te(oe,ae),X(oe),window.addEventListener("scroll",y(function(){X(oe,ae.once)},ae.throttleDelay)))},se=function(){if(oe=ne(),de(ae.disable)||re())return ue();ce()},ue=function(){oe.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),ae.initClassName&&e.node.classList.remove(ae.initClassName),ae.animatedClassName&&e.node.classList.remove(ae.animatedClassName)})},de=function(e){return!0===e||"mobile"===e&&U.mobile()||"phone"===e&&U.phone()||"tablet"===e&&U.tablet()||"function"==typeof e&&!0===e()};return{init:function(e){return ae=I(ae,e),oe=ne(),ae.disableMutationObserver||_.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),ae.disableMutationObserver=!0),ae.disableMutationObserver||_.ready("[data-aos]",se),de(ae.disable)||re()?ue():(document.querySelector("body").setAttribute("data-aos-easing",ae.easing),document.querySelector("body").setAttribute("data-aos-duration",ae.duration),document.querySelector("body").setAttribute("data-aos-delay",ae.delay),-1===["DOMContentLoaded","load"].indexOf(ae.startEvent)?document.addEventListener(ae.startEvent,function(){ce(!0)}):window.addEventListener("load",function(){ce(!0)}),"DOMContentLoaded"===ae.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&ce(!0),window.addEventListener("resize",$(ce,ae.debounceDelay,!0)),window.addEventListener("orientationchange",$(ce,ae.debounceDelay,!0)),oe)},refresh:ce,refreshHard:se}});

const HIDE_FIXED_MENU = 1;

var bodyWidth = $('body').width();

const sexMap = {
    1: 'Nam',
    2: 'Nữ',
    0: 'Không xác định'
};

function isPC(){
    return bodyWidth > 1260;
}
function isTablet(){
    return bodyWidth > 992 && bodyWidth <= 1260;
}
function isMobile(){
    return bodyWidth <= 992;
}
function scale() {
    var maxWidth = $(window).width();
    if (maxWidth >= 1905 || maxWidth <= 1200) {
        $('#root').css({
            'transform': 'unset',
            'width': 'unset',
        });
        $('.top-nav .container').css({
            'transform': 'unset',
            'width': 'unset',
        });
    } else {
        $('#root').attr('style', `
            transform: scale(${maxWidth / 1905});
            transform-origin: top left;
            width: 1905px !important;
        `);
        $('.top-nav .container').css({
            'transform': 'scale(' + (maxWidth / 1905) + ')',
            'transform-origin': 'top left',
            'width': '1905px'
        });
        $('.menu-fixed.left').css({
            'transform': 'scale(' + (maxWidth / 1905) + ')',
            'transform-origin': 'top left',
            'width': '1905px'
        });

        $('.menu-fixed.right').css({
            'transform': 'scale(' + (maxWidth / 1905) + ')',
            'transform-origin': 'top right',
            'width': '1905px'
        });
    }
    if(window.innerWidth < 1620 && $('.page-4 .social').length && window.innerWidth > 1200) {
        $('.page-4 .social').removeAttr('data-aos data-aos-offset data-aos-duration data-aos-delay data-aos-easing');
    }else{
        $('.page-4 .social').attr({
            'data-aos': 'fade-up',
            'data-aos-offset': '0',
            'data-aos-duration': '600'
        });
    }
    AOS.refresh();
}
function log(mess){
    console.log(mess);
}

function redirect(url){
    window.location.href = url;
}
function redirectTop(url){
    window.top.location.href = url;
}
function showLoading(){
    $.LoadingOverlay('show', {
        size: 40,
        minSize: 40,
        maxSize: 40,
        imageColor : "#fe6c00"
    });
}
function hideLoading(){
    $.LoadingOverlay('hide')
}
function success(mess){
    SwalFire('success', mess)
}
function warning(mess){
    SwalFire('warning', mess)
}
function error(mess){
    SwalFire('error', mess)
}
function SwalFire(type, mess){
    Swal.fire({
        html: mess,
        icon: type,
        scrollbarPadding:false,
    });
}
function showConfirmAndRedirect(url, message, title){
    Swal.fire({
        title: title,
        text: message,
        icon: 'success',
    }).then(function(result){
        redirect(url);
    });
}

function handleError(error){
    log(error);
}

function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
// function getRedirectTop() {
//     return getRedirectPrevious();
// }
function getRedirectPrevious() {
    var params = parseUrl(document.URL);
    var previous = params['previous'];
    return previous && previous !== '0' ? previous : null;
}

function getRedirectTop() {
    var params = parseUrl(document.URL);
    var redirectTop = params['redirect-top'];
    return redirectTop && redirectTop !== '0' ? redirectTop : null;
}

function getRedirectUrl() {
    var params = parseUrl(document.URL);
    return params['redirect'] || params['redirect_url'] || '';
}

function parseUrl(url = window.location.href) {
    var params = {};
    var queryString = url.split('?')[1] || '';
    queryString.split('&').forEach(pair => {
        if (!pair) return;
        var [key, value = ''] = pair.replace(/^amp;/, '').split('=');
        params[decodeURIComponent(key.replace(/\+/g, ' '))] = decodeURIComponent(value.replace(/\+/g, ' '));
    });
    return params;
}

function checkUserState() {
    if ($.cookie('uname')) {
        return true;
    }
    return false;
}

function getAndUpdateStateMe() {
    return $.ajax({
        method: "POST",
        url: "/id/update-state-user",
        error: function(xhr) {
            error('Có lỗi xảy ra khi đăng ký tài khoản, vui lòng thử lại sau!');
        }
    });
}

function searchHero(keySearch) {
    var $slider = $('.hero-list-slide');
    if ($slider.length && $slider.hasClass('slick-initialized')) {
        searchHeroByParticular('s0');
        $slider.slick('slickUnfilter');
        if (keySearch) {
            $slider.slick('slickFilter', function () {
                const name = ($(this).data('name') || '').trim().toUpperCase();
                return name.includes(keySearch.trim().toUpperCase());
            });
        }else{
            const $active = $slider.find('.slick-slide.active');
            const index = $active.length ? $active.data('slick-index') : 0;
            $slider.slick('slickGoTo', index, true);
        }
    }else{
        $('.listChars').find('li').addClass('d-none');
        $('.listChars li').each(function(){
            var dataName = $(this).attr('data-name') || '';
            if (dataName.trim().toUpperCase().indexOf(keySearch.trim().toUpperCase()) !== -1) {
                $(this).removeClass('d-none');
            }
        });
    }
}

function searchHeroByParticular(keySearch) {
    var $slider = $('.hero-list-slide');
    localStorage.setItem("searchHero", keySearch);
    if ($slider.length && $slider.hasClass('slick-initialized')) {
        $slider.slick('slickUnfilter');
        $('.filter-type-attack ul li').removeClass('active');

        $('.filter-type-attack ul li a').each(function () {
            const data = ($(this).data('particular') || '').trim().toUpperCase();
            if (data === keySearch.trim().toUpperCase()) {
                $(this).closest('li').addClass('active');
            }
        });
        if (keySearch && keySearch !== 's0') {
            $slider.slick('slickFilter', function () {
                var particular = ($(this).data('particular') || '').trim().toUpperCase();
                return particular.includes(keySearch.trim().toUpperCase());
            });
            $slider.one('setPosition', function () {
                const $filteredSlides = $slider.find('li');
                const $active = $filteredSlides.filter('.active');
                if ($active.length) {
                    const index = $filteredSlides.index($active);
                    if (index >= 0) {
                        $slider.slick('slickGoTo', index);
                    }
                }
            });
        } else {
            var $active = $slider.find('.slick-slide.active');
            var index = $active.length ? $active.data('slick-index') : 0;
            $slider.slick('slickGoTo', index, true);
        }
    }else{
        if (keySearch === 's0') {
            $('.listChars').find('li').removeClass('d-none');
            return;
        }
        $('.listChars').find('li').addClass('d-none');
        $('.listChars li').each(function(){
            var dataParticular = $(this).attr('data-particular') || '';
            if (dataParticular.trim().toUpperCase().indexOf(keySearch.trim().toUpperCase()) !== -1) {
                $(this).removeClass('d-none');
            }
        });
    }
}
function changeAlias(alias) {
    var str = alias;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");
    str = str.replace(/đ/g,"d");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
    str = str.replace(/ + /g," ");
    str = str.replace(/ /g,"-");
    str = str.trim();
    return str;
}

$(document).ready(function () {
    if (localStorage.getItem("rightFixedMenu") == HIDE_FIXED_MENU) {
        const $menu = $('.right-menu');
        $menu.css('transition', 'none');
        $menu.css('display', 'none');
        $menu.toggleClass('collapsed');
        $menu.css('display', 'block');
        setTimeout(() => {
            $menu.css('transition', '');
        }, 50);
    }

    //Collapse MENU
    var btnTurnIn = document.querySelector('.turn-in');
    var btnTurnOut = document.querySelector('.turn-out');
    var btnTurnTop = document.querySelector('.turn-top');

    var rightMenu = document.querySelector('.right-menu');

    btnTurnIn.addEventListener('click', () => {
        localStorage.setItem("rightFixedMenu", HIDE_FIXED_MENU);
        rightMenu.classList.toggle('collapsed');
    });

    btnTurnOut.addEventListener('click', () => {
        localStorage.removeItem("rightFixedMenu");
        rightMenu.classList.remove('collapsed');
    });

    btnTurnTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    $('#serverSelect').select2({
        placeholder: "Nhập ID máy chủ",
        allowClear: true,
        width: '100%',
        theme: 'classic',
        dropdownCssClass: 'serverSelect-dropdown',
        dropdownParent: $('.select-group .server')
    });

    $('#serverSelect').on('select2:open', () => {
        $('.select2-search__field').attr('placeholder', 'Nhập ID máy chủ...');
        $('.select2-search__field').addClass('server-search-select2');
    });

    $('.search-lite.post').on('submit', function (e) {
        e.preventDefault();

        const text = $(this).find('#search').val().trim();
        if (!text) return;

        const redirectUrl = '/tim-kiem/' + changeAlias(text);
        window.location.href = redirectUrl;
    });

});

// select2 (extend function)
(function($) {
    var Defaults = $.fn.select2.amd.require('select2/defaults');

    $.extend(Defaults.defaults, {
        searchInputPlaceholder: ''
    });

    var SearchDropdown = $.fn.select2.amd.require('select2/dropdown/search');

    var _renderSearchDropdown = SearchDropdown.prototype.render;

    SearchDropdown.prototype.render = function(decorated) {

        // invoke parent method
        var $rendered = _renderSearchDropdown.apply(this, Array.prototype.slice.apply(arguments));

        this.$search.attr('placeholder', this.options.get('searchInputPlaceholder'));

        return $rendered;
    };

})(window.jQuery);


function calcPaymentAmountBonus(rate, bonus_percent){
    $('.wrapper-payment .item-list .item').each(function(){
        var amount = parseInt($(this).find('input[name="famount"]').val());
        var gem = amount/rate;
        var bonus = gem*bonus_percent;
        $(this).find('.top b').text(formatNumber(gem));
        $(this).find('.middle b').text('+ '+formatNumber(bonus));
    })
}
function paymentState(){
    var upaystatus = $.cookie('upaystatus');
    var upayerror = $.cookie('upayerror');
    if(!upaystatus) return;

    if(upaystatus == 1){
        success('Giao dịch thành công');
    }else{
        warning('Giao dịch thất bại '+(upayerror ? upayerror : ''));
    }

    $.removeCookie('upaystatus', { path: '/', domain: cookieDomain });
    $.removeCookie('upaystatus', { path: '/', domain: cookieDomain });
}
function displayBalance(){
    var ubalance = $.cookie('ubalance') ? $.cookie('ubalance') : 0;
    $('.display-balance').text(formatNumber(parseInt(ubalance)));
}
function processAjaxPayment(response){
    if(response.status != 1){
        warning(response.mess);
        hideLoading();
        return;
    }

    redirect(response.data.redirect);
}

function processAjaxConvert(response){
    hideLoading();
    if(response.status != 1){
        warning(response.mess);
    }else{
        success(response.mess);
    }
}

function showHistoryPay(status, data){
    var html = '';
    if(status == 1 && data){
        for (const [key, value] of Object.entries(data)) {
            html += '<tr>' +
                        '<td><span class="minitit-head">Trạng thái</span><span class="minitit-body '+(value.status == 1 ? 'success': 'false')+'">'+(value.status == 1 ? 'Thành công': 'Thất bại')+'</span></td>' +
                        '<td><span class="minitit-head">Thời gian</span><span class="minitit-body">'+value.date+'</span></td>' +
                        '<td><span class="minitit-head">Giá trị (VND)</span><span class="minitit-body">'+formatNumber(value.amount)+'</span></td>' +
                        '<td><span class="minitit-head">Phương thức thanh toán</span><span class="minitit-body">'+(value.type == 'bank' ? 'ATM/Ví': 'MOMO')+'</span></td>' +
                    '</tr>';
        }
    }else{
        html += '<tr><td>Không có dữ liệu!</td></tr>';
    }

    $('#table-history tbody').html(html);
}

function showHistoryPackage(status, data){
    var html = '';
    if(status == 1 && data){
        for (const [key, value] of Object.entries(data)) {
            html += '<tr>' +
                        '<td><span class="minitit-head">Trạng thái</span><span class="minitit-body '+(value.status == 1 ? 'success': 'false')+'">'+(value.status == 1 ? 'Thành công': 'Thất bại')+'</span></td>' +
                        '<td><span class="minitit-head">Thời gian</span><span class="minitit-body">'+value.date+'</span></td>' +
                        '<td><span class="minitit-head">Server</span><span class="minitit-body">'+value.server+'</span></td>' +
                        '<td><span class="minitit-head">Giá trị (GEM)</span><span class="minitit-body">'+formatNumber(value.coin)+'</span></td>' +
                        '<td><span class="minitit-head">Gói đã mua</span><span class="minitit-body">'+packages['package-'+value.item]['name']+'</span></td>' +
                    '</tr>';
        }
    }else{
        html += '<tr><td>Không có dữ liệu!</td></tr>';
    }

    $('#table-history tbody').html(html);
}

function showHistoryConvert(status, data){
    var html = '';
    if(status == 1 && data){
        for (const [key, value] of Object.entries(data)) {
            html += '<tr>' +
                        '<td><span class="minitit-head">Trạng thái</span><span class="minitit-body '+(value.status == 1 ? 'success': 'false')+'">'+(value.status == 1 ? 'Thành công': 'Thất bại')+'</span></td>' +
                        '<td><span class="minitit-head">Thời gian</span><span class="minitit-body">'+value.date+'</span></td>' +
                        '<td><span class="minitit-head">Server</span><span class="minitit-body">'+value.server+'</span></td>' +
                        '<td><span class="minitit-head">Giá trị (GEM)</span><span class="minitit-body">'+formatNumber(value.coin)+'</span></td>' +
                    '</tr>';
        }
    }else{
        html += '<tr><td>Không có dữ liệu!</td></tr>';
    }

    $('#table-history tbody').html(html);
}

function initSliderPayment(){
    $('.item-list-slick').on('init', function(event, slick){
            $('.wrapper-payment .item-list').css('opacity', 1);
        });
        $('.item-list-slick').slick({
                dots: true,
                arrows: true,
                infinite: false,
                speed: 500,
                slidesToShow: 7,
                slidesToScroll: 7,
                cssEase: 'ease',
                responsive: [
                    {
                        breakpoint: 1140,
                        settings: {
                            slidesToShow: 6,
                            slidesToScroll: 6,
                        }
                    },
                    {
                        breakpoint: 960,
                        settings: {
                            slidesToShow: 5,
                            slidesToScroll: 5
                        }
                    },
                    {
                        breakpoint: 720,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    },
                    {
                        breakpoint: 540,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    }
                ]
            });
}


$(document).ready(function () {
    AOS.init({
        easing: 'ease-in-out',
        mirror: true,
        once: false,
    });

    paymentState();
    displayBalance();
    if (checkUserState()) {

        displayBalance();

        $('.wrap-login').find('.btn-login').addClass('d-none');
        $('.wrap-login').find('.user-info').removeClass('d-none');
        $('.link-to-history').find('.login-required').removeClass('login-required');

        var json = decodeURIComponent($.cookie('udata'));
        var data = JSON.parse(json);
        $(document).find('.display-name').text($.cookie('uname'));

        if ($('.user-table').length > 0) {
            $('.display-uname').text(data.uname);
            $('.display-name').text(data.uname);
            $('.display-email').text(data.email);
            $('.display-birthday').text(data.birthday);
            $('.display-sex').text(sexMap[data.sex] || 'Không xác định');
            $('.display-phone').text(data.phone);
        }

        if ($('.user-box').length > 0) {
            if (data.email !== "Chưa xác thực" && data.phone !== "Chưa xác thực") {
                $('.user-box .user-info-warning').addClass('d-none');
            }
        }

        if ($('.form-change-profile').length) {
            $('.form-change-profile').find(`input[name="sex"][value="${data.sex}"]`).prop('checked', true);
        }
    }

    if(typeof widget_login != 'undefined'){
        $('.login-required').click(widget_login);
    }

    $('.select2.type').select2({
            dropdownParent: $('#select2-type-parent')
        });
    $('.select2.server').select2({
            placeholder: "Chọn server",
            searchInputPlaceholder: 'Nhập ID máy chủ',
            dropdownParent: $('#select2-server-parent')
        });

    $('.daterange-picker').daterangepicker({
        'locale': {
            'format': 'DD/MM/YYYY'
        },
        'maxSpan': {
            'days': 31
        },
        'maxDate': moment().format('DD/MM/YYYY'),
        'autoApply' : true
    });

    if(isPC()){
        initSliderPayment();
    }else{
        $('.wrapper-payment .item-list').css('opacity', 1);
    }

    $('.wrapper-payment .item-list-slick .item').click(function(){
        $('.wrapper-payment .item-list-slick .item').removeClass('active');
        $(this).addClass('active');
        return false;
    })

    $('.wrapper-payment .package-container .package-item .view').click(function(){
        $(this).closest('.package-container').find('.package-item.detail').not($(this).parents('.package-item')).removeClass('detail');

        if ($(this).parents('.package-item').hasClass('detail')) {
            $(this).parents('.package-item').removeClass('detail');
        } else {
            $(this).parents('.package-item').addClass('detail');
        }
        var id = $(this).parents('.package-item').find('.scroll-package-item').attr('id');
        if(!$('#'+id).hasClass('lms_scrollable')){
            new LetMeScroll({
                selector: "#"+id,
                config : {
                    dimensions : {
                        width : "200px",
                        height : "249px"
                    },
                    scroll : {
                        bottomOffset: 0,
                        autoHide:  false
                    }
                },
                onComplete: function(){},
                onEnd: function(){},
                onTop: function(){},
                onMove: function(){},
                onDragStart: function(){},
                onDragStop: function(){},
                onTouchStart: function(){},
                onTouchStop: function(){}
            });
        }

        return false;
    })
    $('.wrapper-payment .package-container .package-item .right .close').click(function(){
        $(this).parents('.package-item').removeClass('detail');

        return false;
    })
    $('.wrapper-payment .package-container .package-item').click(function(){
        if($(this).hasClass('disabled')){
            warning('Gói nạp đã được mua. Đừng quên nhận thưởng trong game!');
            return false;
        }
        $('.wrapper-payment .package-container .package-item').removeClass('active');
        $(this).addClass('active');
        return false;
    });

    $('.item-list-payment-type .item-type').click(function(){
        $('.item-list-payment-type .item-type').removeClass('active');
        $(this).addClass('active');

        var rate = parseInt($(this).attr('data-rate'));
        var bonus = parseFloat($(this).attr('data-bonus'));
        calcPaymentAmountBonus(rate, bonus);
        return false;
    })

    $('.package-rule').click(function(){
        Swal.fire({
            customClass: {
                container: 'swal2-container-md',
            },
            title: "Thể Lệ",
            icon: "",
            html: `
                <ul style="text-align: left">
                    <li>• Gói Nạp 7 ngày: nhận thưởng 7 lần - mỗi ngày nhận 1 lần</li>
                    <li>• Gói Nạp Ngày: Nhận thưởng 1 Lần. Qua ngày hôm sau mới có thể tiếp tục mua gói nạp hàng ngày.</li>
                    <li>• Chỉ có thể chọn 1 trong 2 gói ngày. Ví dụ mua gói ngày hình Nami không thể mua gói ngày hình Boa và ngược lại.</li>
                    <li>• Gói Nạp 30 ngày: nhận thưởng 30 lần - mỗi ngày nhận 1 lần</li>
                    <li>• Ngày hôm nay không nhận có thể nhận ngày hôm sau</li>
                    <li>• Nhận hết 7 lần phần thưởng thì mới có thể mua lại gói 7 ngày và 30 ngày</li>
                    <li>• Trong trường hợp, Thuyền Trưởng chưa nhận quà của ngày hôm đó thì cũng không ảnh hưởng đến quá trình nhận vì các gói này tính theo số lần nhận.</li>
                    <li>• Gói quà web hiện không được tính vào các event có tích luỹ nạp và điểm VIP</li>
                    <li>• Chỉ nạp tại trang chính thức để tránh bị lừa đảo</li>
                    <li>• Kiểm tra kỹ tài khoản đăng nhập, sever và số tiền trước khi xác nhận</li>
                </ul>
            `,
            showCloseButton: true,
            showCancelButton: false,
            confirmButtonText: `Đóng`,
        });
        return false;
    });

    if($('.wrapper-payment').length && $.cookie('uname')){
        $.ajax({
            type: "POST",
            url: `/cap-nhat-so-gem`,
            success: function (response) {
                if(response.status != 1){
                    warning(response.mess);
                    hideLoading();
                    return;
                }
                if(typeof response.data.gem != 'undefined'){
                    displayBalance();
                }
            },
            error: function (err) {
                handleError(err);
                return false;
            }
        });
    }

    $('button[name="fpay"]').click(function(){
        var type = $('.item-list-payment-type .item-type.active input[name="ftype"]').val();
        if(!type) {
            warning('Vui lòng chọn hình thức thanh toán');
            return false;
        }

        var amount = $('.wrapper-payment .item-list .item.active input[name="famount"]').val();
        if(!amount) {
            warning('Vui lòng chọn giá trị muốn quy đổi');
            return false;
        }
        showLoading();

        $.ajax({
            type: "POST",
            url: `/nap-tien-vao-vi`,
            data: {
                type: type,
                amount: amount,
            },
            success: function (response) {
                processAjaxPayment(response);
            },
            error: function (err) {
                handleError(err);
                return false;
            }
        });
    });

    $('button[name="fconvert"]').click(function(){
        var server = $('select[name="fserver"]').val();
        var amount = $('.wrapper-payment .item-list.item-convert-list .item.active input[name="famount"]').val();
        if(!server || !amount) {
            warning('Vui lòng chọn server và giá trị muốn quy đổi');
            return false;
        }
        showLoading();

        $.ajax({
            type: "POST",
            url: `/nap-tu-vi-vao-game`,
            data: {
                server: server,
                amount: amount,
            },
            success: function (response) {
                processAjaxConvert(response);
                displayBalance();
            },
            error: function (err) {
                handleError(err);
                return false;
            }
        });
    });

    $('button[name="fpackage"]').click(function(){
        var server = $('select[name="fserver"]').val();
        var package = $('.wrapper-payment .package-container .package-item.active input[name="fpackage"]').val();
        if(!server || !package) {
            warning('Vui lòng chọn server và giá trị muốn quy đổi');
            return false;
        }
        showLoading();

        $.ajax({
            type: "POST",
            url: `/qua-nap-web`,
            data: {
                server: server,
                package: package,
            },
            success: function (response) {
                processAjaxConvert(response);
                if(response.status == 1){
                    $('.wrapper-payment .package-container .package-item.active').addClass('disabled').removeClass('active');
                }
                displayBalance();
            },
            error: function (err) {
                handleError(err);
                return false;
            }
        });
    });

    $('button[name="fhistory"]').click(function(){
        var fdatetime = $('input[name="fdatetime"]').val();
        var ftype = $('select[name="ftype"]').val();
        if(!fdatetime || !ftype) {
            warning('Vui lòng chọn dữ liệu');
            return false;
        }
        showLoading();

        $.ajax({
            type: "POST",
            url: `/lich-su-nap`,
            data: {
                datetime: fdatetime,
                type: ftype,
            },
            success: function (response) {
                if(ftype == 'pay'){
                    showHistoryPay(response.status, response.data);
                }else if(ftype == 'package'){
                    showHistoryPackage(response.status, response.data);
                }else if(ftype == 'convert'){
                    showHistoryConvert(response.status, response.data);
                }
                hideLoading();
            },
            error: function (err) {
                handleError(err);
                return false;
            }
        });
    });


    $('#server-package').change(function(){
        showLoading();
        var server = $('select[name="fserver"]').val();
        if(!server) {
            warning('Vui lòng chọn server');
            return false;
        }

        $.ajax({
            type: "POST",
            url: `/kiem-tra-trang-thai-mua-qua`,
            data: {
                server: server,
            },
            success: function (response) {
                if(response.status != 1){
                    warning(response.mess);
                    return;
                }
                $('.package-item').removeClass('active');
                $('.package-item').removeClass('disabled');
                for (let package_id in response.data) {
                    $('#package-item-'+package_id).addClass('disabled');
                    $('.package-item-limit-'+response.data[package_id]).addClass('disabled');
                }
                hideLoading();
            },
            error: function (err) {
                handleError(err);
                return false;
            }
        });
    });

    var $listSlider = $('.hero-list-slide');
    if ($listSlider.length > 0) {
        var $active = $listSlider.find('li.active');
        var initialSlide = 0;
        if($active.length) {
            initialSlide = parseInt($active.data('slick-index'), 10) || 0;
        }
        $listSlider.slick({
            infinite: false,
            initialSlide: initialSlide,
            slidesToShow: 10,
            slidesToScroll: 10,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 7,
                        slidesToScroll: 7,
                        infinite: false,
                        dots: false
                    }
                },{
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        dots: false,
                        infinite: false,
                        variableWidth: true,
                    }
                }
            ]
        });
    }

    var input = $('.search-hero .text-search');
    input.on('input', function () {
        var keySearch = $(this).val();
        searchHero(keySearch);
    });

    $('.btn-search-hero').click(function (e) {
        e.preventDefault();
        $('.btn-search-hero').removeClass('active');
        $(this).addClass('active');
        var particular = $(this).find('a').data('particular');
        searchHeroByParticular(particular);
    });

    if ($('.wrapper-hero.detail').length) {
        var keysearch = localStorage.getItem("searchHero") ?? 's0';
        searchHeroByParticular(keysearch);
    } else {
        searchHeroByParticular('s0');
    }

    if ($(".subpage-container").length) {
        var offsetTop = $(".subpage-container .page-title").offset().top;
        $(".subpage-container.wrapper-hero.detail").length && (offsetTop += 100);
        if(window.innerWidth <= 1200 && window.innerWidth > 576) {
            offsetTop -= 20;
            if($(".subpage-container.wrapper-hero.detail").length){
                offsetTop -= 100;
            }
        }else if(window.innerWidth <= 576) {
            if($(".subpage-container.wrapper-hero.detail").length){
                offsetTop -= 100;
            }
        }else if(window.innerWidth > 1200 && window.innerWidth < 1900) {
            offsetTop = offsetTop * (window.innerWidth / 1900) + 20;
        }

        if($(".subpage-container.wrapper-hero.detail").length){
            if ("scrollRestoration" in history) {
                history.scrollRestoration = "manual";
            }
            var prevBehavior = document.documentElement.style.scrollBehavior;
            document.documentElement.style.scrollBehavior = "auto";
            window.scroll(0, offsetTop - 100);
            document.documentElement.style.scrollBehavior = prevBehavior;
        }else{
            window.scrollTo({
                top: offsetTop - 100,
                behavior: "smooth"
            });
        }
    }

    if (window) {
        if (window.innerWidth < 576) {
            return true;
        }
    }
    scale();
    $(window).on('resize', function(){
        scale();
    });

    $('.btn-notify').click(function (event) {
        event.preventDefault();
        success('Tính năng đang được cập nhật!');
    });
});


function widget_login() {
    var task = this.getAttribute('data-task');
    if (!task) {
        task = 'login';
    }

    var href = this.getAttribute('data-redirect');
    if (href == null) {
        href = this.href;
    }

    var url = (typeof MAINSITE_ID != 'undefined') ? MAINSITE_ID : 'https://haitacmanhnhat.vn';
    url += "/id/widget?type=widget&redirect-top=1" + "&task=" + task;
    url += "&redirect=" + encodeURIComponent(href);
    iframe_open(url);
    return !1;
}


var widthWidgetLogin = 390;
var heightWidgetLogin = 385;
var leftWidgetLogin = widthWidgetLogin / 2;
var topWidgetLogin = heightWidgetLogin / 2 + heightWidgetLogin / 5;

var iframe_destroy = function () {
    $('.iframe-box').remove();
}

var iframe_open = function (url, styles) {
    iframe_destroy();
    var iframeBox = $('<div class="iframe-box" onclick="iframe_destroy()"></div>');
    iframeBox.css({
        "z-index": 9999,
        "background": "rgba(0, 0, 0, 0.75)",
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "position": "fixed"
    });

    var closeBtn = $('<a href="javascript:void(0);" class="if-close" target="_self"></a>');
    closeBtn.css({
        "position": "fixed",
        "width": "35px",
        "height": "35px",
        "left": "calc(50% + 176px)",
        "top": "calc(50% - 286px)",
        "z-index": "10000",
        "background": 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAIAAAAnX375AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAyIDc5LmI3YzY0Y2NmOSwgMjAyNC8wNy8xNi0xMjozOTowNCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ4RkUwMDU2MkJDNDExRjBBQkU4QjI2ODlBNTRGMjc2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ4RkUwMDU3MkJDNDExRjBBQkU4QjI2ODlBNTRGMjc2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDhGRTAwNTQyQkM0MTFGMEFCRThCMjY4OUE1NEYyNzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDhGRTAwNTUyQkM0MTFGMEFCRThCMjY4OUE1NEYyNzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7Dvw/KAAADLUlEQVR42uxYS08TURiduTODaGcSYly4NzEqKKKg8iwtDyUSyxuUjQt/gPEXGH+AcW+hDyC67RsW7ogLXWniQgEVaHkVKKVzZ6Y1BL9bEqJSOnemtRudpLt2zpxzzznfN2XPvk4ypb14+Jx+8aRkeNuPnyOm5Ne/Cak2dGnXrMW6u3a1WWnqzmGfX6/M+Zq9ijPM3l75h9kC8dKX65XWXoR3T80G87G0TE+i3W3F1gcPWBDexVrcNsim1ZNvwzrC8mtLUmCcoLb2mlYY+OGOYSTviAHXiU/v9O3DxVekgAslt5QWh1bTYhiv6hbwQ5oqhrxCdJ7WsVw8JoXc8JiKtccQ1/SlOtw+yGqKJeLlV78bCwm3EQNZuJ240nwvfaWBCq/yBm4fQqmkFHQJy/NmcsmvL4tBD5wrtg9otXZ9PTtG2B8ZcXqSjy6YrwJuM3uuchLilYcr0bNtAOGU5B/nY18LbR9AFYPETYRrruSQPHSOQB4sM1N8bKE4hUeS4x9DqR2SnN89TPJw+wFSZMk3Jix9KWbHcltrhCvk1eo4VDhz4TpQZ1VsiUwc58/c85L2q+CmkFfufggwzP4+KCnfGYU8iJGJPP4sCDKLuiT5nHLXKLb1MQhBhCwzr+j5mRxe4KayuY8M4hiGFRY/G8UzAwl+Ueva4FCBolZVb6L9jQkLxsH2fsifGPYiFaccj8DDjFBW/v7NX2GZrm4E4yAFi0E3xAaSSoBTCaXxrqEepoUkebf2Zvl5Ds+P21wlk+5g5lArTAUJtyN5V2WI5h/9Ce0PJccl4qQl9HqYFjJdeRNuxx7g5fInt7VKFIaWaOqmURjRzD/oMzEM/bJ4bHLiWa4w6UDh6ibzkPBj3Hmf9IvfKSzP6bd/yEPOFfamvAqjfHpae2A/k0Ie8CdVS8AG43MSrnkVRsfP22E2oxE9owsGuml73RKZIhtMiwNCRQsJ/Ej+gF/ARTP/cvXwGJfYwLZ+UHhfKNOBJOcH+6CK4WBM4B266WCDAYXVI9v6Ecg6O0vw3PzKt0JWZ5KcoBukypyr0unYCuezor26bkQrXj79/7JXsost/d8TPwUYAJdjoU5xWH5nAAAAAElFTkSuQmCC) no-repeat',
        "background-size": "100%",
    });
    closeBtn.on('click', function(e) {
        e.stopPropagation();
        iframe_destroy();
    });

    iframeBox.append(closeBtn);

    var ifr = $('<iframe sandbox="allow-top-navigation allow-same-origin allow-scripts allow-popups allow-forms" border=0 style="border:0;overflow: hidden;position: fixed;left: calc(50% - ' + leftWidgetLogin + 'px);top: calc(50% - ' + topWidgetLogin + 'px);width:' + widthWidgetLogin + 'px;height: ' + heightWidgetLogin + 'px"/>');

    ifr.attr('src', url);

    $(ifr).addClass('iframe_open');
    if (typeof styles == 'object') {
        Object.keys(styles).forEach(function (key) {
            $(ifr).css(key, styles[key]);
        });
    }
    $(ifr).appendTo(iframeBox);
    $(iframeBox).appendTo('body');
}
function processResponseVerifySMS(form, response, callback_function_name) {
    form.html(getContentVerifySMS(response.data.cmd, response.data.code));
    redirectInFormRegisterFull = response.data.redirect_url;
    runWebsocket(response.data.username, response.data.type, response.data.code, response.data.time, response.data.sign, callback_function_name);
}

function getContentVerifySMS(cmd, code) {
    var html = '<div class="verify-sms"><h3>Yêu cầu ' + (TITLE ? '"' + TITLE + '"' : '') + ' của bạn đang được xử lý</h3>';
    html += '<p>Hãy xác nhận bằng cách dùng <b>số điện thoại đã đăng ký</b> gửi một tin nhắn đến số: <b class="highlight">' + SMS_NUMBER + '</b></p>';
    html += '<p>Với nội dung: <b class="highlight">' + cmd + ' ' + code + '</b> (không dấu, không phân biệt hoa thường)</p>';

    html += '<ol>';
    html += '<li>Tuyệt đối <b class="highlight">KHÔNG</b> gửi mã này cho bất kỳ ai</li>';
    html += '<li>Bạn có <b class="highlight">' + maxTimeConnect + ' phút</b> để thực hiện nhắn tin </li>';
    html += '</ol></div>';
    return html;
}

function callbackFunctionAddPhone(umsg){
    showConfirmAndRedirect(redirectInFormRegisterFull, umsg, 'Thông báo')
}

$(document).ready(function () {
    $('.birthday').daterangepicker({
        'locale': {
            'format': 'YYYY/MM/DD'
        },
        'maxSpan': {
            'days': 31
        },
        'maxDate': moment().format('YYYY/MM/DD'),
        'autoApply' : true,
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
    });

    $('.form-login').on('submit', function (e) {
        e.preventDefault();

        var form = $('.form-login');
        var username = form.find('input[name="username"]').val();
        var password = form.find('input[name="password"]').val();


        // Validate username
        if (!username) {
            form.find('input[name="username"]').addClass('is-invalid');
            error("Nhập tên tài khoản");
            return false;
        } else {
            form.find('input[name="username"]').removeClass('is-invalid');
        }

        // Validate password
        if (!password) {
            error("Nhập mật khẩu");
            form.find('input[name="password"]').addClass('is-invalid');
            return false;
        } else {
            form.find('input[name="password"]').removeClass('is-invalid');
        }

        var task = form.find('input[name="task"]').val();
        var token = form.find('input[name="g-recaptcha-response"]').val();

        // if (!token || _.isUndefined(token)) {
        //     showWarning('Yêu cầu không hợp lệ', 'Cảnh báo');
        //     return false;
        // }

        var redirectUrl = null;
        if (_.isEmpty(getRedirectUrl())) {
            redirectUrl = getRedirectPrevious() ? decodeURIComponent(getRedirectPrevious()) : '/id';
        }

        $.ajax({
            method: "POST",
            url: "/id/dang-nhap",
            data: { "username": username, "password": password, "redirect_url": redirectUrl , redirect_top: getRedirectTop(), "token": token, "task": task },
            beforeSend: function() {
                showLoading();
            },
            success: function (response) {
                hideLoading();

                if (response.status != 1) {
                    error(response.msg);
                    return false;
                }

                success(response.msg);

                if (response.data && !_.isEmpty(response.data.redirect_top)) {
                    redirectTop(response.data.redirect_url);
                }

                if (response.data && !_.isEmpty(response.data.redirect_url)) {
                    redirect(response.data.redirect_url);
                }
            },
            error: function(xhr) {
                hideLoading();
                error("Error occured.please try again");
                return false;
            },
        });
        return false;
    });

    $('.form-register').on('submit', function () {
        var form = $(this);
        var username = form.find('input[name="username"]').val();
        var password1 = form.find('input[name="password1"]').val();
        var password2 = form.find('input[name="password2"]').val();

        // Validate username
        if (!username) {
            form.find('input[name="username"]').addClass('is-invalid');
            error("Nhập tên tài khoản");
            return false;
        } else {
            form.find('input[name="username"]').removeClass('is-invalid');
        }

        // Validate password
        if (!password1) {
            error("Nhập mật khẩu");
            form.find('input[name="password"]').addClass('is-invalid');
            return false;
        } else {
            form.find('input[name="password"]').removeClass('is-invalid');
        }

        // Validate password match
        if (password1 !== password2) {
            error("Mật khẩu nhập lại không khớp");
            form.find('input[name="password2"]').addClass('is-invalid');
            return false;
        } else {
            form.find('input[name="password2"]').removeClass('is-invalid');
        }


        var token = form.find('input[name="g-recaptcha-response"]').val();
        var redirectUrl = null;
        if (_.isEmpty(getRedirectUrl())) {
            redirectUrl = getRedirectPrevious() ? decodeURIComponent(getRedirectPrevious()) : '/id';
        }

        $.ajax({
            type: "POST",
            url: "/id/dang-ky",
            data: { "username": username, "password1": password1, "password2": password2, "redirect_url": redirectUrl, redirect_top: getRedirectTop(), "token": token },
            beforeSend: function() {
                showLoading();
            },
            success: function (response) {
                hideLoading();
                if (response.status != 1) {
                    error(response.msg);
                    return false;
                }

                success(response.msg);
                if (response.data && !_.isEmpty(response.data.redirect_top)) {
                    redirectTop(response.data.redirect_url);
                }
                if (response.data && !_.isEmpty(response.data.redirect_url)) {
                    redirect(response.data.redirect_url);
                }
            },
            error: function(xhr) {
                hideLoading();
                error("Error occured.please try again");
                return false;
            },
        });
        return false;
    });

    $('.form-change-password').on('submit', function (e) {
        e.preventDefault();
        var form = $('.form-change-password');
        var passwordOld = form.find('input[name="passwordOld"]').val();
        var password1 = form.find('input[name="password1"]').val();
        var password2 = form.find('input[name="password2"]').val();

        // Validate username
        if (!passwordOld) {
            form.find('input[name="passwordOld"]').addClass('is-invalid');
            error("Nhập mật khẩu cũ");
            return false;
        } else {
            form.find('input[name="passwordOld"]').removeClass('is-invalid');
        }

        // Validate password
        if (!password1) {
            error("Nhập mật khẩu mới");
            form.find('input[name="password"]').addClass('is-invalid');
            return false;
        } else {
            form.find('input[name="password"]').removeClass('is-invalid');
        }

        // Validate password match
        if (password1 !== password2) {
            error("Mật khẩu nhập lại không khớp");
            form.find('input[name="password2"]').addClass('is-invalid');
            return false;
        } else {
            form.find('input[name="password2"]').removeClass('is-invalid');
        }

        var token = form.find('input[name="g-recaptcha-response"]').val();

        // if (!token || _.isUndefined(token)) {
        //     showWarning('Yêu cầu không hợp lệ', 'Cảnh báo');
        //     return false;
        // }

        var redirectUrl = null;
        if (_.isEmpty(getRedirectUrl())) {
            redirectUrl = getRedirectPrevious() ? decodeURIComponent(getRedirectPrevious()) : '/';
        }

        $.ajax({
            method: "POST",
            url: "/id/doi-mat-khau",
            data: { "passwordOld": passwordOld, "password1": password1, "password2": password2, "redirect_url": redirectUrl , redirect_top: getRedirectTop(), "token": token},
            beforeSend: function() {
                showLoading();
            },
            success: function (response) {
                hideLoading();

                if (response.status != 1) {
                    if (response.status == -4) {
                        SwalFire('warning', response.msg);
                        return false;
                    }
                    error(response.msg);
                    return false;
                }

                success(response.msg);
                setTimeout(() => {
                    if (response.data && !_.isEmpty(response.data.redirect_top)) {
                        redirectTop(response.data.redirect_url);
                    }
                    if (response.data && !_.isEmpty(response.data.redirect_url)) {
                        redirect(response.data.redirect_url);
                    }
                }, 2000);
            },
            error: function(xhr) {
                hideLoading();
                error("Error occured.please try again");
                return false;
            },
        });
        return false;
    });

    $('.form-reset-password').on('submit', function (e) {
        e.preventDefault();
        var form = $('.form-reset-password');
        var code = form.find('input[name="code"]').val();
        var password1 = form.find('input[name="password1"]').val();
        var password2 = form.find('input[name="password2"]').val();

        // Validate username
        if (!code) {
            form.find('input[name="code"]').addClass('is-invalid');
            error("Nhập mã xác thực");
            return false;
        } else {
            form.find('input[name="code"]').removeClass('is-invalid');
        }

        // Validate password
        if (!password1) {
            error("Nhập mật khẩu");
            form.find('input[name="password"]').addClass('is-invalid');
            return false;
        } else {
            form.find('input[name="password"]').removeClass('is-invalid');
        }

        // Validate password match
        if (password1 !== password2) {
            error("Mật khẩu nhập lại không khớp");
            form.find('input[name="password2"]').addClass('is-invalid');
            return false;
        } else {
            form.find('input[name="password2"]').removeClass('is-invalid');
        }

        var token = form.find('input[name="g-recaptcha-response"]').val();

        // if (!token || _.isUndefined(token)) {
        //     showWarning('Yêu cầu không hợp lệ', 'Cảnh báo');
        //     return false;
        // }

        var redirectUrl = null;
        if (_.isEmpty(getRedirectUrl())) {
            redirectUrl = getRedirectPrevious() ? decodeURIComponent(getRedirectPrevious()) : '/';
        }

        $.ajax({
            method: "POST",
            url: "/id/dat-lai-mat-khau",
            data: { "code": code, "password1": password1, "password2": password2, "redirect_url": redirectUrl , redirect_top: getRedirectTop(), "token": token},
            beforeSend: function() {
                showLoading();
            },
            success: function (response) {
                hideLoading();

                if (response.status != 1) {
                    error(response.msg);
                    return false;
                }

                success(response.msg);

                setTimeout(() => {
                    if (response.data && !_.isEmpty(response.data.redirect_top)) {
                        redirectTop(response.data.redirect_url);
                    }
                    if (response.data && !_.isEmpty(response.data.redirect_url)) {
                        redirect(response.data.redirect_url);
                    }
                }, 2000);
            },
            error: function(xhr) {
                hideLoading();
                error("Error occured.please try again");
                return false;
            },
        });
        return false;
    });

    $('.form-forget-password').on('submit', function (e) {
        e.preventDefault();
        var form = $('.form-forget-password');
        var username = form.find('input[name="username"]').val();
        var email = form.find('input[name="email"]').val();

        // Validate username
        if (!username) {
            form.find('input[name="username"]').addClass('is-invalid');
            error("Nhập tên tài khoản");
            return false;
        } else {
            form.find('input[name="username"]').removeClass('is-invalid');
        }

        // Validate email
        if (!email) {
            error("Nhập email");
            form.find('input[name="email"]').addClass('is-invalid');
            return false;
        } else {
            form.find('input[name="email"]').removeClass('is-invalid');
        }

        var token = form.find('input[name="g-recaptcha-response"]').val();

        // if (!token || _.isUndefined(token)) {
        //     showWarning('Yêu cầu không hợp lệ', 'Cảnh báo');
        //     return false;
        // }

        var redirectUrl = null;
        if (_.isEmpty(getRedirectUrl())) {
            redirectUrl = getRedirectPrevious() ? decodeURIComponent(getRedirectPrevious()) : '/';
        }

        $.ajax({
            method: "POST",
            url: "/id/quen-mat-khau",
            data: { "username": username, "email": email, "redirect_url": redirectUrl , redirect_top: getRedirectTop(), "token": token},
            beforeSend: function() {
                showLoading();
            },
            success: function (response) {
                hideLoading();

                if (response.status != 1) {
                    error(response.msg);
                    return false;
                }

                success(response.msg);

                setTimeout(() => {
                    if (response.data && !_.isEmpty(response.data.redirect_top)) {
                        redirectTop(response.data.redirect_url);
                    }

                    if (response.data && !_.isEmpty(response.data.redirect_url)) {
                        redirect(response.data.redirect_url);
                    }
                }, 2000);
            },
            error: function(xhr) {
                hideLoading();
                error("Error occured.please try again");
                return false;
            },
        });
        return false;
    });


    var urlCurently = document.URL;
    var arrayUrlFormUpdateInfo = ['/id/cap-nhat-email', '/id/doi-email', '/id/doi-so-dien-thoai'];
    const UPDATE_MAIL_STEP_1 = 1;
    const UPDATE_MAIL_STEP_2 = 2;

    if (arrayUrlFormUpdateInfo.includes(new URL(urlCurently).pathname)) {
        showLoading();
        setTimeout(() => {
            hideLoading();
            var itMe = getAndUpdateStateMe();

            itMe.done(function(response) {
                if (response.status != 1) {
                    redirect('/');
                    return false;
                }

                // update email
                if (response.data.email == 'Chưa xác thực') {
                    var form = $('.form-update-email');
                    if (form.length > 0) {
                        form.find('input[name="stepUpdateEmail"]').val(UPDATE_MAIL_STEP_1);

                        $('.breadcrumb').append('<div class="alert alert-warning" role="alert">Tài khoản của bạn chưa có Email. Vui lòng cập nhật Email trước!</div>');
                        $('.form-update-email-1').removeClass('d-none');
                        $('.user-box .text-blue').text('Cập nhật email');

                        form.on('submit', function (e) {
                            e.preventDefault();

                            var email = form.find('input[name="email"]').val();
                            if (!email) {
                                error("Nhập email");
                                form.find('input[name="email"]').addClass('is-invalid');
                                return false;
                            } else {
                                form.find('input[name="email"]').removeClass('is-invalid');
                            }

                            var code = form.find('input[name="code"]').val();
                            var postData = {email: email, redirect_top: getRedirectTop(), code: code, stepUpdateEmail: form.find('input[name="stepUpdateEmail"]').val() };

                            $.ajax({
                                method: "POST",
                                url: "/id/cap-nhat-email",
                                data: postData,
                                beforeSend: function() {
                                    showLoading();
                                },
                                success: function (response) {
                                    hideLoading();

                                    if (response.status != 1) {
                                        if (response.status == -2) {
                                            warning(response.msg);
                                            setTimeout(() => {
                                                redirect('/id/dang-nhap');
                                            }, 1200);
                                            return false;
                                        }
                                        error(response.msg);
                                        return false;
                                    }

                                    success(response.msg);
                                    $('.code-confirm').removeClass('d-none');
                                    $('.form-update-email-1').find('input[name="email"]').attr('disabled', true);
                                    $('.form-update-email-1').find('button').text('Xác nhận');
                                    form.find('input[name="stepUpdateEmail"]').val(UPDATE_MAIL_STEP_2);

                                    setTimeout(() => {
                                        if (response.data && !_.isEmpty(response.data.redirect_top)) {
                                            redirectTop(response.data.redirect_url);
                                        }
                                        if (response.data && !_.isEmpty(response.data.redirect_url)) {
                                            redirect(response.data.redirect_url);
                                        }
                                    }, 2000);
                                },
                                error: function(xhr) {
                                    hideLoading();
                                    error("Error occured.please try again");
                                    return false;
                                },
                            });
                        });
                    }
                } else {
                    // change email
                    var form = $('.form-change-email');
                    if (form.length > 0) {
                        form.find('input[name="stepChangeEmail"]').val(UPDATE_MAIL_STEP_1);

                        $('.form-change-email-1').removeClass('d-none');
                        $('.user-box .text-blue').text('Đổi email');

                        form.on('submit', function (e) {
                            e.preventDefault();

                            var oldemail = form.find('input[name="oldemail"]').val();
                            if (!oldemail) {
                                error("Nhập email cũ");
                                form.find('input[name="oldemail"]').addClass('is-invalid');
                                return false;
                            } else {
                                form.find('input[name="oldemail"]').removeClass('is-invalid');
                            }
                            var oldemail = form.find('input[name="oldemail"]').val();

                            var email = form.find('input[name="email"]').val();
                            if (!email) {
                                error("Nhập email");
                                form.find('input[name="email"]').addClass('is-invalid');
                                return false;
                            } else {
                                form.find('input[name="email"]').removeClass('is-invalid');
                            }

                            if (oldemail === email) {
                                error("Email mới không được trùng với email cũ");
                                form.find('input[name="email"]').addClass('is-invalid');
                                return false;
                            } else {
                                form.find('input[name="email"]').removeClass('is-invalid');
                            }

                            var code = form.find('input[name="code"]').val();
                            var postData = {email: email, oldemai:oldemail, redirect_top: getRedirectTop(), code: code, stepChangeEmail: form.find('input[name="stepChangeEmail"]').val() };

                            $.ajax({
                                method: "POST",
                                url: "/id/doi-email",
                                data: postData,
                                beforeSend: function() {
                                    showLoading();
                                },
                                success: function (response) {
                                    hideLoading();

                                    if (response.status != 1) {
                                        if (response.status == -2) {
                                            warning(response.msg);
                                            setTimeout(() => {
                                                redirect('/id/dang-nhap');
                                            }, 1200);
                                            return false;
                                        }
                                        error(response.msg);
                                        return false;
                                    }

                                    success(response.msg);
                                    $('.code-confirm').removeClass('d-none');
                                    $('.old-email').addClass('d-none');
                                    form.find('input[name="email"]').attr('disabled', true);
                                    form.find('button').text('Xác nhận');
                                    form.find('input[name="stepChangeEmail"]').val(UPDATE_MAIL_STEP_2);

                                    setTimeout(() => {
                                        if (response.data && !_.isEmpty(response.data.redirect_top)) {
                                            redirectTop(response.data.redirect_url);
                                        }
                                        if (response.data && !_.isEmpty(response.data.redirect_url)) {
                                            redirect(response.data.redirect_url);
                                        }
                                    }, 2000);
                                },
                                error: function(xhr) {
                                    hideLoading();
                                    error("Error occured.please try again");
                                    return false;
                                },
                            });
                        });
                    }
                }

                // change phone
                var formChangePhone = $('.form-change-phone');
                var UPDATE_PHONE_STEP = 1;
                if (formChangePhone.length > 0) {
                    if (response.data.phone != 'Chưa xác thực') {
                        UPDATE_PHONE_STEP = 2;
                        formChangePhone.find('.old-phone').removeClass('d-none');
                    }

                    formChangePhone.on('submit', function (e) {
                        e.preventDefault();

                        var phone = formChangePhone.find('input[name="phone"]').val();
                        if (!phone) {
                            error("Nhập số điện thoại");
                            formChangePhone.find('input[name="phone"]').addClass('is-invalid');
                            return false;
                        } else {
                            formChangePhone.find('input[name="phone"]').removeClass('is-invalid');
                        }

                        var oldPhone = null;
                        if (UPDATE_PHONE_STEP == 2) {
                            oldPhone = formChangePhone.find('input[name="oldPhone"]').val();
                            if (!oldPhone) {
                                error("Nhập số điện thoại cũ");
                                formChangePhone.find('input[name="oldPhone"]').addClass('is-invalid');
                                return false;
                            } else {
                                formChangePhone.find('input[name="oldPhone"]').removeClass('is-invalid');
                            }

                            if (oldPhone === phone) {
                                error("Số điện thoại mới không được trùng với số điện thoại cũ");
                                formChangePhone.find('input[name="phone"]').addClass('is-invalid');
                                return false;
                            } else {
                                formChangePhone.find('input[name="phone"]').removeClass('is-invalid');
                            }
                        }

                        var postData = {phone: phone, oldPhone:oldPhone, redirect_top: getRedirectTop() };

                        $.ajax({
                            method: "POST",
                            url: "/id/doi-so-dien-thoai",
                            data: postData,
                            beforeSend: function() {
                                showLoading();
                            },
                            success: function (response) {
                                hideLoading();

                                if (response.status != 1) {
                                    if (response.status == -2) {
                                        warning(response.msg);
                                        setTimeout(() => {
                                            redirect('/id/dang-nhap');
                                        }, 1200);
                                        return false;
                                    }
                                    error(response.msg);
                                    return false;
                                }

                                success(response.msg);

                                processResponseVerifySMS(formChangePhone, response, 'callbackFunctionAddPhone');
                            },
                            error: function(xhr) {
                                hideLoading();
                                error("Error occured.please try again");
                                return false;
                            },
                        });
                    });
                }


            }).fail(function() {
                error("Lỗi request không hợp lệ! #1");
            });
        }, 950);
    }

    $('.form-change-profile').on('submit', function (e) {
        e.preventDefault();
        var form = $(this);

        var fullname = form.find('input[name="fullname"]').val();
        var birthday = form.find('input[name="birthday"]').val();
        var sex = form.find('input[name="sex"]:checked').val();

        // Validate username
        if (!fullname) {
            form.find('input[name="fullname"]').addClass('is-invalid');
            error("Nhập họ tên đầy đủ");
            return false;
        } else {
            form.find('input[name="fullname"]').removeClass('is-invalid');
        }

        var token = form.find('input[name="g-recaptcha-response"]').val();

        // if (!token || _.isUndefined(token)) {
        //     showWarning('Yêu cầu không hợp lệ', 'Cảnh báo');
        //     return false;
        // }

        var redirectUrl = null;
        if (_.isEmpty(getRedirectUrl())) {
            redirectUrl = getRedirectPrevious() ? decodeURIComponent(getRedirectPrevious()) : '/';
        }

        $.ajax({
            method: "POST",
            url: "/id/cap-nhat-tai-khoan",
            data: { "fullname": fullname, "birthday": birthday, "sex": sex, "redirect_url": redirectUrl , redirect_top: getRedirectTop(), "token": token},
            beforeSend: function() {
                showLoading();
            },
            success: function (response) {
                hideLoading();

                if (response.status != 1) {
                    if (response.status == -2) {
                        showConfirmAndRedirect('/id/dang-nhap', response.msg);
                        return false;
                    }
                    error(response.msg);
                    return false;
                }

                success(response.msg);

                setTimeout(() => {
                    redirect(response.data.redirect_url);
                }, 1200);
            },
            error: function(xhr) {
                hideLoading();
                error("Error occured.please try again");
                return false;
            },
        });
        return false;
    });
});

/*
== malihu jquery custom scrollbar plugin ==
Version: 3.1.5
Plugin URI: http://manos.malihu.gr/jquery-custom-content-scroller
Author: malihu
Author URI: http://manos.malihu.gr
License: MIT License (MIT)
*/

/*
Copyright Manos Malihutsakis (email: manos@malihu.gr)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

/*
The code below is fairly long, fully commented and should be normally used in development.
For production, use either the minified jquery.mCustomScrollbar.min.js script or
the production-ready jquery.mCustomScrollbar.concat.min.js which contains the plugin
and dependencies (minified).
*/

(function(factory){
	if(typeof define==="function" && define.amd){
		define(["jquery"],factory);
	}else if(typeof module!=="undefined" && module.exports){
		module.exports=factory;
	}else{
		factory(jQuery,window,document);
	}
}(function($){
(function(init){
	var _rjs=typeof define==="function" && define.amd, /* RequireJS */
		_njs=typeof module !== "undefined" && module.exports, /* NodeJS */
		_dlp=("https:"==document.location.protocol) ? "https:" : "http:", /* location protocol */
		_url="cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";
	if(!_rjs){
		if(_njs){
			require("jquery-mousewheel")($);
		}else{
			/* load jquery-mousewheel plugin (via CDN) if it's not present or not loaded via RequireJS
			(works when mCustomScrollbar fn is called on window load) */
			$.event.special.mousewheel || $("head").append(decodeURI("%3Cscript src="+_dlp+"//"+_url+"%3E%3C/script%3E"));
		}
	}
	init();
}(function(){

	/*
	----------------------------------------
	PLUGIN NAMESPACE, PREFIX, DEFAULT SELECTOR(S)
	----------------------------------------
	*/

	var pluginNS="mCustomScrollbar",
		pluginPfx="mCS",
		defaultSelector=".mCustomScrollbar",





	/*
	----------------------------------------
	DEFAULT OPTIONS
	----------------------------------------
	*/

		defaults={
			/*
			set element/content width/height programmatically
			values: boolean, pixels, percentage
				option						default
				-------------------------------------
				setWidth					false
				setHeight					false
			*/
			/*
			set the initial css top property of content
			values: string (e.g. "-100px", "10%" etc.)
			*/
			setTop:0,
			/*
			set the initial css left property of content
			values: string (e.g. "-100px", "10%" etc.)
			*/
			setLeft:0,
			/*
			scrollbar axis (vertical and/or horizontal scrollbars)
			values (string): "y", "x", "yx"
			*/
			axis:"y",
			/*
			position of scrollbar relative to content
			values (string): "inside", "outside" ("outside" requires elements with position:relative)
			*/
			scrollbarPosition:"inside",
			/*
			scrolling inertia
			values: integer (milliseconds)
			*/
			scrollInertia:950,
			/*
			auto-adjust scrollbar dragger length
			values: boolean
			*/
			autoDraggerLength:true,
			/*
			auto-hide scrollbar when idle
			values: boolean
				option						default
				-------------------------------------
				autoHideScrollbar			false
			*/
			/*
			auto-expands scrollbar on mouse-over and dragging
			values: boolean
				option						default
				-------------------------------------
				autoExpandScrollbar			false
			*/
			/*
			always show scrollbar, even when there's nothing to scroll
			values: integer (0=disable, 1=always show dragger rail and buttons, 2=always show dragger rail, dragger and buttons), boolean
			*/
			alwaysShowScrollbar:0,
			/*
			scrolling always snaps to a multiple of this number in pixels
			values: integer, array ([y,x])
				option						default
				-------------------------------------
				snapAmount					null
			*/
			/*
			when snapping, snap with this number in pixels as an offset
			values: integer
			*/
			snapOffset:0,
			/*
			mouse-wheel scrolling
			*/
			mouseWheel:{
				/*
				enable mouse-wheel scrolling
				values: boolean
				*/
				enable:true,
				/*
				scrolling amount in pixels
				values: "auto", integer
				*/
				scrollAmount:"auto",
				/*
				mouse-wheel scrolling axis
				the default scrolling direction when both vertical and horizontal scrollbars are present
				values (string): "y", "x"
				*/
				axis:"y",
				/*
				prevent the default behaviour which automatically scrolls the parent element(s) when end of scrolling is reached
				values: boolean
					option						default
					-------------------------------------
					preventDefault				null
				*/
				/*
				the reported mouse-wheel delta value. The number of lines (translated to pixels) one wheel notch scrolls.
				values: "auto", integer
				"auto" uses the default OS/browser value
				*/
				deltaFactor:"auto",
				/*
				normalize mouse-wheel delta to -1 or 1 (disables mouse-wheel acceleration)
				values: boolean
					option						default
					-------------------------------------
					normalizeDelta				null
				*/
				/*
				invert mouse-wheel scrolling direction
				values: boolean
					option						default
					-------------------------------------
					invert						null
				*/
				/*
				the tags that disable mouse-wheel when cursor is over them
				*/
				disableOver:["select","option","keygen","datalist","textarea"]
			},
			/*
			scrollbar buttons
			*/
			scrollButtons:{
				/*
				enable scrollbar buttons
				values: boolean
					option						default
					-------------------------------------
					enable						null
				*/
				/*
				scrollbar buttons scrolling type
				values (string): "stepless", "stepped"
				*/
				scrollType:"stepless",
				/*
				scrolling amount in pixels
				values: "auto", integer
				*/
				scrollAmount:"auto"
				/*
				tabindex of the scrollbar buttons
				values: false, integer
					option						default
					-------------------------------------
					tabindex					null
				*/
			},
			/*
			keyboard scrolling
			*/
			keyboard:{
				/*
				enable scrolling via keyboard
				values: boolean
				*/
				enable:true,
				/*
				keyboard scrolling type
				values (string): "stepless", "stepped"
				*/
				scrollType:"stepless",
				/*
				scrolling amount in pixels
				values: "auto", integer
				*/
				scrollAmount:"auto"
			},
			/*
			enable content touch-swipe scrolling
			values: boolean, integer, string (number)
			integer values define the axis-specific minimum amount required for scrolling momentum
			*/
			contentTouchScroll:25,
			/*
			enable/disable document (default) touch-swipe scrolling
			*/
			documentTouchScroll:true,
			/*
			advanced option parameters
			*/
			advanced:{
				/*
				auto-expand content horizontally (for "x" or "yx" axis)
				values: boolean, integer (the value 2 forces the non scrollHeight/scrollWidth method, the value 3 forces the scrollHeight/scrollWidth method)
					option						default
					-------------------------------------
					autoExpandHorizontalScroll	null
				*/
				/*
				auto-scroll to elements with focus
				*/
				autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
				/*
				auto-update scrollbars on content, element or viewport resize
				should be true for fluid layouts/elements, adding/removing content dynamically, hiding/showing elements, content with images etc.
				values: boolean
				*/
				updateOnContentResize:true,
				/*
				auto-update scrollbars each time each image inside the element is fully loaded
				values: "auto", boolean
				*/
				updateOnImageLoad:"auto",
				/*
				auto-update scrollbars based on the amount and size changes of specific selectors
				useful when you need to update the scrollbar(s) automatically, each time a type of element is added, removed or changes its size
				values: boolean, string (e.g. "ul li" will auto-update scrollbars each time list-items inside the element are changed)
				a value of true (boolean) will auto-update scrollbars each time any element is changed
					option						default
					-------------------------------------
					updateOnSelectorChange		null
				*/
				/*
				extra selectors that'll allow scrollbar dragging upon mousemove/up, pointermove/up, touchend etc. (e.g. "selector-1, selector-2")
					option						default
					-------------------------------------
					extraDraggableSelectors		null
				*/
				/*
				extra selectors that'll release scrollbar dragging upon mouseup, pointerup, touchend etc. (e.g. "selector-1, selector-2")
					option						default
					-------------------------------------
					releaseDraggableSelectors	null
				*/
				/*
				auto-update timeout
				values: integer (milliseconds)
				*/
				autoUpdateTimeout:60
			},
			/*
			scrollbar theme
			values: string (see CSS/plugin URI for a list of ready-to-use themes)
			*/
			theme:"light",
			/*
			user defined callback functions
			*/
			callbacks:{
				/*
				Available callbacks:
					callback					default
					-------------------------------------
					onCreate					null
					onInit						null
					onScrollStart				null
					onScroll					null
					onTotalScroll				null
					onTotalScrollBack			null
					whileScrolling				null
					onOverflowY					null
					onOverflowX					null
					onOverflowYNone				null
					onOverflowXNone				null
					onImageLoad					null
					onSelectorChange			null
					onBeforeUpdate				null
					onUpdate					null
				*/
				onTotalScrollOffset:0,
				onTotalScrollBackOffset:0,
				alwaysTriggerOffsets:true
			}
			/*
			add scrollbar(s) on all elements matching the current selector, now and in the future
			values: boolean, string
			string values: "on" (enable), "once" (disable after first invocation), "off" (disable)
			liveSelector values: string (selector)
				option						default
				-------------------------------------
				live						false
				liveSelector				null
			*/
		},





	/*
	----------------------------------------
	VARS, CONSTANTS
	----------------------------------------
	*/

		totalInstances=0, /* plugin instances amount */
		liveTimers={}, /* live option timers */
		oldIE=(window.attachEvent && !window.addEventListener) ? 1 : 0, /* detect IE < 9 */
		touchActive=false,touchable, /* global touch vars (for touch and pointer events) */
		/* general plugin classes */
		classes=[
			"mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar",
			"mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer",
			"mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"
		],





	/*
	----------------------------------------
	METHODS
	----------------------------------------
	*/

		methods={

			/*
			plugin initialization method
			creates the scrollbar(s), plugin data object and options
			----------------------------------------
			*/

			init:function(options){

				var options=$.extend(true,{},defaults,options),
					selector=_selector.call(this); /* validate selector */

				/*
				if live option is enabled, monitor for elements matching the current selector and
				apply scrollbar(s) when found (now and in the future)
				*/
				if(options.live){
					var liveSelector=options.liveSelector || this.selector || defaultSelector, /* live selector(s) */
						$liveSelector=$(liveSelector); /* live selector(s) as jquery object */
					if(options.live==="off"){
						/*
						disable live if requested
						usage: $(selector).mCustomScrollbar({live:"off"});
						*/
						removeLiveTimers(liveSelector);
						return;
					}
					liveTimers[liveSelector]=setTimeout(function(){
						/* call mCustomScrollbar fn on live selector(s) every half-second */
						$liveSelector.mCustomScrollbar(options);
						if(options.live==="once" && $liveSelector.length){
							/* disable live after first invocation */
							removeLiveTimers(liveSelector);
						}
					},500);
				}else{
					removeLiveTimers(liveSelector);
				}

				/* options backward compatibility (for versions < 3.0.0) and normalization */
				options.setWidth=(options.set_width) ? options.set_width : options.setWidth;
				options.setHeight=(options.set_height) ? options.set_height : options.setHeight;
				options.axis=(options.horizontalScroll) ? "x" : _findAxis(options.axis);
				options.scrollInertia=options.scrollInertia>0 && options.scrollInertia<17 ? 17 : options.scrollInertia;
				if(typeof options.mouseWheel!=="object" &&  options.mouseWheel==true){ /* old school mouseWheel option (non-object) */
					options.mouseWheel={enable:true,scrollAmount:"auto",axis:"y",preventDefault:false,deltaFactor:"auto",normalizeDelta:false,invert:false}
				}
				options.mouseWheel.scrollAmount=!options.mouseWheelPixels ? options.mouseWheel.scrollAmount : options.mouseWheelPixels;
				options.mouseWheel.normalizeDelta=!options.advanced.normalizeMouseWheelDelta ? options.mouseWheel.normalizeDelta : options.advanced.normalizeMouseWheelDelta;
				options.scrollButtons.scrollType=_findScrollButtonsType(options.scrollButtons.scrollType);

				_theme(options); /* theme-specific options */

				/* plugin constructor */
				return $(selector).each(function(){

					var $this=$(this);

					if(!$this.data(pluginPfx)){ /* prevent multiple instantiations */

						/* store options and create objects in jquery data */
						$this.data(pluginPfx,{
							idx:++totalInstances, /* instance index */
							opt:options, /* options */
							scrollRatio:{y:null,x:null}, /* scrollbar to content ratio */
							overflowed:null, /* overflowed axis */
							contentReset:{y:null,x:null}, /* object to check when content resets */
							bindEvents:false, /* object to check if events are bound */
							tweenRunning:false, /* object to check if tween is running */
							sequential:{}, /* sequential scrolling object */
							langDir:$this.css("direction"), /* detect/store direction (ltr or rtl) */
							cbOffsets:null, /* object to check whether callback offsets always trigger */
							/*
							object to check how scrolling events where last triggered
							"internal" (default - triggered by this script), "external" (triggered by other scripts, e.g. via scrollTo method)
							usage: object.data("mCS").trigger
							*/
							trigger:null,
							/*
							object to check for changes in elements in order to call the update method automatically
							*/
							poll:{size:{o:0,n:0},img:{o:0,n:0},change:{o:0,n:0}}
						});

						var d=$this.data(pluginPfx),o=d.opt,
							/* HTML data attributes */
							htmlDataAxis=$this.data("mcs-axis"),htmlDataSbPos=$this.data("mcs-scrollbar-position"),htmlDataTheme=$this.data("mcs-theme");

						if(htmlDataAxis){o.axis=htmlDataAxis;} /* usage example: data-mcs-axis="y" */
						if(htmlDataSbPos){o.scrollbarPosition=htmlDataSbPos;} /* usage example: data-mcs-scrollbar-position="outside" */
						if(htmlDataTheme){ /* usage example: data-mcs-theme="minimal" */
							o.theme=htmlDataTheme;
							_theme(o); /* theme-specific options */
						}

						_pluginMarkup.call(this); /* add plugin markup */

						if(d && o.callbacks.onCreate && typeof o.callbacks.onCreate==="function"){o.callbacks.onCreate.call(this);} /* callbacks: onCreate */

						$("#mCSB_"+d.idx+"_container img:not(."+classes[2]+")").addClass(classes[2]); /* flag loaded images */

						methods.update.call(null,$this); /* call the update method */

					}

				});

			},
			/* ---------------------------------------- */



			/*
			plugin update method
			updates content and scrollbar(s) values, events and status
			----------------------------------------
			usage: $(selector).mCustomScrollbar("update");
			*/

			update:function(el,cb){

				var selector=el || _selector.call(this); /* validate selector */

				return $(selector).each(function(){

					var $this=$(this);

					if($this.data(pluginPfx)){ /* check if plugin has initialized */

						var d=$this.data(pluginPfx),o=d.opt,
							mCSB_container=$("#mCSB_"+d.idx+"_container"),
							mCustomScrollBox=$("#mCSB_"+d.idx),
							mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")];

						if(!mCSB_container.length){return;}

						if(d.tweenRunning){_stop($this);} /* stop any running tweens while updating */

						if(cb && d && o.callbacks.onBeforeUpdate && typeof o.callbacks.onBeforeUpdate==="function"){o.callbacks.onBeforeUpdate.call(this);} /* callbacks: onBeforeUpdate */

						/* if element was disabled or destroyed, remove class(es) */
						if($this.hasClass(classes[3])){$this.removeClass(classes[3]);}
						if($this.hasClass(classes[4])){$this.removeClass(classes[4]);}

						/* css flexbox fix, detect/set max-height */
						mCustomScrollBox.css("max-height","none");
						if(mCustomScrollBox.height()!==$this.height()){mCustomScrollBox.css("max-height",$this.height());}

						_expandContentHorizontally.call(this); /* expand content horizontally */

						if(o.axis!=="y" && !o.advanced.autoExpandHorizontalScroll){
							mCSB_container.css("width",_contentWidth(mCSB_container));
						}

						d.overflowed=_overflowed.call(this); /* determine if scrolling is required */

						_scrollbarVisibility.call(this); /* show/hide scrollbar(s) */

						/* auto-adjust scrollbar dragger length analogous to content */
						if(o.autoDraggerLength){_setDraggerLength.call(this);}

						_scrollRatio.call(this); /* calculate and store scrollbar to content ratio */

						_bindEvents.call(this); /* bind scrollbar events */

						/* reset scrolling position and/or events */
						var to=[Math.abs(mCSB_container[0].offsetTop),Math.abs(mCSB_container[0].offsetLeft)];
						if(o.axis!=="x"){ /* y/yx axis */
							if(!d.overflowed[0]){ /* y scrolling is not required */
								_resetContentPosition.call(this); /* reset content position */
								if(o.axis==="y"){
									_unbindEvents.call(this);
								}else if(o.axis==="yx" && d.overflowed[1]){
									_scrollTo($this,to[1].toString(),{dir:"x",dur:0,overwrite:"none"});
								}
							}else if(mCSB_dragger[0].height()>mCSB_dragger[0].parent().height()){
								_resetContentPosition.call(this); /* reset content position */
							}else{ /* y scrolling is required */
								_scrollTo($this,to[0].toString(),{dir:"y",dur:0,overwrite:"none"});
								d.contentReset.y=null;
							}
						}
						if(o.axis!=="y"){ /* x/yx axis */
							if(!d.overflowed[1]){ /* x scrolling is not required */
								_resetContentPosition.call(this); /* reset content position */
								if(o.axis==="x"){
									_unbindEvents.call(this);
								}else if(o.axis==="yx" && d.overflowed[0]){
									_scrollTo($this,to[0].toString(),{dir:"y",dur:0,overwrite:"none"});
								}
							}else if(mCSB_dragger[1].width()>mCSB_dragger[1].parent().width()){
								_resetContentPosition.call(this); /* reset content position */
							}else{ /* x scrolling is required */
								_scrollTo($this,to[1].toString(),{dir:"x",dur:0,overwrite:"none"});
								d.contentReset.x=null;
							}
						}

						/* callbacks: onImageLoad, onSelectorChange, onUpdate */
						if(cb && d){
							if(cb===2 && o.callbacks.onImageLoad && typeof o.callbacks.onImageLoad==="function"){
								o.callbacks.onImageLoad.call(this);
							}else if(cb===3 && o.callbacks.onSelectorChange && typeof o.callbacks.onSelectorChange==="function"){
								o.callbacks.onSelectorChange.call(this);
							}else if(o.callbacks.onUpdate && typeof o.callbacks.onUpdate==="function"){
								o.callbacks.onUpdate.call(this);
							}
						}

						_autoUpdate.call(this); /* initialize automatic updating (for dynamic content, fluid layouts etc.) */

					}

				});

			},
			/* ---------------------------------------- */



			/*
			plugin scrollTo method
			triggers a scrolling event to a specific value
			----------------------------------------
			usage: $(selector).mCustomScrollbar("scrollTo",value,options);
			*/

			scrollTo:function(val,options){

				/* prevent silly things like $(selector).mCustomScrollbar("scrollTo",undefined); */
				if(typeof val=="undefined" || val==null){return;}

				var selector=_selector.call(this); /* validate selector */

				return $(selector).each(function(){

					var $this=$(this);

					if($this.data(pluginPfx)){ /* check if plugin has initialized */

						var d=$this.data(pluginPfx),o=d.opt,
							/* method default options */
							methodDefaults={
								trigger:"external", /* method is by default triggered externally (e.g. from other scripts) */
								scrollInertia:o.scrollInertia, /* scrolling inertia (animation duration) */
								scrollEasing:"mcsEaseInOut", /* animation easing */
								moveDragger:false, /* move dragger instead of content */
								timeout:60, /* scroll-to delay */
								callbacks:true, /* enable/disable callbacks */
								onStart:true,
								onUpdate:true,
								onComplete:true
							},
							methodOptions=$.extend(true,{},methodDefaults,options),
							to=_arr.call(this,val),dur=methodOptions.scrollInertia>0 && methodOptions.scrollInertia<17 ? 17 : methodOptions.scrollInertia;

						/* translate yx values to actual scroll-to positions */
						to[0]=_to.call(this,to[0],"y");
						to[1]=_to.call(this,to[1],"x");

						/*
						check if scroll-to value moves the dragger instead of content.
						Only pixel values apply on dragger (e.g. 100, "100px", "-=100" etc.)
						*/
						if(methodOptions.moveDragger){
							to[0]*=d.scrollRatio.y;
							to[1]*=d.scrollRatio.x;
						}

						methodOptions.dur=_isTabHidden() ? 0 : dur; //skip animations if browser tab is hidden

						setTimeout(function(){
							/* do the scrolling */
							if(to[0]!==null && typeof to[0]!=="undefined" && o.axis!=="x" && d.overflowed[0]){ /* scroll y */
								methodOptions.dir="y";
								methodOptions.overwrite="all";
								_scrollTo($this,to[0].toString(),methodOptions);
							}
							if(to[1]!==null && typeof to[1]!=="undefined" && o.axis!=="y" && d.overflowed[1]){ /* scroll x */
								methodOptions.dir="x";
								methodOptions.overwrite="none";
								_scrollTo($this,to[1].toString(),methodOptions);
							}
						},methodOptions.timeout);

					}

				});

			},
			/* ---------------------------------------- */



			/*
			plugin stop method
			stops scrolling animation
			----------------------------------------
			usage: $(selector).mCustomScrollbar("stop");
			*/
			stop:function(){

				var selector=_selector.call(this); /* validate selector */

				return $(selector).each(function(){

					var $this=$(this);

					if($this.data(pluginPfx)){ /* check if plugin has initialized */

						_stop($this);

					}

				});

			},
			/* ---------------------------------------- */



			/*
			plugin disable method
			temporarily disables the scrollbar(s)
			----------------------------------------
			usage: $(selector).mCustomScrollbar("disable",reset);
			reset (boolean): resets content position to 0
			*/
			disable:function(r){

				var selector=_selector.call(this); /* validate selector */

				return $(selector).each(function(){

					var $this=$(this);

					if($this.data(pluginPfx)){ /* check if plugin has initialized */

						var d=$this.data(pluginPfx);

						_autoUpdate.call(this,"remove"); /* remove automatic updating */

						_unbindEvents.call(this); /* unbind events */

						if(r){_resetContentPosition.call(this);} /* reset content position */

						_scrollbarVisibility.call(this,true); /* show/hide scrollbar(s) */

						$this.addClass(classes[3]); /* add disable class */

					}

				});

			},
			/* ---------------------------------------- */



			/*
			plugin destroy method
			completely removes the scrollbar(s) and returns the element to its original state
			----------------------------------------
			usage: $(selector).mCustomScrollbar("destroy");
			*/
			destroy:function(){

				var selector=_selector.call(this); /* validate selector */

				return $(selector).each(function(){

					var $this=$(this);

					if($this.data(pluginPfx)){ /* check if plugin has initialized */

						var d=$this.data(pluginPfx),o=d.opt,
							mCustomScrollBox=$("#mCSB_"+d.idx),
							mCSB_container=$("#mCSB_"+d.idx+"_container"),
							scrollbar=$(".mCSB_"+d.idx+"_scrollbar");

						if(o.live){removeLiveTimers(o.liveSelector || $(selector).selector);} /* remove live timers */

						_autoUpdate.call(this,"remove"); /* remove automatic updating */

						_unbindEvents.call(this); /* unbind events */

						_resetContentPosition.call(this); /* reset content position */

						$this.removeData(pluginPfx); /* remove plugin data object */

						_delete(this,"mcs"); /* delete callbacks object */

						/* remove plugin markup */
						scrollbar.remove(); /* remove scrollbar(s) first (those can be either inside or outside plugin's inner wrapper) */
						mCSB_container.find("img."+classes[2]).removeClass(classes[2]); /* remove loaded images flag */
						mCustomScrollBox.replaceWith(mCSB_container.contents()); /* replace plugin's inner wrapper with the original content */
						/* remove plugin classes from the element and add destroy class */
						$this.removeClass(pluginNS+" _"+pluginPfx+"_"+d.idx+" "+classes[6]+" "+classes[7]+" "+classes[5]+" "+classes[3]).addClass(classes[4]);

					}

				});

			}
			/* ---------------------------------------- */

		},





	/*
	----------------------------------------
	FUNCTIONS
	----------------------------------------
	*/

		/* validates selector (if selector is invalid or undefined uses the default one) */
		_selector=function(){
			return (typeof $(this)!=="object" || $(this).length<1) ? defaultSelector : this;
		},
		/* -------------------- */


		/* changes options according to theme */
		_theme=function(obj){
			var fixedSizeScrollbarThemes=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],
				nonExpandedScrollbarThemes=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],
				disabledScrollButtonsThemes=["minimal","minimal-dark"],
				enabledAutoHideScrollbarThemes=["minimal","minimal-dark"],
				scrollbarPositionOutsideThemes=["minimal","minimal-dark"];
			obj.autoDraggerLength=$.inArray(obj.theme,fixedSizeScrollbarThemes) > -1 ? false : obj.autoDraggerLength;
			obj.autoExpandScrollbar=$.inArray(obj.theme,nonExpandedScrollbarThemes) > -1 ? false : obj.autoExpandScrollbar;
			obj.scrollButtons.enable=$.inArray(obj.theme,disabledScrollButtonsThemes) > -1 ? false : obj.scrollButtons.enable;
			obj.autoHideScrollbar=$.inArray(obj.theme,enabledAutoHideScrollbarThemes) > -1 ? true : obj.autoHideScrollbar;
			obj.scrollbarPosition=$.inArray(obj.theme,scrollbarPositionOutsideThemes) > -1 ? "outside" : obj.scrollbarPosition;
		},
		/* -------------------- */


		/* live option timers removal */
		removeLiveTimers=function(selector){
			if(liveTimers[selector]){
				clearTimeout(liveTimers[selector]);
				_delete(liveTimers,selector);
			}
		},
		/* -------------------- */


		/* normalizes axis option to valid values: "y", "x", "yx" */
		_findAxis=function(val){
			return (val==="yx" || val==="xy" || val==="auto") ? "yx" : (val==="x" || val==="horizontal") ? "x" : "y";
		},
		/* -------------------- */


		/* normalizes scrollButtons.scrollType option to valid values: "stepless", "stepped" */
		_findScrollButtonsType=function(val){
			return (val==="stepped" || val==="pixels" || val==="step" || val==="click") ? "stepped" : "stepless";
		},
		/* -------------------- */


		/* generates plugin markup */
		_pluginMarkup=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				expandClass=o.autoExpandScrollbar ? " "+classes[1]+"_expand" : "",
				scrollbar=["<div id='mCSB_"+d.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+d.idx+"_scrollbar mCS-"+o.theme+" mCSB_scrollTools_vertical"+expandClass+"'><div class='"+classes[12]+"'><div id='mCSB_"+d.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+d.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+d.idx+"_scrollbar mCS-"+o.theme+" mCSB_scrollTools_horizontal"+expandClass+"'><div class='"+classes[12]+"'><div id='mCSB_"+d.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
				wrapperClass=o.axis==="yx" ? "mCSB_vertical_horizontal" : o.axis==="x" ? "mCSB_horizontal" : "mCSB_vertical",
				scrollbars=o.axis==="yx" ? scrollbar[0]+scrollbar[1] : o.axis==="x" ? scrollbar[1] : scrollbar[0],
				contentWrapper=o.axis==="yx" ? "<div id='mCSB_"+d.idx+"_container_wrapper' class='mCSB_container_wrapper' />" : "",
				autoHideClass=o.autoHideScrollbar ? " "+classes[6] : "",
				scrollbarDirClass=(o.axis!=="x" && d.langDir==="rtl") ? " "+classes[7] : "";
			if(o.setWidth){$this.css("width",o.setWidth);} /* set element width */
			if(o.setHeight){$this.css("height",o.setHeight);} /* set element height */
			o.setLeft=(o.axis!=="y" && d.langDir==="rtl") ? "989999px" : o.setLeft; /* adjust left position for rtl direction */
			$this.addClass(pluginNS+" _"+pluginPfx+"_"+d.idx+autoHideClass+scrollbarDirClass).wrapInner("<div id='mCSB_"+d.idx+"' class='mCustomScrollBox mCS-"+o.theme+" "+wrapperClass+"'><div id='mCSB_"+d.idx+"_container' class='mCSB_container' style='position:relative; top:"+o.setTop+"; left:"+o.setLeft+";' dir='"+d.langDir+"' /></div>");
			var mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_container=$("#mCSB_"+d.idx+"_container");
			if(o.axis!=="y" && !o.advanced.autoExpandHorizontalScroll){
				mCSB_container.css("width",_contentWidth(mCSB_container));
			}
			if(o.scrollbarPosition==="outside"){
				if($this.css("position")==="static"){ /* requires elements with non-static position */
					$this.css("position","relative");
				}
				$this.css("overflow","visible");
				mCustomScrollBox.addClass("mCSB_outside").after(scrollbars);
			}else{
				mCustomScrollBox.addClass("mCSB_inside").append(scrollbars);
				mCSB_container.wrap(contentWrapper);
			}
			_scrollButtons.call(this); /* add scrollbar buttons */
			/* minimum dragger length */
			var mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")];
			mCSB_dragger[0].css("min-height",mCSB_dragger[0].height());
			mCSB_dragger[1].css("min-width",mCSB_dragger[1].width());
		},
		/* -------------------- */


		/* calculates content width */
		_contentWidth=function(el){
			var val=[el[0].scrollWidth,Math.max.apply(Math,el.children().map(function(){return $(this).outerWidth(true);}).get())],w=el.parent().width();
			return val[0]>w ? val[0] : val[1]>w ? val[1] : "100%";
		},
		/* -------------------- */


		/* expands content horizontally */
		_expandContentHorizontally=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				mCSB_container=$("#mCSB_"+d.idx+"_container");
			if(o.advanced.autoExpandHorizontalScroll && o.axis!=="y"){
				/* calculate scrollWidth */
				mCSB_container.css({"width":"auto","min-width":0,"overflow-x":"scroll"});
				var w=Math.ceil(mCSB_container[0].scrollWidth);
				if(o.advanced.autoExpandHorizontalScroll===3 || (o.advanced.autoExpandHorizontalScroll!==2 && w>mCSB_container.parent().width())){
					mCSB_container.css({"width":w,"min-width":"100%","overflow-x":"inherit"});
				}else{
					/*
					wrap content with an infinite width div and set its position to absolute and width to auto.
					Setting width to auto before calculating the actual width is important!
					We must let the browser set the width as browser zoom values are impossible to calculate.
					*/
					mCSB_container.css({"overflow-x":"inherit","position":"absolute"})
						.wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />")
						.css({ /* set actual width, original position and un-wrap */
							/*
							get the exact width (with decimals) and then round-up.
							Using jquery outerWidth() will round the width value which will mess up with inner elements that have non-integer width
							*/
							"width":(Math.ceil(mCSB_container[0].getBoundingClientRect().right+0.4)-Math.floor(mCSB_container[0].getBoundingClientRect().left)),
							"min-width":"100%",
							"position":"relative"
						}).unwrap();
				}
			}
		},
		/* -------------------- */


		/* adds scrollbar buttons */
		_scrollButtons=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				mCSB_scrollTools=$(".mCSB_"+d.idx+"_scrollbar:first"),
				tabindex=!_isNumeric(o.scrollButtons.tabindex) ? "" : "tabindex='"+o.scrollButtons.tabindex+"'",
				btnHTML=[
					"<a href='#' class='"+classes[13]+"' "+tabindex+" />",
					"<a href='#' class='"+classes[14]+"' "+tabindex+" />",
					"<a href='#' class='"+classes[15]+"' "+tabindex+" />",
					"<a href='#' class='"+classes[16]+"' "+tabindex+" />"
				],
				btn=[(o.axis==="x" ? btnHTML[2] : btnHTML[0]),(o.axis==="x" ? btnHTML[3] : btnHTML[1]),btnHTML[2],btnHTML[3]];
			if(o.scrollButtons.enable){
				mCSB_scrollTools.prepend(btn[0]).append(btn[1]).next(".mCSB_scrollTools").prepend(btn[2]).append(btn[3]);
			}
		},
		/* -------------------- */


		/* auto-adjusts scrollbar dragger length */
		_setDraggerLength=function(){
			var $this=$(this),d=$this.data(pluginPfx),
				mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")],
				ratio=[mCustomScrollBox.height()/mCSB_container.outerHeight(false),mCustomScrollBox.width()/mCSB_container.outerWidth(false)],
				l=[
					parseInt(mCSB_dragger[0].css("min-height")),Math.round(ratio[0]*mCSB_dragger[0].parent().height()),
					parseInt(mCSB_dragger[1].css("min-width")),Math.round(ratio[1]*mCSB_dragger[1].parent().width())
				],
				h=oldIE && (l[1]<l[0]) ? l[0] : l[1],w=oldIE && (l[3]<l[2]) ? l[2] : l[3];
			mCSB_dragger[0].css({
				"height":h,"max-height":(mCSB_dragger[0].parent().height()-10)
			}).find(".mCSB_dragger_bar").css({"line-height":l[0]+"px"});
			mCSB_dragger[1].css({
				"width":w,"max-width":(mCSB_dragger[1].parent().width()-10)
			});
		},
		/* -------------------- */


		/* calculates scrollbar to content ratio */
		_scrollRatio=function(){
			var $this=$(this),d=$this.data(pluginPfx),
				mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")],
				scrollAmount=[mCSB_container.outerHeight(false)-mCustomScrollBox.height(),mCSB_container.outerWidth(false)-mCustomScrollBox.width()],
				ratio=[
					scrollAmount[0]/(mCSB_dragger[0].parent().height()-mCSB_dragger[0].height()),
					scrollAmount[1]/(mCSB_dragger[1].parent().width()-mCSB_dragger[1].width())
				];
			d.scrollRatio={y:ratio[0],x:ratio[1]};
		},
		/* -------------------- */


		/* toggles scrolling classes */
		_onDragClasses=function(el,action,xpnd){
			var expandClass=xpnd ? classes[0]+"_expanded" : "",
				scrollbar=el.closest(".mCSB_scrollTools");
			if(action==="active"){
				el.toggleClass(classes[0]+" "+expandClass); scrollbar.toggleClass(classes[1]);
				el[0]._draggable=el[0]._draggable ? 0 : 1;
			}else{
				if(!el[0]._draggable){
					if(action==="hide"){
						el.removeClass(classes[0]); scrollbar.removeClass(classes[1]);
					}else{
						el.addClass(classes[0]); scrollbar.addClass(classes[1]);
					}
				}
			}
		},
		/* -------------------- */


		/* checks if content overflows its container to determine if scrolling is required */
		_overflowed=function(){
			var $this=$(this),d=$this.data(pluginPfx),
				mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				contentHeight=d.overflowed==null ? mCSB_container.height() : mCSB_container.outerHeight(false),
				contentWidth=d.overflowed==null ? mCSB_container.width() : mCSB_container.outerWidth(false),
				h=mCSB_container[0].scrollHeight,w=mCSB_container[0].scrollWidth;
			if(h>contentHeight){contentHeight=h;}
			if(w>contentWidth){contentWidth=w;}
			return [contentHeight>mCustomScrollBox.height(),contentWidth>mCustomScrollBox.width()];
		},
		/* -------------------- */


		/* resets content position to 0 */
		_resetContentPosition=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")];
			_stop($this); /* stop any current scrolling before resetting */
			if((o.axis!=="x" && !d.overflowed[0]) || (o.axis==="y" && d.overflowed[0])){ /* reset y */
				mCSB_dragger[0].add(mCSB_container).css("top",0);
				_scrollTo($this,"_resetY");
			}
			if((o.axis!=="y" && !d.overflowed[1]) || (o.axis==="x" && d.overflowed[1])){ /* reset x */
				var cx=dx=0;
				if(d.langDir==="rtl"){ /* adjust left position for rtl direction */
					cx=mCustomScrollBox.width()-mCSB_container.outerWidth(false);
					dx=Math.abs(cx/d.scrollRatio.x);
				}
				mCSB_container.css("left",cx);
				mCSB_dragger[1].css("left",dx);
				_scrollTo($this,"_resetX");
			}
		},
		/* -------------------- */


		/* binds scrollbar events */
		_bindEvents=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt;
			if(!d.bindEvents){ /* check if events are already bound */
				_draggable.call(this);
				if(o.contentTouchScroll){_contentDraggable.call(this);}
				_selectable.call(this);
				if(o.mouseWheel.enable){ /* bind mousewheel fn when plugin is available */
					function _mwt(){
						mousewheelTimeout=setTimeout(function(){
							if(!$.event.special.mousewheel){
								_mwt();
							}else{
								clearTimeout(mousewheelTimeout);
								_mousewheel.call($this[0]);
							}
						},100);
					}
					var mousewheelTimeout;
					_mwt();
				}
				_draggerRail.call(this);
				_wrapperScroll.call(this);
				if(o.advanced.autoScrollOnFocus){_focus.call(this);}
				if(o.scrollButtons.enable){_buttons.call(this);}
				if(o.keyboard.enable){_keyboard.call(this);}
				d.bindEvents=true;
			}
		},
		/* -------------------- */


		/* unbinds scrollbar events */
		_unbindEvents=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				namespace=pluginPfx+"_"+d.idx,
				sb=".mCSB_"+d.idx+"_scrollbar",
				sel=$("#mCSB_"+d.idx+",#mCSB_"+d.idx+"_container,#mCSB_"+d.idx+"_container_wrapper,"+sb+" ."+classes[12]+",#mCSB_"+d.idx+"_dragger_vertical,#mCSB_"+d.idx+"_dragger_horizontal,"+sb+">a"),
				mCSB_container=$("#mCSB_"+d.idx+"_container");
			if(o.advanced.releaseDraggableSelectors){sel.add($(o.advanced.releaseDraggableSelectors));}
			if(o.advanced.extraDraggableSelectors){sel.add($(o.advanced.extraDraggableSelectors));}
			if(d.bindEvents){ /* check if events are bound */
				/* unbind namespaced events from document/selectors */
				$(document).add($(!_canAccessIFrame() || top.document)).unbind("."+namespace);
				sel.each(function(){
					$(this).unbind("."+namespace);
				});
				/* clear and delete timeouts/objects */
				clearTimeout($this[0]._focusTimeout); _delete($this[0],"_focusTimeout");
				clearTimeout(d.sequential.step); _delete(d.sequential,"step");
				clearTimeout(mCSB_container[0].onCompleteTimeout); _delete(mCSB_container[0],"onCompleteTimeout");
				d.bindEvents=false;
			}
		},
		/* -------------------- */


		/* toggles scrollbar visibility */
		_scrollbarVisibility=function(disabled){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				contentWrapper=$("#mCSB_"+d.idx+"_container_wrapper"),
				content=contentWrapper.length ? contentWrapper : $("#mCSB_"+d.idx+"_container"),
				scrollbar=[$("#mCSB_"+d.idx+"_scrollbar_vertical"),$("#mCSB_"+d.idx+"_scrollbar_horizontal")],
				mCSB_dragger=[scrollbar[0].find(".mCSB_dragger"),scrollbar[1].find(".mCSB_dragger")];
			if(o.axis!=="x"){
				if(d.overflowed[0] && !disabled){
					scrollbar[0].add(mCSB_dragger[0]).add(scrollbar[0].children("a")).css("display","block");
					content.removeClass(classes[8]+" "+classes[10]);
				}else{
					if(o.alwaysShowScrollbar){
						if(o.alwaysShowScrollbar!==2){mCSB_dragger[0].css("display","none");}
						content.removeClass(classes[10]);
					}else{
						scrollbar[0].css("display","none");
						content.addClass(classes[10]);
					}
					content.addClass(classes[8]);
				}
			}
			if(o.axis!=="y"){
				if(d.overflowed[1] && !disabled){
					scrollbar[1].add(mCSB_dragger[1]).add(scrollbar[1].children("a")).css("display","block");
					content.removeClass(classes[9]+" "+classes[11]);
				}else{
					if(o.alwaysShowScrollbar){
						if(o.alwaysShowScrollbar!==2){mCSB_dragger[1].css("display","none");}
						content.removeClass(classes[11]);
					}else{
						scrollbar[1].css("display","none");
						content.addClass(classes[11]);
					}
					content.addClass(classes[9]);
				}
			}
			if(!d.overflowed[0] && !d.overflowed[1]){
				$this.addClass(classes[5]);
			}else{
				$this.removeClass(classes[5]);
			}
		},
		/* -------------------- */


		/* returns input coordinates of pointer, touch and mouse events (relative to document) */
		_coordinates=function(e){
			var t=e.type,o=e.target.ownerDocument!==document && frameElement!==null ? [$(frameElement).offset().top,$(frameElement).offset().left] : null,
				io=_canAccessIFrame() && e.target.ownerDocument!==top.document && frameElement!==null ? [$(e.view.frameElement).offset().top,$(e.view.frameElement).offset().left] : [0,0];
			switch(t){
				case "pointerdown": case "MSPointerDown": case "pointermove": case "MSPointerMove": case "pointerup": case "MSPointerUp":
					return o ? [e.originalEvent.pageY-o[0]+io[0],e.originalEvent.pageX-o[1]+io[1],false] : [e.originalEvent.pageY,e.originalEvent.pageX,false];
					break;
				case "touchstart": case "touchmove": case "touchend":
					var touch=e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
						touches=e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
					return e.target.ownerDocument!==document ? [touch.screenY,touch.screenX,touches>1] : [touch.pageY,touch.pageX,touches>1];
					break;
				default:
					return o ? [e.pageY-o[0]+io[0],e.pageX-o[1]+io[1],false] : [e.pageY,e.pageX,false];
			}
		},
		/* -------------------- */


		/*
		SCROLLBAR DRAG EVENTS
		scrolls content via scrollbar dragging
		*/
		_draggable=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				namespace=pluginPfx+"_"+d.idx,
				draggerId=["mCSB_"+d.idx+"_dragger_vertical","mCSB_"+d.idx+"_dragger_horizontal"],
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				mCSB_dragger=$("#"+draggerId[0]+",#"+draggerId[1]),
				draggable,dragY,dragX,
				rds=o.advanced.releaseDraggableSelectors ? mCSB_dragger.add($(o.advanced.releaseDraggableSelectors)) : mCSB_dragger,
				eds=o.advanced.extraDraggableSelectors ? $(!_canAccessIFrame() || top.document).add($(o.advanced.extraDraggableSelectors)) : $(!_canAccessIFrame() || top.document);
			mCSB_dragger.bind("contextmenu."+namespace,function(e){
				e.preventDefault(); //prevent right click
			}).bind("mousedown."+namespace+" touchstart."+namespace+" pointerdown."+namespace+" MSPointerDown."+namespace,function(e){
				e.stopImmediatePropagation();
				e.preventDefault();
				if(!_mouseBtnLeft(e)){return;} /* left mouse button only */
				touchActive=true;
				if(oldIE){document.onselectstart=function(){return false;}} /* disable text selection for IE < 9 */
				_iframe.call(mCSB_container,false); /* enable scrollbar dragging over iframes by disabling their events */
				_stop($this);
				draggable=$(this);
				var offset=draggable.offset(),y=_coordinates(e)[0]-offset.top,x=_coordinates(e)[1]-offset.left,
					h=draggable.height()+offset.top,w=draggable.width()+offset.left;
				if(y<h && y>0 && x<w && x>0){
					dragY=y;
					dragX=x;
				}
				_onDragClasses(draggable,"active",o.autoExpandScrollbar);
			}).bind("touchmove."+namespace,function(e){
				e.stopImmediatePropagation();
				e.preventDefault();
				var offset=draggable.offset(),y=_coordinates(e)[0]-offset.top,x=_coordinates(e)[1]-offset.left;
				_drag(dragY,dragX,y,x);
			});
			$(document).add(eds).bind("mousemove."+namespace+" pointermove."+namespace+" MSPointerMove."+namespace,function(e){
				if(draggable){
					var offset=draggable.offset(),y=_coordinates(e)[0]-offset.top,x=_coordinates(e)[1]-offset.left;
					if(dragY===y && dragX===x){return;} /* has it really moved? */
					_drag(dragY,dragX,y,x);
				}
			}).add(rds).bind("mouseup."+namespace+" touchend."+namespace+" pointerup."+namespace+" MSPointerUp."+namespace,function(e){
				if(draggable){
					_onDragClasses(draggable,"active",o.autoExpandScrollbar);
					draggable=null;
				}
				touchActive=false;
				if(oldIE){document.onselectstart=null;} /* enable text selection for IE < 9 */
				_iframe.call(mCSB_container,true); /* enable iframes events */
			});
			function _drag(dragY,dragX,y,x){
				mCSB_container[0].idleTimer=o.scrollInertia<233 ? 250 : 0;
				if(draggable.attr("id")===draggerId[1]){
					var dir="x",to=((draggable[0].offsetLeft-dragX)+x)*d.scrollRatio.x;
				}else{
					var dir="y",to=((draggable[0].offsetTop-dragY)+y)*d.scrollRatio.y;
				}
				_scrollTo($this,to.toString(),{dir:dir,drag:true});
			}
		},
		/* -------------------- */


		/*
		TOUCH SWIPE EVENTS
		scrolls content via touch swipe
		Emulates the native touch-swipe scrolling with momentum found in iOS, Android and WP devices
		*/
		_contentDraggable=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				namespace=pluginPfx+"_"+d.idx,
				mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")],
				draggable,dragY,dragX,touchStartY,touchStartX,touchMoveY=[],touchMoveX=[],startTime,runningTime,endTime,distance,speed,amount,
				durA=0,durB,overwrite=o.axis==="yx" ? "none" : "all",touchIntent=[],touchDrag,docDrag,
				iframe=mCSB_container.find("iframe"),
				events=[
					"touchstart."+namespace+" pointerdown."+namespace+" MSPointerDown."+namespace, //start
					"touchmove."+namespace+" pointermove."+namespace+" MSPointerMove."+namespace, //move
					"touchend."+namespace+" pointerup."+namespace+" MSPointerUp."+namespace //end
				],
				touchAction=document.body.style.touchAction!==undefined && document.body.style.touchAction!=="";
			mCSB_container.bind(events[0],function(e){
				_onTouchstart(e);
			}).bind(events[1],function(e){
				_onTouchmove(e);
			});
			mCustomScrollBox.bind(events[0],function(e){
				_onTouchstart2(e);
			}).bind(events[2],function(e){
				_onTouchend(e);
			});
			if(iframe.length){
				iframe.each(function(){
					$(this).bind("load",function(){
						/* bind events on accessible iframes */
						if(_canAccessIFrame(this)){
							$(this.contentDocument || this.contentWindow.document).bind(events[0],function(e){
								_onTouchstart(e);
								_onTouchstart2(e);
							}).bind(events[1],function(e){
								_onTouchmove(e);
							}).bind(events[2],function(e){
								_onTouchend(e);
							});
						}
					});
				});
			}
			function _onTouchstart(e){
				if(!_pointerTouch(e) || touchActive || _coordinates(e)[2]){touchable=0; return;}
				touchable=1; touchDrag=0; docDrag=0; draggable=1;
				$this.removeClass("mCS_touch_action");
				var offset=mCSB_container.offset();
				dragY=_coordinates(e)[0]-offset.top;
				dragX=_coordinates(e)[1]-offset.left;
				touchIntent=[_coordinates(e)[0],_coordinates(e)[1]];
			}
			function _onTouchmove(e){
				if(!_pointerTouch(e) || touchActive || _coordinates(e)[2]){return;}
				if(!o.documentTouchScroll){e.preventDefault();}
				e.stopImmediatePropagation();
				if(docDrag && !touchDrag){return;}
				if(draggable){
					runningTime=_getTime();
					var offset=mCustomScrollBox.offset(),y=_coordinates(e)[0]-offset.top,x=_coordinates(e)[1]-offset.left,
						easing="mcsLinearOut";
					touchMoveY.push(y);
					touchMoveX.push(x);
					touchIntent[2]=Math.abs(_coordinates(e)[0]-touchIntent[0]); touchIntent[3]=Math.abs(_coordinates(e)[1]-touchIntent[1]);
					if(d.overflowed[0]){
						var limit=mCSB_dragger[0].parent().height()-mCSB_dragger[0].height(),
							prevent=((dragY-y)>0 && (y-dragY)>-(limit*d.scrollRatio.y) && (touchIntent[3]*2<touchIntent[2] || o.axis==="yx"));
					}
					if(d.overflowed[1]){
						var limitX=mCSB_dragger[1].parent().width()-mCSB_dragger[1].width(),
							preventX=((dragX-x)>0 && (x-dragX)>-(limitX*d.scrollRatio.x) && (touchIntent[2]*2<touchIntent[3] || o.axis==="yx"));
					}
					if(prevent || preventX){ /* prevent native document scrolling */
						if(!touchAction){e.preventDefault();}
						touchDrag=1;
					}else{
						docDrag=1;
						$this.addClass("mCS_touch_action");
					}
					if(touchAction){e.preventDefault();}
					amount=o.axis==="yx" ? [(dragY-y),(dragX-x)] : o.axis==="x" ? [null,(dragX-x)] : [(dragY-y),null];
					mCSB_container[0].idleTimer=250;
					if(d.overflowed[0]){_drag(amount[0],durA,easing,"y","all",true);}
					if(d.overflowed[1]){_drag(amount[1],durA,easing,"x",overwrite,true);}
				}
			}
			function _onTouchstart2(e){
				if(!_pointerTouch(e) || touchActive || _coordinates(e)[2]){touchable=0; return;}
				touchable=1;
				e.stopImmediatePropagation();
				_stop($this);
				startTime=_getTime();
				var offset=mCustomScrollBox.offset();
				touchStartY=_coordinates(e)[0]-offset.top;
				touchStartX=_coordinates(e)[1]-offset.left;
				touchMoveY=[]; touchMoveX=[];
			}
			function _onTouchend(e){
				if(!_pointerTouch(e) || touchActive || _coordinates(e)[2]){return;}
				draggable=0;
				e.stopImmediatePropagation();
				touchDrag=0; docDrag=0;
				endTime=_getTime();
				var offset=mCustomScrollBox.offset(),y=_coordinates(e)[0]-offset.top,x=_coordinates(e)[1]-offset.left;
				if((endTime-runningTime)>30){return;}
				speed=1000/(endTime-startTime);
				var easing="mcsEaseOut",slow=speed<2.5,
					diff=slow ? [touchMoveY[touchMoveY.length-2],touchMoveX[touchMoveX.length-2]] : [0,0];
				distance=slow ? [(y-diff[0]),(x-diff[1])] : [y-touchStartY,x-touchStartX];
				var absDistance=[Math.abs(distance[0]),Math.abs(distance[1])];
				speed=slow ? [Math.abs(distance[0]/4),Math.abs(distance[1]/4)] : [speed,speed];
				var a=[
					Math.abs(mCSB_container[0].offsetTop)-(distance[0]*_m((absDistance[0]/speed[0]),speed[0])),
					Math.abs(mCSB_container[0].offsetLeft)-(distance[1]*_m((absDistance[1]/speed[1]),speed[1]))
				];
				amount=o.axis==="yx" ? [a[0],a[1]] : o.axis==="x" ? [null,a[1]] : [a[0],null];
				durB=[(absDistance[0]*4)+o.scrollInertia,(absDistance[1]*4)+o.scrollInertia];
				var md=parseInt(o.contentTouchScroll) || 0; /* absolute minimum distance required */
				amount[0]=absDistance[0]>md ? amount[0] : 0;
				amount[1]=absDistance[1]>md ? amount[1] : 0;
				if(d.overflowed[0]){_drag(amount[0],durB[0],easing,"y",overwrite,false);}
				if(d.overflowed[1]){_drag(amount[1],durB[1],easing,"x",overwrite,false);}
			}
			function _m(ds,s){
				var r=[s*1.5,s*2,s/1.5,s/2];
				if(ds>90){
					return s>4 ? r[0] : r[3];
				}else if(ds>60){
					return s>3 ? r[3] : r[2];
				}else if(ds>30){
					return s>8 ? r[1] : s>6 ? r[0] : s>4 ? s : r[2];
				}else{
					return s>8 ? s : r[3];
				}
			}
			function _drag(amount,dur,easing,dir,overwrite,drag){
				if(!amount){return;}
				_scrollTo($this,amount.toString(),{dur:dur,scrollEasing:easing,dir:dir,overwrite:overwrite,drag:drag});
			}
		},
		/* -------------------- */


		/*
		SELECT TEXT EVENTS
		scrolls content when text is selected
		*/
		_selectable=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,seq=d.sequential,
				namespace=pluginPfx+"_"+d.idx,
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				wrapper=mCSB_container.parent(),
				action;
			mCSB_container.bind("mousedown."+namespace,function(e){
				if(touchable){return;}
				if(!action){action=1; touchActive=true;}
			}).add(document).bind("mousemove."+namespace,function(e){
				if(!touchable && action && _sel()){
					var offset=mCSB_container.offset(),
						y=_coordinates(e)[0]-offset.top+mCSB_container[0].offsetTop,x=_coordinates(e)[1]-offset.left+mCSB_container[0].offsetLeft;
					if(y>0 && y<wrapper.height() && x>0 && x<wrapper.width()){
						if(seq.step){_seq("off",null,"stepped");}
					}else{
						if(o.axis!=="x" && d.overflowed[0]){
							if(y<0){
								_seq("on",38);
							}else if(y>wrapper.height()){
								_seq("on",40);
							}
						}
						if(o.axis!=="y" && d.overflowed[1]){
							if(x<0){
								_seq("on",37);
							}else if(x>wrapper.width()){
								_seq("on",39);
							}
						}
					}
				}
			}).bind("mouseup."+namespace+" dragend."+namespace,function(e){
				if(touchable){return;}
				if(action){action=0; _seq("off",null);}
				touchActive=false;
			});
			function _sel(){
				return 	window.getSelection ? window.getSelection().toString() :
						document.selection && document.selection.type!="Control" ? document.selection.createRange().text : 0;
			}
			function _seq(a,c,s){
				seq.type=s && action ? "stepped" : "stepless";
				seq.scrollAmount=10;
				_sequentialScroll($this,a,c,"mcsLinearOut",s ? 60 : null);
			}
		},
		/* -------------------- */


		/*
		MOUSE WHEEL EVENT
		scrolls content via mouse-wheel
		via mouse-wheel plugin (https://github.com/brandonaaron/jquery-mousewheel)
		*/
		_mousewheel=function(){
			if(!$(this).data(pluginPfx)){return;} /* Check if the scrollbar is ready to use mousewheel events (issue: #185) */
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				namespace=pluginPfx+"_"+d.idx,
				mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")],
				iframe=$("#mCSB_"+d.idx+"_container").find("iframe");
			if(iframe.length){
				iframe.each(function(){
					$(this).bind("load",function(){
						/* bind events on accessible iframes */
						if(_canAccessIFrame(this)){
							$(this.contentDocument || this.contentWindow.document).bind("mousewheel."+namespace,function(e,delta){
								_onMousewheel(e,delta);
							});
						}
					});
				});
			}
			mCustomScrollBox.bind("mousewheel."+namespace,function(e,delta){
				_onMousewheel(e,delta);
			});
			function _onMousewheel(e,delta){
				_stop($this);
				if(_disableMousewheel($this,e.target)){return;} /* disables mouse-wheel when hovering specific elements */
				var deltaFactor=o.mouseWheel.deltaFactor!=="auto" ? parseInt(o.mouseWheel.deltaFactor) : (oldIE && e.deltaFactor<100) ? 100 : e.deltaFactor || 100,
					dur=o.scrollInertia;
				if(o.axis==="x" || o.mouseWheel.axis==="x"){
					var dir="x",
						px=[Math.round(deltaFactor*d.scrollRatio.x),parseInt(o.mouseWheel.scrollAmount)],
						amount=o.mouseWheel.scrollAmount!=="auto" ? px[1] : px[0]>=mCustomScrollBox.width() ? mCustomScrollBox.width()*0.9 : px[0],
						contentPos=Math.abs($("#mCSB_"+d.idx+"_container")[0].offsetLeft),
						draggerPos=mCSB_dragger[1][0].offsetLeft,
						limit=mCSB_dragger[1].parent().width()-mCSB_dragger[1].width(),
						dlt=o.mouseWheel.axis==="y" ? (e.deltaY || delta) : e.deltaX;
				}else{
					var dir="y",
						px=[Math.round(deltaFactor*d.scrollRatio.y),parseInt(o.mouseWheel.scrollAmount)],
						amount=o.mouseWheel.scrollAmount!=="auto" ? px[1] : px[0]>=mCustomScrollBox.height() ? mCustomScrollBox.height()*0.9 : px[0],
						contentPos=Math.abs($("#mCSB_"+d.idx+"_container")[0].offsetTop),
						draggerPos=mCSB_dragger[0][0].offsetTop,
						limit=mCSB_dragger[0].parent().height()-mCSB_dragger[0].height(),
						dlt=e.deltaY || delta;
				}
				if((dir==="y" && !d.overflowed[0]) || (dir==="x" && !d.overflowed[1])){return;}
				if(o.mouseWheel.invert || e.webkitDirectionInvertedFromDevice){dlt=-dlt;}
				if(o.mouseWheel.normalizeDelta){dlt=dlt<0 ? -1 : 1;}
				if((dlt>0 && draggerPos!==0) || (dlt<0 && draggerPos!==limit) || o.mouseWheel.preventDefault){
					e.stopImmediatePropagation();
					e.preventDefault();
				}
				if(e.deltaFactor<5 && !o.mouseWheel.normalizeDelta){
					//very low deltaFactor values mean some kind of delta acceleration (e.g. osx trackpad), so adjusting scrolling accordingly
					amount=e.deltaFactor; dur=17;
				}
				_scrollTo($this,(contentPos-(dlt*amount)).toString(),{dir:dir,dur:dur});
			}
		},
		/* -------------------- */


		/* checks if iframe can be accessed */
		_canAccessIFrameCache=new Object(),
		_canAccessIFrame=function(iframe){
		    var result=false,cacheKey=false,html=null;
		    if(iframe===undefined){
				cacheKey="#empty";
		    }else if($(iframe).attr("id")!==undefined){
				cacheKey=$(iframe).attr("id");
		    }
			if(cacheKey!==false && _canAccessIFrameCache[cacheKey]!==undefined){
				return _canAccessIFrameCache[cacheKey];
			}
			if(!iframe){
				try{
					var doc=top.document;
					html=doc.body.innerHTML;
				}catch(err){/* do nothing */}
				result=(html!==null);
			}else{
				try{
					var doc=iframe.contentDocument || iframe.contentWindow.document;
					html=doc.body.innerHTML;
				}catch(err){/* do nothing */}
				result=(html!==null);
			}
			if(cacheKey!==false){_canAccessIFrameCache[cacheKey]=result;}
			return result;
		},
		/* -------------------- */


		/* switches iframe's pointer-events property (drag, mousewheel etc. over cross-domain iframes) */
		_iframe=function(evt){
			var el=this.find("iframe");
			if(!el.length){return;} /* check if content contains iframes */
			var val=!evt ? "none" : "auto";
			el.css("pointer-events",val); /* for IE11, iframe's display property should not be "block" */
		},
		/* -------------------- */


		/* disables mouse-wheel when hovering specific elements like select, datalist etc. */
		_disableMousewheel=function(el,target){
			var tag=target.nodeName.toLowerCase(),
				tags=el.data(pluginPfx).opt.mouseWheel.disableOver,
				/* elements that require focus */
				focusTags=["select","textarea"];
			return $.inArray(tag,tags) > -1 && !($.inArray(tag,focusTags) > -1 && !$(target).is(":focus"));
		},
		/* -------------------- */


		/*
		DRAGGER RAIL CLICK EVENT
		scrolls content via dragger rail
		*/
		_draggerRail=function(){
			var $this=$(this),d=$this.data(pluginPfx),
				namespace=pluginPfx+"_"+d.idx,
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				wrapper=mCSB_container.parent(),
				mCSB_draggerContainer=$(".mCSB_"+d.idx+"_scrollbar ."+classes[12]),
				clickable;
			mCSB_draggerContainer.bind("mousedown."+namespace+" touchstart."+namespace+" pointerdown."+namespace+" MSPointerDown."+namespace,function(e){
				touchActive=true;
				if(!$(e.target).hasClass("mCSB_dragger")){clickable=1;}
			}).bind("touchend."+namespace+" pointerup."+namespace+" MSPointerUp."+namespace,function(e){
				touchActive=false;
			}).bind("click."+namespace,function(e){
				if(!clickable){return;}
				clickable=0;
				if($(e.target).hasClass(classes[12]) || $(e.target).hasClass("mCSB_draggerRail")){
					_stop($this);
					var el=$(this),mCSB_dragger=el.find(".mCSB_dragger");
					if(el.parent(".mCSB_scrollTools_horizontal").length>0){
						if(!d.overflowed[1]){return;}
						var dir="x",
							clickDir=e.pageX>mCSB_dragger.offset().left ? -1 : 1,
							to=Math.abs(mCSB_container[0].offsetLeft)-(clickDir*(wrapper.width()*0.9));
					}else{
						if(!d.overflowed[0]){return;}
						var dir="y",
							clickDir=e.pageY>mCSB_dragger.offset().top ? -1 : 1,
							to=Math.abs(mCSB_container[0].offsetTop)-(clickDir*(wrapper.height()*0.9));
					}
					_scrollTo($this,to.toString(),{dir:dir,scrollEasing:"mcsEaseInOut"});
				}
			});
		},
		/* -------------------- */


		/*
		FOCUS EVENT
		scrolls content via element focus (e.g. clicking an input, pressing TAB key etc.)
		*/
		_focus=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				namespace=pluginPfx+"_"+d.idx,
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				wrapper=mCSB_container.parent();
			mCSB_container.bind("focusin."+namespace,function(e){
				var el=$(document.activeElement),
					nested=mCSB_container.find(".mCustomScrollBox").length,
					dur=0;
				if(!el.is(o.advanced.autoScrollOnFocus)){return;}
				_stop($this);
				clearTimeout($this[0]._focusTimeout);
				$this[0]._focusTimer=nested ? (dur+17)*nested : 0;
				$this[0]._focusTimeout=setTimeout(function(){
					var	to=[_childPos(el)[0],_childPos(el)[1]],
						contentPos=[mCSB_container[0].offsetTop,mCSB_container[0].offsetLeft],
						isVisible=[
							(contentPos[0]+to[0]>=0 && contentPos[0]+to[0]<wrapper.height()-el.outerHeight(false)),
							(contentPos[1]+to[1]>=0 && contentPos[0]+to[1]<wrapper.width()-el.outerWidth(false))
						],
						overwrite=(o.axis==="yx" && !isVisible[0] && !isVisible[1]) ? "none" : "all";
					if(o.axis!=="x" && !isVisible[0]){
						_scrollTo($this,to[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:overwrite,dur:dur});
					}
					if(o.axis!=="y" && !isVisible[1]){
						_scrollTo($this,to[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:overwrite,dur:dur});
					}
				},$this[0]._focusTimer);
			});
		},
		/* -------------------- */


		/* sets content wrapper scrollTop/scrollLeft always to 0 */
		_wrapperScroll=function(){
			var $this=$(this),d=$this.data(pluginPfx),
				namespace=pluginPfx+"_"+d.idx,
				wrapper=$("#mCSB_"+d.idx+"_container").parent();
			wrapper.bind("scroll."+namespace,function(e){
				if(wrapper.scrollTop()!==0 || wrapper.scrollLeft()!==0){
					$(".mCSB_"+d.idx+"_scrollbar").css("visibility","hidden"); /* hide scrollbar(s) */
				}
			});
		},
		/* -------------------- */


		/*
		BUTTONS EVENTS
		scrolls content via up, down, left and right buttons
		*/
		_buttons=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,seq=d.sequential,
				namespace=pluginPfx+"_"+d.idx,
				sel=".mCSB_"+d.idx+"_scrollbar",
				btn=$(sel+">a");
			btn.bind("contextmenu."+namespace,function(e){
				e.preventDefault(); //prevent right click
			}).bind("mousedown."+namespace+" touchstart."+namespace+" pointerdown."+namespace+" MSPointerDown."+namespace+" mouseup."+namespace+" touchend."+namespace+" pointerup."+namespace+" MSPointerUp."+namespace+" mouseout."+namespace+" pointerout."+namespace+" MSPointerOut."+namespace+" click."+namespace,function(e){
				e.preventDefault();
				if(!_mouseBtnLeft(e)){return;} /* left mouse button only */
				var btnClass=$(this).attr("class");
				seq.type=o.scrollButtons.scrollType;
				switch(e.type){
					case "mousedown": case "touchstart": case "pointerdown": case "MSPointerDown":
						if(seq.type==="stepped"){return;}
						touchActive=true;
						d.tweenRunning=false;
						_seq("on",btnClass);
						break;
					case "mouseup": case "touchend": case "pointerup": case "MSPointerUp":
					case "mouseout": case "pointerout": case "MSPointerOut":
						if(seq.type==="stepped"){return;}
						touchActive=false;
						if(seq.dir){_seq("off",btnClass);}
						break;
					case "click":
						if(seq.type!=="stepped" || d.tweenRunning){return;}
						_seq("on",btnClass);
						break;
				}
				function _seq(a,c){
					seq.scrollAmount=o.scrollButtons.scrollAmount;
					_sequentialScroll($this,a,c);
				}
			});
		},
		/* -------------------- */


		/*
		KEYBOARD EVENTS
		scrolls content via keyboard
		Keys: up arrow, down arrow, left arrow, right arrow, PgUp, PgDn, Home, End
		*/
		_keyboard=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,seq=d.sequential,
				namespace=pluginPfx+"_"+d.idx,
				mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				wrapper=mCSB_container.parent(),
				editables="input,textarea,select,datalist,keygen,[contenteditable='true']",
				iframe=mCSB_container.find("iframe"),
				events=["blur."+namespace+" keydown."+namespace+" keyup."+namespace];
			if(iframe.length){
				iframe.each(function(){
					$(this).bind("load",function(){
						/* bind events on accessible iframes */
						if(_canAccessIFrame(this)){
							$(this.contentDocument || this.contentWindow.document).bind(events[0],function(e){
								_onKeyboard(e);
							});
						}
					});
				});
			}
			mCustomScrollBox.attr("tabindex","0").bind(events[0],function(e){
				_onKeyboard(e);
			});
			function _onKeyboard(e){
				switch(e.type){
					case "blur":
						if(d.tweenRunning && seq.dir){_seq("off",null);}
						break;
					case "keydown": case "keyup":
						var code=e.keyCode ? e.keyCode : e.which,action="on";
						if((o.axis!=="x" && (code===38 || code===40)) || (o.axis!=="y" && (code===37 || code===39))){
							/* up (38), down (40), left (37), right (39) arrows */
							if(((code===38 || code===40) && !d.overflowed[0]) || ((code===37 || code===39) && !d.overflowed[1])){return;}
							if(e.type==="keyup"){action="off";}
							if(!$(document.activeElement).is(editables)){
								e.preventDefault();
								e.stopImmediatePropagation();
								_seq(action,code);
							}
						}else if(code===33 || code===34){
							/* PgUp (33), PgDn (34) */
							if(d.overflowed[0] || d.overflowed[1]){
								e.preventDefault();
								e.stopImmediatePropagation();
							}
							if(e.type==="keyup"){
								_stop($this);
								var keyboardDir=code===34 ? -1 : 1;
								if(o.axis==="x" || (o.axis==="yx" && d.overflowed[1] && !d.overflowed[0])){
									var dir="x",to=Math.abs(mCSB_container[0].offsetLeft)-(keyboardDir*(wrapper.width()*0.9));
								}else{
									var dir="y",to=Math.abs(mCSB_container[0].offsetTop)-(keyboardDir*(wrapper.height()*0.9));
								}
								_scrollTo($this,to.toString(),{dir:dir,scrollEasing:"mcsEaseInOut"});
							}
						}else if(code===35 || code===36){
							/* End (35), Home (36) */
							if(!$(document.activeElement).is(editables)){
								if(d.overflowed[0] || d.overflowed[1]){
									e.preventDefault();
									e.stopImmediatePropagation();
								}
								if(e.type==="keyup"){
									if(o.axis==="x" || (o.axis==="yx" && d.overflowed[1] && !d.overflowed[0])){
										var dir="x",to=code===35 ? Math.abs(wrapper.width()-mCSB_container.outerWidth(false)) : 0;
									}else{
										var dir="y",to=code===35 ? Math.abs(wrapper.height()-mCSB_container.outerHeight(false)) : 0;
									}
									_scrollTo($this,to.toString(),{dir:dir,scrollEasing:"mcsEaseInOut"});
								}
							}
						}
						break;
				}
				function _seq(a,c){
					seq.type=o.keyboard.scrollType;
					seq.scrollAmount=o.keyboard.scrollAmount;
					if(seq.type==="stepped" && d.tweenRunning){return;}
					_sequentialScroll($this,a,c);
				}
			}
		},
		/* -------------------- */


		/* scrolls content sequentially (used when scrolling via buttons, keyboard arrows etc.) */
		_sequentialScroll=function(el,action,trigger,e,s){
			var d=el.data(pluginPfx),o=d.opt,seq=d.sequential,
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				once=seq.type==="stepped" ? true : false,
				steplessSpeed=o.scrollInertia < 26 ? 26 : o.scrollInertia, /* 26/1.5=17 */
				steppedSpeed=o.scrollInertia < 1 ? 17 : o.scrollInertia;
			switch(action){
				case "on":
					seq.dir=[
						(trigger===classes[16] || trigger===classes[15] || trigger===39 || trigger===37 ? "x" : "y"),
						(trigger===classes[13] || trigger===classes[15] || trigger===38 || trigger===37 ? -1 : 1)
					];
					_stop(el);
					if(_isNumeric(trigger) && seq.type==="stepped"){return;}
					_on(once);
					break;
				case "off":
					_off();
					if(once || (d.tweenRunning && seq.dir)){
						_on(true);
					}
					break;
			}

			/* starts sequence */
			function _on(once){
				if(o.snapAmount){seq.scrollAmount=!(o.snapAmount instanceof Array) ? o.snapAmount : seq.dir[0]==="x" ? o.snapAmount[1] : o.snapAmount[0];} /* scrolling snapping */
				var c=seq.type!=="stepped", /* continuous scrolling */
					t=s ? s : !once ? 1000/60 : c ? steplessSpeed/1.5 : steppedSpeed, /* timer */
					m=!once ? 2.5 : c ? 7.5 : 40, /* multiplier */
					contentPos=[Math.abs(mCSB_container[0].offsetTop),Math.abs(mCSB_container[0].offsetLeft)],
					ratio=[d.scrollRatio.y>10 ? 10 : d.scrollRatio.y,d.scrollRatio.x>10 ? 10 : d.scrollRatio.x],
					amount=seq.dir[0]==="x" ? contentPos[1]+(seq.dir[1]*(ratio[1]*m)) : contentPos[0]+(seq.dir[1]*(ratio[0]*m)),
					px=seq.dir[0]==="x" ? contentPos[1]+(seq.dir[1]*parseInt(seq.scrollAmount)) : contentPos[0]+(seq.dir[1]*parseInt(seq.scrollAmount)),
					to=seq.scrollAmount!=="auto" ? px : amount,
					easing=e ? e : !once ? "mcsLinear" : c ? "mcsLinearOut" : "mcsEaseInOut",
					onComplete=!once ? false : true;
				if(once && t<17){
					to=seq.dir[0]==="x" ? contentPos[1] : contentPos[0];
				}
				_scrollTo(el,to.toString(),{dir:seq.dir[0],scrollEasing:easing,dur:t,onComplete:onComplete});
				if(once){
					seq.dir=false;
					return;
				}
				clearTimeout(seq.step);
				seq.step=setTimeout(function(){
					_on();
				},t);
			}
			/* stops sequence */
			function _off(){
				clearTimeout(seq.step);
				_delete(seq,"step");
				_stop(el);
			}
		},
		/* -------------------- */


		/* returns a yx array from value */
		_arr=function(val){
			var o=$(this).data(pluginPfx).opt,vals=[];
			if(typeof val==="function"){val=val();} /* check if the value is a single anonymous function */
			/* check if value is object or array, its length and create an array with yx values */
			if(!(val instanceof Array)){ /* object value (e.g. {y:"100",x:"100"}, 100 etc.) */
				vals[0]=val.y ? val.y : val.x || o.axis==="x" ? null : val;
				vals[1]=val.x ? val.x : val.y || o.axis==="y" ? null : val;
			}else{ /* array value (e.g. [100,100]) */
				vals=val.length>1 ? [val[0],val[1]] : o.axis==="x" ? [null,val[0]] : [val[0],null];
			}
			/* check if array values are anonymous functions */
			if(typeof vals[0]==="function"){vals[0]=vals[0]();}
			if(typeof vals[1]==="function"){vals[1]=vals[1]();}
			return vals;
		},
		/* -------------------- */


		/* translates values (e.g. "top", 100, "100px", "#id") to actual scroll-to positions */
		_to=function(val,dir){
			if(val==null || typeof val=="undefined"){return;}
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				wrapper=mCSB_container.parent(),
				t=typeof val;
			if(!dir){dir=o.axis==="x" ? "x" : "y";}
			var contentLength=dir==="x" ? mCSB_container.outerWidth(false)-wrapper.width() : mCSB_container.outerHeight(false)-wrapper.height(),
				contentPos=dir==="x" ? mCSB_container[0].offsetLeft : mCSB_container[0].offsetTop,
				cssProp=dir==="x" ? "left" : "top";
			switch(t){
				case "function": /* this currently is not used. Consider removing it */
					return val();
					break;
				case "object": /* js/jquery object */
					var obj=val.jquery ? val : $(val);
					if(!obj.length){return;}
					return dir==="x" ? _childPos(obj)[1] : _childPos(obj)[0];
					break;
				case "string": case "number":
					if(_isNumeric(val)){ /* numeric value */
						return Math.abs(val);
					}else if(val.indexOf("%")!==-1){ /* percentage value */
						return Math.abs(contentLength*parseInt(val)/100);
					}else if(val.indexOf("-=")!==-1){ /* decrease value */
						return Math.abs(contentPos-parseInt(val.split("-=")[1]));
					}else if(val.indexOf("+=")!==-1){ /* inrease value */
						var p=(contentPos+parseInt(val.split("+=")[1]));
						return p>=0 ? 0 : Math.abs(p);
					}else if(val.indexOf("px")!==-1 && _isNumeric(val.split("px")[0])){ /* pixels string value (e.g. "100px") */
						return Math.abs(val.split("px")[0]);
					}else{
						if(val==="top" || val==="left"){ /* special strings */
							return 0;
						}else if(val==="bottom"){
							return Math.abs(wrapper.height()-mCSB_container.outerHeight(false));
						}else if(val==="right"){
							return Math.abs(wrapper.width()-mCSB_container.outerWidth(false));
						}else if(val==="first" || val==="last"){
							var obj=mCSB_container.find(":"+val);
							return dir==="x" ? _childPos(obj)[1] : _childPos(obj)[0];
						}else{
							if($(val).length){ /* jquery selector */
								return dir==="x" ? _childPos($(val))[1] : _childPos($(val))[0];
							}else{ /* other values (e.g. "100em") */
								mCSB_container.css(cssProp,val);
								methods.update.call(null,$this[0]);
								return;
							}
						}
					}
					break;
			}
		},
		/* -------------------- */


		/* calls the update method automatically */
		_autoUpdate=function(rem){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				mCSB_container=$("#mCSB_"+d.idx+"_container");
			if(rem){
				/*
				removes autoUpdate timer
				usage: _autoUpdate.call(this,"remove");
				*/
				clearTimeout(mCSB_container[0].autoUpdate);
				_delete(mCSB_container[0],"autoUpdate");
				return;
			}
			upd();
			function upd(){
				clearTimeout(mCSB_container[0].autoUpdate);
				if($this.parents("html").length===0){
					/* check element in dom tree */
					$this=null;
					return;
				}
				mCSB_container[0].autoUpdate=setTimeout(function(){
					/* update on specific selector(s) length and size change */
					if(o.advanced.updateOnSelectorChange){
						d.poll.change.n=sizesSum();
						if(d.poll.change.n!==d.poll.change.o){
							d.poll.change.o=d.poll.change.n;
							doUpd(3);
							return;
						}
					}
					/* update on main element and scrollbar size changes */
					if(o.advanced.updateOnContentResize){
						d.poll.size.n=$this[0].scrollHeight+$this[0].scrollWidth+mCSB_container[0].offsetHeight+$this[0].offsetHeight+$this[0].offsetWidth;
						if(d.poll.size.n!==d.poll.size.o){
							d.poll.size.o=d.poll.size.n;
							doUpd(1);
							return;
						}
					}
					/* update on image load */
					if(o.advanced.updateOnImageLoad){
						if(!(o.advanced.updateOnImageLoad==="auto" && o.axis==="y")){ //by default, it doesn't run on vertical content
							d.poll.img.n=mCSB_container.find("img").length;
							if(d.poll.img.n!==d.poll.img.o){
								d.poll.img.o=d.poll.img.n;
								mCSB_container.find("img").each(function(){
									imgLoader(this);
								});
								return;
							}
						}
					}
					if(o.advanced.updateOnSelectorChange || o.advanced.updateOnContentResize || o.advanced.updateOnImageLoad){upd();}
				},o.advanced.autoUpdateTimeout);
			}
			/* a tiny image loader */
			function imgLoader(el){
				if($(el).hasClass(classes[2])){doUpd(); return;}
				var img=new Image();
				function createDelegate(contextObject,delegateMethod){
					return function(){return delegateMethod.apply(contextObject,arguments);}
				}
				function imgOnLoad(){
					this.onload=null;
					$(el).addClass(classes[2]);
					doUpd(2);
				}
				img.onload=createDelegate(img,imgOnLoad);
				img.src=el.src;
			}
			/* returns the total height and width sum of all elements matching the selector */
			function sizesSum(){
				if(o.advanced.updateOnSelectorChange===true){o.advanced.updateOnSelectorChange="*";}
				var total=0,sel=mCSB_container.find(o.advanced.updateOnSelectorChange);
				if(o.advanced.updateOnSelectorChange && sel.length>0){sel.each(function(){total+=this.offsetHeight+this.offsetWidth;});}
				return total;
			}
			/* calls the update method */
			function doUpd(cb){
				clearTimeout(mCSB_container[0].autoUpdate);
				methods.update.call(null,$this[0],cb);
			}
		},
		/* -------------------- */


		/* snaps scrolling to a multiple of a pixels number */
		_snapAmount=function(to,amount,offset){
			return (Math.round(to/amount)*amount-offset);
		},
		/* -------------------- */


		/* stops content and scrollbar animations */
		_stop=function(el){
			var d=el.data(pluginPfx),
				sel=$("#mCSB_"+d.idx+"_container,#mCSB_"+d.idx+"_container_wrapper,#mCSB_"+d.idx+"_dragger_vertical,#mCSB_"+d.idx+"_dragger_horizontal");
			sel.each(function(){
				_stopTween.call(this);
			});
		},
		/* -------------------- */


		/*
		ANIMATES CONTENT
		This is where the actual scrolling happens
		*/
		_scrollTo=function(el,to,options){
			var d=el.data(pluginPfx),o=d.opt,
				defaults={
					trigger:"internal",
					dir:"y",
					scrollEasing:"mcsEaseOut",
					drag:false,
					dur:o.scrollInertia,
					overwrite:"all",
					callbacks:true,
					onStart:true,
					onUpdate:true,
					onComplete:true
				},
				options=$.extend(defaults,options),
				dur=[options.dur,(options.drag ? 0 : options.dur)],
				mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				wrapper=mCSB_container.parent(),
				totalScrollOffsets=o.callbacks.onTotalScrollOffset ? _arr.call(el,o.callbacks.onTotalScrollOffset) : [0,0],
				totalScrollBackOffsets=o.callbacks.onTotalScrollBackOffset ? _arr.call(el,o.callbacks.onTotalScrollBackOffset) : [0,0];
			d.trigger=options.trigger;
			if(wrapper.scrollTop()!==0 || wrapper.scrollLeft()!==0){ /* always reset scrollTop/Left */
				$(".mCSB_"+d.idx+"_scrollbar").css("visibility","visible");
				wrapper.scrollTop(0).scrollLeft(0);
			}
			if(to==="_resetY" && !d.contentReset.y){
				/* callbacks: onOverflowYNone */
				if(_cb("onOverflowYNone")){o.callbacks.onOverflowYNone.call(el[0]);}
				d.contentReset.y=1;
			}
			if(to==="_resetX" && !d.contentReset.x){
				/* callbacks: onOverflowXNone */
				if(_cb("onOverflowXNone")){o.callbacks.onOverflowXNone.call(el[0]);}
				d.contentReset.x=1;
			}
			if(to==="_resetY" || to==="_resetX"){return;}
			if((d.contentReset.y || !el[0].mcs) && d.overflowed[0]){
				/* callbacks: onOverflowY */
				if(_cb("onOverflowY")){o.callbacks.onOverflowY.call(el[0]);}
				d.contentReset.x=null;
			}
			if((d.contentReset.x || !el[0].mcs) && d.overflowed[1]){
				/* callbacks: onOverflowX */
				if(_cb("onOverflowX")){o.callbacks.onOverflowX.call(el[0]);}
				d.contentReset.x=null;
			}
			if(o.snapAmount){ /* scrolling snapping */
				var snapAmount=!(o.snapAmount instanceof Array) ? o.snapAmount : options.dir==="x" ? o.snapAmount[1] : o.snapAmount[0];
				to=_snapAmount(to,snapAmount,o.snapOffset);
			}
			switch(options.dir){
				case "x":
					var mCSB_dragger=$("#mCSB_"+d.idx+"_dragger_horizontal"),
						property="left",
						contentPos=mCSB_container[0].offsetLeft,
						limit=[
							mCustomScrollBox.width()-mCSB_container.outerWidth(false),
							mCSB_dragger.parent().width()-mCSB_dragger.width()
						],
						scrollTo=[to,to===0 ? 0 : (to/d.scrollRatio.x)],
						tso=totalScrollOffsets[1],
						tsbo=totalScrollBackOffsets[1],
						totalScrollOffset=tso>0 ? tso/d.scrollRatio.x : 0,
						totalScrollBackOffset=tsbo>0 ? tsbo/d.scrollRatio.x : 0;
					break;
				case "y":
					var mCSB_dragger=$("#mCSB_"+d.idx+"_dragger_vertical"),
						property="top",
						contentPos=mCSB_container[0].offsetTop,
						limit=[
							mCustomScrollBox.height()-mCSB_container.outerHeight(false),
							mCSB_dragger.parent().height()-mCSB_dragger.height()
						],
						scrollTo=[to,to===0 ? 0 : (to/d.scrollRatio.y)],
						tso=totalScrollOffsets[0],
						tsbo=totalScrollBackOffsets[0],
						totalScrollOffset=tso>0 ? tso/d.scrollRatio.y : 0,
						totalScrollBackOffset=tsbo>0 ? tsbo/d.scrollRatio.y : 0;
					break;
			}
			if(scrollTo[1]<0 || (scrollTo[0]===0 && scrollTo[1]===0)){
				scrollTo=[0,0];
			}else if(scrollTo[1]>=limit[1]){
				scrollTo=[limit[0],limit[1]];
			}else{
				scrollTo[0]=-scrollTo[0];
			}
			if(!el[0].mcs){
				_mcs();  /* init mcs object (once) to make it available before callbacks */
				if(_cb("onInit")){o.callbacks.onInit.call(el[0]);} /* callbacks: onInit */
			}
			clearTimeout(mCSB_container[0].onCompleteTimeout);
			_tweenTo(mCSB_dragger[0],property,Math.round(scrollTo[1]),dur[1],options.scrollEasing);
			if(!d.tweenRunning && ((contentPos===0 && scrollTo[0]>=0) || (contentPos===limit[0] && scrollTo[0]<=limit[0]))){return;}
			_tweenTo(mCSB_container[0],property,Math.round(scrollTo[0]),dur[0],options.scrollEasing,options.overwrite,{
				onStart:function(){
					if(options.callbacks && options.onStart && !d.tweenRunning){
						/* callbacks: onScrollStart */
						if(_cb("onScrollStart")){_mcs(); o.callbacks.onScrollStart.call(el[0]);}
						d.tweenRunning=true;
						_onDragClasses(mCSB_dragger);
						d.cbOffsets=_cbOffsets();
					}
				},onUpdate:function(){
					if(options.callbacks && options.onUpdate){
						/* callbacks: whileScrolling */
						if(_cb("whileScrolling")){_mcs(); o.callbacks.whileScrolling.call(el[0]);}
					}
				},onComplete:function(){
					if(options.callbacks && options.onComplete){
						if(o.axis==="yx"){clearTimeout(mCSB_container[0].onCompleteTimeout);}
						var t=mCSB_container[0].idleTimer || 0;
						mCSB_container[0].onCompleteTimeout=setTimeout(function(){
							/* callbacks: onScroll, onTotalScroll, onTotalScrollBack */
							if(_cb("onScroll")){_mcs(); o.callbacks.onScroll.call(el[0]);}
							if(_cb("onTotalScroll") && scrollTo[1]>=limit[1]-totalScrollOffset && d.cbOffsets[0]){_mcs(); o.callbacks.onTotalScroll.call(el[0]);}
							if(_cb("onTotalScrollBack") && scrollTo[1]<=totalScrollBackOffset && d.cbOffsets[1]){_mcs(); o.callbacks.onTotalScrollBack.call(el[0]);}
							d.tweenRunning=false;
							mCSB_container[0].idleTimer=0;
							_onDragClasses(mCSB_dragger,"hide");
						},t);
					}
				}
			});
			/* checks if callback function exists */
			function _cb(cb){
				return d && o.callbacks[cb] && typeof o.callbacks[cb]==="function";
			}
			/* checks whether callback offsets always trigger */
			function _cbOffsets(){
				return [o.callbacks.alwaysTriggerOffsets || contentPos>=limit[0]+tso,o.callbacks.alwaysTriggerOffsets || contentPos<=-tsbo];
			}
			/*
			populates object with useful values for the user
			values:
				content: this.mcs.content
				content top position: this.mcs.top
				content left position: this.mcs.left
				dragger top position: this.mcs.draggerTop
				dragger left position: this.mcs.draggerLeft
				scrolling y percentage: this.mcs.topPct
				scrolling x percentage: this.mcs.leftPct
				scrolling direction: this.mcs.direction
			*/
			function _mcs(){
				var cp=[mCSB_container[0].offsetTop,mCSB_container[0].offsetLeft], /* content position */
					dp=[mCSB_dragger[0].offsetTop,mCSB_dragger[0].offsetLeft], /* dragger position */
					cl=[mCSB_container.outerHeight(false),mCSB_container.outerWidth(false)], /* content length */
					pl=[mCustomScrollBox.height(),mCustomScrollBox.width()]; /* content parent length */
				el[0].mcs={
					content:mCSB_container, /* original content wrapper as jquery object */
					top:cp[0],left:cp[1],draggerTop:dp[0],draggerLeft:dp[1],
					topPct:Math.round((100*Math.abs(cp[0]))/(Math.abs(cl[0])-pl[0])),leftPct:Math.round((100*Math.abs(cp[1]))/(Math.abs(cl[1])-pl[1])),
					direction:options.dir
				};
				/*
				this refers to the original element containing the scrollbar(s)
				usage: this.mcs.top, this.mcs.leftPct etc.
				*/
			}
		},
		/* -------------------- */


		/*
		CUSTOM JAVASCRIPT ANIMATION TWEEN
		Lighter and faster than jquery animate() and css transitions
		Animates top/left properties and includes easings
		*/
		_tweenTo=function(el,prop,to,duration,easing,overwrite,callbacks){
			if(!el._mTween){el._mTween={top:{},left:{}};}
			var callbacks=callbacks || {},
				onStart=callbacks.onStart || function(){},onUpdate=callbacks.onUpdate || function(){},onComplete=callbacks.onComplete || function(){},
				startTime=_getTime(),_delay,progress=0,from=el.offsetTop,elStyle=el.style,_request,tobj=el._mTween[prop];
			if(prop==="left"){from=el.offsetLeft;}
			var diff=to-from;
			tobj.stop=0;
			if(overwrite!=="none"){_cancelTween();}
			_startTween();
			function _step(){
				if(tobj.stop){return;}
				if(!progress){onStart.call();}
				progress=_getTime()-startTime;
				_tween();
				if(progress>=tobj.time){
					tobj.time=(progress>tobj.time) ? progress+_delay-(progress-tobj.time) : progress+_delay-1;
					if(tobj.time<progress+1){tobj.time=progress+1;}
				}
				if(tobj.time<duration){tobj.id=_request(_step);}else{onComplete.call();}
			}
			function _tween(){
				if(duration>0){
					tobj.currVal=_ease(tobj.time,from,diff,duration,easing);
					elStyle[prop]=Math.round(tobj.currVal)+"px";
				}else{
					elStyle[prop]=to+"px";
				}
				onUpdate.call();
			}
			function _startTween(){
				_delay=1000/60;
				tobj.time=progress+_delay;
				_request=(!window.requestAnimationFrame) ? function(f){_tween(); return setTimeout(f,0.01);} : window.requestAnimationFrame;
				tobj.id=_request(_step);
			}
			function _cancelTween(){
				if(tobj.id==null){return;}
				if(!window.requestAnimationFrame){clearTimeout(tobj.id);
				}else{window.cancelAnimationFrame(tobj.id);}
				tobj.id=null;
			}
			function _ease(t,b,c,d,type){
				switch(type){
					case "linear": case "mcsLinear":
						return c*t/d + b;
						break;
					case "mcsLinearOut":
						t/=d; t--; return c * Math.sqrt(1 - t*t) + b;
						break;
					case "easeInOutSmooth":
						t/=d/2;
						if(t<1) return c/2*t*t + b;
						t--;
						return -c/2 * (t*(t-2) - 1) + b;
						break;
					case "easeInOutStrong":
						t/=d/2;
						if(t<1) return c/2 * Math.pow( 2, 10 * (t - 1) ) + b;
						t--;
						return c/2 * ( -Math.pow( 2, -10 * t) + 2 ) + b;
						break;
					case "easeInOut": case "mcsEaseInOut":
						t/=d/2;
						if(t<1) return c/2*t*t*t + b;
						t-=2;
						return c/2*(t*t*t + 2) + b;
						break;
					case "easeOutSmooth":
						t/=d; t--;
						return -c * (t*t*t*t - 1) + b;
						break;
					case "easeOutStrong":
						return c * ( -Math.pow( 2, -10 * t/d ) + 1 ) + b;
						break;
					case "easeOut": case "mcsEaseOut": default:
						var ts=(t/=d)*t,tc=ts*t;
						return b+c*(0.499999999999997*tc*ts + -2.5*ts*ts + 5.5*tc + -6.5*ts + 4*t);
				}
			}
		},
		/* -------------------- */


		/* returns current time */
		_getTime=function(){
			if(window.performance && window.performance.now){
				return window.performance.now();
			}else{
				if(window.performance && window.performance.webkitNow){
					return window.performance.webkitNow();
				}else{
					if(Date.now){return Date.now();}else{return new Date().getTime();}
				}
			}
		},
		/* -------------------- */


		/* stops a tween */
		_stopTween=function(){
			var el=this;
			if(!el._mTween){el._mTween={top:{},left:{}};}
			var props=["top","left"];
			for(var i=0; i<props.length; i++){
				var prop=props[i];
				if(el._mTween[prop].id){
					if(!window.requestAnimationFrame){clearTimeout(el._mTween[prop].id);
					}else{window.cancelAnimationFrame(el._mTween[prop].id);}
					el._mTween[prop].id=null;
					el._mTween[prop].stop=1;
				}
			}
		},
		/* -------------------- */


		/* deletes a property (avoiding the exception thrown by IE) */
		_delete=function(c,m){
			try{delete c[m];}catch(e){c[m]=null;}
		},
		/* -------------------- */


		/* detects left mouse button */
		_mouseBtnLeft=function(e){
			return !(e.which && e.which!==1);
		},
		/* -------------------- */


		/* detects if pointer type event is touch */
		_pointerTouch=function(e){
			var t=e.originalEvent.pointerType;
			return !(t && t!=="touch" && t!==2);
		},
		/* -------------------- */


		/* checks if value is numeric */
		_isNumeric=function(val){
			return !isNaN(parseFloat(val)) && isFinite(val);
		},
		/* -------------------- */


		/* returns element position according to content */
		_childPos=function(el){
			var p=el.parents(".mCSB_container");
			return [el.offset().top-p.offset().top,el.offset().left-p.offset().left];
		},
		/* -------------------- */


		/* checks if browser tab is hidden/inactive via Page Visibility API */
		_isTabHidden=function(){
			var prop=_getHiddenProp();
			if(!prop) return false;
			return document[prop];
			function _getHiddenProp(){
				var pfx=["webkit","moz","ms","o"];
				if("hidden" in document) return "hidden"; //natively supported
				for(var i=0; i<pfx.length; i++){ //prefixed
				    if((pfx[i]+"Hidden") in document)
				        return pfx[i]+"Hidden";
				}
				return null; //not supported
			}
		};
		/* -------------------- */





	/*
	----------------------------------------
	PLUGIN SETUP
	----------------------------------------
	*/

	/* plugin constructor functions */
	$.fn[pluginNS]=function(method){ /* usage: $(selector).mCustomScrollbar(); */
		if(methods[method]){
			return methods[method].apply(this,Array.prototype.slice.call(arguments,1));
		}else if(typeof method==="object" || !method){
			return methods.init.apply(this,arguments);
		}else{
			$.error("Method "+method+" does not exist");
		}
	};
	$[pluginNS]=function(method){ /* usage: $.mCustomScrollbar(); */
		if(methods[method]){
			return methods[method].apply(this,Array.prototype.slice.call(arguments,1));
		}else if(typeof method==="object" || !method){
			return methods.init.apply(this,arguments);
		}else{
			$.error("Method "+method+" does not exist");
		}
	};

	/*
	allow setting plugin default options.
	usage: $.mCustomScrollbar.defaults.scrollInertia=500;
	to apply any changed default options on default selectors (below), use inside document ready fn
	e.g.: $(document).ready(function(){ $.mCustomScrollbar.defaults.scrollInertia=500; });
	*/
	$[pluginNS].defaults=defaults;

	/*
	add window object (window.mCustomScrollbar)
	usage: if(window.mCustomScrollbar){console.log("custom scrollbar plugin loaded");}
	*/
	window[pluginNS]=true;

	$(window).bind("load",function(){

		$(defaultSelector)[pluginNS](); /* add scrollbars automatically on default selector */

		/* extend jQuery expressions */
		$.extend($.expr[":"],{
			/* checks if element is within scrollable viewport */
			mcsInView:$.expr[":"].mcsInView || function(el){
				var $el=$(el),content=$el.parents(".mCSB_container"),wrapper,cPos;
				if(!content.length){return;}
				wrapper=content.parent();
				cPos=[content[0].offsetTop,content[0].offsetLeft];
				return 	cPos[0]+_childPos($el)[0]>=0 && cPos[0]+_childPos($el)[0]<wrapper.height()-$el.outerHeight(false) &&
						cPos[1]+_childPos($el)[1]>=0 && cPos[1]+_childPos($el)[1]<wrapper.width()-$el.outerWidth(false);
			},
			/* checks if element or part of element is in view of scrollable viewport */
			mcsInSight:$.expr[":"].mcsInSight || function(el,i,m){
				var $el=$(el),elD,content=$el.parents(".mCSB_container"),wrapperView,pos,wrapperViewPct,
					pctVals=m[3]==="exact" ? [[1,0],[1,0]] : [[0.9,0.1],[0.6,0.4]];
				if(!content.length){return;}
				elD=[$el.outerHeight(false),$el.outerWidth(false)];
				pos=[content[0].offsetTop+_childPos($el)[0],content[0].offsetLeft+_childPos($el)[1]];
				wrapperView=[content.parent()[0].offsetHeight,content.parent()[0].offsetWidth];
				wrapperViewPct=[elD[0]<wrapperView[0] ? pctVals[0] : pctVals[1],elD[1]<wrapperView[1] ? pctVals[0] : pctVals[1]];
				return 	pos[0]-(wrapperView[0]*wrapperViewPct[0][0])<0 && pos[0]+elD[0]-(wrapperView[0]*wrapperViewPct[0][1])>=0 &&
						pos[1]-(wrapperView[1]*wrapperViewPct[1][0])<0 && pos[1]+elD[1]-(wrapperView[1]*wrapperViewPct[1][1])>=0;
			},
			/* checks if element is overflowed having visible scrollbar(s) */
			mcsOverflow:$.expr[":"].mcsOverflow || function(el){
				var d=$(el).data(pluginPfx);
				if(!d){return;}
				return d.overflowed[0] || d.overflowed[1];
			}
		});

	});

}))}));
function copyToClipboard() {
    var text = $(document).find('.content-code').text();  // Lấy nội dung từ #codeContent
    navigator.clipboard.writeText(text).then(function() {
    }).catch(function(error) {
        alert('Không thể sao chép: ' + error);
    });
}
function onloadToolTip(){
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
}

function loadScrollTable() {
    if ($(".custom-scrollbar").length) {
        $(".custom-scrollbar").each(function () {

            $(this).mCustomScrollbar({
                scrollButtons: {
                    enable: true,
                },
                theme: 'dark-thick',
            });
        });
    }
}

function changeStateOverflow(on = true) {
    if (!on) {
        $(document).find('body').addClass('overflow-y-auto');
        $(document).find('body').removeClass('overflow-hidden');
        return;
    }
    $(document).find('body').removeClass('overflow-y-auto');
    $(document).find('body').addClass('overflow-hidden');
    return;
}

$(function () {
    onloadToolTip();

    $('#serverSelect').change(function(){
        var slug = $(this).val();
        if (slug == 0) {slug = ''}
        $('#serverSlug').val(slug);
    });

    if ($('.selectCodeType button').length) {
        $('.selectCodeType button').codeType()
    }
    // Get giftcode.
    $('#confirmGetCode').click(function() {
        var codeSlug    = $('#codeSlug').val();
        var serverSlug  = $('#serverSlug').val();
        var codeId      = $('#codeId').val();
        var codeDefault = $('#codeDefault').val();
        var contentCode;

        if(codeSlug == 0 && codeDefault){
            showResult(codeDefault);
            return;
        }

        fetchGiftCode(serverSlug, codeSlug, codeId);
    });

    $('#giftcodeHistory').click(function() {
        var serverSlug = $('#serverSlug').val();
        getCodeHistory(serverSlug);
    });

    $(".popup-history .wrap .close").click(function () {
        $(".popup.popup-history").hide();
        changeStateOverflow(false);
    });

    $(".popup.popup-history").click(function (e) {
        if (e.target !== this) return;
        $(".popup.popup-history").hide();
        changeStateOverflow(false);
    });
});


$.fn.codeType = function() {
    let el = this
    let listCode = $(el).parent().find('>ul')
    let codeName = '';

    $(el).click(function(e) {
        e.preventDefault()
        if ($(this).parent().hasClass('show')) {
            $(this).parent().removeClass('show')
        } else {
            $(this).parent().addClass('show')
        }
    })

    $(listCode).children().each(function() {
        $(this).click(function(e) {
            e.preventDefault()
            codeName = $(this).find('>a').data('code');
            codetext = $(this).find('>a').text();
            codeId = $(this).find('>a').data('id');
            codeDefault = $(this).find('>a').data('coded');

            if (codeName == 0 && !codeDefault) {
                $('.table-his').addClass('d-none');
                $(el).html(codetext);
                $('#codeSlug').val(codeName);
                $(el).parent().removeClass('show')
                return;
            }
            $('.table-his').addClass('d-none');
            $('#table-his-' + codeId).removeClass('d-none');

            $(el).html(codetext);
            $('#codeSlug').val(codeName);
            $('#codeId').val(codeId);
            $('#codeDefault').val(codeDefault);
            $(el).parent().removeClass('show')
        })
    })
}

function showResult(codeDefault){
    var contentCode = '<p class="content-code">'+codeDefault+'</p>';
    contentCode += '<a href="javascript:void(0)" class="text-decoration-underline text-secondary btn-copy-code" data-bs-toggle="tooltip" data-bs-placement="top" title="Bấm để sao chép">Bấm để sao chép</a>';

    Swal.fire({
        icon: 'success',
        html: contentCode,
        confirmButtonText: "Đóng",
    });
    onloadToolTip();

    $('.btn-copy-code').click(function (e) {
        e.preventDefault();
        $(this).attr('data-bs-original-title', 'Đã sao chép');
        copyToClipboard();

        var tooltip = bootstrap.Tooltip.getInstance(this);
        if (tooltip) {
            tooltip.setContent({ '.tooltip-inner': 'Đã sao chép' });
            tooltip.show();
        }
    });
}

function hideResult(){
    $('.notice').addClass('d-none');
    $('.notice').removeClass('code');
    $('.notice').text('');
}

function getCodeHistory(serverSlug) {
    $.ajax({
        url: '//'+ historyGiftcode,
        method: 'POST',
        success: function( response ) {
            if (response.status == -1) {
                Swal.fire({
                    icon: "warning",
                    title: 'Thông báo',
                    confirmButtonText: response.msg
                }).then(function() {
                    location.reload();
                });
                return false;
            }
            showPopup(response.data);
            // getNewTokenOfReCaptcha();
            return;
        },
        error: function(response) {
            if (response) {
                Swal.fire({
                    icon: "error",
                    title: 'Thông báo',
                    confirmButtonText: 'Có lỗi xảy ra vui lòng liên hệ admin (#1)!'
                }).then(function() {
                    location.reload();
                });
            }
            // getNewTokenOfReCaptcha();
        }
    });
}

function showPopup(data) {
    $('.popup.popup-history').show();
    $('.popup.popup-history .content tbody').empty();
    $.each(data, function(i, item) {
        $('#table-history tbody').append(
            '<tr>' +
                '<td>'+item.name+'</td>' +
                '<td>'+item.code+'</td>' +
                '<td class="text-uppercase text-center">'+item.serverSlug+'</td>' +
                '<td>'+item.receiveDate+'</td>' +
            '</tr>'
        );
    });
    changeStateOverflow();
    loadScrollTable();
}

function fetchGiftCode(serverSlug, codeSlug, codeId) {
    hideResult();

    if (_.isNil(serverSlug) || _.isEmpty(serverSlug)) {
        serverSlug = $('#serverSlug').val();
    }
    if (_.isNil(codeSlug) || codeSlug === 0 || _.isEmpty(codeSlug)) {
        codeSlug = $('#codeSlug').val();
    }

    if (_.isNil(serverSlug) || _.isEmpty(serverSlug)) {
        Swal.fire({
            icon: 'warning',
            title: 'Vui lòng chọn server!',
            confirmButtonText: 'Đóng'
        });
        return;
    }

    // Kiểm tra codeSlug
    if (_.isNil(codeSlug) || codeSlug === 0 || _.isEmpty(codeSlug)) {
        Swal.fire({
            icon: 'warning',
            title: 'Vui lòng chọn loại gift code!',
            confirmButtonText: 'Đóng'
        });
        return;
    }

    $.ajax({
        url:  '//'+linkAjaxGiftcode,
        dataType: 'json',
        method: 'POST',
        data: {
            codeSlug: codeSlug,
            serverSlug: serverSlug,
            codeId: codeId,
            gRecaptchaResponse: typeof tokenRecaptcha !== 'undefined' ? tokenRecaptcha : '',
        },
        beforeSend: function () {
            showLoading();
        },
        success: function(response) {
            hideLoading();

            if (response.status != 1) {
                if (response.status == -403) {
                    Swal.fire({
                        icon: "error",
                        title: 'Thông báo',
                        confirmButtonText: response.msg
                    }).then(function() {
                        location.reload();
                    });
                    return false;
                }
                warning(response.msg);
                return false;
            }

            showResult(response.code)

            if (typeof getNewTokenOfReCaptcha !== 'undefined') {
                getNewTokenOfReCaptcha();
            }
        },
        error: function(response) {
            hideLoading();
            error('Có lỗi xảy ra vui lòng liên hệ admin (#2)!');
            console.log("error-> ",response);

            if (typeof getNewTokenOfReCaptcha !== 'undefined') {
                getNewTokenOfReCaptcha();
            }
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {
    var leftmenu = document.getElementsByClassName('left-menu')[0];
    var rightmenu = document.getElementsByClassName('right-menu')[0];
    var leftmenuItem = document.querySelectorAll('.left-menu ul li');
    var pages = document.querySelectorAll('.page .content');
    var btnTurnTop = document.querySelector('.turn-top');

    var pageHeight;
    let isScrolling = false;
    var pageIndex = 0;

    function updatePageHeight() {
        $scale = window.innerWidth / 1912;
        pageHeight = $('.page').height() * $scale;
        if(pageHeight > 960) {
            pageHeight = 945;
        }
    }

    updatePageHeight();

    // Hàm cập nhật class active cho menu
    var updateActiveMenu = () => {
        pageIndex = Math.round(window.scrollY / pageHeight);
        switch (pageIndex) {
            case 0:
                leftmenu.style.display = 'block';
                rightmenu.style.display = 'none';
                break;
            case 1:
                leftmenu.style.display = 'block';
                rightmenu.style.display = 'block';
                break;
            case 2:
                leftmenu.style.display = 'block';
                rightmenu.style.display = 'block';
                break;
            case 3:
                leftmenu.style.display = 'none';
                rightmenu.style.display = 'block';
                break;
            default:
                leftmenu.style.display = 'block';
                rightmenu.style.display = 'block';
                break;
        }
        leftmenuItem.forEach((item, index) => {
            item.classList.toggle('active', index === pageIndex);
        });
    };

    setTimeout(() => {
        updateActiveMenu();
    }, 200);

    window.addEventListener('wheel', (e) => {
        if (isScrolling) return;
        e.preventDefault();

        var direction = e.deltaY > 0 ? 1 : -1;
        var currentScroll = window.scrollY;
        var maxScroll = document.body.scrollHeight - window.innerHeight;

        let scrollAmount = direction * pageHeight;

        if (direction > 0 && currentScroll + scrollAmount > maxScroll) {
            scrollAmount = maxScroll - currentScroll;
        } else if (direction < 0) {
            let remainder = currentScroll % pageHeight;
            if (Math.abs(remainder) < 1) remainder = 0;
            scrollAmount = -(remainder || pageHeight);
        }

        isScrolling = true;
        window.scrollBy({
            top: scrollAmount,
            behavior: 'smooth'
        });

        setTimeout(() => {
            isScrolling = false;
            updateActiveMenu();
        }, 500);
    }, { passive: false });

    // Lắng nghe sự kiện click vào menu item
    leftmenuItem.forEach((item, index) => {
        item.addEventListener('click', () => {
            leftmenuItem.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            window.scrollTo({
                top: index * pageHeight,
                behavior: 'smooth'
            });

            setTimeout(() => {
                updateActiveMenu();
            }, 500);

        });
    });

    btnTurnTop.addEventListener('click', () => {
        setTimeout(() => {
            updateActiveMenu();
        }, 700);
    });

    window.addEventListener('resize', () => {
        updatePageHeight();
    });
});
let filteredFruits = fruits;
let currentEffect = ''
function renderFruits(page) {
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const items = filteredFruits.slice(start, end);

    const $list = $('#fruit-list');
    if (!$list.length) return;

    if (!items.length) {
        $list.html('<li class="no-data">Không có dữ liệu để hiển thị</li>');
        return;
    }

    const html = items.map(fruit => {
        const effectKey = slugify(fruit.effect || '');
        const nameSpans = formatNameToSpans(fruit.name);
        return `
            <li class='fruit-item' data-id="${escapeHtml(fruit.id)}" data-effect="${escapeHtml(effectKey)}">
                <img src='${window.domainDownload}${escapeHtml(fruit.itemSmall)}'
                    alt='${escapeHtml(fruit.name)}' class='thumb'
                    onerror="this.onerror=null;this.src='${window.staticUrl}imgs/devil-fruit/devil-fruit-example.png';" />
                <div class='name d-flex flex-column'>${nameSpans}</div>
            </li>
        `;
    }).join('');

    $list.html(html);
}

function renderFruitDetail(fruit) {
    const $detail = $('.fruit-detail .content');
    if (!$detail.length) return;
    const nameSpans = formatNameToSpanForDetail(fruit.name);
    $detail.find('.name').html(nameSpans).removeClass('flex-column');

    const imgHtml = `
            <img src='${window.domainDownload}/${fruit.itemSmall}'
                alt='${escapeHtml(fruit.name)}'
                class='thumb'
                onerror="this.onerror=null;this.src='${window.staticUrl}imgs/devil-fruit/devil-fruit-example.png';" />
	`;
    $detail.find('.thumb').replaceWith(imgHtml);

    $detail.find('.text-group .text-content.quality').text(fruit.quality + ' Sao' || 'Không có');
    $detail.find('.text-group .text-content.effect').text(fruit.effect || 'Không có');
    $detail.find('.text-group .text-content.property').html(formatProperties(fruit.property));
    $detail.find('.text-group .text-content.info').html(formatInfo(fruit.info));
}

function formatInfo(info) {
    if (!info) return '<span>[Không có thông tin]&nbsp;</span>';

    const match = info.match(/^\s*(\[[^\]]+\])\s*(.*)/);
    if (match) {
        const name = escapeHtml(match[1]);
        const rest = escapeHtml(match[2]);
        return `<span class='description'>${name}:&nbsp;</span>${rest}`;
    } else {
        return escapeHtml(info);
    }
}

function renderPagination() {
    const totalPages = Math.ceil(filteredFruits.length / perPage);
    const $container = $('#pagination');
    if (!$container.length) return;

    const maxVisible = 5;
    let html = `
	<div class="pagingWrapOut">
	  <div class="pagingWrap">
	    <div class="paging">
	      <ul class="d-flex justify-content-center gap-2 my-3">
	`;

    // Nút Trước
    html += `<li class="prev">`;
    if (currentPage > 1) {
        html += `<a class='d-block w-100 h-100' href="#" data-page="${currentPage - 1}"><img src="${window.staticUrl}imgs/icon-arrow-left.png" alt="" width="10px" height="15px"></a>`;
    } else {
        html += `<span><img src="${window.staticUrl}imgs/icon-arrow-left.png" alt="" width="10px" height="15px"></span>`;
    }
    html += `</li>`;

    // Tính range trang
    let start = currentPage - Math.floor(maxVisible / 2);
    let end = currentPage + Math.floor(maxVisible / 2);
    if (start < 1) {
        end += (1 - start);
        start = 1;
    }
    if (end > totalPages) {
        start -= (end - totalPages);
        end = totalPages;
    }
    if (start < 1) start = 1;

    // Số trang
    for (let i = start; i <= end; i++) {
        if (i === currentPage) {
            html += `<li><span>${i}</span></li>`;
        } else {
            html += `<li><a class='d-block w-100 h-100' href="#" data-page="${i}">${i}</a></li>`;
        }
    }

    // Nút Tiếp
    html += `<li class="next">`;
    if (currentPage < totalPages) {
        html += `<a class='d-block w-100 h-100' href="#" data-page="${currentPage + 1}"><img src="${window.staticUrl}imgs/icon-arrow-right.png" alt="" width="10px" height="15px"></a>`;
    } else {
        html += `<span><img src="${window.staticUrl}imgs/icon-arrow-right.png" alt="" width="10px" height="15px"></span>`;
    }
    html += `</li>`;

    html += `
	      </ul>
	    </div>
	  </div>
	</div>
	`;

    $container.html(html);
}


function gotoPage(page) {
    currentPage = page;
    renderFruits(page);
    renderPagination();
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function renderAllFruits() {
    $('#pagination').hide();
    const $list = $('#fruit-list');
    if (!$list.length) return;
    if (!filteredFruits.length) {
        $list.html('<li class="no-data">Không có dữ liệu để hiển thị</li>');
        return;
    }
    const html = filteredFruits.map(fruit => {
        const effectKey = slugify(fruit.effect || '');
        const nameSpans = formatNameToSpans(fruit.name);
        return `
            <li class='fruit-item' data-id="${escapeHtml(fruit.id)}" data-effect="${escapeHtml(effectKey)}">
                <img src='${window.domainDownload}${escapeHtml(fruit.itemSmall)}'
                    alt='${escapeHtml(fruit.name)}' class='thumb'
                    onerror="this.onerror=null;this.src='${window.staticUrl}imgs/devil-fruit/devil-fruit-example.png';" />
                <div class='name d-flex flex-column'>${nameSpans}</div>
            </li>
        `;
    }).join('');

    $list.html(html);
}

function slugify(text) {
    return text.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd').replace(/Đ/g, 'D')
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9\-]/g, '')
        .replace(/\-+/g, '-')
        .replace(/^\-+|\-+$/g, '');
}
function renderForDesktop() {
    renderFruits(currentPage);
    renderPagination();
}

function renderFruitsListByScreen() {
    if (window.innerWidth > 1200) {
        renderForDesktop();
    } else {
        renderAllFruits();
    }
}

function formatProperties(property) {
    var newData = JSON.parse(property);
    if (!newData || Object.keys(newData).length === 0) {
        return 'Không có';
    }
    return Object.values(newData).map(text =>
        `<div class='mb-1'>${escapeHtml(text)}</div>`
    ).join('');
}

function renderFruitsList(fruitsToRender) {
    const $list = $('#fruit-list');
    if (!$list.length) return;

    $list.html(fruitsToRender.map(fruit => {
        const effectKey = slugify(fruit.effect || '');
        const nameSpans = formatNameToSpans(fruit.name);
        return `<li class='fruit-item' data-id="${fruit.id}" data-effect="${escapeHtml(effectKey)}">
            <img src='${window.staticUrl}${fruit.itemSmall}'
                alt='${escapeHtml(fruit.name)}' class='thumb'
                onerror="this.onerror=null;this.src='${window.staticUrl}imgs/devil-fruit/devil-fruit-example.png';" />
            <div class='name d-flex flex-column'>${nameSpans}</div>
        </li>`;
    }).join(''));
}

function formatNameToSpans(name, className) {
    return (name || '')
        .split(/\s*-\s*/)
        .map(s => s.trim())
        .map((part, index) => {
            const cls = `name-${index + 1}`;
            return `<span class="${escapeHtml(cls)}">${escapeHtml(part)}</span>`;
        })
        .join('');
}

function formatNameToSpanForDetail(name, className) {
    return (name || '')
        .split(/\s*-\s*/)
        .map(s => s.trim())
        .map((part, index) => {
            const cls = `name-${index + 1}`;
            return `<span class="${escapeHtml(cls)}">${escapeHtml(part)}</span>`;
        })
        .join('&nbsp;-&nbsp;');
}


$(document).ready(function () {
    renderFruitsListByScreen();
    renderFruitDetail(fruits[0]);
    $('.fruit-item').first().addClass('active');

    let resizeTimer;
    $(window).on('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            $('#pagination').show()
            renderFruitsListByScreen();
        }, 200);
    });

    //Phân trang
    $(document).on('click', '.paging a[data-page]', function (e) {
        e.preventDefault();
        const page = parseInt($(this).data('page'));
        if (!isNaN(page)) {
            gotoPage(page);
        }
    });

    //Tìm kiếm theo tên
    $('.text-search').on('input', function () {
        $('.btn-filter').removeClass('active');
        $('.btn-filter.tat-ca').addClass('active');
        const keyword = $(this).val().trim().toLowerCase();
        currentPage = 1;

        if (keyword === '') {
            filteredFruits = fruits;
        } else {
            filteredFruits = fruits.filter(fruit =>
                fruit.name.toLowerCase().includes(keyword)
            );
        }

        renderFruitsListByScreen();
    });

    //Xem thông tin trái Detail
    $(document).on('click', '.fruit-item', function () {
        const id = parseInt($(this).data('id'));
        $('.fruit-item').removeClass('active');
        $(this).addClass('active');
        if (!isNaN(id)) {
            const fruit = filteredFruits.find(f => f.id === id);
            if (fruit) {
                renderFruitDetail(fruit);
            }
        }
    });

    //Filter
    $(document).on('click', '.btn-filter', function (e) {
        e.preventDefault();
        $('.btn-filter').removeClass('active');
        $(this).addClass('active');

        const selectedEffect = $(this).data('effect') || 'tat-ca';
        currentEffect = selectedEffect;
        currentPage = 1;

        if (selectedEffect === 'tat-ca') {
            filteredFruits = fruits;
        } else {
            filteredFruits = fruits.filter(fruit => {
                const effectStr = fruit.effect || '';
                const effects = effectStr
                    .split(',')
                    .map(e => slugify(e.trim()));
                return effects.includes(selectedEffect);
            });
        }

        $('#pagination').show();
        renderFruitsListByScreen();
    });

})