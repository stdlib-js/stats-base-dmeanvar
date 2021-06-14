<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

<!--lint disable maximum-heading-length-->

# dmeanvar

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Calculate the [mean][arithmetic-mean] and [variance][variance] of a double-precision floating-point strided array.

<section class="intro">

The population [variance][variance] of a finite size population of size `N` is given by

<!-- <equation class="equation" label="eq:population_variance" align="center" raw="\sigma^2 = \frac{1}{N} \sum_{i=0}^{N-1} (x_i - \mu)^2" alt="Equation for the population variance."> -->

<div class="equation" align="center" data-raw-text="\sigma^2 = \frac{1}{N} \sum_{i=0}^{N-1} (x_i - \mu)^2" data-equation="eq:population_variance">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/6ab3adebcb18548ed6183475b9ffdcca36a5a612/lib/node_modules/@stdlib/stats/base/dmeanvar/docs/img/equation_population_variance.svg" alt="Equation for the population variance.">
    <br>
</div>

<!-- </equation> -->

where the population mean is given by

<!-- <equation class="equation" label="eq:population_mean" align="center" raw="\mu = \frac{1}{N} \sum_{i=0}^{N-1} x_i" alt="Equation for the population mean."> -->

<div class="equation" align="center" data-raw-text="\mu = \frac{1}{N} \sum_{i=0}^{N-1} x_i" data-equation="eq:population_mean">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/6ab3adebcb18548ed6183475b9ffdcca36a5a612/lib/node_modules/@stdlib/stats/base/dmeanvar/docs/img/equation_population_mean.svg" alt="Equation for the population mean.">
    <br>
</div>

<!-- </equation> -->

Often in the analysis of data, the true population [variance][variance] is not known _a priori_ and must be estimated from a sample drawn from the population distribution. If one attempts to use the formula for the population [variance][variance], the result is biased and yields a **biased sample variance**. To compute an **unbiased sample variance** for a sample of size `n`,

<!-- <equation class="equation" label="eq:unbiased_sample_variance" align="center" raw="s^2 = \frac{1}{n-1} \sum_{i=0}^{n-1} (x_i - \bar{x})^2" alt="Equation for computing an unbiased sample variance."> -->

<div class="equation" align="center" data-raw-text="s^2 = \frac{1}{n-1} \sum_{i=0}^{n-1} (x_i - \bar{x})^2" data-equation="eq:unbiased_sample_variance">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/6ab3adebcb18548ed6183475b9ffdcca36a5a612/lib/node_modules/@stdlib/stats/base/dmeanvar/docs/img/equation_unbiased_sample_variance.svg" alt="Equation for computing an unbiased sample variance.">
    <br>
</div>

<!-- </equation> -->

where the sample mean is given by

<!-- <equation class="equation" label="eq:sample_mean" align="center" raw="\bar{x} = \frac{1}{n} \sum_{i=0}^{n-1} x_i" alt="Equation for the sample mean."> -->

<div class="equation" align="center" data-raw-text="\bar{x} = \frac{1}{n} \sum_{i=0}^{n-1} x_i" data-equation="eq:sample_mean">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/6ab3adebcb18548ed6183475b9ffdcca36a5a612/lib/node_modules/@stdlib/stats/base/dmeanvar/docs/img/equation_sample_mean.svg" alt="Equation for the sample mean.">
    <br>
</div>

<!-- </equation> -->

The use of the term `n-1` is commonly referred to as Bessel's correction. Note, however, that applying Bessel's correction can increase the mean squared error between the sample variance and population variance. Depending on the characteristics of the population distribution, other correction factors (e.g., `n-1.5`, `n+1`, etc) can yield better estimators.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dmeanvar
```

</section>

<section class="usage">

## Usage

```javascript
var dmeanvar = require( '@stdlib/stats-base-dmeanvar' );
```

#### dmeanvar( N, correction, x, strideX, out, strideOut )

Computes the [mean][arithmetic-mean] and [variance][variance] of a double-precision floating-point strided array `x`.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
var out = new Float64Array( 2 );

var v = dmeanvar( x.length, 1, x, 1, out, 1 );
// returns <Float64Array>[ ~0.3333, ~4.3333 ]

var bool = ( v === out );
// returns true
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **correction**: degrees of freedom adjustment. Setting this parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the [variance][variance] according to `N-c` where `c` corresponds to the provided degrees of freedom adjustment. When computing the [variance][variance] of a population, setting this parameter to `0` is the standard choice (i.e., the provided array contains data constituting an entire population). When computing the unbiased sample [variance][variance], setting this parameter to `1` is the standard choice (i.e., the provided array contains data sampled from a larger population; this is commonly referred to as Bessel's correction).
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: index increment for `x`.
-   **out**: output [`Float64Array`][@stdlib/array/float64] for storing results.
-   **strideOut**: index increment for `out`.

The `N` and `stride` parameters determine which elements are accessed at runtime. For example, to compute the [variance][variance] of every other element in `x`,

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var floor = require( '@stdlib/math-base-special-floor' );

var x = new Float64Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ] );
var out = new Float64Array( 2 );
var N = floor( x.length / 2 );

var v = dmeanvar( N, 1, x, 2, out, 1 );
// returns <Float64Array>[ 1.25, 6.25 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var floor = require( '@stdlib/math-base-special-floor' );

var x0 = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var out0 = new Float64Array( 4 );
var out1 = new Float64Array( out0.buffer, out0.BYTES_PER_ELEMENT*2 ); // start at 3rd element

var N = floor( x0.length / 2 );

var v = dmeanvar( N, 1, x1, 2, out1, 1 );
// returns <Float64Array>[ 1.25, 6.25 ]
```

#### dmeanvar.ndarray( N, correction, x, strideX, offsetX, out, strideOut, offsetOut )

Computes the [mean][arithmetic-mean] and [variance][variance] of a double-precision floating-point strided array using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
var out = new Float64Array( 2 );

var v = dmeanvar.ndarray( x.length, 1, x, 1, 0, out, 1, 0 );
// returns <Float64Array>[ ~0.3333, ~4.3333 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetOut**: starting index for `out`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offset` parameters support indexing semantics based on a starting index. For example, to calculate the [mean][arithmetic-mean] and [variance][variance] for every other value in `x` starting from the second value

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var floor = require( '@stdlib/math-base-special-floor' );

var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var out = new Float64Array( 4 );
var N = floor( x.length / 2 );

var v = dmeanvar.ndarray( N, 1, x, 2, 1, out, 2, 1 );
// returns <Float64Array>[ 0.0, 1.25, 0.0, 6.25 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return a [mean][arithmetic-mean] and [variance][variance] equal to `NaN`.
-   If `N - c` is less than or equal to `0` (where `c` corresponds to the provided degrees of freedom adjustment), both functions return a [variance][variance] equal to `NaN`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var Float64Array = require( '@stdlib/array-float64' );
var dmeanvar = require( '@stdlib/stats-base-dmeanvar' );

var out;
var x;
var i;

x = new Float64Array( 10 );
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = round( (randu()*100.0) - 50.0 );
}
console.log( x );

out = new Float64Array( 2 );
dmeanvar( x.length, 1, x, 1, out, 1 );
console.log( out );
```

</section>

<!-- /.examples -->

<section class="references">

</section>

<!-- /.references -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dmeanvar.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dmeanvar

[test-image]: https://github.com/stdlib-js/stats-base-dmeanvar/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-base-dmeanvar/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dmeanvar/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dmeanvar?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dmeanvar
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dmeanvar/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dmeanvar/main/LICENSE

[arithmetic-mean]: https://en.wikipedia.org/wiki/Arithmetic_mean

[variance]: https://en.wikipedia.org/wiki/Variance

[@stdlib/array/float64]: https://github.com/stdlib-js/stdlib

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->