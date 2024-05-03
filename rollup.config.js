module.exports = [
    {    
        input: './index.js',   
        output: {
            file: './build/index.js',
            format: 'es'
        }
    },
   
    {    
        input: './src/helpers/wa-client.js',   
        output: {
            dir: './build/src/helpers/wa-client.js',
            format: 'es'
        }
    }
];
