webpackJsonp([0,3],{1073:function(t,n){t.exports=".cb-slideshow,\r\n.cb-slideshow:after{ \r\n    position:fixed;\r\n    width:100%;\r\n    height:100%;\r\n    top:0px;\r\n    left:0px;\r\n    z-index:0; \r\n}\r\n.cb-slideshow:after{ \r\n    content:'';\r\n    background:transparent url(../assets/images/pattern.png) repeat top left; \r\n}\r\n.sp-slideshow{ \r\n    width:100%;\r\n    height:100%;\r\n    position:absolute;\r\n    top:0px;\r\n    left:0px;\r\n    color:transparent;\r\n    background-size:cover;\r\n    background-position:50% 50%;\r\n    background-repeat:none;\r\n    opacity:0;\r\n    z-index:0;\r\n\t-webkit-backface-visibility:hidden;\r\n    -webkit-animation:imageAnimation 19s linear infinite 0s;\r\n    animation:imageAnimation 19s linear infinite 0s; \r\n}\r\n.d-slideshow{ \r\n    z-index:1000;\r\n    position:absolute;\r\n    bottom:30px;\r\n    left:0px;\r\n    width:100%;\r\n    text-align:center;\r\n    opacity:0;\r\n    color:#fff;\r\n    -webkit-animation:titleAnimation 19s linear infinite 0s;\r\n    animation:titleAnimation 19s linear infinite 0s;\r\n}\r\n.txt-slideshow{ \r\n    font-family:Arial, sans-serif;\r\n    font-size:125px;\r\n    padding:5px;\r\n    text-align:left; \r\n}\r\n.cb-slideshow>li:nth-child(1)>span{\r\n    background-repeat:no-repeat;\r\n    background-position:right top;\r\n}\r\n.cb-slideshow>li:nth-child(2)>span{\r\n    -webkit-animation-delay:6s;\r\n    animation-delay:6s; \r\n    background-repeat:no-repeat;\r\n    background-size:cover;\r\n    background-position:right top;\r\n}\r\n.cb-slideshow>li:nth-child(3)>span{\r\n    -webkit-animation-delay:12s;\r\n    animation-delay:12s; \r\n    background-repeat:no-repeat;\r\n    background-position:right top;\r\n}\r\n\r\n.cb-slideshow li:nth-child(2) div{ \r\n    -webkit-animation-delay:6s;\r\n    animation-delay:6s; \r\n}\r\n\r\n.cb-slideshow li:nth-child(3) div{ \r\n    -webkit-animation-delay:12s;\r\n    animation-delay:12s; \r\n}\r\n@-webkit-keyframes imageAnimation{ \r\n    0%{ opacity:0;\r\n    -webkit-animation-timing-function:ease-in; }\r\n    8%{ opacity:1;\r\n         -webkit-animation-timing-function:ease-out; }\r\n    17%{ opacity:1 }\r\n    25%{ opacity:0 }\r\n    100%{ opacity:0 }\r\n}\r\n@keyframes imageAnimation{ \r\n    0%{ opacity:0;\r\n    -webkit-animation-timing-function:ease-in;\r\n            animation-timing-function:ease-in; }\r\n    8%{ opacity:1;\r\n         -webkit-animation-timing-function:ease-out;\r\n                 animation-timing-function:ease-out; }\r\n    17%{ opacity:1 }\r\n    25%{ opacity:0 }\r\n    100%{ opacity:0 }\r\n}\r\n@-webkit-keyframes titleAnimation{ \r\n    0%{ opacity:0 }\r\n    8%{ opacity:1 }\r\n    17%{ opacity:1 }\r\n    19%{ opacity:0 }\r\n    100%{ opacity:0 }\r\n}\r\n@keyframes titleAnimation{ \r\n    0%{ opacity:0 }\r\n    8%{ opacity:1 }\r\n    17%{ opacity:1 }\r\n    19%{ opacity:0 }\r\n    100%{ opacity:0 }\r\n}\r\n.no-cssanimations .cb-slideshow li span{\r\n\topacity:1;\r\n}\r\n@media screen and (max-width: 1140px){ \r\n    .cb-slideshow li div h3{ font-size:140px }\r\n}\r\n@media screen and (max-width: 1000px){\r\n}\r\n@media screen and (max-width: 600px){ \r\n    .cb-slideshow li div h3{ font-size:80px }\r\n    .cb-slideshow>li:nth-child(1)>span,\r\n    .cb-slideshow>li:nth-child(2)>span,\r\n    .cb-slideshow>li:nth-child(3)>span{ \r\n        height:100%;\r\n    }\r\n    .cb-slideshow>li:nth-child(1)>span{\r\n        background-position-x:20%;\r\n    }\r\n    .cb-slideshow>li:nth-child(2)>span{\r\n        height:110% !important;\r\n        background-position-x:90%;\r\n    }\r\n    .cb-slideshow>li:nth-child(3)>span{\r\n        background-position-x:90%;\r\n    }\r\n}"},1074:function(t,n){t.exports=""},1075:function(t,n){t.exports=""},1076:function(t,n){t.exports='<ul class="cb-slideshow" style="list-style: none;">\r\n  <li class="li-slideshow"><span class="sp-slideshow" [ngStyle]="{\'background-image\': \'url(\'+imgURLs[0]+\')\'}">Image 01</span>\r\n    <div class="d-slideshow">\r\n      <p class="txt-slideshow">{{ imgInfors[0].text }}\r\n      <br><h4>{{ imgInfors[0].url }}</h4>\r\n      </p>\r\n    </div>\r\n  </li>\r\n  <li class="li-slideshow"><span class="sp-slideshow" [ngStyle]="{\'background-image\': \'url(\'+imgURLs[1]+\')\'}">Image 02</span>\r\n    <div class="d-slideshow">\r\n      <p class="txt-slideshow">{{ imgInfors[1].text }}\r\n      <br><h4>{{ imgInfors[1].url }}</h4>\r\n      </p>\r\n    </div>\r\n  </li>\r\n  <li class="li-slideshow"><span class="sp-slideshow" [ngStyle]="{\'background-image\': \'url(\'+imgURLs[2]+\')\'}">Image 03</span>\r\n    <div class="d-slideshow">\r\n      <p class="txt-slideshow">{{ imgInfors[2].text }}\r\n      <br><h4>{{ imgInfors[2].url }}</h4>\r\n      </p>\r\n    </div>\r\n  </li>\r\n</ul>\r\n\r\n<div class="container-fluid">\r\n  <div class="row" style="margin-top: 5%">\r\n    <div class="col-xs-10 col-xs-offset-2 col-sm-6 col-sm-offset-1 col-md-4 col-md-offset-2">\r\n      <div class="accordion">\r\n        <div class="accordion-item">\r\n          <input id="s1" class="hide" type="checkbox">\r\n          <label for="s1" class="accordion-label">GET IMAGE LINK</label>\r\n          <div class="accordion-child">\r\n            <app-form-submit></app-form-submit>\r\n          </div>\r\n        </div>\r\n        <div class="accordion-item">\r\n          <input id="s2" class="hide" type="checkbox" checked>\r\n          <label for="s2" class="accordion-label">ABOUT</label>\r\n          <div class="accordion-child" id="about">\r\n            <p>Our website: <a href="https://nyanyadesu.wordpress.com">https://nyanyadesu.wordpress.com</a></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n'},1077:function(t,n){t.exports='<!--<div *ngIf="isLoading">\r\n  <div class="card" style="width:100%; height:100%; position: absolute; z-index: 9999; text-align: center; transition: opacity .8s ease-in-out;">\r\n    <h4 class="card-header">Loading...</h4>\r\n    <div class="card-block text-xs-center">\r\n      <i class="fa fa-circle-o-notch fa-spin fa-3x"></i>\r\n    </div>\r\n  </div>\r\n</div>-->\r\n<div class="container-fluid">\r\n  <!--<div class="row" >\r\n    <button md-button class="col-xs-12 col-sm-12 col-md-12 alert-info" \r\n        style="margin-bottom: 0px; margin-top: 0px; padding: 2px; text-align: center" \r\n        (click)="displayDownloader()">\r\n      {{information}}\r\n    </button>    \r\n  </div>-->\r\n  <div class="row" style="top: 0px; bottom: 0px; left: 0px; right: 0px">\r\n      <md-card style="padding-bottom: 2px; margin: 0px;">        \r\n        <form class="form" #wdForm="ngForm" (ngSubmit)="onSubmit(mdefaultItem)" >\r\n          <div class="form-group" style="top: 0px; bottom: 0px; left: 0px; right: 0px">\r\n            <p class="col-xs-12 col-sm-12 col-md-12 btn-danger" style="text-align: center" *ngIf="isError">{{errorMsg}}</p>\r\n            <!--<input class="form-control" type="text" name="inputText" id="txtInput" placeholder="inputPlaceholder">-->\r\n            <div class="row">\r\n                <md-input-container class="col-xs-11 col-sm-11 col-md-11">\r\n                    <input class="col-xs-11 col-sm-11 col-md-11" mdInput \r\n                      placeholder="{{ mdefaultItem.desc }}" \r\n                      [(ngModel)]="txtInput"\r\n                      name="txtInput"\r\n                      value="txtInput" \r\n                      required \r\n                      [disabled]="(isLoading && !isError) || (!isLoading && isError)">\r\n                </md-input-container>\r\n            </div>\r\n          </div>\r\n          <br>\r\n          <div class="form-group" style="top: 0px; bottom: 0px; left: 0px; right: 0px">\r\n            <!--<select class="form-control" id="cbSelect" name="cbSelect"\r\n                    [(ngModel)]="mdefaultItem" \r\n                    (ngModelChange)="onChange($event)">\r\n              <option *ngFor="let i of mItem" [ngValue]="i" >{{i.name}}</option>\r\n            </select>-->\r\n            <div class="row">\r\n                <md-select placeholder="Select" name="cbSelect" class="col-xs-11 col-sm-11 col-md-11" \r\n                        [disabled]="(isLoading && !isError) || (!isLoading && isError)"\r\n                        [(ngModel)]="mdefaultItem" \r\n                        (ngModelChange)="onChange($event)">\r\n                  <md-option class="col-xs-11 col-sm-11 col-md-11" *ngFor="let i of mItem" [value]="i">{{ i.name }}</md-option>\r\n                </md-select>\r\n            </div>\r\n            \r\n            \r\n          </div>  \r\n          <div class="form-group" style="text-align: center; top: 0px; bottom: 0px; left: 0px; right: 0px">   \r\n            <button type="submit" class="btn btn-primary" *ngIf="!isLoading && !isError">Get link</button>\r\n            <!--<button class="btn btn-warning" [disabled]="true" *ngIf="isLoading && !isError">Loading...</button>-->\r\n            <md-progress-bar mode="indeterminate" *ngIf="isLoading && !isError"></md-progress-bar>\r\n            <button class="btn btn-success" *ngIf="isError" (click)="onError()">OK</button>    \r\n          </div>\r\n        </form>\r\n\r\n        <div class="container-fluid" *ngIf="submitted && !isLoading && !isError" style="top: 0px; bottom: 0px; left: 0px; right: 0px">\r\n          <div class="row">\r\n            <div class="col-xs-11 col-sm-11 col-md-11" style="margin: auto; padding-bottom: 5px;">\r\n              <button class="btn btn-default" type="button" ngxClipboard [cbContent]="txtOutput" \r\n              (click)="openSnackBar()"><span class="glyphicon glyphicon-copy"></span> Copy link to clipboard</button>\r\n              <button id="btnExport" class="btn btn-default" type="button" (click)="exportData()">\r\n                <span class="glyphicon glyphicon-download-alt"></span> Export to file</button>\r\n            </div>\r\n          </div>\r\n          <div class="row" style="margin: auto;">\r\n            <!--<div class="col-xs-3">Result</div>-->\r\n            <md-input-container class="col-xs-12 col-sm-12 col-md-12">\r\n                <input *ngIf="mdefaultItem.id==0 && linkResult.imgs[0]" class="col-xs-11 col-sm-11 col-md-11" mdInput \r\n                  placeholder="Result "\r\n                  [(ngModel)]="txtOutput"\r\n                  style="display: none;">\r\n                <div class="media" *ngIf="mdefaultItem.id==0 && linkResult.imgs[0]" style="text-align: center;">\r\n                  <div class="media-middle">\r\n                    <!--<img class="media-object img-responsive" src="{{ txtOutput }}" alt="NA">-->\r\n                    <button class="btn btn-default" type="button" (click)="openNewTab()"> <span class="glyphicon glyphicon-eye-open"></span> Open Image in new tab</button>\r\n                  </div>\r\n                </div>\r\n                <textarea *ngIf="mdefaultItem.id!=0" style="resize: none; color: #000; font-size: 13px;" \r\n                  [disabled]="true" mdInput \r\n                  placeholder="Result" \r\n                  id="txtResult"\r\n                  [(ngModel)]="txtOutput"\r\n                  rows = 5 ></textarea>\r\n            </md-input-container>\r\n            <div class="col-xs-11 col-sm-11 col-md-11" style="display: none;">\r\n              <a *ngFor="let link of linkResult.imgs" [href]="link"></a>\r\n              \r\n            </div>\r\n          </div>\r\n          <!--<div class="row">\r\n            <textarea style="resize: none;" class="col-xs-11 col-sm-11 col-md-11" id="txtResult" [disabled]="!submitted" >{{linkResult}}</textarea>\r\n          </div>-->\r\n        </div>\r\n      </md-card>   \r\n  </div>\r\n</div>\r\n\r\n\r\n'},1078:function(t,n){t.exports='<div class="container-fluid"  style="text-align: center; margin: auto;">\r\n  <div class="row">\r\n    <div class="col-xs-12 col-sm-12 col-md-12">\r\n      <b>Copied</b> <span class="glyphicon glyphicon-ok" style="color: #b53fb0;"></span>\r\n    </div>\r\n  </div>\r\n</div>\r\n'},1159:function(t,n){},1160:function(t,n){},1161:function(t,n){},1162:function(t,n,e){t.exports=e(611)},509:function(t,n,e){"use strict";var r=e(0);e.d(n,"a",function(){return s});var i=this&&this.__decorate||function(t,n,e,r){var i,o=arguments.length,s=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,n,e,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(n,e,s):i(n,e))||s);return o>3&&s&&Object.defineProperty(n,e,s),s},o=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},s=function(){function t(){}return t.prototype.ngOnInit=function(){},t=i([e.i(r.H)({selector:"app-helper",template:e(1078),styles:[e(1075)]}),o("design:paramtypes",[])],t)}()},510:function(t,n,e){"use strict";var r=e(0),i=e(138),o=e(588),s=(e.n(o),e(155));e.n(s);e.d(n,"a",function(){return f});var a=this&&this.__decorate||function(t,n,e,r){var i,o=arguments.length,s=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,n,e,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(n,e,s):i(n,e))||s);return o>3&&s&&Object.defineProperty(n,e,s),s},c=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},l=e(1083),d=e(808),p=e(1068),u=function(){function t(t,n,e){this.option=t,this.imgs=n,this.error=e}return t}(),f=function(){function t(t){this.http=t,this.todosUrl="https://api-wcpd.herokuapp.com/api/data=",this.todosImg="https://api-wcpd.herokuapp.com/img/data="}return t.prototype.getLinks=function(t,n){return 0==t?this.getImgFromLink(this,n).then(function(t){return new u(0,t.toString().split(","),"null")}):this.getListOfImage(this,t,n).then(function(n){return new u(t,n.toString().split(","),"null")})},t.prototype.getImgFromLink=function(t,n){return new Promise(function(e,r){l({uri:t.todosUrl+n},function(n,i,o){if(n)console.log("Error! ",n),r(n);else{var s=d.load(o,{xmlMode:!0}),a=s("img.img").first().attr("src");null===a||void 0===a?r("Image not found!"):t.getLinkHQ(t.todosImg+a).then(function(n){e(n.replace(t.todosImg,""))})}})})},t.prototype.getLinkHQ=function(t){return new Promise(function(n,e){t=t.substr(0,t.lastIndexOf("-")),l({method:"HEAD",uri:t+"-3000.jpg"},function(e,r,i){e?l({method:"HEAD",uri:t+"-1200.jpg"},function(e,r,i){e?l({method:"HEAD",uri:t+"-900.jpg"},function(e,r,i){n(e?t+"-740.jpg":t+"-900.jpg")}):n(t+"-1200.jpg")}):n(t+"-3000.jpg")})})},t.prototype.getImgFromJSON=function(t,n){return new Promise(function(e,r){l({uri:t.todosUrl+n},function(n,i,o){if(n)r(n);else{var s=JSON.parse(o);1==s.has_error&&r(s.message),0==s.list.length&&r("ID not exist!");var a=function(n){return t.getLinkHQ(t.todosImg+n.photo.sq150_url.replace("/sq150",""))},c=Promise.all(s.list.map(a)).then(function(t){return Promise.all(t)}).catch(function(t){r(t)});c.then(function(t){e({imgs:t,can_next:s.pager.next_page})}).catch(function(t){r(t)})}})})},t.prototype.formatURL=function(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];return t.replace(/{(\d)+}/g,function(t,e){return n[e]})},t.prototype.getListOfImage=function(t,n,e){return new Promise(function(r,i){function o(t,n){function e(){return t()?void p.when(n(),e,r.reject):r.resolve()}var r=p.defer();return p.nextTick(e),r.promise}var s="https://worldcosplay.net/api/member/";if(8==n)s+=t.formatURL("good?member_id={0}&limit=16&rows=16",e);else if(1==n)s+=t.formatURL("photos.json?limit=16&member_id={0}&p3_photo_list=true",e);else switch(s+="role_photos.json?limit=16&member_id={0}&p3_photo_list=true&photo_context=member_role:{0}:{1}&role_id={1}",n){case 2:s=t.formatURL(s,e,1);break;case 3:s=t.formatURL(s,e,2);break;case 4:s=t.formatURL(s,e,3);break;case 5:s=t.formatURL(s,e,4);break;case 6:s=t.formatURL(s,e,5);break;case 7:s=t.formatURL(s,e,6)}s+="&page={0}";var a=[],c=1;o(function(){return null!=c},function(){return t.getImgFromJSON(t,t.formatURL(s,c)).then(function(t){a=[].concat(a,t.imgs),c=t.can_next})}).then(function(){r(a.map(function(n){return n.replace(t.todosImg,"")}))}).catch(function(t){i(t)}).done()})},t=a([e.i(r.f)(),c("design:paramtypes",["function"==typeof(n="undefined"!=typeof i.a&&i.a)&&n||Object])],t);var n}()},511:function(t,n){function e(t){throw new Error("Cannot find module '"+t+"'.")}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id=511},610:function(t,n){function e(t){throw new Error("Cannot find module '"+t+"'.")}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id=610},611:function(t,n,e){"use strict";var r=e(768),i=(e.n(r),e(734)),o=e(0),s=e(767),a=e(765);s.a.production&&e.i(o._40)(),e.i(i.a)().bootstrapModule(a.a)},764:function(t,n,e){"use strict";var r=e(0);e.d(n,"a",function(){return s});var i=this&&this.__decorate||function(t,n,e,r){var i,o=arguments.length,s=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,n,e,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(n,e,s):i(n,e))||s);return o>3&&s&&Object.defineProperty(n,e,s),s},o=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},s=function(){function t(){this.title="WorldCosplay Downloader",this.imgURLs=["https://wc-ahba9see.c.sakurastorage.jp/104923/dyppctygpsciwiisnkjknayjjjesrwghbsvqshjm-740.jpg","https://wc-ahba9see.c.sakurastorage.jp/2205/clejgazmyqzcmagwlrnickhswqiaewngeilsbgfk-740.jpg","https://wc-ahba9see.c.sakurastorage.jp/188679/rmimgaiaqpfbeywqmazcdbijxuidocjyalfiyhvq-740.jpg"],this.imgInfors=[{text:"Minako Arisato - Momoe Ren (Momo)",url:"Image ID: 3572433"},{text:"WifeKirei - C.C",url:"Image ID: 6076976"},{text:"Akagi and others - Fumi (Fumi)",url:"Image ID: 3632566"}]}return t=i([e.i(r.H)({selector:"app-root",template:e(1076),styles:[e(1073)]}),o("design:paramtypes",[])],t)}()},765:function(t,n,e){"use strict";var r=e(56),i=e(0),o=e(50),s=e(138),a=e(464),c=e(754),l=e(1053),d=e(764),p=e(766),u=e(509),f=e(510);e.d(n,"a",function(){return g});var m=this&&this.__decorate||function(t,n,e,r){var i,o=arguments.length,s=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,n,e,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(n,e,s):i(n,e))||s);return o>3&&s&&Object.defineProperty(n,e,s),s},h=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},g=(c.a.forRoot([{path:"",component:p.a},{path:"help",component:u.a}]),function(){function t(){}return t=m([e.i(i.J)({declarations:[d.a,p.a,u.a],entryComponents:[u.a],imports:[r.e,o.b,s.b,a.b,l.a],providers:[f.a],bootstrap:[d.a]}),h("design:paramtypes",[])],t)}())},766:function(t,n,e){"use strict";var r=e(0),i=e(138),o=e(464),s=e(510),a=e(509),c=e(992);e.n(c);e.d(n,"a",function(){return p});var l=this&&this.__decorate||function(t,n,e,r){var i,o=arguments.length,s=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,n,e,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(n,e,s):i(n,e))||s);return o>3&&s&&Object.defineProperty(n,e,s),s},d=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},p=(function(){function t(){}return t.prototype.toString=function(){return this.id+","+this.name+","+this.desc},t}(),function(){function t(t,n,e,r){this.http=t,this.imageService=n,this.snackBar=e,this.mItem=u,this.mdefaultItem=this.mItem[0],this.submitted=!1,this.isLoading=!1,this.txtOutput="",this.isError=!1,this.regexURL="(https://)?worldcosplay.net/photo/([1-9])+$",this.regexNo="^[1-9]+$",this.cdr=r}return t.prototype.ngOnInit=function(){this.txtInput=""},t.prototype.onSubmit=function(t){var n=this;this.cdr.detectChanges(),0==this.submitted?this.submitted=!0:this.submitted=!1,this.isLoading=!0,this.imageService.getLinks(t.id,this.txtInput).then(function(t){n.submitted=!0,n.linkResult=t,n.isLoading=!1,n.txtOutput="",t.imgs.forEach(function(t){n.txtOutput+=t+"\n"}),n.cdr.detectChanges()}).catch(function(t){n.isError=!0,n.errorMsg=t,n.isLoading=!1,n.cdr.detectChanges()})},t.prototype.validationInput=function(t){if(0===this.mdefaultItem.id){if(this.txtInput.match(this.regexURL))return this.isError=!1,!0;this.errorMsg="URL isn't match!"}else{if(this.txtInput.match(this.regexNo))return this.isError=!1,!0;this.errorMsg="WorldCosplay No. not found!"}return this.isError=!0,!1},t.prototype.onChange=function(t){0==t.id?this.txtInput="":this.txtInput="",this.resertValue()},t.prototype.onError=function(){this.submitted=!1,this.isLoading=!1,this.isError=!1,this.errorMsg=""},t.prototype.resertValue=function(){this.submitted=!1,this.isLoading=!1,this.isError=!1,this.errorMsg=""},t.prototype.openSnackBar=function(){this.snackBar.openFromComponent(a.a,{duration:1200})},t.prototype.stringResult=function(t){var n="";return t.forEach(function(t){n=n+""+t+"\n"}),this.cdr.detectChanges(),n},t.prototype.openNewTab=function(){window.open(this.txtOutput)},t.prototype.exportData=function(){var t=new Blob([this.txtOutput],{type:"text/plain;charset=utf-8"});c.saveAs(t,"output.txt")},t=l([e.i(r.H)({selector:"app-form-submit",template:e(1077),styles:[e(1074)]}),d("design:paramtypes",["function"==typeof(n="undefined"!=typeof i.a&&i.a)&&n||Object,"function"==typeof(p="undefined"!=typeof s.a&&s.a)&&p||Object,"function"==typeof(f="undefined"!=typeof o.a&&o.a)&&f||Object,"function"==typeof(m="undefined"!=typeof r.j&&r.j)&&m||Object])],t);var n,p,f,m}()),u=[{name:"Link",id:0,desc:"Ex: https://worldcosplay.net/photo/6123744"},{name:"Submissions",id:1,desc:"WorldCosplay No."},{name:"Cosplays",id:2,desc:"WorldCosplay No."},{name:"Photographer",id:3,desc:"WorldCosplay No."},{name:"Touch-Up Artist",id:4,desc:"WorldCosplay No."},{name:"Props Made",id:5,desc:"WorldCosplay No."},{name:"Make-up Artist",id:6,desc:"WorldCosplay No."},{name:"Collaborations",id:7,desc:"WorldCosplay No."},{name:"Favorites",id:8,desc:"WorldCosplay No."}]},767:function(t,n,e){"use strict";e.d(n,"a",function(){return r});var r={production:!0}},768:function(t,n,e){"use strict";var r=e(830),i=(e.n(r),e(823)),o=(e.n(i),e(819)),s=(e.n(o),e(825)),a=(e.n(s),e(824)),c=(e.n(a),e(822)),l=(e.n(c),e(821)),d=(e.n(l),e(829)),p=(e.n(d),e(818)),u=(e.n(p),e(817)),f=(e.n(u),e(827)),m=(e.n(f),e(820)),h=(e.n(m),e(828)),g=(e.n(h),e(826)),b=(e.n(g),e(831)),y=(e.n(b),e(1158));e.n(y)},771:function(t,n){function e(t){throw new Error("Cannot find module '"+t+"'.")}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id=771}},[1162]);
//# sourceMappingURL=main.d643b3472a724beaa775.bundle.map