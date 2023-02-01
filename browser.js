// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,u=t.__defineSetter__,i=t.__lookupGetter__,f=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(i.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,v="set"in a,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,a.get),v&&u&&u.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var l=Math.floor;function y(r){return l(r)===r&&r>=0}function v(r){return r!=r}var s=Math.ceil;function p(r){return r<0?s(r):l(r)}var b=Number.NEGATIVE_INFINITY,w=Number.POSITIVE_INFINITY,d=1023;function N(r){return r===w||r===b}var A,h="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),_=Object.prototype.toString,m=Object.prototype.hasOwnProperty,g="function"==typeof Symbol?Symbol.toStringTag:"",U=h&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return _.call(r);t=r[g],u=g,n=null!=(o=r)&&m.call(o,u);try{r[g]=void 0}catch(n){return _.call(r)}return e=_.call(r),n?r[g]=t:delete r[g],e}:function(r){return _.call(r)},j="function"==typeof Uint32Array,I="function"==typeof Uint32Array?Uint32Array:null,O="function"==typeof Uint32Array?Uint32Array:void 0;A=function(){var r,n,t;if("function"!=typeof I)return!1;try{n=new I(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(j&&t instanceof Uint32Array||"[object Uint32Array]"===U(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?O:function(){throw new Error("not implemented")};var S,E=A,F="function"==typeof Float64Array,T="function"==typeof Float64Array?Float64Array:null,H="function"==typeof Float64Array?Float64Array:void 0;S=function(){var r,n,t;if("function"!=typeof T)return!1;try{n=new T([1,3.14,-3.14,NaN]),t=n,r=(F&&t instanceof Float64Array||"[object Float64Array]"===U(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?H:function(){throw new Error("not implemented")};var G,P=S,k="function"==typeof Uint8Array,x="function"==typeof Uint8Array?Uint8Array:null,L="function"==typeof Uint8Array?Uint8Array:void 0;G=function(){var r,n,t;if("function"!=typeof x)return!1;try{n=new x(n=[1,3.14,-3.14,256,257]),t=n,r=(k&&t instanceof Uint8Array||"[object Uint8Array]"===U(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?L:function(){throw new Error("not implemented")};var M,V=G,W="function"==typeof Uint16Array,Y="function"==typeof Uint16Array?Uint16Array:null,C="function"==typeof Uint16Array?Uint16Array:void 0;M=function(){var r,n,t;if("function"!=typeof Y)return!1;try{n=new Y(n=[1,3.14,-3.14,65536,65537]),t=n,r=(W&&t instanceof Uint16Array||"[object Uint16Array]"===U(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?C:function(){throw new Error("not implemented")};var q,z={uint16:M,uint8:V};(q=new z.uint16(1))[0]=4660;var B,D,J=52===new z.uint8(q.buffer)[0];!0===J?(B=1,D=0):(B=0,D=1);var K={HIGH:B,LOW:D},Q=new P(1),R=new E(Q.buffer),X=K.HIGH,Z=K.LOW;function $(r,n,t,e){return Q[0]=r,n[e]=R[X],n[e+t]=R[Z],n}function rr(r){return $(r,[0,0],1,0)}c(rr,"assign",$);var nr,tr,er=!0===J?1:0,or=new P(1),ur=new E(or.buffer);function ir(r){return or[0]=r,ur[er]}!0===J?(nr=1,tr=0):(nr=0,tr=1);var fr={HIGH:nr,LOW:tr},ar=new P(1),cr=new E(ar.buffer),lr=fr.HIGH,yr=fr.LOW;function vr(r,n){return cr[lr]=r,cr[yr]=n,ar[0]}var sr=[0,0];function pr(r,n){var t,e;return rr.assign(r,sr,1,0),t=sr[0],t&=2147483647,e=ir(n),vr(t|=e&=2147483648,sr[1])}function br(r){return Math.abs(r)}function wr(r,n,t,e){return v(r)||N(r)?(n[e]=r,n[e+t]=0,n):0!==r&&br(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return wr(r,[0,0],1,0)}),"assign",wr);var dr=[0,0],Nr=[0,0];function Ar(r,n){var t,e;return 0===n||0===r||v(r)||N(r)?r:(wr(r,dr,1,0),n+=dr[1],n+=function(r){var n=ir(r);return(n=(2146435072&n)>>>20)-d|0}(r=dr[0]),n<-1074?pr(0,r):n>1023?r<0?b:w:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,rr.assign(r,Nr,1,0),t=Nr[0],t&=2148532223,e*vr(t|=n+d<<20,Nr[1])))}var hr=1.4426950408889634,_r=1/(1<<28);function mr(r){var n;return v(r)||r===w?r:r===b?0:r>709.782712893384?w:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<_r?1+r:function(r,n,t){var e,o,u,i;return Ar(1-(n-(e=r-n)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),t)}(r-.6931471803691238*(n=p(r<0?hr*r-.5:hr*r+.5)),1.9082149292705877e-10*n,n)}var gr=!0===J?1:0,Ur=new P(1),jr=new E(Ur.buffer),Ir=.6931471803691238,Or=1.9082149292705877e-10,Sr=1048575;function Er(r){var n,t,e,o,u,i,f,a,c,l,y,s;return 0===r?b:v(r)||r<0?NaN:(u=0,(t=ir(r))<1048576&&(u-=54,t=ir(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-d|0,u+=(a=614244+(t&=Sr)&1048576|0)>>20|0,f=(r=function(r,n){return Ur[0]=r,jr[gr]=n>>>0,Ur[0]}(r,t|1072693248^a))-1,(Sr&2+t)<3?0===f?0===u?0:u*Ir+u*Or:(i=f*f*(.5-.3333333333333333*f),0===u?f-i:u*Ir-(i-u*Or-f)):(a=t-398458|0,c=440401-t|0,o=(y=(s=(l=f/(2+f))*l)*s)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),e=s*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),i=e+o,(a|=c)>0?(n=.5*f*f,0===u?f-(n-l*(n+i)):u*Ir-(n-(l*(n+i)+u*Or)-f)):0===u?f-l*(f-i):u*Ir-(l*(f-i)-u*Or-f))))}function Fr(r,n){var t,e,o,u;return o=(u=r*r)*u,e=u*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(u),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(u),(o=1-(t=.5*u))+(1-o-t+(u*e-r*n))}var Tr=-.16666666666666632;function Hr(r,n){var t,e,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===n?r+e*(Tr+o*t):r-(o*(.5*n-e*t)-n-e*Tr)}var Gr=!0===J?0:1,Pr=new P(1),kr=new E(Pr.buffer);function xr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Lr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Mr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Vr=16777216,Wr=5.960464477539063e-8,Yr=xr(20),Cr=xr(20),qr=xr(20),zr=xr(20);function Br(r,n,t,e,o,u,i,f,a){var c,y,v,s,p,b,w,d,N;for(s=u,N=e[t],d=t,p=0;d>0;p++)y=Wr*N|0,zr[p]=N-Vr*y|0,N=e[d-1]+y,d-=1;if(N=Ar(N,o),N-=8*l(.125*N),N-=w=0|N,v=0,o>0?(w+=p=zr[t-1]>>24-o,zr[t-1]-=p<<24-o,v=zr[t-1]>>23-o):0===o?v=zr[t-1]>>23:N>=.5&&(v=2),v>0){for(w+=1,c=0,p=0;p<t;p++)d=zr[p],0===c?0!==d&&(c=1,zr[p]=16777216-d):zr[p]=16777215-d;if(o>0)switch(o){case 1:zr[t-1]&=8388607;break;case 2:zr[t-1]&=4194303}2===v&&(N=1-N,0!==c&&(N-=Ar(1,o)))}if(0===N){for(d=0,p=t-1;p>=u;p--)d|=zr[p];if(0===d){for(b=1;0===zr[u-b];b++);for(p=t+1;p<=t+b;p++){for(a[f+p]=Lr[i+p],y=0,d=0;d<=f;d++)y+=r[d]*a[f+(p-d)];e[p]=y}return Br(r,n,t+=b,e,o,u,i,f,a)}}if(0===N)for(t-=1,o-=24;0===zr[t];)t-=1,o-=24;else(N=Ar(N,-o))>=Vr?(y=Wr*N|0,zr[t]=N-Vr*y|0,o+=24,zr[t+=1]=y):zr[t]=0|N;for(y=Ar(1,o),p=t;p>=0;p--)e[p]=y*zr[p],y*=Wr;for(p=t;p>=0;p--){for(y=0,b=0;b<=s&&b<=t-p;b++)y+=Mr[b]*e[p+b];qr[t-p]=y}for(y=0,p=t;p>=0;p--)y+=qr[p];for(n[0]=0===v?y:-y,y=qr[0]-y,p=1;p<=t;p++)y+=qr[p];return n[1]=0===v?y:-y,7&w}function Dr(r,n,t,e){var o,u,i,f,a,c,l;for((u=(t-3)/24|0)<0&&(u=0),f=t-24*(u+1),c=u-(i=e-1),l=i+4,a=0;a<=l;a++)Yr[a]=c<0?0:Lr[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=i;c++)o+=r[c]*Yr[i+(a-c)];Cr[a]=o}return Br(r,n,4,Cr,f,4,u,i,Yr)}var Jr=Math.round;function Kr(r,n,t){var e,o,u,i,f;return u=r-1.5707963267341256*(e=Jr(.6366197723675814*r)),i=6077100506506192e-26*e,f=n>>20|0,t[0]=u-i,f-(ir(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=u)-(u=o-(i=6077100506303966e-26*e))-i),t[0]=u-i,f-(ir(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=u)-(u=o-(i=20222662487111665e-37*e))-i),t[0]=u-i)),t[1]=u-t[0]-i,e}var Qr=1.5707963267341256,Rr=6077100506506192e-26,Xr=2*Rr,Zr=3*Rr,$r=4*Rr,rn=[0,0,0],nn=[0,0];function tn(r,n){var t,e,o,u,i,f,a;if((o=2147483647&ir(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Kr(r,o,n):o<=1073928572?r>0?(a=r-Qr,n[0]=a-Rr,n[1]=a-n[0]-Rr,1):(a=r+Qr,n[0]=a+Rr,n[1]=a-n[0]+Rr,-1):r>0?(a=r-2*Qr,n[0]=a-Xr,n[1]=a-n[0]-Xr,2):(a=r+2*Qr,n[0]=a+Xr,n[1]=a-n[0]+Xr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Kr(r,o,n):r>0?(a=r-3*Qr,n[0]=a-Zr,n[1]=a-n[0]-Zr,3):(a=r+3*Qr,n[0]=a+Zr,n[1]=a-n[0]+Zr,-3):1075388923===o?Kr(r,o,n):r>0?(a=r-4*Qr,n[0]=a-$r,n[1]=a-n[0]-$r,4):(a=r+4*Qr,n[0]=a+$r,n[1]=a-n[0]+$r,-4);if(o<1094263291)return Kr(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return Pr[0]=r,kr[Gr]}(r),a=vr(o-((e=(o>>20)-1046)<<20|0),t),i=0;i<2;i++)rn[i]=0|a,a=16777216*(a-rn[i]);for(rn[2]=a,u=3;0===rn[u-1];)u-=1;return f=Dr(rn,nn,e,u),r<0?(n[0]=-nn[0],n[1]=-nn[1],-f):(n[0]=nn[0],n[1]=nn[1],f)}var en=[0,0];function on(r){var n;if(n=ir(r),(n&=2147483647)<=1072243195)return n<1044381696?1:Fr(r,0);if(n>=2146435072)return NaN;switch(3&tn(r,en)){case 0:return Fr(en[0],en[1]);case 1:return-Hr(en[0],en[1]);case 2:return-Fr(en[0],en[1]);default:return Hr(en[0],en[1])}}var un=[0,0];function fn(r){var n;if(n=ir(r),(n&=2147483647)<=1072243195)return n<1045430272?r:Hr(r,0);if(n>=2146435072)return NaN;switch(3&tn(r,un)){case 0:return Hr(un[0],un[1]);case 1:return Fr(un[0],un[1]);case 2:return-Hr(un[0],un[1]);default:return-Fr(un[0],un[1])}}var an=3.141592653589793,cn=1.4616321449683622,ln=1.4616321449683622;function yn(r){var n,t,e,o,u,i,f,a,c,l,y,s,b;if(v(r)||N(r))return r;if(0===r)return w;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-Er(r);if(n){if(r>=4503599627370496)return w;if(c=function(r){var n,t;return v(r)||N(r)?NaN:0===(n=br(t=r%2))||1===n?pr(0,t):n<.25?fn(an*t):n<.75?pr(on(an*(n=.5-n)),t):n<1.25?(t=pr(1,t)-t,fn(an*t)):n<1.75?-pr(on(an*(n-=1.5)),t):(t-=pr(2,t),fn(an*t))}(r),0===c)return w;t=Er(an/br(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(b=-Er(r),r>=cn-1+.27?(y=1-r,e=0):r>=cn-1-.27?(y=r-(ln-1),e=1):(y=r,e=2)):(b=0,r>=cn+.27?(y=2-r,e=0):r>=cn-.27?(y=r-ln,e=1):(y=r-1,e=2)),e){case 0:i=.07721566490153287+(s=y*y)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(s),u=s*(.3224670334241136+s*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(s)),b+=(f=y*i+u)-.5*y;break;case 1:i=.48383612272381005+(l=(s=y*y)*y)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(l),u=l*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(l)-.1475877229945939,o=.06462494023913339+l*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(l),b+=(f=s*i-(-3638676997039505e-33-l*(u+y*o)))-.12148629053584961;break;case 2:i=y*(y*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(y)-.07721566490153287),u=1+y*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(y),b+=-.5*y+i/u}else if(r<8)switch(f=(y=r-(e=p(r)))*(y*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(y)-.07721566490153287),a=1+y*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(y),b=.5*y+f/a,s=1,e){case 7:s*=y+6;case 6:s*=y+5;case 5:s*=y+4;case 4:s*=y+3;case 3:b+=Er(s*=y+2)}else r<0x400000000000000?(c=Er(r),l=.4189385332046727+(s=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(y=s*s),b=(r-.5)*(c-1)+l):b=r*(Er(r)-1);return n&&(b=t-b),b}function vn(r){return function(r){return l(r)===r&&r<0}(r)?NaN:yn(r+1)}function sn(r){return 0===r&&1/r===w}function pn(r,n){var t,e,o,u;if(2===(t=arguments.length))return v(r)||v(n)?NaN:r===w||n===w?w:r===n&&0===r?sn(r)?r:n:r>n?r:n;for(e=b,u=0;u<t;u++){if(v(o=arguments[u])||o===w)return o;(o>e||o===e&&0===o&&sn(o))&&(e=o)}return e}function bn(r){return 0===r&&1/r===b}function wn(r,n){var t,e,o,u;if(2===(t=arguments.length))return v(r)||v(n)?NaN:r===b||n===b?b:r===n&&0===r?bn(r)?r:n:r<n?r:n;for(e=w,u=0;u<t;u++){if(v(o=arguments[u])||o===b)return o;(o<e||o===e&&0===o&&bn(o))&&(e=o)}return e}function dn(r,n,t,e){var o,u,i,f;return v(r)||v(n)||v(t)||v(e)||!y(n)||!y(t)||!y(e)||n===w||t===w||t>n||e>n?NaN:(f=pn(0,e+t-n),i=wn(t,e),y(r)&&f<=r&&r<=i?(u=vn(e)+vn(t)+vn(n-e)+vn(n-t),o=vn(n)+vn(r)+vn(e-r),mr(u-(o+=vn(t-r)+vn(n-t+r-e)))):0)}return c(dn,"factory",(function(r,n,t){var e,o,u;return v(r)||v(n)||v(t)||!y(r)||!y(n)||!y(t)||r===w||n===w||n>r||t>r?(u=NaN,function(){return u}):(o=pn(0,t+n-r),e=wn(n,t),function(u){var i,f;return v(u)?NaN:y(u)&&o<=u&&u<=e?(f=vn(t)+vn(n)+vn(r-t)+vn(r-n),i=vn(r)+vn(u)+vn(t-u),i+=vn(n-u)+vn(r-n+u-t),mr(f-i)):0})})),dn},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).pmf=n();
//# sourceMappingURL=browser.js.map
