class Student {
    constructor(nume, prenume, data_nasterii, foaie_matricola) {
        this.nume = nume;
        this.prenume = prenume;
        this.data_nasterii = data_nasterii;
        this.foaie_matricola = foaie_matricola || [];
    }

    // Metoda cu funcție lambda
    afiseazaVarsta = () => {
        const today = new Date();
        const birthDate = new Date(this.data_nasterii);
        const age = today.getFullYear() - birthDate.getFullYear();
        return age;
    }

    // Metoda cu funcție lambda
    afiseazaNotele = () => this.foaie_matricola.join(', ');

    // Metoda cu funcție lambda
    calculeazaMedia = () => {
        const sum = this.foaie_matricola.reduce((acc, nota) => acc + nota, 0);
        return sum / this.foaie_matricola.length || 0;
    }

    // Metoda cu funcție lambda
    adaugaNota = nota_noua => this.foaie_matricola.push(nota_noua);

    // Metoda cu funcție lambda
    setNume = nume => {
        if (typeof nume === 'string' && nume.length >= 2 && !/\d/.test(nume)) {
            this.nume = nume;
        } else {
            console.error('Numele introdus nu este valid. Se va utiliza un nume implicit.');
            this.nume = 'NumeImplicit';
        }
        afiseazaStudenti([this], "Studenți după modificarea numelui:");
    }

    // Metoda cu funcție lambda
    setPrenume = prenume => {
        if (typeof prenume === 'string' && prenume.length >= 2 && !/\d/.test(prenume)) {
            this.prenume = prenume;
        } else {
            console.error('Prenumele introdus nu este valid. Se va utiliza un prenume implicit.');
            this.prenume = 'PrenumeImplicit';
        }
        afiseazaStudenti([this], "Studenți după modificarea prenumelui:");
    }

    // Metoda cu funcție lambda
    setDataNasterii = data_nasterii => {
        const today = new Date();
        const birthDate = new Date(data_nasterii);
        const age = today.getFullYear() - birthDate.getFullYear();

        if (age >= 18) {
            this.data_nasterii = data_nasterii;
        } else {
            console.error('Studentul trebuie să aibă cel puțin 18 ani. Se va utiliza o dată implicită.');
            this.data_nasterii = '2000-01-01';
        }
        afiseazaStudenti([this], "Studenți după modificarea datei de naștere:");
    }
}

// Funcția pentru a afișa studenții în HTML
function afiseazaStudenti(studenti, titlu) {
    const rezultateElement = document.getElementById("rezultate");
    rezultateElement.innerHTML += `<h2>${titlu}</h2>`;
    
    studenti.forEach(student => {
        rezultateElement.innerHTML += `
            <p>Nume: ${student.nume}, Prenume: ${student.prenume}, Varsta: ${student.afiseazaVarsta()}, Medie: ${student.calculeazaMedia()}, Note: ${student.afiseazaNotele()}</p>
        `;
    });
}

// Creare și inițializare șir de studenți
let studenti = [
    new Student("Popescu", "Ion", "1990-05-15", [8, 9, 7]),
    new Student("Ionescu", "Maria", "1995-02-20", [9, 10, 8]),
    new Student("Vasilescu", "Andrei", "1998-09-08", [7, 6, 8])
];

// Afișare inițială în HTML
afiseazaStudenti(studenti, "Studeni ordonați alfabetic:");

//Neadaugat in pagina HTML