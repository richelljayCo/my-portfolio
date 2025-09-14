//dark mode
let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

//editable feature
function makeEditable(sectionId, btnId, editIconId, saveIconId, storageKey) {
    let section = document.getElementById(sectionId);
    let btn = document.getElementById(btnId);
    let editIcon = document.getElementById(editIconId);
    let saveIcon = document.getElementById(saveIconId);

    
    let savedText = localStorage.getItem(storageKey);
    if (savedText) {
        section.innerHTML = savedText;
    }

    
    btn.addEventListener("click", function () {
        if (section.contentEditable === "true") {
            // Save mode
            section.contentEditable = "false";
            editIcon.style.display = "inline";
            saveIcon.style.display = "none";
            localStorage.setItem(storageKey, section.innerHTML);
        } else {
            
            section.contentEditable = "true";
            editIcon.style.display = "none";
            saveIcon.style.display = "inline";
        }
    });
}


makeEditable("homeEdit", "homeEditBtn", "homeEditIcon", "homeSaveIcon", "homeBio");

makeEditable("aboutEdit", "aboutEditBtn", "aboutEditIcon", "aboutSaveIcon", "aboutMeText");
