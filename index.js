console.log("Main-side code running");

window.onload = function () {

    // document.getElementById("btr1").innerHTML = "data.name";
    // document.getElementById("btr1").onclick = function () {
    //     jumpPage1();
    // };

    // document.getElementById("btr2").onclick = function () {
    // setBtr2();
    // };

    // document.getElementById("btr3").onclick = function () {
    //   setBtr3();
    //   };



    document.getElementById("DBtr").onclick = function () {
             test();
         };



         alert(process.env.API_KEY);


}


function test(){
//   alert("CLICKED");

  let dBox=document.getElementById("DBox");
  let dEle=JSON.stringify(dBox.value)
  console.log(dEle);

  let elements=readOpt(JSON.parse(dEle));



  //console.log(getRandomIntInclusive(0,elements.length-1));
  //console.log(elements);
  //document.getElementById("OBox").value=elements[0];
  document.getElementById("OBox").value=elements[getRandomIntInclusive(0,elements.length-1)];



  //alert(dElement);
}



function readOpt(opt){
    let output=[];
    let temp="";
    for(let i=0;i<opt.length;i++){
       
        if(opt[i]=='\n'){
            if(temp!=""){
            output.push(temp);
            }
            temp="";
        }else{
            temp+=opt[i];
        }
        //console.log(i);
    }
    if(temp!=""){
        output.push(temp);
        }

    //console.log(output);

    return output;
}


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}




// function setBtr3(){
//   alert("CLICKED");
//   window.location.href = "page1.html";
  
// }




// function setBtr2(){
//   if(document.getElementById("banner").style.animationPlayState == "running"){
//     document.getElementById("banner").style.animationPlayState = "paused";
//     document.getElementById("btr2").innerHTML = "play";
//   }else{
//     document.getElementById("banner").style.animationPlayState = "running";
//     document.getElementById("btr2").innerHTML = "pause";
//   }

// }




// async function jumpPage1() {
//     console.log("this is jumping");
  
//     fetch("/.netlify/functions/api/abc", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({"hello":"hi!"}),
//     }).then(async (response) => {
//         console.log(response.status);
//       if (response.status === 200) {
//         const data = JSON.parse(await response.json());
//         console.log("this is front end login status 200");
//         alert(data);
//         window.location.href ="./ft/p1.html";
//       } else alert("username or password incorrect");
//     });
//   }