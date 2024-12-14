// Define the API URL
const apiUrl = "https://data.gov.bh/api/explore/v2.1/catalog/datasets/01-statistics-of-students-nationalities_updated/records?where=colleges%20like%20%22IT%22%20AND%20the_programs%20like%20%22bachelor%22&limit=100";

// Fetch the data and populate the table
async function fetchStudentData() {
    try {
        console.log('Fetching data from API...');
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Error occurred while fetching data.');
        }
        const data = await response.json();
        console.log('Data fetched:', data);
        const tbody = document.querySelector('#studentsTable tbody');

        // Check if records exist
        if (!data.records || data.records.length === 0) {
            console.error('No records found in the data.');
            return;
        }

        // Populate the table rows
        data.records.forEach(record => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${record.record.fields.year}</td>
                <td>${record.record.fields.semester}</td>
                <td>${record.record.fields.nationality}</td>
                <td>${record.record.fields.number_of_student}</td>
            `;
            tbody.appendChild(row);
        });
        
    } catch (error) {
        console.error('Error:', error.message);
        alert('An error occurred while fetching the data.');
    }
}

fetchStudentData();