// Let & Const both es6 me he  ....................................................................
// Let makes variable , Const makes constant.
//both window object me add hote he..
// they can use in the {}braket ...

// var a = 'neel';
// {
//     const a = 'eel'; 
//     console.log(a);
// }
// let b = 'nilay';
// {
//     let b = 'ilay';
//     console.log(b);
// }


//.......................................ARROW FUNCTION ...............................
// 3 variations -> basic arrow function
                // -> arrow function with parameter
                // -> arrow function with implicite return


//fat arrow function  ()=> {}
//......... fat arrow + implicit return ..... aama retun direct value pass thai jay
// const a =()=> 121;
// console.log(a());

//.............................. TEMPLATE LITERALS `BACKTICK` ..........................
// console.log(`this ${2+2} is 4 and ${2-2}`);


//............................. DEFAULT PERAMETER ............................................
// function value(v=0, a=0, l=0, u=0, e=0){ 
    // 0 ae default value che koi bhi argument ma pass na karavo to 0 lai le    
// console.log(v,a,l,u,e);        
// }

// value(1,2,3,4,5);
// value(1);


//............................... REST AND SPREAD ...............................
// [...spread/rest both looks same ]

// spread use for copy value or replace that value location
// rest use for store value in variable (extra value ne alag variable ma store kare)

// function abcd(a,b,c,...d){
//     console.log(a,b,c, d);  //1 to 4 pachi ni extra value d ma store thai jase.
// }
// abcd(1,2,3,4,5,6,7);


//.................... DESTRUCTURING ..... array ..... object ...................
    //...............   array ............
// var a = [1,2,3];
// var [b,c,d,e] = a;  //e undefind avse because value assign nahi..
// console.log(b,c,d,e);

// var [b,,c] = a;        // , aa jagiya ni  value skip karse , 
// console.log(b,c,d); 

 // ...............  objact ..........................
// var obj = {name: "harsh", age: 22};
// var {age} = obj;
// console.log(age);


//.......................... PROMISES ........................................
//............ .then ....means true..else if ni jem...



//.................ASYNC AWAIT.......................
// asynchronise means line by line /.......
// await means (strict line by line ) they first getdata then run to next line means asynchronous

// async function data(){
//    api ma data raw formate ma hoy tene json file ma convert karvo pade so use new variable for store json formate data
//     let rawdata = await fetch('https://random-data-api.com/api/v2/users');
//     let jsondata = await rawdata.json();
//     console.log(jsondata);
// }
// data();

//.............. TRY & CATCH ......................................
// javascript asynchronous lag che so te line by line run thay aema amuk vachhe error ave to next run na thay 
// so programe ne run rakhva try catch no use thay
// console.log('sacho code');
// try{
//     console.log(wrongline);
// }
// catch(err){
//     console.log (err);
// }
// console.log('sacho code');


