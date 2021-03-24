// Question 1

const cat = {
    complain: function () {
        console.log("Meow!");
    }
};
//cat.complain();

// Question 2

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.classList.add("subheading");

// Question 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}

// Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p>New paragraph</p>`;
resultsContainer.style.backgroundColor = "yellow";
/* I was a bit unsure if the div or the p element should have the yellow background, so if it was the latter I would do this:
resultsContainer.innerHTML = `<p style="background-color: yellow">New paragraph</p>`; */

// Question 7

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function listOfCats(list) {

    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

listOfCats(cats);

// Question 8

// I interpreted "wrap each item in a div" as "wrap each cat
// in a div" - hope that's correct.

function createCats(cats) {

    let catHtml = "";

    for (let i = 0; i < cats.length; i++) {

        let catAge = "Age unknown";

        if (cats[i].age) {
            catAge = cats[i].age;
        }

        catHtml += `<div>
                        <h5>${cats[i].name}</h5>
                        <p>${catAge}</p>
                    </div>`;
    }
    return catHtml;
}

const catsResult = createCats(cats);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = catsResult;