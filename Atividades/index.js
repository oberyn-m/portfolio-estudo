const classA = [
  {
    name: "Isaac",
    grade: 10
  },

  {
    name: "João",
    grade: 10
  },

  {
    name: "Paulo",
    grade: 8
  },

  {
    name: "José",
    grade: 8
  },
  {
    name: "José",
    grade: 10
  }

]

const classB = [
  {
    name: "Matheus",
    grade: 10
  },

  {
    name: "Henrique",
    grade: 2
  },

  {
    name: "Lula",
    grade: 8
  },

  {
    name: "Bolsonaro",
    grade: 10
  }
]

function calculateAverage(students) {
  let sum = 0;

  for (let i = 0; i < students.length; i++) {
    sum = sum + students[i].grade
  }

  const average = sum / students.length

  return average
}

function sendMessage(average, turma) {
  if (average > 5) {
    console.log(`${turma} average: ${average}. Congratulations class.`)
  } else {
    console.log(`${turma} average: ${average}. Is not good.`)
  }
}

function markAsFlunked(student) {
  student.flunked = false;
  
  if (student.grade < 5) {
    student.flunked = true;
  }
}

function sendFlunkedflunked(student) {
  if (student.flunked) {
    console.log(`O student ${student.name} flunked!`)
  }
}

function studentsflunkeds(students) {
  for (let student of students) {
    markAsFlunked(student);
    sendFlunkedflunked(student);
  }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, 'Class A')
sendMessage(average2, 'Class B')

studentsflunkeds(classA)
studentsflunkeds(classB)