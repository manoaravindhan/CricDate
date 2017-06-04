!function(e){function i(e,i){var t,n,a,o,r=0,l=function(){r=+new Date,t=null,o=e.apply(n,a),t||(n=a=null)},s=function(){var s=+new Date,u=i-(s-r);return n=this,a=arguments,u<=0||u>i?(t&&(clearTimeout(t),t=null),r=s,o=e.apply(n,a),t||(n=a=null)):t||(t=setTimeout(l,u)),o};return s.cancel=function(){clearTimeout(t),r=0,t=n=a=null},s}var t;e.module("ui.materialize",["ui.materialize.ngModel","ui.materialize.collapsible","ui.materialize.toast","ui.materialize.sidenav","ui.materialize.material_select","ui.materialize.dropdown","ui.materialize.inputfield","ui.materialize.input_date","ui.materialize.tabs","ui.materialize.pagination","ui.materialize.pushpin","ui.materialize.scrollspy","ui.materialize.parallax","ui.materialize.modal","ui.materialize.tooltipped","ui.materialize.slider","ui.materialize.materialboxed","ui.materialize.scrollFire","ui.materialize.nouislider","ui.materialize.input_clock"]),e.module("ui.materialize.scrollFire",[]).directive("scrollFire",["$compile","$timeout",function(t,n){return{restrict:"A",scope:{offset:"@",scrollFire:"&"},link:function(t,n,a){function o(){$(window).off("scroll resize blur focus",s)}var r=t.offset;e.isDefined(t.offset)||(r=0),r=Number(r)||0;var l=!1,s=i(function(){if(!l){var e=window.pageYOffset+window.innerHeight,i=n[0].getBoundingClientRect().top+window.pageYOffset;e>i+r&&(l=!0,t.scrollFire({}),o())}},100);$(window).on("scroll resize blur focus",s),s(),t.$on("$destroy",o)}}}]),e.module("ui.materialize.ngModel",[]).directive("ngModel",["$timeout",function(e){return{restrict:"A",priority:-1,link:function(i,n,a){i.$watch(a.ngModel,function(i,a){e(function(){i instanceof Array&&a instanceof Array&&i.length==a.length||(i?n.trigger("change"):n.attr("placeholder")===t&&(n.is(":focus")||n.trigger("blur")))})})}}}]),e.module("ui.materialize.slider",[]).directive("slider",["$timeout",function(i){return{restrict:"A",scope:{height:"=",transition:"=",interval:"=",indicators:"="},link:function(t,n,a){n.addClass("slider"),i(function(){n.slider({height:e.isDefined(t.height)?t.height:400,transition:e.isDefined(t.transition)?t.transition:500,interval:e.isDefined(t.interval)?t.interval:6e3,indicators:!e.isDefined(t.indicators)||t.indicators})})}}}]),e.module("ui.materialize.collapsible",[]).directive("collapsible",["$timeout",function(e){return{link:function(i,t,n){e(function(){t.collapsible()}),"watch"in n&&i.$watch(function(){return t[0].innerHTML},function(i,n){i!==n&&e(function(){t.collapsible()})})}}}]),e.module("ui.materialize.parallax",[]).directive("parallax",["$timeout",function(e){return{link:function(i,t,n){e(function(){t.parallax()})}}}]),e.module("ui.materialize.toast",[]).constant("toastConfig",{duration:3e3}).directive("toast",["toastConfig",function(i){return{scope:{message:"@",duration:"@",callback:"&"},link:function(t,n,a){n.bind(a.toast,function(){var n=e.isDefined(t.message)?t.message:"",o=e.isDefined(a.toastclass)?a.toastclass:"";Materialize.toast(n,t.duration?t.duration:i.duration,o,t.callback)})}}}]),e.module("ui.materialize.pushpin",[]).directive("pushpin",[function(){return{restrict:"AE",require:["?pushpinTop","?pushpinOffset","?pushpinBottom"],link:function(e,i,t){var n=t.pushpinTop||0,a=t.pushpinOffset||0,o=t.pushpinBottom||1/0;setTimeout(function(){i.pushpin({top:n,offset:a,bottom:o})},0)}}}]),e.module("ui.materialize.scrollspy",[]).directive("scrollspy",["$timeout",function(e){return{restrict:"A",link:function(i,t,n){t.addClass("scrollspy"),e(function(){t.scrollSpy()})}}}]),e.module("ui.materialize.tabs",[]).directive("tabs",["$timeout",function(e){return{scope:{reload:"="},link:function(i,t,n){t.addClass("tabs"),e(function(){t.tabs()}),i.$watch("reload",function(e){e===!0&&(t.tabs(),i.reload=!1)})}}}]),e.module("ui.materialize.sidenav",[]).directive("sidenav",[function(){return{scope:{menuwidth:"@",closeonclick:"@"},link:function(i,n,a){n.sideNav({menuWidth:e.isDefined(i.menuwidth)?parseInt(i.menuwidth,10):t,edge:a.sidenav?a.sidenav:"left",closeOnClick:e.isDefined(i.closeonclick)?"true"==i.closeonclick:t})}}}]),e.module("ui.materialize.material_select",[]).directive("materialSelect",["$compile","$timeout",function(i,n){return{link:function(i,a,o){function r(e,n){if(o.multiple){if(n!==t&&e!==t&&n.length===e.length)return;var r=a.siblings("ul.active");if(e!==t&&r.length){var l=r.children("li.active").length;if(l==e.length)return}}else if(e==a.val())return;a.siblings(".caret").remove(),i.$evalAsync(function(){a.material_select(function(){o.multiple||$("input.select-dropdown").trigger("close")});var e=function(e){(e.clientX>=e.target.clientWidth||e.clientY>=e.target.clientHeight)&&e.preventDefault()};a.siblings("input.select-dropdown").on("mousedown",e)})}if(a.is("select")){if(n(r),o.ngModel)if(o.ngModel&&!e.isDefined(i.$eval(o.ngModel))){var l=!1;i.$watch(o.ngModel,function(t,n){!l&&e.isDefined(i.$eval(o.ngModel))?(l=!0,r()):r(t,n)})}else i.$watch(o.ngModel,r);"watch"in o&&i.$watch(function(){return a[0].innerHTML},function(e,i){e!==i&&n(r)})}}}}]),e.module("ui.materialize.dropdown",[]).directive("dropdown",["$timeout",function(i){return{scope:{inDuration:"@",outDuration:"@",constrainWidth:"@",hover:"@",alignment:"@",gutter:"@",belowOrigin:"@"},link:function(n,a,o){i(function(){a.dropdown({inDuration:e.isDefined(n.inDuration)?n.inDuration:t,outDuration:e.isDefined(n.outDuration)?n.outDuration:t,constrain_width:e.isDefined(n.constrainWidth)?n.constrainWidth:t,hover:e.isDefined(n.hover)?n.hover:t,alignment:e.isDefined(n.alignment)?n.alignment:t,gutter:e.isDefined(n.gutter)?n.gutter:t,belowOrigin:e.isDefined(n.belowOrigin)?n.belowOrigin:t})})}}}]),e.module("ui.materialize.inputfield",[]).directive("inputField",["$timeout",function(i){return{transclude:!0,scope:{},link:function(t,n){i(function(){Materialize.updateTextFields(),n.find("> > .materialize-textarea").each(function(){var e=$(this);e.addClass("materialize-textarea"),e.trigger("autoresize");var n=e.attr("ng-model");n&&t.$parent.$watch(n,function(t,n){t!==n&&i(function(){e.trigger("autoresize")})})}),n.find("> > .materialize-textarea, > > input").each(function(i,t){t=e.element(t),t.siblings('span[class="character-counter"]').length||t.characterCounter()})})},template:'<div ng-transclude class="input-field"></div>'}}]),e.module("ui.materialize.input_date",[]).directive("inputDate",["$compile","$timeout",function(i,n){var a=$("<style>#inputCreated_root {outline: none;}</style>");$("html > head").append(a);var o=function(){var e=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,i=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,n=/[^-+\dA-Z]/g,a=function(e,i){for(e=String(e),i=i||2;e.length<i;)e="0"+e;return e};return function(r,l,s){var u=o;if(1!==arguments.length||"[object String]"!=Object.prototype.toString.call(r)||/\d/.test(r)||(l=r,r=t),r=r?new Date(r):new Date,isNaN(r))throw SyntaxError("invalid date");l=String(u.masks[l]||l||u.masks["default"]),"UTC:"==l.slice(0,4)&&(l=l.slice(4),s=!0);var c=s?"getUTC":"get",d=r[c+"Date"](),m=r[c+"Day"](),f=r[c+"Month"](),p=r[c+"FullYear"](),g=r[c+"Hours"](),h=r[c+"Minutes"](),v=r[c+"Seconds"](),y=r[c+"Milliseconds"](),D=s?0:r.getTimezoneOffset(),b={d:d,dd:a(d),ddd:u.i18n.dayNames[m],dddd:u.i18n.dayNames[m+7],m:f+1,mm:a(f+1),mmm:u.i18n.monthNames[f],mmmm:u.i18n.monthNames[f+12],yy:String(p).slice(2),yyyy:p,h:g%12||12,hh:a(g%12||12),H:g,HH:a(g),M:h,MM:a(h),s:v,ss:a(v),l:a(y,3),L:a(y>99?Math.round(y/10):y),t:g<12?"a":"p",tt:g<12?"am":"pm",T:g<12?"A":"P",TT:g<12?"AM":"PM",Z:s?"UTC":(String(r).match(i)||[""]).pop().replace(n,""),o:(D>0?"-":"+")+a(100*Math.floor(Math.abs(D)/60)+Math.abs(D)%60,4),S:["th","st","nd","rd"][d%10>3?0:(d%100-d%10!=10)*d%10]};return l.replace(e,function(e){return e in b?b[e]:e.slice(1,e.length-1)})}}();o.masks={"default":"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"},o.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"]},Date.prototype.format=function(e,i){return o(this,e,i)};var r=function(e){return"[object Date]"===Object.prototype.toString.call(e)&&!isNaN(e.getTime())};return{require:"ngModel",scope:{container:"@",format:"@",formatSubmit:"@",monthsFull:"@",monthsShort:"@",weekdaysFull:"@",weekdaysShort:"@",weekdaysLetter:"@",firstDay:"=",disable:"=",today:"=",clear:"=",close:"=",selectYears:"=",onStart:"&",onRender:"&",onOpen:"&",onClose:"&",onSet:"&",onStop:"&",ngReadonly:"=?",max:"@",min:"@"},link:function(a,o,l,s){s.$formatters.unshift(function(i){if(i){var t=new Date(i);return e.isDefined(a.format)?t.format(a.format):t.format("d mmmm, yyyy")}return null});var u=e.isDefined(a.monthsFull)?a.$eval(a.monthsFull):t,c=e.isDefined(a.monthsShort)?a.$eval(a.monthsShort):t,d=e.isDefined(a.weekdaysFull)?a.$eval(a.weekdaysFull):t,m=e.isDefined(a.weekdaysShort)?a.$eval(a.weekdaysShort):t,f=e.isDefined(a.weekdaysLetter)?a.$eval(a.weekdaysLetter):t;i(o.contents())(a),a.ngReadonly||n(function(){var i={container:a.container,format:e.isDefined(a.format)?a.format:t,formatSubmit:e.isDefined(a.formatSubmit)?a.formatSubmit:t,monthsFull:e.isDefined(u)?u:t,monthsShort:e.isDefined(c)?c:t,weekdaysFull:e.isDefined(d)?d:t,weekdaysShort:e.isDefined(m)?m:t,weekdaysLetter:e.isDefined(f)?f:t,firstDay:e.isDefined(a.firstDay)?a.firstDay:0,disable:e.isDefined(a.disable)?a.disable:t,today:e.isDefined(a.today)?a.today:t,clear:e.isDefined(a.clear)?a.clear:t,close:e.isDefined(a.close)?a.close:t,selectYears:e.isDefined(a.selectYears)?a.selectYears:t,onStart:e.isDefined(a.onStart)?function(){a.onStart()}:t,onRender:e.isDefined(a.onRender)?function(){a.onRender()}:t,onOpen:e.isDefined(a.onOpen)?function(){a.onOpen()}:t,onClose:e.isDefined(a.onClose)?function(){a.onClose()}:t,onSet:e.isDefined(a.onSet)?function(){a.onSet()}:t,onStop:e.isDefined(a.onStop)?function(){a.onStop()}:t};a.container||delete i.container;var n=o.pickadate(i),l=n.pickadate("picker");a.$watch("max",function(e){if(l){var i=new Date(e);l.set({max:!!r(i)&&i})}}),a.$watch("min",function(e){if(l){var i=new Date(e);l.set({min:!!r(i)&&i})}}),a.$watch("disable",function(i){if(l){var t=!(!e.isDefined(i)||!e.isArray(i))&&i;l.set({disable:t})}})})}}}]),e.module("ui.materialize.input_clock",[]).directive("inputClock",[function(){return{restrict:"A",scope:{"default":"@",fromnow:"=?",donetext:"@",autoclose:"=?",ampmclickable:"=?",darktheme:"=?",twelvehour:"=?",vibrate:"=?"},link:function(i,t){$(t).addClass("timepicker"),i.ngReadonly||t.clockpicker({"default":e.isDefined(i["default"])?i["default"]:"",fromnow:e.isDefined(i.fromnow)?i.fromnow:0,donetext:e.isDefined(i.donetext)?i.donetext:"Done",autoclose:!!e.isDefined(i.autoclose)&&i.autoclose,ampmclickable:!!e.isDefined(i.ampmclickable)&&i.ampmclickable,darktheme:!!e.isDefined(i.darktheme)&&i.darktheme,twelvehour:!e.isDefined(i.twelvehour)||i.twelvehour,vibrate:!e.isDefined(i.vibrate)||i.vibrate})}}}]),e.module("ui.materialize.pagination",[]).directive("pagination",["$sce",function(e){function i(e,i){e.List=[],e.Hide=!1,e.page=parseInt(e.page)||1,e.total=parseInt(e.total)||0,e.dots=e.dots||"...",e.ulClass=e.ulClass||i.ulClass||"pagination",e.adjacent=parseInt(e.adjacent)||2,e.activeClass="active",e.disabledClass="disabled",e.scrollTop=e.$eval(i.scrollTop),e.hideIfEmpty=e.$eval(i.hideIfEmpty),e.showPrevNext=e.$eval(i.showPrevNext),e.useSimplePrevNext=e.$eval(i.useSimplePrevNext)}function t(e,i){e.page>i&&(e.page=i),e.page<=0&&(e.page=1),e.adjacent<=0&&(e.adjacent=2),i<=1&&(e.Hide=e.hideIfEmpty)}function n(e,i){i=i.valueOf(),e.page!=i&&(e.page=i,e.paginationAction({page:i}),e.scrollTop&&scrollTo(0,0))}function a(i,t,a){var o=0;for(o=i;o<=t;o++){var r={value:e.trustAsHtml(o.toString()),liClass:a.page==o?a.activeClass:"waves-effect",action:function(){n(a,this.value)}};a.List.push(r)}}function o(i){i.List.push({value:e.trustAsHtml(i.dots)})}function r(e,i){a(1,2,e),3!=i&&o(e)}function l(i,t,a){if(i.showPrevNext&&!(t<1)){var o,r,l;if("prev"===a){o=i.page-1<=0;var s=i.page-1<=0?1:i.page-1;i.useSimplePrevNext?(r={value:"<<",title:"First Page",page:1},l={value:"<",title:"Previous Page",page:s}):(r={value:'<i class="material-icons">first_page</i>',title:"First Page",page:1},l={value:'<i class="material-icons">chevron_left</i>',title:"Previous Page",page:s})}else{o=i.page+1>t;var u=i.page+1>=t?t:i.page+1;i.useSimplePrevNext?(r={value:">",title:"Next Page",page:u},l={value:">>",title:"Last Page",page:t}):(r={value:'<i class="material-icons">chevron_right</i>',title:"Next Page",page:u},l={value:'<i class="material-icons">last_page</i>',title:"Last Page",page:t})}var c=function(t,a){i.List.push({value:e.trustAsHtml(t.value),title:t.title,liClass:a?i.disabledClass:"",action:function(){a||n(i,t.page)}})};c(r,o),c(l,o)}}function s(e,i,t){t!=e-2&&o(i),a(e-1,e,i)}function u(e,n){if(e.pageSize&&!(e.pageSize<0)){i(e,n);var o,u=2*e.adjacent,c=Math.ceil(e.total/e.pageSize);if(t(e,c),l(e,c,"prev"),c<5+u)o=1,a(o,c,e);else{var d;e.page<=1+u?(o=1,d=2+u+(e.adjacent-1),a(o,d,e),s(c,e,d)):c-u>e.page&&e.page>u?(o=e.page-e.adjacent,d=e.page+e.adjacent,r(e,o),a(o,d,e),s(c,e,d)):(o=c-(1+u+(e.adjacent-1)),d=c,r(e,o),a(o,d,e))}l(e,c,"next")}}return{restrict:"EA",scope:{page:"=",pageSize:"=",total:"=",dots:"@",hideIfEmpty:"@",adjacent:"@",scrollTop:"@",showPrevNext:"@",useSimplePrevNext:"@",paginationAction:"&",ulClass:"=?"},template:'<ul ng-hide="Hide" ng-class="ulClass"> <li ng-class="Item.liClass" ng-click="Item.action()" ng-repeat="Item in List"> <a href> <span ng-bind-html="Item.value"></span> </a></ul>',link:function(e,i,t){e.$watchCollection("[page, total, pageSize]",function(){u(e,t)})}}}]),e.module("ui.materialize.modal",[]).directive("modal",["$compile","$timeout",function(i,n){return{scope:{dismissible:"=",opacity:"@",inDuration:"@",outDuration:"@",ready:"&?",complete:"&?",open:"=?",enableTabs:"@?"},link:function(a,o,r){n(function(){var n=$(r.href?r.href:"#"+r.target);i(o.contents())(a);var l=function(){e.isFunction(a.complete)&&a.$eval(a.complete()),a.open=!1,a.$apply()},s=function(){e.isFunction(a.ready)&&a.$eval(a.ready()),a.enableTabs&&n.find("ul.tabs").tabs()},u={dismissible:e.isDefined(a.dismissible)?a.dismissible:t,opacity:e.isDefined(a.opacity)?a.opacity:t,in_duration:e.isDefined(a.inDuration)?a.inDuration:t,out_duration:e.isDefined(a.outDuration)?a.outDuration:t,ready:s,complete:l};o.leanModal(u),e.isDefined(r.open)&&n.length>0&&a.$watch("open",function(i,t){e.isDefined(i)&&(i===!0?n.openModal(u):n.closeModal())})})}}}]),e.module("ui.materialize.tooltipped",[]).directive("tooltipped",["$compile","$timeout",function(e,i){return{restrict:"EA",scope:!0,link:function(t,n,a){n.addClass("tooltipped"),e(n.contents())(t),i(function(){n.tooltip()}),t.$on("$destroy",function(){n.tooltip("remove")})}}}]),e.module("ui.materialize.materialboxed",[]).directive("materialboxed",["$timeout",function(e){return{restrict:"A",link:function(i,t,n){e(function(){t.materialbox()})}}}]),e.module("ui.materialize.nouislider",[]).directive("nouislider",["$timeout",function(i){return{restrict:"A",scope:{ngModel:"=",min:"@",max:"@",step:"@?",connect:"@?",tooltips:"@?"},link:function(n,a,o){i(function(){noUiSlider.create(a[0],{start:n.ngModel||0,step:parseFloat(n.step||1),tooltips:e.isDefined(n.connect)?n.tooltips:t,connect:e.isDefined(n.connect)?n.connect:"lower",range:{min:parseFloat(n.min||0),max:parseFloat(n.max||100)},format:{to:function(e){return Math.round(100*e)/100},from:function(e){return Number(e)}}}),a[0].noUiSlider.on("update",function(e,i){n.ngModel=parseInt(e[0],10),n.$apply()})})}}}])}(angular);