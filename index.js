const blok = document.querySelector('.blok')
console.log(blok);

async function getRes() {  
    const res = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick')
    let content = await res.json()
    content = content.splice(0, 10)

    let list = blok

    let key 
    for (key in content) {
        // console.log(content[key]);
        blok.innerHTML += `
        <li class="list">
            <h4>${content[key].brand}</h4>
            <p>${content[key].name}</p>
            <p>${content[key].price}</p>
            <img src="${content[key].api_featured_image}" class="imgSize" />
        </li>
        `
    }
    // console.log(content.splice(0, 10));
} 
getRes();

    

    // const getIt = JSON.parse(localStorage.getItem("lipstick"));

    // console.log(getIt);


    // const brand = $(this).data('brand')
    // const category = $(this).data('category')
    
    // blok.innerHTML = JSON.stringify(data)

    // blok.innerHTML = getIt
    // console.log(getIt);


    

// console.log(`${getIt.category}`);

// blok.innerHTML = brand + ' ' + category;
//     };
// getData()

// $(this).data('')

// blok.innerHTML = JSON.parse(window.localStorage.getItem("lipstick"))
// console.log(JSON.parse(window.localStorage.getItem("lipstick"))); 
// blok.innerHTML = localStorage.getItem("lipstick", JSON.stringify(data))


// fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
//   .then()
//   .then(commits => alert(commits[0].author.login));