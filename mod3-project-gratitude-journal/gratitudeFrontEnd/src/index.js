function getCurrentDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    return today
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.gratitude-form')
    const userInput1 = document.querySelector('#input1')
    const userInput2 = document.querySelector('#input2')
    const userInput3 = document.querySelector('#input3')

    Entry.fetchAllEntries()

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        console.log(getCurrentDate())
        const newEntry = {
            date: getCurrentDate(),
            input1: userInput1.value,
            input2: userInput2.value,
            input3: userInput3.value
        }

        Entry.create(newEntry)
        form.reset()
    })

    fetch('http://localhost:3000/entries')
    .then((res) => res.json())
    .then((entry) => {
       entry.forEach(newEntry => {
        let myEntry = new Entry('gratitude',newEntry.input1, newEntry.input2,newEntry.input3, newEntry.date)
        myEntry.render(newEntry.id)
       });
    })

    

})