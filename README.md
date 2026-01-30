<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Probability Mass Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Hypergeometric][hypergeometric-distribution] distribution [probability mass function][pmf] (PMF).

<section class="intro">

Imagine a scenario with a population of size `N`, of which a subpopulation of size `K` can be considered successes. We draw `n` observations from the total population. Defining the random variable `X` as the number of successes in the `n` draws, `X` is said to follow a [hypergeometric distribution][hypergeometric-distribution]. The [probability mass function][pmf] (PMF) for a [hypergeometric][hypergeometric-distribution] random variable is given by

<!-- <equation class="equation" label="eq:hypergeometric_pmf" align="center" raw="f(x;N,K,n)=P(X=x;N,K,n)=\begin{cases} {{{K \choose x} {N-K \choose {n-x}}}\over {{N} \choose n}} & \text{ for } x = 0,1,2,\ldots \\ 0 & \text{ otherwise} \end{cases}" alt="Probability mass function (PMF) for a hypergeometric distribution."> -->

```math
f(x;N,K,n)=P(X=x;N,K,n)=\begin{cases} {{{K \choose x} {N-K \choose {n-x}}}\over {{N} \choose n}} & \text{ for } x = 0,1,2,\ldots \\ 0 & \text{ otherwise} \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="f(x;N,K,n)=P(X=x;N,K,n)=\begin{cases} {{{K \choose x} {N-K \choose {n-x}}}\over {{N} \choose n}} &amp; \text{ for } x = 0,1,2,\ldots \\ 0 &amp; \text{ otherwise} \end{cases}" data-equation="eq:hypergeometric_pmf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/hypergeometric/pmf/docs/img/equation_hypergeometric_pmf.svg" alt="Probability mass function (PMF) for a hypergeometric distribution.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import pmf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-hypergeometric-pmf@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-hypergeometric-pmf@esm/index.mjs';
```

#### pmf( x, N, K, n )

Evaluates the [probability mass function][pmf] (PMF) for a [hypergeometric][hypergeometric-distribution] distribution with parameters `N` (population size), `K` (subpopulation size), and `n` (number of draws).

```javascript
var y = pmf( 1.0, 8, 4, 2 );
// returns ~0.571

y = pmf( 2.0, 8, 4, 2 );
// returns ~0.214

y = pmf( 0.0, 8, 4, 2 );
// returns ~0.214

y = pmf( 1.5, 8, 4, 2 );
// returns 0.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = pmf( NaN, 10, 5, 2 );
// returns NaN

y = pmf( 0.0, NaN, 5, 2 );
// returns NaN

y = pmf( 0.0, 10, NaN, 2 );
// returns NaN

y = pmf( 0.0, 10, 5, NaN );
// returns NaN
```

If provided a population size `N`, subpopulation size `K` or draws `n` which is not a nonnegative integer, the function returns `NaN`.

```javascript
var y = pmf( 2.0, 10.5, 5, 2 );
// returns NaN

y = pmf( 2.0, 10, 1.5, 2 );
// returns NaN

y = pmf( 2.0, 10, 5, -2.0 );
// returns NaN
```

If the number of draws `n` exceeds population size `N`, the function returns `NaN`.

```javascript
var y = pmf( 2.0, 10, 5, 12 );
// returns NaN

y = pmf( 2.0, 8, 3, 9 );
// returns NaN
```

#### pmf.factory( N, K, n )

Returns a function for evaluating the [probability mass function][pmf] (PMF) of a [hypergeometric ][hypergeometric-distribution] distribution with parameters `N` (population size), `K` (subpopulation size), and `n` (number of draws).

```javascript
var mypmf = pmf.factory( 30, 20, 5 );
var y = mypmf( 4.0 );
// returns ~0.34

y = mypmf( 1.0 );
// returns ~0.029
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@esm/index.mjs';
import pmf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-hypergeometric-pmf@esm/index.mjs';

var i;
var N;
var K;
var n;
var x;
var y;

for ( i = 0; i < 10; i++ ) {
    x = round( randu() * 5.0 );
    N = round( randu() * 20.0 );
    K = round( randu() * N );
    n = round( randu() * N );
    y = pmf( x, N, K, n );
    console.log( 'x: %d, N: %d, K: %d, n: %d, P(X=x;N,K,n): %d', x, N, K, n, y.toFixed( 4 ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-hypergeometric-pmf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-hypergeometric-pmf

[test-image]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-pmf/actions/workflows/test.yml/badge.svg?branch=v0.3.0
[test-url]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-pmf/actions/workflows/test.yml?query=branch:v0.3.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-hypergeometric-pmf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-hypergeometric-pmf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-hypergeometric-pmf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-hypergeometric-pmf/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-pmf/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-pmf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-pmf/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-pmf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-pmf/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-pmf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-pmf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-hypergeometric-pmf/main/LICENSE

[hypergeometric-distribution]: https://en.wikipedia.org/wiki/Hypergeometric_distribution

[pmf]: https://en.wikipedia.org/wiki/Probability_mass_function

</section>

<!-- /.links -->
