const numbers = [-24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5];
// 1.Vypište do stránky všechna čísla

document.body.innerHTML += `<div>${numbers}</div>`;


//2.Vypište do stránky druhé mocniny všech čísel

const druheMocniny = [];
const vypocetDruhychMocnin = (poleCisel) => {

    poleCisel.forEach((cislo) => {
        const druhaMocnina = cislo * cislo;
        druheMocniny.push(druhaMocnina);

    });

    return druheMocniny;
};

druheMocniny = vypocetDruhychMocnin(numbers);

document.body.innerHTML += `<div>${druheMocniny}</div>`;


//3.Vypište do stránky pouze záporná čísla

const vypisZapornaCisla = (poleCisel) => {
    poleCisel.forEach((cislo) => {
        if (cislo < 0) {
            document.body.innerHTML += cislo + "<br>";

        }
    });
}
vypisZapornaCisla(numbers);

//4.Vypište do stránky absolutní hodnotu všech čísel

const vypisAbsulutniHodnoty = (poleCisel) => {
    poleCisel.forEach((cislo) => {
        const absolutniHodnota = Math.abs(cislo)
        document.body.innerHTML += cislo + "<br>";
    })
};
vypisAbsulutniHodnoty(numbers);

//5.Vypište do stránky pouze sudá čísla 
const vypisSudaCisla = (poleCisel) => {
    poleCisel.forEach((cislo) => {
        if (cislo % 2 === 0) {
            document.body.innerHTML += cislo + "<br>"
        }
    })
};
vypisSudaCisla(numbers);

//6.Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi
const vypisSudaCisla = (poleCisel) => {
    poleCisel.forEach((cislo) => {
        if (Math.abs(cislo) % 3 === 0) {
            document.body.innerHTML += cislo + "<br>"
        }
    })
};
vypisSudaCisla(numbers);

// 7. Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5
const vzdalenostOdCisla5 = (cislo) => Math.abs(cislo - 5);

const vzdalenostiOd5 = numbers.map(cislo => vzdalenostOdCisla5(cislo));

document.body.innerHTML = vzdalenostiOd5;

//8.Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5
const druhaMocVzdalenostOd5 = (cislo) => {
    const vzdalenost = Math.abs(cislo - 5);
    return vzdalenost ** 2
};
const druheMocninyVzdalenosti = numbers.map(cislo => druhaMocVzdalenostOd5(cislo));
document.body.innerHTML = druheMocninyVzdalenosti;

//9.Spočítejte, kolik je v seznamu záporných čísel
const pocetNegativnichCisel = numbers.filter(cislo => cislo < 0).length;
document.body.innerHTML = pocetNegativnichCisel + "<br>";

//10. Spočítejte součet všech čísel v poli
const soucethCisla = (pole) => {
    let soucet = 0;
    for (let i = 0; i < pole.length; i++) {
        soucet += pole[i];

    }
    return soucet;
}
document.body.innerHTML = soucethCisla(numbers);

//11.Spočítejte průměr všech čísel v poli
const prumerPole = (pole) => {
    let soucet = 0;
    for (let i = 0; i < pole.length; i++) {
        soucet += pole[i];
    }
    return soucet / pole.length;
}
document.body.innerHTML = prumerPole(numbers);

//12.Spočítejte součet všech kladných čísel v poli
const vypisKladnychCisla = (poleCisel) => {
    poleCisel.forEach((cislo) => {
        if (cislo > 0) {
            document.body.innerHTML += cislo + "<br>";

        }
    });
}
vypisKladnychCisla(numbers);