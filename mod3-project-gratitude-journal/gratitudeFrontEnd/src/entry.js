class Entry {
    constructor(input1, input2, input3, date, id) {
        this.date = date
        this.input1 = input1
        this.input2 = input2
        this.input3 = input3
        this.id = id
        
        this.div = document.createElement('div')
        this.div.className = 'card'

        const deleteBtn = document.createElement('button')
        deleteBtn.className = 'delete'
        deleteBtn.innerText = 'Erase'

        const dateHeader = document.createElement('h2')
        dateHeader.innerText = getCurrentDate()

        const qtion = document.createElement('h3')
        qtion.innerText = 'What are you grateful for?'

        const content = document.createElement('ol')

        const answer1 = document.createElement('li')
        answer1.innerText = input1

        const answer2 = document.createElement('li')
        answer2.innerText = input2

        const answer3 = document.createElement('li')
        answer3.innerText = input3

        content.prepend(dateHeader)
        content.append(qtion, answer1, answer2, answer3, deleteBtn)
        this.div.append(content)
        document.querySelector(".gratitude-journal").append(this.div)


        deleteBtn.addEventListener('click',(e)=>{
            e.preventDefault()
            fetch(`http://localhost:3000/entries/${this.id}`,{
                method: "DELETE"
            })
            confirm("Are you sure you want to delete this entry?")
            this.div.remove()
        })
    }

    render() {
        return this.div
    }

    static fetchAllEntries() {
        fetch('http://localhost:3000/entries')
        .then((res) => res.json())
        .then((entryData) => {
            // console.log(entryData)
            entryData.forEach(entry => {
                let myEntry = new Entry(entry.input1, entry.input2, entry.input3, entry.date, entry.id)
                myEntry.render()
            });
        })
    }

    static create(entry) {
        fetch("http://localhost:3000/entries", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    date: entry.date,
                    input1: entry.input1,
                    input2: entry.input2,
                    input3: entry.input3,
                    journal_id: "2"
                })
            })
            .then(function (response) {
                return response.json()
            })
            .then(function (entry) {
                new Entry(entry.input1, entry.input2, entry.input3, entry.date, entry.id)
            })
    }
}