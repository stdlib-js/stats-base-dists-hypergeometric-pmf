// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,t=Object.defineProperty,e=Object.prototype,u=e.toString,o=e.__defineGetter__,a=e.__defineSetter__,f=e.__lookupGetter__,i=e.__lookupSetter__;n=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,v,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(r,n)||i.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),v="get"in t,y="set"in t,l&&(v||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&o&&o.call(r,n,t.get),y&&a&&a.call(r,n,t.set),r};var c=n;var l=Math.floor;function v(r){return l(r)===r&&r>=0}function y(r){return r!=r}var p=Math.ceil;function s(r){return r<0?p(r):l(r)}var b=Number.NEGATIVE_INFINITY,w=Number.POSITIVE_INFINITY;function N(r){return r===w||r===b}var A="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var _=Object.prototype.toString;var h=Object.prototype.hasOwnProperty;var d,m="function"==typeof Symbol?Symbol.toStringTag:"";d=A&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,o;if(null==r)return _.call(r);t=r[m],o=m,n=null!=(u=r)&&h.call(u,o);try{r[m]=void 0}catch(n){return _.call(r)}return e=_.call(r),n?r[m]=t:delete r[m],e}:function(r){return _.call(r)};var U=d,g="function"==typeof Uint32Array;var j="function"==typeof Uint32Array?Uint32Array:null;var I,O="function"==typeof Uint32Array?Uint32Array:void 0;I=function(){var r,n,t;if("function"!=typeof j)return!1;try{n=new j(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(g&&t instanceof Uint32Array||"[object Uint32Array]"===U(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?O:function(){throw new Error("not implemented")};var S=I,E="function"==typeof Float64Array;var F="function"==typeof Float64Array?Float64Array:null;var H,T="function"==typeof Float64Array?Float64Array:void 0;H=function(){var r,n,t;if("function"!=typeof F)return!1;try{n=new F([1,3.14,-3.14,NaN]),t=n,r=(E&&t instanceof Float64Array||"[object Float64Array]"===U(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?T:function(){throw new Error("not implemented")};var G=H,P="function"==typeof Uint8Array;var k="function"==typeof Uint8Array?Uint8Array:null;var x,L="function"==typeof Uint8Array?Uint8Array:void 0;x=function(){var r,n,t;if("function"!=typeof k)return!1;try{n=new k(n=[1,3.14,-3.14,256,257]),t=n,r=(P&&t instanceof Uint8Array||"[object Uint8Array]"===U(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?L:function(){throw new Error("not implemented")};var M=x,V="function"==typeof Uint16Array;var W="function"==typeof Uint16Array?Uint16Array:null;var Y,C="function"==typeof Uint16Array?Uint16Array:void 0;Y=function(){var r,n,t;if("function"!=typeof W)return!1;try{n=new W(n=[1,3.14,-3.14,65536,65537]),t=n,r=(V&&t instanceof Uint16Array||"[object Uint16Array]"===U(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?C:function(){throw new Error("not implemented")};var q,z={uint16:Y,uint8:M};(q=new z.uint16(1))[0]=4660;var B,D,J=52===new z.uint8(q.buffer)[0];!0===J?(B=1,D=0):(B=0,D=1);var K={HIGH:B,LOW:D},Q=new G(1),R=new S(Q.buffer),X=K.HIGH,Z=K.LOW;function $(r,n){return Q[0]=n,r[0]=R[X],r[1]=R[Z],r}function rr(r,n){return 1===arguments.length?$([0,0],r):$(r,n)}var nr,tr,er=!0===J?1:0,ur=new G(1),or=new S(ur.buffer);function ar(r){return ur[0]=r,or[er]}!0===J?(nr=1,tr=0):(nr=0,tr=1);var fr={HIGH:nr,LOW:tr},ir=new G(1),cr=new S(ir.buffer),lr=fr.HIGH,vr=fr.LOW;function yr(r,n){return cr[lr]=r,cr[vr]=n,ir[0]}var pr=[0,0];function sr(r,n){var t,e;return rr(pr,r),t=pr[0],t&=2147483647,e=ar(n),yr(t|=e&=2147483648,pr[1])}function br(r){return Math.abs(r)}function wr(r,n){return y(n)||N(n)?(r[0]=n,r[1]=0,r):0!==n&&br(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var Nr=[0,0],Ar=[0,0];function _r(r,n){var t,e;return 0===n||0===r||y(r)||N(r)?r:(function(r,n){1===arguments.length?wr([0,0],r):wr(r,n)}(Nr,r),n+=Nr[1],n+=function(r){var n=ar(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Nr[0]),n<-1074?sr(0,r):n>1023?r<0?b:w:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,rr(Ar,r),t=Ar[0],t&=2148532223,e*yr(t|=n+1023<<20,Ar[1])))}function hr(r){var n;return y(r)||r===w?r:r===b?0:r>709.782712893384?w:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,u,o,a;return _r(1-(n-(e=r-n)*(o=e-(u=e*e)*(0===(a=u)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-.6931471803691238*(n=s(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}var dr=!0===J?1:0,mr=new G(1),Ur=new S(mr.buffer);var gr=.6931471803691238,jr=1.9082149292705877e-10;function Ir(r){var n,t,e,u,o,a,f,i,c,l,v,p;return 0===r?b:y(r)||r<0?NaN:(o=0,(t=ar(r))<1048576&&(o-=54,t=ar(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-1023|0,o+=(i=(t&=1048575)+614244&1048576|0)>>20|0,f=(r=function(r,n){return mr[0]=r,Ur[dr]=n>>>0,mr[0]}(r,t|1072693248^i))-1,(1048575&2+t)<3?0===f?0===o?0:o*gr+o*jr:(a=f*f*(.5-.3333333333333333*f),0===o?f-a:o*gr-(a-o*jr-f)):(i=t-398458|0,c=440401-t|0,u=(v=(p=(l=f/(2+f))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(v),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(v),a=e+u,(i|=c)>0?(n=.5*f*f,0===o?f-(n-l*(n+a)):o*gr-(n-(l*(n+a)+o*jr)-f)):0===o?f-l*(f-a):o*gr-(l*(f-a)-o*jr-f))))}function Or(r,n){var t,e,u,o;return u=(o=r*r)*o,e=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(u=1-(t=.5*o))+(1-u-t+(o*e-r*n))}var Sr=-.16666666666666632;function Er(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(Sr+u*t):r-(u*(.5*n-e*t)-n-e*Sr)}var Fr=!0===J?0:1,Hr=new G(1),Tr=new S(Hr.buffer);function Gr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Pr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],kr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],xr=5.960464477539063e-8,Lr=Gr(20),Mr=Gr(20),Vr=Gr(20),Wr=Gr(20);function Yr(r,n,t,e,u,o,a,f,i){var c,v,y,p,s,b,w,N,A;for(p=o,A=e[t],N=t,s=0;N>0;s++)v=xr*A|0,Wr[s]=A-16777216*v|0,A=e[N-1]+v,N-=1;if(A=_r(A,u),A-=8*l(.125*A),A-=w=0|A,y=0,u>0?(w+=s=Wr[t-1]>>24-u,Wr[t-1]-=s<<24-u,y=Wr[t-1]>>23-u):0===u?y=Wr[t-1]>>23:A>=.5&&(y=2),y>0){for(w+=1,c=0,s=0;s<t;s++)N=Wr[s],0===c?0!==N&&(c=1,Wr[s]=16777216-N):Wr[s]=16777215-N;if(u>0)switch(u){case 1:Wr[t-1]&=8388607;break;case 2:Wr[t-1]&=4194303}2===y&&(A=1-A,0!==c&&(A-=_r(1,u)))}if(0===A){for(N=0,s=t-1;s>=o;s--)N|=Wr[s];if(0===N){for(b=1;0===Wr[o-b];b++);for(s=t+1;s<=t+b;s++){for(i[f+s]=Pr[a+s],v=0,N=0;N<=f;N++)v+=r[N]*i[f+(s-N)];e[s]=v}return Yr(r,n,t+=b,e,u,o,a,f,i)}}if(0===A)for(t-=1,u-=24;0===Wr[t];)t-=1,u-=24;else(A=_r(A,-u))>=16777216?(v=xr*A|0,Wr[t]=A-16777216*v|0,u+=24,Wr[t+=1]=v):Wr[t]=0|A;for(v=_r(1,u),s=t;s>=0;s--)e[s]=v*Wr[s],v*=xr;for(s=t;s>=0;s--){for(v=0,b=0;b<=p&&b<=t-s;b++)v+=kr[b]*e[s+b];Vr[t-s]=v}for(v=0,s=t;s>=0;s--)v+=Vr[s];for(n[0]=0===y?v:-v,v=Vr[0]-v,s=1;s<=t;s++)v+=Vr[s];return n[1]=0===y?v:-v,7&w}function Cr(r,n,t,e){var u,o,a,f,i,c,l;for(4,(o=(t-3)/24|0)<0&&(o=0),f=t-24*(o+1),c=o-(a=e-1),l=a+4,i=0;i<=l;i++)Lr[i]=c<0?0:Pr[c],c+=1;for(i=0;i<=4;i++){for(u=0,c=0;c<=a;c++)u+=r[c]*Lr[a+(i-c)];Mr[i]=u}return 4,Yr(r,n,4,Mr,f,4,o,a,Lr)}var qr=Math.round;function zr(r,n,t){var e,u,o,a,f;return o=r-1.5707963267341256*(e=qr(.6366197723675814*r)),a=6077100506506192e-26*e,f=n>>20|0,t[0]=o-a,f-(ar(t[0])>>20&2047)>16&&(a=20222662487959506e-37*e-((u=o)-(o=u-(a=6077100506303966e-26*e))-a),t[0]=o-a,f-(ar(t[0])>>20&2047)>49&&(a=84784276603689e-45*e-((u=o)-(o=u-(a=20222662487111665e-37*e))-a),t[0]=o-a)),t[1]=o-t[0]-a,e}var Br=1.5707963267341256,Dr=6077100506506192e-26,Jr=2*Dr,Kr=4*Dr,Qr=[0,0,0],Rr=[0,0];function Xr(r,n){var t,e,u,o,a,f,i;if((u=2147483647&ar(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?zr(r,u,n):u<=1073928572?r>0?(i=r-Br,n[0]=i-Dr,n[1]=i-n[0]-Dr,1):(i=r+Br,n[0]=i+Dr,n[1]=i-n[0]+Dr,-1):r>0?(i=r-2*Br,n[0]=i-Jr,n[1]=i-n[0]-Jr,2):(i=r+2*Br,n[0]=i+Jr,n[1]=i-n[0]+Jr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?zr(r,u,n):r>0?(i=r-3*Br,n[0]=i-1.8231301519518578e-10,n[1]=i-n[0]-1.8231301519518578e-10,3):(i=r+3*Br,n[0]=i+1.8231301519518578e-10,n[1]=i-n[0]+1.8231301519518578e-10,-3):1075388923===u?zr(r,u,n):r>0?(i=r-4*Br,n[0]=i-Kr,n[1]=i-n[0]-Kr,4):(i=r+4*Br,n[0]=i+Kr,n[1]=i-n[0]+Kr,-4);if(u<1094263291)return zr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return Hr[0]=r,Tr[Fr]}(r),i=yr(u-((e=(u>>20)-1046)<<20|0),t),a=0;a<2;a++)Qr[a]=0|i,i=16777216*(i-Qr[a]);for(Qr[2]=i,o=3;0===Qr[o-1];)o-=1;return f=Cr(Qr,Rr,e,o),r<0?(n[0]=-Rr[0],n[1]=-Rr[1],-f):(n[0]=Rr[0],n[1]=Rr[1],f)}var Zr=[0,0];function $r(r){var n;if(n=ar(r),(n&=2147483647)<=1072243195)return n<1044381696?1:Or(r,0);if(n>=2146435072)return NaN;switch(3&Xr(r,Zr)){case 0:return Or(Zr[0],Zr[1]);case 1:return-Er(Zr[0],Zr[1]);case 2:return-Or(Zr[0],Zr[1]);default:return Er(Zr[0],Zr[1])}}var rn=[0,0];function nn(r){var n;if(n=ar(r),(n&=2147483647)<=1072243195)return n<1045430272?r:Er(r,0);if(n>=2146435072)return NaN;switch(3&Xr(r,rn)){case 0:return Er(rn[0],rn[1]);case 1:return Or(rn[0],rn[1]);case 2:return-Er(rn[0],rn[1]);default:return-Or(rn[0],rn[1])}}var tn=3.141592653589793;var en=1.4616321449683622,un=1.4616321449683622;function on(r){var n,t,e,u,o,a,f,i,c,l,v,p,b;if(y(r)||N(r))return r;if(0===r)return w;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-Ir(r);if(n){if(r>=4503599627370496)return w;if(c=function(r){var n,t;return y(r)||N(r)?NaN:0===(n=br(t=r%2))||1===n?sr(0,t):n<.25?nn(tn*t):n<.75?sr($r(tn*(n=.5-n)),t):n<1.25?(t=sr(1,t)-t,nn(tn*t)):n<1.75?-sr($r(tn*(n-=1.5)),t):(t-=sr(2,t),nn(tn*t))}(r),0===c)return w;t=Ir(tn/br(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(b=-Ir(r),r>=en-1+.27?(v=1-r,e=0):r>=en-1-.27?(v=r-(un-1),e=1):(v=r,e=2)):(b=0,r>=en+.27?(v=2-r,e=0):r>=en-.27?(v=r-un,e=1):(v=r-1,e=2)),e){case 0:a=.07721566490153287+(p=v*v)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(p),o=p*(.3224670334241136+p*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(p)),b+=(f=v*a+o)-.5*v;break;case 1:a=.48383612272381005+(l=(p=v*v)*v)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(l),o=l*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(l)-.1475877229945939,u=.06462494023913339+l*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(l),b+=-.12148629053584961+(f=p*a-(-3638676997039505e-33-l*(o+v*u)));break;case 2:a=v*(v*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(v)-.07721566490153287),o=1+v*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(v),b+=-.5*v+a/o}else if(r<8)switch(f=(v=r-(e=s(r)))*(v*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(v)-.07721566490153287),i=1+v*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(v),b=.5*v+f/i,p=1,e){case 7:p*=v+6;case 6:p*=v+5;case 5:p*=v+4;case 4:p*=v+3;case 3:b+=Ir(p*=v+2)}else r<0x400000000000000?(c=Ir(r),l=.4189385332046727+(p=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(v=p*p),b=(r-.5)*(c-1)+l):b=r*(Ir(r)-1);return n&&(b=t-b),b}function an(r){return function(r){return l(r)===r&&r<0}(r)?NaN:on(r+1)}function fn(r){return 0===r&&1/r===w}function cn(r,n){var t,e,u,o;if(2===(t=arguments.length))return y(r)||y(n)?NaN:r===w||n===w?w:r===n&&0===r?fn(r)?r:n:r>n?r:n;for(e=b,o=0;o<t;o++){if(y(u=arguments[o])||u===w)return u;(u>e||u===e&&0===u&&fn(u))&&(e=u)}return e}function ln(r){return 0===r&&1/r===b}function vn(r,n){var t,e,u,o;if(2===(t=arguments.length))return y(r)||y(n)?NaN:r===b||n===b?b:r===n&&0===r?ln(r)?r:n:r<n?r:n;for(e=w,o=0;o<t;o++){if(y(u=arguments[o])||u===b)return u;(u<e||u===e&&0===u&&ln(u))&&(e=u)}return e}function yn(r,n,t,e){var u,o,a,f;return y(r)||y(n)||y(t)||y(e)||!v(n)||!v(t)||!v(e)||n===w||t===w||t>n||e>n?NaN:(f=cn(0,e+t-n),a=vn(t,e),v(r)&&f<=r&&r<=a?(o=an(e)+an(t)+an(n-e)+an(n-t),u=an(n)+an(r)+an(e-r),hr(o-(u+=an(t-r)+an(n-t+r-e)))):0)}function pn(r,n,t){var e,u,o;return y(r)||y(n)||y(t)||!v(r)||!v(n)||!v(t)||r===w||n===w||n>r||t>r?(o=NaN,function(){return o}):(u=cn(0,t+n-r),e=vn(n,t),function(o){var a,f;if(y(o))return NaN;if(v(o)&&u<=o&&o<=e)return f=an(t)+an(n)+an(r-t)+an(r-n),a=an(r)+an(o)+an(t-o),a+=an(n-o)+an(r-n+o-t),hr(f-a);return 0})}c(yn,"factory",{configurable:!1,enumerable:!1,writable:!1,value:pn});export{yn as default,pn as factory};
//# sourceMappingURL=mod.js.map
