const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");

// Função para chamar os itens da pasta styles
function scripts() {
  return gulp
    .src("./src/scripts/*.js")
    .pipe(uglify()) // Compile o SCSS para CSS com estilo comprimido
    .pipe(gulp.dest("./dist/js")); // Salve o arquivo compilado na pasta de destino
}

// Função para chamar os itens da pasta styles
function styles() {
  return gulp
    .src("./src/styles/*.scss")
    .pipe(sass({ outputStyle: "compressed" })) // Compile o SCSS para CSS com estilo comprimido
    .pipe(gulp.dest("./dist/css")); // Salve o arquivo compilado na pasta de destino
}

// Função para chamar os itens da pasta imagens
function images() {
  return gulp
    .src("./src/images/**/*")
    .pipe(imagemin()) // Comprimir as imagens
    .pipe(gulp.dest("./dist/images")); // Salvar as imagens comprimidas na pasta de destino
}

// Tarefa padrão
exports.default = gulp.parallel(styles, images, scripts);

// Tarefa de watch para monitorar mudanças nos arquivos .scss e imagens
exports.watch = function () {
  gulp.watch("./src/styles/*.scss", gulp.parallel(styles));
  gulp.watch("./src/images/**/*", gulp.parallel(images));
  gulp.watch("./src/scripts/*.js", gulp.parallel(scripts));
};
