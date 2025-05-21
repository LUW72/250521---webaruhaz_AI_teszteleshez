import Termek from '../PUBLIC/Termek.js';



// Ellenőrizd, hogy a termékek adatai (név, ár stb.) helyesen jelennek meg.

function termekadatViewTest()
{
    const testTermek = 
    {
        id: 0,
        nev: "Termék 1",
        ar: 1000,
        kep: "/placeholder.jpg",
        leiras: "Ez egy példa termék leírása.",
    };
    
    const pElem = document.createElement("div");
    pElem.classList.add("termek");

    const termek = new Termek(testTermek, pElem, 0);

    const cim = pElem.querySelector(".card-title");
    const leiras = pElem.querySelector(".card-text");
    const ar = pElem.querySelectorAll(".card-text")[1];
    const kep = pElem.querySelector("img");

    console.assert(cim.innerText === testTermek.nev, "Hiba: Helytelenül jelent meg a cím" );
    console.assert(leiras.innerText.includes(testTermek.leiras), "Hiba: Helytelenül jelent meg a leírás ");
    console.assert(ar.innerText.includes(testTermek.ar), "Hiba: Helytelenül jelent meg az ár" );
    console.assert(kep.src.includes(testTermek.kep), "Hiba: Helytelenül jelent meg a kép" );
    //console.log(kep.src); // ????,

    console.log(" A termekadatTest() lefutott - Minden adat helyesen megjelenik.");


}

termekadatViewTest();


// Ellenőrizd, hogy a "Kosárba tesz" gomb helyesen jelenik meg.


function kosarbaTeszViewTest()
{
    const testTermek = 
    {
        id: 0,
        nev: "Termék 1",
        ar: 1000,
        kep: "./kepek/placeholder.jpg",
        leiras: "Ez egy példa termék leírása.",
    };
        
    const pElem = document.createElement("div");
    pElem.classList.add("termek");

    const termek = new Termek(testTermek, pElem, 0);

    const kosarbaTeszGomb = pElem.querySelector(".kosarba");

    console.assert(kosarbaTeszGomb !== null, "Hiba: Nem jelenik meg a 'kosárba' gomb");

    console.log(" A function kosarbaTeszViewTest() lefutott - A kosár gomb helyesen megjelenik.");

}

kosarbaTeszViewTest();



// Ellenőrizd, hogy a kosárba gomb megnyomásával a modellben a kosárba belekerül-e e a kiválasztott termék. 
// (az eseményt kód írásával váltsd ki!)


function kosarbaTeszEventTest() 
{
    const testTermek = 
    {
        id: 0,
        nev: "Termék 1",
        ar: 1000,
        kep: "./kepek/placeholder.jpg",
        leiras: "Ez egy példa termék leírása.",
    };

    const pElem = document.createElement("div");
    const termek = new Termek(testTermek, pElem, 0);
    // Controller?

    const kosar = [];

    window.addEventListener("kosarbaTesz", (event) => {
        kosar.push(event.detail.id);
    });

    const kosarbaTeszGomb = pElem.querySelector(".kosarba");

    // kattintás szim?    

    console.assert(kosar.includes(0), "Hiba: A modell nem kapta meg a termék ID-jét a 'kosárba' eseménynél!");

    console.log("A kosarbaTeszEventTest() lefutott - A modell megfelelően reagált az eseményre.");
}

//kosarbaTeszEventTest();


