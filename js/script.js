console.log("howdy");
let memeArray;
let buttonClicked=0;
let imageHTML=document.getElementById('body');
let img=document.createElement('img');
const myHeaders = new Headers();
myHeaders.append("x-apihub-key", "lYrj-KOMtKiStLzuttl-a4IvbOh3bL-xsnYqkn7iSH0pSHYPSY");
myHeaders.append("x-apihub-host", "Programming-Memes-Images.allthingsdev.co");
myHeaders.append("x-apihub-endpoint", "c1752127-9642-42d2-935d-d93c18f65f2c");

const requestOptions = {
   method: "GET",
   headers: myHeaders,
   redirect: "follow"
};

!async function() {
    await fetch("https://Programming-Memes-Images.proxy-production.allthingsdev.co/v1/memes", requestOptions)
       .then((response) => response.text())
       .then((result) => {console.log(result);
            let JSONResult=JSON.parse(result);
            console.log(JSONResult);
            
            MineMemes(JSONResult);
        })
       .catch((error) => console.error(error));
    
}();

function MineMemes(memes) {
    memeArray = memes.map(item => item.image);
    console.log(memeArray);
}
function returnMemeURL(){
    console.log(memeArray);
    let temp= memeArray[buttonClicked];
    img.src=temp;
    imageHTML.appendChild(img);
    buttonClicked++;
}


// const myHeaders = new Headers();
// myHeaders.append("x-apihub-key", "lYrj-KOMtKiStLzuttl-a4IvbOh3bL-xsnYqkn7iSH0pSHYPSY");
// myHeaders.append("x-apihub-host", "Movies-Verse.allthingsdev.co");
// myHeaders.append("x-apihub-endpoint", "4f700f4a-4bd2-4604-8d5b-7b5e4c976c65");

// const requestOptions = {
//    method: "GET",
//    headers: myHeaders,
//    redirect: "follow"
// };

// !async function () {
//     await fetch("https://Movies-Verse.proxy-production.allthingsdev.co/api/movies/upcoming-movies", requestOptions)
//        .then((response) => response.text())
//        .then((result) => {
//         console.log("fired");
        
//         MineData(result);
//        })
//        .catch((error) => console.error(error));
// }();

// function MineData(dataFromApi) {
//     console.log(dataFromApi);
//     let temp = JSON.parse(dataFromApi);
//     console.log(temp.movies[0].list[2]);
    
// }
// !async function () {
//     await fetch("https://Movies-Verse.proxy-production.allthingsdev.co/api/movies/upcoming-movies", requestOptions)
//        .then((response) => response.text())
//        .then((result) => {console.log(result)
//         MineData(result);
//        })
//        .catch((error) => console.error(error));
    
// }