//Ruan Esterhuizen u23532387
//API Key 51b40d2d8a7d75f13ed9c35932aa9ec2
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}    


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

            let agents = document.createElement("div");
            agents.className = "agents";
            document.body.appendChild(agents);

            for(var i=0; i<15; i++) {

                let agentDiv = document.createElement("div");
                agentDiv.className = "agency";

                let logo = document.createElement("img");
                logo.className = "logo";

                let agentInfo = document.createElement("div");
                agentInfo.className = "agentinfo";

                let agencyName = document.createElement("h2");
                let description = document.createElement("p");
                let url = document.createElement("a");


                let name = details.data[i].name;
                agencyName.textContent = details.data[i].name;
                description.textContent = details.data[i].description;
                url.href = details.data[i].url;
                url.textContent = details.data[i].url;
                

                const getImg = new XMLHttpRequest();

                getImg.onreadystatechange = function() {
                    if(getImg.readyState == 4) {
                        if(getImg.status == 200) {
                            const response = JSON.parse(getImg.responseText);
                            logo.src = response.data;
                        }

                        if(getImg.status == 404) {
                            console.log("error 404: file not found");
                        }
                    }
                };

                getImg.open("GET", "https://wheatley.cs.up.ac.za/api/getimage?agency="+name, true);
                //sync, rest of code not interruped
                getImg.send();

                agents.appendChild(agentDiv);
                agentDiv.appendChild(logo);
                agentDiv.appendChild(agentInfo);
                agentInfo.appendChild(agencyName);
                agentInfo.appendChild(description);
                agentInfo.appendChild(url);

            }
        }

        if(xhr.status == 404) {
            console.log("error 404: file not found");
        }
    }
};
const body = JSON.stringify({"studentnum":"u23532387" , "type":"GetAllAgents", "limit":15, "apikey":"51b40d2d8a7d75f13ed9c35932aa9ec2"});
xhr.send(body);

sleep(1000).then(() => { document.body.removeChild(spinner);});







