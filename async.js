const fs = require('fs');
const fsPromises = require('fs').promises; // Required for async/await file operations

// 1. Callback-based operations
fs.writeFile('secastudent.txt', 'wlcm to full stack', (err) => {
    if (err) {
        console.log('Error writing file:', err);
        return;
    }
    console.log('File created successfully.');

    fs.readFile('secastudent.txt', 'utf8', (err, data) => {
        if (err) {
            console.log('Error reading file:', err);
            return;
        }
        console.log('File content:');
        console.log(data);

        fs.appendFile('secastudent.txt', '\nSemester:3', (err) => {
            if (err) {
                console.log('Error appending to file:', err);
                return;
            }
            console.log('Data appended successfully.');

            // Optional: Delete file
            // fs.unlink('secastudent.txt', (err) => {
            //     if (err) {
            //         console.error('Error deleting file:', err);
            //         return;
            //     }
            //     console.log('File deleted successfully.');
            // });
        });
    });
});

// 2. Async/Await Append Function
async function appendData() {
    try {
        await fsPromises.appendFile('secastudent.txt', '\nwlcmmm to fsd trainn');
        console.log('Data appended successfully via async/await');
    } catch (error) {
        console.log('Error appending file:', error);
    }
}
appendData();

// 3. Async/Await Rename Function
async function renameFile() {
    try {
        await fsPromises.rename('promises.txt', 'promises_renamed.txt');
        console.log('File renamed successfully via async/await');
    } catch (error) {
        console.log('Error renaming file:', error);
    }
}
renameFile();

// https://github.com/Priyanshu0228/sem-3rd.git