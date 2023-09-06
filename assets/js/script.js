/* 

Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede

*/


const ourTeam = [

    {
        name : 'Wayne Barnett',
        job : 'Founder & CEO',
        pic : '<img src="./assets/img/wayne-barnett-founder-ceo.jpg',
    },
    {
        name : 'Angela Caroll',
        job : 'Chief Editor',
        pic : '<img src="./assets/img/angela-caroll-chief-editor.jpg',
    },
    {
        name : 'Walter Gordon',
        job : 'Office Manager',
        pic : '<img src="./assets/img/walter-gordon-office-manager.jpg',
    },
    {
        name : 'Angela Lopez',
        job : 'Social Media Manager',
        pic : '<img src="./assets/img/angela-lopez-social-media-manager.jpg',
    },
    {
        name : 'Scott Estrada',
        job : 'Developer',
        pic : '<img src="./assets/img/scott-estrada-developer.jpg',
    },
    {
        name : 'Barbara Ramos',
        job : 'Graphic Designer',
        pic : '<img src="./assets/img/barbara-ramos-graphic-designer.jpg',
    },

]

console.log(ourTeam);

for (let i = 0; i < ourTeam.length; i++) {

    const member = ourTeam[i];
    console.log('-----');

    for (const key in member) {

        const value = member[key];
        console.log(value);

        
    }
    
    const domEl = document.querySelector('.row')
    let memberCard = generateCard(i + 1, 'span');
    domEl.append(memberCard)

}


function generateCard(number, el) {

    let memberCard = document.createElement(el)       
    
    
}


