// Tableau de rôles avec le nombre de chaque rôle
const roles = [
    { name: "Loup-garou", count: 1 },
    { name: "Villageois", count: 1 },
    { name: "sorciere", count: 1 },
    { name: "voyante", count: 1 },
    // Ajoutez d'autres rôles selon vos besoins
];

// Tableau pour conserver les joueurs et leurs rôles assignés
let playerRoles = [];

function revealRole() {
    const playerName = document.getElementById("playerName").value;

    // Choix aléatoire d'un rôle disponible
    const availableRoles = roles.filter(role => role.count > 0);

    if (availableRoles.length === 0) {
        alert("Tous les roles sont deja attribué attendez la prochaine partie ou recommencez une nouvelle");
        return;
    }

    const randomIndex = Math.floor(Math.random() * availableRoles.length);
    const role = availableRoles[randomIndex].name;

    // Réduction du nombre de ce rôle disponible
    const chosenRoleIndex = roles.findIndex(r => r.name === role);
    roles[chosenRoleIndex].count--;

    // Affichage du rôle assigné au joueur
    const roleDisplay = document.getElementById("roleDisplay");
    roleDisplay.innerHTML = `<p>${playerName}, your role is: <strong>${role}</strong></p>`;

    // Ajout du joueur à la liste avec son rôle
    playerRoles.push({ name: playerName, role: role });
}



function seenRole() {
    // Suppression du rôle et du nom du joueur précédent de l'écran
    const roleDisplay = document.getElementById("roleDisplay");
    const playerNameInput = document.getElementById("playerName");

    if (roleDisplay.innerHTML !== "") {
        roleDisplay.innerHTML = "";
    }
    
    playerNameInput.value = "";
}



function startGame() {
    // Affichage de la liste des joueurs avec leurs rôles
    const playerList = document.getElementById("players");
    playerList.innerHTML = "";
    playerRoles.forEach(player => {
        const listItem = document.createElement("li");
        listItem.textContent = `${player.name}: ${player.role}`;
        playerList.appendChild(listItem);
    });
    document.getElementById("playerList").style.display = "block";
}
