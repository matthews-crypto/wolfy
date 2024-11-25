// Tableau de rôles avec le nombre de chaque rôle
const roles = [
    
    { name: "Villageois ", count: 1 },
    { name: "Sorciere ", count: 1 },
    { name: "Voyante ", count: 1 },
    { name: "Salvateur ", count: 1 },
    { name: "Chasseur ", count: 1 },
    { name: "Cupidon ", count: 1 },
    { name: "Petite Fille ", count: 1 },
    { name: "Fou ", count: 1 },
    { name: "Fils de la lune ", count: 1 },
    { name: "Idiot du village ", count: 1 },
    { name: "Loup-Blanc ", count: 1 },
    { name: "Loup-Garou ", count: 1 },
    { name: "Loup-Infect ", count: 1 },
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
        listItem.innerHTML = `${player.name}: ${player.role}`;
        
        // Création du bouton "Mort"
        const deadButton = document.createElement("button");
        deadButton.textContent = "Mort";
        deadButton.onclick = function() {
            markAsDead(listItem);
        };
        listItem.appendChild(deadButton);
        
        playerList.appendChild(listItem);
    });
    document.getElementById("playerList").style.display = "block";
}

function markAsDead(playerListItem) {
    // Marquer la ligne du joueur comme étant morte
    playerListItem.style.textDecoration = "line-through";
    playerListItem.style.color = "red";
}

//maj roles.
const rolesList = document.getElementById("rolesList");

// Fonction pour afficher les rôles et les boutons + et -
function displayRoles() {
    rolesList.innerHTML = "";
    roles.forEach(role => {
        const listItem = document.createElement("li");
        const addButton = document.createElement("button");
        addButton.textContent = "+";
        addButton.onclick = function() {
            role.count++;
            displayRoles(); // Met à jour l'affichage après l'ajout
        };
        const minusButton = document.createElement("button");
        minusButton.textContent = "-";
        minusButton.onclick = function() {
            if (role.count > 0) {
                role.count--;
                displayRoles(); // Met à jour l'affichage après la soustraction
            }
        };
        listItem.textContent = `${role.name}: ${role.count}`;
        listItem.appendChild(addButton);
        listItem.appendChild(minusButton);
        rolesList.appendChild(listItem);
    });
}

// Appel de la fonction pour afficher les rôles au chargement de la page
displayRoles();

// Gestionnaire d'événements pour le formulaire
document.getElementById("rolesForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Roles updated successfully!");
});
