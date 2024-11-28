document.addEventListener("DOMContentLoaded", function () {
    fetch('../../navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;

            // Re-initialize Bootstrap dropdowns
            const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
            dropdownElementList.forEach(function (dropdownToggleEl) {
                dropdownToggleEl.addEventListener('click', function (event) {
                    const parentDropdown = dropdownToggleEl.closest('.dropdown');
                    const dropdownMenu = parentDropdown.querySelector('.dropdown-menu');

                    // Toggle the dropdown menu
                    const isExpanded = parentDropdown.classList.contains('show');
                    if (isExpanded) {
                        parentDropdown.classList.remove('show');
                        dropdownMenu.classList.remove('show');
                    } else {
                        // Close other dropdowns
                        document.querySelectorAll('.dropdown').forEach(drop => {
                            drop.classList.remove('show');
                            const menu = drop.querySelector('.dropdown-menu');
                            if (menu) menu.classList.remove('show');
                        });

                        // Open the clicked dropdown
                        parentDropdown.classList.add('show');
                        dropdownMenu.classList.add('show');
                    }
                    event.stopPropagation(); // Stop click from propagating
                });
            });

            // Close dropdowns when clicking outside
            document.addEventListener('click', function (event) {
                document.querySelectorAll('.dropdown.show').forEach(function (dropdown) {
                    if (!dropdown.contains(event.target)) {
                        dropdown.classList.remove('show');
                        dropdown.querySelector('.dropdown-menu').classList.remove('show');
                    }
                });
            });
        });
});
