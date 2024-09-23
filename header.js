const logout = document.getElementById("logout");
if(logout!=null || logout!=undefined) {
logout.onclick = function() {
    document.cookie = "apikey=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    document.cookie = "firstname=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    document.cookie = "appearance=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    sessionStorage.clear();
    location.reload();
}
}