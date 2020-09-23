const inputFolder = './input/';

const fs = require('fs');

fs.readdir(    
    inputFolder,     
    (err, files) => {
                        
        files.forEach(file => {
        
            console.log(file);
        });
    }
);