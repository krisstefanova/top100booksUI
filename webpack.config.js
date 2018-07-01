var config = {
   entry: './main.js',
   output: {
      path:'/',
      filename: 'index.js',
   },
   devServer: {
      inline: true,
      port: 8088
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              query: {
                 presets: ['es2015', 'react']
              }
            }
         }
      ]
   },
   resolve: {
     extensions: ['.js', '.jsx', '.scss', '.css']
   }
}
module.exports = config;
