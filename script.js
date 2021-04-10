var em = document.getElementById("login");
var pas = document.getElementById("password");
let er = document.getElementById("err");
let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/

// login

function validate() {

    if (em.value.trim() == "" || pas.value.trim() == "") {
        em.style.border = em.value.trim() == "" ? "2px solid red" : '';
        pas.style.border = pas.value.trim() == "" ? "2px solid red" : '';
        alert(em.value.trim() == "" ? "Enter email" : 'Enter Password');

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

// Sign IN

var f1 = document.getElementById("fn");
var l1 = document.getElementById("ln");
var e1 = document.getElementById("email");
var city = document.getElementById("city");
var ph = document.getElementById("phone");
var pass1 = document.getElementById("pass1");
var pass2 = document.getElementById("pass2");

function validate2() {
    if (f1.value.trim() == "" || l1.value.trim() == "" || e1.value.trim() == "" || pass1.value == "" || pass2.value == "" || ph.value.trim() == "" || city.value.trim() == "") {
        f1.style.border = f1.value.trim() == "" ? "2px solid red" : '';
        l1.style.border = l1.value.trim() == "" ? "2px solid red" : '';
        e1.style.border = e1.value.trim() == "" ? "2px solid red" : '';
        pass1.style.border = pass1.value.trim() == "" ? "2px solid red" : '';
        pass2.style.border = pass2.value.trim() == "" ? "2px solid red" : '';
        ph.style.border = ph.value.trim() == "" ? "2px solid red" : '';
        city.style.border = city.value.trim() == "" ? "2px solid red" : '';
        alert("Fields not filled");
        return false;
    }

    else if (regexp.test(e1.value) === false) {
        alert("Email must be in Format");
        return false;
    }
    else if (pass1.value != pass2.value) {
        alert("Password doesnot match");
        return false;
    }

    else {
        return true;
    }
}

var meter = document.getElementById('password-strength-meter');
var text1 = document.getElementById('password-strength-text');
let strongPassword = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
let mediumPassword = new RegExp("^(?=.{6,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
let weakPassword = new RegExp("(?=.{6,}).*", "g");
var enoughRegex = new RegExp("(?=.{6,}).*", "g");

pass1.addEventListener('input', function () {
    var val = pass1.value;
    var result = zxcvbn(val);
    meter.value = result.score;

    if (false == enoughRegex.test(val)) {
        strength.innerHTML = 'More Characters';}
else    if (strongPassword.test(val)) {
        text1.innerHTML = '<span style="color:green">Strong!</span>';
        meter.value=4;
    } else if (mediumPassword.test(val)) {
        text1.innerHTML = '<span style="color:orange">Medium!</span>';
        meter.value=2;
    } else  {
        text1.innerHTML = '<span style="color:red">Weak!</span>';
        meter.value=1;
    }
});