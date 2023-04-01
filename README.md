# Event_page-Project

TEST BRIEF
The Open Knowledge Platform — our core product at Ooloi Labs, in a simple sense, can be seen as a content management system. On the frontend, users are given several ‘templates’ using which, they can share stories, events, news, resources etc. These templates are quite rich, allowing the user to add all kinds of structured and unstructured information.

A simple example of structured information is a ‘title’ which usually has a character limit, and a fixed format that it has to be written in 1 single line. Another example of structured information would be a ‘date input field’. An example of unstructured information would be, any information that a user inputs into a rich text editor ( you will see this in the attached video ). This information has no character limit and can be a mix of several different types of information — plain written text, formatted text, images, attachments, pdf embeds, video embeds etc.

Furthermore, the ‘template’ also contains some slightly more complex input fields. For example, you will come across a ‘speaker card input field’. This field has its own subfields of ‘title description & image’. But this entire field itself can be duplicated over and over again, and in this way, multiple speaker cards can be added. Similarly, the tags input field takes the user input and saves it as separate words.


YOUR TASK
In this test, your job is to carefully analyse the video of our CMS for creating an ‘events page’ [https://drive.google.com/file/d/1oV0XM2phU3nKp0bB9Flx7lBX2dvUDmBR/view?usp=sharing]

Understand its data structure. understand the working of the different types of ‘fields’ that make up this ‘template’. Then you need to:

+ setup a simple server using Node and Express, connect it to MongoDBAtlas,
+ design a data architecture that you think would be most suitable to store the ‘nature of information’ that our frontend template needs to capture.
+ Then you need to implement the backend for it, by at least writing 4 APIs to perform Create, Read, Update & Delete actions on the database. 

To reiterate, you need to write the APIs that would allow me to use POSTMAN, and 
1// create an event page document in the database, 
2// read 1 event page document from the database, 
3// update 1 event page document in the database. 
4// delete 1 event page document in the database.

You will be judged on how well your data architecture and APIs were designed so as to keep it as optimised, efficient and lightweight as possible. You are free to use other services / packages apart from MongoDB if you choose to, but you better have a convincing reason to have used it, because every package / service you add to a system, increases costs in terms of economics as well as efficiency.

You will also be judged on the quality of your code and your thought process.

NOTE
Your task is write the APIs, but just writing 4 simple APIs from something like Brad traversy's lesson on Udemy is not enough.

HINT: The events page has structured and unstructured data. How are you going to design the architecture to store structured data, and how are you going to design the architecture to store unstructured data?