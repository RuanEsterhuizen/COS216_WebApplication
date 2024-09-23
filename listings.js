//Ruan Esterhuizen u23532387
//synchronous api calls used because all of the entire dataset should be avaliable as soon as possible after an api call

var sleep = function () {
    let spinner = document.createElement("img");
    spinner.className = "loading";
    spinner.src = "img/loading.gif";
    spinner.alt = "loading...";
    document.body.appendChild(spinner);
    setTimeout(function () {
        document.body.removeChild(spinner);
    }, 500);
}

document.cookie = "appearance=light; expire=Fri, 31 Dec 9999 23:59:59 GMT";

let populate = function(input) {
    

    sleep();

    const xhr = new XMLHttpRequest();
    xhr.open("POST", 'https://wheatley.cs.up.ac.za/api/', true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4) {
            if(xhr.status == 200) { 

                let listings = document.createElement("div");
                listings.id = "listings";
                document.body.appendChild(listings);

                let details = JSON.parse(xhr.responseText);

                if(details.data.length == 0) {
                    let errBlock = document.createElement("div");
                    errBlock.className = "listing";

                    let errMsg = document.createElement("h2");
                    errMsg.className = "title";
                    errMsg.textContent = "No properties matching your search/filter parameters could be found";

                    listings.appendChild(errBlock);
                    errBlock.appendChild(errMsg);
                }

                for(var i=0; i<details.data.length; i++) {
                    let listing = document.createElement("div");
                    listing.className = "listing";
                    listings.appendChild(listing);

                    let photodetails = document.createElement("div");
                    photodetails.className = "photodetails";
                    listing.appendChild(photodetails);

                    let title = document.createElement("h2");
                    title.className = "listingTitle";

                    let image = document.createElement("img");
                    image.className = "thumbnail";

                    let container = document.createElement("div");
                    container.className = "details";

                    let price = document.createElement("h2");
                    price.className = "price";

                    let list = document.createElement("ul");

                    let bed = document.createElement("li");
                    let bath = document.createElement("li");
                    let parking_spaces = document.createElement("li");
                    let loc = document.createElement("li");


                    let id = details.data[i].id;
                    title.textContent = details.data[i].title;
                    if(details.data[i].type == "rent") {
                        price.textContent = "R "+details.data[i].price + " per month";
                    }
                    else {
                        price.textContent = "R "+details.data[i].price;
                    }
                    bed.textContent = details.data[i].bedrooms + " Bedrooms";
                    bath.textContent = details.data[i].bathrooms + " Bathrooms";
                    parking_spaces.textContent = details.data[i].parking_spaces + " Parking space(s)";
                    loc.textContent = "Location: "+ details.data[i].location;

                    const getImg = new XMLHttpRequest();

                    getImg.onreadystatechange = function() {
                        if(getImg.readyState == 4) {
                            if(getImg.status == 200) {
                                const response = JSON.parse(getImg.responseText);
                                image.src = response.data[0];
                            }

                            if(getImg.status == 404) {
                                console.log("error 404: file not found");
                            }
                        }
                    };

                    getImg.open("GET", "https://wheatley.cs.up.ac.za/api/getimage?listing_id="+id, true);
                    getImg.send();

                    const addFav = document.createElement("button");
                    addFav.textContent = "Add Favourite";
                    addFav.onclick = function() {
                        addFav.disabled = true;
                        addFav.style.backgroundColor = "#145A32";

                        const add = new XMLHttpRequest();
                        add.open("POST", 'https://wheatley.cs.up.ac.za/u23532387/api.php', true);
                        add.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                        add.onreadystatechange = function() { 
                            if(add.readyState == 4 && add.status == 200) { 
                                window.alert("Property added to favourites");
                                addFav.textContent = "Added to favourites";
                            }
                        };

                        apikey = "";

                        const value = `; ${document.cookie}`;
                        const parts = value.split(`; ${"apikey"}=`);
                        if (parts.length === 2)
                            apikey= parts.pop().split(';').shift();

                        if(apikey == "") {
                            window.alert("you need to be logged in");
                        }
                        else {
                            const req = JSON.stringify({"type":"AddFavourite","apikey":apikey,"id":id});
                            add.send(req);
                        }
                    };
                    

                    const view = document.createElement("a");
                    view.className = "viewProperty";
                    view.href = "view.php";
                    view.textContent = "See More";
                    view.onclick = function() {
                        sessionStorage.setItem("id",id);
                    }


                    listing.appendChild(title);
                    listing.appendChild(photodetails);
                    photodetails.appendChild(image);
                    photodetails.appendChild(container);
                    container.appendChild(price);
                    container.appendChild(list);

                    list.appendChild(bed);
                    list.appendChild(bath);
                    list.appendChild(parking_spaces);
                    list.appendChild(loc);

                    container.appendChild(addFav);
                    container.appendChild(view);
                }
            }

            if(xhr.status == 404) {
                console.log("error 404: file not found");
            }
        }
    };


    const body = JSON.stringify(input);
    xhr.send(body);    
}

populate({"studentnum":"u23532387" , "type":"GetAllListings", "limit":35, "apikey":"51b40d2d8a7d75f13ed9c35932aa9ec2", "return":"*"});

let clearListings = function() {
    const listings = document.getElementById("listings");
    document.body.removeChild(listings);
}

//search
var searchTerm = "";
const searchText = document.getElementById("searchText");
const searchbtn = document.getElementById("search");

    apikey = "";

    const v = `; ${document.cookie}`;
    const p = value.split(`; ${"apikey"}=`);
        if (p.length === 2)
            apikey= p.pop().split(';').shift();

    if(apikey != ""){

        var savedSearch = "";

        savedSearch = ('; '+document.cookie).split(`; search=`).pop().split(';')[0];

        if(savedSearch!="") {
            searchText.value = savedSearch;
            searchTerm = savedSearch;
        }
    }

searchText.oninput = function() {
    searchTerm = searchText.value;
}
searchbtn.onclick = function() {
    clearListings();
    
    if(searchTerm == "") {
        populate({"studentnum":"u23532387" , "type":"GetAllListings", "limit":35, "apikey":"51b40d2d8a7d75f13ed9c35932aa9ec2", "return":"*"});
    }

    populate({"studentnum":"u23532387" , "type":"GetAllListings", "limit":35, "apikey":"51b40d2d8a7d75f13ed9c35932aa9ec2", "return":"*", "search":{"location":searchTerm}});
}

//buy or rent
var buyrent = "sale";
const saleRad = document.getElementById("sale");
saleRad.onclick = function() {
    buyrent = saleRad.value;
}
const rentRad = document.getElementById("rent");
rentRad.onclick = function() {
    buyrent = rentRad.value;
}

//pricerange
var minprice = 0;
var maxprice = 100000000;
const minpriceInput = document.getElementById("minprice");
minpriceInput.oninput = function() {
    minprice = minpriceInput.value;
}
const maxpriceInput = document.getElementById("maxprice");
maxpriceInput.oninput = function() {
    maxprice = maxpriceInput.value;
}

//bedrooms
var numBedrooms = 0;
const bedrooms = document.getElementById("bedroomFilter");
bedrooms.oninput = function() {
    numBedrooms = bedrooms.value;
    
}

//sort
var sortBy = "title";
var sortOrder = "ASC";
const sort = document.getElementById("sortby");
sort.oninput = function() {
    switch(sort.value) {
        case "title":
            sortBy = title;
            break;
        case "priceAsc" :
            sortBy = "price";
            sortOrder = "ASC";
            break;
        case "priceDsc" :
            sortBy = "price";
            sortOrder = "DESC";
            break;
    }
}

//apply filters
const filter = document.getElementById("filter");
filter.onclick = function() {
    clearListings();
    //populate new search results
    if(searchTerm != "") {
        populate({"studentnum":"u23532387" , "type":"GetAllListings", "limit":35, "apikey":"51b40d2d8a7d75f13ed9c35932aa9ec2", "return":"*", 
        "search":{"location":searchTerm, "type":buyrent, "price_min" : minprice, "price_max" : maxprice, "bedrooms" : numBedrooms},
        "sort":sortBy, "order":sortOrder});
    }
    else {
        populate({"studentnum":"u23532387" , "type":"GetAllListings", "limit":35, "apikey":"51b40d2d8a7d75f13ed9c35932aa9ec2", "return":"*", 
        "search":{"type":buyrent, "price_min" : minprice, "price_max" : maxprice, "bedrooms" : numBedrooms},
        "sort":sortBy, "order":sortOrder});
    }

}

const savesearch = document.getElementById("savesearch");
savesearch.onclick = function() {
    apikey = "";

    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${"apikey"}=`);
    if (parts.length === 2)
        apikey= parts.pop().split(';').shift();

    if(apikey == "")
        window.alert("you need to be logged in");
    else {
        document.cookie = "search= "+searchTerm+"; expires=Fri, 31 Dec 9999 23:59:59 GMT";
        window.alert("search saved");
    }
}


    












