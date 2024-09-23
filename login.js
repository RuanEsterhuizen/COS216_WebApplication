const xhr = new XMLHttpRequest();
xhr.open("POST", 'https://wheatley.cs.up.ac.za/u23532387/api.php', true);
xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xhr.onreadystatechange = function() { 
    if(xhr.readyState == 4 && xhr.status == 200) { 
        res = JSON.parse(xhr.responseText);
        sessionStorage.setItem("apikey",res.data.apikey);

        var apikey = sessionStorage.getItem("apikey");
        document.cookie = "apikey="+apikey;

        const getName = new XMLHttpRequest();
        getName.open("POST",'https://wheatley.cs.up.ac.za/u23532387/api.php', true);
        getName.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        getName.onreadystatechange = function() { 
            if(getName.readyState == 4 && getName.status == 200) { 
                res = JSON.parse(getName.responseText);
                document.cookie = "firstname="+res["data"]["name"]+"; expires=Fri, 31 Dec 9999 23:59:59 GMT;";
                location.reload();
            }
        };
        getName.send(JSON.stringify({"type":"GetUsername","apikey":apikey}));


        window.location.replace("index.php");
    }
    else if(xhr.status == 404) {
        console.log("error 404: file not found");
    }
    else if(xhr.status == 400) {
        res = JSON.parse(xhr.responseText);
        console.log(res.data);
    }
};
const body = JSON.stringify({"type":"Login","email":email,"password":password});
xhr.send(body);

