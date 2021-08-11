const data = [
    {
        name: 'Jonas',
        marks: [10, 2, 8, 4, 6]
    },
    {
        name: 'Maryte',
        marks: [3, 7, 9, 5]
    },
    {
        name: 'Petras',
        marks: [7, 7, 7]
    },
    {
        name: 'Ona',
        marks: [10, 9, 8, 7, 6]
    },
]

// PASTABA: jei kazkuri reikalavima atitinka daugiau nei vienas mokinys, spausdinti visus

// Isspausdinti mokinio varda ir pazymi, kuris turi prasciausia pazymi

// Isspausdinti mokinio varda ir pazymi, kuris turi geriausia pazymi

// Isspausdinti mokinio varda ir pazymiu vidurki, kuris turi prasciausia pazymiu vidurki

// Isspausdinti mokinio varda ir pazymiu vidurki, kuris turi geriausia pazymiu vidurki

// Isspausdinti mokinio varda, jei jis turi pazymi 8
function getkasTuriAstuonis(balas) {
    console.log(`\nIsspausdinti mokinio varda, jei jis turi pazymi 8`);
    for (let j = 0; j < data.length; j++) {
        const balai = data[j].marks;
        const length = balai.length;
        // let max = balai[0]
        // let vidurkis = 0;
        for (let i = 0; i < length; i++) {
            if (balai[i] === balas) {
                console.log(`Vardas: ${data[j].name}`);
            }
        }
    }
}

// Isspausdinti mokinio varda, jei jis neturi pazymio 7
function getkasNeturiSeptinis(balas) {
    console.log(`\nIsspausdinti mokinio varda, jei jis neturi pazymio 7`);
    for (let j = 0; j < data.length; j++) {
        const balai = data[j].marks;
        const length = balai.length;
        // let max = balai[0]
        // let vidurkis = 0;
        let turiBala = false;
        for (let i = 0; i < length; i++) {
            if (balai[i] === balas) {
                turiBala = true;
                // console.log(`Vardas: ${data[j].name}`);
            }
        }

        if (!turiBala) {
            console.log(`Vardas: ${data[j].name}`);
        }
    }
}
getkasNeturiSeptinis(8);
getkasNeturiSeptinis(7);