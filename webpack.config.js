module.exports = {
    mode: 'production',
    entry : './src/js/api.js',
    output : {
        path : __dirname+'/dist/',
        filename : 'bundle.js',
        libraryTarget: 'var',
        library: 'Api'
    },

    module:{
        rules:[{
            loader: 'babel-loader?presets[]=es2015',
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            test: /\.jsx?$/,
            exclude: /node_modules/,
            
        }] 
          
    // module: {
    //     rules: [
    //       {
    //         loader:'babel-loader',
    //         test: /\.js$/,
    //         exclude:  /node_modules/,
    //         query: {
    //            presets: ['es2015'] 
    //         }
    //       }
    //     ]
    //   },
    //   resolve: {
    //     extensions: ['.js', '.jsx']
    //   }

}
}