import Model from "../PUBLIC/Model.js";


//removeKosarItem(id): ellenőrizd, hogy el tudsz-e távolítani egy adott terméket a 
// kosárból. Mi van akkor, ha nem létező ID-jú terméket akarsz eltávolítani?  


function removeKosarItemTest()
{
    const model = new Model();
    const termek = 
    {
        id: 0,
        nev: "Termék 1",
        ar: 1000,
        kep: "./kepek/placeholder.jpg",
        leiras: "Ez egy példa termék leírása.",
    };

    model.addKosar(termek);

    model.removeKosarItem(1);

    console.assert(model.getKosarLista.length === 0, "Hiba: nem távolította el");
    console.log("Lefutott az removeKosarItemTest() - Termék eltávolítva")
}

removeKosarItemTest();


// decreaseQuantity(id): Ellenőrizd, hogy a termék mennyisége csökken-e, 
// és ha a mennyiség 1, akkor eltávolítja-e a terméket.


function decreaseQuantityTest()
{
    const model = new Model();
    const termek = 
    {
        id: 0,
        nev: "Termék 1",
        ar: 1000,
        kep: "./kepek/placeholder.jpg",
        leiras: "Ez egy példa termék leírása.",
    };

    const termek2 = 
    {
        id: 1,
        nev: "Termék 1",
        ar: 1000,
        kep: "./kepek/placeholder.jpg",
        leiras: "Ez egy példa termék leírása.",
    };    

    model.addKosar(termek);
    model.addKosar(termek2);

    model.decreaseQuantity(0);

    console.assert(model.getKosarLista().length === 1, "Hiba: nem csökkent a mennyiség");
    
    console.log("Lefutott a decreaseQuantityTestTest() - A termék mennyisége csökkent")

}

decreaseQuantityTest();


//getKosarDarabszam(): Ellenőrizd, hogy a kosárban lévő összes termék mennyiségét 
// helyesen számolja-e ki. (beleértve, ha újonnan teszünk bele egy terméket, 
// ha már meglévő terméket teszünk a kosárba, illetve az increaseQuantity 
// és a decreaseQuantity függvény meghívása után hogy változik az összes darabszám. 
// (Vigyázz, mert lehet, hoyg hibásan működik a program!)


function getKosarDarabszamUjTermekTest()
{
    const model = new Model();
    const termek = 
    {
        id: 0,
        nev: "Termék 1",
        ar: 1000,
        kep: "./kepek/placeholder.jpg",
        leiras: "Ez egy példa termék leírása.",
    };

    const termek2 = 
    {
        id: 1,
        nev: "Termék 1",
        ar: 1000,
        kep: "./kepek/placeholder.jpg",
        leiras: "Ez egy példa termék leírása.",
    };    

    model.addKosar(termek);
    model.addKosar(termek2);

    console.assert(model.getKosarDarabszam() === 2, "Hiba: Nem számolja jól a mennyiséget új termék belehelyezése után");
    
    console.log("Lefutott a getKosarDarabszamTest() - Újonnani termék - A termék mennyisége jól lett kiszámolva")

}

getKosarDarabszamUjTermekTest();

function getKosarDarabszamMeglevoTermekTest()
{
    const model = new Model();
    const termek = 
    {
        id: 0,
        nev: "Termék 1",
        ar: 1000,
        kep: "./kepek/placeholder.jpg",
        leiras: "Ez egy példa termék leírása.",
    };   

    model.addKosar(termek);
    model.addKosar(termek);

    console.assert(model.getKosarDarabszam() === 2, "Hiba: Nem számolja jól a mennyiséget meglévő termék belehelyezése után");
    
    console.log("Lefutott a getKosarDarabszamTest() - Meglévő termék - A termék mennyisége jól lett kiszámolva")

}

getKosarDarabszamMeglevoTermekTest();


function increaseQuantityTest()
{
    const model = new Model();
    const termek = 
    {
        id: 0,
        nev: "Termék 1",
        ar: 1000,
        kep: "./kepek/placeholder.jpg",
        leiras: "Ez egy példa termék leírása.",
    };   

    model.addKosar(termek);
    model.increaseQuantity(0);

    console.assert(model.getKosarDarabszam() === 2, "Hiba: Nem adja hozzá jól a mennyiséget az increaseQuantity");
    
    console.log("Lefutott az increaseQuantityTest() - A termék mennyisége jól lett kiszámolva")

}

increaseQuantityTest();


function decreaseQuantityTest2()
{
    const model = new Model();

    const termek = 
    {
        id: 0,
        nev: "Termék 1",
        ar: 1000,
        kep: "./kepek/placeholder.jpg",
        leiras: "Ez egy példa termék leírása.",
    };      

    model.addKosar(termek);
    model.addKosar(termek);

    model.decreaseQuantity(0);

    //console.log(model.getKosarDarabszam());
    console.assert(model.getKosarDarabszam() === 1, "Hiba: Nem vette el jól a mennyiséget a decreaseQuantityTest");
    
    console.log("Lefutott az decreaseQuantityTest2() - A termék mennyisége jól lett kiszámolva")

}

decreaseQuantityTest2();