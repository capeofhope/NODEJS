// const fs=require('fs');
const fsPromises=require('fs').promises;
const path = require('path');

const fileOps=async()=>{
    try{
        const data =await fsPromises.readFile(path.join(__dirname,'files','starter.txt'),'utf8');
        // console.log(data);
        await fsPromises.unlink(path.join(__dirname,'files','starter.txt'));
        await fsPromises.writeFile(path.join(__dirname,'files','promiseWrite.txt'),data);
        await fsPromises.appendFile(path.join(__dirname,'files','promiseWrite.txt'),'\n Nice to meet you.');
        await fsPromises.rename(path.join(__dirname,'files','promiseWrite.txt'),path.join(__dirname,'files','promiseComplete.txt'));
        const newData =await fsPromises.readFile(path.join(__dirname,'files','promiseComplete.txt'),'utf8');
        console.log(newData);
    }catch(err){
        console.log(err);
    }
}

fileOps();

// fs.readFile(path.join(__dirname,'files','starter.txt'),'utf-8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })

// console.log('Hello...')


//for making new files

// fs.writeFile(path.join(__dirname,'files','reply.txt'),"Nice to meet you",(err)=>{

//     if(err) throw err;
//     console.log('Write Complete');

//     //for extending content in an existing file

//     fs.appendFile(path.join(__dirname,'files','reply.txt'),"\nYes it is.",(err)=>{
//         if(err) throw err;
//         console.log('Append Complete');

//         //for renaming file Name

//         fs.rename(path.join(__dirname,'files','reply.txt'),path.join(__dirname,'files','newReply.txt'),(err)=>{
//             if(err) throw err;
//             console.log('Rename Complete');
//         })
//     })
// })

//exit on uncaught errors
process.on('uncaughtException',err=>{
    console.log(`There was an uncaught error: ${err}`);
    process.exit(1);
})