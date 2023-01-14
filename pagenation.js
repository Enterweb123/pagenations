const pagenumber = document.getElementById("pagenumber");
const content = document.getElementById("tbody");

let alldata = [];

async function getusers(){
    try {
        const res = await fetch('./users.json');
        const data = await res.json();
         alldata = data;
        //  console.log(data);
         createPageNumber();
    } catch (error) {
        console.log();
    }
       
}

getusers();

    function createPageNumber() {

        let pageno = 0; 
        let pages = alldata.length / 10;

        for (let i= 0 ; i < pages; i++){

                let button = document.createElement("button");
                    button.innerHTML=`${i+1} page`;
                
                button.onclick = ()=>{
                    pageno = i;
                    seconddata(pageno);
                };  

                pagenumber.append(button);
                firstdata(pageno);
        }
    }

    function firstdata(pageno) {
        content.innerHTML="";
        
        let displayData = alldata.slice(pageno*10 , (pageno + 1)*10);
       
        displayData.map((datas)=>{
            
            const tr = document.createElement("tr");

                tr.innerHTML=`
                <td id="dataid">${datas.id}</td>
                <td >${datas.email}</td>
                <td >${datas.name}</td>`;
                content.appendChild(tr);
        }) 
    }

 function seconddata(pageno) {

    content.innerHTML="";
    let displayData = alldata.slice(pageno*10 , (pageno + 1)*10);
   
    displayData.map((get)=>{
        
        const tr = document.createElement("tr");
            tr.innerHTML=`
            <td id="dataid">${get.id}</td>
            <td >${get.email}</td>
            <td >${get.name}</td>`;
            content.appendChild(tr);
    }) 
}

// 1) way one get datas -------------------
    // xml http request 
    // let http= new XMLHttpRequest();
    // http.open('get','./users.json','true');
    // http.send();
    // http.onload = function(){
    //     if(this.readyState == 4 && this.status == 200){
    //         let users = JSON.parse(this.responseText);

    //         let output = "";
    //         console.log(users.length);
    //     }
    // }


//2) way two get datas -------------------
    //  async function getusers(){
    //     try {
    //         const url = await fetch('./users.json');
    //         const res = await url.json();
        
    //         res.forEach(element => {
    //             console.log(element);
    //         });
    //     } catch (error) {
    //         console.log(error);
    //     } 
    // }
    // getusers();


// 3) danrom 4 degits ---------------------

        // const body = document.querySelector("body")
        // const myotp = document.createElement("h1")

        // const btn = document.createElement("button");
        // btn.innerHTML="send otp";

        // btn.addEventListener('click',()=>{
        //     let random = Math.floor(Math.random() * (10000-1000+1)+1000);
        //     myotp.innerHTML=`Your Otp is : ${random}`;
        // });

        // body.append(btn,myotp);

// 4) pagenation data generate -------------------

        // let names = ["Anton","Jack","steven","warner"];

        // let result = [];

        // const generateName = ()=>{
        //     for(i=0;i<100;i++){
        //         let random = Math.floor(Math.random() * 4);
        //         result.push(names[random])
        //      }
        // };
        // generateName()
        // console.log(result);

// 5) pagenatioñstart ---------------------------
