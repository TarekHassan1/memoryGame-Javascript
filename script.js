const memoryInner = document.querySelectorAll(".memory-inner");
const memoryCardImages = document.querySelectorAll(".memory .memory-inner img");
const score = document.querySelector("header > h1 > span");
const images = ["assets/react.png", "assets/angular.png", "assets/javascript.png", "assets/jest.png", "assets/csss.png", "assets/mongoDb.png"];
const pairedImages = images.concat(images);

// Shuffle the array of paired images
for (let i = pairedImages.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pairedImages[i], pairedImages[j]] = [pairedImages[j], pairedImages[i]];
    console.log([pairedImages[i], pairedImages[j]] );
}

// Assign the shuffled images to the cards
let assignedImages = {};
memoryInner.forEach(singleMem => {
    let imageIndex;
    do {
        imageIndex = Math.floor(Math.random() * pairedImages.length);
    } while (assignedImages[pairedImages[imageIndex]] &&
        assignedImages[pairedImages[imageIndex]] >= 2);
    assignedImages[pairedImages[imageIndex]] =
        (assignedImages[pairedImages[imageIndex]] || 0) + 1;
    
    singleMem.querySelector("img").src = pairedImages[imageIndex];
    singleMem.querySelector("img").alt = `Image ${imageIndex + 1}`;
})

let counter = 0;
clickedElementsImgs = [];
memoryInner.forEach(singleMem => {
    singleMem.addEventListener("click", () => {


            
           
        singleMem.classList.add("transform");
        clickedElementsImgs.push(singleMem.querySelector("img"));
                    counter ++;
                    if (counter === 2) {
    setTimeout(() => {
        if (clickedElementsImgs[0].src === clickedElementsImgs[1].src) {
            score.textContent = Number(score.textContent) + 1;
            clickedElementsImgs.forEach(img => {
                img.parentElement.parentElement.classList.add("success")
            })
        } else {
            memoryInner.forEach(e => {
                if (e.classList.contains("transform") && !e.classList.contains("success")) {
                    e.classList.remove("transform");
                }
            })
        }
        counter = 0;
        clickedElementsImgs = [];
    }, 500);
    }
        
        

        
    })
})
