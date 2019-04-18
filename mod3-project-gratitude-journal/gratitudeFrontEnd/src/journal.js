class Journal{
    constructor(name){
        this.name = name
        this.journal = document.createElement('div')
        this.journal.className = `${this.name}-journal`
        document.querySelector('.container').append(this.journal)
    }
}