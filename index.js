// const blok = document.querySelector('.blok')
// console.log(blok);

// async function getRes() {
//     const res = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick')
//     let content = await res.json()
//     content = content.splice(0, 10)

//     let list = blok

//     let key
//     for (key in content) {
//         // console.log(content[key]);
//         blok.innerHTML += `
//         <li class="list">
//             <h4>${content[key].brand}</h4>
//             <p>${content[key].name}</p>
//             <p>${content[key].price}</p>
//             <img src="${content[key].api_featured_image}" class="imgSize" />
//         </li>
//         `
//     }
//     // console.log(content.splice(0, 10));
// }
// getRes();

// #############################################################################################
// #############################################################################################
// #############################################################################################
    
const blok = document.querySelector('.blok')
console.log(blok);

async function getRes() {
    const res = await fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11')
    // ?page=19
    let content = await res.json()
    // content = content.splice(0, 10)

    let key
    for (key in content) {
        console.log(content[key], content, [key]);

        blok.innerHTML += `
        <li class="list">
            <p>${content[key].name}</p>
            <p>${content[key].gender}</p>
            <img src="${content[key].image}" class="imgSize" />
        </li>
        `
       
    }
    // console.log(content.splice(0, 10)); 
}
getRes();

