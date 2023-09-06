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

/* 

Aggiungete un form in pagina per permettere all’utente di aggiungere nuovi membri del team: cliccando sul pulsante “add” viene creato un nuovo oggetto, il quale viene inserito nell’array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall’utente.

*/

const ourTeam = [

    {
        name : 'Wayne Barnett',
        job : 'Founder & CEO',
        pic : './assets/img/wayne-barnett-founder-ceo.jpg',
    },
    {
        name : 'Angela Caroll',
        job : 'Chief Editor',
        pic : './assets/img/angela-caroll-chief-editor.jpg',
    },
    {
        name : 'Walter Gordon',
        job : 'Office Manager',
        pic : './assets/img/walter-gordon-office-manager.jpg',
    },
    {
        name : 'Angela Lopez',
        job : 'Social Media Manager',
        pic : './assets/img/angela-lopez-social-media-manager.jpg',
    },
    {
        name : 'Scott Estrada',
        job : 'Developer',
        pic : './assets/img/scott-estrada-developer.jpg',
    },
    {
        name : 'Barbara Ramos',
        job : 'Graphic Designer',
        pic : './assets/img/barbara-ramos-graphic-designer.jpg',
    },

]

console.log(ourTeam);


document.getElementById('add').addEventListener('click', function(ev) {

    ev.preventDefault();
    
    let newMember = {
        name : '',
        job: '',
        pic : 'http://127.0.0.1:3002/index.html',
    }

    newMember.name = document.getElementById('name').value;
    newMember.job = document.getElementById('job').value;

    ourTeam.push(newMember);
    console.log(ourTeam);

    
})

for (let i = 0; i < ourTeam.length; i++) {

    const member = ourTeam[i];
    let domElement = document.querySelector('.row');
    let domPrint = generateCard(i + 1, 'div', member);
    domElement.insertAdjacentHTML('beforeend', domPrint)
   
}

function generateCard(number, el, member) {

    //stampano in pagina le info
        //let memberCard = document.createElement(el)
        //memberCard.innerHTML =  member.name + ' ' + member.job + ' ' + member.pic

    let card = `
    <div class="col-md-2">
        <div class="card border border-5 border-info bg-info my-2">
            <img src="${member.pic}" class="card-img-top" alt="team member">
            <div class="card-body height px-1 py-4">
                <h5 class="card-title">${member.name}</h5>
                <p class="card-text">${member.job}</p>
            </div>
        </div>
    </div> `

    return card
    
}


