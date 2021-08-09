    HTTP                                SQL

C   POST  * task and INSERT INTO        weekend_to_do_app
#Req: Task name
#Res: 201
// Front end: reload and refresh DOM

R   GET   * task and SELECT FROM        weekend_to_do_app
#Req: reload and append table to DOM ** 'on click' to input values
#Res: 200

U   UPDATE * task and SET TO            weekend_to_to_app
#Req: Task Name
#Res: 200
//Front end: Update when someone adds to the input fields and reload DOM on Click

D   DELETE * task and DELETE            weekend_to_do_app
#Req: Task name
#Res 200


## URL
URL
/tasks',

## Table 
ID: Serial      Task: "String"       Complete:  True       Due: date

                                     Delete:    False      Overdue: T/F


Completed BOOLEAN DEFAULT FALSE
add a user input>
if true, set css to green