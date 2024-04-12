// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var c=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,v=/e-(\d)$/,y=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=l.call(t,w,"$1e"),t=l.call(t,h,"e"),t=l.call(t,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=l.call(t,p,"e+0$1"),t=l.call(t,v,"e-0$1"),r.alternate&&(t=l.call(t,y,"$1."),t=l.call(t,g,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):f.call(t)}function m(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var A=String.fromCharCode,N=isNaN,_=Array.isArray;function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function U(r){var e,n,t,a,o,c,f,s,l,p,v,y,g;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,s=0;s<r.length;s++)if(t=r[s],"string"==typeof t)c+=t;else{if(e=void 0!==t.precision,!(t=E(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(f=t.mapping),n=t.flags,l=0;l<n.length;l++)switch(a=n.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[f],10),f+=1,N(t.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[f],10),f+=1,N(t.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[f],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!N(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=N(o)?String(t.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=b(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,v=t.width,y=t.padRight,g=void 0,(g=v-p.length)<0?p:p=y?p+m(g):m(g)+p)),c+=t.arg||"",f+=1}return c}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function S(r){var e,n,t,i;for(n=[],i=0,t=k.exec(r);t;)(e=r.slice(i,k.lastIndex-t[0].length)).length&&n.push(e),n.push(I(t)),i=k.lastIndex,t=k.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function x(r){var e,n;if("string"!=typeof r)throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[S(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return U.apply(null,e)}var F=Object.prototype,j=F.toString,T=F.__defineGetter__,O=F.__defineSetter__,V=F.__lookupGetter__,$=F.__lookupSetter__;var G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===j.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===j.call(n))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(V.call(r,e)||$.call(r,e)?(t=r.__proto__,r.__proto__=F,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,e,n.get),o&&O&&O.call(r,e,n.set),r};function H(r,e,n){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var W=Math.floor;function C(r){return W(r)===r&&r>=0}function L(r){return r!=r}var P=Math.ceil;function R(r){return r<0?P(r):W(r)}var M=Number.NEGATIVE_INFINITY,Z=Number.POSITIVE_INFINITY,X=1023,Y=1023,z=-1023,q=-1074;function B(r){return r===Z||r===M}var D=2147483648,J=2147483647;var K="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var Q=Object.prototype.toString;var rr=Object.prototype.hasOwnProperty;var er="function"==typeof Symbol?Symbol:void 0,nr="function"==typeof er?er.toStringTag:"";var tr=K&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return Q.call(r);n=r[nr],a=nr,e=null!=(i=r)&&rr.call(i,a);try{r[nr]=void 0}catch(e){return Q.call(r)}return t=Q.call(r),e?r[nr]=n:delete r[nr],t}:function(r){return Q.call(r)},ir="function"==typeof Uint32Array;var ar="function"==typeof Uint32Array?Uint32Array:null;var or,ur="function"==typeof Uint32Array?Uint32Array:void 0;or=function(){var r,e,n;if("function"!=typeof ar)return!1;try{e=new ar(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(ir&&n instanceof Uint32Array||"[object Uint32Array]"===tr(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var cr=or,fr="function"==typeof Float64Array;var sr="function"==typeof Float64Array?Float64Array:null;var lr,pr="function"==typeof Float64Array?Float64Array:void 0;lr=function(){var r,e,n;if("function"!=typeof sr)return!1;try{e=new sr([1,3.14,-3.14,NaN]),n=e,r=(fr&&n instanceof Float64Array||"[object Float64Array]"===tr(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var vr=lr,yr="function"==typeof Uint8Array;var gr="function"==typeof Uint8Array?Uint8Array:null;var dr,hr="function"==typeof Uint8Array?Uint8Array:void 0;dr=function(){var r,e,n;if("function"!=typeof gr)return!1;try{e=new gr(e=[1,3.14,-3.14,256,257]),n=e,r=(yr&&n instanceof Uint8Array||"[object Uint8Array]"===tr(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var wr=dr,br="function"==typeof Uint16Array;var mr="function"==typeof Uint16Array?Uint16Array:null;var Ar,Nr="function"==typeof Uint16Array?Uint16Array:void 0;Ar=function(){var r,e,n;if("function"!=typeof mr)return!1;try{e=new mr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(br&&n instanceof Uint16Array||"[object Uint16Array]"===tr(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Nr:function(){throw new Error("not implemented")};var _r,Er={uint16:Ar,uint8:wr};(_r=new Er.uint16(1))[0]=4660;var Ur,kr,Ir=52===new Er.uint8(_r.buffer)[0];!0===Ir?(Ur=1,kr=0):(Ur=0,kr=1);var Sr={HIGH:Ur,LOW:kr},xr=new vr(1),Fr=new cr(xr.buffer),jr=Sr.HIGH,Tr=Sr.LOW;function Or(r,e,n,t){return xr[0]=r,e[t]=Fr[jr],e[t+n]=Fr[Tr],e}function Vr(r){return Or(r,[0,0],1,0)}H(Vr,"assign",Or);var $r,Gr,Hr=!0===Ir?1:0,Wr=new vr(1),Cr=new cr(Wr.buffer);function Lr(r){return Wr[0]=r,Cr[Hr]}!0===Ir?($r=1,Gr=0):($r=0,Gr=1);var Pr={HIGH:$r,LOW:Gr},Rr=new vr(1),Mr=new cr(Rr.buffer),Zr=Pr.HIGH,Xr=Pr.LOW;function Yr(r,e){return Mr[Zr]=r,Mr[Xr]=e,Rr[0]}var zr=[0,0];function qr(r,e){var n,t;return Vr.assign(r,zr,1,0),n=zr[0],n&=J,t=Lr(e),Yr(n|=t&=D,zr[1])}var Br=22250738585072014e-324;function Dr(r){return Math.abs(r)}var Jr=4503599627370496;function Kr(r,e,n,t){return L(r)||B(r)?(e[t]=r,e[t+n]=0,e):0!==r&&Dr(r)<Br?(e[t]=r*Jr,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}H((function(r){return Kr(r,[0,0],1,0)}),"assign",Kr);var Qr=2146435072;var re=2220446049250313e-31,ee=2148532223,ne=[0,0],te=[0,0];function ie(r,e){var n,t;return 0===e||0===r||L(r)||B(r)?r:(Kr(r,ne,1,0),r=ne[0],e+=ne[1],e+=function(r){var e=Lr(r);return(e=(e&Qr)>>>20)-X|0}(r),e<q?qr(0,r):e>Y?r<0?M:Z:(e<=z?(e+=52,t=re):t=1,Vr.assign(r,te,1,0),n=te[0],n&=ee,t*Yr(n|=e+X<<20,te[1])))}var ae=.6931471803691238,oe=1.9082149292705877e-10,ue=1.4426950408889634,ce=709.782712893384,fe=-745.1332191019411,se=1/(1<<28),le=-se;function pe(r){var e;return L(r)||r===Z?r:r===M?0:r>ce?Z:r<fe?0:r>le&&r<se?1+r:function(r,e,n){var t,i,a,o;return ie(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-(e=R(r<0?ue*r-.5:ue*r+.5))*ae,e*oe,e)}var ve=!0===Ir?1:0,ye=new vr(1),ge=new cr(ye.buffer);var de=.6931471803691238,he=1.9082149292705877e-10,we=0x40000000000000,be=.3333333333333333,me=1048575,Ae=2146435072,Ne=1048576,_e=1072693248;function Ee(r){var e,n,t,i,a,o,u,c,f,s,l,p;return 0===r?M:L(r)||r<0?NaN:(a=0,(n=Lr(r))<Ne&&(a-=54,n=Lr(r*=we)),n>=Ae?r+r:(a+=(n>>20)-X|0,a+=(c=(n&=me)+614244&1048576|0)>>20|0,u=(r=function(r,e){return ye[0]=r,ge[ve]=e>>>0,ye[0]}(r,n|c^_e))-1,(me&2+n)<3?0===u?0===a?0:a*de+a*he:(o=u*u*(.5-be*u),0===a?u-o:a*de-(o-a*he-u)):(c=n-398458|0,f=440401-n|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(c|=f)>0?(e=.5*u*u,0===a?u-(e-s*(e+o)):a*de-(e-(s*(e+o)+a*he)-u)):0===a?u-s*(u-o):a*de-(s*(u-o)-a*he-u))))}function Ue(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))}var ke=-.16666666666666632,Ie=.00833333333332249,Se=-.0001984126982985795,xe=27557313707070068e-22,Fe=-2.5050760253406863e-8,je=1.58969099521155e-10;function Te(r,e){var n,t,i;return n=Ie+(i=r*r)*(Se+i*xe)+i*(i*i)*(Fe+i*je),t=i*r,0===e?r+t*(ke+i*n):r-(i*(.5*e-t*n)-e-t*ke)}var Oe=1048575,Ve=!0===Ir?0:1,$e=new vr(1),Ge=new cr($e.buffer);function He(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var We=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Ce=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Le=16777216,Pe=5.960464477539063e-8,Re=He(20),Me=He(20),Ze=He(20),Xe=He(20);function Ye(r,e,n,t,i,a,o,u,c){var f,s,l,p,v,y,g,d,h;for(p=a,h=t[n],d=n,v=0;d>0;v++)s=Pe*h|0,Xe[v]=h-Le*s|0,h=t[d-1]+s,d-=1;if(h=ie(h,i),h-=8*W(.125*h),h-=g=0|h,l=0,i>0?(g+=v=Xe[n-1]>>24-i,Xe[n-1]-=v<<24-i,l=Xe[n-1]>>23-i):0===i?l=Xe[n-1]>>23:h>=.5&&(l=2),l>0){for(g+=1,f=0,v=0;v<n;v++)d=Xe[v],0===f?0!==d&&(f=1,Xe[v]=16777216-d):Xe[v]=16777215-d;if(i>0)switch(i){case 1:Xe[n-1]&=8388607;break;case 2:Xe[n-1]&=4194303}2===l&&(h=1-h,0!==f&&(h-=ie(1,i)))}if(0===h){for(d=0,v=n-1;v>=a;v--)d|=Xe[v];if(0===d){for(y=1;0===Xe[a-y];y++);for(v=n+1;v<=n+y;v++){for(c[u+v]=We[o+v],s=0,d=0;d<=u;d++)s+=r[d]*c[u+(v-d)];t[v]=s}return Ye(r,e,n+=y,t,i,a,o,u,c)}}if(0===h)for(n-=1,i-=24;0===Xe[n];)n-=1,i-=24;else(h=ie(h,-i))>=Le?(s=Pe*h|0,Xe[n]=h-Le*s|0,i+=24,Xe[n+=1]=s):Xe[n]=0|h;for(s=ie(1,i),v=n;v>=0;v--)t[v]=s*Xe[v],s*=Pe;for(v=n;v>=0;v--){for(s=0,y=0;y<=p&&y<=n-v;y++)s+=Ce[y]*t[v+y];Ze[n-v]=s}for(s=0,v=n;v>=0;v--)s+=Ze[v];for(e[0]=0===l?s:-s,s=Ze[0]-s,v=1;v<=n;v++)s+=Ze[v];return e[1]=0===l?s:-s,7&g}function ze(r,e,n,t){var i,a,o,u,c,f,s;for(4,(a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),f=a-(o=t-1),s=o+4,c=0;c<=s;c++)Re[c]=f<0?0:We[f],f+=1;for(c=0;c<=4;c++){for(i=0,f=0;f<=o;f++)i+=r[f]*Re[o+(c-f)];Me[c]=i}return 4,Ye(r,e,4,Me,u,4,a,o,Re)}var qe=Math.round,Be=.6366197723675814,De=1.5707963267341256,Je=6077100506506192e-26,Ke=6077100506303966e-26,Qe=20222662487959506e-37,rn=20222662487111665e-37,en=84784276603689e-45,nn=2047;function tn(r,e,n){var t,i,a,o,u;return a=r-(t=qe(r*Be))*De,o=t*Je,u=e>>20|0,n[0]=a-o,u-(Lr(n[0])>>20&nn)>16&&(o=t*Qe-((i=a)-(a=i-(o=t*Ke))-o),n[0]=a-o,u-(Lr(n[0])>>20&nn)>49&&(o=t*en-((i=a)-(a=i-(o=t*rn))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var an=0,on=16777216,un=1.5707963267341256,cn=6077100506506192e-26,fn=2*cn,sn=3*cn,ln=4*cn,pn=598523,vn=1072243195,yn=1073928572,gn=1074752122,dn=1074977148,hn=1075183036,wn=1075388923,bn=1075594811,mn=1094263291,An=[0,0,0],Nn=[0,0];function _n(r,e){var n,t,i,a,o,u,c;if((i=Lr(r)&J|0)<=vn)return e[0]=r,e[1]=0,0;if(i<=gn)return(i&Oe)===pn?tn(r,i,e):i<=yn?r>0?(c=r-un,e[0]=c-cn,e[1]=c-e[0]-cn,1):(c=r+un,e[0]=c+cn,e[1]=c-e[0]+cn,-1):r>0?(c=r-2*un,e[0]=c-fn,e[1]=c-e[0]-fn,2):(c=r+2*un,e[0]=c+fn,e[1]=c-e[0]+fn,-2);if(i<=bn)return i<=hn?i===dn?tn(r,i,e):r>0?(c=r-3*un,e[0]=c-sn,e[1]=c-e[0]-sn,3):(c=r+3*un,e[0]=c+sn,e[1]=c-e[0]+sn,-3):i===wn?tn(r,i,e):r>0?(c=r-4*un,e[0]=c-ln,e[1]=c-e[0]-ln,4):(c=r+4*un,e[0]=c+ln,e[1]=c-e[0]+ln,-4);if(i<mn)return tn(r,i,e);if(i>=Qr)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return $e[0]=r,Ge[Ve]}(r),c=Yr(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)An[o]=0|c,c=(c-An[o])*on;for(An[2]=c,a=3;An[a-1]===an;)a-=1;return u=ze(An,Nn,t,a),r<0?(e[0]=-Nn[0],e[1]=-Nn[1],-u):(e[0]=Nn[0],e[1]=Nn[1],u)}var En=[0,0],Un=2147483647,kn=1072243195,In=1044381696,Sn=2146435072;function xn(r){var e;if(e=Lr(r),(e&=Un)<=kn)return e<In?1:Ue(r,0);if(e>=Sn)return NaN;switch(3&_n(r,En)){case 0:return Ue(En[0],En[1]);case 1:return-Te(En[0],En[1]);case 2:return-Ue(En[0],En[1]);default:return Te(En[0],En[1])}}var Fn=1072243195,jn=1045430272,Tn=[0,0];function On(r){var e;if(e=Lr(r),(e&=J)<=Fn)return e<jn?r:Te(r,0);if(e>=Qr)return NaN;switch(3&_n(r,Tn)){case 0:return Te(Tn[0],Tn[1]);case 1:return Ue(Tn[0],Tn[1]);case 2:return-Te(Tn[0],Tn[1]);default:return-Ue(Tn[0],Tn[1])}}var Vn=3.141592653589793;var $n=.07721566490153287,Gn=.3224670334241136,Hn=1,Wn=-.07721566490153287,Cn=.48383612272381005,Ln=-.1475877229945939,Pn=.06462494023913339,Rn=-.07721566490153287,Mn=1,Zn=.4189385332046727,Xn=1.4616321449683622,Yn=4503599627370496,zn=0x400000000000000,qn=8470329472543003e-37,Bn=1.4616321449683622,Dn=-.12148629053584961,Jn=-3638676997039505e-33;function Kn(r){var e,n,t,i,a,o,u,c,f,s,l,p,v;if(L(r)||B(r))return r;if(0===r)return Z;if(r<0?(e=!0,r=-r):e=!1,r<qn)return-Ee(r);if(e){if(r>=Yn)return Z;if(f=function(r){var e,n;return L(r)||B(r)?NaN:0===(e=Dr(n=r%2))||1===e?qr(0,n):e<.25?On(Vn*n):e<.75?qr(xn(Vn*(e=.5-e)),n):e<1.25?(n=qr(1,n)-n,On(Vn*n)):e<1.75?-qr(xn(Vn*(e-=1.5)),n):(n-=qr(2,n),On(Vn*n))}(r),0===f)return Z;n=Ee(Vn/Dr(f*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(v=-Ee(r),r>=Xn-1+.27?(l=1-r,t=0):r>=Xn-1-.27?(l=r-(Bn-1),t=1):(l=r,t=2)):(v=0,r>=Xn+.27?(l=2-r,t=0):r>=Xn-.27?(l=r-Bn,t=1):(l=r-1,t=2)),t){case 0:o=$n+(p=l*l)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(p),a=p*(Gn+p*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(p)),v+=(u=l*o+a)-.5*l;break;case 1:o=Cn+(s=(p=l*l)*l)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(s),a=Ln+s*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(s),i=Pn+s*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(s),v+=Dn+(u=p*o-(Jn-s*(a+l*i)));break;case 2:o=l*(Rn+l*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(l)),a=Mn+l*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(l),v+=-.5*l+o/a}else if(r<8)switch(u=(l=r-(t=R(r)))*(Wn+l*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(l)),c=Hn+l*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(l),v=.5*l+u/c,p=1,t){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:v+=Ee(p*=l+2)}else r<zn?(f=Ee(r),s=Zn+(p=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(l=p*p),v=(r-.5)*(f-1)+s):v=r*(Ee(r)-1);return e&&(v=n-v),v}function Qn(r){return function(r){return W(r)===r&&r<0}(r)?NaN:Kn(r+1)}function rt(r,e){return L(r)||L(e)?NaN:r===Z||e===Z?Z:r===e&&0===r?function(r){return 0===r&&1/r===Z}(r)?r:e:r>e?r:e}function et(r,e){return L(r)||L(e)?NaN:r===M||e===M?M:r===e&&0===r?function(r){return 0===r&&1/r===M}(r)?r:e:r<e?r:e}function nt(r,e,n,t){var i,a,o,u;return L(r)||L(e)||L(n)||L(t)||!C(e)||!C(n)||!C(t)||e===Z||n===Z||n>e||t>e?NaN:(u=rt(0,t+n-e),o=et(n,t),C(r)&&u<=r&&r<=o?(a=Qn(t)+Qn(n)+Qn(e-t)+Qn(e-n),i=Qn(e)+Qn(r)+Qn(t-r),pe(a-(i+=Qn(n-r)+Qn(e-n+r-t)))):0)}function tt(r,e,n){var t,i,a;return L(r)||L(e)||L(n)||!C(r)||!C(e)||!C(n)||r===Z||e===Z||e>r||n>r?(a=NaN,function(){return a}):(i=rt(0,n+e-r),t=et(e,n),function(a){var o,u;if(L(a))return NaN;if(C(a)&&i<=a&&a<=t)return u=Qn(n)+Qn(e)+Qn(r-n)+Qn(r-e),o=Qn(r)+Qn(a)+Qn(n-a),pe(u-(o+=Qn(e-a)+Qn(r-e+a-n)));return 0})}H(nt,"factory",tt);export{nt as default,tt as factory};
//# sourceMappingURL=mod.js.map
