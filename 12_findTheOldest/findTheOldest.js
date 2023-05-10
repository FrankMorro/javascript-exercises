const findTheOldest = function (people) {
  const old = people.reduce((a, b) => {
    let yearDay1 = new Date().getFullYear()
    let yearDay2 = new Date().getFullYear()

    console.log(yearDay1, yearDay2)

    if (a.yearOfDeath !== undefined) {
      yearDay1 = a.yearOfDeath
    }

    if (b.yearOfDeath !== undefined) {
      yearDay2 = b.yearOfDeath
    }

    return yearDay1 - a.yearOfBirth > yearDay2 - b.yearOfBirth ? a : b
  })

  return old
}

// Do not edit below this line
module.exports = findTheOldest
