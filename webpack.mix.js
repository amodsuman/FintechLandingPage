// webpack.mix.js

let mix = require('laravel-mix');

mix.js('assets/js/app.js', 'js')
    .sass('assets/scss/app.scss', 'css')
    .setPublicPath('dist')
    .options({
        postCss: [
            require('tailwindcss')
        ],
    })
    .browserSync({
        server: './',
        files: ['./**/*.html', './dist'],
    });