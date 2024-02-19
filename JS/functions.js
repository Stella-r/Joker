const CreateButton = document.querySelector('button');
const MTable = document.querySelector('table');
const RowAmount = document.querySelector('p')
let p = 0

CreateButton.addEventListener('click', () => {
    let NewRow = document.createElement('tr')

    for (let i = 0; i < 7; i++) {
        let RNum = Math.floor(Math.random() * 10)
        let Cells = document.createElement('td')
        Cells.textContent = RNum
        NewRow.appendChild(Cells)
    }
    
    MTable.appendChild(NewRow)
    p++
    RowAmount.textContent = 'Valmiita rivejä: ' + p
});

