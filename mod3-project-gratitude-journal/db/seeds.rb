# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




Journal.destroy_all
Entry.destroy_all
Chat.destroy_all
gratitude = Journal.create(name: "Gratitude")


   message= Chat.create(message: "Let's get this Bread!!!")


    entry1 = Entry.create(
            date: Date.new(2019,4,1), 
            input1: "I am grateful for my loving family.", 
            input2: "I am grateful for the ability to walk.",
            input3: "I am grateful for the roof above my head each night.", 
            journal: gratitude 
        )

    entry2 = Entry.create(
            date: Date.new(2019,4,2), 
            input1: "I am grateful for my loving spouse.", 
            input2: "I am grateful for the ability to see.",
            input3: "I am grateful for not having to worry about food.", 
            journal: gratitude 
        )

    entry3 = Entry.create(
            date: Date.new(2019,4,3), 
            input1: "I am grateful for Flatiron School.", 
            input2: "I am grateful for my cohort.",
            input3: "I am grateful for the ability to learn code.", 
            journal: gratitude 
        )

    entry4 = Entry.create(
        date: Date.new(2019,4,4), 
        input1: "I am grateful for being alive.", 
        input2: "I am grateful for my daily morning coffee.", 
        input3: "I am grateful for the health of my loved ones.", 
        journal: gratitude 
    )

    entry5 = Entry.create(
        date: Date.new(2019,4,5), 
        input1: "I am grateful for my comfortable bed.", 
        input2: "I am grateful for the ability to drive myself to point A & B.", 
        input3: "I am grateful for having access to the internet.", 
        journal: gratitude 
    )

    entry6 = Entry.create(
        date: Date.new(2019,4,6), 
        input1: "I am grateful for having a laptop.", 
        input2: "I am grateful for Josh as our instructor and friend.", 
        input3: "I am grateful for making wonderful friends in my cohort.", 
        journal: gratitude 
    )

    entry7 = Entry.create(
        date: Date.new(2019,4,7), 
        input1: "I am grateful for my dog that's always happy to see me.", 
        input2: "I am grateful for being able to invest in my future.", 
        input3: "I am grateful for my family and friends who support me.", 
        journal: gratitude 
    )

    entry8 = Entry.create(
        date: Date.new(2019,4,8), 
        input1: "I am grateful for my failures as I continue to learn from them.", 
        input2: "I am grateful for having no major health issues.", 
        input3: "I am grateful for my favorite song that gives me energy.", 
        journal: gratitude 
    )

    entry9 = Entry.create(
        date: Date.new(2019,4,9), 
        input1: "I am grateful for yoga.", 
        input2: "I am grateful for having comfortable shoes to walk in.", 
        input3: "I am grateful for having a phone that works.", 
        journal: gratitude 
    )

    entry10 = Entry.create(
        date: Date.new(2019,4,10), 
        input1: "I am grateful for my healthy baby.", 
        input2: "I am grateful for having access to clean water.", 
        input3: "I am grateful for my ability to choose organic produce.", 
        journal: gratitude 
    )




