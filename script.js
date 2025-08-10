document.getElementById('getList').addEventListener('click', function() {
      // Replace this URL with your actual API endpoint
      fetch('https://exercisedb-api.vercel.app/api/v1/bodyparts/chest/exercises')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); // or response.text() if it's plain text
        })
        .then(data => {
          console.log(data); // For debugging
          document.getElementById('result').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
          console.error('Fetch error:', error);
          document.getElementById('result').innerText = 'Error fetching data.';
        });
    });

document.getElementById('generate-button').addEventListener('click', function() {
    let checkboxes = document.querySelectorAll('.part:checked');
    let output = [];
    checkboxes.forEach((checkbox) => {
        output.push(checkbox.value);
    });
    console.log(output);
});