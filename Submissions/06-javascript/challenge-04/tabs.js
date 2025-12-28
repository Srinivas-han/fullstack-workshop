const tabsData = [
    { title: 'Overview', content: 'Overview content here...' },
    { title: 'Features', content: 'Features content here...' },
    { title: 'Pricing', content: 'Pricing content here...' }
];

const tabButtonsContainer = document.getElementById("tabButtons");
const tabContentContainer = document.getElementById("tabContent");

let activeIndex = 0;

          

tabsData.forEach((tab, index) => {

           

    const button = document.createElement("button");
    button.textContent = tab.title;
    button.classList.add("tab-btn");
    button.setAttribute("role", "tab");
    button.setAttribute("tabindex", index === 0 ? "0" : "-1");

            

    button.addEventListener("click", () => activateTab(index));

         

    button.addEventListener("keydown", (e) => handleKeydown(e, index));

    tabButtonsContainer.appendChild(button);

          

    const panel = document.createElement("div");
    panel.textContent = tab.content;
    panel.classList.add("tab-panel");
    panel.setAttribute("role", "tabpanel");

    tabContentContainer.appendChild(panel);
});


         

function activateTab(index) {
    const buttons = document.querySelectorAll(".tab-btn");
    const panels = document.querySelectorAll(".tab-panel");

    buttons.forEach((btn, i) => {
        btn.classList.toggle("active", i === index);
        btn.setAttribute("tabindex", i === index ? "0" : "-1");
    });

    panels.forEach((panel, i) => {
        panel.classList.toggle("active", i === index);
    });

    activeIndex = index;
    buttons[index].focus();
}

    

function handleKeydown(e, index) {
    if (e.key === "ArrowRight") {
        e.preventDefault();
        activateTab((index + 1) % tabsData.length);
    }

    if (e.key === "ArrowLeft") {
        e.preventDefault();
        activateTab((index - 1 + tabsData.length) % tabsData.length);
    }
}

     
       
activateTab(0);
