let yes = document.getElementsByClassName('ans_yes');
let no = document.getElementsByClassName('ans_no');
let a = document.getElementsByClassName('ques');

let clickCount = 0;

function handleYesClick() {
    a[0].textContent = "YAAAAYYYYY!!!! ILYSM KIRAA❤️😭😭";
}

function handleNoClick() {
    clickCount++;
    if (clickCount <= 6) {
        switch (clickCount) {
            case 1:
                a[0].textContent = "Really?? 🙁";
                break;
            case 2:
                a[0].textContent = "Think Again";
                break;
            case 3:
                a[0].textContent = "THINK AGAIN I SAAIID!!";
                break;
            case 4:
                a[0].textContent = "Keep Thinking again:((( 😞";
                break;
            case 5:
                a[0].textContent = "CLICK YES!!!😡😡";
                break;
            case 6:
                a[0].textContent = "Okay Enough! now what🙃🙃";
                no[0].parentNode.remove();
                yes[0].textContent = "YEESSS;)"; 
                break;
            default:
                break;
        }
    } else {
        console.log("You've clicked 7 times!");
    }
}

for (let i = 0; i < yes.length; i++) {
    yes[i].addEventListener('click', handleYesClick);
}

for (let i = 0; i < no.length; i++) {
    no[i].addEventListener('click', handleNoClick);
}