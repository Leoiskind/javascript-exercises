const findTheOldest = function(persons) {
    let oldest = persons.reduce((oldest, person) => {
        if (getAge(person) > getAge(oldest)){
            return person;
        } else {
            return oldest;
        }
    });
    return oldest;
};

function getAge(person){
    if (person.yearOfDeath){
        return person.yearOfDeath - person.yearOfBirth;
    } else {
        const currentYear = new Date().getFullYear();
        return currentYear - person.yearOfBirth;
    };
};

// Do not edit below this line
module.exports = findTheOldest;
