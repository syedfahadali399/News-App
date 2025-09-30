let form = document.getElementById("form")
let getData = document.getElementById("get-user-data")
let appendNews = document.getElementById("append-div")
let showAllNews = document.getElementById("all")
let showBusinessNews = document.getElementById("business")
let showGeopoliticsNews = document.getElementById("geopolitics")
let showHealthNews = document.getElementById("health")
let showStocksNews = document.getElementById("stocks")
let forMobileForm = document.getElementById("form-for-mobile")
let getDataForMobile = document.getElementById("get-user-data-for-mobile")
let showBusinessNewsForMobile = document.getElementById("business-for-mobile")
let showGeopoliticsNewsForMobile = document.getElementById("geopolitics-for-mobile")
let showHealthNewsForMobile = document.getElementById("health-for-mobile")
let showStocksNewsForMobile = document.getElementById("stocks-for-mobile")

// prevoius api key
let api_key = "d653e88fdb344915a6ccf2bb4438ee12"

// let api_key = "ceccf71c72f6422d890b27a4547266d1"

function hideshowElements() {
    appendNews.innerHTML = ""
}

function createNewsDesign(newsUrl, newsImg, newsWebsite, newsTitle, newsAuthor, newsDate, newsDescription) {
    
    let createatag = document.createElement("a")
    createatag.href = `${newsUrl}`
    createatag.target = "_blank";
    createatag.className = "block max-w-lg mx-auto bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-300";

    let createimg = document.createElement("img")
    createimg.src = `${newsImg}`
    createimg.alt = "img"
    createimg.className = "w-full h-56 object-cover"

    let creatediv1 = document.createElement("div")
    creatediv1.className = "p-4"

    let createspan1 = document.createElement("span")
    createspan1.textContent = `${newsWebsite}`
    createspan1.className = "text-xs text-gray-500 uppercase tracking-wide"

    let createh2 = document.createElement("h2")
    createh2.textContent = `${newsTitle}`
    createh2.className = "mt-2 text-xl font-semibold text-gray-900 hover:text-blue-600"

    let creatediv2 = document.createElement("div")
    creatediv2.className = "flex items-center justify-between text-sm text-gray-500 mt-1"

    let createp1 = document.createElement("p")
    createp1.textContent = `${newsAuthor}`
    createp1.className = "font-medium text-gray-700"

    let createp2 = document.createElement("p")
    createp2.textContent = `${newsDate}`

    creatediv2.appendChild(createp1)
    creatediv2.appendChild(createp2)

    let createp3 = document.createElement("p")
    createp3.textContent = `${newsDescription}`
    createp3.className = "mt-3 text-gray-700 leading-relaxed"

    creatediv1.appendChild(createspan1)
    creatediv1.appendChild(createh2)
    creatediv1.appendChild(creatediv2)
    creatediv1.appendChild(createp3)
    createatag.appendChild(createimg)
    createatag.appendChild(creatediv1)

    appendNews.appendChild(createatag)

}

async function getAllNews(topic) {
    
    hideshowElements()

    let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${api_key}`
    let req = new Request(url)
    fetch(req)
    .then((response) => {
        if(!response) {
            throw new Error("Api limit is full")
        }
        return response.json()
    })
    .then((data) => {
        for(let i = 0; i < 80; i++) {
            if(!data.articles[i].url || !data.articles[i].urlToImage || !data.articles[i].source.name || !data.articles[i].title || !data.articles[i].author || !data.articles[i].publishedAt || !data.articles[i].description) {
                continue
            }
            createNewsDesign(
                data.articles[i].url, 
                data.articles[i].urlToImage, 
                data.articles[i].source.name, 
                data.articles[i].title, 
                data.articles[i].author, 
                data.articles[i].publishedAt, 
                data.articles[i].description
            )
        }
    })
    .catch((error) => {
        throw new Error("failed to Fetch data", error)
    })
}

window.onload = () => {
    getAllNews("pakistan")
}

showBusinessNews.addEventListener("click", function(e) {   
    e.preventDefault()
    getData.value = ""
    getAllNews("business")
})  

showGeopoliticsNews.addEventListener("click", function(e) {
    e.preventDefault()
    getData.value = ""
    getAllNews("geopolitics")

}) 

showHealthNews.addEventListener("click", function(e) {
    e.preventDefault()
    getData.value = ""
    getAllNews("health")

}) 

showStocksNews.addEventListener("click", function(e) {
    e.preventDefault()
    getData.value = ""
    getAllNews("stocks")

}) 

showAllNews.addEventListener("click", function(e) {
    e.preventDefault()
    getData.value = ""
    getAllNews("pakistan")

}) 

form.addEventListener("submit", function(e) {
    e.preventDefault()

    let convertData = getData.value
    if(!convertData) {
        alert("Please add some detail for getting news")
        return
    } else {
        getAllNews(convertData)
    }
})

forMobileForm.addEventListener("submit", function(e) {
    e.preventDefault()
    
    let convertData = getDataForMobile.value
    if(!convertData) {
        alert("Please add some detail for getting news")
        return
    } else {
        getAllNews(convertData)
    }
})

showBusinessNewsForMobile.addEventListener("click", function(e) {   
    e.preventDefault()
    getDataForMobile.value = ""
    getAllNews("business")
})  
        
showGeopoliticsNewsForMobile.addEventListener("click", function(e) {
    e.preventDefault()
    getDataForMobile.value = ""
    getAllNews("geopolitics")
        
}) 
        
showHealthNewsForMobile.addEventListener("click", function(e) {
    e.preventDefault()
    getDataForMobile.value = ""
    getAllNews("health")
        
}) 
        
showStocksNewsForMobile.addEventListener("click", function(e) {
    e.preventDefault()
    getData.value = ""
    getAllNews("stocks")
        
}) 