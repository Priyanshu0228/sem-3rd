const fs= require('fs');
fs.writeFileSync('secastudent.txt','this is exp no 2','utf-8');
console.log('file is written  successfuly');
const data=fs.readFileSync('secastudent.txt','utf8');
console.log('file content is given as :',data);
// fs.unlinkSync('secastudent.txt');
// console.log('deleted');

// fs.mkdirSync('sample folder');
// console.log('new folder is  created');

if(fs.existsSync('secastudent.txt')){
    console.log('file exists');

}
else{
    console.log('file not found')
}

