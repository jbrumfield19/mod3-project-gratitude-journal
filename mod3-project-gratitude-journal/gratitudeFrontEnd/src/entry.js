// var myDiary = {


//     entries: [],

//     addEntry: function(entryTitle, entryText) {
//         this.entries.push({
//             entryDate: new Date().toDateString(),
//             entryTitle: entryTitle,
//             entryText: entryText,
//             archived: false
//         });
//     },

//     changeEntryTitle: function(entryPosition, entryTitle) {
//         this.entries[entryPosition].entryTitle = entryTitle;
//         view.displayEntries();
//     },

//     changeEntryText: function(entryPosition, entryText) {
//         this.entries[entryPosition].entryText = entryText;
//     },

//     deleteEntry: function(entryPosition) {
//         this.entries.splice(entryPosition, 1);
//     },

//     deleteAll: function() {
//         this.entries = [];
//     },

//     toggleArchived: function(entryPosition) {
//         var entry = this.entries[entryPosition];
//         entry.archived = !entry.archived;
//     },

//     toggleAll: function() {
//         var totalEntries = this.entries.length;
//         var archivedEntries = 0;
//         this.entries.forEach(function(entry) {
//             if(entry.archived === true) {
//                 archivedEntries++;
//             }
//         });
//         this.entries.forEach(function(entry) {
//             if(totalEntries === archivedEntries) {
//                 entry.archived = false;
//             } else {
//                 entry.archived = true;
//             }
//         });
//     }
// };

// var view = {
//     entriesDisplay: document.querySelector('section#display'),
//
//     displayEntries: function() {
//         this.entriesDisplay.innerHTML = '';
//         this.countEntries();
//         this.displayWithArchivedStatus();
//     },
//     countEntries: function() {
//         var entriesNumber = document.createElement('i');
//         var countMessage;
//         if(myDiary.entries.length === 0) {
//             countMessage = 'You have no entries in your diary!';
//         } else if (myDiary.entries.length === 1) {
//             countMessage = 'You have 1 entry:';
//         } else {
//             countMessage = 'You have ' + myDiary.entries.length + ' entries in your diary:';
//         }
//         entriesNumber.textContent = countMessage;
//         this.entriesDisplay.appendChild(entriesNumber);
//     },
//
//     displayWithArchivedStatus: function() {
//         var titleAndDateNodeContent;
//         var entryTextNodeContent;
//         myDiary.entries.forEach(function(entry, position) {
//             if(entry.archived === false) {
//                 titleAndDateNodeContent = '( ) ' + entry.entryTitle + ' ' + entry.entryDate;
//             } else {
//                 titleAndDateNodeContent = '(X) ' + entry.entryTitle + ' ' + entry.entryDate;
//             }
//             entryTextNodeContent = entry.entryText;
//             var displayEntriesNode = document.createElement('article');
//             var titleAndDateNode = document.createElement('h3');
//             var entryTextNode = document.createElement('p');
//             titleAndDateNode.textContent = titleAndDateNodeContent;
//             displayEntriesNode.appendChild(titleAndDateNode);
//             entryTextNode.textContent = entryTextNodeContent;
//             displayEntriesNode.appendChild(entryTextNode);
//             this.entriesDisplay.appendChild(displayEntriesNode);
//             titleAndDateNode.appendChild(this.createDeleteButton());
//             displayEntriesNode.id = position;
//         }, this);
//     },

class Entry {
    constructor (input1,input2,input3,created_at){

        this.div = document.createElement('div')
        this.div.className= 'card'
        const updateBtn = document.createElement('button')
        const deleteBtn = document.createElement('button')
        // updateBtn.className = 'update' 
        // deleteBtn.className = 'delete'
        const date = document.createElement('h2')
        const qtion = document.createElement('h3')
        const content = document.createElement('ol')
        const answer1 = document.createElement('li')
        const answer2 = document.createElement('li')
        const answer3 = document.createElement('li')
        this.created_at = created_at
        this.input1 = input1
        this.input2 = input2
        this.input3 = input3
        date.innerText = created_at
        qtion.innerText = 'What are you grateful for?'
        updateBtn.innerText = 'Edit'
        deleteBtn.innerText = 'Erase'
        answer1.innerText = input1
        answer2.innerText = input2
        answer3.innerText = input3
        content.append(date,qtion,answer1,answer2,answer3,updateBtn,deleteBtn)
        this.div.append(content)
        document.querySelector('.container').append(this.div)
    }
    render(){
        return this.div
    }
}
