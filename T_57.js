// Synchronous oR Blocking
// line by line execution 


// ASynchronous oR non-Blocking
// line by line execution not guaranteed
// callbacks will fire


const fs=require("fs");
  fs.readFile("1.txt","utf-8",(err,data)=>{
    console.log(data);
  });
  console.log("ksdgflaudgfasjkdbchakdfiyw;dfioujasdlkcnasd.kchl");