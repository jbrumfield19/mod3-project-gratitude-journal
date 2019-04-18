class Chat{
    constructor(message){
        this.message = message
        this.ul = document.createElement('ul')
        this.li = document.createElement('li')
        this.li.innerText = message
        this.ul.append(this.li)
        document.querySelector('.boxed').append(this.ul)
    }
    static create(chat) {
        fetch("http://localhost:3000/chats", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: chat.message
                })
            })
            .then(function (response) {
                return response.json()
            })
            .then(function (chat) {
                new Chat(chat.message)
            })
    }
}