(self.webpackChunkhost=self.webpackChunkhost||[]).push([[513],{9876:($,P,d)=>{d.d(P,{of:()=>O});var E=d(1721),i=d(4752);function O(...v){const w=(0,E.lI)(v);return(0,i.H)(v,w)}},4935:($,P,d)=>{d.d(P,{H:()=>O});var E=d(8367),i=d(9746);function O(v,w){return(0,i.T)(w)?(0,E.Z)(v,w,1):(0,E.Z)(v,1)}},6455:($,P,d)=>{d.d(P,{p:()=>O});var E=d(4427),i=d(2287);function O(v,w){return(0,E.N)((J,M)=>{let b=0;J.subscribe((0,i._)(M,T=>v.call(w,T,b++)&&M.next(T)))})}},8367:($,P,d)=>{d.d(P,{Z:()=>b});var E=d(9703),i=d(605),O=d(4427),v=d(8110),w=d(2287),M=d(9746);function b(T,c,H=1/0){return(0,M.T)(c)?b((R,I)=>(0,E.T)((S,k)=>c(R,S,I,k))((0,i.Tg)(T(R,I))),H):("number"==typeof c&&(H=c),(0,O.N)((R,I)=>function J(T,c,H,R,I,S,k,A){const N=[];let m=0,ne=0,z=!1;const G=()=>{z&&!N.length&&!m&&c.complete()},K=x=>m<R?L(x):N.push(x),L=x=>{S&&c.next(x),m++;let Y=!1;(0,i.Tg)(H(x,ne++)).subscribe((0,w._)(c,y=>{I?.(y),S?K(y):c.next(y)},()=>{Y=!0},void 0,()=>{if(Y)try{for(m--;N.length&&m<R;){const y=N.shift();k?(0,v.N)(c,k,()=>L(y)):L(y)}G()}catch(y){c.error(y)}}))};return T.subscribe((0,w._)(c,K,()=>{z=!0,G()})),()=>{A?.()}}(R,I,T,H)))}},8513:($,P,d)=>{d.r(P),d.d(P,{HTTP_INTERCEPTORS:()=>re,HttpBackend:()=>T,HttpClient:()=>ce,HttpClientJsonpModule:()=>Je,HttpClientModule:()=>Be,HttpClientXsrfModule:()=>Xe,HttpContext:()=>z,HttpContextToken:()=>ne,HttpErrorResponse:()=>V,HttpEventType:()=>D,HttpFeatureKind:()=>_,HttpHandler:()=>b,HttpHeaderResponse:()=>Q,HttpHeaders:()=>c,HttpParams:()=>m,HttpRequest:()=>y,HttpResponse:()=>F,HttpResponseBase:()=>Z,HttpUrlEncodingCodec:()=>R,HttpXhrBackend:()=>ae,HttpXsrfTokenExtractor:()=>te,JsonpClientBackend:()=>ie,JsonpInterceptor:()=>ke,XhrFactory:()=>ze,provideHttpClient:()=>Te,withInterceptors:()=>Fe,withInterceptorsFromDi:()=>Pe,withJsonpSupport:()=>Re,withNoXsrfProtection:()=>be,withRequestsMadeViaParent:()=>Ue,withXsrfConfiguration:()=>le,\u0275HttpInterceptingHandler:()=>q,\u0275HttpInterceptorHandler:()=>q});var E=d(6570),i=d(2496),O=d(9876),v=d(718),w=d(4935),J=d(6455),M=d(9703);class b{}class T{}class c{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?this.lazyInit="string"==typeof e?()=>{this.headers=new Map,e.split("\n").forEach(t=>{const r=t.indexOf(":");if(r>0){const s=t.slice(0,r),o=s.toLowerCase(),l=t.slice(r+1).trim();this.maybeSetNormalizedName(s,o),this.headers.has(o)?this.headers.get(o).push(l):this.headers.set(o,[l])}})}:()=>{this.headers=new Map,Object.entries(e).forEach(([t,r])=>{let s;if(s="string"==typeof r?[r]:"number"==typeof r?[r.toString()]:r.map(o=>o.toString()),s.length>0){const o=t.toLowerCase();this.headers.set(o,s),this.maybeSetNormalizedName(t,o)}})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();const t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof c?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){const t=new c;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof c?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){const t=e.name.toLowerCase();switch(e.op){case"a":case"s":let r=e.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(e.name,t);const s=("a"===e.op?this.headers.get(t):void 0)||[];s.push(...r),this.headers.set(t,s);break;case"d":const o=e.value;if(o){let l=this.headers.get(t);if(!l)return;l=l.filter(h=>-1===o.indexOf(h)),0===l.length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,l)}else this.headers.delete(t),this.normalizedNames.delete(t)}}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}}class R{encodeKey(e){return A(e)}encodeValue(e){return A(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}}const S=/%(\d[a-f0-9])/gi,k={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function A(n){return encodeURIComponent(n).replace(S,(e,t)=>k[t]??e)}function N(n){return`${n}`}class m{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new R,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function I(n,e){const t=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(s=>{const o=s.indexOf("="),[l,h]=-1==o?[e.decodeKey(s),""]:[e.decodeKey(s.slice(0,o)),e.decodeValue(s.slice(o+1))],a=t.get(l)||[];a.push(h),t.set(l,a)}),t}(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{const r=e.fromObject[t],s=Array.isArray(r)?r.map(N):[N(r)];this.map.set(t,s)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();const t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}appendAll(e){const t=[];return Object.keys(e).forEach(r=>{const s=e[r];Array.isArray(s)?s.forEach(o=>{t.push({param:r,value:o,op:"a"})}):t.push({param:r,value:s,op:"a"})}),this.clone(t)}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{const t=this.encoder.encodeKey(e);return this.map.get(e).map(r=>t+"="+this.encoder.encodeValue(r)).join("&")}).filter(e=>""!==e).join("&")}clone(e){const t=new m({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(e),t}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":const t=("a"===e.op?this.map.get(e.param):void 0)||[];t.push(N(e.value)),this.map.set(e.param,t);break;case"d":if(void 0===e.value){this.map.delete(e.param);break}{let r=this.map.get(e.param)||[];const s=r.indexOf(N(e.value));-1!==s&&r.splice(s,1),r.length>0?this.map.set(e.param,r):this.map.delete(e.param)}}}),this.cloneFrom=this.updates=null)}}class ne{constructor(e){this.defaultValue=e}}class z{constructor(){this.map=new Map}set(e,t){return this.map.set(e,t),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}}function K(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function L(n){return typeof Blob<"u"&&n instanceof Blob}function x(n){return typeof FormData<"u"&&n instanceof FormData}class y{constructor(e,t,r,s){let o;if(this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase(),function G(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||s?(this.body=void 0!==r?r:null,o=s):o=r,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params)),this.headers||(this.headers=new c),this.context||(this.context=new z),this.params){const l=this.params.toString();if(0===l.length)this.urlWithParams=t;else{const h=t.indexOf("?");this.urlWithParams=t+(-1===h?"?":h<t.length-1?"&":"")+l}}else this.params=new m,this.urlWithParams=t}serializeBody(){return null===this.body?null:K(this.body)||L(this.body)||x(this.body)||function Y(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof m?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||x(this.body)?null:L(this.body)?this.body.type||null:K(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof m?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(e={}){const t=e.method||this.method,r=e.url||this.url,s=e.responseType||this.responseType,o=void 0!==e.body?e.body:this.body,l=void 0!==e.withCredentials?e.withCredentials:this.withCredentials,h=void 0!==e.reportProgress?e.reportProgress:this.reportProgress;let a=e.headers||this.headers,f=e.params||this.params;const X=e.context??this.context;return void 0!==e.setHeaders&&(a=Object.keys(e.setHeaders).reduce((j,C)=>j.set(C,e.setHeaders[C]),a)),e.setParams&&(f=Object.keys(e.setParams).reduce((j,C)=>j.set(C,e.setParams[C]),f)),new y(t,r,o,{params:f,headers:a,context:X,reportProgress:h,responseType:s,withCredentials:l})}}var D=function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n}(D||{});class Z{constructor(e,t=200,r="OK"){this.headers=e.headers||new c,this.status=void 0!==e.status?e.status:t,this.statusText=e.statusText||r,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}}class Q extends Z{constructor(e={}){super(e),this.type=D.ResponseHeader}clone(e={}){return new Q({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class F extends Z{constructor(e={}){super(e),this.type=D.Response,this.body=void 0!==e.body?e.body:null}clone(e={}){return new F({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class V extends Z{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${e.url||"(unknown url)"}`:`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}}function se(n,e){return{body:e,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials}}let ce=(()=>{class n{constructor(t){this.handler=t}request(t,r,s={}){let o;if(t instanceof y)o=t;else{let a,f;a=s.headers instanceof c?s.headers:new c(s.headers),s.params&&(f=s.params instanceof m?s.params:new m({fromObject:s.params})),o=new y(t,r,void 0!==s.body?s.body:null,{headers:a,context:s.context,params:f,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials})}const l=(0,O.of)(o).pipe((0,w.H)(a=>this.handler.handle(a)));if(t instanceof y||"events"===s.observe)return l;const h=l.pipe((0,J.p)(a=>a instanceof F));switch(s.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return h.pipe((0,M.T)(a=>{if(null!==a.body&&!(a.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return a.body}));case"blob":return h.pipe((0,M.T)(a=>{if(null!==a.body&&!(a.body instanceof Blob))throw new Error("Response is not a Blob.");return a.body}));case"text":return h.pipe((0,M.T)(a=>{if(null!==a.body&&"string"!=typeof a.body)throw new Error("Response is not a string.");return a.body}));default:return h.pipe((0,M.T)(a=>a.body))}case"response":return h;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(t,r={}){return this.request("DELETE",t,r)}get(t,r={}){return this.request("GET",t,r)}head(t,r={}){return this.request("HEAD",t,r)}jsonp(t,r){return this.request("JSONP",t,{params:(new m).append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,r={}){return this.request("OPTIONS",t,r)}patch(t,r,s={}){return this.request("PATCH",t,se(s,r))}post(t,r,s={}){return this.request("POST",t,se(s,r))}put(t,r,s={}){return this.request("PUT",t,se(s,r))}}return n.\u0275fac=function(t){return new(t||n)(i.\u0275\u0275inject(b))},n.\u0275prov=i.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();function ue(n,e){return e(n)}function Oe(n,e){return(t,r)=>e.intercept(t,{handle:s=>n(s,r)})}const re=new i.InjectionToken("HTTP_INTERCEPTORS"),W=new i.InjectionToken("HTTP_INTERCEPTOR_FNS");function Ne(){let n=null;return(e,t)=>(null===n&&(n=((0,i.inject)(re,{optional:!0})??[]).reduceRight(Oe,ue)),n(e,t))}let oe,q=(()=>{class n extends b{constructor(t,r){super(),this.backend=t,this.injector=r,this.chain=null}handle(t){if(null===this.chain){const r=Array.from(new Set(this.injector.get(W)));this.chain=r.reduceRight((s,o)=>function Me(n,e,t){return(r,s)=>t.runInContext(()=>e(r,o=>n(o,s)))}(s,o,this.injector),ue)}return this.chain(t,r=>this.backend.handle(r))}}return n.\u0275fac=function(t){return new(t||n)(i.\u0275\u0275inject(T),i.\u0275\u0275inject(i.EnvironmentInjector))},n.\u0275prov=i.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})(),xe=0;class he{}function Se(){return"object"==typeof window?window:{}}let ie=(()=>{class n{constructor(t,r){this.callbackMap=t,this.document=r,this.resolvedPromise=Promise.resolve()}nextCallback(){return"ng_jsonp_callback_"+xe++}handle(t){if("JSONP"!==t.method)throw new Error("JSONP requests must use JSONP request method.");if("json"!==t.responseType)throw new Error("JSONP requests must use Json response type.");if(t.headers.keys().length>0)throw new Error("JSONP requests do not support headers.");return new v.c(r=>{const s=this.nextCallback(),o=t.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/,`=${s}$1`),l=this.document.createElement("script");l.src=o;let h=null,a=!1;this.callbackMap[s]=C=>{delete this.callbackMap[s],h=C,a=!0};const f=()=>{l.parentNode&&l.parentNode.removeChild(l),delete this.callbackMap[s]};return l.addEventListener("load",C=>{this.resolvedPromise.then(()=>{f(),a?(r.next(new F({body:h,status:200,statusText:"OK",url:o})),r.complete()):r.error(new V({url:o,status:0,statusText:"JSONP Error",error:new Error("JSONP injected script did not invoke callback.")}))})}),l.addEventListener("error",C=>{f(),r.error(new V({error:C,status:0,statusText:"JSONP Error",url:o}))}),this.document.body.appendChild(l),r.next({type:D.Sent}),()=>{a||this.removeListeners(l),f()}})}removeListeners(t){oe||(oe=this.document.implementation.createHTMLDocument()),oe.adoptNode(t)}}return n.\u0275fac=function(t){return new(t||n)(i.\u0275\u0275inject(he),i.\u0275\u0275inject(E.DOCUMENT))},n.\u0275prov=i.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();function pe(n,e){return"JSONP"===n.method?(0,i.inject)(ie).handle(n):e(n)}let ke=(()=>{class n{constructor(t){this.injector=t}intercept(t,r){return this.injector.runInContext(()=>pe(t,s=>r.handle(s)))}}return n.\u0275fac=function(t){return new(t||n)(i.\u0275\u0275inject(i.EnvironmentInjector))},n.\u0275prov=i.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();const Ae=/^\)\]\}',?\n/;let ae=(()=>{class n{constructor(t){this.xhrFactory=t}handle(t){if("JSONP"===t.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new v.c(r=>{const s=this.xhrFactory.build();if(s.open(t.method,t.urlWithParams),t.withCredentials&&(s.withCredentials=!0),t.headers.forEach((u,p)=>s.setRequestHeader(u,p.join(","))),t.headers.has("Accept")||s.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){const u=t.detectContentTypeHeader();null!==u&&s.setRequestHeader("Content-Type",u)}if(t.responseType){const u=t.responseType.toLowerCase();s.responseType="json"!==u?u:"text"}const o=t.serializeBody();let l=null;const h=()=>{if(null!==l)return l;const u=s.statusText||"OK",p=new c(s.getAllResponseHeaders()),B=function Le(n){return"responseURL"in n&&n.responseURL?n.responseURL:/^X-Request-URL:/m.test(n.getAllResponseHeaders())?n.getResponseHeader("X-Request-URL"):null}(s)||t.url;return l=new Q({headers:p,status:s.status,statusText:u,url:B}),l},a=()=>{let{headers:u,status:p,statusText:B,url:Ie}=h(),g=null;204!==p&&(g=typeof s.response>"u"?s.responseText:s.response),0===p&&(p=g?200:0);let de=p>=200&&p<300;if("json"===t.responseType&&"string"==typeof g){const Ke=g;g=g.replace(Ae,"");try{g=""!==g?JSON.parse(g):null}catch(Ve){g=Ke,de&&(de=!1,g={error:Ve,text:g})}}de?(r.next(new F({body:g,headers:u,status:p,statusText:B,url:Ie||void 0})),r.complete()):r.error(new V({error:g,headers:u,status:p,statusText:B,url:Ie||void 0}))},f=u=>{const{url:p}=h(),B=new V({error:u,status:s.status||0,statusText:s.statusText||"Unknown Error",url:p||void 0});r.error(B)};let X=!1;const j=u=>{X||(r.next(h()),X=!0);let p={type:D.DownloadProgress,loaded:u.loaded};u.lengthComputable&&(p.total=u.total),"text"===t.responseType&&s.responseText&&(p.partialText=s.responseText),r.next(p)},C=u=>{let p={type:D.UploadProgress,loaded:u.loaded};u.lengthComputable&&(p.total=u.total),r.next(p)};return s.addEventListener("load",a),s.addEventListener("error",f),s.addEventListener("timeout",f),s.addEventListener("abort",f),t.reportProgress&&(s.addEventListener("progress",j),null!==o&&s.upload&&s.upload.addEventListener("progress",C)),s.send(o),r.next({type:D.Sent}),()=>{s.removeEventListener("error",f),s.removeEventListener("abort",f),s.removeEventListener("load",a),s.removeEventListener("timeout",f),t.reportProgress&&(s.removeEventListener("progress",j),null!==o&&s.upload&&s.upload.removeEventListener("progress",C)),s.readyState!==s.DONE&&s.abort()}})}}return n.\u0275fac=function(t){return new(t||n)(i.\u0275\u0275inject(E.XhrFactory))},n.\u0275prov=i.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();const ee=new i.InjectionToken("XSRF_ENABLED"),fe="XSRF-TOKEN",me=new i.InjectionToken("XSRF_COOKIE_NAME",{providedIn:"root",factory:()=>fe}),ye="X-XSRF-TOKEN",Ee=new i.InjectionToken("XSRF_HEADER_NAME",{providedIn:"root",factory:()=>ye});class te{}let ge=(()=>{class n{constructor(t,r,s){this.doc=t,this.platform=r,this.cookieName=s,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,E.\u0275parseCookieValue)(t,this.cookieName),this.lastCookieString=t),this.lastToken}}return n.\u0275fac=function(t){return new(t||n)(i.\u0275\u0275inject(E.DOCUMENT),i.\u0275\u0275inject(i.PLATFORM_ID),i.\u0275\u0275inject(me))},n.\u0275prov=i.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();function Ce(n,e){const t=n.url.toLowerCase();if(!(0,i.inject)(ee)||"GET"===n.method||"HEAD"===n.method||t.startsWith("http://")||t.startsWith("https://"))return e(n);const r=(0,i.inject)(te).getToken(),s=(0,i.inject)(Ee);return null!=r&&!n.headers.has(s)&&(n=n.clone({headers:n.headers.set(s,r)})),e(n)}let ve=(()=>{class n{constructor(t){this.injector=t}intercept(t,r){return this.injector.runInContext(()=>Ce(t,s=>r.handle(s)))}}return n.\u0275fac=function(t){return new(t||n)(i.\u0275\u0275inject(i.EnvironmentInjector))},n.\u0275prov=i.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();var _=function(n){return n[n.Interceptors=0]="Interceptors",n[n.LegacyInterceptors=1]="LegacyInterceptors",n[n.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",n[n.NoXsrfProtection=3]="NoXsrfProtection",n[n.JsonpSupport=4]="JsonpSupport",n[n.RequestsMadeViaParent=5]="RequestsMadeViaParent",n}(_||{});function U(n,e){return{\u0275kind:n,\u0275providers:e}}function Te(...n){const e=[ce,ae,q,{provide:b,useExisting:q},{provide:T,useExisting:ae},{provide:W,useValue:Ce,multi:!0},{provide:ee,useValue:!0},{provide:te,useClass:ge}];for(const t of n)e.push(...t.\u0275providers);return(0,i.makeEnvironmentProviders)(e)}function Fe(n){return U(_.Interceptors,n.map(e=>({provide:W,useValue:e,multi:!0})))}const we=new i.InjectionToken("LEGACY_INTERCEPTOR_FN");function Pe(){return U(_.LegacyInterceptors,[{provide:we,useFactory:Ne},{provide:W,useExisting:we,multi:!0}])}function le({cookieName:n,headerName:e}){const t=[];return void 0!==n&&t.push({provide:me,useValue:n}),void 0!==e&&t.push({provide:Ee,useValue:e}),U(_.CustomXsrfConfiguration,t)}function be(){return U(_.NoXsrfProtection,[{provide:ee,useValue:!1}])}function Re(){return U(_.JsonpSupport,[ie,{provide:he,useFactory:Se},{provide:W,useValue:pe,multi:!0}])}function Ue(){return U(_.RequestsMadeViaParent,[{provide:T,useFactory:()=>(0,i.inject)(b,{skipSelf:!0,optional:!0})}])}let Xe=(()=>{class n{static disable(){return{ngModule:n,providers:[be().\u0275providers]}}static withOptions(t={}){return{ngModule:n,providers:le(t).\u0275providers}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=i.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=i.\u0275\u0275defineInjector({providers:[ve,{provide:re,useExisting:ve,multi:!0},{provide:te,useClass:ge},le({cookieName:fe,headerName:ye}).\u0275providers,{provide:ee,useValue:!0}]}),n})(),Be=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=i.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=i.\u0275\u0275defineInjector({providers:[Te(Pe())]}),n})(),Je=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=i.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=i.\u0275\u0275defineInjector({providers:[Re().\u0275providers]}),n})();const ze=E.XhrFactory}}]);