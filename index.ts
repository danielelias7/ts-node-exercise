// Author: Daniel Bonilla
// Date: September 12, 2023
// Purpose: Add date to objects and display active records sorted by favorite movie.

// Define the type for a person's data
interface Person {
  Name: string;
  'Favorite Food': string;
  'Favorite Movie': string;
  Status: 'Active' | 'Inactive';
  Date?: string; // Optional property for the date
}

// People's data
const people: Person[] = [
  { Name: 'Rocky', 'Favorite Food': 'Sushi', 'Favorite Movie': 'Back to The Future', Status: 'Inactive' },
  { Name: 'Miroslav', 'Favorite Food': 'Sushi', 'Favorite Movie': 'American Psycho', Status: 'Active' },
  { Name: 'Donny', 'Favorite Food': 'Singapore chow mei fun', 'Favorite Movie': 'The Princess Bride', Status: 'Inactive' },
  { Name: 'Matt', 'Favorite Food': 'Brisket Tacos', 'Favorite Movie': 'The Princess Bride', Status: 'Active' },
  { Name: 'Daniel', 'Favorite Food': 'Fish', 'Favorite Movie': 'Gladiator', Status: 'Active' }
];

// Add the current date to each object
const currentDate: string = new Date().toLocaleDateString();
const peopleWithDate: Person[] = people.map(person => ({ ...person, Date: currentDate }));

// Filter and sort active records by favorite movie
const sortedActiveRecords: Person[] = peopleWithDate
  .filter(person => person.Status === 'Active')
  .sort((a, b) => a['Favorite Movie'].localeCompare(b['Favorite Movie']));

// Display results
if (sortedActiveRecords.length > 0) {
  sortedActiveRecords.forEach(person => {
    console.log(`Name: ${person.Name}, Date: ${person.Date}, Favorite Movie: ${person['Favorite Movie']}`);
  });
} else {
  console.log('No active records found.');
}
