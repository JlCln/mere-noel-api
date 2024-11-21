import express from "express";
import cors from "cors";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "L'API de la Mère Noël",
      version: "1.0.0",
      description: "La doc de l'incroyable API de la Mère Noël ! 🤶🎄",
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  apis: ["./index.js"], // Path to the API docs
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const dailycards = [
  {
    id: 1,
    title: "Miam!",
    description: "Prépare un repas surprise pour un membre de ta famille.",
    theme: "famille",
  },
  {
    id: 2,
    title: "Intéressant...",
    description:
      "Partage un tutoriel ou une astuce de code avec un collègue ou en ligne.",
    theme: "code",
  },
  {
    id: 3,
    title: "Disponible",
    description:
      "Propose de garder les enfants ou l’animal d’un voisin en cas de besoin.",
    theme: "voisins",
  },
  {
    id: 4,
    title: "Respect & écoute",
    description: "Prends le temps d’écouter quelqu’un sans interrompre.",
    theme: "quotidien",
  },
  {
    id: 5,
    title: "Allez, on sort!",
    description: "Propose une promenade ou une activité extérieure en famille.",
    theme: "famille",
  },
  {
    id: 6,
    title: "💐",
    description: "Cueille et offre des fleurs de ton jardin à un voisin.",
    theme: "voisins",
  },
  {
    id: 7,
    title: "Intéressant...",
    description:
      "Publie une astuce sur ton réseau social préféré pour aider la communauté tech.",
    theme: "code",
  },
  {
    id: 8,
    title: "Soulagement",
    description: "Propose de porter les courses ou un colis à un voisin âgé.",
    theme: "voisins",
  },
  {
    id: 9,
    title: "De l'ordre!",
    description: "Aide un proche à trier ses papiers ou organiser son espace.",
    theme: "famille",
  },
  {
    id: 10,
    title: "Geste simple",
    description:
      "Offre un café ou une boisson chaude à quelqu’un dans le besoin.",
    theme: "quotidien",
  },
  {
    id: 11,
    title: "Bêta-test!",
    description: "Teste une fonctionnalité développée par un(e) autre.",
    theme: "code",
  },
  {
    id: 12,
    title: "C'est du propre!",
    description:
      "Fais la lessive ou range la vaisselle sans qu’on te le demande.",
    theme: "famille",
  },
  {
    id: 13,
    title: "Pause méritée",
    description:
      "Propose de garder les enfants pour offrir une pause aux parents.",
    theme: "voisins",
  },
  {
    id: 14,
    title: "On a le temps!",
    description: "Laisse passer une personne pressée dans une file d’attente.",
    theme: "quotidien",
  },
  {
    id: 15,
    title: "Encadrement",
    description:
      "Propose d’accompagner un(e) débutant(e) sur un projet simple.",
    theme: "code",
  },
  {
    id: 16,
    title: "Merci!",
    description:
      "Écris une lettre ou un mot de remerciement à un membre de ta famille.",
    theme: "famille",
  },
  {
    id: 17,
    title: "Petit mot doux",
    description:
      "Dépose une carte ou un petit mot dans la boîte aux lettres d’un voisin.",
    theme: "voisins",
  },
  {
    id: 18,
    title: "Surprise!",
    description: "Propose ton aide pour une tâche inattendue.",
    theme: "quotidien",
  },
  {
    id: 19,
    title: "Optimisation",
    description: "Relis et améliore le code d’un(e) camarade.",
    theme: "code",
  },
  {
    id: 20,
    title: "Place au jeu!",
    description: "Organise un jeu de société ou une activité en famille.",
    theme: "famille",
  },
  {
    id: 21,
    title: "Ressources partagées",
    description: "Partage un objet que tu utilises peu (outils, jeux, etc.).",
    theme: "voisins",
  },
  {
    id: 22,
    title: "Bon plan!",
    description:
      "Partage un tutoriel ou une astuce de code avec un collègue ou en ligne.",
    theme: "code",
  },
  {
    id: 23,
    title: "Même pas un Chocoblast!",
    description: "Apporte une collation pour tes collègues ou camarades.",
    theme: "quotidien",
  },
  {
    id: 24,
    title: "Magie de Noël",
    description: "Appelle un parent éloigné pour prendre de ses nouvelles.",
    theme: "famille",
  },
  {
    id: 25,
    title: "Quel beau cadeau!",
    description: "Partage un souvenir d’enfance pour raviver de bons moments.",
    theme: "famille",
  },
];

const famillecards = [
  {
    title: "Appelle un parent éloigné",
    description: "Prendre des nouvelles d'un parent éloigné.",
  },
  {
    title: "Aide à trier les papiers",
    description: "Aide un proche à trier ses papiers.",
  },
  {
    title: "Prépare un repas surprise",
    description: "Prépare un repas surprise pour un membre de ta famille.",
  },
  {
    title: "Propose ton aide",
    description: "Propose ton aide pour un projet ou une tâche familiale.",
  },
  {
    title: "Partage un souvenir",
    description: "Partage un souvenir d’enfance pour raviver de bons moments.",
  },
  {
    title: "Range une pièce",
    description: "Range une pièce ou un espace pour soulager un proche.",
  },
  {
    title: "Offre une matinée",
    description: "Offre une matinée ou soirée sans écrans en famille.",
  },
  {
    title: "Fais la lessive",
    description:
      "Fais la lessive ou range la vaisselle sans qu’on te le demande.",
  },
  {
    title: "Organise une soirée cinéma",
    description:
      "Organise une soirée cinéma maison avec un film préféré de la famille.",
  },
  {
    title: "Prépare un petit-déjeuner",
    description: "Prépare un petit-déjeuner surprise pour tout le monde.",
  },
  {
    title: "Organise un jeu de société",
    description: "Organise un jeu de société ou une activité en famille.",
  },
  {
    title: "Écris une lettre",
    description:
      "Écris une lettre ou un mot de remerciement à un membre de ta famille.",
  },
  {
    title: "Propose une promenade",
    description: "Propose une promenade ou une activité extérieure en famille.",
  },
];

const codecards = [
  {
    title: "Partage un tutoriel",
    description:
      "Partage un tutoriel ou une astuce de code avec un collègue ou en ligne.",
  },
  {
    title: "Relis et améliore",
    description: "Relis et améliore le code d’un(e) camarade.",
  },
  {
    title: "Réponds à une question",
    description:
      "Réponds à une question technique sur un forum ou une plateforme.",
  },
  {
    title: "Propose d’accompagner",
    description:
      "Propose d’accompagner un(e) débutant(e) sur un projet simple.",
  },
  {
    title: "Mets à jour",
    description: "Mets à jour la documentation d’un projet open-source.",
  },
  {
    title: "Offre 30 minutes",
    description:
      "Offre 30 minutes de mentoring à un(e) codeur(euse) moins expérimenté(e).",
  },
  {
    title: "Teste une fonctionnalité",
    description: "Teste une fonctionnalité développée par un(e) autre.",
  },
  {
    title: "Apprends une nouvelle tech",
    description: "Apprends une nouvelle technologie et partage un résumé.",
  },
  {
    title: "Propose une idée",
    description:
      "Propose une idée pour améliorer un processus de travail collectif.",
  },
  {
    title: "Organise une petite session",
    description:
      "Organise une petite session de code en binôme avec un(e) ami(e).",
  },
  {
    title: "Publie une astuce",
    description:
      "Publie une astuce sur ton réseau social préféré pour aider la communauté tech.",
  },
  {
    title: "Partage un article",
    description: "Partage un article ou une ressource de programmation utile.",
  },
  {
    title: "Aide un(e) collègue",
    description:
      "Aide un(e) collègue/camarade en train de coder à résoudre un bug.",
  },
];

const voisinscards = [
  {
    title: "Propose de porter",
    description: "Propose de porter les courses ou un colis à un voisin âgé.",
  },
  {
    title: "Partage une part",
    description: "Partage une part de gâteau ou un plat avec un voisin.",
  },
  {
    title: "Écris un petit mot",
    description: "Écris un petit mot de bienvenue à un nouvel arrivant.",
  },
  {
    title: "Aide un voisin",
    description: "Aide un voisin à jardiner, bricoler, etc.",
  },
  {
    title: "Porte les courses",
    description: "Propose de porter les courses à un voisin âgé.",
  },
  {
    title: "Offre un service",
    description:
      "Offre un service, comme arroser les plantes ou sortir les poubelles.",
  },
  {
    title: "Crée une boîte à livres",
    description: "Crée une boîte à livres commune dans ton voisinage.",
  },
  {
    title: "Organise un café",
    description: "Organise un café ou une petite réunion entre voisins.",
  },
  {
    title: "Partage un objet",
    description: "Partage un objet que tu utilises peu (outils, jeux, etc.).",
  },
];

const quotidiencards = [
  {
    title: "Tiens la porte",
    description: "Tiens la porte ou aide quelqu’un avec ses affaires lourdes.",
  },
  {
    title: "Offre un café",
    description:
      "Offre un café ou une boisson chaude à quelqu’un dans le besoin.",
  },
  {
    title: "Remercie sincèrement",
    description: "Remercie sincèrement un agent de service.",
  },
  {
    title: "Laisse passer",
    description: "Laisse passer une personne pressée dans une file d’attente.",
  },
  {
    title: "Laisse un mot",
    description:
      "Laisse un mot d’encouragement dans un livre emprunté ou un endroit public.",
  },
  {
    title: "Mets de côté",
    description:
      "Mets de côté quelques vêtements pour les donner à une association.",
  },
  {
    title: "Paie un café",
    description: "Paie un café ou un repas en avance dans un café solidaire.",
  },
  {
    title: "Encourage une personne",
    description: "Encourage une personne dans ses efforts ou son travail.",
  },
  {
    title: "Nettoie un espace",
    description: "Nettoie un espace commun ou ramasse un déchet sur le chemin.",
  },
  {
    title: "Apporte une collation",
    description: "Apporte une collation pour tes collègues ou camarades.",
  },
  {
    title: "Prends le temps",
    description: "Prends le temps d’écouter quelqu’un sans interrompre.",
  },
];

/**
 * @swagger
 * /api/dailycards:
 *   get:
 *     summary: Renvoi la liste complète des dailycards
 *     responses:
 *       200:
 *         description: A list of dailycards
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   content:
 *                     type: string
 */
app.get("/api/dailycards", (req, res) => {
  res.json(dailycards);
});

/**
 * @swagger
 * /api/dailycards/{id}:
 *   get:
 *     summary: Renvoie une card spécifique en fonction de son ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the dailycard
 *     responses:
 *       200:
 *         description: A single dailycard
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 title:
 *                   type: string
 *                 content:
 *                   type: string
 *       404:
 *         description: Dailycard not found
 */
app.get("/api/dailycards/:id", (req, res) => {
  const id = Number.parseInt(req.params.id);
  const dailycard = dailycards.find((card) => card.id === id);
  if (dailycard) {
    res.json(dailycard);
  } else {
    res.status(404).send("Dailycard not found");
  }
});

/**
 * @swagger
 * /api/famille:
 *   get:
 *     summary: Renvoie la liste complète des cards du thème famille
 *     responses:
 *       200:
 *         description: A list of familleCards
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 */
app.get("/api/famille", (req, res) => {
  res.json(famillecards);
});

/**
 * @swagger
 * /api/code:
 *   get:
 *     summary: Renvoie la liste complète des cards du thème code
 *     responses:
 *       200:
 *         description: A list of codeCards
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 */
app.get("/api/code", (req, res) => {
  res.json(codecards);
});

/**
 * @swagger
 * /api/voisins:
 *   get:
 *     summary: Renvoie la liste complète des cards du thème voisins
 *     responses:
 *       200:
 *         description: A list of voisinsCards
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 */
app.get("/api/voisins", (req, res) => {
  res.json(voisinscards);
});

/**
 * @swagger
 * /api/quotidien:
 *   get:
 *     summary: Renvoie la liste complète des cards du thème quotidien
 *     responses:
 *       200:
 *         description: A list of quotidienCards
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 */
app.get("/api/quotidien", (req, res) => {
  res.json(quotidiencards);
});

const getRandomElement = (array) =>
  array[Math.floor(Math.random() * array.length)];

/**
 * @swagger
 * /api/famille/random:
 *   get:
 *     summary: Renvoie une card aléatoire du thème famille
 *     responses:
 *       200:
 *         description: A random familleCard
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 */
app.get("/api/famille/random", (req, res) => {
  res.json(getRandomElement(famillecards));
});

/**
 * @swagger
 * /api/code/random:
 *   get:
 *     summary: Renvoie une card aléatoire du thème code
 *     responses:
 *       200:
 *         description: A random codeCard
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 */
app.get("/api/code/random", (req, res) => {
  res.json(getRandomElement(codecards));
});

/**
 * @swagger
 * /api/voisins/random:
 *   get:
 *     summary: Renvoi une card aléatoire du thème voisins
 *     responses:
 *       200:
 *         description: A random voisinsCard
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 */
app.get("/api/voisins/random", (req, res) => {
  res.json(getRandomElement(voisinscards));
});

/**
 * @swagger
 * /api/quotidien/random:
 *   get:
 *     summary: Renvoie une card aléatoire du thème quotidien
 *     responses:
 *       200:
 *         description: A random quotidienCard
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 */
app.get("/api/quotidien/random", (req, res) => {
  res.json(getRandomElement(quotidiencards));
});

app.get("/", (req, res) => {
  res.send(
    `Bienvenue sur l'API de l'incroyable Mère Noël ! 🤶🎄 N'hésitez pas à consulter la doc sur /api-docs/`
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
