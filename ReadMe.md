# movieBooking

download the repository from the link
then click on the backend folder then type in command "npm i" to install node nodule.
and again same process in the frontend then type in the command promt "npm i" to install neccessary packages of node module.

All the data are inserted by using postman by creating JSON file so you need to insert data again in your database for the prorper running of the system otherwise no data will be shown

------------------->---------JSONFIle------------------------------->

---------this all are the json file of movie--------------

---

{
"success": true,
"message": "movies found successful",
"data": [
{
"photo": {
"public_id": "Movies/lvdebuuy6gwxmztnhted",
"url": "https://res.cloudinary.com/dfuoikoik/image/upload/v1702210210/Movies/lvdebuuy6gwxmztnhted.jpg"
},
"\_id": "6575aaa928fd45df381f78af",
"title": "Animal",
"genre": "war ",
"description": "Action fight and love story",
"tickets": 100,
"showtime": [
"6575ace328fd45df381f78dd"
],
"**v": 0
},
{
"photo": {
"public_id": "Movies/kup1tfhj6pudjljtwmcb",
"url": "https://res.cloudinary.com/dfuoikoik/image/upload/v1702210292/Movies/kup1tfhj6pudjljtwmcb.webp"
},
"\_id": "6575aaf728fd45df381f78b3",
"title": "Thor",
"genre": "drama ",
"description": "Action fight and cosmic story",
"tickets": 150,
"showtime": [
"6575acfe28fd45df381f78e0"
],
"**v": 0
},
{
"photo": {
"public_id": "Movies/ojgygctmyrzq3gdzh2sq",
"url": "https://res.cloudinary.com/dfuoikoik/image/upload/v1702210423/Movies/ojgygctmyrzq3gdzh2sq.jpg"
},
"\_id": "6575ab7928fd45df381f78b9",
"title": "Mission Impossible",
"genre": "Action",
"description": "action movies with good story",
"tickets": 150,
"showtime": [
"6575ad2328fd45df381f78e3"
],
"**v": 0
},
{
"photo": {
"public_id": "Movies/lvwrok0v35g4u3gzpuxq",
"url": "https://res.cloudinary.com/dfuoikoik/image/upload/v1702210509/Movies/lvwrok0v35g4u3gzpuxq.webp"
},
"\_id": "6575abd028fd45df381f78bf",
"title": "Thor 2",
"genre": "Drama",
"description": "universe story",
"tickets": 200,
"showtime": [
"6575ad3a28fd45df381f78e6"
],
"**v": 0
},
{
"photo": {
"public_id": "Movies/poijfx7nvfp1n2fbrscf",
"url": "https://res.cloudinary.com/dfuoikoik/image/upload/v1702210577/Movies/poijfx7nvfp1n2fbrscf.webp"
},
"\_id": "6575ac1328fd45df381f78c3",
"title": "Ant Man",
"genre": "Drama ",
"description": "action movies with science fition",
"tickets": 200,
"showtime": [
"6575ad4d28fd45df381f78e9"
],
"**v": 0
},
{
"photo": {
"public_id": "Movies/unvr16fd1ypsteywjbva",
"url": "https://res.cloudinary.com/dfuoikoik/image/upload/v1702210650/Movies/unvr16fd1ypsteywjbva.webp"
},
"\_id": "6575ac5d28fd45df381f78c9",
"title": "Iron Man",
"genre": "war ",
"description": "action movies with science fition",
"tickets": 200,
"showtime": [
"6575ad6d28fd45df381f78ec"
],
"**v": 0
}
]
}

---

--------------------------this is single movie json file-------------
{
"success": true,
"message": "movies found successful",
"data": {
"photo": {
"public_id": "Movies/lvdebuuy6gwxmztnhted",
"url": "https://res.cloudinary.com/dfuoikoik/image/upload/v1702210210/Movies/lvdebuuy6gwxmztnhted.jpg"
},
"\_id": "6575aaa928fd45df381f78af",
"title": "Animal",
"genre": "war ",
"description": "Action fight and love story",
"tickets": 100,
"showtime": [
{
"_id": "6575ace328fd45df381f78dd",
"startAt": "2pm",
"startDate": "3 december",
"endDate": "10 december",
"__v": 0
}
],
"\_\_v": 0
}
}
