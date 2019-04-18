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

});

// view.setUpEventListeners();