import fs from "fs";

fs.copyFileSync("source.txt","dest.txt");
console.log("file copied sychronously");

fs.copyFile("source1.txt","dest.txt",(err)=>{
    if (err) throw err;
    console.log("file copied successfully");
    
});
console.log("Both finished");

