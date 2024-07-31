document.querySelectorAll('.navbar a').forEach(navLink => {
    navLink.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('data-target');

        // Remove the active class from all content sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });

        // Add the active class to the target content section
        document.getElementById(targetId).classList.add('active');
    });
});

function denme(){

    

}
