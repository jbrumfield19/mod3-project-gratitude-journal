document.addEventListener('DOMContentLoaded',()=>{

    var myDiary = {


        entries: [],

        addEntry: function(entryTitle, entryText) {
            this.entries.push({
                entryDate: new Date().toDateString(),
                entryTitle: entryTitle,
                entryText: entryText,
                archived: false
            });
        },

        changeEntryTitle: function(entryPosition, entryTitle) {
            this.entries[entryPosition].entryTitle = entryTitle;
            view.displayEntries();
        },

        changeEntryText: function(entryPosition, entryText) {
            this.entries[entryPosition].entryText = entryText;
        },

        deleteEntry: function(entryPosition) {
            this.entries.splice(entryPosition, 1);
        },

        deleteAll: function() {
            this.entries = [];
        },

        toggleArchived: function(entryPosition) {
            var entry = this.entries[entryPosition];
            entry.archived = !entry.archived;
        },

        toggleAll: function() {
            var totalEntries = this.entries.length;
            var archivedEntries = 0;
            this.entries.forEach(function(entry) {
                if(entry.archived === true) {
                    archivedEntries++;
                }
            });
            this.entries.forEach(function(entry) {
                if(totalEntries === archivedEntries) {
                    entry.archived = false;
                } else {
                    entry.archived = true;
                }
            });
        }
    };

    var eventHandlers = {
        deleteAll: function() {
            myDiary.deleteAll();
            view.displayEntries()
        },

        toggleAll: function() {
            myDiary.toggleAll();
            view.displayEntries()
        },

        addEntry: function() {
            var entryTitle = document.getElementById('entryTitle');
            var entryText = document.getElementById('entryText');
            myDiary.addEntry(entryTitle.value, entryText.value);
            entryTitle.value = '';
            entryText.value = '';
            view.displayEntries()
        },

        updateEntryTitle: function() {
            var titlePositionEdit = document.getElementById('titlePositionEdit');
            var titleTextEdit = document.getElementById('titleTextEdit');
            myDiary.changeEntryTitle(titlePositionEdit.valueAsNumber, titleTextEdit.value);
            titlePositionEdit.value = '';
            titleTextEdit.value = '';
            view.displayEntries()
        },

        updateEntryText: function() {
            var entryPositionEdit = document.getElementById('entryPositionEdit');
            var entryTextEdit = document.getElementById('entryTextEdit');
            myDiary.changeEntryText(entryPositionEdit.valueAsNumber, entryTextEdit.value);
            entryPositionEdit.value = '';
            entryTextEdit.value = '';
            view.displayEntries()
        },

        deleteEntry: function(position) {
            myDiary.deleteEntry(position)
            view.displayEntries()
        },

        toggleArchived: function() {
            var toggleArchivedPosition = document.getElementById('toggleArchivedPosition');
            myDiary.toggleArchived(toggleArchivedPosition.valueAsNumber);
            toggleArchivedPosition.value = '';
            view.displayEntries()
        }
    };

    var view = {
        entriesDisplay: document.querySelector('section#display'),

        displayEntries: function() {
            this.entriesDisplay.innerHTML = '';
            this.countEntries();
            this.displayWithArchivedStatus();
        },
        countEntries: function() {
            var entriesNumber = document.createElement('i');
            var countMessage;
            if(myDiary.entries.length === 0) {
                countMessage = 'You have no entries in your diary!';
            } else if (myDiary.entries.length === 1) {
                countMessage = 'You have 1 entry:';
            } else {
                countMessage = 'You have ' + myDiary.entries.length + ' entries in your diary:';
            }
            entriesNumber.textContent = countMessage;
            this.entriesDisplay.appendChild(entriesNumber);
        },

        displayWithArchivedStatus: function() {
            var titleAndDateNodeContent;
            var entryTextNodeContent;
            myDiary.entries.forEach(function(entry, position) {
                if(entry.archived === false) {
                    titleAndDateNodeContent = '( ) ' + entry.entryTitle + ' ' + entry.entryDate;
                } else {
                    titleAndDateNodeContent = '(X) ' + entry.entryTitle + ' ' + entry.entryDate;
                }
                entryTextNodeContent = entry.entryText;
                var displayEntriesNode = document.createElement('article');
                var titleAndDateNode = document.createElement('h3');
                var entryTextNode = document.createElement('p');
                titleAndDateNode.textContent = titleAndDateNodeContent;
                displayEntriesNode.appendChild(titleAndDateNode);
                entryTextNode.textContent = entryTextNodeContent;
                displayEntriesNode.appendChild(entryTextNode);
                this.entriesDisplay.appendChild(displayEntriesNode);
                titleAndDateNode.appendChild(this.createDeleteButton());
                displayEntriesNode.id = position;
            }, this);
        },

        createDeleteButton: function() {
            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete';
            return deleteButton;
        },

        setUpEventListeners: function() {
            var entriesDisplay = document.querySelector('section#display');
            entriesDisplay.addEventListener('click', function(event) {
                var elementClicked = event.target;
                if (elementClicked.className === 'delete') {
                    eventHandlers.deleteEntry(parseInt(elementClicked.parentNode.parentNode.id));
                }
            });
        }

        $('document').ready(function(){
        $gif = $('img').first();

        $('#gif-trigger').on('click', function(){
            src = $gif.attr('src');

            $gif.attr('src', src);
        });
    });

};

    view.setUpEventListeners();

})