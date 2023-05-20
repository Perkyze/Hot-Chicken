const app = () => {
  return {
    // MENU
    isMenuVisible: true,
    isGameVisible: false,

    isEchapVisible: false,
    isOptionShown: false,
    isOptionButtonShown: false,
    isProposShown: false,
    isProposButtonShown: false,
    isTutoShown: false,
    isTutoButtonShown: false,
    isVoteShown: false,
    isMinimapVisible: true,

    isVideoVisible: true,

    dialogue4Fait: false,
    dialogue3Fait: false,
    dialogue2Fait: false,

    firstMenu: true,

    playButtonText: "Jouer",
    titleText: "Hot Chicken",

    //GAME
    isVagon4Visible: true,
    isVagon3Visible: false,
    isVagon2Visible: false,
    isVagon1Visible: false,

    isVagon4PersonnageVisible: true,
    isVagon3PersonnageVisible: false,
    isVagon2PersonnageVisible: false,

    isDialogueVisible: false,
    dialogueText: "placeholder",

    isVagonFini: false,

    isVoterBtnVisible: false,
    isCheckVisible: false,
    isXVisible: false,

    isFluffyVisible: false,
    isIsagiVisible: false,
    is50YenVisible: false,

    suspectImage: "images/personnages/Chicken D. Fluffy no hat.webp",

    suspect1: "",
    suspect2: "",
    suspect3: "",
    suspect4: "",

    suspect1Nom: "",
    suspect2Nom: "",
    suspect3Nom: "",
    suspect4Nom: "",

    dialogue1Journal: "",
    dialogue2Journal: "",
    dialogue3Journal: "",
    dialogue4Journal: "",

    suspect1True: false,
    suspect2True: false,
    suspect3True: false,
    suspect4True: false,

    suspect6True: false,
    suspect7True: false,
    suspect8True: false,
    suspect9True: false,

    suspect11True: false,
    suspect12True: false,
    suspect13True: false,
    suspect14True: false,

    isJournalVisible: false,
    isJournalBtnVisible: false,
    journalBtnText: "Journal de Bord",

    minimap: "images/minimapVagon4.webp",

    currentVagon: 4,

    backgroundMenu: "images/4.webp",

    currentDialogue: [],
    dialoguePosition: 0,

    buttonText: "suivant",

    audioSource: "audio/menu.mp3",
    volume: 100,

    vagon2transition:false,
    vagon3transition:false,
    vagon4transition:false,

    listDialogue: [
      [
        //Puigi
        "Pablo: Aurais-tu vu le chapeau de Monkey D. Fluffy?",
        "Puigi : Non je ne l’ai pas vu. Lorsque je suis arrivé à mon siège, il avait probablement déjà disparu.",
        "Pablo : D’accord merci beaucoup.",
      ],
      [
        //Chickio
        "Pablo: Aurais-tu vu le chapeau de Monkey D. Fluffy?",
        "Chickio : Oui c’est Arthur Nuggies qui l’a pris. Je l’ai vu!",
        "Pablo : Es-tu sûr?",
        "Chickio : À 110%!",
        "Pablo : D’accord merci beaucoup.",
      ],
      [
        //Chuck McChicken
        "Pablo: Aurais-tu vu le chapeau de Monkey D. Fluffy?",
        "Chuck McChicken : Non il était sur son siège.",
        "Pablo : Non quelqu’un la pris lorsqu’il avait le dos tourné...",
        "Chuck McChicken : Si je vois le voleur je te tien au courant.",
        "Pablo : D’accord merci beaucoup.",
      ],
      [
        //Arthur Nuggies
        "Pablo: Aurais-tu vu le chapeau de Monkey D. Fluffy?",
        "Arthur Nuggies : Non il était sur son siège.",
        "Pablo : J’ai entendu dire que tu l’aurais volé...",
        "Arthur Nuggies : Non ce n’est pas moi promis. J’ai pris le chapeau pour l’essayer mais je l’ai remis à sa place. Si je peux vous aider, depuis tantôt, Chuck McChicken fixe le chapeau c’est bizarre.",
        "Pablo : D’accord merci beaucoup.",
      ],
      [
        //Chicken D. Fluffy
        "Fluffy: Vous avez retrouver mon chapeau?",
        "Pablo: Non pas encore mais ne t'inquiète pas, je vais le retrouver.",
        "Fluffy: D'accord! Merci beaucoup!",
      ],
      [
        //Old Chick
        "Pablo: Aurais-tu vu le ballon de Isagi Yoichick? ",
        "Old Chick : Non mais je l’ai vu joué au ballon dans le train. L’aurait-il perdu?",
        "Pablo : Non, il dit avoir laissé son ballon sur son siège et il s’est fait voler.",
        "Old Chick : Oh non... J’espère qu’il va le retrouver.",
        "Pablo : Merci beaucoup monsieur!",
      ],
      [
        //Chad Rooster
        "Pablo: Aurais-tu vu le ballon de Isagi Yoichick? Il l'a perdu.",
        "Chad Rooster : Ce petit garnement... Une chance qu’il ait perdu son ballon, j’essaye de dormir et il n’arrêtait pas de faire du bruit.",
        "Pablo : Mais as-tu vu son ballon quelque part?",
        "Chad Rooster : Non aucune idée",
        "Pablo : D’accord merci beaucoup.",
      ],
      [
        //Master Wu Chick
        "Pablo: Aurais-tu vu le ballon de Isagi Yoichick? ",
        "Master Wu Chick : ...La haine est un bien mauvais comportement... ",
        "Pablo : Qu’est-ce que ça veut dire? ",
        "Master Wu Chick : ...La colère mène souvent à l’explosion d’un volcan... ",
        "Pablo : Monsieur? Ça va? ",
        "Master Wu Chick : ...L’impatience révèle la vraie personne qui se cache en vous... ",
        "Pablo : Ok. Je pense que je vais aller voir ailleurs... ",
      ],
      [
        //Dexter Chickley
        "Pablo: Aurais-tu vu le ballon de Isagi Yoichick? ",
        "Dexter Chickley : Non.",
        "Pablo : Ah. D’accord désolé ",
        "Dexter Chickley : Ok.",
        "Pablo : ...",
      ],
      [
        //Isagi Yoichick
        "Isagi Yoichick: Tu as mon ballon?",
        "Pablo : Non, mais je pense savoir où le trouver",
        "Isagi Yoichick : D’accord! Merci beaucoup!",
      ],
      [
        //Michael Chickson
        "Pablo: Aurais-tu vu la chaine de 50 Yens?",
        "Micheal Chickson : Il avait une chaine? J'en avait aucune idée.",
        "Pablo : Tout le monde sait que 50 Yens à une chaine.",
        "Micheal Chickson : Pas moi. Je ne l’ai jamais vu. ",
        "Pablo : D’accord merci.",
      ],
      [
        //Playboi Chiky
        "Pablo: Aurais-tu vu la chaine de 50 Yens? ",
        "Playboy Chiky: “🎝Hey Pierre! Wanna come out here?🎝”, “🎝Wake up Ch1cky🎝” ",
        "Pablo : Désolé. Monsieur? ",
        "Playboy Chiky : “🎝I ain't even hop in the coupe, Yeah,  your chick gon' star at the clique, Yeah🎝”",
        "Pablo : Uhmm, ok je vais y aller.",
      ],
      [
        //Lil Johnny
        "Pablo: Aurais-tu vu la chaine de 50 Yens?",
        "Lil Johnny : C’est Ice Spicy Wings!",
        "Pablo : Quoi? Sérieux!",
        "Lil Johnny : Peut-être... Je pense.",
        "Pablo : Hmm.. Je vois... Merci.",
      ],
      [
        //Chick Spice
        "Pablo: Aurais-tu vu la chaine de 50 Yens? ",
        "Ice Spicy Wings : C'est Lil Johnny! ",
        "Pablo : Quoi? Sérieux!",
        "Ice Spicy Wings : Probablement... Aucune idée.",
        "Pablo : Hmm.. D’accord... Merci.",
      ],
      [
        //50 Yen
        "50 Yens : T'as trouvé ma chaine?",
        "Pablo : Non, pas encore mais j’ai une piste.",
        "50 Yens: T’inquiète mon pote. Je te fais confiance.",
        "Pablo: D’accord. Merci.",
      ],
      [
        //Dialogue début
        "Pablo: Il est bientôt midi. Je commence à avoir faim… ",
        "Pablo: Ah! J’avais presque oublié! Ma femme m’avais fait un sandwich ce matin, mais il est dans la cabine du conducteur. ",
        "Pablo: Je dois m’y rendre le plus vite possible.",
        "Fluffy: Désolé monsieur! Pouvez-vous m’aider?",
        "Pablo: Oui mon garçon! Qu’y a-t-il?",
        "Fluffy: Quelqu’un a volé mon chapeau! Je l’avais laissé sur mon banc et quand je suis revenu, il n’était plus là. Peux-tu m’aider à le retrouver?",
        "Pablo: Bien-sûr! Attend un instant je vais le retrouver.",
      ],
      [
        //Dialogue intro vagon 3
        "Pablo: Fini les vols de chapeaux, c’est l’heure du lunch!",
        "Isagi Yoichick: Bonjour monsieur!",
        "Pablo : Oui? Que se passe-t-il? ",
        "Isagi Yoichick : Quelqu’un m’a volé mon ballon. Il a disparu! Peux-tu le retrouver?",
        "Pablo : Oui je vais t’aider à le retrouver.",
      ],
      [
        //Dialogue intro vagon 2
        "Pablo : Wow! C’est agité aujourd’hui. Il ne reste plus qu’un wagon. J’espère qu’il n’y aura pas d’autres problèmes sinon...",
        "50 Yens: Hey monsieur!",
        "Pablo: Oui?",
        "50 Yens: J’ai besoin de ton aide monsieur. On m’a volé ma chaine",
      ],
    ],

    menuVisible() {
      this.isMenuVisible = !this.isMenuVisible;
    },

    toggleOption(state) {
      this.isOptionShown = state;
      this.isOptionButtonShown = !this.isOptionButtonShown;
      this.menuVisible();
    },
    togglePropos(state) {
      this.isProposShown = state;
      this.isProposButtonShown = !this.isProposButtonShown;
      this.menuVisible();
    },
    toggleTuto(state) {
      this.isTutoShown = state;
      this.isTutoButtonShown = !this.isTutoButtonShown;
      this.menuVisible();
    },
    toggleJeu() {
      this.firstMenu = false;
      this.isGameVisible = !this.isGameVisible;
      this.isMenuVisible = !this.isMenuVisible;
      this.isEchapVisible = this.isGameVisible;
      this.isVideoVisible = false;
      

      if (this.dialogue4Fait == false) {
        this.audioSource = "audio/wagon1.mp3";
        this.isVagon4PersonnageVisible = false;
        this.isDialogueVisible = true;
        this.dialogueText = this.listDialogue[15][0];
        this.currentDialogue = this.listDialogue[15];
        this.dialoguePosition = 0;
        this.dialogue4Fait = true;
      }

      if (!this.isGameVisible) {
        this.playButtonText = "Reprendre";
        this.titleText = "Pause";
        if (this.currentVagon == 4) {
          this.backgroundMenu = "images/4.webp";
        }
        if (this.currentVagon == 3) {
          this.backgroundMenu = "images/3.webp";
        }
        if (this.currentVagon == 2) {
          this.backgroundMenu = "images/2.webp";
        }
        if (this.currentVagon == 1) {
          this.backgroundMenu = "images/1.webp";
        }
      }
    },

    delay(time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    },

    playVid() {
      vid.play();
    },

    vagon3(){
      document.getElementById("video").style.display = "none";
      this.isVagon4Visible = false;
      this.isVagon3Visible = true;
      this.audioSource = "audio/wagon2.mp3";

      //Afficher dialogue quand tu arrive
      if (this.dialogue3Fait == false) {
        this.isVagon3PersonnageVisible = false;
        this.suspectImage = "images/personnages/Isagi Yoichick.webp";
        this.isDialogueVisible = true;
        this.dialogueText = this.listDialogue[16][0];
        this.currentDialogue = this.listDialogue[16];
        this.dialoguePosition = 0;
        this.dialogue3Fait = true;
      }
      vagon4transition = true;
    },
    vagon2(){
      document.getElementById("video2").style.display = "none";
      this.isVagon3Visible = false;
      this.isVagon2Visible = true;
      this.audioSource = "audio/wagon3.mp3";

      //Afficher dialogue quand tu arrive
      if (this.dialogue2Fait == false) {
        this.isVagon2PersonnageVisible = false;
        this.suspectImage = "images/personnages/50 Yen no chain.webp";
        this.isDialogueVisible = true;
        this.dialogueText = this.listDialogue[17][0];
        this.currentDialogue = this.listDialogue[17];
        this.dialoguePosition = 0;
        this.dialogue2Fait = true;
      }
      vagon3transition = true;
    },
    vagon1(){
      document.getElementById("video3").style.display = "none";
      this.isVagon2Visible = false;
      this.isVagon1Visible = true;
      this.audioSource = "audio/menu.mp3";
      vagon2transition = true;
    },
    changeVagon() {
      if (this.currentVagon == 4) {
        this.isCheckVisible = false;
        this.isFluffyVisible = false;

        document.getElementById("video").style.display = "block";
        document.getElementById("video").play();

        
        this.minimap = "images/minimapVagon3.webp";
        this.currentVagon--;
        this.suspect1True = false;
        this.suspect2True = false;
        this.suspect3True = false;
        this.suspect4True = false;
        //Enleve la video apres 2 seconde
         this.delay(5000).then(() => {
          if(this.vagon4transition == false){
          document.getElementById("video").style.display = "none";
          this.isVagon4Visible = false;
          this.isVagon3Visible = true;
          this.audioSource = "audio/wagon2.mp3";

          //Afficher dialogue quand tu arrive
          if (this.dialogue3Fait == false) {
            this.isVagon3PersonnageVisible = false;
            this.suspectImage = "images/personnages/Isagi Yoichick.webp";
            this.isDialogueVisible = true;
            this.dialogueText = this.listDialogue[16][0];
            this.currentDialogue = this.listDialogue[16];
            this.dialoguePosition = 0;
            this.dialogue3Fait = true;
          }
        }
        }); 
      } else if (this.currentVagon == 3) {
        this.isCheckVisible = false;
        this.isIsagiVisible = false;

        document.getElementById("video2").style.display = "block";
        document.getElementById("video2").play();

        
        this.minimap = "images/minimapVagon2.webp";
        this.currentVagon--;
        this.suspect1True = false;
        this.suspect2True = false;
        this.suspect3True = false;
        this.suspect4True = false;
         this.delay(5000).then(() => {
          if(this.vagon3transition == false){
          document.getElementById("video2").style.display = "none";
          this.isVagon3Visible = false;
          this.isVagon2Visible = true;
          this.audioSource = "audio/wagon3.mp3";

          //Afficher dialogue quand tu arrive
          if (this.dialogue2Fait == false) {
            this.isVagon2PersonnageVisible = false;
            this.suspectImage = "images/personnages/50 Yen no chain.webp";
            this.isDialogueVisible = true;
            this.dialogueText = this.listDialogue[17][0];
            this.currentDialogue = this.listDialogue[17];
            this.dialoguePosition = 0;
            this.dialogue2Fait = true;
          }
        }
        }); 
      } else if (this.currentVagon == 2) {
        this.isCheckVisible = false;
        this.is50YenVisible = false;

        document.getElementById("video3").style.display = "block";
        document.getElementById("video3").play();

        
        this.minimap = "images/minimapVagon1.webp";
        this.currentVagon--;
        this.suspect1True = false;
        this.suspect2True = false;
        this.suspect3True = false;
        this.suspect4True = false;
         this.delay(5000).then(() => {
          if(this.vagon2transition == false){
          document.getElementById("video3").style.display = "none";
          this.isVagon2Visible = false;
          this.isVagon1Visible = true;
          this.audioSource = "audio/menu.mp3";
          }
        });
      } else if (this.currentVagon == 1) {
        this.isCheckVisible = false;
      }
    },

    toggleJournal() {
      if (this.isJournalVisible == true) {
        this.isJournalVisible = false;
        this.journalBtnText = "Journal de Bord";
      } else {
        this.isJournalVisible = true;
        this.journalBtnText = "Fermer";
      }
    },

    votePage() {
      this.isVoteShown = true;
      this.isVoterBtnVisible = false;
      this.isMinimapVisible = false;
      this.isJournalBtnVisible = true;
      this.dialogue1Journal = "";

      if (this.currentVagon == 4) {
        this.isVagon4PersonnageVisible = false;
        this.suspect1 = "images/personnages/Puigi.webp";
        this.suspect2 = "images/personnages/Chickio.webp";
        this.suspect3 = "images/personnages/Chuck McChicken.webp";
        this.suspect4 = "images/personnages/Arthur Nuggies.webp";
        this.suspect1Nom = "Chickio";
        this.suspect2Nom = "Puigi";
        this.suspect3Nom = "Chuck McChicken";
        this.suspect4Nom = "Arthur Nuggies";
        this.dialogue1Journal =
          "Puigi : Non je ne l’ai pas vu. Lorsque je suis arrivé à mon siège, il avait probablement déjà disparu.";
        this.dialogue2Journal =
          "Chickio : Oui c’est Arthur Nuggies qui l’a pris. Je l’ai vu!";
        this.dialogue3Journal =
          "Chuck McChicken : Non il était sur son siège. Si je vois le voleur je te tien au courant.";
        this.dialogue4Journal =
          "Arthur Nuggies : Non ce n’est pas moi promis. J’ai pris le chapeau pour l’essayer mais je l’ai remis à sa place. Si je peux vous aider, depuis tantôt, Chuck Nuggies fixe le chapeau c’est bizarre.";
      } else if (this.currentVagon == 3) {
        this.isVagon3PersonnageVisible = false;
        this.suspect1 = "images/personnages/Monocle.webp";
        this.suspect2 = "images/personnages/Chad Rooster.webp";
        this.suspect3 = "images/personnages/Master Wu Chick.webp";
        this.suspect4 = "images/personnages/Dexter Chickley.webp";
        this.suspect1Nom = "Old Chick";
        this.suspect2Nom = "Chad Rooster";
        this.suspect3Nom = "Master Wu Chick";
        this.suspect4Nom = "Dexter Chickley";
        this.dialogue1Journal = "Old Chick : Non mais j’espère qu’il va le retrouver.";
        this.dialogue2Journal = "Chad Rooster : Ce petit garnement... Une chance qu’il ait perdu son ballon, j’essaye de dormir et il n’arrêtait pas de faire du bruit.";
        this.dialogue3Journal = "Master Wu Chickson : ...L’impatience révèle la vraie personne qui se cache en vous...";
        this.dialogue4Journal = "Dexter Chickley : Non.";
      } else if (this.currentVagon == 2) {
        this.isVagon2PersonnageVisible = false;
        this.suspect1 = "images/personnages/Micheal Chickson.webp";
        this.suspect2 = "images/personnages/Playboy Chiky.webp";
        this.suspect3 = "images/personnages/Little Johnny.webp";
        this.suspect4 = "images/personnages/Chick Spice.webp";
        this.suspect1Nom = "Micheal Chickson";
        this.suspect2Nom = "Playboy Chiky";
        this.suspect3Nom = "Little Johnny";
        this.suspect4Nom = "Ice Spicy Wing ";
        this.dialogue1Journal = "Micheal Chickson : Il avait une chaine? J'en avait aucune idée. Je ne l’ai jamais vu.";
        this.dialogue2Journal = "Playboy Chiky : “🎝I ain't even hop in the coupe, Yeah,  your chick gon' star at the clique, Yeah🎝”";
        this.dialogue3Journal = "Little Jhonny : C’est Ice Spicy Wings! Probablement... Aucune idée.";
        this.dialogue4Journal = "Ice Spicy Wing : C'est Lil Johnny! Probablement... Aucune idée.";
      }
    },

    vote(voteId) {
      //code qui s'occupe du système de vote
      this.isVoteShown = false;
      this.isMinimapVisible = true;
      this.isVoterBtnVisible = true;
      this.isJournalBtnVisible = false;

      if (this.currentVagon == 4) {
        this.isVagon4PersonnageVisible = true;
        if (voteId == 3) {
          this.isVoterBtnVisible = false;

          this.isCheckVisible = true;

          this.isFluffyVisible = true;

          this.isVagon4PersonnageVisible = false;
          //Attend 2 seconde avant de chagner de vagon
          
          this.delay(2000).then(() => {
            this.changeVagon();
          });
        } else {
          this.isXVisible = true;
          this.isVoterBtnVisible = false;
          this.delay(1000).then(() => {
            this.isVoterBtnVisible = true;
            this.isXVisible = false;
          });
        }
      }
      if (this.currentVagon == 3) {
        this.isVagon3PersonnageVisible = true;

        if (voteId == 2) {
          this.isVoterBtnVisible = false;

          this.isCheckVisible = true;

          this.isIsagiVisible = true;

          this.isVagon3PersonnageVisible = false;

          this.delay(2000).then(() => {
            this.changeVagon();
          });
        } else {
          this.isXVisible = true;
          this.isVoterBtnVisible = false;
          this.delay(1000).then(() => {
            this.isVoterBtnVisible = true;
            this.isXVisible = false;
          });
        }
      }
      if (this.currentVagon == 2) {
        this.isVagon2PersonnageVisible = true;
        if (voteId == 1) {
          this.isVoterBtnVisible = false;

          this.isCheckVisible = true;

          this.is50YenVisible = true;

          this.isVagon2PersonnageVisible = false;

          this.delay(2000).then(() => {
            this.changeVagon();
          });
        } else {
          this.isXVisible = true;
          this.isVoterBtnVisible = false;
          this.delay(1000).then(() => {
            this.isVoterBtnVisible = true;
            this.isXVisible = false;
          });
        }
      }
    },

    dialogue(textId) {
      //Affiche le dialogue du personnage sur lequel tu a cliquer
      this.isDialogueVisible = true;
      this.isVoterBtnVisible = false;

      this.isVagon4PersonnageVisible = false;
      this.isVagon3PersonnageVisible = false;
      this.isVagon2PersonnageVisible = false;

      this.dialogueText = this.listDialogue[textId][0];
      this.currentDialogue = this.listDialogue[textId];
      this.dialoguePosition = 0;

      //Affiche l'image du personnage sur lequel tu a cliquer
      if (textId == 0) {
        this.suspectImage = "images/personnages/Puigi.webp";
        this.suspect1True = true;
      } else if (textId == 1) {
        this.suspectImage = "images/personnages/Chickio.webp";
        this.suspect2True = true;
      } else if (textId == 2) {
        this.suspectImage = "images/personnages/Chuck McChicken.webp";
        this.suspect3True = true;
      } else if (textId == 3) {
        this.suspectImage = "images/personnages/Arthur Nuggies.webp";
        this.suspect4True = true;
      } else if (textId == 4) {
        this.suspectImage = "images/personnages/Chicken D. Fluffy no hat.webp";
      } else if (textId == 5) {
        this.suspectImage = "images/personnages/Monocle.webp";
        this.suspect1True = true;
      } else if (textId == 6) {
        this.suspectImage = "images/personnages/Chad Rooster.webp";
        this.suspect2True = true;
      } else if (textId == 7) {
        this.suspectImage = "images/personnages/Master Wu Chick.webp";
        this.suspect3True = true;
      } else if (textId == 8) {
        this.suspectImage = "images/personnages/Dexter Chickley.webp";
        this.suspect4True = true;
      } else if (textId == 9) {
        this.suspectImage = "images/personnages/Isagi Yoichick.webp";
      } else if (textId == 10) {
        this.suspectImage = "images/personnages/Micheal Chickson.webp";
        this.suspect1True = true;
      } else if (textId == 11) {
        this.suspectImage = "images/personnages/Playboy Chiky.webp";
        this.suspect2True = true;
      } else if (textId == 12) {
        this.suspectImage = "images/personnages/Little Johnny.webp";
        this.suspect3True = true;
      } else if (textId == 13) {
        this.suspectImage = "images/personnages/Chick Spice.webp";
        this.suspect4True = true;
      } else if (textId == 14) {
        this.suspectImage = "images/personnages/50 Yen no chain.webp";
      }
    },

    scrollDialogue() {
      //Script pour défiler les dialogues
      this.dialoguePosition++;

      if (this.dialoguePosition >= this.currentDialogue.length) {
        this.closeDialogue();
      }
      this.dialogueText = this.currentDialogue[this.dialoguePosition];
      if (this.dialoguePosition == this.currentDialogue.length - 1) {
        this.buttonText = "Fermer";
      }
    },

    closeDialogue() {
      //regarde si tu as parler à tout les suspect et affiche le bouton pour voter
      this.isDialogueVisible = false;
      if (
        this.suspect1True == true &&
        this.suspect2True == true &&
        this.suspect3True == true &&
        this.suspect4True == true
      ) {
        this.isVoterBtnVisible = true;
      }
      this.isVagon4PersonnageVisible = true;
      this.isVagon3PersonnageVisible = true;
      this.isVagon2PersonnageVisible = true;
      this.buttonText = "Suivant";
    },
    videofin() {
      document.getElementById("video4").style.display = "block";
      document.getElementById("video4").play();
    },
    muteMusic() {
      if (document.getElementById("bgAudio").muted == false) {
        document.getElementById("bgAudio").muted = true;
      } else {
        document.getElementById("bgAudio").muted = false;
      }
    },
    startMusic() {
      this.audioSource = "audio/menu.mp3";
    },
    setVolume(value) {
      // Update the volume value
      this.volume = value;
      
      // Set the sound volume on the audio element
      const audio = document.getElementById('bgAudio');
      audio.volume = value / 100;
   },
  };
};
