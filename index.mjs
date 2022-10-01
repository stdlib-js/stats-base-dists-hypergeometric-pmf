// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nonnegative-integer@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-factorialln@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-max@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-min@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";function o(s,a,o,l){var j,p,h,c;return e(s)||e(a)||e(o)||e(l)||!t(a)||!t(o)||!t(l)||a===d||o===d||o>a||l>a?NaN:(c=r(0,l+o-a),h=m(o,l),t(s)&&c<=s&&s<=h?(p=i(l)+i(o)+i(a-l)+i(a-o),j=i(a)+i(s)+i(l-s),j+=i(o-s)+i(a-o+s-l),n(p-j)):0)}function l(s,o,l){var j,p;return e(s)||e(o)||e(l)||!t(s)||!t(o)||!t(l)||s===d||o===d||o>s||l>s?a(NaN):(p=r(0,l+o-s),j=m(o,l),function(r){var m,d;if(e(r))return NaN;if(t(r)&&p<=r&&r<=j)return d=i(l)+i(o)+i(s-l)+i(s-o),m=i(s)+i(r)+i(l-r),m+=i(o-r)+i(s-o+r-l),n(d-m);return 0})}s(o,"factory",l);export{o as default,l as factory};
//# sourceMappingURL=index.mjs.map
