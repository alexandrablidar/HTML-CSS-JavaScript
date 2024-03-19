class Student {
    constructor(nume, prenume, data_nasterii, foaie_matricola) {
        this.nume = nume;
        this.prenume = prenume;
        this.data_nasterii = data_nasterii;
        this.foaie_matricola = foaie_matricola || [];
    }

    afiseazaVarsta = () => {
        const today = new Date();
        const birthDate = new Date(this.data_nasterii);
        const age = today.getFullYear() - birthDate.getFullYear();
        return age;
    }

    afiseazaNotele = () => {
        return this.foaie_matricola.join(', ');
    }

    calculeazaMedia = () => {
        const sum = this.foaie_matricola.reduce((acc, nota) => acc + nota, 0);
        return sum / this.foaie_matricola.length || 0;
    }

    adaugaNota = (nota_noua) => {
        this.foaie_matricola.push(nota_noua);
    }
}

let studenti = [
    new Student("Popescu", "Ion", "1990-05-15", [8, 9, 7]),
    new Student("Ionescu", "Maria", "1995-02-20", [9, 10, 8]),
    new Student("Vasilescu", "Andrei", "1998-09-08", [7, 6, 8])
];

// Afisare initiala in HTML
afiseazaStudenti(studenti, "Studeni ordonati alfabetic:");

// Ordonați și afișați studenții alfabetic, după medii și după vârstă
studenti.sort((a, b) => a.nume.localeCompare(b.nume) || a.prenume.localeCompare(b.prenume));
afiseazaStudenti(studenti, "Studeni ordonati alfabetic dupa schimbarea numelor:");

// Adăugați noi valori pentru note și re-ordonați după medii
studenti[0].adaugaNota(10);
studenti[1].adaugaNota(7);
studenti[2].adaugaNota(9);
studenti.sort((a, b) => a.calculeazaMedia() - b.calculeazaMedia());
afiseazaStudenti(studenti, "Studeni dupa adaugarea de note noi:");

// Schimbați numele anumitor studenți și re-ordonați alfabetic
studenti[0].setNume("Georgescu");
studenti[1].setPrenume("Ana");
studenti.sort((a, b) => a.nume.localeCompare(b.nume) || a.prenume.localeCompare(b.prenume));
afiseazaStudenti(studenti, "Studeni dupa schimbarea numelor:");

// Adăugați noi studenți și ștergeți studenți
studenti.push(new Student("Radulescu", "Elena", "2000-03-10", [8, 9, 10]));
studenti.push(new Student("Irimia", "Mihai", "1999-11-25", [6, 7, 8]));
afiseazaStudenti(studenti, "Studeni dupa adaugarea de noi studenti:");

// Stergere studenti
studenti.splice(1, 1); // Stergeți studentul de la poziția 1
afiseazaStudenti(studenti, "Studeni dupa stergerea unui student:");

// Funcție pentru afișarea studentilor in HTML
function afiseazaStudenti(studenti, titlu) {
    const rezultateElement = document.getElementById("rezultate");
    rezultateElement.innerHTML += `<h2>${titlu}</h2>`;
    
    studenti.forEach(student => {
        rezultateElement.innerHTML += `
            <p>Nume: ${student.nume}, Prenume: ${student.prenume}, Varsta: ${student.afiseazaVarsta()}, Medie: ${student.calculeazaMedia()}, Note: ${student.afiseazaNotele()}</p>
        `;
    });
}
