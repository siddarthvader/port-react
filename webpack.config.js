 const path = require("path");
 const HWP = require("html-webpack-plugin");
 const ExtractTextPlugin = require('extract-text-webpack-plugin');

 module.exports = {
   entry: path.join(__dirname, '/src/index.js'),
   output: {
     filename: 'build.js',
     path: path.join(__dirname, '/dist')
   },
   module: {
     rules: [{
         test: /\.(js|jsx)$/,
         exclude: /node_modules/,
         use: {
           loader: "babel-loader"

         }
       },
       { // regular css files
        test: /\.css|less$/,
        loader: ExtractTextPlugin.extract({
          use: [{
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              }
            },
            {
              loader: 'postcss-loader'
            }
          ]
        }),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'sass-loader']
        }),
        include: path.join(__dirname, "src/styles/"),
      },

       {
         test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
         use: [{
           loader: 'file-loader',
           options: {
             name: '[name].[ext]',
             outputPath: 'fonts/'
           }
         }]
       },
       {
         test: /\.html$/,
         use: [{
           loader: "html-loader"
         }]
       }
     ]
   },
   plugins: [
    new ExtractTextPlugin({
      filename: "styles.css",
      allChunks: true
    }),
    new HWP({
      template: path.join(__dirname, "/src/index.html")
    })
  ]
 };