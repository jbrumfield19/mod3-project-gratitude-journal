function getCurrentDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    return today
}

document.addEventListener('DOMContentLoaded', () => {
    const chatContainer = document.getElementById('id01')
    chatContainer.style.display='none'
    const messageBox = document.querySelector('.chat-submit')
    const message = document.querySelector('#message')
    const form = document.querySelector('.gratitude-form')
    const userInput1 = document.querySelector('#input1')
    const userInput2 = document.querySelector('#input2')
    const userInput3 = document.querySelector('#input3')
    const chatBtn = document.querySelector('.button-like')
    const rightBtn = document.querySelector(".arrow.right")
    const leftBtn = document.querySelector(".arrow.left")
    const closeBtn = document.querySelector('#close')
    const mainContainer = document.querySelector('.main-form-container')
    const addFormContainer = document.querySelector('.gratitude-form')
    const meditationContainer = document.querySelector('.meditation-container')
    const journalsContainer = document.querySelector('.gratitude-journal')

    //on load, site will only show "add entry" form
    meditationContainer.style.display = "none"
    journalsContainer.style.display = "none"

    //"right & left button" event listener

    let forms = [
        addFormContainer,
        // chatContainer,
        meditationContainer,
        journalsContainer
    ]

    let cursor = 0

    rightBtn.addEventListener('click', (e) => {
        e.preventDefault()
        forms[cursor].style.display = 'none'
        // cursor = cursor - 1 % forms.length
        cursor = cursor - 1
        if (cursor < 0) cursor = forms.length - 1
        forms[cursor].style.display = 'block'
    })

    leftBtn.addEventListener('click', (e) => {
        e.preventDefault()
        forms[cursor].style.display = 'none'
        cursor = cursor + 1
        if (cursor >= forms.length) cursor = 0
        forms[cursor].style.display = 'block'
    })
    chatBtn.addEventListener('click',(e)=>{
        e.preventDefault()
        chatBtn.style.display = 'none'
    })
    closeBtn.addEventListener('click',(e)=>{
        e.preventDefault()
        chatBtn.style.display = 'block'
    })
    //fetching all journal entries to the page
    Entry.fetchAllEntries()

    //"add a journal entry" eventlistener
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const newChat = {
            date: getCurrentDate(),
            input1: userInput1.value,
            input2: userInput2.value,
            input3: userInput3.value
        }

        Entry.create(newChat)
        form.reset()
    })

    fetch('http://localhost:3000/entries')
        .then((res) => res.json())
        .then((entry) => {
            entry.forEach(newEntry => {
                let myEntry = new Entry('gratitude', newEntry.input1, newEntry.input2, newEntry.input3, newEntry.date)
                myEntry.render(newEntry.id)
            });
        })


    fetch('http://localhost:3000/chats')
        .then((res) => res.json())
        .then((messages) => {
            messages.forEach(message => {
                let newMess = new Chat(message.message)
            })
        })
    messageBox.addEventListener('click', (e) => {
        e.preventDefault()
        const newChat = {
            message: message.value
        }
         message.value = ''
        Chat.create(newChat)
        
    })
    //     var eventHandlers = {
    //         deleteAll: function() {
    //             myDiary.deleteAll();
    //             view.displayEntries()
    //         },




})