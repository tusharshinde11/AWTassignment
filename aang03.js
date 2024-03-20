const fs = require('fs');
fs.writeFile('input.txt', 'tushar shinde', 'utf8', (err) => {
    if (err) {
        console.error(`Error writing into file input.txt: ${err.message}`);
    } else {
        console.log('Data written to input.txt successfully.');
        fs.readFile('input.txt', 'utf8', (err, data) => {
            if (err) {
                console.error(`Error reading file input.txt: ${err.message}`);
            } else {
                const uppercaseData = data.toUpperCase();

                fs.writeFile('output.txt', uppercaseData, 'utf8', (err) => {
                    if (err) {
                        console.error(`Error writing into file output.txt: ${err.message}`);
                    } else {
                        console.log('Data written to output.txt successfully.');
                    }
                });
            }
        });
    }
});