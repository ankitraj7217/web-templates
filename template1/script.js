const txt = document.querySelector(".home-content-role");

const differentRoles = () => {
    const roles = ["Software Engineer", "Otaku", "Traveller", "IR Enthusiast"];
    let index = 0;
    txt.textContent = roles[index];
    index += 1

    setInterval(() => {
        txt.textContent = roles[index];
        index = (index + 1) % roles.length; // Move to the next role, looping back to the beginning if needed
    }, 4000); // Change every 4 seconds (4000 milliseconds)
}

differentRoles();