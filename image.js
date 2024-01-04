// let accesskey="zaiocff2Wbf9Yv5vgsYmVQCI89wwnN9p8t1qD2ugIY4"
// const searchForm=document.getElementById("search-form");
// const searchBox=document.getElementById("search-box");
// const searchResult=document.getElementById("search-result");
// const ShowMoreBtn=document.getElementById("show-more-btn");



// let keyword="";
// let page=1;

// async function searchImage(){
//     keyword=searchBox.value;
//     const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}`;
     
//     const response=await fetch(url);
//     const data=await response.json();
    
//     // let result=data.results;
//     // results.map((result)=>{
//     //     let image=document.createElement("img");
//     //     image.src=result.urls.small;
//     //     let imagelink=document.createElement("a")
//     //     imagelink.href=result.links.html;
//     //     imagelink.target="_blank";

//     //     imagelink.appendChild(image);
//     //     searchResult.appendChild(imagelink)
//     // })
// }

// // searchForm.addEventListener("submit",(e)=>{
// //     e.preventDefault();
// //     page=1;
    
    
    
// // })
// // searchImage();

// // Assuming you have a form with id "searchForm" in your HTML
// // const searchForm = document.getElementById("searchForm");
// // let page = 1;

// searchForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     page = 1;
//     searchImage();  // Call your actual searchImage function here
// });

// function searchImage() {
//     // Replace the following with your actual logic for searching images
//     console.log("Search image function called. You need to implement the logic here.");
//     // For example, you might want to make an API call to fetch images
//     // or perform some other kind of image search operation.
// }



// key
// zaiocff2Wbf9Yv5vgsYmVQCI89wwnN9p8t1qD2ugIY4

let accesskey = "zaiocff2Wbf9Yv5vgsYmVQCI89wwnN9p8t1qD2ugIY4";
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");

let keyword = "";
let page = 1;

async function searchImage() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}`;

    const response = await fetch(url);
    const data = await response.json();

    let results = data.results;
    results.forEach((result) => {
        let box=document.createElement("div")
        let image = document.createElement("img");
        image.classList.add("image1")
        box.classList.add("box")
        image.src = result.urls.small;

        // let imagelink = document.createElement("a");
        // imagelink.href = result.links.html;
        // imagelink.target = "_blank";

        // imagelink.appendChild(image);
        box.appendChild(image)
        // searchResult.appendChild(imagelink);
        searchResult.append(box)
    });
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchResult.innerHTML = ""; // Clear previous results
    searchImage();
});









































































































































