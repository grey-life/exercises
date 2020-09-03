// EX-38
class Movie {
    constructor(name, yearOfRelease) {
        this.name = name;
        this.cast = [];
        this.yearOfRelease = yearOfRelease;
        this.boxOfficeCollection = 0;
    }

    addToCast = (name) => {
        this.cast.push(name)
    }

    addToCollection = (collection) => {
        this.boxOfficeCollection += collection;
    }
}

const favourite = new Movie('Good Will Hunting', 1997);
favourite.addToCast('Robin Williams');
favourite.addToCast('Matt Damon');
favourite.addToCollection(225000000);
// console.log(favourite);

const best = new Movie('The Prestige', 2006);
favourite.addToCast('Christian Bale');
favourite.addToCast('Hugh Jacknam');
favourite.addToCollection(1070000000);
// console.log(best);

// EX-38b
class SequalMovie extends Movie {
    constructor(name, yearOfRelease) {
        super(name, yearOfRelease);
        this.earlierMovies = [];
    }

    addEarlierMovies (movie) {
        this.earlierMovies.push(movie);
    }

    getLifetimeEarnings () {
        let lifeTimeEarnings = this.boxOfficeCollection;;
        this.earlierMovies.forEach(movie => {
            lifeTimeEarnings += movie.boxOfficeCollection;
        });
        return lifeTimeEarnings;
    }
}

const theGodfather = new Movie('The Godfather', 1972);
theGodfather.addToCast('Al Pacino');
theGodfather.addToCast('Marlon Brando');
theGodfather.addToCollection(1070000000);

const theGodfather2 = new Movie('The Godfather Part II', 1974);
theGodfather2.addToCast('Al Pacino');
theGodfather2.addToCast('Marlon Brando');
theGodfather2.addToCollection(1070000000);

const theGodfather3 = new SequalMovie('The Godfather Part III', 1990);
theGodfather3.addToCast('Al Pacino');
theGodfather3.addToCast('Marlon Brando');
theGodfather3.addToCollection(1070000000);
theGodfather3.addEarlierMovies(theGodfather);
theGodfather3.addEarlierMovies(theGodfather2);
// console.log(theGodfather3.getLifetimeEarnings());

// Ex-39
class Project {
    constructor(id, name, client) {
        this.id = id;
        this.name = name;
        this.client = client;
    }
}

// EX-40
class Employee {
    constructor(id, name, role, department, projects) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.department = department;
        this.projects = projects;
    }
}

const dbsPayroll = new Project( 1001, 'DBS Payroll', 'DBS');
const intranetDeployment = new Project( 2001, 'Intranet v2 deployment', 'Internal');
const john = new Employee(1, 'John', 'Web Developer', 'IT', [ dbsPayroll, intranetDeployment ]);
console.log(john);

// EX-23

const numbers = [ 5, 11, 13, 7, 2, 31, 3, 19, 23, 17, 29 ];
numbers.sort((a, b) => a - b);
numbers.sort((a, b) => b - a);
numbers.push(37);
numbers.pop();
numbers.pop();
console.log(numbers.indexOf(23));
console.log(numbers.indexOf(41));

// EX-26
const days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
const noOfLetters = []
days.forEach(day => {
    console.log(day);
    noOfLetters.push(day.length);
});
console.log(noOfLetters);
const newDays = days.filter((day) => day.charCodeAt(0) >= 83 && day.charCodeAt(0) <= 90);
console.log(newDays);
const sixLetterDays = days.filter(day => day.length === 6);
console.log(sixLetterDays);
