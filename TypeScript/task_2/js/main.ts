// task_1/js/main.ts

// Définir l'interface Teacher
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: unknown;
}

// Définir l'interface Directors qui étend Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Définir l'interface pour la fonction printTeacher
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implémenter la fonction printTeacher
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Définir l'interface pour le constructeur de StudentClass
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Définir l'interface pour StudentClass
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implémenter la classe StudentClass
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Définir l'interface DirectorInterface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Définir l'interface TeacherInterface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Implémenter la classe Director
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Implémenter la classe Teacher
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Fonction createEmployee
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Exemple d'utilisation de l'interface Teacher
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
  workFromHome(): string {
    return "Cannot work from home";
  },
  getCoffeeBreak(): string {
    return "Cannot have a break";
  },
  workTeacherTasks(): string {
    return "Getting to work";
  }
};

console.log(teacher3);

// Exemple d'utilisation de l'interface Directors
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
  workFromHome(): string {
    return "Working from home";
  },
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  },
  workDirectorTasks(): string {
    return "Getting to director tasks";
  },
  workTeacherTasks(): string {
    return "Getting to work";
  }
};

console.log(director1);

// Exemple d'utilisation de la fonction printTeacher
console.log(printTeacher("John", "Doe")); // J. Doe

// Exemple d'utilisation de la classe StudentClass
const student = new StudentClass("Jane", "Smith");
console.log(student.displayName()); // Jane
console.log(student.workOnHomework()); // Currently working

// Exemple d'utilisation de la fonction createEmployee
console.log(createEmployee(200)); // Teacher
console.log(createEmployee(1000)); // Director
console.log(createEmployee('$500')); // Director