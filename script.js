var em = document.getElementById("login");
var pas = document.getElementById("password");
let er = document.getElementById("err");

function validate() {
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if (em.value.trim() == "" || pas.value.trim() == "") {
        alert("Fields not filled");
        em.style.border = "2px solid red";
        pas.style.border = "2px solid red";

        return false;
    }

    else if (regexp.test(em.value)) {
        er.innerHTML = "VALID!";
        er.style.color = "green";
        return true;
    }
    else {
        er.innerHTML = "INVALID E-MAIL!!";
        er.style.color = "red";
        em.style.border = "2px solid red";
        return false;
    }

}
var f1 = document.getElementById("fn");
var l1 = document.getElementById("ln");
var e1 = document.getElementById("email");
// var g1 = document.getElementById("gender");
var p1 = document.getElementById("pass1");
function validate2() {
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if (f1.value.trim() == "" || l1.value.trim() == "" || e1.value.trim() == "" || p1.value.trim() == "") {
        alert("Fields not filled");
        return false;
    }
    else if (regexp.test(e1.value) ) {
    return true;
}

else {
    alert("Email must be in Format");
    return false;
}
}

