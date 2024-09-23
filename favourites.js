let populate = function(input) {

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

                    const delFav = document.createElement("button");
                    delFav.textContent = "Remove Favourite";
                    delFav.onclick = function() {
                        delFav.disabled = true;
                        delFav.style.backgroundColor = "#145A32";

                        const del = new XMLHttpRequest();
                        del.open("POST", 'https://wheatley.cs.up.ac.za/u23532387/api.php', true);
                        del.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                        del.onreadystatechange = function() { 
                            if(add.readyState == 4 && add.status == 200) { 
                                window.alert("removed from favourites");
                            }
                        };

                        apikey = "";

                        const value = `; ${document.cookie}`;
                        const parts = value.split(`; ${"apikey"}=`);
                        if (parts.length === 2)
                            apikey= parts.pop().split(';').shift();

                        if(apikey == "")
                            window.alert("you need to be logged in");

                        const req = JSON.stringify({"type":"RemoveFavourites","apikey":apikey,"id":id});
                        del.send(req);
                        location.reload();
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

                    container.appendChild(delFav);
                    container.appendChild(view);
                }
            }

            if(xhr.status == 404) {
                console.log("error 404: file not found");
            }
        }
    };


    const body = JSON.stringify(input);
    console.log(body);
    xhr.send(body);    
}

//remember to add the buttons, but must validate properly


const xhr = new XMLHttpRequest();
xhr.open("POST", 'https://wheatley.cs.up.ac.za/u23532387/api.php', true);
xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xhr.onreadystatechange = function() {
    if(xhr.readyState == 4) {
        if(xhr.status == 200) {
            res = JSON.parse(xhr.responseText);
            favs = res["data"];

            for(var i=0; i<favs.length; i++) {
                populate({"studentnum":"u23532387" , "type":"GetAllListings", "limit":35, "apikey":"51b40d2d8a7d75f13ed9c35932aa9ec2", "return":"*", "search":{"id":favs[i]}});
            }


        }
    }
};

apikey = null;
const x = `; ${document.cookie}`;
const y = x.split(`; ${"apikey"}=`);
if (y.length === 2) 
	apikey = y.pop().split(';').shift();
if(apikey == undefined || apikey == null) {
    window.alert("You have to be logged in");
    history.back();
}

const body = JSON.stringify({"type": "GetAllFavourites","apikey": apikey});
xhr.send(body);