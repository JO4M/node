//1 . creation de server 
const http = require('http'); //importation du module http
http.createServer((req, res) => {       //création du serveur
    res.writeHead(200, {'content-Type':'text/html'});//envoie de l'entête http
    res.end('<h1>Bonjour Node!!!</h1>\n');//envoie de la réponse
});
Server.liten(3000, () => { //le serveur écoute sur le port 3000
    console.log('Server en cours d\'exécution sur le port 3000');//affichage du message
});

// 2 Programme de lectute de fichier texte et affichage de son contenu
const fs = require('fs');

// Step 1: Creation de  "welcome.txt"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('File created successfully.');

    // Step 2: lecture de "welcome.txt"
    fs.readFile('welcome.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('File content:', data);
    });
});

// 4 programme de génération de mot de passe
// Importation du module "generate-password" aprés l'installation npm install generate-password
const generatePassword = require('generate-password');

// Fonction pour générer un mot de passe aléatoire
function generateRandomPassword() {
    const password = generatePassword.generate({
        length: 12,  // Longueur du mot de passe
        numbers: true,  // Inclure des chiffres
        symbols: true,  // Inclure des symboles spéciaux
        uppercase: true, // Inclure des majuscules
        lowercase: true, // Inclure des minuscules
        strict: true // Assurer un bon mélange de caractères
    });

    console.log("Mot de passe généré :", password);
}

// Exécuter la fonction
generateRandomPassword();

// 5 Programme de mailsender
const nodemailer = require('nodemailer');

// a) Configuration du service d'email
const transporter = nodemailer.createTransport({
    service: 'gmail', // exemple: 'gmail' pour Gmail
    auth: {
        user: 'ton-email@gmail.com',  // Remplacer l'adresse e-mail
        pass: 'ton-mot-de-passe'  // Utiliser son mot de passe 
    }
});

// b) Définir les options de l'email
const mailOptions = {
    from: 'ton-email@gmail.com',
    to: 'destinataire@example.com',  // Remplace par l'adresse du destinataire
    subject: 'Test avec Nodemailer ✔',
    text: 'Hello, ceci est un e-mail envoyé avec Nodemailer ! 🎉'
};

// c) Envoyer l'email
transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
        console.error('Erreur lors de l\'envoi :', err);
    } else {
        console.log('E-mail envoyé avec succès !', info.response);
    }
});

