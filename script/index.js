const url= "https://swapi.dev/api/people/?format=json"

const image =  [
    "images 2.jpeg",
    "images 5.jpeg",
    "images 6.jpeg",
    "images war.jpeg",
    "images..22.jpeg ",
    "images.jpg",
    "images4.jpeg",
    "d.webp",
    "star@._V1_.jpg",
    "images9.jpeg"
]

async function getDataFromApi() {
    const response = await fetch(url,{
        method:"GET",
        headers: {
            'Content-Type': 'application/json'
        },
     });
    
     const data = await response.json() // converting api response to a javascript object
     console.log(data)
     return data;
}

getDataFromApi().then(data => {
    let resultsArray = data.results;
    console.log("results: ", resultsArray);

    // get location of root element
    let containerElement = document.getElementById("container");

    let htmlStr = "";

    for (let i = 0; i < resultsArray.length; i++) {
        let obj = resultsArray[i];

       

        containerElement.innerHTML += `
        <div class="row">
        
        <div class="round"><img src="images/${image[i]}" alt=""></div>
        <button class="accordion">${obj.name}</button>
        <div class="panel">
            <p>Name: ${obj.name}</p>
            <p>Height: ${obj.height}</p>
            <p>Gender: ${obj.gender}</p>
        </div>
        </div>
    `;
    }

    // console.log(htmlStr)

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
        panel.style.display = "none";
        } else {
        panel.style.display = "block";
        }
    });
    }
    });

