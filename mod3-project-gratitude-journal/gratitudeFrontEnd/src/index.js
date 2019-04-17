document.addEventListener('DOMContentLoaded',()=>{

   const addForm = document.querySelector('.gratitude-form')
   const input1 = document.querySelector('#input1')
   const input2 = document.querySelector('#input2')
   const input3 = document.querySelector('#input3')
   
   addForm.addEventListener('submit', (e) => {
       e.preventDefault()

    //    let entry = {
    //        date: 
    //        input1: 
    //        input2:
    //        input3:
    //    }


   })

   


//     var eventHandlers = {
//         deleteAll: function() {
//             myDiary.deleteAll();
//             view.displayEntries()
//         },

//         toggleAll: function() {
//             myDiary.toggleAll();
//             view.displayEntries()
//         },

//         addEntry: function() {
//             var entryTitle = document.getElementById('entryTitle');
//             var entryText = document.getElementById('entryText');
//             myDiary.addEntry(entryTitle.value, entryText.value);
//             entryTitle.value = '';
//             entryText.value = '';
//             view.displayEntries()
//         },

//         updateEntryTitle: function() {
//             var titlePositionEdit = document.getElementById('titlePositionEdit');
//             var titleTextEdit = document.getElementById('titleTextEdit');
//             myDiary.changeEntryTitle(titlePositionEdit.valueAsNumber, titleTextEdit.value);
//             titlePositionEdit.value = '';
//             titleTextEdit.value = '';
//             view.displayEntries()
//         },

//         updateEntryText: function() {
//             var entryPositionEdit = document.getElementById('entryPositionEdit');
//             var entryTextEdit = document.getElementById('entryTextEdit');
//             myDiary.changeEntryText(entryPositionEdit.valueAsNumber, entryTextEdit.value);
//             entryPositionEdit.value = '';
//             entryTextEdit.value = '';
//             view.displayEntries()
//         },

//         deleteEntry: function(position) {
//             myDiary.deleteEntry(position)
//             view.displayEntries()
//         },

//         toggleArchived: function() {
//             var toggleArchivedPosition = document.getElementById('toggleArchivedPosition');
//             myDiary.toggleArchived(toggleArchivedPosition.valueAsNumber);
//             toggleArchivedPosition.value = '';
//             view.displayEntries()
//         }
//     };

//         createDeleteButton: function() {
//             var deleteButton = document.createElement('button');
//             deleteButton.textContent = 'Delete';
//             deleteButton.className = 'delete';
//             return deleteButton;
//         },

//         setUpEventListeners: function() {
//             var entriesDisplay = document.querySelector('section#display');
//             entriesDisplay.addEventListener('click', function(event) {
//                 var elementClicked = event.target;
//                 if (elementClicked.className === 'delete') {
//                     eventHandlers.deleteEntry(parseInt(elementClicked.parentNode.parentNode.id));
//                 }
//             });
//         }

//         $('document').ready(function(){
//         $gif = $('img').first();

//             $('#gif-trigger').on('click', function(){
//             src = $gif.attr('src');

//             $gif.attr('src', src);
//         });
//     });
    fetch('http://localhost:3000/entries')
    .then((res) => res.json())
    .then((entry) => {
       entry.forEach(newEntry => {
        let myEntry = new Entry('gratitude',newEntry.input1, newEntry.input2,newEntry.input3, newEntry.date)
        myEntry.render(newEntry.id)
       });
    })
    
});

    // view.setUpEventListeners();


