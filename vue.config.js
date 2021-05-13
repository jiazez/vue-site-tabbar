/*
 * 主配置文件
 */
const path = require('path');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, dir);
}

const cdn = {
  // 忽略打包的第三方库
  externals: {
    'vue': 'Vue',
    'axios': 'axios',
  },

  // 通过cdn方式使用
  js: [
    'https://cdn.bootcdn.net/ajax/libs/vue/2.6.12/vue.min.js',
    'https://cdn.bootcdn.net/ajax/libs/axios/0.20.0/axios.min.js',
  ],
  css: ['https://cdn.bootcdn.net/ajax/libs/Swiper/6.3.5/swiper-bundle.min.css'],
};
module.exports = {
  productionSourceMap: false, // 生产禁止显示源代
  publicPath: `${process.env.VUE_APP_BASE_URL}`,
  integrity: true,
  filenameHashing: true,

  chainWebpack: (config) => {
    // 常用alias
    config.output.filename('js/[name].[hash].js').end();
    config.output.chunkFilename('js/[name].[chunkhash].js').end();

    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'));

    config.performance.set('hints', false);

    // 增加图片的压缩处理
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        bypassOnDebug: true,
      })
      .end();

    if (process.env.NODE_ENV === 'production') {
      config.plugin("html").
      tap(args => {
        args[0].cdn = cdn;
        return args;
      });
    }
  },

  configureWebpack: (config) => {
    // 开发时也使用cdn是为了方便和版本统一 当然也可以本地时用node_modules，发布用cdn
    // 为生产环境修改配置
    if (process.env.NODE_ENV === 'production') {
      config.externals = cdn.externals;
      config.plugins.push(
        // 使用UglifyJsPlugin去掉console 可以略微降低文件大小
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              drop_debugger: true,
              drop_console: true, //生产环境自动删除console
            },
            warnings: false,
          },
          sourceMap: false,
          parallel: true, //使用多进程并行运行来提高构建速度。默认并发运行数：os.cpus().length - 1。
        })
      );
    }
  },
  pluginOptions: {},
};