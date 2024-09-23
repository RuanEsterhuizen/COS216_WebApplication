function toggleTheme(button) { 
    var theme = document.getElementsByTagName('link')[0]; 
    if (theme.getAttribute('href') == 'css/style.css') { 
        button.innerHTML = "Light Mode";
        theme.setAttribute('href', 'css/dark.css'); 
    } else { 
        button.innerHTML = "Dark Mode";
        theme.setAttribute('href', 'css/style.css'); 
    } 
} 


const foot = document.createElement("footer");
foot.className = "footer";

const ls = document.createElement("ul");
ls.classname = "leftside";

const home = document.createElement("li");

const item = document.createElement("a");
item.href = "https://wheatley.cs.up.ac.za/u23532387/";
item.innerHTML = "eKhaya Properties";

const rs = document.createElement("ul");
rs.className = "rightside";

const dm = document.createElement("li");


const darkmode = document.createElement("button");
darkmode.id = "darkmode";
darkmode.innerHTML = "Dark mode";
darkmode.onclick = function() {
    if( darkmode.innerHTML ==  "Light mode") {
        document.cookie = "appearance=dark; expire=Fri, 31 Dec 1971 23:59:59 GMT";
        document.cookie = "appearance=light; expire=Fri, 31 Dec 9999 23:59:59 GMT";
        window.alert("Welcome to light mode");
        darkmode.innerHTML = "Dark mode";
        toggleTheme(darkmode);
    }
    else {
        document.cookie = "appearance=light; expire=Fri, 31 Dec 1971 23:59:59 GMT";
        document.cookie = "appearance=dark; expire=Fri, 31 Dec 9999 23:59:59 GMT";
        window.alert("Welcome to dark mode");
        darkmode.innerHTML = "Light mode";
    }
    
}

document.getElementById("bottom");
document.body.appendChild(foot);
foot.appendChild(rs);
foot.appendChild(ls);
rs.appendChild(home);
home.appendChild(item);
ls.appendChild(dm);
dm.appendChild(darkmode);

foot.style.position = "bottom";

 