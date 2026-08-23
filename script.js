/* =========================
   PASSWORD
========================= */

const passwordInput =
    document.getElementById("password-input");

const passwordBtn =
    document.getElementById("password-btn");

const passwordError =
    document.getElementById("password-error");


passwordBtn.addEventListener("click", function () {

    const password =
        passwordInput.value.trim();

    if (password === "love") {

        passwordError.style.display = "none";

        showPage("home-page");

        passwordInput.value = "";

    } else {

        passwordError.style.display = "block";

        passwordInput.value = "";

        passwordInput.focus();

    }

});


/* =========================
   ENTER KEY
========================= */

passwordInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            passwordBtn.click();

        }

    }
);


/* =========================
   PAGE FUNCTION
========================= */

function showPage(pageId) {

    const pages =
        document.querySelectorAll(".page");

    pages.forEach(function (page) {

        page.classList.remove("active");

    });


    const target =
        document.getElementById(pageId);


    if (target) {

        target.classList.add("active");

    }


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =========================
   HOME → MESSAGE
========================= */

const startBtn =
    document.getElementById("start-btn");


startBtn.addEventListener("click", function () {

    currentMessage = 0;

    updateMessage();

    showPage("message-page");

});


/* =========================
   MESSAGES
========================= */

const messages = [

    `عيد ميلاد احلى و اجمل ام في الدنيا دي كلهاااا عمتا مافيش كلااام هيوصف انا بحبك قد ايه وىا هيوصف قد ايه وجودك نعمه كبيره اووووي في حياتييي🌍✨  
كل سنهه و انتي طيبهه ي نور عينيي و عقبال سنين كتييير حلوه في حياتك و انتي معايا ي حبيبتي❤️
كل سنهه و انتي جمبي و سندي و ضهريي و معايا في كل حاجههه🫶🏻✨`,

    ` 
 كل سنه و انتي احلى ام شوفتها في حياتي انتي مش بس مامتي انتي اختيي و صاحبتي و كل حاجهه ربنا يخليكيي ليااا ي نور عيني كل سنه و انتي كل حاجهه ليااا ربنا يخليكي ليا و ميحرمنيش منك ابدااا ي روحي انا مليش حد غيرك في الدنيا و ربنا يخليكي ليا ي عمري و تبقي على طول معايااا و سند لياا و صاحبتييي و انا افضل بنوتككك الي سندك و وراكي و معاكي في اي حاجه و ربنا يديمك ليااا ي حياتي بحبككككگ🫂🥹💗`

];


let currentMessage = 0;


const messageText =
    document.getElementById("message-text");


const messageNumber =
    document.getElementById("message-number");


function updateMessage() {

    messageText.style.opacity = "0";


    setTimeout(function () {

        messageText.textContent =
            messages[currentMessage];


        messageNumber.textContent =
            String(currentMessage + 1)
            .padStart(2, "0");


        messageText.style.opacity = "1";

    }, 180);

}


/* =========================
   NEXT
========================= */

const nextBtn =
    document.getElementById("next-btn");


nextBtn.addEventListener("click", function () {

    if (
        currentMessage <
        messages.length - 1
    ) {

        currentMessage++;

        updateMessage();

    } else {

        showPage("final-page");

    }

});


/* =========================
   BACK
========================= */

const backBtn =
    document.getElementById("back-btn");


backBtn.addEventListener("click", function () {

    if (currentMessage > 0) {

        currentMessage--;

        updateMessage();

    } else {

        showPage("home-page");

    }

});


/* =========================
   MESSAGE → HOME
========================= */

const homeBtn =
    document.getElementById("home-btn");


homeBtn.addEventListener("click", function () {

    currentMessage = 0;

    updateMessage();

    showPage("home-page");

});


/* =========================
   VIDEO → HOME
========================= */

const finalHomeBtn =
    document.getElementById("final-home-btn");


finalHomeBtn.addEventListener("click", function () {

    showPage("home-page");

});


/* =========================
   INITIAL MESSAGE
========================= */

updateMessage();



/* =========================
   EXTRA FLOATING SHAPES
========================= */

const floatingContainers =
    document.querySelectorAll(".floating-elements");

const shapes = [
    "✦",
    "✧",
    "♡",
    "✦",
    "·",
    "✧",
    "♡",
    "⋆",
    "✦",
    "♡"
];

floatingContainers.forEach(function(container) {

    for (let i = 0; i < 25; i++) {

        const shape =
            document.createElement("span");

        shape.textContent =
            shapes[
                Math.floor(
                    Math.random() * shapes.length
                )
            ];

        shape.style.left =
            Math.random() * 100 + "%";

        shape.style.top =
            Math.random() * 100 + "%";

        shape.style.fontSize =
            (10 + Math.random() * 20) + "px";

        shape.style.animationDuration =
            (7 + Math.random() * 8) + "s";

        shape.style.animationDelay =
            (Math.random() * 6) + "s";

        container.appendChild(shape);

    }

});