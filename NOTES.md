To-Do Planner
=================

We have intergrated this chat bot with cliq

On the back-end,
We are making a basic To - Do Planner Chatbot

==================
# NOTES to make this Chatbot
## JSON Structure
``` Javascript 
  { 
  "akhil18@navgurukul.org" : { "3/9/2019":[{ "agenda" : "complete Python", 
                                 "id" : 1 ,
                                 "completed" : false,},
                                {"agenda" : "complete HTML", 
                                 "id" : 2 ,
                                 "completed" : true}
                               ],
                               "3/10/2019":[{ "agenda" : "complete Python", 
                                 "id" : 1 ,
                                 "completed" : false,},
                                {"agenda" : "complete HTML", 
                                 "id" : 2 ,
                                 "completed" : true}
                               ]},
                                  
satyam18@navgurukul.org" : { "3/9/2019":[{ "agenda" : "complete Python", 
                                 "id" : 1 ,
                                 "completed" : false,},
                                {"agenda" : "complete HTML", 
                                 "id" : 2 ,
                                 "completed" : true}
                               ],
                               "3/10/2019":[{ "agenda" : "complete Python", 
                                 "id" : 1 ,
                                 "completed" : false,},
                                {"agenda" : "complete HTML", 
                                 "id" : 2 ,
                                 "completed" : true}
                               ]}
  }
```
# List of functionalities

#### -> Every user will have their own key.

#### -> By typing ```list-all``` we will be able to get the list of all the commands that we can use with this Chatbot.

#### ->~~Command ``` sudo set agenda: agenda``` will ask the user to set his/her agenda.~~

#### -> ~~Command ``` sudo get agenda: id``` will get the agenda requested by the user by accessing the id of the agenda.~~

#### -> ~~Command ``` sudo get-all``` will get all the agendas of the user.~~

#### -> ~~Command ``` sudo change agenda: id: content ``` will change the agenda stored in our json with the given ```id```, the changed content will be taken from the ```content``` place holder.~~

#### -> ~~Command ``` sudo complete agenda: id``` will change the ```completed``` key's value from ```false``` to ``` true```.~~

#### -> ~~Command ``` sudo get-all completed``` will get all the agendas which are completed.~~

#### ->  Command ``` sudo-get-all: date``` will get all agendas related to that date.





