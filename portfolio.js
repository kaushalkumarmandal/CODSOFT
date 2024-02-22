var btn = document.querySelector("#B");
var inp = document.querySelector("#inp");
var inp2 = document.querySelector("input");
flag = 0;
btn.addEventListener("click", function () {
    if (flag == 0) {
        btn.innerHTML = "Request Sending..."
        setTimeout(function () {
            btn.innerHTML = "your message has submited👍"
            btn.style.backgroundColor = "white"
            btn.style.color = "green"                                 
        }, 2000)
        flag = 1;
    } else {
        btn.innerHTML = "Submit"
        btn.style.backgroundColor = "lightseagreen"
        btn.style.color = "white"             
        flag = 0;
    }
})