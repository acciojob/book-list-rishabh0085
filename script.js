//your JS code here. If required.
document.getElementById('book-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get input values
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var isbn = document.getElementById('isbn').value;

    // Create a new row
    var row = document.createElement('tr');
    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="btn btn-danger delete">Delete</button></td>
    `;

    // Add row to the table
    document.getElementById('book-list').appendChild(row);

    // Clear form fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
});

// Delete row
document.getElementById('book-list').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove();
    }
});
