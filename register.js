var body = JSON.stringify({"type":"Register", "name":fname, "surname":lname, "email":email, "password":password});
console.log(body);

const xhr = new XMLHttpRequest();
xhr.open("POST", 'https://wheatley.cs.up.ac.za/u23532387/api.php', true);
xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xhr.onreadystatechange = function() { 
    if(xhr.readyState == 4 && xhr.status == 200) { 
        res = JSON.parse(xhr.responseText);
        sessionStorage.setItem("apikey",res.data.apikey);
        window.location.replace("login.php");
    }
    else if(xhr.status == 404) {
        console.log("error 404: file not found");
    }
    else if(xhr.status == 400) {
        res = JSON.parse(xhr.responseText);
        console.log(res.data);
    }
};
xhr.send(body);