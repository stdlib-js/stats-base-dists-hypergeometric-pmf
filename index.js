// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(r){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,f=e.__defineSetter__,i=e.__lookupGetter__,a=e.__lookupSetter__,c=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(i.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,v="set"in t,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,t.get),v&&f&&f.call(r,n,t.set),r};function l(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var y=Math.floor;function v(r){return y(r)===r&&r>=0}function p(r){return r!=r}var s=Math.ceil;function b(r){return r<0?s(r):y(r)}var w=Number.NEGATIVE_INFINITY,d=Number.POSITIVE_INFINITY,N=1023;function _(r){return r===d||r===w}var h,A="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),m=Object.prototype.toString,U=Object.prototype.hasOwnProperty,g="function"==typeof Symbol?Symbol.toStringTag:"",j=A&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return m.call(r);t=r[g],u=g,n=null!=(o=r)&&U.call(o,u);try{r[g]=void 0}catch(n){return m.call(r)}return e=m.call(r),n?r[g]=t:delete r[g],e}:function(r){return m.call(r)},I="function"==typeof Uint32Array,O="function"==typeof Uint32Array?Uint32Array:null,S="function"==typeof Uint32Array?Uint32Array:void 0;h=function(){var r,n,t;if("function"!=typeof O)return!1;try{n=new O(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(I&&t instanceof Uint32Array||"[object Uint32Array]"===j(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E,F=h,T="function"==typeof Float64Array,H="function"==typeof Float64Array?Float64Array:null,G="function"==typeof Float64Array?Float64Array:void 0;E=function(){var r,n,t;if("function"!=typeof H)return!1;try{n=new H([1,3.14,-3.14,NaN]),t=n,r=(T&&t instanceof Float64Array||"[object Float64Array]"===j(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?G:function(){throw new Error("not implemented")};var P,x=E,k="function"==typeof Uint8Array,M="function"==typeof Uint8Array?Uint8Array:null,L="function"==typeof Uint8Array?Uint8Array:void 0;P=function(){var r,n,t;if("function"!=typeof M)return!1;try{n=new M(n=[1,3.14,-3.14,256,257]),t=n,r=(k&&t instanceof Uint8Array||"[object Uint8Array]"===j(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?L:function(){throw new Error("not implemented")};var V,W=P,Y="function"==typeof Uint16Array,C="function"==typeof Uint16Array?Uint16Array:null,q="function"==typeof Uint16Array?Uint16Array:void 0;V=function(){var r,n,t;if("function"!=typeof C)return!1;try{n=new C(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Y&&t instanceof Uint16Array||"[object Uint16Array]"===j(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?q:function(){throw new Error("not implemented")};var z,B={uint16:V,uint8:W};(z=new B.uint16(1))[0]=4660;var D,J,K=52===new B.uint8(z.buffer)[0];!0===K?(D=1,J=0):(D=0,J=1);var Q={HIGH:D,LOW:J},R=new x(1),X=new F(R.buffer),Z=Q.HIGH,$=Q.LOW;function rr(r,n){return R[0]=n,r[0]=X[Z],r[1]=X[$],r}function nr(r,n){return 1===arguments.length?rr([0,0],r):rr(r,n)}var tr,er,or=!0===K?1:0,ur=new x(1),fr=new F(ur.buffer);function ir(r){return ur[0]=r,fr[or]}!0===K?(tr=1,er=0):(tr=0,er=1);var ar={HIGH:tr,LOW:er},cr=new x(1),lr=new F(cr.buffer),yr=ar.HIGH,vr=ar.LOW;function pr(r,n){return lr[yr]=r,lr[vr]=n,cr[0]}var sr=[0,0];function br(r,n){var t,e;return nr(sr,r),t=sr[0],t&=2147483647,e=ir(n),pr(t|=e&=2147483648,sr[1])}function wr(r){return Math.abs(r)}function dr(r,n,t,e){return p(r)||_(r)?(n[e]=r,n[e+t]=0,n):0!==r&&wr(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}l((function(r){return dr(r,[0,0],1,0)}),"assign",dr);var Nr=[0,0],_r=[0,0];function hr(r,n){var t,e;return 0===n||0===r||p(r)||_(r)?r:(dr(r,Nr,1,0),n+=Nr[1],n+=function(r){var n=ir(r);return(n=(2146435072&n)>>>20)-N|0}(r=Nr[0]),n<-1074?br(0,r):n>1023?r<0?w:d:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,nr(_r,r),t=_r[0],t&=2148532223,e*pr(t|=n+N<<20,_r[1])))}var Ar=1.4426950408889634,mr=1/(1<<28);function Ur(r){var n;return p(r)||r===d?r:r===w?0:r>709.782712893384?d:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<mr?1+r:function(r,n,t){var e,o,u,f;return hr(1-(n-(e=r-n)*(u=e-(o=e*e)*(0===(f=o)?.16666666666666602:.16666666666666602+f*(f*(6613756321437934e-20+f*(4.1381367970572385e-8*f-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),t)}(r-.6931471803691238*(n=b(r<0?Ar*r-.5:Ar*r+.5)),1.9082149292705877e-10*n,n)}var gr=!0===K?1:0,jr=new x(1),Ir=new F(jr.buffer),Or=.6931471803691238,Sr=1.9082149292705877e-10,Er=1048575;function Fr(r){var n,t,e,o,u,f,i,a,c,l,y,v;return 0===r?w:p(r)||r<0?NaN:(u=0,(t=ir(r))<1048576&&(u-=54,t=ir(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-N|0,u+=(a=614244+(t&=Er)&1048576|0)>>20|0,i=(r=function(r,n){return jr[0]=r,Ir[gr]=n>>>0,jr[0]}(r,t|1072693248^a))-1,(Er&2+t)<3?0===i?0===u?0:u*Or+u*Sr:(f=i*i*(.5-.3333333333333333*i),0===u?i-f:u*Or-(f-u*Sr-i)):(a=t-398458|0,c=440401-t|0,o=(y=(v=(l=i/(2+i))*l)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),e=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),f=e+o,(a|=c)>0?(n=.5*i*i,0===u?i-(n-l*(n+f)):u*Or-(n-(l*(n+f)+u*Sr)-i)):0===u?i-l*(i-f):u*Or-(l*(i-f)-u*Sr-i))))}function Tr(r,n){var t,e,o,u;return o=(u=r*r)*u,e=u*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(u),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(u),(o=1-(t=.5*u))+(1-o-t+(u*e-r*n))}var Hr=-.16666666666666632;function Gr(r,n){var t,e,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===n?r+e*(Hr+o*t):r-(o*(.5*n-e*t)-n-e*Hr)}var Pr=!0===K?0:1,xr=new x(1),kr=new F(xr.buffer);function Mr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Lr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Vr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Wr=16777216,Yr=5.960464477539063e-8,Cr=Mr(20),qr=Mr(20),zr=Mr(20),Br=Mr(20);function Dr(r,n,t,e,o,u,f,i,a){var c,l,v,p,s,b,w,d,N;for(p=u,N=e[t],d=t,s=0;d>0;s++)l=Yr*N|0,Br[s]=N-Wr*l|0,N=e[d-1]+l,d-=1;if(N=hr(N,o),N-=8*y(.125*N),N-=w=0|N,v=0,o>0?(w+=s=Br[t-1]>>24-o,Br[t-1]-=s<<24-o,v=Br[t-1]>>23-o):0===o?v=Br[t-1]>>23:N>=.5&&(v=2),v>0){for(w+=1,c=0,s=0;s<t;s++)d=Br[s],0===c?0!==d&&(c=1,Br[s]=16777216-d):Br[s]=16777215-d;if(o>0)switch(o){case 1:Br[t-1]&=8388607;break;case 2:Br[t-1]&=4194303}2===v&&(N=1-N,0!==c&&(N-=hr(1,o)))}if(0===N){for(d=0,s=t-1;s>=u;s--)d|=Br[s];if(0===d){for(b=1;0===Br[u-b];b++);for(s=t+1;s<=t+b;s++){for(a[i+s]=Lr[f+s],l=0,d=0;d<=i;d++)l+=r[d]*a[i+(s-d)];e[s]=l}return Dr(r,n,t+=b,e,o,u,f,i,a)}}if(0===N)for(t-=1,o-=24;0===Br[t];)t-=1,o-=24;else(N=hr(N,-o))>=Wr?(l=Yr*N|0,Br[t]=N-Wr*l|0,o+=24,Br[t+=1]=l):Br[t]=0|N;for(l=hr(1,o),s=t;s>=0;s--)e[s]=l*Br[s],l*=Yr;for(s=t;s>=0;s--){for(l=0,b=0;b<=p&&b<=t-s;b++)l+=Vr[b]*e[s+b];zr[t-s]=l}for(l=0,s=t;s>=0;s--)l+=zr[s];for(n[0]=0===v?l:-l,l=zr[0]-l,s=1;s<=t;s++)l+=zr[s];return n[1]=0===v?l:-l,7&w}function Jr(r,n,t,e){var o,u,f,i,a,c,l;for((u=(t-3)/24|0)<0&&(u=0),i=t-24*(u+1),c=u-(f=e-1),l=f+4,a=0;a<=l;a++)Cr[a]=c<0?0:Lr[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=f;c++)o+=r[c]*Cr[f+(a-c)];qr[a]=o}return Dr(r,n,4,qr,i,4,u,f,Cr)}var Kr=Math.round;function Qr(r,n,t){var e,o,u,f,i;return u=r-1.5707963267341256*(e=Kr(.6366197723675814*r)),f=6077100506506192e-26*e,i=n>>20|0,t[0]=u-f,i-(ir(t[0])>>20&2047)>16&&(f=20222662487959506e-37*e-((o=u)-(u=o-(f=6077100506303966e-26*e))-f),t[0]=u-f,i-(ir(t[0])>>20&2047)>49&&(f=84784276603689e-45*e-((o=u)-(u=o-(f=20222662487111665e-37*e))-f),t[0]=u-f)),t[1]=u-t[0]-f,e}var Rr=1.5707963267341256,Xr=6077100506506192e-26,Zr=2*Xr,$r=3*Xr,rn=4*Xr,nn=[0,0,0],tn=[0,0];function en(r,n){var t,e,o,u,f,i,a;if((o=2147483647&ir(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Qr(r,o,n):o<=1073928572?r>0?(a=r-Rr,n[0]=a-Xr,n[1]=a-n[0]-Xr,1):(a=r+Rr,n[0]=a+Xr,n[1]=a-n[0]+Xr,-1):r>0?(a=r-2*Rr,n[0]=a-Zr,n[1]=a-n[0]-Zr,2):(a=r+2*Rr,n[0]=a+Zr,n[1]=a-n[0]+Zr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Qr(r,o,n):r>0?(a=r-3*Rr,n[0]=a-$r,n[1]=a-n[0]-$r,3):(a=r+3*Rr,n[0]=a+$r,n[1]=a-n[0]+$r,-3):1075388923===o?Qr(r,o,n):r>0?(a=r-4*Rr,n[0]=a-rn,n[1]=a-n[0]-rn,4):(a=r+4*Rr,n[0]=a+rn,n[1]=a-n[0]+rn,-4);if(o<1094263291)return Qr(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return xr[0]=r,kr[Pr]}(r),a=pr(o-((e=(o>>20)-1046)<<20|0),t),f=0;f<2;f++)nn[f]=0|a,a=16777216*(a-nn[f]);for(nn[2]=a,u=3;0===nn[u-1];)u-=1;return i=Jr(nn,tn,e,u),r<0?(n[0]=-tn[0],n[1]=-tn[1],-i):(n[0]=tn[0],n[1]=tn[1],i)}var on=[0,0];function un(r){var n;if(n=ir(r),(n&=2147483647)<=1072243195)return n<1044381696?1:Tr(r,0);if(n>=2146435072)return NaN;switch(3&en(r,on)){case 0:return Tr(on[0],on[1]);case 1:return-Gr(on[0],on[1]);case 2:return-Tr(on[0],on[1]);default:return Gr(on[0],on[1])}}var fn=[0,0];function an(r){var n;if(n=ir(r),(n&=2147483647)<=1072243195)return n<1045430272?r:Gr(r,0);if(n>=2146435072)return NaN;switch(3&en(r,fn)){case 0:return Gr(fn[0],fn[1]);case 1:return Tr(fn[0],fn[1]);case 2:return-Gr(fn[0],fn[1]);default:return-Tr(fn[0],fn[1])}}var cn=3.141592653589793,ln=1.4616321449683622,yn=1.4616321449683622;function vn(r){var n,t,e,o,u,f,i,a,c,l,y,v,s;if(p(r)||_(r))return r;if(0===r)return d;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-Fr(r);if(n){if(r>=4503599627370496)return d;if(c=function(r){var n,t;return p(r)||_(r)?NaN:0===(n=wr(t=r%2))||1===n?br(0,t):n<.25?an(cn*t):n<.75?br(un(cn*(n=.5-n)),t):n<1.25?(t=br(1,t)-t,an(cn*t)):n<1.75?-br(un(cn*(n-=1.5)),t):(t-=br(2,t),an(cn*t))}(r),0===c)return d;t=Fr(cn/wr(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(s=-Fr(r),r>=ln-1+.27?(y=1-r,e=0):r>=ln-1-.27?(y=r-(yn-1),e=1):(y=r,e=2)):(s=0,r>=ln+.27?(y=2-r,e=0):r>=ln-.27?(y=r-yn,e=1):(y=r-1,e=2)),e){case 0:f=.07721566490153287+(v=y*y)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(v),u=v*(.3224670334241136+v*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(v)),s+=(i=y*f+u)-.5*y;break;case 1:f=.48383612272381005+(l=(v=y*y)*y)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(l),u=l*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(l)-.1475877229945939,o=.06462494023913339+l*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(l),s+=(i=v*f-(-3638676997039505e-33-l*(u+y*o)))-.12148629053584961;break;case 2:f=y*(y*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(y)-.07721566490153287),u=1+y*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(y),s+=-.5*y+f/u}else if(r<8)switch(i=(y=r-(e=b(r)))*(y*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(y)-.07721566490153287),a=1+y*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(y),s=.5*y+i/a,v=1,e){case 7:v*=y+6;case 6:v*=y+5;case 5:v*=y+4;case 4:v*=y+3;case 3:s+=Fr(v*=y+2)}else r<0x400000000000000?(c=Fr(r),l=.4189385332046727+(v=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(y=v*v),s=(r-.5)*(c-1)+l):s=r*(Fr(r)-1);return n&&(s=t-s),s}function pn(r){return function(r){return y(r)===r&&r<0}(r)?NaN:vn(r+1)}function sn(r){return 0===r&&1/r===d}function bn(r,n){var t,e,o,u;if(2===(t=arguments.length))return p(r)||p(n)?NaN:r===d||n===d?d:r===n&&0===r?sn(r)?r:n:r>n?r:n;for(e=w,u=0;u<t;u++){if(p(o=arguments[u])||o===d)return o;(o>e||o===e&&0===o&&sn(o))&&(e=o)}return e}function wn(r){return 0===r&&1/r===w}function dn(r,n){var t,e,o,u;if(2===(t=arguments.length))return p(r)||p(n)?NaN:r===w||n===w?w:r===n&&0===r?wn(r)?r:n:r<n?r:n;for(e=d,u=0;u<t;u++){if(p(o=arguments[u])||o===w)return o;(o<e||o===e&&0===o&&wn(o))&&(e=o)}return e}function Nn(r,n,t,e){var o,u,f,i;return p(r)||p(n)||p(t)||p(e)||!v(n)||!v(t)||!v(e)||n===d||t===d||t>n||e>n?NaN:(i=bn(0,e+t-n),f=dn(t,e),v(r)&&i<=r&&r<=f?(u=pn(e)+pn(t)+pn(n-e)+pn(n-t),o=pn(n)+pn(r)+pn(e-r),Ur(u-(o+=pn(t-r)+pn(n-t+r-e)))):0)}function _n(r,n,t){var e,o,u;return p(r)||p(n)||p(t)||!v(r)||!v(n)||!v(t)||r===d||n===d||n>r||t>r?(u=NaN,function(){return u}):(o=bn(0,t+n-r),e=dn(n,t),function(u){var f,i;return p(u)?NaN:v(u)&&o<=u&&u<=e?(i=pn(t)+pn(n)+pn(r-t)+pn(r-n),f=pn(r)+pn(u)+pn(t-u),f+=pn(n-u)+pn(r-n+u-t),Ur(i-f)):0})}l(Nn,"factory",_n),r.default=Nn,r.factory=_n,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((r="undefined"!=typeof globalThis?globalThis:r||self).pmf={});
//# sourceMappingURL=index.js.map
