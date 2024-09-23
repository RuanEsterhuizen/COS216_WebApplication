//Ruan Esterhuizen u23532387
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}  

const id = sessionStorage.getItem("id");

let spinner = document.createElement("img");
spinner.className = "loading";
spinner.src = "img/loading.gif";
document.body.appendChild(spinner);

const xhr = new XMLHttpRequest();
xhr.open("POST", 'https://wheatley.cs.up.ac.za/api/', true);
xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xhr.onreadystatechange = function() {
    if(xhr.readyState == 4) {
        if(xhr.status == 200) {

            let details = JSON.parse(xhr.responseText);

            const getImg = new XMLHttpRequest();

            getImg.onreadystatechange = function() {
                if(getImg.readyState == 4) {
                    if(getImg.status == 200) {
                        const response = JSON.parse(getImg.responseText);
                        var pics = response.data;
                        //0-9
                        let slides = document.getElementById("slides");

                        let img = document.createElement("img");
                        img.src = response.data[0];
                        img.className = "slide";
                        slides.appendChild(img);

                        const prevBtn = document.getElementById("prev");
                        const nextBtn = document.getElementById("next");

                        var curr = 0;

                        nextBtn.onclick= function() {
                            if(curr+1 > 9) {
                                curr = 0;
                            }
                            else {
                                curr = curr+1;
                            }
                            img.src = pics[curr];
                        }

                        prevBtn.onclick = function() {
                            if(curr-1 < 0) {
                                curr = 9;
                            }
                            else {
                                curr = curr-1;
                            }
                            img.src = pics[curr];
                        }
                    }

                    if(getImg.status == 404) {
                        console.log("error 404: file not found");
                    }
                }
            };

            getImg.open("GET", "https://wheatley.cs.up.ac.za/api/getimage?listing_id="+id, true);
            getImg.send();

            let heading = document.getElementById("title");
            let title = document.createElement("h1");

            let propertyDetails = document.createElement("div");
            propertyDetails.className = "propertyDetails";

            let price = document.createElement("h2");
            let loc = document.createElement("h3");
            let url = document.createElement("a");
            let description = document.createElement("p");

            let list = document.createElement("ul");

            let bed = document.createElement("li");
            let bath = document.createElement("li");
            let parking_spaces = document.createElement("li");
                

            title.textContent = details.data[0].title;
            heading.appendChild(title);

            if(details.data[0].type == "rent") {
                price.textContent = "R "+details.data[0].price + " per month";
            }
            else {
                price.textContent = "R "+details.data[0].price;
            }
            description.textContent = details.data[0].description;
            bed.textContent = details.data[0].bedrooms + " Bedrooms";
            bath.textContent = details.data[0].bathrooms + " Bathrooms";
            parking_spaces.textContent = details.data[0].parking_spaces + " Parking space(s)";
            loc.textContent = "Location: "+ details.data[0].location;
            url.href = details.data[0].url;
            url.textContent = "See full listing";

            const addFav = document.createElement("button");
            addFav.textContent = "Add Favourite";
            addFav.onclick = function() {
            alert("Property added to favourites");
                addFav.disabled = true;
                addFav.style.backgroundColor = "#145A32";
            }
            document.body.appendChild(propertyDetails);
            propertyDetails.appendChild(price);
            propertyDetails.appendChild(loc);
            propertyDetails.appendChild(url);
            propertyDetails.appendChild(description);
            propertyDetails.appendChild(list);
            list.appendChild(bed);
            list.appendChild(bath);
            list.appendChild(parking_spaces);

            let amenitiesHead = document.createElement("h3");
            amenitiesHead.textContent = "Amenities:"
            propertyDetails.appendChild(amenitiesHead);

            let amenities = document.createElement("p");
            amenities.textContent = details.data[0].amenities;
            propertyDetails.appendChild(amenities);
                
        }
    }

        if(xhr.status == 404) {
            console.log("error 404: file not found");
        }
};

const body = JSON.stringify({"studentnum":"u23532387" , "type":"GetAllListings", "limit":1, "apikey":"51b40d2d8a7d75f13ed9c35932aa9ec2", "return":"*", "search":{"id":id}});
console.log(body);
xhr.send(body);

sleep(1000).then(() => { document.body.removeChild(spinner); });