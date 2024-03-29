function getCatImg() {
    return fetch("https://api.thecatapi.com/v1/images/search?limit=10")
        .then((resp) => resp.json())
        .then((json) => {
            return json[Math.floor(Math.random() * 10)].url;
        })
        .catch((error) => {
            console.error("Error fetching cat:", error);
            throw error;
        });
        
};

function catDivMaker(catData) {
    const singleCatContainer = document.createElement("div");
            singleCatContainer.className = "single-cat-container";
            catImg = document.createElement("img");
            catImg.src = catData;
            catImg.classList.add("cat-img");
            singleCatContainer.appendChild(catImg);
            return singleCatContainer;
};

function quoteGrabber(apiLink) {
    return fetch(apiLink)
        .then((resp) => resp.json())
        .then((json) => {
            return json;
        })
        .catch((error) => {
            console.error("Error fetching quote:", error);
            throw error;
        });
};

function quoteAdder(catQuote) {
    const singleCatQuote = document.createElement("p");
    singleCatQuote.textContent = catQuote;
    singleCatQuote.className = "cat-quote";
    return singleCatQuote;
};

const niceCatButton = document.getElementById("nice-cat-button");
const meanCatButton = document.getElementById("mean-cat-button");
const badassCatButton = document.getElementById("badass-cat-button");
const allCatsContainer = document.getElementById("cat-container");

niceCatButton.addEventListener("click", () => {
    getCatImg()
        .then((catData) => {
            const catContainer = catDivMaker(catData);
            catContainer.classList.add("nice-cat");

            quoteGrabber("https://cors-anywhere.herokuapp.com/https://www.affirmations.dev/")
                .then((niceQuoteObj) => {
                    const catQuote = niceQuoteObj.affirmation;
                    const singleCatQuote = quoteAdder(catQuote);
                    catContainer.appendChild(singleCatQuote);
                })
                .catch((error) => console.error("Error fetching quote:", error));

            allCatsContainer.appendChild(catContainer);
            allCatsContainer.appendChild(document.createElement("br"));

            const niceCatImages = document.getElementsByClassName("nice-cat");

            Array.from(niceCatImages).forEach((image) => {
                image.addEventListener("mouseover", () => {
                    image.classList.add("blue-border");
                });
                image.addEventListener("mouseout", () => {
                    image.classList.remove("blue-border"); 
                });
                image.addEventListener("dblclick", () => {
                    if (image.classList.contains("perm-blue-border")) {
                        image.classList.remove("perm-blue-border");
                    }
                    else {
                        image.classList.add("perm-blue-border");
                    };
                });
            });
        })
        .catch((error) => console.error("Error:", error));
});

meanCatButton.addEventListener("click", () => {
    getCatImg()
        .then((catData) => {
            const catContainer = catDivMaker(catData);
            catContainer.classList.add("mean-cat");

            quoteGrabber("https://cors-anywhere.herokuapp.com/https://evilinsult.com/generate_insult.php?lang=en&type=json")
                .then((meanQuoteObj) => {
                    const catQuote = meanQuoteObj.insult;
                    const singleCatQuote = quoteAdder(catQuote);
                    catContainer.appendChild(singleCatQuote);
                })
                .catch((error) => console.error("Error fetching quote:", error));

            allCatsContainer.appendChild(catContainer);
            allCatsContainer.appendChild(document.createElement("br"));

            const meanCatImages = document.getElementsByClassName("mean-cat");

            Array.from(meanCatImages).forEach((image) => {
                image.addEventListener("mouseover", () => {
                    image.classList.add("red-border");
                });
                image.addEventListener("mouseout", () => {
                    image.classList.remove("red-border"); 
                });
                image.addEventListener("dblclick", () => {
                    if (image.classList.contains("perm-red-border")) {
                        image.classList.remove("perm-red-border");
                    }
                    else {
                        image.classList.add("perm-red-border");
                    };
                });
            });
        })
        .catch((error) => console.error("Error:", error));
});

badassCatButton.addEventListener("click", () => {
    getCatImg()
        .then((catData) => {
            const catContainer = catDivMaker(catData);
            catContainer.classList.add("badass-cat");

            quoteGrabber("https://api.breakingbadquotes.xyz/v1/quotes")
                .then((badassQuoteArr) => {
                    const catQuote = badassQuoteArr[0].quote;
                    const singleCatQuote = quoteAdder(catQuote);
                    catContainer.appendChild(singleCatQuote);
                })
                .catch((error) => console.error("Error fetching quote:", error));

            allCatsContainer.appendChild(catContainer);
            allCatsContainer.appendChild(document.createElement("br"));

            const badassCatImages = document.getElementsByClassName("badass-cat");

            Array.from(badassCatImages).forEach((image) => {
                image.addEventListener("mouseover", () => {
                    image.classList.add("green-border");
                });
                image.addEventListener("mouseout", () => {
                    image.classList.remove("green-border"); 
                });
                image.addEventListener("dblclick", () => {
                    if (image.classList.contains("perm-green-border")) {
                        image.classList.remove("perm-green-border");
                    }
                    else {
                        image.classList.add("perm-green-border");
                    };
                });
            });
        })
        .catch((error) => console.error("Error:", error));
});