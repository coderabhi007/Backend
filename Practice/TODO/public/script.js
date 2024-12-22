const selectElement = document.getElementById('status');
    const form = document.getElementById('statusForm');

    // Add an event listener to the select element
    selectElement.addEventListener('change', () => {
      // Submit the form automatically
      form.submit();
    });