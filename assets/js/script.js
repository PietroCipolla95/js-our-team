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

let input = document.querySelector('form')

input.addEventListener('submit', function(ev) {

    
    ev.preventDefault(); 
    
    // "empty" object
    let newMember = {
        pic : 'https://picsum.photos/110/117.jpg',
    }

    //get the value of name and job
    newMember.name = document.getElementById('name').value;
    newMember.job = document.getElementById('job').value;

    //push the newMember in the ourTeam array
    ourTeam.push(newMember);
    console.log(ourTeam);

    //print the new card in the row
    let domElement = document.querySelector('.row');
    let domPrint = generateCard(0, 'div', newMember);
    domElement.insertAdjacentHTML('beforeend', domPrint)


    //reset form
    document.getElementById('myForm').reset()
        
})


//loop inside array
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
        <div class="card border border-5 border-info bg-info my-3">
            <img src="${member.pic}" class="card-img-top" alt="team member">
            <div class="card-body height px-1 py-4 d-flex flex-column justify-content-center">
                <h5 class="card-title">${member.name}</h5>
                <p class="card-text">${member.job}</p>
            </div>
        </div>
    </div> `

    return card
    
}


