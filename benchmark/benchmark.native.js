/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var bench = require( '@stdlib/bench-harness' );
var Float64Array = require( '@stdlib/array-float64' );
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var tryRequire = require( '@stdlib/utils-try-require' );
var pkg = require( './../package.json' ).name;


// VARIABLES //

var pmf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( pmf instanceof Error )
};


// MAIN //

bench( pkg+'::native', opts, function benchmark( b ) {
	var len;
	var N;
	var K;
	var n;
	var x;
	var y;
	var i;

	len = 100;
	N = new Float64Array( len );
	K = new Float64Array( len );
	n = new Float64Array( len );
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = discreteUniform( 1, 10 );
		N[ i ] = discreteUniform( 1, 100 );
		K[ i ] = discreteUniform( 1, N[ i ] );
		n[ i ] = discreteUniform( 1, N[ i ] );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = pmf( x[ i%len ], N[ i%len ], K[ i%len ], n[ i%len ] );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
