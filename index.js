// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(r){"use strict";var n,t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,o=Object.prototype,u=o.toString,f=o.__defineGetter__,i=o.__defineSetter__,a=o.__lookupGetter__,c=o.__lookupSetter__;n=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?e:function(r,n,t){var e,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(a.call(r,n)||c.call(r,n)?(e=r.__proto__,r.__proto__=o,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),y="get"in t,v="set"in t,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&f&&f.call(r,n,t.get),v&&i&&i.call(r,n,t.set),r};var l=n,y=Math.floor;function v(r){return y(r)===r&&r>=0}function p(r){return r!=r}var s=Math.ceil;function b(r){return r<0?s(r):y(r)}var w=Number.NEGATIVE_INFINITY,d=Number.POSITIVE_INFINITY,N=1023;function h(r){return r===d||r===w}var _,A="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),m=Object.prototype.toString,U=Object.prototype.hasOwnProperty,g="function"==typeof Symbol?Symbol.toStringTag:"";_=A&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return m.call(r);t=r[g],u=g,n=null!=(o=r)&&U.call(o,u);try{r[g]=void 0}catch(n){return m.call(r)}return e=m.call(r),n?r[g]=t:delete r[g],e}:function(r){return m.call(r)};var j,I=_,O="function"==typeof Uint32Array,S="function"==typeof Uint32Array?Uint32Array:null,E="function"==typeof Uint32Array?Uint32Array:void 0;j=function(){var r,n,t;if("function"!=typeof S)return!1;try{n=new S(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(O&&t instanceof Uint32Array||"[object Uint32Array]"===I(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?E:function(){throw new Error("not implemented")};var F,T=j,H="function"==typeof Float64Array,G="function"==typeof Float64Array?Float64Array:null,P="function"==typeof Float64Array?Float64Array:void 0;F=function(){var r,n,t;if("function"!=typeof G)return!1;try{n=new G([1,3.14,-3.14,NaN]),t=n,r=(H&&t instanceof Float64Array||"[object Float64Array]"===I(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?P:function(){throw new Error("not implemented")};var x,k=F,M="function"==typeof Uint8Array,L="function"==typeof Uint8Array?Uint8Array:null,V="function"==typeof Uint8Array?Uint8Array:void 0;x=function(){var r,n,t;if("function"!=typeof L)return!1;try{n=new L(n=[1,3.14,-3.14,256,257]),t=n,r=(M&&t instanceof Uint8Array||"[object Uint8Array]"===I(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?V:function(){throw new Error("not implemented")};var W,Y=x,C="function"==typeof Uint16Array,q="function"==typeof Uint16Array?Uint16Array:null,z="function"==typeof Uint16Array?Uint16Array:void 0;W=function(){var r,n,t;if("function"!=typeof q)return!1;try{n=new q(n=[1,3.14,-3.14,65536,65537]),t=n,r=(C&&t instanceof Uint16Array||"[object Uint16Array]"===I(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?z:function(){throw new Error("not implemented")};var B,D={uint16:W,uint8:Y};(B=new D.uint16(1))[0]=4660;var J,K,Q=52===new D.uint8(B.buffer)[0];!0===Q?(J=1,K=0):(J=0,K=1);var R={HIGH:J,LOW:K},X=new k(1),Z=new T(X.buffer),$=R.HIGH,rr=R.LOW;function nr(r,n){return X[0]=n,r[0]=Z[$],r[1]=Z[rr],r}function tr(r,n){return 1===arguments.length?nr([0,0],r):nr(r,n)}var er,or,ur=!0===Q?1:0,fr=new k(1),ir=new T(fr.buffer);function ar(r){return fr[0]=r,ir[ur]}!0===Q?(er=1,or=0):(er=0,or=1);var cr={HIGH:er,LOW:or},lr=new k(1),yr=new T(lr.buffer),vr=cr.HIGH,pr=cr.LOW;function sr(r,n){return yr[vr]=r,yr[pr]=n,lr[0]}var br=[0,0];function wr(r,n){var t,e;return tr(br,r),t=br[0],t&=2147483647,e=ar(n),sr(t|=e&=2147483648,br[1])}function dr(r){return Math.abs(r)}function Nr(r,n){return p(n)||h(n)?(r[0]=n,r[1]=0,r):0!==n&&dr(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var hr=[0,0],_r=[0,0];function Ar(r,n){var t,e;return 0===n||0===r||p(r)||h(r)?r:(function(r,n){1===arguments.length?Nr([0,0],r):Nr(r,n)}(hr,r),n+=hr[1],n+=function(r){var n=ar(r);return(n=(2146435072&n)>>>20)-N|0}(r=hr[0]),n<-1074?wr(0,r):n>1023?r<0?w:d:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,tr(_r,r),t=_r[0],t&=2148532223,e*sr(t|=n+N<<20,_r[1])))}var mr=1.4426950408889634,Ur=1/(1<<28);function gr(r){var n;return p(r)||r===d?r:r===w?0:r>709.782712893384?d:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Ur?1+r:function(r,n,t){var e,o,u,f;return Ar(1-(n-(e=r-n)*(u=e-(o=e*e)*(0===(f=o)?.16666666666666602:.16666666666666602+f*(f*(6613756321437934e-20+f*(4.1381367970572385e-8*f-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),t)}(r-.6931471803691238*(n=b(r<0?mr*r-.5:mr*r+.5)),1.9082149292705877e-10*n,n)}var jr=!0===Q?1:0,Ir=new k(1),Or=new T(Ir.buffer),Sr=.6931471803691238,Er=1.9082149292705877e-10,Fr=1048575;function Tr(r){var n,t,e,o,u,f,i,a,c,l,y,v;return 0===r?w:p(r)||r<0?NaN:(u=0,(t=ar(r))<1048576&&(u-=54,t=ar(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-N|0,u+=(a=614244+(t&=Fr)&1048576|0)>>20|0,i=(r=function(r,n){return Ir[0]=r,Or[jr]=n>>>0,Ir[0]}(r,t|1072693248^a))-1,(Fr&2+t)<3?0===i?0===u?0:u*Sr+u*Er:(f=i*i*(.5-.3333333333333333*i),0===u?i-f:u*Sr-(f-u*Er-i)):(a=t-398458|0,c=440401-t|0,o=(y=(v=(l=i/(2+i))*l)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),e=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),f=e+o,(a|=c)>0?(n=.5*i*i,0===u?i-(n-l*(n+f)):u*Sr-(n-(l*(n+f)+u*Er)-i)):0===u?i-l*(i-f):u*Sr-(l*(i-f)-u*Er-i))))}function Hr(r,n){var t,e,o,u;return o=(u=r*r)*u,e=u*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(u),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(u),(o=1-(t=.5*u))+(1-o-t+(u*e-r*n))}var Gr=-.16666666666666632;function Pr(r,n){var t,e,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===n?r+e*(Gr+o*t):r-(o*(.5*n-e*t)-n-e*Gr)}var xr=!0===Q?0:1,kr=new k(1),Mr=new T(kr.buffer);function Lr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Vr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Wr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Yr=16777216,Cr=5.960464477539063e-8,qr=Lr(20),zr=Lr(20),Br=Lr(20),Dr=Lr(20);function Jr(r,n,t,e,o,u,f,i,a){var c,l,v,p,s,b,w,d,N;for(p=u,N=e[t],d=t,s=0;d>0;s++)l=Cr*N|0,Dr[s]=N-Yr*l|0,N=e[d-1]+l,d-=1;if(N=Ar(N,o),N-=8*y(.125*N),N-=w=0|N,v=0,o>0?(w+=s=Dr[t-1]>>24-o,Dr[t-1]-=s<<24-o,v=Dr[t-1]>>23-o):0===o?v=Dr[t-1]>>23:N>=.5&&(v=2),v>0){for(w+=1,c=0,s=0;s<t;s++)d=Dr[s],0===c?0!==d&&(c=1,Dr[s]=16777216-d):Dr[s]=16777215-d;if(o>0)switch(o){case 1:Dr[t-1]&=8388607;break;case 2:Dr[t-1]&=4194303}2===v&&(N=1-N,0!==c&&(N-=Ar(1,o)))}if(0===N){for(d=0,s=t-1;s>=u;s--)d|=Dr[s];if(0===d){for(b=1;0===Dr[u-b];b++);for(s=t+1;s<=t+b;s++){for(a[i+s]=Vr[f+s],l=0,d=0;d<=i;d++)l+=r[d]*a[i+(s-d)];e[s]=l}return Jr(r,n,t+=b,e,o,u,f,i,a)}}if(0===N)for(t-=1,o-=24;0===Dr[t];)t-=1,o-=24;else(N=Ar(N,-o))>=Yr?(l=Cr*N|0,Dr[t]=N-Yr*l|0,o+=24,Dr[t+=1]=l):Dr[t]=0|N;for(l=Ar(1,o),s=t;s>=0;s--)e[s]=l*Dr[s],l*=Cr;for(s=t;s>=0;s--){for(l=0,b=0;b<=p&&b<=t-s;b++)l+=Wr[b]*e[s+b];Br[t-s]=l}for(l=0,s=t;s>=0;s--)l+=Br[s];for(n[0]=0===v?l:-l,l=Br[0]-l,s=1;s<=t;s++)l+=Br[s];return n[1]=0===v?l:-l,7&w}function Kr(r,n,t,e){var o,u,f,i,a,c,l;for((u=(t-3)/24|0)<0&&(u=0),i=t-24*(u+1),c=u-(f=e-1),l=f+4,a=0;a<=l;a++)qr[a]=c<0?0:Vr[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=f;c++)o+=r[c]*qr[f+(a-c)];zr[a]=o}return Jr(r,n,4,zr,i,4,u,f,qr)}var Qr=Math.round;function Rr(r,n,t){var e,o,u,f,i;return u=r-1.5707963267341256*(e=Qr(.6366197723675814*r)),f=6077100506506192e-26*e,i=n>>20|0,t[0]=u-f,i-(ar(t[0])>>20&2047)>16&&(f=20222662487959506e-37*e-((o=u)-(u=o-(f=6077100506303966e-26*e))-f),t[0]=u-f,i-(ar(t[0])>>20&2047)>49&&(f=84784276603689e-45*e-((o=u)-(u=o-(f=20222662487111665e-37*e))-f),t[0]=u-f)),t[1]=u-t[0]-f,e}var Xr=1.5707963267341256,Zr=6077100506506192e-26,$r=2*Zr,rn=3*Zr,nn=4*Zr,tn=[0,0,0],en=[0,0];function on(r,n){var t,e,o,u,f,i,a;if((o=2147483647&ar(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Rr(r,o,n):o<=1073928572?r>0?(a=r-Xr,n[0]=a-Zr,n[1]=a-n[0]-Zr,1):(a=r+Xr,n[0]=a+Zr,n[1]=a-n[0]+Zr,-1):r>0?(a=r-2*Xr,n[0]=a-$r,n[1]=a-n[0]-$r,2):(a=r+2*Xr,n[0]=a+$r,n[1]=a-n[0]+$r,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Rr(r,o,n):r>0?(a=r-3*Xr,n[0]=a-rn,n[1]=a-n[0]-rn,3):(a=r+3*Xr,n[0]=a+rn,n[1]=a-n[0]+rn,-3):1075388923===o?Rr(r,o,n):r>0?(a=r-4*Xr,n[0]=a-nn,n[1]=a-n[0]-nn,4):(a=r+4*Xr,n[0]=a+nn,n[1]=a-n[0]+nn,-4);if(o<1094263291)return Rr(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return kr[0]=r,Mr[xr]}(r),a=sr(o-((e=(o>>20)-1046)<<20|0),t),f=0;f<2;f++)tn[f]=0|a,a=16777216*(a-tn[f]);for(tn[2]=a,u=3;0===tn[u-1];)u-=1;return i=Kr(tn,en,e,u),r<0?(n[0]=-en[0],n[1]=-en[1],-i):(n[0]=en[0],n[1]=en[1],i)}var un=[0,0];function fn(r){var n;if(n=ar(r),(n&=2147483647)<=1072243195)return n<1044381696?1:Hr(r,0);if(n>=2146435072)return NaN;switch(3&on(r,un)){case 0:return Hr(un[0],un[1]);case 1:return-Pr(un[0],un[1]);case 2:return-Hr(un[0],un[1]);default:return Pr(un[0],un[1])}}var an=[0,0];function cn(r){var n;if(n=ar(r),(n&=2147483647)<=1072243195)return n<1045430272?r:Pr(r,0);if(n>=2146435072)return NaN;switch(3&on(r,an)){case 0:return Pr(an[0],an[1]);case 1:return Hr(an[0],an[1]);case 2:return-Pr(an[0],an[1]);default:return-Hr(an[0],an[1])}}var ln=3.141592653589793,yn=1.4616321449683622,vn=1.4616321449683622;function pn(r){var n,t,e,o,u,f,i,a,c,l,y,v,s;if(p(r)||h(r))return r;if(0===r)return d;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-Tr(r);if(n){if(r>=4503599627370496)return d;if(c=function(r){var n,t;return p(r)||h(r)?NaN:0===(n=dr(t=r%2))||1===n?wr(0,t):n<.25?cn(ln*t):n<.75?wr(fn(ln*(n=.5-n)),t):n<1.25?(t=wr(1,t)-t,cn(ln*t)):n<1.75?-wr(fn(ln*(n-=1.5)),t):(t-=wr(2,t),cn(ln*t))}(r),0===c)return d;t=Tr(ln/dr(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(s=-Tr(r),r>=yn-1+.27?(y=1-r,e=0):r>=yn-1-.27?(y=r-(vn-1),e=1):(y=r,e=2)):(s=0,r>=yn+.27?(y=2-r,e=0):r>=yn-.27?(y=r-vn,e=1):(y=r-1,e=2)),e){case 0:f=.07721566490153287+(v=y*y)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(v),u=v*(.3224670334241136+v*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(v)),s+=(i=y*f+u)-.5*y;break;case 1:f=.48383612272381005+(l=(v=y*y)*y)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(l),u=l*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(l)-.1475877229945939,o=.06462494023913339+l*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(l),s+=(i=v*f-(-3638676997039505e-33-l*(u+y*o)))-.12148629053584961;break;case 2:f=y*(y*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(y)-.07721566490153287),u=1+y*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(y),s+=-.5*y+f/u}else if(r<8)switch(i=(y=r-(e=b(r)))*(y*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(y)-.07721566490153287),a=1+y*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(y),s=.5*y+i/a,v=1,e){case 7:v*=y+6;case 6:v*=y+5;case 5:v*=y+4;case 4:v*=y+3;case 3:s+=Tr(v*=y+2)}else r<0x400000000000000?(c=Tr(r),l=.4189385332046727+(v=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(y=v*v),s=(r-.5)*(c-1)+l):s=r*(Tr(r)-1);return n&&(s=t-s),s}function sn(r){return function(r){return y(r)===r&&r<0}(r)?NaN:pn(r+1)}function bn(r){return 0===r&&1/r===d}function wn(r,n){var t,e,o,u;if(2===(t=arguments.length))return p(r)||p(n)?NaN:r===d||n===d?d:r===n&&0===r?bn(r)?r:n:r>n?r:n;for(e=w,u=0;u<t;u++){if(p(o=arguments[u])||o===d)return o;(o>e||o===e&&0===o&&bn(o))&&(e=o)}return e}function dn(r){return 0===r&&1/r===w}function Nn(r,n){var t,e,o,u;if(2===(t=arguments.length))return p(r)||p(n)?NaN:r===w||n===w?w:r===n&&0===r?dn(r)?r:n:r<n?r:n;for(e=d,u=0;u<t;u++){if(p(o=arguments[u])||o===w)return o;(o<e||o===e&&0===o&&dn(o))&&(e=o)}return e}function hn(r,n,t,e){var o,u,f,i;return p(r)||p(n)||p(t)||p(e)||!v(n)||!v(t)||!v(e)||n===d||t===d||t>n||e>n?NaN:(i=wn(0,e+t-n),f=Nn(t,e),v(r)&&i<=r&&r<=f?(u=sn(e)+sn(t)+sn(n-e)+sn(n-t),o=sn(n)+sn(r)+sn(e-r),gr(u-(o+=sn(t-r)+sn(n-t+r-e)))):0)}function _n(r,n,t){var e,o,u;return p(r)||p(n)||p(t)||!v(r)||!v(n)||!v(t)||r===d||n===d||n>r||t>r?(u=NaN,function(){return u}):(o=wn(0,t+n-r),e=Nn(n,t),function(u){var f,i;return p(u)?NaN:v(u)&&o<=u&&u<=e?(i=sn(t)+sn(n)+sn(r-t)+sn(r-n),f=sn(r)+sn(u)+sn(t-u),f+=sn(n-u)+sn(r-n+u-t),gr(i-f)):0})}l(hn,"factory",{configurable:!1,enumerable:!1,writable:!1,value:_n}),r.default=hn,r.factory=_n,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((r="undefined"!=typeof globalThis?globalThis:r||self).pmf={});
//# sourceMappingURL=index.js.map
