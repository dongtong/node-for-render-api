!function e(t,o,i){function n(a,s){if(!o[a]){if(!t[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(r)return r(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var u=o[a]={exports:{}};t[a][0].call(u.exports,function(e){var o=t[a][1][e];return n(o?o:e)},u,u.exports,e,t,o,i)}return o[a].exports}for(var r="function"==typeof require&&require,a=0;a<i.length;a++)n(i[a]);return n}({1:[function(e,t,o){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(o,"__esModule",{value:!0});var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),r=0,a=function(){function e(t){return i(this,e),this instanceof e?(this.opts=t||{},this.uuid=r,this.type=this.opts.type||"doubleBtn",this.alertType=this.opts.alertType||"",this.alertCls=this.opts.alertCls||"",this.title=this.opts.title||"",this.msg=this.opts.msg||"",this.cancelText=this.opts.cancelText||"取消",this.confirmText=this.opts.confirmText||"确定",this.cancel=this.opts.cancel||"",this.confirm=this.opts.confirm||"",this.callback=this.opts.callback||"",void(this.delay=this.opts.delay||2e3)):new e(t).init()}return n(e,[{key:"init",value:function(){var e=this;return r++,e.setStyle(),e.addAlertBox(),"mini"==e.type?e.minEvent():e.alertEvent(),e}},{key:"getEl",value:function(e,t){return e.querySelector(t)}},{key:"addAlertBox",value:function(){var e=this,t=e.getPos();"fixed"==e.alertType?e.getFixedMask():e.getMask(),"fixed"==e.alertType?e.getEl(document,"#alertMask_"+e.uuid).insertAdjacentHTML("beforeend",e.getHtml()):e.getEl(document,"body").insertAdjacentHTML("beforeend",e.getHtml()),e.alertBox=e.getEl(document,"#alertBox_"+e.uuid),e.alertBox.style.cssText="fixed"==e.alertType?"width:"+parseInt(t.width-50)+"px;left:25px;top:50%;-webkit-transform:translate3d(0,-50%,0);":"width:"+parseInt(t.width-50)+"px;left:25px;top:"+parseInt(t.sTop+window.innerHeight/2-e.alertBox.offsetHeight/2)+"px;",e.callback&&"function"==typeof e.callback&&"mini"!=e.type&&e.callback()}},{key:"setStyle",value:function(){var e=this,t=document.createElement("style"),o=".alert-box{position:absolute;left:0;top:0;border-radius:0.2rem;background:#FFF;-webkit-box-sizing:border-box;z-index:100;font-size:0.6rem;}.alert-msg{padding:0.4rem 0.6rem 0.6rem;text-align:center;line-height:1.8;word-break:break-all;}.alert-title{padding:0.6rem 0.6rem 0;text-align:center;}.alert-btn{display:-webkit-flex !important;display:-webkit-box;border-top:1px solid #DCDCDC;}.alert-btn a{display:block;-webkit-flex:1 !important;-webkit-box-flex:1;height:1.68rem;line-height:1.68rem;text-align:center;}.alert-btn a.alert-confirm{border-left:1px solid #DCDCDC;color:#EDA200;}.alert-btn a.alert-confirm.single{border-left:none;}.alert-mini-box{border-radius:0.2rem;background:rgba(0,0,0,.7);color:#fff;}";t.type="text/css",t.innerText=o,e.getEl(document,"head").appendChild(t)}},{key:"getPos",value:function(){var e=document.documentElement.offsetWidth||document.body.offsetWidth,t=document.documentElement.offsetHeight||document.body.offsetHeight,o=document.documentElement.scrollTop||document.body.scrollTop;return window.innerHeight>t&&(t=window.innerHeight),{width:e,height:t,sTop:o}}},{key:"getHtml",value:function(){var e=this,t="";if("mini"!==e.type){switch(t+='<div class="alert-box '+e.alertCls+'" id="alertBox_'+e.uuid+'"><div class="alert-title">'+e.title+'</div><div class="alert-msg">'+e.msg+'</div><div class="alert-btn">',e.type){case"doubleBtn":t+='<a href="javascript:;" class="alert-cancel mr10">'+e.cancelText+'</a><a href="javascript:;" class="alert-confirm">'+e.confirmText+"</a>";break;case"onceCancel":t+='<a href="javascript:;" class="alert-cancel">'+e.cancelText+"</a>";break;case"onceConfirm":t+='<a href="javascript:;" class="alert-confirm single">'+e.confirmText+"</a>"}t+="</div></div>"}else t+='<div class="alert-box alert-mini-box '+e.alertCls+'"  id="alertBox_'+e.uuid+'"><div class="alert-msg">'+e.msg+"</div></div>";return t}},{key:"getMask",value:function(){var e=this,t=e.getPos(),o=document.createElement("div");o.id="alertMask_"+e.uuid,e.getEl(document,"body").appendChild(o),o.style.cssText="position:absolute;left:0;top:0;width:"+t.width+"px;height:"+t.height+"px;background:rgba(0,0,0,0.3);z-index:99","mini"==e.type&&(o.style.backgroundColor="rgba(255, 255, 255, 0)")}},{key:"getFixedMask",value:function(){var e=this,t=document.createElement("div");t.id="alertMask_"+e.uuid,e.getEl(document,"body").appendChild(t),t.style.cssText="position:fixed;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,.3);z-index:99;"}},{key:"minEvent",value:function(){var e=this;setTimeout(function(){navigator.userAgent.match(/iPhone/i)&&"undefined"!=typeof Zepto?$(e.alertBox).fadeOut(500,function(){e.getEl(document,"body").removeChild(e.alertBox),e.callback&&"function"==typeof e.callback&&e.callback()}):(e.remove(e.alertBox),e.callback&&"function"==typeof e.callback&&e.callback()),e.remove(e.getEl(document,"#alertMask_"+e.uuid))},e.delay)}},{key:"alertEvent",value:function(){var e=this;if(e.alertBox){var t=e.getEl(e.alertBox,".alert-cancel"),o=e.getEl(e.alertBox,".alert-confirm");t&&e.reset(t,e.cancel),o&&e.reset(o,e.confirm)}}},{key:"reset",value:function(e,t){var o=this;e.onclick=function(){var e=t&&"function"==typeof t&&t(this);e!==!1&&("fixed"!==o.alertType&&o.remove(o.alertBox),o.remove(o.getEl(document,"#alertMask_"+o.uuid)))}}},{key:"remove",value:function(e){this.getEl(document,"body").removeChild(e)}},{key:"destroy",value:function(){this.remove(this.alertBox),this.remove(this.getEl(document,"#alertMask_"+this.uuid))}}]),e}();o["default"]=function(e){new a(e).init()},t.exports=o["default"]},{}],2:[function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(o,"__esModule",{value:!0});var r=function(){function e(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),a=e("../../alertBox/3.0.0/alertBox"),s=i(a),c=function(){function e(t,o){n(this,e),this.callback=t,this.isGeo=!1,this.alertFlag="undefined"==typeof o?!0:!1,this._postDataDefault={location:{longi:116.911468,lati:34.700648},formatted_address:"江苏省南京市玄武区",business:"",addressComponent:{city:"南京市",district:"玄武区",province:"江苏省",street:"",street_number:""},cityCode:"025",cityNo:"9173",provinceCode:"100"},navigator.geolocation?navigator.geolocation.getCurrentPosition($.proxy(this.showPosition,this),$.proxy(this.locationError,this),{timeout:3e3,maximumAge:864e5}):this.getPositionByIp(this.alertFlag),this.navError()}return r(e,[{key:"locationError",value:function(e){switch(this.isGeo=!0,e.code){case e.TIMEOUT:this.getPositionByIp(this.alertFlag);break;case e.POSITION_UNAVAILABLE:this.getPositionByIp(this.alertFlag);break;case e.PERMISSION_DENIED:this.getPositionByIp(!1);break;case e.UNKNOWN_ERROR:this.getPositionByIp(this.alertFlag);break;default:this.getPositionByIp(this.alertFlag)}}},{key:"showPosition",value:function(e){var t=this;t.isGeo=!0;var o={lati:e.coords.latitude,longi:e.coords.longitude};$.ajax({type:"GET",url:"http://api.map.baidu.com/geocoder/v2/?ak=358795dcf3df541d1551c0cd052aee95&callback=jsonpCallback&location="+o.lati+","+o.longi+"&output=json&pois=0",cache:!0,async:!0,timeout:3e3,dataType:"jsonp",jsonp:!1,jsonpCallback:"jsonpCallback",success:function(e){$.ajax({url:"http://www.suning.com/webapp/wcs/stores/servlet/SNiPhoneCityView?storeId=10052",type:"GET",dataType:"jsonp",jsonpCallback:"getCityList"}).done(function(o){1==t.alertFlag&&s["default"]({type:"mini",msg:"当前定位的城市为"+e.result.addressComponent.city}),$(o.cityList).each(function(o,i){var n=e.result.addressComponent.province.slice(0,-1);return i.provinceName.indexOf(n)>-1?(e.result.cityNo=i.cityNo,e.result.provinceCode=i.provinceCode,e.result.cityName=i.cityName,e.result.cityCode=i.cityCode,t.callback(e.result),!1):void 0})}).fail(function(){t.getPositionByIp(t.alertFlag)})},error:function(e,o,i){t.getPositionByIp(t.alertFlag)}})}},{key:"getPositionByIp",value:function(e){this.isGeo=!0;var t=this;setTimeout(function(){$.ajax({type:"GET",url:"http://ipservice.suning.com/ipQuery.do",cache:!0,dataType:"jsonp",jsonpCallback:"jsonpCallback",success:function(o){1==e&&s["default"]({type:"mini",msg:"当前定位城市为"+o.cityName}),t._postDataDefault.cityNo=o.cityCommerceId,t._postDataDefault.provinceCode=o.provinceCommerceId,t._postDataDefault.cityName=o.cityName,t._postDataDefault.cityCode=o.cityLESId,t.callback(t._postDataDefault)},error:function(){1==e&&s["default"]({type:"mini",msg:"很抱歉无法定位当前城市"}),t.callback(t._postDataDefault)}})},100)}},{key:"navError",value:function(){var e=this;setTimeout(function(){e.isGeo||(console.log("Geo app"),e.getPositionByIp(!0))},5e3)}}]),e}();o["default"]=function(e,t){new c(e,t)},t.exports=o["default"]},{"../../alertBox/3.0.0/alertBox":1}],3:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]=function(){window.addEventListener("load",function(){$("#resourceType").val("wap")})}(),t.exports=o["default"]},{}],4:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var i={SIT_PATH:"http://moissit.cnsuning.com/",PRE_PATH:"http://res.m.suning.com/",PRD_PATH:"http://mois.suning.com/",DEV_PATH:"http://dev.cnsuning.com/",PATH:"http://mois.suning.com",TIME_OUT:5e3,RETRY_TIMES:2,STATUS:{SUCCESS:"0",SYS_PARAMS_ERROR:"0001",SYS_ERROR:"0002",BOOKING_REPEAT:"BOOKING_004",GUIDE_QUIT:"BOOKING_005"},TXT:{ANCEL:"取消",OK:"好的"},ERROR_MSG:{SYS_ERR:"系统异常,请稍后再试!",NET_ERR:"网络异常,请稍后再试!",RESERVE_OK:"",LOCATE_FAILED:"无法定位当前您的城市,请稍后再试!",NO_DATA:"获取数据失败!",NO_GUID:"该地区没有导购!"},PASSPORT:{CONFIG:{base:"http://mois.suning.com/",loginTheme:"wap_new"},AUTH_URL:"https://passport.suning.com/ids",IDSAUTH_SERVER_URL:"https://aq.suning.com/asc/auth"},API:{SalespersonsList:"http://mois.suning.com/vpurchase/getStoreGuide/",SalespersonsList2:"http://mois.suning.com/vpurchase/getStoreGuideAndPic/",GetStorePics:"http://mois.suning.com/vpurchase/getStorePic/",GetSalesperson:"http://mois.suning.com/vpurchase/private/getGuide.do",GetSalesperson2:"http://mois.suning.com/vpurchase2nd/guidedetail/",ReserveSalesperson:"http://mois.suning.com/vpurchase/private/booking.do",CommentList:"http://mois.suning.com/vpurchase/getEvaluate/",GetCReservationList:"http://mois.suning.com/vpurchase/private/getCustBooking.do",CreateComment:"http://mois.suning.com/vpurchase/private/evaluating.do",GetSReservations:"http://mois.suning.com/vpurchase/getGuideBooking/",MarkSReservation:"http://mois.suning.com/vpurchase/doOrder.do",GetStores:"http://mois.suning.com/vpurchase/getStoreList/",GetStoresList:"http://mois.suning.com/vpurchase/cityVStores/",GetStoresByGeo:"http://mois.suning.com/vpurchase2nd/citycpxvstore/",GetStoresLikes:"http://mois.suning.com/vpurchase2nd/gateway/atnstorecode.do",GetProvinces:"http://www.suning.com/emall/SNiPhoneProvinceView?storeId=10052",GetCities:"http://www.suning.com/emall/SNiPhoneCityView?storeId=10052&provinceCode=",ComeInStatis:"http://mois.suning.com/vpurchase/saveStatis.do",ReserveStatis:"http://mois.suning.com/vpurchase/private/saveStatisp.do"},PAGE:{SUCCESS:"./success.html",INTRO:"./intro.html",COMMENT_SUCCESS:"./comment_success.html"},REGEXP:{MOBILE:/(^(13\d|14[57]|15[^4,\D]|17[678]|18\d)\d{8}|170[059]\d{7})$/,DATE:/^[1-9]{1}[0-9]{3}-[0-1]?[0-9]{1}-[0-3]?[0-9]{1}$/}};o.Const=i},{}],5:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var i=e("./const"),n=e("./util");o["default"]={sendComeInStatis:function(e){var t=!1;window.comeInStatisCallback=function(e){t=!0},n.Util.crossAjax({url:i.Const.API.ComeInStatis+"?commodityCode="+e.commodityCode+"&channel="+e.channel,jsonpCallback:"comeInStatisCallback",observeRes:function(){return t},retry:!1,errorFn:function(){console.error("[sendComeInStatis] method error happened!")}})},sendReserveStatis:function(e){var t=!1;window.reserveStatisCallback=function(e){t=!0},n.Util.crossAjax({url:i.Const.API.ReserveStatis+"?commodityCode="+e.commodityCode+"&channel="+e.channel,jsonpCallback:"reserveStatisCallback",observeRes:function(){return t},retry:!1})}},t.exports=o["default"]},{"./const":4,"./util":6}],6:[function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var n=e("./const"),r=e("../../../../../common/script/module/alertBox/3.0.0/alertBox"),a=(i(r),{addParamsToURL:function(e,t){String.prototype.format=function(){var e=1==arguments.length&&arguments[0]instanceof Object,t=e?arguments[0]:arguments,o=e?/\{(\w+)\}/g:/\{(\d+)\}/g;return this.replace(o,function(e,o){return t[o]||""})};var o=-1===e.indexOf("?"),i="",i=JSON.stringify(t);return o&&(i="?passedParams="+i),e+i},auth:function(e,t){window.passport_config=n.Const.PASSPORT.CONFIG,$.probeAuthStatus(function(){e()},function(){a.redirectToLogin(t)},n.Const.PASSPORT.CONFIG)},redirectToLogin:function(e){var t=window.location.href,o=a.addParamsToURL(t.split("?")[0],e),i=n.Const.PASSPORT.AUTH_URL+"/login?service="+encodeURIComponent(n.Const.PASSPORT.IDSAUTH_SERVER_URL+"?targetUrl="+encodeURIComponent(o))+"&loginTheme=wap_new";window.location.href=i},generateUrl:function(e){return-1===e.indexOf("http")?n.Const.PRE_PATH+e:e},crossAjax:function(e){function t(){$.ajax({type:"GET",url:e.url,data:e.data||null,cache:!1,timeout:n.Const.TIME_OUT,crossDomain:!0,dataType:"jsonp",jsonpCallback:e.jsonpCallback||null,contentType:"application/json;utf-8",success:function(t,o,i){"function"==typeof e.successFn&&e.successFn(t)},error:function(t,o,i){"timeout"===o||e.observeRes()||("function"==typeof e.errorFn?e.errorFn():(e.retry=!1,console.log("error occured")))},complete:function(i,n){"timeout"!==n||e.observeRes()||((void 0===e.retry||e.retry)&&o>0?(o-=1,t()):e.timeoutFn?e.timeoutFn():a.redirectToErr("1"))}})}var o=n.Const.RETRY_TIMES;t()},probeAuthStatus:function(e,t,o){var i=n.Const.PASSPORT.CONFIG;"undefined"==typeof o&&"undefined"!=typeof i&&(o=i),$.ajax({url:o.base+"authStatus",crossDomain:!0,cache:!1,dataType:"jsonp",success:function(o){if(o.hasLogin){var i=o.principal;e(i)}else t()},error:function(e){t()}})},getLocalStorage:function(){try{if(window.localStorage)return window.localStorage}catch(e){return void 0}},getClientType:function(){var e=navigator.userAgent.toLowerCase();return e.indexOf("snebuy-app")>-1?e.indexOf("android")>-1?"android":"ios":e.indexOf("micromessenger")>-1?"4":"-1"},getURLParam:function(){var e=location.search,t=/[^\&]+=[^\&]+/g;if(!e)return{};e=e.slice(1);for(var o,i,n={};o=t.exec(e);)(i=o[0].match(/[^\=]+/g))&&(n[i[0]]=decodeURIComponent(i[1]));return n},isNumber:function(e){var t=/^[0-9]+[0-9]*$/;return t.test(e)?!0:!1},redirectToErr:function(e){var t=a.getLocalStorage();if(t){switch(e){case"0":t.setItem("err_msg",n.Const.ERROR_MSG.SYS_ERR);break;case"1":t.setItem("err_msg",n.Const.ERROR_MSG.NET_ERR);break;case"2":t.setItem("err_msg",n.Const.ERROR_MSG.NO_DATA);break;case"3":t.setItem("err_msg",n.Const.ERROR_MSG.NO_GUID);break;default:t.setItem("err_msg",n.Const.ERROR_MSG.NET_ERR)}window.location.href="./error.html"}else console.error("localStorage is undefined")},getProvinceCityInfo:function(e,t){var o=!1;$.ajax({type:"GET",url:"http://www.suning.com/webapp/wcs/stores/servlet/SNiPhoneCityView?storeId=10052",cache:!0,async:!1,crossDomain:!0,dataType:"jsonp",contentType:"application/json;utf-8"}).done(function(i){o=!0;for(var n,r=i.cityList,a=r.length;a--;)if(n=r[a],n.cityNo===e){t({provinceCode:n.provinceCode,provinceName:n.provinceName,cityId:e,cityName:n.cityName});break}}).fail(function(){return void 0}).always(function(){o||t(void 0)})},getProvinces:function(e){var t=!1;window.gotProvinces=function(o){o&&o.provinceList&&!t?(t=!0,e(o.provinceList)):a.redirectToErr("0")},this.crossAjax({url:n.Const.API.GetProvinces,jsonpCallback:"gotProvinces",observeRes:function(){return t}})},getCities:function(e,t){var o=!1;window.gotCities=function(e){e&&e.cityList&&!o?(o=!0,t(e.cityList)):a.redirectToErr("0")},this.crossAjax({url:n.Const.API.GetCities+e,jsonpCallback:"gotCities",observeRes:function(){return o}})},swapItems:function(e,t,o){var i=e[t];e[t]=e[o],e[o]=i},quickSort:function(e,t,o,i){function n(e,t,o,i){for(var n=Number(e[Math.floor((i+o)/2)][t]),r=o,s=i;s>=r;){for(;Number(e[r][t])<n;)r++;for(;Number(e[s][t])>n;)s--;s>=r&&(a.swapItems(e,r,s),r++,s--)}return r}var r,a=this;e.length>1&&(r=n(e,t,o,i),r-1>o&&a.quickSort(e,t,o,r-1),i>r&&a.quickSort(e,t,r,i))}});o.Util=a},{"../../../../../common/script/module/alertBox/3.0.0/alertBox":1,"./const":4}],7:[function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(o,"__esModule",{value:!0});var r=function(){function e(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),a=e("../common/util"),s=e("../common/const"),c=e("../../../../../common/script/module/geo/3.0.0/geo"),l=i(c),u=function(){function e(){n(this,e),this.hasRes=!1}return r(e,[{key:"initList",value:function(e,t,o){var i=this;i.hasRes=!1,window.getStores=function(e){"0"!==e.code||i.hasRes?"1"===e.code&&"no datas!"==e.msg?($(".error-cont").show(),$("#loading").hide(),$("#goToReserve").click(function(){window.location.href="./stores.html?cityId=9173"})):a.Util.redirectToErr("0"):(i.hasRes=!0,o(e.data.vstore2ndList))},t?this.getGeoPos(function(t,o){a.Util.crossAjax({url:s.Const.API.GetStoresByGeo+e+"-"+t+"-"+o+"-1-getStores.html",jsonpCallback:"getStores",observeRes:function(){return i.hasRes}})},function(){a.Util.crossAjax({url:s.Const.API.GetStoresByGeo+e+"---1-getStores.html",jsonpCallback:"getStores",observeRes:function(){return i.hasRes}})}):a.Util.crossAjax({url:s.Const.API.GetStoresByGeo+e+"---1-getStores.html",jsonpCallback:"getStores",observeRes:function(){return i.hasRes}})}},{key:"updateLikesCnt",value:function(e){var t=this;t.hasRes=!1,window.getLikesCnt=function(o){"0"!==o.code||t.hasRes||(t.hasRes=!0,e(o.data))},a.Util.crossAjax({url:s.Const.API.GetStoresLikes+"?callback=getLikesCnt",jsonpCallback:"getLikesCnt",observeRes:function(){return t.hasRes}})}},{key:"getGeoPos",value:function(e,t){var o=this,i=a.Util.getClientType();switch(o.timeout=!1,o.appHasRes=!1,i){case"4":case"-1":this.locationWechat(e,t);break;case"ios":this.locationIos(e,t);break;case"android":this.locationAndroid(e,t);break;default:var n=a.Util.getLocalStorage();return n&&n.setItem("err_msg","cityId is undefined"),void a.Util.redirectToErr("0")}setTimeout(function(){o.appHasRes||"ios"!==i&&"android"!==i||(o.timeout=!0,t())},5e3)}},{key:"locationWechat",value:function(e,t){l["default"](function(o){if(!o)return void t();var i=o.location,n=i.lng||i.lati,r=i.lat||i.longi;e(n,r)},!1)}},{key:"locationIos",value:function(e,t){var o=this;setTimeout(function(){window.SNNativeClient&&window.SNNativeClient.getGeoPosition(function(i){if(!o.timeout){var n=i.split(","),r=n[0];"1"==r||"2"==r&&""!=n[1]&&""!=n[2]?(o.appHasRes=!0,e(n[1],n[2])):locationWechat(e,t)}})},300)}},{key:"locationAndroid",value:function(e,t){var o=this;setTimeout(function(){window.locationApi&&window.locationApi.getGeoPosition(function(i){if(!o.timeout){var n=i.split(","),r=n[0];"1"==r?(o.appHasRes=!0,e(n[1],n[2])):locationWechat(e,t)}})},300)}}]),e}();o.StoresCtrl=u},{"../../../../../common/script/module/geo/3.0.0/geo":2,"../common/const":4,"../common/util":6}],8:[function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var n=e("./common/util"),r=e("./common/buriedpoint_vbuy"),a=(i(r),e("./controllers/stores_ctrl")),s=e("./common/stastic"),c=i(s);$(function(){function e(e){var o=$(".maskCont"),i=$(".cart-addr-chooser > ul > li");o.height(t()),$("#address").on("click",function(){n.Util.getProvinceCityInfo(e,function(e){var t={provinceCode:e.provinceCode,provinceName:e.provinceName},r=e.provinceCode,a={cityId:e.cityId,cityName:e.cityName};$(".cart-tabnavi li").eq(0).find("input").val(e.provinceName),$(".cart-tabnavi li").eq(1).find("input").val(e.cityName),n.Util.getProvinces(function(e){$(".cart-addr-chooser").toggleClass("active"),o.show(),$("#storeProvinceList").html(template("storeProvinceListTpl",{provinceList:e})),$(".sn-nav-right").on("click",function(){o.hide(),$(".cart-addr-chooser").removeClass("active")});for(var s,c=e.length;c--;)if(e[c].provinceCode==t.provinceCode){s=$('#storeProvinceList>ul>li[data-provincecode="'+t.provinceCode+'"]'),s.addClass("selected").prependTo($("#storeProvinceList ul")[0]);break}i.on("click",function(e){var o=$(this).index();$(this).addClass("selected").siblings().removeClass("selected");var i=$(".cart-content > .cart-tab").width();$(".cart-content > .cart-tab").eq(o).addClass("current").siblings().removeClass("current"),$(".cart-content").css({"-webkit-transform":"translate("+-i*o+"px, 0px) translateZ(0px)"}),$(this).hasClass("provinceList")?n.Util.getProvinces(function(e){for(var o,i=e.length;i--;)if(e[i].provinceCode==t.provinceCode){o=$('#storeProvinceList>ul>li[data-provincecode="'+t.provinceCode+'"]'),o.addClass("selected").prependTo($("#storeProvinceList ul")[0]);break}}):n.Util.getCities(t.provinceCode,function(e){$("#storeCityList").html(template("storeCityListTpl",{cityList:e}));for(var t,o=e.length;o--;)if(e[o].cityNo==a.cityId){t=$('#storeCityList>ul>li[data-cityId="'+a.cityId+'"]'),t.addClass("selected").prependTo($("#storeCityList ul")[0]);break}$("#storeCityList li").on("click",function(){var e=n.Util.getURLParam(),t="?";e.cityId=$(this).data("cityid");for(var o in e)t+=o+"="+e[o]+"&";window.location.href=window.location.href.split("?")[0]+t.slice(t,-1)})})}),$("#storeProvinceList li").on("click",function(e){t.provinceCode=$(this).data("provincecode"),$("#storeProvinceList li.selected").removeClass("selected"),$(".cart-tabnavi li").eq(0).find("input").val($(this).text()),r!==t.provinceCode&&$(".cart-tabnavi li").eq(1).find("input").val("市"),i.eq(1).trigger("click")})})})})}function t(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}var o=n.Util.getLocalStorage(),i=new a.StoresCtrl,r=n.Util.getURLParam(),s=r.cityId,l=r.channel,u=r.commodityCode;s?(l&&(c["default"].sendComeInStatis({commodityCode:u||"",channel:l||""}),o.setItem("commodityCode",u||""),o.setItem("channel",l)),i.initList(s,!0,function(t){$(".lazyimg").lazyload(),$("#loading").hide(),$(".store-list-cont").removeClass("hide"),$("#storesList").html(template("storesTmpl",{stores:t})),e(s),n.Util.getProvinceCityInfo(s,function(e){$("#address").text(e.cityName)}),$("#storesList li").on("click",function(e){var t=$(this).find(".address-title").html(),o=$(this).find("img").attr("src"),i=n.Util.getLocalStorage();i?(i.setItem("name",t),i.setItem("storeCode",$(this).find("a").data("storecode")),i.setItem("cityId",s),i.setItem("guidImgUrl",o)):n.Util.redirectToErr("0")}),i.updateLikesCnt(function(e){if(e.storeCode){var t=e.storeCode,o=$(".store-list a[data-storecode='"+t+"']"),i=o.find(".likes-icon");i.addClass("shop-likes")}})})):n.Util.redirectToErr("0")})},{"./common/buriedpoint_vbuy":3,"./common/stastic":5,"./common/util":6,"./controllers/stores_ctrl":7}]},{},[8]);