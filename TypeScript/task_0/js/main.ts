// task_0/js/main.ts

// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create student variables
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};

// Store students in an array
const studentsList: Student[] = [student1, student2];

// Function to render the table
function renderTable() {
  const table = document.createElement('table');
  const headerRow = document.createElement('tr');
  const header1 = document.createElement('th');
  const header2 = document.createElement('th');

  header1.textContent = 'First Name';
  header2.textContent = 'Location';

  headerRow.appendChild(header1);
  headerRow.appendChild(header2);
  table.appendChild(headerRow);

  // Append rows for each student
  studentsList.forEach(student => {
      const row = document.createElement('tr');
      const cell1 = document.createElement('td');
      const cell2 = document.createElement('td');

      cell1.textContent = student.firstName;
      cell2.textContent = student.location;

      row.appendChild(cell1);
      row.appendChild(cell2);
      table.appendChild(row);
  });

  // Append the table to the body (or a specific container)
  document.body.appendChild(table);
}

// Call the function to render the table
renderTable();
