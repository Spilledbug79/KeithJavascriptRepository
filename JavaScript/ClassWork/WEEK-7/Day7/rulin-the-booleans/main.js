/********************
 * YOUR CODE BELOW! *
 ********************/
// greater than 5
 
function moreThan5(more){
  return more > 5;
}

 

// if score is greater than the top score

 
function isNewTopScore(score, topScore){
  return score > topScore;
}

 

// isInDanger

 function isInDanger(Dgrade){
  return Dgrade >= 60 && Dgrade <= 71;
}

 

// isCoasting

function isCoasting(Cgrade){
  return Cgrade >=72 && Cgrade <= 83;
}

 

// isSucceeding

function isSucceeding(Sgrade){
  return Sgrade >= 84 && Sgrade <= 92;
}

 

// isFailing

function isFailing(Fgrade){
  return Fgrade < 60;
}

 

// isAcing

function isAcing(Agrade){
  return Agrade > 92;
}

 

// isStudent

function isStudent(student){
return  student === "student";
}
 

// isTeacher

// function isTeacher(teacher){
  // return teacher === "teacher";}


 

// isAdmin

// function isAdmin(administrator){
  // return administrator === "admin";}


 

// function isElementary(school){
  // return school === "elementary";}


 

// are different people

function areDifferentPeople(name1,name2){
    return name1 !== name2;
}
 
 

// is middle school teacher

// function isMiddleSchoolTeacher(role, schoolLevel){
    // return role === "teacher" && schoolLevel >= 6 && schoolLevel <=8;}


 

// not a elementary school admin
  
function notAnElementarySchoolAdministrator(schoolLevel, role){
return schoolLevel !== "elementary school" || role !== "administrator"
}

console.log(notAnElementarySchoolAdministrator("elementary school", "admin"))

/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof moreThan5 === 'undefined') {
  moreThan5 = undefined;
}

if (typeof isNewTopScore === 'undefined') {
  isNewTopScore = undefined;
}

if (typeof isInDanger === 'undefined') {
  isInDanger = undefined;
}

if (typeof isCoasting === 'undefined') {
  isCoasting = undefined;
}

if (typeof isSucceeding === 'undefined') {
  isSucceeding = undefined;
}

if (typeof isFailing === 'undefined') {
  isFailing = undefined;
}

if (typeof isAcing === 'undefined') {
  isAcing = undefined;
}

if (typeof isStudent === 'undefined') {
  isStudent = undefined;
}

if (typeof isTeacher === 'undefined') {
  isTeacher = undefined;
}

if (typeof isAdmin === 'undefined') {
  isAdmin = undefined;
}

if (typeof isElementary === 'undefined') {
  isElementary = undefined;
}

if (typeof areDifferentPeople === 'undefined') {
  areDifferentPeople = undefined;
}

if (typeof notAnElementarySchoolAdministrator === 'undefined') {
  notAnElementarySchoolAdministrator = undefined;
}

if (typeof isMiddleSchoolTeacher === 'undefined') {
  isMiddleSchoolTeacher = undefined;
}


module.exports = {
  moreThan5,
  isNewTopScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  areDifferentPeople,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
}
