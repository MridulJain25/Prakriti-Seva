const counterNum = document.querySelectorAll(".counter-numbers");
const speed = 20;

counterNum.forEach((currentElement) => {

    const updateNumber = () => {
        const targetNum = parseInt(currentElement.dataset.number);
        const initialNum = parseInt(currentElement.innerText);
        const incrementNum = Math.trunc(targetNum / speed);

        if(initialNum < targetNum) {
            currentElement.innerText = initialNum + incrementNum;

            setTimeout(updateNumber, 10);
        }
    };
    updateNumber();
});

const buttonMenu = document.querySelector(".header__button");
const menu = document.querySelector(".header__p");

const handleShowMenu = (event) => {
    menu.classList.remove("menu");
    menu.classList.add("show");
    event.stopPropagation();
};

buttonMenu.addEventListener("click", handleShowMenu);

const handleHideMenu = (event) => {
    menu.style.display = "none";
};

window.addEventListener("click", handleHideMenu);

const privacyPolicy = document.getElementById("agree");
const submitBtn = document.getElementById("submit");

const handlePrivacyPolicyClick = () => {
    if(privacyPolicy.checked) {
        submitBtn.classList.add("animate");
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    };
};

const bringSubmitButton = () => {
    if(!privacyPolicy) {
        return;
    } else {
        privacyPolicy.addEventListener("change", handlePrivacyPolicyClick);
    };
};

bringSubmitButton();

const textChange1 = document.querySelector(".txtchngdiv1");
const textChange2 = document.querySelector(".txtchngdiv2");

const handleChangeText = () => {
    textChange1.innerHTML = `
        <p class="txtchngdiv__p treesp">MORE THAN 200 MILLION TREES ARE CUT DOWN EVERY DAY.</p>
    `;
};

textChange1.addEventListener("mouseenter", handleChangeText);

const handleResetText = () => {
    const myHTML = textChange1.innerHTML = `
        <p class="txtchngdiv__p treesp">TREES CUT DOWN EVERY DAY</p>
    `;
};

textChange1.addEventListener("mouseleave", handleResetText);

const handleChangeText2 = () => {
    textChange2.innerHTML = `
        <p class="txtchngdiv2__p waterp">1 IN 4 PEOPLE IN THE WORLD LACK ACCESS TO CLEAN WATER.</p>
    `;
};

textChange2.addEventListener("mouseenter", handleChangeText2);

const handleResetText2 = () => {
    textChange2.innerHTML = `
        <p class="txtchngdiv2__p waterp">THE WATER CRISIS</p> 
    `;
};

textChange2.addEventListener("mouseleave", handleResetText2);