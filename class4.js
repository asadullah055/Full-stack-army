/* // if (studyBasic) {
//     wontJont()
// }
// if (studyAdvance) {
//     join()
// }
// if (teacherSpeack) {
//     silent()
// }

// if (!teacherSpeack) {
//     shot()
// }

const stu1 = {
    firstName: 'Asadullah',
    lastName: 'Ahmed',
    email: 'asadullahahmed01@gmail.com',
    att: true
}
const stu2 = {
    firstName: 'Abdur',
    lastName: 'Rohim',
    email: 'abdurrohim@gmail.com',
    att: true
}
const stu3 = {
    firstName: 'Abdul',
    lastName: 'Kader',
    email: 'kaderabdul@gmail.com',
    att: true
}

const allStudent = [stu1, stu2, stu3]
for (let i = 0; i < allStudent.length; i++){
sendEmail(allStudent[i].email)
}
function sendEmail(email) {
    console.log('sending email to ', email);
} */
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
  console.log(getRandomArbitrary(2,5));