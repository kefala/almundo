var paths = {
    js: {

        dev: {
            generics: [
                'src/Core/modules.js',
                'src/Core/runs.js',
                'src/Core/configs.js',
                'src/**/Routes/*.js',
                'src/Directives/**/*.js',
                'src/**/Directives/*.js',   
                'src/**/Factories/*.js',
                'src/**/Controllers/*.js',
            ]
        },

        vendor: [
            'node_modules/angular/angular.min.js',
            'node_modules/angular-route/angular-route.min.js',
            'node_modules/angular-aria/angular-aria.min.js',
            'node_modules/angular-animate/angular-animate.min.js',
            'node_modules/angular-cookies/angular-cookies.min.js',
            'node_modules/angular-ui-router/release/angular-ui-router.min.js',
            'node_modules/angular-material/angular-material.min.js'
        ]
    },

    css: {
        dev: [
            'src/**/*.scss',
            '!src/Core/variables.scss'
        ],
        vendor: [
            'node_modules/angular-material/angular-material.min.css'
        ]
    },

    html: {
        directives: [
            'src/Directives/**/*.html',
            'src/**/Directives/*.html'
        ],
        views: [
            'src/**/Views/*.html'
        ]
    },

    'fonts': {
        fonts: []
    }

};

//genericos
var gulp = require('gulp');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');
var order = require("gulp-order");
//javascript
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
//sass
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
//html
var rename = require('gulp-rename');
var minifyHTML = require('gulp-minify-html');

/*------------------------------------------------------------------------------------------------*/

/*  JAVASCRIPT TASK */

gulp.task('lint', function () {
    gulp.src(paths.js.dev.generics)
        .pipe(jshint())
        .pipe(jshint.reporter('default'), { verbose: true })
        .pipe(jshint.reporter('fail'));
});

gulp.task('genericsScripts', function () {
    return gulp.src(paths.js.dev.generics)
        .pipe(concat('generics.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/js/'));
});

gulp.task('vendorScripts', function () {
    return gulp.src(paths.js.vendor)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('public/js/'));
});

/*------------------------------------------------------------------------------------------------*/

/*  CSS TASK */

gulp.task('vendorCss', function () {
    return gulp.src(paths.css.vendor)
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: true
        }))
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest('public/css/'));
});

gulp.task('devCss', function () {
    return gulp.src(paths.css.dev)
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: true
        }))
        .pipe(concat('dev.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('public/css/'));
});

gulp.task('concatCss', function () {
    return gulp.src(['dist/vendor.css', 'dist/dev.css'])
        .pipe(concat('main.css'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('cleanConcatCss', function () {
    gulp.src(['dist/vendor.css', 'dist/dev.css'])
        .pipe(clean({ force: true }));
});

/*------------------------------------------------------------------------------------------------*/

/*  HTML TASK */

gulp.task('moveDirectives', function () {
    return gulp.src(paths.html.directives)
        .pipe(rename(function (path) {
            path.dirname = "";
            path.basename = "directive." + path.basename;
        }))
        .pipe(minifyHTML({ empty: true }))
        .pipe(gulp.dest('public/components/'));
});

gulp.task('moveViews', function () {
    return gulp.src(paths.html.views)
        .pipe(rename(function (path) {
            path.dirname = "";
            path.basename = "view." + path.basename;
        }))
        .pipe(minifyHTML({ empty: true }))
        .pipe(gulp.dest('public/components/'));
});


/*  FONTS TASK */

gulp.task('moveFonts', function () {
    return gulp.src(paths.fonts.fonts)
        .pipe(gulp.dest('dist/fonts/'));
});


/*------------------------------------------------------------------------------------------------*/

/*  MORE TASK */

gulp.task('default', function () {
    runSequence(
        ['lint', 'vendorScripts','genericsScripts', 'moveDirectives', 'moveViews', 'vendorCss', 'devCss']
    );
});

gulp.task('watch', function () {
    var arrayCss = [];
    arrayCss = arrayCss.concat(paths.css.dev);
    arrayCss = arrayCss.concat(paths.css.vendor);

    var arrayHtml = [];
    arrayHtml = arrayHtml.concat(paths.html.directives);
    arrayHtml = arrayHtml.concat(paths.html.views);

    gulp.watch(paths.js.dev.generics, ['genericsScripts']);
    gulp.watch(arrayCss, ['devCss', 'vendorCss']);
    gulp.watch(arrayHtml, ['moveDirectives', 'moveViews']);
});