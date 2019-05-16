# gratitude-journal

Flatiron Gratitude Journal <br><br>
Welome to the Flatiron Gratitude Journal! A place where you can write out what you're grateful for daily, review all of your entries, listen to a relaxing meditation that also incorporates a beautiful moving background, and chat with others about how you're feeling for that day. We hope that you enjoy! 

Models and Associations<br><br>
In this application, we have a chat, entry and journal model. They are associated in the following way:e

- A journal has many entries
- An entry belongs to a journal

Getting Started<br><br>
Fork and clone this repository to your local machine. Bedore you run the application, make sure you run bundle install first in your terminal to install all the gems required in the Gemfile, then you can start running the program!

Running the application<br><br>
We've set up the migrations in the db/migrate directory to create the journal, entry, and chat table. In db/migrate directory, we've also set up some data in the seeds file for you to play around with.

Program Structure<br><br>
Database connection and files connection are set up in environment file in config/environment.rb
You can find database schema and data in db, and models in app/models

DEMO VIDEO - https://drive.google.com/file/d/1BCM3TyX6sueORynVREm78Lz8IuaG6g0I/view?usp=sharing
