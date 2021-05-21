const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
    // theme: 'vdoing', // 使用npm包主题
    theme: require.resolve('../../theme-vdoing'), // 使用本地主题

    title: "oopanda",
  description: 'oopanda博客,sunho,Android,iOS,Java,Kotlin,Flutter,Python,Django,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,git,github,markdown',
    // base: '/', // 格式：'/<仓库名>/'， 默认'/'
    markdown: {
        lineNumbers: true, // 代码行号
    },

    head,
    plugins,
    themeConfig,
};
