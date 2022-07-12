window.onload = () => {
    const moreInfo = document.querySelectorAll(".moreInfo")
    const bt = document.querySelector("#bt")
    const aside = document.querySelector("aside")
    const plusInfo = document.querySelectorAll(".plusInfo")

    for (let i = 0; i < plusInfo.length; i++) {
        plusInfo[i].addEventListener('click', (event) => {
            let children = event.target.querySelectorAll(".hidden")
            let parent = event.target;
            for (let j = 0; j < children.length; j++) {
                if (children[j].style.display == "none" || children[j].style.display == '') {
                    children[j].style.display = "block"
                    children[j].style.marginLeft = "10px"
                    parent.style.paddingBottom = "10px"
                }
                else {
                    children[j].style.display = "none"
                    parent.style.paddingBottom = "0px"
                }
            }
        })
    }
    for (let i = 0; i < moreInfo.length; i++) {
        moreInfo[i].addEventListener('click', (event) => {
            let children = event.target.children
            let parent = event.target;
            console.log(parent, children)
            for (let j = 0; j < children.length; j++) {
                if (children[j].style.display == "none" || children[j].style.display == '') {
                    children[j].style.display = "block"
                    children[j].style.marginLeft = "10px"
                    parent.style.paddingBottom = "10px"
                }
                else {
                    children[j].style.display = "none"
                    parent.style.paddingBottom = "0px"
                }
            }
        })
    }

    bt.addEventListener('click', (event) => {
        let couleur, newcouleur
        if (event.target.textContent === "Mode Sombre") {
            aside.classList.remove("gradclaire")
            aside.classList.add("gradsombre")
            changeMode(event, "Mode Clair", "claire", "fonce")
            changeColor("#ca582a", "#F0EDEE", "#303030")
            couleur = "orange"
            newcouleur = "bleu"
        }
        else {
            aside.classList.remove("gradsombre")
            aside.classList.add("gradclaire")
            changeMode(event, "Mode Sombre", "fonce", "claire")
            changeColor("#3DA0FC", "#000000", "#F0EDEE")
            couleur = "bleu"
            newcouleur = "orange"
        }
        changeImg(couleur, newcouleur)
    })
}
function changeMode(event, txt, remove, add) {
    event.target.textContent = txt
    event.target.classList.remove(remove);
    event.target.classList.add(add);
}
function changeColor(color1, color2, color3) {
    document.documentElement.style.setProperty("--first_color", color1)
    document.documentElement.style.setProperty("--third_color", color2)
    document.documentElement.style.setProperty("--main_color", color3)
}
function changeImg(couleur, newcouleur) {
    let images = document.querySelector("#icon").children
    for (let i = 0; i < images.length; i++) {
        let path = images[i].children[0].src.replace(couleur, newcouleur)
        images[i].children[0].src = path;
    }
}