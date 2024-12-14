// Define the API URL
const apiUrl = "https://data.gov.bh/api/explore/v2.1/catalog/datasets/01-statistics-of-students-nationalities_updated/records?where=colleges%20like%20%22IT%22%20AND%20the_programs%20like%20%22bachelor%22&limit=100";

// Fetch the data and populate the table
async function fetchStudentData() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Error occurred while fetching data.');
        }
        const data = await response.json();
        const tbody = document.getElementById('StudentData');

        // Populate the table rows
        data.results.forEach(record => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${record.year}</td>
                <td>${record.semester}</td>
                <td>${record.nationality}</td>
                <td>${record.number_of_students}</td>
            `;
            tbody.appendChild(row);
        });
        
    } catch (error) {
        console.error(error.message);
        alert('An error occurred while fetching the data.');
    }
}

fetchStudentData();