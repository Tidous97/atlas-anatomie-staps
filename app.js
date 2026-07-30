const STORAGE_KEY = "staps-anatomy-app-v2";

const chapters = [
  {
    id: "cm1",
    code: "CM1",
    title: "Généralités en anatomie fonctionnelle",
    description: "Révise le cours sous forme de flashcards à répétition espacée, de QCM chronométrés, d’un jeu d’association et de schémas à légender. Ta progression est sauvegardée automatiquement sur cet appareil.",
    cards: [
      { id: "cm1-card-1", front: "Quel est le rôle du système musculaire ?", back: "Il assure la mobilité, la posture et la production de chaleur." },
      { id: "cm1-card-2", front: "Quel os forme la partie supérieure du squelette axial ?", back: "Le crâne protège l’encéphale et soutient la face." },
      { id: "cm1-card-3", front: "Quel est le rôle du cartilage articulaire ?", back: "Il réduit la friction et absorbe les chocs entre les surfaces osseuses." },
      { id: "cm1-card-4", front: "Que signifie « proximal » ?", back: "Plus proche du tronc ou du point d’attache." },
      { id: "cm1-card-5", front: "Quel mouvement éloigne un membre du plan médian ?", back: "L’abduction." },
      { id: "cm1-card-6", front: "Quel est le principal rôle des vertèbres ?", back: "Elles protègent la moelle épinière et assurent la mobilité du rachis." },
      { id: "cm1-card-7", front: "Quelle est la position anatomique de référence ?", back: "Debout, regard à l’horizontale, pieds joints, orteils vers l’avant, bras le long du corps, paumes vers l’avant." },
      { id: "cm1-card-8", front: "Que signifient « homolatéral » et « controlatéral » ?", back: "Homolatéral : même côté que la référence. Controlatéral : côté opposé." },
      { id: "cm1-card-9", front: "Que signifient « superficiel » et « profond » ?", back: "Superficiel : proche de la surface du corps. Profond : éloigné de la surface." },
      { id: "cm1-card-10", front: "Quels sont les 3 modes de contraction musculaire ?", back: "Isométrique (longueur inchangée), excentrique (le muscle s’allonge) et concentrique (le muscle se raccourcit)." },
      { id: "cm1-card-11", front: "Quelle est la différence entre chaîne cinétique ouverte et fermée ?", back: "CCF : l’extrémité distale du membre est fixe (ex. squat). CCO : l’extrémité distale est mobile (ex. leg extension)." },
      { id: "cm1-card-12", front: "Qu’est-ce que la circumduction ?", back: "Une combinaison de mouvements dans les 3 plans (flexion/extension, abduction/adduction, rotations)." },
      { id: "cm1-card-13", front: "Quels sont les 3 types d’articulations selon leur mobilité ?", back: "Les synarthroses (fibreuses), les amphiarthroses (cartilagineuses) et les articulations synoviales." },
      { id: "cm1-card-14", front: "Qu’est-ce que le labrum ?", back: "Un cartilage fibreux en anneau qui améliore la congruence articulaire (ex. hanche, épaule)." },
      { id: "cm1-card-15", front: "Quels sont les 6 types d’articulations synoviales ?", back: "Sphéroïde, ellipsoïde, en selle, ginglyme, trochoïde et plane." },
      { id: "cm1-card-16", front: "Quelles sont les 3 grandes familles de muscles ?", back: "Le muscle cardiaque, les muscles lisses et les muscles squelettiques." },
      { id: "cm1-card-17", front: "Quelles sont les principales formes musculaires ?", back: "Circulaire, convergent, parallèle (fusiforme) et penné (uni/bi/multipenné)." },
      { id: "cm1-card-18", front: "Quel est le rôle de la synovie ?", back: "Assurer le glissement des surfaces articulaires et nourrir le cartilage articulaire." },
      { id: "cm1-card-19", front: "Qu’est-ce qu’un foramen osseux ?", back: "Un trou dans l’os laissant passer des nerfs et/ou des vaisseaux sanguins." },
      { id: "cm1-card-20", front: "Qu’est-ce qu’une aponévrose ?", back: "Une membrane fibreuse qui enveloppe ou prolonge un muscle pour le fixer." },
      { id: "cm1-card-21", front: "Anatomie (définition)", back: "Science qui étudie les structures du corps humain : leur situation, leur forme, leurs rapports, leurs fonctions et leurs particularités." },
      { id: "cm1-card-22", front: "Étymologie du mot « anatomie »", back: "Du grec teimnein, « couper » — origine liée à la dissection." },
      { id: "cm1-card-23", front: "Anatomie fonctionnelle", back: "Branche de l’anatomie qui étudie les relations entre structures anatomiques vouées à une même fonction au sein d’un appareil (ex. l’appareil locomoteur : os, articulations, muscles)." },
      { id: "cm1-card-24", front: "Position anatomique de référence", back: "Debout, regard à l’horizontale, pieds joints et orteils vers l’avant, bras le long du corps, paumes tournées vers l’avant, doigts étendus et réunis." },
      { id: "cm1-card-25", front: "Plan frontal (coronal)", back: "Plan vertical qui divise le corps en une partie antérieure et une partie postérieure." },
      { id: "cm1-card-26", front: "Plan sagittal", back: "Plan vertical, perpendiculaire au plan frontal, qui divise le corps en une partie droite et une partie gauche." },
      { id: "cm1-card-27", front: "Plan sagittal médian", back: "Plan sagittal qui divise le corps en deux parties égales, droite et gauche." },
      { id: "cm1-card-28", front: "Plan transversal (horizontal)", back: "Plan qui divise le corps en une partie supérieure et une partie inférieure." },
      { id: "cm1-card-29", front: "Axe vertical (longitudinal)", back: "Axe perpendiculaire au plan transversal ; l’axe médian du corps passe par le sommet du crâne et se projette en avant des chevilles." },
      { id: "cm1-card-30", front: "Axe médio-latéral (transversal)", back: "Axe qui coupe perpendiculairement le plan sagittal." },
      { id: "cm1-card-31", front: "Axe antéro-postérieur (sagittal)", back: "Axe qui coupe perpendiculairement le plan frontal." },
      { id: "cm1-card-32", front: "Antérieur (ventral)", back: "Élément situé en avant d’une structure de référence." },
      { id: "cm1-card-33", front: "Postérieur (dorsal)", back: "Élément situé en arrière d’une structure de référence." },
      { id: "cm1-card-34", front: "Médial (interne)", back: "Se dit d’un élément proche du plan sagittal médian." },
      { id: "cm1-card-35", front: "Latéral (externe)", back: "Se dit d’un élément qui s’éloigne du plan sagittal médian." },
      { id: "cm1-card-36", front: "Supérieur / Inférieur", back: "Supérieur : situé au-dessus d’un autre élément. Inférieur : situé en dessous d’un autre élément." },
      { id: "cm1-card-37", front: "Crânial / Caudal", back: "Termes parfois utilisés pour signifier respectivement supérieur (vers la tête) et inférieur." },
      { id: "cm1-card-38", front: "Proximal", back: "Terme réservé aux membres : élément plus proche de la racine du membre." },
      { id: "cm1-card-39", front: "Distal", back: "Terme réservé aux membres : élément plus éloigné de la racine du membre." },
      { id: "cm1-card-40", front: "Superficiel", back: "Élément anatomique situé proche de la surface du corps (ex. grand dorsal)." },
      { id: "cm1-card-41", front: "Profond", back: "Élément anatomique éloigné de la surface du corps (ex. érecteur du rachis)." },
      { id: "cm1-card-42", front: "Homolatéral", back: "Élément situé du même côté que celui qui sert de référence." },
      { id: "cm1-card-43", front: "Controlatéral", back: "Élément situé du côté opposé à celui qui sert de référence." },
      { id: "cm1-card-44", front: "Supra (sus) / Infra (sous)", back: "Supra : au-dessus de l’élément de référence. Infra : en dessous. Ex. muscles supra-épineux et infra-épineux." },
      { id: "cm1-card-45", front: "Mouvement actif", back: "Réalisé par le sujet grâce à des contractions musculaires volontaires, sans aucune aide extérieure." },
      { id: "cm1-card-46", front: "Mouvement passif", back: "Réalisé uniquement par l’action de forces ou d’aides externes, sans participation du sujet." },
      { id: "cm1-card-47", front: "Contraction isométrique", back: "Le muscle travaille sans changer de longueur ; la force musculaire générée est égale à la force de résistance externe." },
      { id: "cm1-card-48", front: "Contraction excentrique", back: "Le muscle travaille en s’allongeant ; force musculaire < force de résistance externe. Mode utilisé en amortissement/décélération." },
      { id: "cm1-card-49", front: "Contraction concentrique", back: "Le muscle se raccourcit, ses insertions se rapprochent ; force musculaire > force de résistance externe. Utilisé en propulsion/accélération." },
      { id: "cm1-card-50", front: "Chaîne cinétique fermée (CCF)", back: "L’extrémité distale du membre est fixe. Ex. le soulevé de terre." },
      { id: "cm1-card-51", front: "Chaîne cinétique ouverte (CCO)", back: "L’extrémité distale du membre est mobile. Ex. le leg extension." },
      { id: "cm1-card-52", front: "Flexion / Extension", back: "Autour de l’axe médio-latéral, dans le plan sagittal. Flexion : « ferme » l’articulation. Extension : « ouvre » l’articulation." },
      { id: "cm1-card-53", front: "Abduction / Adduction", back: "Autour d’un axe antéro-postérieur, dans le plan frontal. Abduction : écarte un segment du plan médian. Adduction : le rapproche." },
      { id: "cm1-card-54", front: "Rotation médiale / latérale", back: "Autour de l’axe vertical, dans le plan transversal. Latérale : amène la face antérieure du membre en dehors. Médiale : en dedans." },
      { id: "cm1-card-55", front: "Circumduction", back: "Combinaison des mouvements de flexion/extension, abduction/adduction et rotation dans les 3 plans." },
      { id: "cm1-card-56", front: "Nombre d’os du squelette", back: "206 os constants, plus un nombre variable d’os surnuméraires selon les individus." },
      { id: "cm1-card-57", front: "Rôle du squelette : charpente", back: "Les muscles et les ligaments se fixent sur les pièces osseuses pour permettre le mouvement." },
      { id: "cm1-card-58", front: "Rôle du squelette : protection", back: "Ex. le crâne et la colonne vertébrale protègent le système nerveux central ; la cage thoracique protège le cœur et les poumons." },
      { id: "cm1-card-59", front: "Squelette axial", back: "Ensemble des os de la tête, du cou, de la colonne vertébrale et de la cage thoracique." },
      { id: "cm1-card-60", front: "Squelette appendiculaire", back: "Os des quatre membres." },
      { id: "cm1-card-61", front: "Os longs", back: "Un des axes dimensionnels est très supérieur aux deux autres ; deux épiphyses aux extrémités et une diaphyse au centre. Ex. le fémur." },
      { id: "cm1-card-62", front: "Os courts", back: "Les trois axes dimensionnels sont quasiment équivalents, formes cubiques/trapézoïdales. Ex. les os du tarse." },
      { id: "cm1-card-63", front: "Os plats", back: "Un des axes dimensionnels est très inférieur aux deux autres. Ex. la patella." },
      { id: "cm1-card-64", front: "Os irréguliers", back: "Os qui n’entrent dans aucune classification de forme. Ex. les vertèbres, le sacrum." },
      { id: "cm1-card-65", front: "Saillies osseuses", back: "Volumes osseux proéminents, souvent zones d’insertion musculaire/ligamentaire : processus, tubérosité, tubercule, épine, crête, éminence, protubérance." },
      { id: "cm1-card-66", front: "Dépressions osseuses", back: "Cavités et reliefs en creux, souvent empreinte d’une structure anatomique : cavités, fosses, sillons, incisures." },
      { id: "cm1-card-67", front: "Foramen", back: "Un « trou » à la surface d’un os, laissant le passage aux nerfs et/ou aux vaisseaux sanguins. Ex. le foramen obturé." },
      { id: "cm1-card-68", front: "Synarthrose", back: "Articulation fibreuse, mobilité réduite, sans cavité ni capsule articulaire (sutures, gomphoses, syndesmoses)." },
      { id: "cm1-card-69", front: "Amphiarthrose", back: "Articulation cartilagineuse, mobilité réduite (synchondroses, symphyses)." },
      { id: "cm1-card-70", front: "Suture", back: "Union des os après ossification du tissu fibreux." },
      { id: "cm1-card-71", front: "Gomphose", back: "Articulation des dents avec les os de la mâchoire." },
      { id: "cm1-card-72", front: "Syndesmose", back: "Union des os par du tissu fibreux." },
      { id: "cm1-card-73", front: "Synchondrose", back: "Union des os par du cartilage hyalin." },
      { id: "cm1-card-74", front: "Symphyse", back: "Union des os par du fibrocartilage." },
      { id: "cm1-card-75", front: "Articulation synoviale", back: "Articulation la plus mobile ; possède une capsule articulaire (couche fibreuse externe + couche synoviale interne) et de la synovie." },
      { id: "cm1-card-76", front: "Synovie", back: "Liquide intra-articulaire : assure le glissement des surfaces articulaires et nourrit le cartilage articulaire non vascularisé." },
      { id: "cm1-card-77", front: "Cartilage hyalin", back: "Tissu des surfaces articulaires, épais de 1 à 4 mm, à la fois rigide, élastique et déformable. Non vascularisé, nourri par imbibition." },
      { id: "cm1-card-78", front: "Os sous-chondral", back: "Zone osseuse située directement sous le cartilage articulaire." },
      { id: "cm1-card-79", front: "Labrum", back: "Cartilage fibreux en anneau, situé aux pourtours des surfaces articulaires pour améliorer la congruence. Ex. hanche, épaule." },
      { id: "cm1-card-80", front: "Ménisque / disque articulaire", back: "Cartilages fibreux intra-articulaires qui améliorent la congruence. Ex. ménisques du genou, disque sternoclaviculaire." },
      { id: "cm1-card-81", front: "Ligaments", back: "Tissu conjonctif fibreux et élastique. Rôle de stabilité passive, limitent les mobilités extrêmes. Capacité d’étirement < 10 % de leur longueur de repos." },
      { id: "cm1-card-82", front: "Tendons", back: "Partie terminale du muscle qui l’attache à l’os. Stabilisation active des articulations, plus résistants que les ligaments." },
      { id: "cm1-card-83", front: "Articulation sphéroïde (énarthrose)", back: "Deux surfaces sphériques inversées. Grande mobilité, 3 degrés de liberté. Ex. épaule, hanche." },
      { id: "cm1-card-84", front: "Articulation ellipsoïde (condylaire)", back: "Deux surfaces ovales, une concave et une convexe. 2 degrés de liberté. Ex. poignet, genou." },
      { id: "cm1-card-85", front: "Articulation en selle", back: "Deux surfaces en forme de U, une convexe et une concave. 2 degrés de liberté. Ex. le pouce." },
      { id: "cm1-card-86", front: "Articulation ginglyme (trochléenne)", back: "Deux surfaces en forme de poulie. 1 degré de liberté. Ex. coude, cheville, interphalangiennes." },
      { id: "cm1-card-87", front: "Articulation trochoïde", back: "Deux surfaces cylindriques, une pleine et une creuse. 1 degré de liberté. Ex. radio-ulnaires proximale et distale." },
      { id: "cm1-card-88", front: "Articulation plane (arthrodie)", back: "Deux surfaces planes. Mobilité la plus réduite, glissement dans un seul plan. Ex. acromio-claviculaire." },
      { id: "cm1-card-89", front: "Muscle cardiaque (myocarde)", back: "Constitue les parois du cœur, sous contrôle du système nerveux autonome." },
      { id: "cm1-card-90", front: "Muscles lisses", back: "Tapissent les organes viscéraux creux, les voies respiratoires, les vaisseaux sanguins et les yeux. Contrôle autonome." },
      { id: "cm1-card-91", front: "Muscles squelettiques", back: "Muscles de la locomotion, sous contrôle volontaire. Assurent le maintien de la posture et la mobilisation des segments corporels." },
      { id: "cm1-card-92", front: "Muscle circulaire", back: "Fibres organisées en cercles concentriques. Ex. orbiculaires de l’œil et de la bouche, sphincters." },
      { id: "cm1-card-93", front: "Muscle convergent", back: "Fibres en éventail, origine large, se termine le plus souvent par un tendon unique. Ex. le grand pectoral." },
      { id: "cm1-card-94", front: "Muscle parallèle (fusiforme)", back: "Fibres parallèles à l’axe longitudinal du muscle ; partie centrale plus épaisse. Ex. le biceps brachial." },
      { id: "cm1-card-95", front: "Muscle penné", back: "Les fibres s’attachent en diagonale à un tendon central le long de l’axe longitudinal du muscle." },
      { id: "cm1-card-96", front: "Muscle multipenné", back: "Agencement en plumes côte à côte ; plusieurs tendons longitudinaux obliquent vers un tendon commun." },
      { id: "cm1-card-97", front: "Muscle bipenné", back: "Les faisceaux s’insèrent sur les deux côtés du tendon." },
      { id: "cm1-card-98", front: "Muscle unipenné", back: "Tous les faisceaux sont du même côté du tendon." },
      { id: "cm1-card-99", front: "Aponévrose", back: "Membrane de fibres conjonctives denses qui enveloppe un muscle, sert d’insertion à un muscle plat, ou cloisonne des muscles adjacents." },
      { id: "cm1-card-100", front: "Septum", back: "Aponévrose servant de cloison entre différentes loges musculaires." },
      { id: "cm1-card-101", front: "Fascia", back: "Aponévrose qui sépare différents plans ou couches de muscles." },
      { id: "cm1-card-102", front: "Bourse synoviale", back: "Poche contenant du liquide synovial, interposée entre deux éléments anatomiques pour limiter les contacts directs et faciliter le glissement." },
      { id: "cm1-card-103", front: "Gaine tendineuse", back: "Gaine remplie de liquide synovial entourant un tendon pour le protéger des contacts directs avec les structures adjacentes." },
      { id: "cm1-card-104", front: "Rétinaculum", back: "Bande fibreuse maintenant un tendon au contact d’une structure osseuse. Ex. le rétinaculum des fléchisseurs = canal carpien." },
      { id: "cm1-card-105", front: "Tissu épithélial", back: "Recouvre les surfaces du corps, tapisse les cavités et forme les glandes." },
      { id: "cm1-card-106", front: "Tissu conjonctif", back: "Tissu de connexion : soutien, protection (os, ligament, cartilage), isolation, stockage (tissu adipeux), transport (le sang)." },
      { id: "cm1-card-107", front: "Tissu musculaire", back: "Composé de fibres musculaires (myocytes) capables de se contracter." },
      { id: "cm1-card-108", front: "Tissu nerveux", back: "Composé de neurones et de cellules gliales." }
    ],
    quizQuestions: [
      { id: "cm1-q1", prompt: "Le plan frontal divise le corps en :", options: ["Partie haute et basse", "Partie avant et arrière", "Partie gauche et droite", "Partie interne et externe"], answerIndex: 1 },
      { id: "cm1-q2", prompt: "Le terme « distal » signifie :", options: ["Plus proche du tronc", "Plus éloigné du tronc", "Plus haut", "Plus bas"], answerIndex: 1 },
      { id: "cm1-q3", prompt: "Quelle articulation permet la flexion et l’extension ?", options: ["Articulation sphéroïde", "Articulation en selle", "Articulation ginglyme", "Articulation plane"], answerIndex: 2 },
      { id: "cm1-q4", prompt: "Les os longs sont principalement présents dans :", options: ["Le crâne", "Le bassin", "Les membres", "La colonne"], answerIndex: 2 },
      { id: "cm1-q5", prompt: "Le mouvement d’abduction consiste à :", options: ["Approcher un membre du plan médian", "Éloigner un membre du plan médian", "Tourner une articulation", "Pivoter autour de l’axe longitudinal"], answerIndex: 1 },
      { id: "cm1-q6", prompt: "Le plan sagittal sépare le corps en :", options: ["Droite et gauche", "Haut et bas", "Avant et arrière", "Interne et externe"], answerIndex: 0 },
      { id: "cm1-q7", prompt: "Le mode de contraction où le muscle s’allonge est :", options: ["Isométrique", "Concentrique", "Excentrique", "Statique"], answerIndex: 2 },
      { id: "cm1-q8", prompt: "En chaîne cinétique fermée (CCF) :", options: ["L’extrémité distale est mobile", "L’extrémité distale est fixe", "Il n’y a pas de mouvement", "Le muscle ne travaille pas"], answerIndex: 1 },
      { id: "cm1-q9", prompt: "Les synarthroses sont des articulations :", options: ["Fibreuses à mobilité réduite", "Synoviales très mobiles", "Cartilagineuses mobiles", "Sans tissu conjonctif"], answerIndex: 0 },
      { id: "cm1-q10", prompt: "Le labrum se trouve notamment au niveau de :", options: ["Genou et coude", "Hanche et épaule", "Cheville et poignet", "Rachis cervical"], answerIndex: 1 },
      { id: "cm1-q11", prompt: "Une articulation ginglyme (trochléenne) possède :", options: ["3 degrés de liberté", "2 degrés de liberté", "1 degré de liberté", "Aucune mobilité"], answerIndex: 2 },
      { id: "cm1-q12", prompt: "Un muscle fusiforme (parallèle) a des fibres :", options: ["En cercles concentriques", "Parallèles à l’axe longitudinal", "En éventail", "Obliques vers un tendon central"], answerIndex: 1 },
      { id: "cm1-q13", prompt: "La synovie a pour rôle :", options: ["Contracter le muscle", "Assurer le glissement des surfaces et nourrir le cartilage", "Transmettre l’influx nerveux", "Produire de la chaleur"], answerIndex: 1 },
      { id: "cm1-q14", prompt: "La position anatomique de référence se fait :", options: ["Allongé, bras croisés", "Debout, paumes vers l’avant", "Debout, paumes vers l’arrière", "Assis, mains sur les genoux"], answerIndex: 1 },
      { id: "cm1-q15", prompt: "D’où vient étymologiquement le mot « anatomie » ?", options: ["Du grec teimnein, « couper »", "Du latin corpus, « corps »", "Du grec logos, « discours »", "Du latin scientia, « savoir »"], answerIndex: 0 },
      { id: "cm1-q16", prompt: "L’anatomie fonctionnelle étudie en priorité :", options: ["L’histoire de la médecine", "Les relations entre structures vouées à une même fonction", "Les pathologies osseuses uniquement", "La reproduction humaine"], answerIndex: 1 },
      { id: "cm1-q17", prompt: "Dans la position anatomique de référence, les paumes de main sont tournées :", options: ["Vers l’arrière", "Vers l’intérieur", "Vers l’avant", "Vers le bas"], answerIndex: 2 },
      { id: "cm1-q18", prompt: "Le plan qui divise le corps en une partie droite et une partie gauche est le plan :", options: ["Frontal", "Sagittal", "Transversal", "Axial (au sens du squelette)"], answerIndex: 1 },
      { id: "cm1-q19", prompt: "Le plan frontal (coronal) divise le corps en :", options: ["Haut / bas", "Droite / gauche", "Avant / arrière", "Interne / externe"], answerIndex: 2 },
      { id: "cm1-q20", prompt: "Le plan transversal (horizontal) divise le corps en :", options: ["Antérieur / postérieur", "Supérieur / inférieur", "Droite / gauche", "Médial / latéral"], answerIndex: 1 },
      { id: "cm1-q21", prompt: "L’axe vertical (longitudinal) est perpendiculaire à quel plan ?", options: ["Plan sagittal", "Plan frontal", "Plan transversal", "Aucun des trois"], answerIndex: 2 },
      { id: "cm1-q22", prompt: "L’axe antéro-postérieur (sagittal) coupe perpendiculairement :", options: ["Le plan frontal", "Le plan transversal", "Le plan sagittal médian", "Aucun plan"], answerIndex: 0 },
      { id: "cm1-q23", prompt: "Un élément proche du plan sagittal médian est dit :", options: ["Latéral", "Médial", "Distal", "Superficiel"], answerIndex: 1 },
      { id: "cm1-q24", prompt: "« Proximal » et « distal » sont des termes principalement réservés :", options: ["Au tronc", "Au crâne", "Aux membres", "À la colonne vertébrale"], answerIndex: 2 },
      { id: "cm1-q25", prompt: "Le grand dorsal (superficiel) et l’érecteur du rachis (profond) illustrent la paire de termes :", options: ["Proximal / distal", "Superficiel / profond", "Crânial / caudal", "Supra / infra"], answerIndex: 1 },
      { id: "cm1-q26", prompt: "Un élément situé du côté opposé à la structure de référence est dit :", options: ["Homolatéral", "Controlatéral", "Ipsilatéral", "Bilatéral"], answerIndex: 1 },
      { id: "cm1-q27", prompt: "Les muscles supra-épineux et infra-épineux illustrent la paire de termes :", options: ["Supra / infra", "Crânial / caudal", "Proximal / distal", "Médial / latéral"], answerIndex: 0 },
      { id: "cm1-q28", prompt: "Un mouvement réalisé grâce à des contractions musculaires volontaires, sans aide extérieure, est dit :", options: ["Passif", "Actif", "Isométrique", "Réflexe"], answerIndex: 1 },
      { id: "cm1-q29", prompt: "Dans une contraction isométrique :", options: ["Le muscle s’allonge", "Le muscle se raccourcit", "Le muscle ne change pas de longueur", "Le muscle se relâche totalement"], answerIndex: 2 },
      { id: "cm1-q30", prompt: "Le mode de contraction utilisé dans l’amortissement et la décélération est :", options: ["Concentrique", "Isométrique", "Excentrique", "Statique"], answerIndex: 2 },
      { id: "cm1-q31", prompt: "Dans une contraction concentrique, la force musculaire générée est :", options: ["Égale à la résistance externe", "Inférieure à la résistance externe", "Supérieure à la résistance externe", "Nulle"], answerIndex: 2 },
      { id: "cm1-q32", prompt: "Le soulevé de terre est un exemple de :", options: ["Chaîne cinétique ouverte", "Chaîne cinétique fermée", "Mouvement passif", "Contraction excentrique pure"], answerIndex: 1 },
      { id: "cm1-q33", prompt: "Dans une chaîne cinétique ouverte (CCO), l’extrémité distale du membre est :", options: ["Fixe", "Mobile", "Bloquée en rotation", "Inexistante"], answerIndex: 1 },
      { id: "cm1-q34", prompt: "La flexion et l’extension se produisent autour de l’axe :", options: ["Vertical", "Médio-latéral", "Antéro-postérieur", "Aucun axe précis"], answerIndex: 1 },
      { id: "cm1-q35", prompt: "L’abduction et l’adduction se produisent dans le plan :", options: ["Sagittal", "Frontal", "Transversal", "Horizontal"], answerIndex: 1 },
      { id: "cm1-q36", prompt: "Écarter un segment du plan médian correspond à :", options: ["L’adduction", "L’abduction", "La rotation latérale", "La flexion"], answerIndex: 1 },
      { id: "cm1-q37", prompt: "La rotation qui amène la face antérieure du membre « en dedans » est la rotation :", options: ["Latérale", "Médiale", "Neutre", "Circonductrice"], answerIndex: 1 },
      { id: "cm1-q38", prompt: "La circumduction correspond à :", options: ["Une rotation pure autour de l’axe vertical", "Une combinaison de mouvements dans les 3 plans", "Un mouvement uniquement passif", "Une contraction isométrique prolongée"], answerIndex: 1 },
      { id: "cm1-q39", prompt: "Le squelette humain compte, chez l’adulte, un nombre constant de :", options: ["186 os", "206 os", "226 os", "152 os"], answerIndex: 1 },
      { id: "cm1-q40", prompt: "Le squelette axial regroupe :", options: ["Les os des quatre membres", "La tête, le cou, la colonne vertébrale et la cage thoracique", "Uniquement le crâne", "Les os longs uniquement"], answerIndex: 1 },
      { id: "cm1-q41", prompt: "Le fémur est un exemple caractéristique d’os :", options: ["Court", "Plat", "Long", "Irrégulier"], answerIndex: 2 },
      { id: "cm1-q42", prompt: "Les os du tarse sont des exemples typiques d’os :", options: ["Longs", "Courts", "Plats", "Irréguliers"], answerIndex: 1 },
      { id: "cm1-q43", prompt: "La patella est classiquement citée comme exemple d’os :", options: ["Long", "Court", "Plat", "Irrégulier"], answerIndex: 2 },
      { id: "cm1-q44", prompt: "Les vertèbres et le sacrum sont des exemples d’os :", options: ["Longs", "Courts", "Plats", "Irréguliers"], answerIndex: 3 },
      { id: "cm1-q45", prompt: "Une saillie osseuse est le plus souvent une zone :", options: ["De passage vasculo-nerveux", "D’insertion musculaire ou ligamentaire", "De production de synovie", "De cartilage hyalin"], answerIndex: 1 },
      { id: "cm1-q46", prompt: "Le foramen obturé est un exemple de :", options: ["Saillie osseuse", "Dépression osseuse", "Foramen", "Épiphyse"], answerIndex: 2 },
      { id: "cm1-q47", prompt: "Les synarthroses et amphiarthroses, contrairement aux articulations synoviales :", options: ["Ont une capsule articulaire épaisse", "N’ont pas de cavité ni de capsule articulaire", "Sont toujours très mobiles", "Contiennent un ménisque"], answerIndex: 1 },
      { id: "cm1-q48", prompt: "Une suture est une union des os par :", options: ["Du cartilage hyalin", "Du fibrocartilage", "Du tissu fibreux après ossification", "Une capsule synoviale"], answerIndex: 2 },
      { id: "cm1-q49", prompt: "Une symphyse est une union des os par :", options: ["Du fibrocartilage", "Du cartilage hyalin", "Du tissu fibreux non ossifié", "De la synovie"], answerIndex: 0 },
      { id: "cm1-q50", prompt: "La synovie a pour rôle :", options: ["De protéger uniquement les tendons", "D’assurer le glissement articulaire et de nourrir le cartilage", "De relier les os entre eux comme un ligament", "De former le labrum"], answerIndex: 1 },
      { id: "cm1-q51", prompt: "Le labrum est présent notamment au niveau :", options: ["Du genou et de la cheville", "De la hanche et de l’épaule", "Du poignet uniquement", "Des vertèbres"], answerIndex: 1 },
      { id: "cm1-q52", prompt: "Les ligaments ont une capacité d’étirement limitée à environ :", options: ["Moins de 10 % de leur longueur de repos", "Environ 50 %", "Plus de 80 %", "Ils ne s’étirent jamais"], answerIndex: 0 },
      { id: "cm1-q53", prompt: "Comparés aux ligaments, les tendons sont :", options: ["Moins résistants", "Plus résistants", "De même résistance exactement", "Non fixés à l’os"], answerIndex: 1 },
      { id: "cm1-q54", prompt: "L’articulation de la hanche est une articulation :", options: ["En selle", "Ellipsoïde", "Sphéroïde (énarthrose)", "Plane (arthrodie)"], answerIndex: 2 },
      { id: "cm1-q55", prompt: "Une articulation avec 1 seul degré de liberté, en forme de poulie (ex. coude, cheville), est dite :", options: ["Sphéroïde", "Ginglyme (trochléenne)", "En selle", "Ellipsoïde"], answerIndex: 1 },
      { id: "cm1-q56", prompt: "L’articulation acromio-claviculaire, à mobilité la plus réduite, est de type :", options: ["Trochoïde", "Sphéroïde", "Plane (arthrodie)", "En selle"], answerIndex: 2 },
      { id: "cm1-q57", prompt: "Le myocarde est un exemple de muscle :", options: ["Squelettique", "Lisse", "Cardiaque", "Penné"], answerIndex: 2 },
      { id: "cm1-q58", prompt: "Les muscles sous contrôle volontaire, responsables de la posture et de la mobilisation des segments, sont les muscles :", options: ["Lisses", "Cardiaques", "Squelettiques", "Sphincters"], answerIndex: 2 },
      { id: "cm1-q59", prompt: "Le grand pectoral, avec ses fibres en éventail vers un tendon unique, est un muscle :", options: ["Circulaire", "Convergent", "Parallèle", "Penné"], answerIndex: 1 },
      { id: "cm1-q60", prompt: "Le biceps brachial, avec des fibres parallèles à l’axe longitudinal, est un muscle :", options: ["Fusiforme (parallèle)", "Penné", "Circulaire", "Multipenné"], answerIndex: 0 },
      { id: "cm1-q61", prompt: "Dans un muscle bipenné, les faisceaux s’insèrent :", options: ["Tous du même côté du tendon", "Sur les deux côtés du tendon", "En cercles concentriques", "En éventail vers un tendon unique"], answerIndex: 1 },
      { id: "cm1-q62", prompt: "Une aponévrose qui sépare différents plans ou couches de muscles est appelée :", options: ["Septum", "Fascia", "Rétinaculum", "Gaine tendineuse"], answerIndex: 1 },
      { id: "cm1-q63", prompt: "Le canal carpien correspond à un exemple de :", options: ["Bourse synoviale", "Gaine tendineuse", "Rétinaculum des fléchisseurs", "Septum intermusculaire"], answerIndex: 2 },
      { id: "cm1-q64", prompt: "Le tissu qui recouvre les surfaces du corps et tapisse les cavités est le tissu :", options: ["Conjonctif", "Épithélial", "Musculaire", "Nerveux"], answerIndex: 1 },
      { id: "cm1-q65", prompt: "Le tissu conjonctif assure notamment le stockage via :", options: ["Le tissu adipeux", "Le tissu épithélial", "Les neurones", "Les myocytes"], answerIndex: 0 }
    ],
    associationPairs: [
      { term: "Crâne", definition: "Squelette de la tête" },
      { term: "Vertèbre", definition: "Os du rachis" },
      { term: "Fémur", definition: "Os long du membre inférieur" },
      { term: "Cartilage", definition: "Tissu souple et résistant" },
      { term: "Tendon", definition: "Relie muscle à os" },
      { term: "Ligament", definition: "Relie os à os" },
      { term: "Aponévrose", definition: "Membrane fibreuse qui enveloppe un muscle" },
      { term: "Chaîne cinétique fermée", definition: "L’extrémité distale du membre est fixe" },
      { term: "Mode excentrique", definition: "Le muscle se contracte en s’allongeant" },
      { term: "Labrum", definition: "Cartilage fibreux qui améliore la congruence articulaire" },
      { term: "Flexion", definition: "« Ferme » l’articulation" },
      { term: "Extension", definition: "« Ouvre » l’articulation" },
      { term: "Abduction", definition: "Écarte le segment du plan médian" },
      { term: "Adduction", definition: "Rapproche le segment du plan médian" },
      { term: "Proximal", definition: "Proche de la racine du membre" },
      { term: "Distal", definition: "Éloigné de la racine du membre" },
      { term: "Médial", definition: "Proche du plan sagittal médian" },
      { term: "Latéral", definition: "Éloigné du plan sagittal médian" },
      { term: "Superficiel", definition: "Proche de la surface du corps" },
      { term: "Profond", definition: "Éloigné de la surface du corps" },
      { term: "Synarthrose", definition: "Articulation fibreuse peu mobile" },
      { term: "Amphiarthrose", definition: "Articulation cartilagineuse peu mobile" },
      { term: "Os long", definition: "Un axe très supérieur aux deux autres" },
      { term: "Os court", definition: "Trois axes quasi équivalents" },
      { term: "Os plat", definition: "Un axe très inférieur aux deux autres" },
      { term: "Muscle circulaire", definition: "Fibres en cercles concentriques" },
      { term: "Muscle penné", definition: "Fibres en diagonale sur un tendon" },
      { term: "Chaîne fermée", definition: "Extrémité distale fixe" },
      { term: "Chaîne ouverte", definition: "Extrémité distale mobile" },
      { term: "Contraction excentrique", definition: "Le muscle s’allonge sous charge" },
      { term: "Contraction concentrique", definition: "Le muscle se raccourcit" }
    ],
    labelingExercises: [
      {
        "title": "Plans anatomiques",
        "targets": [
          {
            "name": "Plan sagittal",
            "prompt": "Il sépare le corps en :",
            "options": [
              "Droite et gauche",
              "Avant et arrière",
              "Haut et bas"
            ]
          },
          {
            "name": "Plan frontal",
            "prompt": "Il sépare le corps en :",
            "options": [
              "Droite et gauche",
              "Avant et arrière",
              "Haut et bas"
            ]
          },
          {
            "name": "Plan transversal",
            "prompt": "Il sépare le corps en :",
            "options": [
              "Droite et gauche",
              "Avant et arrière",
              "Haut et bas"
            ]
          }
        ],
        "answers": [
          "Droite et gauche",
          "Avant et arrière",
          "Haut et bas"
        ]
      },
      {
        "title": "Termes de localisation",
        "targets": [
          {
            "name": "Supérieur",
            "prompt": "Désigne une structure :",
            "options": [
              "Vers la tête",
              "Vers les pieds",
              "Vers l’avant",
              "Vers l’arrière"
            ]
          },
          {
            "name": "Antérieur",
            "prompt": "Désigne une structure :",
            "options": [
              "Vers la tête",
              "Vers les pieds",
              "Vers l’avant",
              "Vers l’arrière"
            ]
          },
          {
            "name": "Postérieur",
            "prompt": "Désigne une structure :",
            "options": [
              "Vers la tête",
              "Vers les pieds",
              "Vers l’avant",
              "Vers l’arrière"
            ]
          }
        ],
        "answers": [
          "Vers la tête",
          "Vers l’avant",
          "Vers l’arrière"
        ]
      },
      {
        "title": "Organisation du squelette",
        "targets": [
          {
            "name": "Squelette axial",
            "prompt": "Il comprend principalement :",
            "options": [
              "Crâne, colonne vertébrale et cage thoracique",
              "Membres et ceintures",
              "Uniquement les côtes"
            ]
          },
          {
            "name": "Squelette appendiculaire",
            "prompt": "Il comprend principalement :",
            "options": [
              "Crâne, colonne vertébrale et cage thoracique",
              "Membres et ceintures",
              "Uniquement les côtes"
            ]
          },
          {
            "name": "Squelette thoracique",
            "prompt": "Il comprend principalement :",
            "options": [
              "Sternum et côtes",
              "Os coxaux et sacrum",
              "Scapulas et clavicules"
            ]
          }
        ],
        "answers": [
          "Crâne, colonne vertébrale et cage thoracique",
          "Membres et ceintures",
          "Sternum et côtes"
        ]
      },
      {
        "title": "Types d’os",
        "targets": [
          {
            "name": "Os long",
            "prompt": "Exemple :",
            "options": [
              "Fémur",
              "Carpe",
              "Scapula"
            ]
          },
          {
            "name": "Os court",
            "prompt": "Exemple :",
            "options": [
              "Fémur",
              "Carpe",
              "Scapula"
            ]
          },
          {
            "name": "Os plat",
            "prompt": "Exemple :",
            "options": [
              "Fémur",
              "Carpe",
              "Scapula"
            ]
          }
        ],
        "answers": [
          "Fémur",
          "Carpe",
          "Scapula"
        ]
      },
      {
        "title": "Mouvements articulaires",
        "targets": [
          {
            "name": "Flexion",
            "prompt": "Elle :",
            "options": [
              "Diminue l’angle entre deux segments",
              "Augmente l’angle entre deux segments",
              "Éloigne un membre du plan médian"
            ]
          },
          {
            "name": "Extension",
            "prompt": "Elle :",
            "options": [
              "Diminue l’angle entre deux segments",
              "Augmente l’angle entre deux segments",
              "Éloigne un membre du plan médian"
            ]
          },
          {
            "name": "Abduction",
            "prompt": "Elle :",
            "options": [
              "Diminue l’angle entre deux segments",
              "Augmente l’angle entre deux segments",
              "Éloigne un membre du plan médian"
            ]
          }
        ],
        "answers": [
          "Diminue l’angle entre deux segments",
          "Augmente l’angle entre deux segments",
          "Éloigne un membre du plan médian"
        ]
      }
    ]
  },
  {
    id: "cm2",
    code: "CM2",
    title: "La région glutéale",
    description: "De la crête iliaque au pli glutéal : ostéologie de la ceinture pelvienne et du fémur proximal, arthrologie de la hanche, muscles profonds et superficiels de la région glutéale.",
    cards: [
      { id: "cm2-card-1", front: "Quels sont les 3 os fusionnés de l’os coxal ?", back: "L’ilium, l’ischion et le pubis." },
      { id: "cm2-card-2", front: "Où se situe l’acétabulum ?", back: "Sur la face externe de l’os coxal ; il s’articule avec la tête du fémur." },
      { id: "cm2-card-3", front: "Quel est le rôle du sacrum dans la ceinture pelvienne ?", back: "Il relie la colonne vertébrale aux os coxaux et présente 4 paires de foramens pour le passage des nerfs." },
      { id: "cm2-card-4", front: "Quelles sont les deux saillies du fémur proximal ?", back: "Le grand trochanter (supérieur, latéral) et le petit trochanter (inférieur, médial)." },
      { id: "cm2-card-5", front: "Quel type d’articulation est la hanche ?", back: "Une articulation synoviale sphéroïde (énarthrose), mobile dans les 3 plans." },
      { id: "cm2-card-6", front: "Quel est le ligament le plus solide de la hanche ?", back: "Le ligament ilio-fémoral, en forme de Y inversé." },
      { id: "cm2-card-7", front: "Quelle est la fonction commune des muscles pelvitrochantériens (piriforme, obturateur interne, jumeaux, carré fémoral) ?", back: "Rotateurs latéraux courts de la hanche et stabilisateurs de la tête fémorale." },
      { id: "cm2-card-8", front: "Quelle est la fonction du moyen et du petit fessier ?", back: "Abduction de la hanche et stabilisation du bassin lors de l’appui monopodal (marche)." },
      { id: "cm2-card-9", front: "Sur quelle structure s’insère la majorité des fibres du grand fessier ?", back: "Le tractus iliotibial." },
      { id: "cm2-card-10", front: "Quelle est l’action principale du grand fessier ?", back: "Extension de la hanche (ex. se relever d’un squat) et rotation latérale." },
      { id: "cm2-card-11", front: "Quels sont les 2 ligaments intra-articulaires de la hanche ?", back: "Le ligament transverse de l’acétabulum et le ligament de la tête du fémur." },
      { id: "cm2-card-12", front: "Quels sont les 3 ligaments extrinsèques de la hanche ?", back: "Ilio-fémoral, pubo-fémoral et ischio-fémoral." },
      { id: "cm2-card-13", front: "Où s’insère le piriforme ?", back: "De la face antérieure du sacrum au bord supérieur du grand trochanter." },
      { id: "cm2-card-14", front: "Quelle est la fonction du tenseur du fascia lata ?", back: "Flexion, abduction et rotation médiale de la hanche ; stabilise la hanche et le genou via le tractus iliotibial." },
      { id: "cm2-card-15", front: "Quel nerf innerve le grand fessier ?", back: "Le nerf glutéal inférieur (L5, S1, S2)." },
      { id: "cm2-card-16", front: "Quel nerf innerve le moyen et le petit fessier ?", back: "Le nerf glutéal supérieur (L4, L5, S1)." },
      { id: "cm2-card-17", front: "Os coxal", back: "Résulte de la fusion de 3 os : ilium (supérieur, insertion des glutéaux), ischion (postéro-inférieur, insertion des muscles postérieurs de la cuisse) et pubis (antéro-inférieur)." },
      { id: "cm2-card-18", front: "Acétabulum", back: "Face externe de l’os coxal ; s’articule avec la tête du fémur." },
      { id: "cm2-card-19", front: "Branche ischio-pubienne", back: "Zone d’insertion des muscles adducteurs (médiaux) de la cuisse." },
      { id: "cm2-card-20", front: "Sacrum", back: "Fusion de 5 vertèbres sacrales, concave vers l’avant. 4 paires de foramens antérieurs et 4 postérieures (passage des nerfs)." },
      { id: "cm2-card-21", front: "Ceinture pelvienne", back: "Os coxaux + sacrum + coccyx ; relie le squelette axial au membre inférieur." },
      { id: "cm2-card-22", front: "Tête fémorale", back: "Sphérique, s’articule avec l’acétabulum." },
      { id: "cm2-card-23", front: "Col fémoral", back: "Relie la tête à la diaphyse du fémur ; orienté vers le haut et médialement." },
      { id: "cm2-card-24", front: "Grand trochanter", back: "Saillie supérieure et latérale du fémur ; zone d’insertion des muscles de la hanche." },
      { id: "cm2-card-25", front: "Petit trochanter", back: "Saillie inférieure et médiale du fémur ; zone d’insertion des muscles de la hanche (ilio-psoas)." },
      { id: "cm2-card-26", front: "Articulation coxo-fémorale", back: "Unit la tête fémorale et l’acétabulum. Synoviale sphéroïde (énarthrose), mobile dans les 3 plans." },
      { id: "cm2-card-27", front: "Stabilité de la hanche", back: "Assurée par la coaptation de la tête dans l’acétabulum, le labrum, la capsule et les ligaments." },
      { id: "cm2-card-28", front: "Ligaments intra-articulaires de la hanche", back: "Ligament transverse de l’acétabulum et ligament de la tête du fémur." },
      { id: "cm2-card-29", front: "Ligament ilio-fémoral", back: "Antérieur et supérieur, en forme de Y inversé. Le plus solide des ligaments externes de la hanche." },
      { id: "cm2-card-30", front: "Ligament pubo-fémoral", back: "Ligament externe de la hanche, antérieur et inférieur." },
      { id: "cm2-card-31", front: "Ligament ischio-fémoral", back: "Renforce la partie postérieure de la capsule de la hanche. Le plus faible des ligaments externes." },
      { id: "cm2-card-32", front: "Piriforme", back: "Origine : face antérieure du sacrum. Terminaison : grand trochanter (bord supérieur et médial). Le plus supérieur des muscles glutéaux profonds." },
      { id: "cm2-card-33", front: "Fonction du piriforme", back: "Rotation latérale de la hanche en extension ; abduction de la hanche en flexion." },
      { id: "cm2-card-34", front: "Nerf sciatique et piriforme", back: "Une hypertrophie ou un spasme du piriforme peut comprimer le nerf sciatique (fréquent chez hockeyeurs, patineurs, alpinistes, cyclistes)." },
      { id: "cm2-card-35", front: "Obturateur interne", back: "Origine : membrane obturatrice et pourtour du foramen obturé. Terminaison : grand trochanter (bord médial, sous le piriforme)." },
      { id: "cm2-card-36", front: "« Triceps coxal »", back: "Unité fonctionnelle formée par l’obturateur interne et les jumeaux supérieur et inférieur." },
      { id: "cm2-card-37", front: "Jumeau supérieur", back: "Origine : épine ischiatique. Terminaison : grand trochanter (bord médial). Chemine au-dessus de l’obturateur interne." },
      { id: "cm2-card-38", front: "Jumeau inférieur", back: "Origine : tubérosité ischiatique. Terminaison : grand trochanter (bord médial). Chemine en dessous de l’obturateur interne." },
      { id: "cm2-card-39", front: "Carré fémoral", back: "Origine : ischion (bord latéral). Terminaison : crête inter-trochantérique. Le plus inférieur des muscles glutéaux profonds. Fonction : rotation latérale de la hanche (seule)." },
      { id: "cm2-card-40", front: "Muscles glutéaux profonds (synthèse)", back: "Piriforme, obturateur interne, jumeaux et carré fémoral : courts rotateurs latéraux de la hanche, surtout en extension. Ils stabilisent la tête fémorale dans l’acétabulum." },
      { id: "cm2-card-41", front: "Petit fessier", back: "Origine : ilium (face externe). Terminaison : grand trochanter (face antéro-latérale). Le plus profond des muscles superficiels glutéaux." },
      { id: "cm2-card-42", front: "Fonction du petit fessier", back: "Abduction et rotation médiale de la hanche ; stabilisation du pelvis lors de l’élévation du membre controlatéral (ex. appui monopodal)." },
      { id: "cm2-card-43", front: "Moyen fessier", back: "Recouvre le petit fessier. Fonction : abduction de la hanche, rotation médiale (fibres antérieures) et latérale (fibres postérieures), stabilisation du pelvis." },
      { id: "cm2-card-44", front: "Grand fessier", back: "Le plus superficiel et le plus volumineux muscle du corps humain. Recouvre le moyen fessier." },
      { id: "cm2-card-45", front: "Fonction du grand fessier", back: "Extension de la hanche (ex. assis-debout, squat), rotation latérale, abduction, stabilisation de la hanche et du genou via le tractus iliotibial." },
      { id: "cm2-card-46", front: "Tractus iliotibial", back: "Insertion latérale de la majorité des fibres du grand fessier ; descend jusqu’au tibia et stabilise hanche et genou." },
      { id: "cm2-card-47", front: "Tenseur du fascia lata (TFL)", back: "Le muscle le plus antérieur du groupe superficiel glutéal. Tendu entre la crête iliaque et le tractus iliotibial." },
      { id: "cm2-card-48", front: "Fonction du tenseur du fascia lata", back: "Flexion, abduction et rotation médiale de la hanche ; stabilisation de la hanche et du genou en extension (avec le grand fessier)." },
      { id: "cm2-card-49", front: "Syndrome de « l’essuie-glace »", back: "Inflammation du tractus iliotibial due à un conflit avec le condyle latéral du fémur ; fréquent chez les coureurs de fond." }
    ],
    quizQuestions: [
      { id: "cm2-q1", prompt: "Le piriforme est tendu entre :", options: ["Sacrum et fémur", "Ilium et tibia", "Ischion et fibula", "Pubis et fémur"], answerIndex: 0 },
      { id: "cm2-q2", prompt: "Quel muscle glutéal est le plus superficiel et le plus volumineux ?", options: ["Petit fessier", "Moyen fessier", "Grand fessier", "Piriforme"], answerIndex: 2 },
      { id: "cm2-q3", prompt: "La compression du nerf sciatique par le piriforme est appelée :", options: ["Syndrome du piriforme", "Syndrome de la loge antérieure", "Fasciite plantaire", "Syndrome de l’essuie-glace"], answerIndex: 0 },
      { id: "cm2-q4", prompt: "Le ligament le plus solide de la hanche est :", options: ["Ischio-fémoral", "Pubo-fémoral", "Ilio-fémoral", "Ligament de la tête du fémur"], answerIndex: 2 },
      { id: "cm2-q5", prompt: "La ceinture pelvienne relie le squelette axial :", options: ["Au crâne", "Au membre inférieur", "À la cage thoracique", "Au membre supérieur"], answerIndex: 1 },
      { id: "cm2-q6", prompt: "Le « triceps coxal » regroupe :", options: ["Grand, moyen et petit fessier", "Obturateur interne et les 2 jumeaux", "Piriforme, carré fémoral et obturateur externe", "Sartorius, gracile et semi-tendineux"], answerIndex: 1 },
      { id: "cm2-q7", prompt: "La fonction principale du moyen et du petit fessier est :", options: ["Extension de la hanche", "Abduction et stabilisation du bassin", "Flexion du genou", "Rotation médiale du genou"], answerIndex: 1 },
      { id: "cm2-q8", prompt: "Le tenseur du fascia lata s’insère sur :", options: ["Le ligament patellaire", "Le tractus iliotibial", "La tubérosité tibiale", "Le tendon calcanéen"], answerIndex: 1 },
      { id: "cm2-q9", prompt: "Le ligament transverse de l’acétabulum est :", options: ["Intra-articulaire", "Extra-articulaire", "Absent chez l’humain", "Un muscle"], answerIndex: 0 },
      { id: "cm2-q10", prompt: "Le nerf glutéal supérieur innerve :", options: ["Le grand fessier", "Le moyen et le petit fessier", "Le piriforme uniquement", "Le carré fémoral"], answerIndex: 1 },
      { id: "cm2-q11", prompt: "Le ligament ischio-fémoral renforce la capsule :", options: ["En avant", "En arrière", "En dedans", "En dehors"], answerIndex: 1 },
      { id: "cm2-q12", prompt: "La bourse trochantérique protège :", options: ["Les muscles insérés près du grand trochanter", "Le nerf sciatique", "Le labrum", "Le ligament rond"], answerIndex: 0 },
      { id: "cm2-q13", prompt: "L’os coxal résulte de la fusion de trois os. Lesquels ?", options: ["Ilium, ischion, pubis", "Ilium, sacrum, coccyx", "Fémur, tibia, fibula", "Ischion, acétabulum, labrum"], answerIndex: 0 },
      { id: "cm2-q14", prompt: "Quelle partie de l’os coxal sert d’insertion aux muscles glutéaux ?", options: ["Le pubis", "L’ischion", "L’ilium", "L’acétabulum"], answerIndex: 2 },
      { id: "cm2-q15", prompt: "L’acétabulum s’articule avec :", options: ["Le condyle tibial", "La tête du fémur", "Le calcanéus", "La patella"], answerIndex: 1 },
      { id: "cm2-q16", prompt: "La branche ischio-pubienne est la zone d’insertion :", options: ["Des muscles glutéaux", "Du quadriceps", "Des muscles adducteurs de la cuisse", "Des ischio-jambiers"], answerIndex: 2 },
      { id: "cm2-q17", prompt: "Le sacrum résulte de la fusion de :", options: ["4 vertèbres", "5 vertèbres sacrales", "3 vertèbres", "7 vertèbres cervicales"], answerIndex: 1 },
      { id: "cm2-q18", prompt: "Le sacrum s’articule en bas avec :", options: ["Le fémur", "L’ilium", "Le coccyx", "Le tibia"], answerIndex: 2 },
      { id: "cm2-q19", prompt: "La ceinture pelvienne relie :", options: ["Le membre inférieur au membre supérieur", "Le squelette axial au membre inférieur", "Le crâne au rachis", "Le fémur au tibia"], answerIndex: 1 },
      { id: "cm2-q20", prompt: "La tête fémorale est de forme :", options: ["Plate", "Cylindrique", "Sphérique", "En selle"], answerIndex: 2 },
      { id: "cm2-q21", prompt: "Le col fémoral est orienté :", options: ["Vers le bas et latéralement", "Vers le haut et médialement", "Horizontalement", "Vers l’arrière"], answerIndex: 1 },
      { id: "cm2-q22", prompt: "Le grand trochanter est situé :", options: ["Inférieur et médial", "Supérieur et latéral", "Antérieur", "Postérieur pur"], answerIndex: 1 },
      { id: "cm2-q23", prompt: "Le petit trochanter est situé :", options: ["Supérieur et latéral", "Inférieur et médial", "Antérieur pur", "Postérieur pur"], answerIndex: 1 },
      { id: "cm2-q24", prompt: "L’articulation coxo-fémorale est une articulation :", options: ["Plane (arthrodie)", "En selle", "Synoviale sphéroïde (énarthrose)", "Trochoïde"], answerIndex: 2 },
      { id: "cm2-q25", prompt: "Parmi les ligaments externes de la hanche, lequel est le plus solide ?", options: ["Pubo-fémoral", "Ischio-fémoral", "Ilio-fémoral", "Ligament de la tête du fémur"], answerIndex: 2 },
      { id: "cm2-q26", prompt: "Le ligament ischio-fémoral est :", options: ["Le plus solide", "Le plus faible des ligaments externes", "Intra-articulaire", "Un ligament du genou"], answerIndex: 1 },
      { id: "cm2-q27", prompt: "Le ligament de la tête du fémur est :", options: ["Intra-articulaire", "Extra-articulaire", "Un ligament de la cheville", "Absent chez l’humain"], answerIndex: 0 },
      { id: "cm2-q28", prompt: "Le piriforme est :", options: ["Le plus inférieur des muscles profonds", "Le plus supérieur des muscles glutéaux profonds", "Un muscle de la cuisse", "Le plus superficiel du groupe"], answerIndex: 1 },
      { id: "cm2-q29", prompt: "Quel muscle peut comprimer le nerf sciatique en cas d’hypertrophie ou de spasme ?", options: ["L’obturateur interne", "Le carré fémoral", "Le piriforme", "Le grand fessier"], answerIndex: 2 },
      { id: "cm2-q30", prompt: "Le « triceps coxal » est formé par :", options: ["Le piriforme et le carré fémoral", "L’obturateur interne et les deux jumeaux", "Les 3 muscles fessiers", "Le grand adducteur et le pectiné"], answerIndex: 1 },
      { id: "cm2-q31", prompt: "Le carré fémoral est :", options: ["Le plus supérieur des muscles profonds", "Le plus médial", "Le plus inférieur des muscles profonds glutéaux", "Un muscle superficiel"], answerIndex: 2 },
      { id: "cm2-q32", prompt: "La fonction principale (unique) du carré fémoral est :", options: ["L’abduction de la hanche", "L’extension de la hanche", "La rotation latérale de la hanche", "L’adduction de la hanche"], answerIndex: 2 },
      { id: "cm2-q33", prompt: "Les muscles glutéaux profonds sont fonctionnellement :", options: ["Des extenseurs du genou", "Des fléchisseurs plantaires", "Des courts rotateurs latéraux de la hanche", "Des adducteurs de hanche"], answerIndex: 2 },
      { id: "cm2-q34", prompt: "Le petit fessier est :", options: ["Le plus superficiel du groupe", "Le plus profond des muscles superficiels glutéaux", "Un muscle de la cuisse", "Un muscle profond glutéal"], answerIndex: 1 },
      { id: "cm2-q35", prompt: "Le moyen fessier recouvre :", options: ["Le grand fessier", "Le piriforme", "Le petit fessier", "Le carré fémoral"], answerIndex: 2 },
      { id: "cm2-q36", prompt: "Quel muscle est le plus volumineux du corps humain ?", options: ["Le moyen fessier", "Le grand fessier", "Le quadriceps", "Le gastrocnémien"], answerIndex: 1 },
      { id: "cm2-q37", prompt: "Latéralement, la majorité des fibres du grand fessier s’insèrent sur :", options: ["Le tibia directement", "La patella", "Le tractus iliotibial", "Le calcanéus"], answerIndex: 2 },
      { id: "cm2-q38", prompt: "Le tenseur du fascia lata est :", options: ["Le plus postérieur du groupe superficiel", "Un muscle profond", "Le plus antérieur du groupe superficiel glutéal", "Un adducteur pur"], answerIndex: 2 },
      { id: "cm2-q39", prompt: "Le syndrome de « l’essuie-glace » résulte d’un conflit entre le tractus iliotibial et :", options: ["La tête fémorale", "La malléole latérale", "Le condyle latéral du fémur", "Le calcanéus"], answerIndex: 2 }
    ],
    associationPairs: [
      { term: "Piriforme", definition: "Passe par l’incisure ischiatique, peut comprimer le nerf sciatique" },
      { term: "Grand fessier", definition: "Le plus volumineux muscle du corps humain" },
      { term: "Moyen fessier", definition: "Stabilise le bassin en appui monopodal" },
      { term: "Petit fessier", definition: "Le plus profond des muscles glutéaux superficiels" },
      { term: "Carré fémoral", definition: "Le plus inférieur des muscles profonds glutéaux" },
      { term: "Os coxal", definition: "Fusion de l’ilium, l’ischion et le pubis" },
      { term: "Ligament ilio-fémoral", definition: "Le plus solide, en forme de Y inversé" },
      { term: "Nerf glutéal supérieur", definition: "Innerve le moyen et le petit fessier" },
      { term: "Ilium", definition: "Insertion des muscles glutéaux" },
      { term: "Ischion", definition: "Insertion des muscles postérieurs de la cuisse" },
      { term: "Pubis", definition: "Antérieur et inférieur de l’os coxal" },
      { term: "Acétabulum", definition: "S’articule avec la tête du fémur" },
      { term: "Grand trochanter", definition: "Supérieur et latéral du fémur" },
      { term: "Petit trochanter", definition: "Inférieur et médial du fémur" },
      { term: "Ligament ischio-fémoral", definition: "Le plus faible, renfort postérieur" },
      { term: "Triceps coxal", definition: "Obturateur interne + 2 jumeaux" },
      { term: "Tenseur du fascia lata", definition: "Le plus antérieur du groupe superficiel" },
      { term: "Tractus iliotibial", definition: "Insertion latérale du grand fessier" },
      { term: "Nerf sciatique", definition: "Comprimé par le piriforme en spasme" },
      { term: "Coxo-fémorale", definition: "Articulation sphéroïde de la hanche" }
    ],
    labelingExercises: [
      {
        "title": "Les 3 os de l’os coxal",
        "targets": [
          {
            "name": "Ilium",
            "prompt": "C’est la partie :",
            "options": [
              "Supérieure de l’os coxal",
              "Inféro-postérieure de l’os coxal",
              "Antéro-médiale de l’os coxal"
            ]
          },
          {
            "name": "Ischion",
            "prompt": "C’est la partie :",
            "options": [
              "Supérieure de l’os coxal",
              "Inféro-postérieure de l’os coxal",
              "Antéro-médiale de l’os coxal"
            ]
          },
          {
            "name": "Pubis",
            "prompt": "C’est la partie :",
            "options": [
              "Supérieure de l’os coxal",
              "Inféro-postérieure de l’os coxal",
              "Antéro-médiale de l’os coxal"
            ]
          }
        ],
        "answers": [
          "Supérieure de l’os coxal",
          "Inféro-postérieure de l’os coxal",
          "Antéro-médiale de l’os coxal"
        ]
      },
      {
        "title": "Muscles profonds de la région glutéale",
        "targets": [
          {
            "name": "Piriforme",
            "prompt": "Il passe par :",
            "options": [
              "La grande incisure ischiatique",
              "Le foramen obturé",
              "La tubérosité ischiatique"
            ]
          },
          {
            "name": "Obturateur interne",
            "prompt": "Il naît principalement :",
            "options": [
              "Autour du foramen obturé",
              "Sur le sacrum",
              "Sur la crête iliaque"
            ]
          },
          {
            "name": "Carré fémoral",
            "prompt": "Il est :",
            "options": [
              "Le plus inférieur des muscles profonds",
              "Le plus supérieur des muscles profonds",
              "Un muscle superficiel"
            ]
          }
        ],
        "answers": [
          "La grande incisure ischiatique",
          "Autour du foramen obturé",
          "Le plus inférieur des muscles profonds"
        ]
      },
      {
        "title": "Ligaments de la hanche",
        "targets": [
          {
            "name": "Ligament ilio-fémoral",
            "prompt": "Il est :",
            "options": [
              "Antérieur, supérieur et très résistant",
              "Postérieur de la capsule",
              "Inférieur et médial"
            ]
          },
          {
            "name": "Ligament pubo-fémoral",
            "prompt": "Il est situé :",
            "options": [
              "Antéro-inférieurement",
              "Postéro-supérieurement",
              "Sur le toit de l’acétabulum"
            ]
          },
          {
            "name": "Ligament ischio-fémoral",
            "prompt": "Il renforce la capsule :",
            "options": [
              "En arrière",
              "En avant",
              "En haut uniquement"
            ]
          }
        ],
        "answers": [
          "Antérieur, supérieur et très résistant",
          "Antéro-inférieurement",
          "En arrière"
        ]
      }
    ]
  },
  {
    id: "cm3",
    code: "CM3",
    title: "La cuisse",
    description: "Du pli glutéal au genou : ostéologie du fémur, de la patella et du tibia proximal, muscles des compartiments antérieur (quadriceps), médial (adducteurs) et postérieur (ischio-jambiers).",
    cards: [
      { id: "cm3-card-1", front: "Quelle est la crête rugueuse sur le bord postérieur de la diaphyse fémorale ?", back: "La ligne âpre." },
      { id: "cm3-card-2", front: "Quel est le plus grand os sésamoïde du corps humain ?", back: "La patella." },
      { id: "cm3-card-3", front: "Quels sont les 4 chefs du quadriceps ?", back: "Vaste médial, vaste latéral, vaste intermédiaire et droit fémoral." },
      { id: "cm3-card-4", front: "Quel est le plus long muscle du corps humain ?", back: "Le sartorius." },
      { id: "cm3-card-5", front: "Quelle est la fonction principale des vastes ?", back: "Extension du genou." },
      { id: "cm3-card-6", front: "Quel muscle est le plus volumineux et profond du compartiment médial ?", back: "Le grand adducteur." },
      { id: "cm3-card-7", front: "Quels sont les 3 muscles ischio-jambiers ?", back: "Biceps fémoral, semi-tendineux et semi-membraneux." },
      { id: "cm3-card-8", front: "Quelle est la fonction principale des ischio-jambiers ?", back: "Extension de la hanche et flexion du genou." },
      { id: "cm3-card-9", front: "Quel muscle forme la patte d’oie avec le sartorius et le gracile ?", back: "Le semi-tendineux." },
      { id: "cm3-card-10", front: "Quel muscle, bien que classé parmi les adducteurs, est surtout un rotateur latéral de la hanche ?", back: "L’obturateur externe." },
      { id: "cm3-card-11", front: "Où s’insère le gracile ?", back: "Du corps et de la branche inférieure du pubis à la patte d’oie (face médiale du tibia)." },
      { id: "cm3-card-12", front: "Quelle est la fonction principale du pectiné ?", back: "Adduction et flexion de la hanche." },
      { id: "cm3-card-13", front: "Quels sont les 3 muscles adducteurs principaux ?", back: "Le long adducteur, le court adducteur et le grand adducteur." },
      { id: "cm3-card-14", front: "Quelles sont les 2 portions du grand adducteur ?", back: "Une portion adductrice (latérale) et une portion ischio-jambière (médiale)." },
      { id: "cm3-card-15", front: "Quels sont les 2 chefs du biceps fémoral ?", back: "Le chef long (croise la hanche et le genou) et le chef court (croise seulement le genou)." },
      { id: "cm3-card-16", front: "Que forme la patte d’oie ?", back: "La zone d’insertion commune du sartorius, du gracile et du semi-tendineux sur le tibia." },
      { id: "cm3-card-17", front: "Quel nerf innerve le quadriceps ?", back: "Le nerf fémoral (L2, L3, L4)." },
      { id: "cm3-card-18", front: "Quel nerf innerve les ischio-jambiers ?", back: "Le nerf ischiatique (sciatique)." },
      { id: "cm3-card-19", front: "Ligne âpre", back: "Crête rugueuse du bord postérieur de la diaphyse fémorale. Se prolonge par les lignes supra-condylaires médiale et latérale." },
      { id: "cm3-card-20", front: "Condyles fémoraux", back: "Extrémité distale du fémur ; s’articulent avec le tibia (dessous) et la patella (devant). Séparés en arrière par la fosse intercondylaire." },
      { id: "cm3-card-21", front: "Épicondyles fémoraux", back: "Recouvrent les condyles ; insertions des ligaments collatéraux du genou et des gastrocnémiens." },
      { id: "cm3-card-22", front: "Patella", back: "Plus grand os sésamoïde du corps. Face supérieure : tendon quadricipital. Face inférieure : ligament patellaire. Face postérieure : 2 facettes articulaires." },
      { id: "cm3-card-23", front: "Plateau tibial", back: "Formé par les condyles médial et latéral du tibia et l’espace intercondylaire (insertions des ligaments croisés et des ménisques)." },
      { id: "cm3-card-24", front: "Tubérosité tibiale", back: "Insertion du ligament patellaire." },
      { id: "cm3-card-25", front: "Patte d’oie", back: "Sous le condyle médial du tibia, face antérieure. Insertion de 3 muscles de la cuisse : sartorius, gracile, semi-tendineux." },
      { id: "cm3-card-26", front: "Tête de la fibula", back: "S’articule avec le condyle latéral du tibia. Insertions du biceps fémoral et du ligament collatéral du genou." },
      { id: "cm3-card-27", front: "Ilio-psoas", back: "Grand psoas (T12-L5 → petit trochanter) + iliaque (fosse iliaque → petit trochanter). Fonction : flexion de la hanche." },
      { id: "cm3-card-28", front: "Quadriceps", back: "Muscle à 4 chefs : 3 vastes (médial, latéral, intermédiaire) + droit fémoral. Tous se terminent sur la patella et le tibia via le tendon/ligament patellaire." },
      { id: "cm3-card-29", front: "Vaste médial", back: "Ligne intertrochantérique et ligne âpre (bord médial) → patella. Fonction : extension du genou." },
      { id: "cm3-card-30", front: "Vaste latéral", back: "Grand trochanter et ligne âpre (bord latéral) → patella. Le plus volumineux des 3 vastes." },
      { id: "cm3-card-31", front: "Vaste intermédiaire", back: "2/3 supérieurs des faces antérieure et latérale du fémur → patella. Forme la face profonde du tendon quadricipital." },
      { id: "cm3-card-32", front: "Droit fémoral", back: "Épine iliaque antéro-inférieure → patella. Seul chef du quadriceps à croiser la hanche : extension du genou + flexion de la hanche." },
      { id: "cm3-card-33", front: "Sartorius", back: "Épine iliaque antéro-supérieure → patte d’oie. Le plus long muscle du corps humain. Flexion/rotation latérale/abduction de la hanche + flexion du genou." },
      { id: "cm3-card-34", front: "Gracile", back: "Pubis → patte d’oie. Le plus superficiel et le plus médial du compartiment. Adduction de la hanche, flexion du genou." },
      { id: "cm3-card-35", front: "Pectiné", back: "Pubis (pecten) → fémur proximal (sous le petit trochanter). Adduction et flexion de la hanche." },
      { id: "cm3-card-36", front: "Long adducteur", back: "Pubis → tiers moyen de la ligne âpre. Le plus antérieur du compartiment médial. Adduction, flexion et rotation médiale de la hanche." },
      { id: "cm3-card-37", front: "Court adducteur", back: "Pubis → partie supérieure de la ligne âpre. Adduction, rotation médiale et flexion de la hanche." },
      { id: "cm3-card-38", front: "Grand adducteur", back: "Le plus volumineux et profond des adducteurs. 2 portions : adductrice (latérale, supérieure) et ischio-jambière (médiale, inférieure)." },
      { id: "cm3-card-39", front: "Obturateur externe", back: "Foramen obturé → fosse trochantérique du fémur. Bien que classé parmi les adducteurs, c’est surtout un rotateur latéral de la hanche." },
      { id: "cm3-card-40", front: "Blessures de l’aine", back: "Relèvent souvent d’une élongation ou déchirure des muscles antéro-médiaux proximaux de la cuisse (adducteurs)." },
      { id: "cm3-card-41", front: "Ischio-jambiers", back: "Biceps fémoral, semi-tendineux, semi-membraneux : extension de la hanche + flexion du genou." },
      { id: "cm3-card-42", front: "Biceps fémoral", back: "Chef long (tubérosité ischiatique, croise hanche et genou) + chef court (ligne âpre, croise seulement le genou) → tête de la fibula." },
      { id: "cm3-card-43", front: "Semi-tendineux", back: "Tubérosité ischiatique → patte d’oie. Extension/rotation médiale de la hanche, flexion/rotation médiale du genou." },
      { id: "cm3-card-44", front: "Semi-membraneux", back: "Médial et en avant du semi-tendineux ; corps long et plat. Tubérosité ischiatique → condyle médial du tibia. Actions similaires au semi-tendineux." },
      { id: "cm3-card-45", front: "Ischio-jambiers en chaîne fermée", back: "Hanche et genoux fléchis : ils étendent le tronc au niveau de la hanche (ex. soulevé de terre, squat)." }
    ],
    quizQuestions: [
      { id: "cm3-q1", prompt: "Le quadriceps se termine sur :", options: ["Le tendon calcanéen", "La patella et la tubérosité tibiale", "Le grand trochanter", "La malléole médiale"], answerIndex: 1 },
      { id: "cm3-q2", prompt: "Muscle le plus superficiel du compartiment antérieur, entre l’EIAS et la patte d’oie :", options: ["Droit fémoral", "Sartorius", "Vaste médial", "Pectiné"], answerIndex: 1 },
      { id: "cm3-q3", prompt: "Le grand adducteur possède deux portions :", options: ["Fléchisseur et extenseur", "Adductrice et ischio-jambière", "Interne et externe", "Superficielle et profonde"], answerIndex: 1 },
      { id: "cm3-q4", prompt: "Les ischio-jambiers regroupent :", options: ["Quadriceps, sartorius, gracile", "Biceps fémoral, semi-tendineux, semi-membraneux", "Adducteurs et pectiné", "Vastes et droit fémoral"], answerIndex: 1 },
      { id: "cm3-q5", prompt: "Le nerf obturateur innerve principalement :", options: ["Le quadriceps", "Les adducteurs", "Les ischio-jambiers", "Le sartorius"], answerIndex: 1 },
      { id: "cm3-q6", prompt: "Le nerf fémoral innerve :", options: ["Quadriceps et sartorius", "Ischio-jambiers", "Adducteurs", "Muscles du pied"], answerIndex: 0 },
      { id: "cm3-q7", prompt: "Une blessure fréquente à l’aine chez les athlètes touche :", options: ["Les vastes", "Les adducteurs proximaux", "Le sartorius", "Le tibial antérieur"], answerIndex: 1 },
      { id: "cm3-q8", prompt: "Le plateau tibial correspond :", options: ["À la malléole médiale", "Aux surfaces articulaires proximales du tibia", "À la tubérosité tibiale seule", "À la ligne âpre"], answerIndex: 1 },
      { id: "cm3-q9", prompt: "Le gracile s’insère distalement :", options: ["Sur la patella", "Sur la patte d’oie", "Sur le grand trochanter", "Sur la fibula"], answerIndex: 1 },
      { id: "cm3-q10", prompt: "Le grand adducteur comprend :", options: ["Une seule portion", "Deux portions (adductrice et ischio-jambière)", "Trois chefs", "Aucune insertion fémorale"], answerIndex: 1 },
      { id: "cm3-q11", prompt: "Le chef long du biceps fémoral naît sur :", options: ["La ligne âpre", "La tubérosité ischiatique", "Le pubis", "Le tibia"], answerIndex: 1 },
      { id: "cm3-q12", prompt: "Le nerf fémoral innerve principalement :", options: ["Les ischio-jambiers", "Le quadriceps et le sartorius", "Les adducteurs", "Les muscles du pied"], answerIndex: 1 },
      { id: "cm3-q13", prompt: "La ligne âpre se situe sur :", options: ["Le bord médial de la diaphyse fémorale", "Le bord postérieur de la diaphyse fémorale", "La face antérieure du fémur", "Le plateau tibial"], answerIndex: 1 },
      { id: "cm3-q14", prompt: "Les condyles fémoraux sont séparés postérieurement par :", options: ["La ligne âpre", "La patte d’oie", "La fosse intercondylaire", "Le plateau tibial"], answerIndex: 2 },
      { id: "cm3-q15", prompt: "La patella est :", options: ["Un os long", "Le plus grand os sésamoïde du corps", "Un os irrégulier", "Un os court"], answerIndex: 1 },
      { id: "cm3-q16", prompt: "La face inférieure de la patella reçoit :", options: ["Le tendon quadricipital", "Le ligament croisé antérieur", "Le ligament patellaire", "Le tractus iliotibial"], answerIndex: 2 },
      { id: "cm3-q17", prompt: "Le plateau tibial est formé par :", options: ["Les épicondyles fémoraux", "Les condyles médial et latéral du tibia", "La tête de la fibula", "Le calcanéus"], answerIndex: 1 },
      { id: "cm3-q18", prompt: "La patte d’oie reçoit l’insertion de :", options: ["2 muscles", "3 muscles (sartorius, gracile, semi-tendineux)", "4 muscles", "Tout le quadriceps"], answerIndex: 1 },
      { id: "cm3-q19", prompt: "La tête de la fibula s’articule avec :", options: ["Le condyle médial du tibia", "Le condyle latéral du tibia", "Le talus", "Le fémur"], answerIndex: 1 },
      { id: "cm3-q20", prompt: "L’ilio-psoas se termine :", options: ["Au grand trochanter", "Au petit trochanter", "À la patella", "Au tibia"], answerIndex: 1 },
      { id: "cm3-q21", prompt: "Le quadriceps est composé de :", options: ["2 chefs", "3 chefs", "4 chefs", "5 chefs"], answerIndex: 2 },
      { id: "cm3-q22", prompt: "Quel chef du quadriceps est le seul à croiser l’articulation de la hanche ?", options: ["Le vaste médial", "Le vaste latéral", "Le vaste intermédiaire", "Le droit fémoral"], answerIndex: 3 },
      { id: "cm3-q23", prompt: "Le vaste latéral est tendu entre le grand trochanter et :", options: ["Le bord médial de la patella", "Le bord latéral de la patella", "La tubérosité tibiale seule", "Le tibia proximal"], answerIndex: 1 },
      { id: "cm3-q24", prompt: "La fonction principale des 3 vastes est :", options: ["La flexion du genou", "L’extension du genou", "La flexion de la hanche", "L’adduction de la hanche"], answerIndex: 1 },
      { id: "cm3-q25", prompt: "Le sartorius est :", options: ["Le plus court muscle du corps", "Le plus volumineux muscle de la cuisse", "Le plus long muscle du corps humain", "Un muscle profond"], answerIndex: 2 },
      { id: "cm3-q26", prompt: "Le sartorius doit son nom à :", options: ["Sa forme de flèche", "Sa position visible en posture du tailleur", "Sa couleur particulière", "Son innervation"], answerIndex: 1 },
      { id: "cm3-q27", prompt: "Le muscle le plus superficiel et médial du compartiment médial de la cuisse est :", options: ["Le pectiné", "Le long adducteur", "Le gracile", "L’obturateur externe"], answerIndex: 2 },
      { id: "cm3-q28", prompt: "Le pectiné se termine :", options: ["Sur le tibia", "Sur le fémur, sous le petit trochanter", "Sur la patella", "Sur la fibula"], answerIndex: 1 },
      { id: "cm3-q29", prompt: "Le long adducteur est le muscle le plus __ du compartiment médial :", options: ["Postérieur", "Profond", "Antérieur", "Latéral"], answerIndex: 2 },
      { id: "cm3-q30", prompt: "Le grand adducteur possède :", options: ["3 chefs", "1 seul corps homogène", "2 portions (adductrice et ischio-jambière)", "4 faisceaux"], answerIndex: 2 },
      { id: "cm3-q31", prompt: "Les blessures de l’aine chez les athlètes touchent le plus souvent :", options: ["Les ischio-jambiers distaux", "Les muscles antéro-médiaux proximaux de la cuisse", "Le quadriceps distal", "Le tractus iliotibial"], answerIndex: 1 },
      { id: "cm3-q32", prompt: "L’obturateur externe, bien que classé parmi les adducteurs, est surtout :", options: ["Un fléchisseur du genou", "Un abducteur de hanche", "Un rotateur latéral de la hanche", "Un extenseur de hanche"], answerIndex: 2 },
      { id: "cm3-q33", prompt: "Les ischio-jambiers regroupent :", options: ["Quadriceps et sartorius", "Gracile et pectiné", "Biceps fémoral, semi-tendineux, semi-membraneux", "Gastrocnémien et soléaire"], answerIndex: 2 },
      { id: "cm3-q34", prompt: "Le chef long du biceps fémoral naît sur :", options: ["La ligne âpre du fémur", "La tubérosité ischiatique de l’os coxal", "Le tibia", "La fibula"], answerIndex: 1 },
      { id: "cm3-q35", prompt: "Le semi-tendineux se termine :", options: ["Sur la fibula", "À la patte d’oie", "Sur la patella", "Sur le calcanéus"], answerIndex: 1 },
      { id: "cm3-q36", prompt: "Lorsque la hanche et les genoux sont fléchis, les ischio-jambiers permettent surtout :", options: ["La flexion du tronc", "L’extension du tronc au niveau de la hanche", "La rotation du tronc", "L’extension du genou"], answerIndex: 1 },
      { id: "cm3-q37", prompt: "Le semi-membraneux est __ par rapport au semi-tendineux :", options: ["Latéral et en arrière", "Médial et en avant", "Plus superficiel", "Distal"], answerIndex: 1 },
      { id: "cm3-q38", prompt: "La fonction principale du biceps fémoral au genou est :", options: ["Extension et rotation médiale", "Flexion et rotation médiale", "Flexion et rotation latérale", "Extension seule"], answerIndex: 2 }
    ],
    associationPairs: [
      { term: "Sartorius", definition: "Le plus long muscle du corps humain" },
      { term: "Quadriceps", definition: "Extenseur principal du genou" },
      { term: "Ischio-jambiers", definition: "Fléchisseurs du genou et extenseurs de la hanche" },
      { term: "Grand adducteur", definition: "Le plus volumineux muscle médial de la cuisse" },
      { term: "Patella", definition: "Le plus grand os sésamoïde du corps" },
      { term: "Ligne âpre", definition: "Crête rugueuse du bord postérieur du fémur" },
      { term: "Pectiné", definition: "Adducteur et fléchisseur de hanche, à cheval entre 2 compartiments" },
      { term: "Biceps fémoral", definition: "Le plus latéral des ischio-jambiers, 2 chefs" },
      { term: "Fosse intercondylaire", definition: "Sépare les condyles fémoraux en arrière" },
      { term: "Patte d’oie", definition: "Insertion du sartorius, gracile, semi-tendineux" },
      { term: "Ilio-psoas", definition: "Fléchisseur principal de la hanche" },
      { term: "Droit fémoral", definition: "Seul chef du quadriceps bi-articulaire" },
      { term: "Vastes", definition: "Extension du genou uniquement" },
      { term: "Gracile", definition: "Le plus superficiel des adducteurs" },
      { term: "Long adducteur", definition: "Le plus antérieur du compartiment médial" },
      { term: "Obturateur externe", definition: "Rotateur latéral malgré son groupe" },
      { term: "Semi-tendineux", definition: "Muscle en fuseau, terminaison patte d’oie" },
      { term: "Semi-membraneux", definition: "Corps plat, en forme de membrane" },
      { term: "Ligament patellaire", definition: "Continuité du tendon quadricipital" },
      { term: "Vaste latéral", definition: "Le plus volumineux des 3 vastes" }
    ],
    labelingExercises: [
      {
        "title": "Compartiments musculaires de la cuisse",
        "targets": [
          {
            "name": "Compartiment antérieur",
            "prompt": "Sa fonction principale est :",
            "options": [
              "Extension du genou",
              "Adduction de la hanche",
              "Flexion du genou"
            ]
          },
          {
            "name": "Compartiment médial",
            "prompt": "Sa fonction principale est :",
            "options": [
              "Extension du genou",
              "Adduction de la hanche",
              "Flexion du genou"
            ]
          },
          {
            "name": "Compartiment postérieur",
            "prompt": "Sa fonction principale est :",
            "options": [
              "Extension du genou",
              "Adduction de la hanche",
              "Flexion du genou"
            ]
          }
        ],
        "answers": [
          "Extension du genou",
          "Adduction de la hanche",
          "Flexion du genou"
        ]
      },
      {
        "title": "Les 4 chefs du quadriceps",
        "targets": [
          {
            "name": "Vaste médial",
            "prompt": "Il est situé :",
            "options": [
              "Sur le côté médial de la cuisse",
              "Sur le côté latéral de la cuisse",
              "En superficie et croise la hanche"
            ]
          },
          {
            "name": "Vaste latéral",
            "prompt": "Il est situé :",
            "options": [
              "Sur le côté médial de la cuisse",
              "Sur le côté latéral de la cuisse",
              "En superficie et croise la hanche"
            ]
          },
          {
            "name": "Droit fémoral",
            "prompt": "Il se distingue car :",
            "options": [
              "Il croise la hanche et le genou",
              "Il est médial au fémur",
              "Il est profond sous les vastes"
            ]
          }
        ],
        "answers": [
          "Sur le côté médial de la cuisse",
          "Sur le côté latéral de la cuisse",
          "Il croise la hanche et le genou"
        ]
      },
      {
        "title": "Muscles ischio-jambiers",
        "targets": [
          {
            "name": "Biceps fémoral",
            "prompt": "Il est l’ischio-jambier le plus :",
            "options": [
              "Latéral",
              "Médial superficiel",
              "Médial profond"
            ]
          },
          {
            "name": "Semi-tendineux",
            "prompt": "Il est :",
            "options": [
              "Latéral",
              "Médial superficiel",
              "Médial profond"
            ]
          },
          {
            "name": "Semi-membraneux",
            "prompt": "Il est :",
            "options": [
              "Latéral",
              "Médial superficiel",
              "Médial profond"
            ]
          }
        ],
        "answers": [
          "Latéral",
          "Médial superficiel",
          "Médial profond"
        ]
      }
    ]
  },
  {
    id: "cm4",
    code: "CM4",
    title: "La jambe",
    description: "Du genou à la cheville : articulation du genou (ménisques, ligaments croisés et collatéraux), squelette de la jambe, muscles des compartiments postérieur, latéral et antérieur.",
    cards: [
      { id: "cm4-card-1", front: "Combien d’articulations comprend le genou ?", back: "Deux : fémoro-tibiale (portante) et fémoro-patellaire." },
      { id: "cm4-card-2", front: "Quel est le rôle des ménisques ?", back: "Améliorer la congruence entre les condyles fémoraux et le plateau tibial." },
      { id: "cm4-card-3", front: "Quel ligament est tendu entre l’épicondyle latéral et la tête de la fibula ?", back: "Le ligament collatéral fibulaire." },
      { id: "cm4-card-4", front: "Quel muscle est le plus volumineux de la jambe et forme le mollet ?", back: "Le gastrocnémien." },
      { id: "cm4-card-5", front: "Quels muscles forment le tendon calcanéen (tendon d’Achille) ?", back: "Le gastrocnémien et le soléaire." },
      { id: "cm4-card-6", front: "Quelle est la fonction principale du muscle poplité ?", back: "Déverrouiller le genou en début de flexion (rotation latérale du fémur sur le tibia fixe)." },
      { id: "cm4-card-7", front: "Quel muscle assure l’inversion du pied et soutient les arches ?", back: "Le tibial postérieur." },
      { id: "cm4-card-8", front: "Quel muscle du compartiment latéral assure l’éversion du pied ?", back: "Le long fibulaire." },
      { id: "cm4-card-9", front: "Quel muscle du compartiment antérieur est le plus volumineux ?", back: "Le tibial antérieur." },
      { id: "cm4-card-10", front: "Quel syndrome provient d’une contraction excessive des muscles antérieurs de la jambe ?", back: "Le syndrome de la loge antérieure (périostite)." },
      { id: "cm4-card-11", front: "Quel muscle inconstant chemine sous le chef latéral du gastrocnémien ?", back: "Le muscle plantaire (absent chez 5 à 10% de la population)." },
      { id: "cm4-card-12", front: "Où s’insère le muscle poplité ?", back: "Du condyle fémoral latéral à la face postérieure du tibia proximal." },
      { id: "cm4-card-13", front: "Quelle est la fonction du long fléchisseur de l’hallux ?", back: "Flexion du gros orteil et participation à la flexion plantaire." },
      { id: "cm4-card-14", front: "Quelle est la fonction du tibial postérieur ?", back: "Flexion plantaire, inversion du pied et maintien des arches." },
      { id: "cm4-card-15", front: "Quelle est la fonction du long et du court fibulaires ?", back: "Éversion du pied et maintien des arches latérale et transverse." },
      { id: "cm4-card-16", front: "Quelle est la fonction du long extenseur des orteils ?", back: "Extension des 4 orteils latéraux et flexion dorsale du pied." },
      { id: "cm4-card-17", front: "Quels ligaments renforcent l’articulation tibiofibulaire proximale ?", back: "Un ligament antérieur et un ligament postérieur." },
      { id: "cm4-card-18", front: "Quel nerf innerve les muscles du compartiment postérieur de la jambe ?", back: "Le nerf tibial." },
      { id: "cm4-card-19", front: "Articulation du genou", back: "La plus grande articulation synoviale du corps. 2 articulations : fémoro-tibiale (portante) et fémoro-patellaire (protège le tendon quadricipital)." },
      { id: "cm4-card-20", front: "Ménisques du genou", back: "Médial et latéral ; améliorent la congruence entre les condyles fémoraux et le plateau tibial." },
      { id: "cm4-card-21", front: "Verrouillage du genou", back: "Condyles plats en extension (grande surface de contact avec les ménisques), incurvés en flexion : risque lésionnel méniscal plus important en flexion." },
      { id: "cm4-card-22", front: "Ligament collatéral fibulaire", back: "Tendu entre l’épicondyle latéral du fémur et la tête de la fibula." },
      { id: "cm4-card-23", front: "Ligament collatéral tibial", back: "Intriqué dans la capsule ; tendu entre l’épicondyle médial et le tibia, au-dessus de la patte d’oie." },
      { id: "cm4-card-24", front: "Ligament patellaire", back: "Continuité du tendon quadricipital ; tendu entre la patella et la tubérosité tibiale." },
      { id: "cm4-card-25", front: "Ligament croisé antérieur (LCA)", back: "Face antérieure du tibia (zone intercondylaire) → face latérale de la fosse intercondylaire du fémur. Trajet vers le haut et l’arrière." },
      { id: "cm4-card-26", front: "Ligament croisé postérieur (LCP)", back: "Face postérieure du tibia → face médiale de la fosse intercondylaire du fémur. Trajet vers le haut et l’avant." },
      { id: "cm4-card-27", front: "Ligament transverse du genou", back: "Tendu en avant entre les 2 ménisques." },
      { id: "cm4-card-28", front: "Articulation tibiofibulaire proximale", back: "Ne fait pas partie du genou. Synoviale plane, entre le condyle tibial latéral et la tête de la fibula ; très peu mobile." },
      { id: "cm4-card-29", front: "Membrane interosseuse (jambe)", back: "Unit le tibia et la fibula sur presque toute leur longueur (syndesmose) ; sert d’insertion à plusieurs muscles de la jambe." },
      { id: "cm4-card-30", front: "Tibia", back: "Os porteur, le plus volumineux de la jambe ; ligne soléaire (insertion musculaire) ; extrémité distale = malléole médiale." },
      { id: "cm4-card-31", front: "Fibula", back: "Diaphyse fine, face latérale de la jambe ; extrémité distale = malléole latérale, solidement attachée au tibia." },
      { id: "cm4-card-32", front: "Gastrocnémien", back: "2 chefs (condyles fémoraux) → calcanéus, via le tendon calcanéen. Le plus volumineux muscle de la jambe. Flexion plantaire + flexion du genou." },
      { id: "cm4-card-33", front: "Muscle plantaire", back: "Crête supra-condylaire latérale du fémur → calcanéus. Muscle inconstant (absent chez 5 à 10 % de la population)." },
      { id: "cm4-card-34", front: "Soléaire", back: "Tibia + fibula → calcanéus (tendon calcanéen). Flexion plantaire ; muscle postural important en position debout." },
      { id: "cm4-card-35", front: "Tendon calcanéen (Achille)", back: "Formé par la convergence du gastrocnémien et du soléaire ; s’attache au calcanéus (le talon)." },
      { id: "cm4-card-36", front: "Poplité", back: "Condyle fémoral latéral → tibia proximal (au-dessus de la ligne soléaire). Déverrouille le genou en extension (rotation latérale du fémur)." },
      { id: "cm4-card-37", front: "Long fléchisseur de l’hallux", back: "Face postérieure de la fibula → phalange distale de l’hallux. Le plus latéral des muscles profonds postérieurs." },
      { id: "cm4-card-38", front: "Long fléchisseur des orteils", back: "Face postérieure du tibia (sous la ligne soléaire) → phalanges distales des 4 orteils latéraux. Le plus médial des muscles profonds postérieurs." },
      { id: "cm4-card-39", front: "Tibial postérieur", back: "Membrane interosseuse et os adjacents → tarse médial/métatarsiens. Flexion plantaire, inversion, maintien des arches (avec le long fléchisseur des orteils)." },
      { id: "cm4-card-40", front: "Syndrome de loge postérieure", back: "Douleur médiale et distale du tibia, liée à des tensions répétées sur le tendon du tibial postérieur (fréquent chez les coureurs)." },
      { id: "cm4-card-41", front: "Long fibulaire", back: "Tête et face latérale de la fibula → face plantaire du tarse et du 1er métatarsien. Éversion du pied, maintien des arches." },
      { id: "cm4-card-42", front: "Court fibulaire", back: "Face latérale de la fibula → base du 5e métatarsien. Éversion du pied, stabilise contre l’inversion." },
      { id: "cm4-card-43", front: "Tibial antérieur", back: "Face latérale du tibia → cunéiforme médial et 1er métatarsien. Le plus gros muscle du compartiment antérieur. Flexion dorsale, inversion, support de l’arche médiale." },
      { id: "cm4-card-44", front: "Syndrome de loge antérieure (périostite)", back: "Contraction excessive des muscles du compartiment antérieur ; douleur irradiant vers la cheville et le dos du pied." },
      { id: "cm4-card-45", front: "Long extenseur de l’hallux", back: "Face médiale de la fibula → phalange distale de l’hallux. Extension de l’hallux + flexion dorsale." },
      { id: "cm4-card-46", front: "Long extenseur des orteils", back: "Face médiale de la fibula → phalanges des 4 orteils latéraux. Le plus latéral du compartiment antérieur. Extension des orteils + flexion dorsale." },
      { id: "cm4-card-47", front: "Troisième fibulaire", back: "Tiers distal de la fibula → base du 5e métatarsien. Flexion dorsale + éversion." }
    ],
    quizQuestions: [
      { id: "cm4-q1", prompt: "Le tendon calcanéen relie :", options: ["Gastrocnémien + soléaire au calcanéus", "Quadriceps à la patella", "Ischio-jambiers au tibia", "Tibial antérieur au 1er métatarsien"], answerIndex: 0 },
      { id: "cm4-q2", prompt: "Le ligament croisé antérieur relie :", options: ["Tibia (avant) et fémur (arrière-latéral)", "Fibula et tibia", "Patella et tibia", "Fémur et patella"], answerIndex: 0 },
      { id: "cm4-q3", prompt: "Le compartiment postérieur superficiel comprend :", options: ["Tibial antérieur", "Gastrocnémien, plantaire, soléaire", "Long et court fibulaires", "Long extenseur des orteils"], answerIndex: 1 },
      { id: "cm4-q4", prompt: "La flexion plantaire est assurée principalement par :", options: ["Tibial antérieur", "Triceps sural (gastrocnémien + soléaire)", "Long extenseur de l’hallux", "Poplité"], answerIndex: 1 },
      { id: "cm4-q5", prompt: "Le compartiment latéral de la jambe assure principalement :", options: ["La flexion dorsale", "L’éversion du pied", "L’extension du genou", "La flexion des orteils"], answerIndex: 1 },
      { id: "cm4-q6", prompt: "Le tibial antérieur permet :", options: ["Flexion plantaire", "Flexion dorsale et inversion", "Éversion", "Extension du genou"], answerIndex: 1 },
      { id: "cm4-q7", prompt: "La membrane interosseuse de la jambe relie :", options: ["Fémur et tibia", "Tibia et fibula", "Talus et calcanéus", "Patella et tibia"], answerIndex: 1 },
      { id: "cm4-q8", prompt: "Le nerf fibulaire profond innerve :", options: ["Le compartiment postérieur", "Le compartiment antérieur", "Le compartiment médial de la cuisse", "Les muscles glutéaux"], answerIndex: 1 },
      { id: "cm4-q9", prompt: "Le muscle plantaire est absent chez :", options: ["Tout le monde", "5 à 10% de la population", "50% de la population", "Personne"], answerIndex: 1 },
      { id: "cm4-q10", prompt: "Le nerf fibulaire superficiel innerve :", options: ["Le compartiment antérieur", "Le compartiment latéral", "Le compartiment postérieur", "Les muscles du pied"], answerIndex: 1 },
      { id: "cm4-q11", prompt: "Le tibial postérieur participe au maintien :", options: ["Du tendon calcanéen", "Des arches du pied", "Du ligament croisé antérieur", "De la patella"], answerIndex: 1 },
      { id: "cm4-q12", prompt: "L’articulation tibiofibulaire proximale est :", options: ["Synoviale plane", "Ginglyme", "Sphéroïde", "Synarthrose"], answerIndex: 0 },
      { id: "cm4-q13", prompt: "Le genou est composé de deux articulations :", options: ["Fémoro-tibiale et tibio-fibulaire", "Fémoro-tibiale et fémoro-patellaire", "Fémoro-patellaire et tibio-tarsienne", "Coxo-fémorale et fémoro-tibiale"], answerIndex: 1 },
      { id: "cm4-q14", prompt: "Les ménisques du genou améliorent :", options: ["La vascularisation du cartilage", "La rotation de la hanche", "La congruence entre condyles fémoraux et plateau tibial", "La stabilité de la cheville"], answerIndex: 2 },
      { id: "cm4-q15", prompt: "En flexion du genou, le risque lésionnel méniscal est :", options: ["Plus faible", "Nul", "Identique à l’extension", "Plus important"], answerIndex: 3 },
      { id: "cm4-q16", prompt: "Le ligament collatéral fibulaire relie :", options: ["L’épicondyle médial au tibia", "L’épicondyle latéral à la tête de la fibula", "La patella au tibia", "Le fémur au calcanéus"], answerIndex: 1 },
      { id: "cm4-q17", prompt: "Le ligament collatéral tibial est :", options: ["Totalement indépendant de la capsule", "Intriqué dans la capsule articulaire", "Situé dans l’espace intra-articulaire", "Un ligament de la cheville"], answerIndex: 1 },
      { id: "cm4-q18", prompt: "Le ligament croisé antérieur relie :", options: ["La face postérieure du tibia au fémur médial", "La patella au tibia", "La face antérieure du tibia à la face latérale de la fosse intercondylaire du fémur", "La fibula au tibia"], answerIndex: 2 },
      { id: "cm4-q19", prompt: "Le ligament transverse du genou relie :", options: ["Les deux condyles fémoraux", "Les deux ménisques entre eux", "Le tibia et la fibula", "La patella au fémur"], answerIndex: 1 },
      { id: "cm4-q20", prompt: "L’articulation tibiofibulaire proximale est :", options: ["Une syndesmose", "L’articulation du genou elle-même", "Une articulation sphéroïde", "Une articulation synoviale plane, hors genou"], answerIndex: 3 },
      { id: "cm4-q21", prompt: "La membrane interosseuse de la jambe unit :", options: ["Le fémur et le tibia", "Le tibia et la fibula sur presque toute leur longueur", "Le tibia et le talus", "La fibula et le calcanéus"], answerIndex: 1 },
      { id: "cm4-q22", prompt: "L’extrémité distale du tibia forme :", options: ["La malléole latérale", "Le talus", "La malléole médiale", "Le calcanéus"], answerIndex: 2 },
      { id: "cm4-q23", prompt: "L’extrémité distale de la fibula forme :", options: ["La malléole médiale", "Le plateau tibial", "La malléole latérale", "L’épicondyle"], answerIndex: 2 },
      { id: "cm4-q24", prompt: "Le muscle le plus volumineux et le plus superficiel de la jambe est :", options: ["Le soléaire", "Le tibial postérieur", "Le gastrocnémien", "Le long fibulaire"], answerIndex: 2 },
      { id: "cm4-q25", prompt: "Le tendon calcanéen (tendon d’Achille) est formé par la fusion de :", options: ["Gastrocnémien et plantaire", "Soléaire et poplité", "Gastrocnémien et soléaire", "Tibial postérieur et long fléchisseur"], answerIndex: 2 },
      { id: "cm4-q26", prompt: "Le muscle plantaire est :", options: ["Toujours présent", "Inconstant, absent chez 5 à 10 % de la population", "Le plus volumineux de la jambe", "Un muscle profond antérieur"], answerIndex: 1 },
      { id: "cm4-q27", prompt: "Le soléaire est particulièrement important pour :", options: ["La flexion dorsale", "La posture en position debout", "L’extension du genou", "L’inversion seule"], answerIndex: 1 },
      { id: "cm4-q28", prompt: "Le muscle poplité permet notamment de :", options: ["Verrouiller le genou", "Déverrouiller le genou en extension", "Fléchir la hanche", "Étendre la cheville"], answerIndex: 1 },
      { id: "cm4-q29", prompt: "Le long fléchisseur de l’hallux est :", options: ["Le plus médial des muscles profonds postérieurs", "Le plus latéral des muscles profonds postérieurs", "Le plus superficiel", "Un muscle antérieur"], answerIndex: 1 },
      { id: "cm4-q30", prompt: "Le long fléchisseur des orteils naît :", options: ["Sur la fibula", "Sur le fémur", "Sur la face postérieure du tibia, sous la ligne soléaire", "Sur le calcanéus"], answerIndex: 2 },
      { id: "cm4-q31", prompt: "Le tibial postérieur participe, avec le long fléchisseur des orteils, à :", options: ["La flexion dorsale", "Maintenir les arches longitudinales du pied", "L’extension du genou", "La rotation de la hanche"], answerIndex: 1 },
      { id: "cm4-q32", prompt: "Le syndrome de loge postérieure de la jambe touche surtout le tendon :", options: ["Calcanéen", "Du tibial postérieur", "Du long fibulaire", "Du tibial antérieur"], answerIndex: 1 },
      { id: "cm4-q33", prompt: "Le compartiment latéral de la jambe comprend :", options: ["Le tibial antérieur et les extenseurs", "Le gastrocnémien et le soléaire", "Le long et le court fibulaires", "Le poplité et le tibial postérieur"], answerIndex: 2 },
      { id: "cm4-q34", prompt: "La fonction commune des muscles fibulaires (long et court) est :", options: ["L’inversion du pied", "L’éversion du pied", "La flexion du genou", "L’extension de l’hallux"], answerIndex: 1 },
      { id: "cm4-q35", prompt: "Le muscle le plus gros du compartiment antérieur de la jambe est :", options: ["Le long extenseur des orteils", "Le troisième fibulaire", "Le tibial antérieur", "Le long extenseur de l’hallux"], answerIndex: 2 },
      { id: "cm4-q36", prompt: "Le syndrome de loge antérieure (périostite) provient :", options: ["D’une lésion du ligament croisé", "D’une contraction excessive des muscles du compartiment antérieur", "D’une entorse de cheville", "D’une tendinite calcanéenne"], answerIndex: 1 },
      { id: "cm4-q37", prompt: "Le tibial antérieur assure le support de :", options: ["L’arche latérale", "L’arche transverse seule", "L’arche médiale du pied", "Aucune arche"], answerIndex: 2 },
      { id: "cm4-q38", prompt: "Le troisième fibulaire se termine :", options: ["Sur l’hallux", "Sur le calcanéus", "Sur le tibia", "Sur la base du 5e métatarsien"], answerIndex: 3 },
      { id: "cm4-q39", prompt: "Le long extenseur des orteils est __ du compartiment antérieur :", options: ["Le plus médial", "Le plus profond", "Le plus latéral", "Le plus proximal"], answerIndex: 2 },
      { id: "cm4-q40", prompt: "La flexion dorsale de la cheville est assurée principalement par les muscles du compartiment :", options: ["Postérieur superficiel", "Postérieur profond", "Latéral", "Antérieur"], answerIndex: 3 }
    ],
    associationPairs: [
      { term: "Gastrocnémien", definition: "Muscle le plus volumineux du mollet" },
      { term: "Tibial antérieur", definition: "Assure la flexion dorsale et l’inversion" },
      { term: "Long fibulaire", definition: "Assure l’éversion du pied" },
      { term: "Poplité", definition: "Déverrouille le genou en début de flexion" },
      { term: "Ligament croisé antérieur", definition: "Limite le tiroir antérieur du tibia" },
      { term: "Ménisques", definition: "Améliorent la congruence articulaire du genou" },
      { term: "Long fléchisseur de l’hallux", definition: "Fléchit le gros orteil, actif en course" },
      { term: "Muscle plantaire", definition: "Muscle inconstant sous le gastrocnémien" },
      { term: "Genou", definition: "Plus grande articulation synoviale du corps" },
      { term: "Ligament croisé postérieur", definition: "Tibia postérieur vers fémur médial" },
      { term: "Ligament patellaire", definition: "Continuité du tendon quadricipital" },
      { term: "Membrane interosseuse", definition: "Syndesmose tibia-fibula" },
      { term: "Malléole médiale", definition: "Extrémité distale du tibia" },
      { term: "Malléole latérale", definition: "Extrémité distale de la fibula" },
      { term: "Soléaire", definition: "Muscle postural clé en station debout" },
      { term: "Tendon calcanéen", definition: "Fusion gastrocnémien + soléaire" },
      { term: "Tibial postérieur", definition: "Inversion + maintien des arches" },
      { term: "Long extenseur de l’hallux", definition: "Extension du gros orteil" },
      { term: "Syndrome de loge antérieure", definition: "Périostite liée au tibial antérieur" },
      { term: "Syndrome de loge postérieure", definition: "Douleur liée au tibial postérieur" },
      { term: "Ligne soléaire", definition: "Insertion du soléaire sur le tibia" },
      { term: "Articulation tibiofibulaire proximale", definition: "Synoviale plane, hors genou" }
    ],
    labelingExercises: [
      {
        "title": "Compartiments de la jambe",
        "targets": [
          {
            "name": "Compartiment antérieur",
            "prompt": "Il assure surtout :",
            "options": [
              "Flexion dorsale du pied",
              "Éversion du pied",
              "Flexion plantaire du pied"
            ]
          },
          {
            "name": "Compartiment latéral",
            "prompt": "Il assure surtout :",
            "options": [
              "Flexion dorsale du pied",
              "Éversion du pied",
              "Flexion plantaire du pied"
            ]
          },
          {
            "name": "Compartiment postérieur superficiel",
            "prompt": "Il assure surtout :",
            "options": [
              "Flexion dorsale du pied",
              "Éversion du pied",
              "Flexion plantaire du pied"
            ]
          }
        ],
        "answers": [
          "Flexion dorsale du pied",
          "Éversion du pied",
          "Flexion plantaire du pied"
        ]
      },
      {
        "title": "Ligaments du genou",
        "targets": [
          {
            "name": "Ligament croisé antérieur",
            "prompt": "Il limite surtout :",
            "options": [
              "Le tiroir antérieur du tibia",
              "Le bâillement médial",
              "Le bâillement latéral"
            ]
          },
          {
            "name": "Ligament collatéral tibial",
            "prompt": "Il est situé :",
            "options": [
              "Sur le côté médial du genou",
              "Sur le côté latéral du genou",
              "Dans l’échancrure intercondylaire"
            ]
          },
          {
            "name": "Ligament collatéral fibulaire",
            "prompt": "Il est tendu vers :",
            "options": [
              "La tête de la fibula",
              "La tubérosité tibiale",
              "La patella"
            ]
          }
        ],
        "answers": [
          "Le tiroir antérieur du tibia",
          "Sur le côté médial du genou",
          "La tête de la fibula"
        ]
      },
      {
        "title": "Muscles superficiels postérieurs",
        "targets": [
          {
            "name": "Gastrocnémien",
            "prompt": "Il :",
            "options": [
              "Croise le genou et forme le mollet",
              "Est profond et postural",
              "Est inconstant et très grêle"
            ]
          },
          {
            "name": "Soléaire",
            "prompt": "Il :",
            "options": [
              "Croise le genou et forme le mollet",
              "Est profond et postural",
              "Est inconstant et très grêle"
            ]
          },
          {
            "name": "Muscle plantaire",
            "prompt": "Il :",
            "options": [
              "Croise le genou et forme le mollet",
              "Est profond et postural",
              "Est inconstant et très grêle"
            ]
          }
        ],
        "answers": [
          "Croise le genou et forme le mollet",
          "Est profond et postural",
          "Est inconstant et très grêle"
        ]
      }
    ]
  },
  {
    id: "cm5",
    code: "CM5",
    title: "Le pied",
    description: "Sous la cheville : squelette du tarse, du métatarse et des phalanges, articulations de la cheville et du pied, muscles intrinsèques du pied en 4 couches plantaires.",
    cards: [
      { id: "cm5-card-1", front: "Quel os du tarse s’articule avec le tibia et la fibula ?", back: "Le talus." },
      { id: "cm5-card-2", front: "Quel est le plus grand os du tarse ?", back: "Le calcanéus." },
      { id: "cm5-card-3", front: "Combien de cunéiformes possède le pied ?", back: "Trois (médial, intermédiaire, latéral)." },
      { id: "cm5-card-4", front: "Quel est le rôle du ligament deltoïde (collatéral tibial) ?", back: "Stabiliser la cheville médialement et limiter l’éversion excessive." },
      { id: "cm5-card-5", front: "Quel ligament est le plus souvent lésé lors d’une entorse de cheville ?", back: "Le talofibulaire antérieur (ligament latéral)." },
      { id: "cm5-card-6", front: "Qu’est-ce que l’inversion du pied ?", back: "Supination + adduction + flexion plantaire." },
      { id: "cm5-card-7", front: "Qu’est-ce que l’éversion du pied ?", back: "Pronation + abduction + flexion dorsale." },
      { id: "cm5-card-8", front: "Quelle structure maintient les arches longitudinales du pied ?", back: "L’aponévrose plantaire." },
      { id: "cm5-card-9", front: "Quelle est une cause fréquente de la fasciite plantaire ?", back: "L’inflammation de l’aponévrose plantaire au niveau de son insertion calcanéenne." },
      { id: "cm5-card-10", front: "Combien de couches musculaires compte la plante du pied ?", back: "Quatre." },
      { id: "cm5-card-11", front: "Quelle est la composition de la 1ère couche musculaire plantaire ?", back: "Abducteur de l’hallux, court fléchisseur des orteils et abducteur du petit orteil." },
      { id: "cm5-card-12", front: "Quelle est la fonction des lombricaux ?", back: "Flexion des articulations métatarso-phalangiennes et extension des interphalangiennes." },
      { id: "cm5-card-13", front: "Quel muscle forme le bord médial du pied ?", back: "L’abducteur de l’hallux." },
      { id: "cm5-card-14", front: "Qu’est-ce que le tarse proximal ?", back: "Le talus et le calcanéus." },
      { id: "cm5-card-15", front: "Qu’est-ce que le tarse distal ?", back: "Les 3 cunéiformes et le cuboïde." },
      { id: "cm5-card-16", front: "Quelles articulations permettent l’inversion et l’éversion du pied ?", back: "Les articulations intertarsiennes (subtalaire, talo-calcanéo-naviculaire, calcanéo-cuboïdienne)." },
      { id: "cm5-card-17", front: "Quel nerf innerve la majorité des muscles plantaires ?", back: "Le nerf plantaire latéral, issu du nerf tibial." },
      { id: "cm5-card-18", front: "Talus", back: "Os le plus haut du tarse ; s’articule avec le tibia et la fibula pour former la cheville." },
      { id: "cm5-card-19", front: "Calcanéus", back: "Le plus grand os du tarse ; forme l’os du talon." },
      { id: "cm5-card-20", front: "Os naviculaire", back: "Os intermédiaire du tarse, situé sur le bord médial du pied." },
      { id: "cm5-card-21", front: "Tarse distal", back: "3 cunéiformes (médial, intermédiaire, latéral) + le cuboïde (le plus latéral)." },
      { id: "cm5-card-22", front: "Métatarsiens", back: "Numérotés de 1 (médial) à 5 (latéral) ; base proximale, diaphyse, tête distale articulée avec une phalange." },
      { id: "cm5-card-23", front: "Phalanges du pied", back: "2 pour l’hallux (proximale, distale), 3 pour les 4 autres orteils (proximale, moyenne, distale)." },
      { id: "cm5-card-24", front: "Articulation tibiotarsienne (cheville)", back: "Synoviale ginglyme (trochléenne) entre talus, tibia et fibula. Permet surtout la flexion-extension." },
      { id: "cm5-card-25", front: "Mortaise tibiofibulaire", back: "Formée par les extrémités distales du tibia et de la fibula ; articulée avec la trochlée du talus." },
      { id: "cm5-card-26", front: "Ligament collatéral tibial (deltoïde)", back: "Ligament médial de la cheville, grand et solide, forme triangulaire. 4 faisceaux : tibiocalcanéen, tibionaviculaire, tibiotalaire antérieur et postérieur." },
      { id: "cm5-card-27", front: "Ligament collatéral fibulaire (cheville)", back: "3 ligaments courts et séparés : talofibulaire antérieur, talofibulaire postérieur, calcanéofibulaire. Faible, souvent lésé." },
      { id: "cm5-card-28", front: "Entorse de cheville", back: "Mécanisme lésionnel le plus fréquent : l’inversion du pied. Le talofibulaire antérieur est souvent le premier ligament à se déchirer." },
      { id: "cm5-card-29", front: "Inversion du pied", back: "Supination + adduction + flexion plantaire. La plante du pied regarde médialement." },
      { id: "cm5-card-30", front: "Éversion du pied", back: "Pronation + abduction + flexion dorsale. La plante du pied regarde latéralement." },
      { id: "cm5-card-31", front: "Articulations intertarsiennes principales", back: "Calcanéo-cuboïdienne, talo-calcanéo-naviculaire, subtalaire (talo-calcanéenne)." },
      { id: "cm5-card-32", front: "Articulations tarsométatarsiennes", back: "Synoviales planes ; mouvements de glissement limités, participent à l’inversion et l’éversion." },
      { id: "cm5-card-33", front: "Articulations métatarsophalangiennes", back: "Synoviales ellipsoïdales (condylaires) ; flexion/extension, abduction/adduction, circumduction." },
      { id: "cm5-card-34", front: "Articulations interphalangiennes (pied)", back: "Synoviales ginglymes (trochléennes) ; permettent surtout flexion et extension." },
      { id: "cm5-card-35", front: "Court extenseur des orteils", back: "Calcanéus → tendons du long extenseur des orteils (orteils 2 à 4). Extension des orteils 2 à 4." },
      { id: "cm5-card-36", front: "Court extenseur de l’hallux", back: "Calcanéus → phalange proximale de l’hallux. Extension de l’hallux." },
      { id: "cm5-card-37", front: "Abducteur de l’hallux", back: "Calcanéus → phalange proximale de l’hallux (face médiale). Forme le bord médial du pied. Abduction et flexion de l’hallux." },
      { id: "cm5-card-38", front: "Court fléchisseur des orteils", back: "Calcanéus/aponévrose plantaire → phalanges intermédiaires des 4 orteils latéraux. Flexion des orteils latéraux." },
      { id: "cm5-card-39", front: "Abducteur du petit orteil", back: "Calcanéus → phalange proximale du petit orteil. Forme le bord latéral du pied." },
      { id: "cm5-card-40", front: "Carré plantaire", back: "2 chefs sur le calcanéus → tendon du long fléchisseur des orteils. Participe à la flexion des orteils latéraux." },
      { id: "cm5-card-41", front: "Lombricaux", back: "4 muscles : tendons du long fléchisseur des orteils → tendons du long extenseur des orteils. Flexion des métatarso-phalangiennes + extension des interphalangiennes." },
      { id: "cm5-card-42", front: "Court fléchisseur de l’hallux", back: "Cuboïde/cunéiforme latéral et tendon du tibial postérieur → phalange proximale de l’hallux. Flexion de l’hallux." },
      { id: "cm5-card-43", front: "Adducteur de l’hallux", back: "2 chefs (oblique et transverse) → phalange proximale de l’hallux (face latérale). Adduction de l’hallux." },
      { id: "cm5-card-44", front: "Court fléchisseur du petit orteil", back: "Base du 5e métatarsien → phalange proximale du petit orteil. Flexion du petit orteil." },
      { id: "cm5-card-45", front: "Interosseux dorsaux", back: "4 muscles entre les métatarsiens → base des phalanges proximales 2-4. Abduction des orteils 2 à 4." },
      { id: "cm5-card-46", front: "Interosseux plantaires", back: "3 muscles sur les métatarsiens 3 à 5 → sangle des extenseurs. Adduction des orteils 3 à 5." },
      { id: "cm5-card-47", front: "Aponévrose plantaire", back: "Bandes fibreuses tendues du calcanéus aux orteils. Maintient les arches longitudinales du pied et protège la plante." },
      { id: "cm5-card-48", front: "Fasciite plantaire", back: "Inflammation de l’aponévrose plantaire, notamment à son insertion calcanéenne ; fréquente chez les coureurs." },
      { id: "cm5-card-49", front: "Fonction générale des muscles plantaires", back: "Agissent comme un ensemble fléchisseur des orteils ; maintiennent les arches, l’équilibre et les appuis au sol." }
    ],
    quizQuestions: [
      { id: "cm5-q1", prompt: "L’articulation tibiotarsienne (la cheville) est une articulation :", options: ["Sphéroïde", "Ginglyme (charnière)", "Plane", "En selle"], answerIndex: 1 },
      { id: "cm5-q2", prompt: "Le ligament latéral de la cheville est composé de :", options: ["1 ligament", "2 ligaments", "3 ligaments", "4 ligaments"], answerIndex: 2 },
      { id: "cm5-q3", prompt: "L’inversion du pied combine :", options: ["Pronation, abduction, flexion dorsale", "Supination, adduction, flexion plantaire", "Flexion et extension uniquement", "Rotation médiale uniquement"], answerIndex: 1 },
      { id: "cm5-q4", prompt: "Le tarse distal comprend :", options: ["Talus et calcanéus", "3 cunéiformes et le cuboïde", "Les métatarsiens", "Les phalanges"], answerIndex: 1 },
      { id: "cm5-q5", prompt: "La fasciite plantaire touche :", options: ["Le tendon calcanéen", "L’aponévrose plantaire", "Le ligament deltoïde", "Le talus"], answerIndex: 1 },
      { id: "cm5-q6", prompt: "La première couche musculaire plantaire comprend :", options: ["Carré plantaire et lombricaux", "Abducteur de l’hallux, court fléchisseur des orteils, abducteur du petit orteil", "Interosseux dorsaux et plantaires", "Court fléchisseur de l’hallux"], answerIndex: 1 },
      { id: "cm5-q7", prompt: "Les articulations métatarsophalangiennes sont de type :", options: ["Ginglyme", "Ellipsoïde (condylaire)", "Plane", "Sphéroïde"], answerIndex: 1 },
      { id: "cm5-q8", prompt: "Le nerf tibial innerve principalement :", options: ["Les muscles dorsaux du pied", "Les muscles plantaires du pied", "Le quadriceps", "Les ischio-jambiers"], answerIndex: 1 },
      { id: "cm5-q9", prompt: "Le tarse proximal comprend :", options: ["Cunéiformes et cuboïde", "Talus et calcanéus", "Les métatarsiens", "Les phalanges"], answerIndex: 1 },
      { id: "cm5-q10", prompt: "Les lombricaux permettent :", options: ["Extension des MTP et flexion des IP", "Flexion des MTP et extension des IP", "Adduction uniquement", "Abduction uniquement"], answerIndex: 1 },
      { id: "cm5-q11", prompt: "L’abducteur de l’hallux forme :", options: ["Le bord latéral du pied", "Le bord médial du pied", "La voûte transverse", "Le talon"], answerIndex: 1 },
      { id: "cm5-q12", prompt: "Les articulations intertarsiennes permettent notamment :", options: ["La flexion du genou", "L’inversion et l’éversion du pied", "L’extension de la hanche", "La flexion des doigts"], answerIndex: 1 },
      { id: "cm5-q13", prompt: "Le talus est :", options: ["Le plus grand os du tarse", "L’os du tarse qui s’articule avec le tibia et la fibula", "Un métatarsien", "Une phalange"], answerIndex: 1 },
      { id: "cm5-q14", prompt: "Le calcanéus est :", options: ["Le plus haut os du tarse", "Le plus grand os du tarse, il forme le talon", "Un os du tarse distal", "Un métatarsien"], answerIndex: 1 },
      { id: "cm5-q15", prompt: "L’os naviculaire est situé :", options: ["Au bord latéral du pied", "Sous le talus", "Sur le bord médial du pied, entre tarse proximal et distal", "Dans le tarse proximal"], answerIndex: 2 },
      { id: "cm5-q16", prompt: "Le tarse distal comprend :", options: ["Le talus et le calcanéus", "3 cunéiformes et le cuboïde", "Les métatarsiens", "Les phalanges"], answerIndex: 1 },
      { id: "cm5-q17", prompt: "Les métatarsiens sont numérotés :", options: ["De 1 (latéral) à 5 (médial)", "De 1 (médial) à 5 (latéral)", "De A à E", "Aléatoirement"], answerIndex: 1 },
      { id: "cm5-q18", prompt: "L’hallux possède :", options: ["3 phalanges", "1 phalange", "2 phalanges", "4 phalanges"], answerIndex: 2 },
      { id: "cm5-q19", prompt: "L’articulation tibiotarsienne (cheville) est une articulation :", options: ["Sphéroïde", "En selle", "Plane", "Synoviale ginglyme (trochléenne)"], answerIndex: 3 },
      { id: "cm5-q20", prompt: "La mortaise tibiofibulaire s’articule avec :", options: ["Le calcanéus", "La trochlée du talus", "Le naviculaire", "Le cuboïde"], answerIndex: 1 },
      { id: "cm5-q21", prompt: "Le ligament collatéral tibial (deltoïde) est :", options: ["Petit et faible", "Composé de 3 ligaments séparés", "Grand et solide, en forme triangulaire", "Absent chez l’humain"], answerIndex: 2 },
      { id: "cm5-q22", prompt: "Le ligament collatéral fibulaire de la cheville est :", options: ["Le plus solide de la cheville", "Faible et souvent lésé", "Intra-articulaire", "Un ligament du genou"], answerIndex: 1 },
      { id: "cm5-q23", prompt: "Le mécanisme lésionnel le plus fréquent de l’entorse de cheville est :", options: ["L’éversion du pied", "La flexion dorsale seule", "L’inversion du pied", "La rotation du genou"], answerIndex: 2 },
      { id: "cm5-q24", prompt: "Lors d’une entorse de cheville, le ligament le plus souvent lésé en premier est :", options: ["Le talofibulaire postérieur", "Le calcanéofibulaire", "Le deltoïde", "Le talofibulaire antérieur"], answerIndex: 3 },
      { id: "cm5-q25", prompt: "L’inversion du pied combine :", options: ["Pronation, abduction, flexion dorsale", "Supination, adduction, flexion plantaire", "Flexion et extension seules", "Rotation médiale et latérale seules"], answerIndex: 1 },
      { id: "cm5-q26", prompt: "L’éversion du pied combine :", options: ["Supination, adduction, flexion plantaire", "Pronation, abduction, flexion dorsale", "Adduction seule", "Rotation seule"], answerIndex: 1 },
      { id: "cm5-q27", prompt: "Les articulations métatarsophalangiennes sont de type :", options: ["Synoviales ginglymes", "Synoviales ellipsoïdales (condylaires)", "Sphéroïdes", "Planes"], answerIndex: 1 },
      { id: "cm5-q28", prompt: "Les articulations interphalangiennes du pied sont de type :", options: ["Ellipsoïdales", "Sphéroïdes", "Synoviales ginglymes (trochléennes)", "En selle"], answerIndex: 2 },
      { id: "cm5-q29", prompt: "Le court extenseur des orteils naît sur :", options: ["Le tibia", "La fibula", "Le calcanéus", "Le naviculaire"], answerIndex: 2 },
      { id: "cm5-q30", prompt: "Dans la 1ère couche plantaire, l’abducteur de l’hallux forme :", options: ["Le bord latéral du pied", "Le bord médial du pied", "Le centre de la voûte", "Le dos du pied"], answerIndex: 1 },
      { id: "cm5-q31", prompt: "Dans la 1ère couche plantaire, l’abducteur du petit orteil forme :", options: ["Le bord médial du pied", "Le centre du pied", "Le bord latéral du pied", "Le dos du pied"], answerIndex: 2 },
      { id: "cm5-q32", prompt: "Le carré plantaire (2e couche) se termine sur :", options: ["Le calcanéus", "Le tendon du long fléchisseur des orteils", "Les phalanges directement", "Le tibial postérieur"], answerIndex: 1 },
      { id: "cm5-q33", prompt: "Les lombricaux relient les tendons :", options: ["Du tibial antérieur au tibial postérieur", "Du long fibulaire au court fibulaire", "Du long fléchisseur des orteils à ceux du long extenseur des orteils", "Du gastrocnémien au soléaire"], answerIndex: 2 },
      { id: "cm5-q34", prompt: "Dans la 3e couche plantaire, l’adducteur de l’hallux possède :", options: ["3 chefs", "1 seul chef", "2 chefs (oblique et transverse)", "4 chefs"], answerIndex: 2 },
      { id: "cm5-q35", prompt: "La 4e couche plantaire (profonde) comprend :", options: ["Les lombricaux et le carré plantaire", "Les interosseux dorsaux et plantaires", "L’abducteur de l’hallux", "Le court extenseur des orteils"], answerIndex: 1 },
      { id: "cm5-q36", prompt: "Les interosseux dorsaux assurent surtout :", options: ["L’adduction des orteils 3 à 5", "L’extension de l’hallux", "L’abduction des orteils 2 à 4", "La flexion plantaire globale"], answerIndex: 2 },
      { id: "cm5-q37", prompt: "L’aponévrose plantaire relie :", options: ["Le tibia au calcanéus", "Le calcanéus aux orteils", "La fibula aux orteils", "Le talus au naviculaire"], answerIndex: 1 },
      { id: "cm5-q38", prompt: "La fasciite plantaire est une inflammation fréquente :", options: ["Chez les nageurs, au genou", "Chez les coureurs, à l’insertion calcanéenne de l’aponévrose", "Au niveau du tendon d’Achille uniquement", "Chez les cyclistes, à la hanche"], answerIndex: 1 }
    ],
    associationPairs: [
      { term: "Talus", definition: "S’articule avec le tibia et la fibula" },
      { term: "Calcanéus", definition: "Le plus grand os du tarse" },
      { term: "Ligament deltoïde", definition: "Ligament médial de la cheville" },
      { term: "Talofibulaire antérieur", definition: "Ligament le plus souvent lésé en entorse" },
      { term: "Aponévrose plantaire", definition: "Maintient les arches du pied" },
      { term: "Interosseux", definition: "Muscles profonds assurant l’abduction/adduction des orteils" },
      { term: "Abducteur de l’hallux", definition: "Forme le bord médial du pied" },
      { term: "Lombricaux", definition: "Flexion des MTP, extension des IP" },
      { term: "Naviculaire", definition: "Bord médial, tarse intermédiaire" },
      { term: "Cuboïde", definition: "Le plus latéral du tarse distal" },
      { term: "Cheville (tibiotarsienne)", definition: "Articulation ginglyme" },
      { term: "Inversion", definition: "Supination + adduction + flexion plantaire" },
      { term: "Éversion", definition: "Pronation + abduction + flexion dorsale" },
      { term: "Métatarsophalangiennes", definition: "Articulations ellipsoïdales" },
      { term: "Interphalangiennes (pied)", definition: "Articulations ginglymes" },
      { term: "Abducteur du petit orteil", definition: "Forme le bord latéral du pied" },
      { term: "Carré plantaire", definition: "Renforce le long fléchisseur des orteils" },
      { term: "Adducteur de l’hallux", definition: "2 chefs, oblique et transverse" },
      { term: "Interosseux dorsaux", definition: "Abduction des orteils 2 à 4" },
      { term: "Interosseux plantaires", definition: "Adduction des orteils 3 à 5" },
      { term: "Fasciite plantaire", definition: "Inflammation de l’aponévrose plantaire" }
    ],
    labelingExercises: [
      {
        "title": "Os du tarse",
        "targets": [
          {
            "name": "Talus",
            "prompt": "Il s’articule en haut avec :",
            "options": [
              "Tibia et fibula",
              "Les métatarsiens",
              "Les phalanges"
            ]
          },
          {
            "name": "Calcanéus",
            "prompt": "Il est :",
            "options": [
              "Le plus grand os du tarse",
              "Un os du tarse distal",
              "L’os qui porte la malléole médiale"
            ]
          },
          {
            "name": "Naviculaire",
            "prompt": "Il est situé :",
            "options": [
              "En avant du talus",
              "Sous le calcanéus",
              "Entre les phalanges"
            ]
          }
        ],
        "answers": [
          "Tibia et fibula",
          "Le plus grand os du tarse",
          "En avant du talus"
        ]
      },
      {
        "title": "Mouvements du pied",
        "targets": [
          {
            "name": "Inversion",
            "prompt": "Elle combine :",
            "options": [
              "Supination, adduction, flexion plantaire",
              "Pronation, abduction, flexion dorsale",
              "Extension des orteils"
            ]
          },
          {
            "name": "Éversion",
            "prompt": "Elle combine :",
            "options": [
              "Supination, adduction, flexion plantaire",
              "Pronation, abduction, flexion dorsale",
              "Extension des orteils"
            ]
          },
          {
            "name": "Flexion plantaire",
            "prompt": "Elle rapproche :",
            "options": [
              "La plante du pied du sol",
              "Le dos du pied du tibia",
              "Le gros orteil du 2e orteil"
            ]
          }
        ],
        "answers": [
          "Supination, adduction, flexion plantaire",
          "Pronation, abduction, flexion dorsale",
          "La plante du pied du sol"
        ]
      },
      {
        "title": "Couches musculaires plantaires",
        "targets": [
          {
            "name": "1ère couche",
            "prompt": "Elle comprend notamment :",
            "options": [
              "Abducteur de l’hallux et court fléchisseur des orteils",
              "Carré plantaire et lombricaux",
              "Interosseux dorsaux et plantaires"
            ]
          },
          {
            "name": "2e couche",
            "prompt": "Elle comprend notamment :",
            "options": [
              "Abducteur de l’hallux et court fléchisseur des orteils",
              "Carré plantaire et lombricaux",
              "Interosseux dorsaux et plantaires"
            ]
          },
          {
            "name": "4e couche",
            "prompt": "Elle comprend notamment :",
            "options": [
              "Abducteur de l’hallux et court fléchisseur des orteils",
              "Carré plantaire et lombricaux",
              "Interosseux dorsaux et plantaires"
            ]
          }
        ],
        "answers": [
          "Abducteur de l’hallux et court fléchisseur des orteils",
          "Carré plantaire et lombricaux",
          "Interosseux dorsaux et plantaires"
        ]
      }
    ]
  }
];

/* ---------- Labeling diagrams (schematic, click-to-identify) ---------- */
/* The real course images (assets/diagrams) are pre-labeled atlas figures (kept as
   study reference in the diagram panel above the exercises). They already show the
   answer text, so they can't be used for a blind "click to identify" quiz. These
   small schematic shapes are drawn from scratch so clicking a pin is a genuine test. */

function bandIcon(kind, cx, cy) {
  switch (kind) {
    case "long":
      return `<circle cx="${cx}" cy="${cy - 52}" r="13" fill="var(--text)" opacity="0.55"/><rect x="${cx - 6}" y="${cy - 48}" width="12" height="96" fill="var(--text)" opacity="0.55"/><circle cx="${cx}" cy="${cy + 52}" r="13" fill="var(--text)" opacity="0.55"/>`;
    case "short":
      return `<circle cx="${cx - 12}" cy="${cy - 6}" r="15" fill="var(--text)" opacity="0.5"/><circle cx="${cx + 13}" cy="${cy - 2}" r="13" fill="var(--text)" opacity="0.5"/><circle cx="${cx - 1}" cy="${cy + 17}" r="14" fill="var(--text)" opacity="0.5"/>`;
    case "flat":
      return `<rect x="${cx - 42}" y="${cy - 15}" width="84" height="30" rx="9" fill="var(--text)" opacity="0.55"/>`;
    case "spine":
      return `<line x1="${cx}" y1="${cy - 55}" x2="${cx}" y2="${cy + 55}" stroke="var(--text)" stroke-width="7" stroke-opacity="0.5" stroke-linecap="round"/>${[-40, -20, 0, 20, 40].map((o) => `<circle cx="${cx}" cy="${cy + o}" r="6" fill="var(--panel)"/>`).join("")}`;
    case "ribcage":
      return `<rect x="${cx - 38}" y="${cy - 40}" width="76" height="80" rx="30" fill="none" stroke="var(--text)" stroke-opacity="0.55" stroke-width="5"/>${[-18, 0, 18].map((o) => `<path d="M ${cx - 30} ${cy + o} Q ${cx} ${cy + o + 10} ${cx + 30} ${cy + o}" stroke="var(--text)" stroke-opacity="0.4" stroke-width="3" fill="none"/>`).join("")}`;
    case "limb":
      return `<line x1="${cx - 25}" y1="${cy - 45}" x2="${cx}" y2="${cy}" stroke="var(--text)" stroke-opacity="0.55" stroke-width="10" stroke-linecap="round"/><line x1="${cx}" y1="${cy}" x2="${cx - 15}" y2="${cy + 50}" stroke="var(--text)" stroke-opacity="0.55" stroke-width="10" stroke-linecap="round"/>`;
    default:
      return "";
  }
}

function bandsDiagram(count, icons) {
  const bandW = 108;
  const bandH = 176;
  const gap = 6;
  const totalW = count * bandW + (count - 1) * gap;
  const colors = ["#5eead4", "#f0b429", "#c084fc"];
  let shapes = "";
  const pins = [];
  for (let i = 0; i < count; i += 1) {
    const x = i * (bandW + gap);
    const color = colors[i % colors.length];
    shapes += `<rect x="${x}" y="0" width="${bandW}" height="${bandH}" rx="16" fill="${color}" opacity="0.14" stroke="${color}" stroke-opacity="0.55" stroke-width="1.5"/>`;
    if (icons && icons[i]) shapes += bandIcon(icons[i], x + bandW / 2, bandH / 2);
    pins.push({ x: ((x + bandW / 2) / totalW) * 100, y: 50 });
  }
  return { svg: `<svg viewBox="0 0 ${totalW} ${bandH}" preserveAspectRatio="xMidYMid meet">${shapes}</svg>`, pins };
}

const BODY_SILHOUETTE_SVG = `<svg viewBox="0 0 200 400" preserveAspectRatio="xMidYMid meet">
  <circle cx="100" cy="42" r="28" fill="var(--text)" opacity="0.16"/>
  <rect x="72" y="74" width="56" height="110" rx="20" fill="var(--text)" opacity="0.16"/>
  <rect x="38" y="82" width="26" height="96" rx="13" fill="var(--text)" opacity="0.12"/>
  <rect x="136" y="82" width="26" height="96" rx="13" fill="var(--text)" opacity="0.12"/>
  <rect x="76" y="182" width="20" height="130" rx="10" fill="var(--text)" opacity="0.16"/>
  <rect x="104" y="182" width="20" height="130" rx="10" fill="var(--text)" opacity="0.16"/>
</svg>`;

function attachLabelingDiagrams() {
  const configs = {
    cm1: [
      {},
      { silhouette: true, pins: [{ x: 50, y: 8 }, { x: 50, y: 32 }, { x: 80, y: 20 }] },
      { icons: ["spine", "ribcage", "limb"] },
      { icons: ["long", "short", "flat"] },
      null
    ],
    cm2: [{}, {}, {}],
    cm3: [{}, {}, {}],
    cm4: [{}, {}, {}],
    cm5: [{}, null, {}]
  };
  chapters.forEach((chapter) => {
    const chapterConfig = configs[chapter.id];
    if (!chapterConfig) return;
    chapter.labelingExercises.forEach((exercise, index) => {
      const cfg = chapterConfig[index];
      if (!cfg) return;
      if (cfg.silhouette) {
        exercise.diagram = { kind: "silhouette", svg: BODY_SILHOUETTE_SVG, pins: cfg.pins };
      } else {
        const built = bandsDiagram(exercise.targets.length, cfg.icons);
        exercise.diagram = { kind: "bands", svg: built.svg, pins: built.pins };
      }
    });
  });
}
attachLabelingDiagrams();

let state = loadState();
let flashcardState = { currentCardId: null, showAnswer: false, showNote: false, mode: "normal", forceAll: false };
let quizSession = null;
let associationSession = null;
let examSession = null;
let diagramState = {};
let labelingAnswers = {};
let activeLabelPin = null;
let labelingChecked = false;

const COURSE_DIAGRAMS = {
  cm1: [
    { id: "plans", title: "Les plans anatomiques", caption: "Plan sagittal, frontal et transversal", image: "assets/diagrams/cm1-plans.png" },
    { id: "mouvements", title: "Les mouvements", caption: "Flexion, extension, abduction et adduction", image: "assets/diagrams/cm1-mouvements.png" }
  ],
  cm2: [
    { id: "pelvis", title: "Ceinture pelvienne", caption: "Os coxal, sacrum et fémur proximal", image: "assets/diagrams/cm2-pelvis.png" },
    { id: "muscles", title: "Région glutéale", caption: "Repères des muscles glutéaux", image: "assets/diagrams/cm2-muscles.png" }
  ],
  cm3: [
    { id: "quadriceps", title: "Quadriceps", caption: "Les quatre chefs du compartiment antérieur", image: "assets/diagrams/cm3-quadriceps.png" },
    { id: "posterieur", title: "Cuisse postérieure", caption: "Les muscles ischio-jambiers", image: "assets/diagrams/cm3-posterieur.png" }
  ],
  cm4: [
    { id: "ligaments", title: "Ligaments du genou", caption: "Ligaments collatéraux, croisés et patellaire", image: "assets/diagrams/cm4-ligaments.png" },
    { id: "muscles", title: "Compartiment postérieur", caption: "Gastrocnémien, plantaire et soléaire", image: "assets/diagrams/cm4-muscles.png" }
  ],
  cm5: [
    { id: "tarse", title: "Os du tarse", caption: "Talus, calcanéus et os du tarse distal", image: "assets/diagrams/cm5-tarse.png" },
    { id: "ligaments", title: "Ligaments de la cheville", caption: "Ligament deltoïde et faisceaux latéraux", image: "assets/diagrams/cm5-ligaments.png" }
  ]
};

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  let loaded;
  if (raw) {
    try {
      loaded = JSON.parse(raw);
    } catch {
      loaded = createDefaultState();
    }
  } else {
    loaded = createDefaultState();
  }
  normalizeState(loaded);
  return loaded;
}

function normalizeState(rawState) {
  (rawState.profiles || []).forEach((profile) => {
    if (!Array.isArray(profile.badges)) profile.badges = [];
    if (typeof profile.examBest !== "number") profile.examBest = 0;
    if (typeof profile.dailyGoal !== "number") profile.dailyGoal = 15;
    if (typeof profile.dailyReviewedCount !== "number") profile.dailyReviewedCount = 0;
    if (profile.dailyReviewedDate !== new Date().toDateString()) {
      profile.dailyReviewedDate = new Date().toDateString();
      profile.dailyReviewedCount = 0;
    }
    if (!profile.chapters) profile.chapters = createEmptyChapterProgress();
    chapters.forEach((chapter) => {
      if (!profile.chapters[chapter.id]) {
        profile.chapters[chapter.id] = { reviewState: {}, quizBest: 0, assocBest: 0, labelBest: 0, labelDone: [], missedQuestionIds: [], favoriteCardIds: [], cardNotes: {} };
      } else {
        const progress = profile.chapters[chapter.id];
        if (!Array.isArray(progress.missedQuestionIds)) progress.missedQuestionIds = [];
        if (!Array.isArray(progress.favoriteCardIds)) progress.favoriteCardIds = [];
        if (!progress.cardNotes || typeof progress.cardNotes !== "object") progress.cardNotes = {};
      }
    });
  });
}

function createEmptyChapterProgress() {
  const progress = {};
  chapters.forEach((chapter) => {
    progress[chapter.id] = { reviewState: {}, quizBest: 0, assocBest: 0, labelBest: 0, labelDone: [], missedQuestionIds: [], favoriteCardIds: [], cardNotes: {} };
  });
  return progress;
}

function createDefaultState() {
  return {
    profiles: [
      { id: "profile-1", name: "Moi", xp: 0, level: 1, streak: 0, lastActiveDate: new Date().toDateString(), dailyGoal: 15, dailyReviewedCount: 0, dailyReviewedDate: new Date().toDateString(), badges: [], examBest: 0, chapters: createEmptyChapterProgress() }
    ],
    activeProfileId: "profile-1",
    activeChapterId: "cm1",
    currentView: "dashboard"
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getActiveProfile() {
  return state.profiles.find((profile) => profile.id === state.activeProfileId);
}

function getActiveChapter() {
  return chapters.find((chapter) => chapter.id === state.activeChapterId) || chapters[0];
}

function getChapterProgress(profile, chapterId) {
  if (!profile.chapters[chapterId]) {
    profile.chapters[chapterId] = { reviewState: {}, quizBest: 0, assocBest: 0, labelBest: 0, labelDone: [], missedQuestionIds: [], favoriteCardIds: [], cardNotes: {} };
  }
  const progress = profile.chapters[chapterId];
  if (!Array.isArray(progress.missedQuestionIds)) progress.missedQuestionIds = [];
  if (!Array.isArray(progress.favoriteCardIds)) progress.favoriteCardIds = [];
  if (!progress.cardNotes || typeof progress.cardNotes !== "object") progress.cardNotes = {};
  return progress;
}

function updateStreak(profile) {
  const today = new Date().toDateString();
  const lastDate = profile.lastActiveDate || today;
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (lastDate !== today) {
    profile.streak = lastDate === yesterday ? profile.streak + 1 : 1;
    profile.lastActiveDate = today;
  }
}

function refreshDailyGoal(profile) {
  const today = new Date().toDateString();
  if (profile.dailyReviewedDate !== today) {
    profile.dailyReviewedDate = today;
    profile.dailyReviewedCount = 0;
  }
  if (typeof profile.dailyGoal !== "number") profile.dailyGoal = 15;
}

function getXPLevel(xp) {
  return Math.floor(xp / 100) + 1;
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/* ---------- Chapter stats helper ---------- */

function getChapterStats(profile, chapter) {
  const progress = getChapterProgress(profile, chapter.id);
  const totalCards = chapter.cards.length;
  const masteredCards = chapter.cards.filter((card) => (progress.reviewState[card.id]?.reps || 0) >= 3).length;
  const reviewedCards = chapter.cards.filter((card) => (progress.reviewState[card.id]?.reps || 0) > 0).length;
  const masteryPercent = totalCards ? Math.round((masteredCards / totalCards) * 100) : 0;
  const totalReps = Object.values(progress.reviewState).reduce((sum, rs) => sum + (rs.reps || 0), 0);
  const labelTotal = chapter.labelingExercises.length;
  const labelDoneCount = progress.labelDone.filter(Boolean).length;
  return {
    totalCards,
    masteredCards,
    reviewedCards,
    masteryPercent,
    totalReps,
    quizBest: progress.quizBest,
    assocBest: progress.assocBest,
    labelBest: progress.labelBest,
    labelTotal,
    labelDoneCount,
    missedCount: progress.missedQuestionIds.length
  };
}

function getGlobalMissedQuestions(profile) {
  return chapters.flatMap((chapter) => {
    const progress = getChapterProgress(profile, chapter.id);
    return chapter.quizQuestions
      .filter((question) => progress.missedQuestionIds.includes(question.id))
      .map((question) => ({ ...question, chapterId: chapter.id, chapterCode: chapter.code }));
  });
}

/* ---------- Badges ---------- */

const BADGES = [
  { id: "first-card", icon: "🌱", title: "Premier pas", description: "Réviser au moins une flashcard.", check: (profile) => chapters.some((chapter) => getChapterStats(profile, chapter).reviewedCards > 0) },
  { id: "streak-3", icon: "🔥", title: "Assidu(e)", description: "3 jours de suite sur l’appli.", check: (profile) => (profile.streak || 0) >= 3 },
  { id: "streak-7", icon: "⚡", title: "Sur la lancée", description: "7 jours de suite sur l’appli.", check: (profile) => (profile.streak || 0) >= 7 },
  { id: "quiz-ace", icon: "🎯", title: "Sans-faute QCM", description: "100% à un QCM de chapitre.", check: (profile) => chapters.some((chapter) => getChapterStats(profile, chapter).quizBest === 100) },
  { id: "assoc-ace", icon: "🧩", title: "Éclair d’association", description: "100% au jeu d’association.", check: (profile) => chapters.some((chapter) => getChapterStats(profile, chapter).assocBest === 100) },
  { id: "label-ace", icon: "🗺️", title: "Cartographe", description: "100% à un schéma à légender.", check: (profile) => chapters.some((chapter) => getChapterStats(profile, chapter).labelBest === 100) },
  { id: "chapter-mastered", icon: "🏆", title: "Chapitre maîtrisé", description: "Toutes les flashcards d’un chapitre maîtrisées.", check: (profile) => chapters.some((chapter) => getChapterStats(profile, chapter).masteryPercent === 100) },
  { id: "all-started", icon: "📚", title: "Programme complet", description: "Avoir commencé les 5 chapitres.", check: (profile) => chapters.every((chapter) => getChapterStats(profile, chapter).reviewedCards > 0) },
  { id: "level-5", icon: "⭐", title: "Niveau 5", description: "Atteindre le niveau 5.", check: (profile) => getXPLevel(profile.xp) >= 5 },
  { id: "marathon", icon: "🏃", title: "Marathonien", description: "50 révisions de flashcards cumulées.", check: (profile) => chapters.reduce((sum, chapter) => sum + getChapterStats(profile, chapter).totalReps, 0) >= 50 },
  { id: "exam-80", icon: "🎓", title: "Prêt(e) pour le partiel", description: "80% ou plus à l’examen blanc.", check: (profile) => (profile.examBest || 0) >= 80 }
];

function getBadgeStatus(profile) {
  return BADGES.map((badge) => ({ ...badge, unlocked: badge.check(profile) }));
}

/* ---------- Top bar ---------- */

function renderTopbar() {
  const profile = getActiveProfile();
  if (!profile) return;
  updateStreak(profile);
  refreshDailyGoal(profile);
  profile.level = getXPLevel(profile.xp);
  document.getElementById("xpValue").textContent = profile.xp;
  document.getElementById("levelValue").textContent = profile.level;
  document.getElementById("streakValue").textContent = profile.streak;
  document.getElementById("activeProfileName").textContent = profile.name;
}

function getSearchResults(query) {
  const normalizedQuery = query.trim().toLocaleLowerCase("fr");
  if (normalizedQuery.length < 2) return [];
  return chapters.flatMap((chapter) =>
    chapter.cards
      .filter((card) => `${card.front} ${card.back}`.toLocaleLowerCase("fr").includes(normalizedQuery))
      .map((card) => ({ chapter, card }))
  ).slice(0, 8);
}

function renderSearchResults(query) {
  const resultsEl = document.getElementById("globalSearchResults");
  if (!resultsEl) return;
  const results = getSearchResults(query);
  if (!query.trim() || query.trim().length < 2) {
    resultsEl.innerHTML = "";
    resultsEl.classList.add("hidden");
    return;
  }
  resultsEl.classList.remove("hidden");
  resultsEl.innerHTML = results.length
    ? results.map(({ chapter, card }) => `<button class="search-result" data-search-chapter="${chapter.id}" data-search-card="${card.id}" type="button"><span>${chapter.code}</span><strong>${card.front}</strong><small>${card.back}</small></button>`).join("")
    : `<p class="search-empty">Aucune notion trouvée.</p>`;
  resultsEl.querySelectorAll("[data-search-card]").forEach((button) => {
    button.addEventListener("click", () => openSearchResult(button.dataset.searchChapter, button.dataset.searchCard));
  });
}

function openSearchResult(chapterId, cardId) {
  state.activeChapterId = chapterId;
  state.currentView = "flashcards";
  flashcardState = { currentCardId: cardId, showAnswer: false, showNote: false, mode: "normal", forceAll: true };
  const input = document.getElementById("globalSearchInput");
  if (input) input.value = "";
  renderSearchResults("");
  saveState();
  renderAll();
}

function refreshProfileSelect() {
  const select = document.getElementById("profileSelect");
  select.innerHTML = "";
  state.profiles.forEach((profile) => {
    const option = document.createElement("option");
    option.value = profile.id;
    option.textContent = profile.name;
    if (profile.id === state.activeProfileId) option.selected = true;
    select.appendChild(option);
  });
}

/* ---------- Sidebar navigation ---------- */

function renderSidebar() {
  document.querySelectorAll(".nav-item[data-view]").forEach((item) => {
    item.classList.toggle("active", item.dataset.view === state.currentView);
  });
  document.getElementById("trainGroupLabel").textContent = `S’entraîner — ${getActiveChapter().code}`;

  const chapterNav = document.getElementById("chapterNav");
  chapterNav.innerHTML = chapters
    .map(
      (chapter) => `
        <button class="chapter-item ${chapter.id === state.activeChapterId ? "active" : ""}" data-chapter="${chapter.id}">
          <span class="chapter-dot"></span>${chapter.code}
        </button>
      `
    )
    .join("");
  chapterNav.querySelectorAll("[data-chapter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeChapterId = button.dataset.chapter;
      state.currentView = "dashboard";
      resetTransientSessions();
      saveState();
      renderAll();
    });
  });
}

function resetTransientSessions() {
  flashcardState = { currentCardId: null, showAnswer: false, showNote: false, mode: "normal", forceAll: false };
  quizSession = null;
  associationSession = null;
  examSession = null;
  labelingAnswers = {};
  activeLabelPin = null;
  labelingChecked = false;
}

/* ---------- View router ---------- */

function renderView() {
  const container = document.getElementById("viewContainer");
  const view = state.currentView;
  if (view === "dashboard") container.innerHTML = renderDashboard();
  else if (view === "flashcards") container.innerHTML = renderFlashcardsView();
  else if (view === "quiz") container.innerHTML = renderQuizView();
  else if (view === "association") container.innerHTML = renderAssociationView();
  else if (view === "labeling") container.innerHTML = renderLabelingView();
  else if (view === "exam") container.innerHTML = renderExamView();
  else if (view === "stats") container.innerHTML = renderStatsView();
    else if (view === "courses") container.innerHTML = renderCoursesView();
  bindViewEvents(view);
}

/* ---------- Dashboard ---------- */

function renderDashboard() {
  const chapter = getActiveChapter();
  const profile = getActiveProfile();
  const progress = getChapterProgress(profile, chapter.id);
  refreshDailyGoal(profile);

  const totalCards = chapter.cards.length;
  const masteredCards = chapter.cards.filter((card) => (progress.reviewState[card.id]?.reps || 0) >= 3).length;
  const masteryPercent = totalCards ? Math.round((masteredCards / totalCards) * 100) : 0;

  const totalQuestions = chapter.quizQuestions.length;
  const quizSeries = Math.min(6, totalQuestions);

  const labelTotal = chapter.labelingExercises.length;
  const labelDoneCount = progress.labelDone.filter(Boolean).length;
  const dailyProgress = Math.min(100, Math.round((profile.dailyReviewedCount / profile.dailyGoal) * 100));

  return `
    <div class="panel-card">
      <div class="chapter-kicker">${chapter.code} · CHAPITRE ACTIF</div>
      <h1 class="chapter-title">${chapter.title}</h1>
      <p class="chapter-desc">${chapter.description}</p>

      <div class="dashboard-grid">
        <button class="mode-card" data-view="flashcards">
          <span class="mode-kicker">Mémorisation</span>
          <span class="mode-title">Flashcards</span>
          <span class="mode-stat">${totalCards} notions · répétition espacée (SM-2 simplifié)</span>
          <div class="progress-track"><div class="progress-fill" style="width:${masteryPercent}%"></div></div>
          <span class="progress-label">${totalCards ? masteryPercent + "% maîtrisé" : "Pas encore de contenu"}</span>
        </button>

        <button class="mode-card" data-view="quiz">
          <span class="mode-kicker">Évaluation</span>
          <span class="mode-title">QCM</span>
          <span class="mode-stat">${totalQuestions} questions en banque · série de ${quizSeries}</span>
          <div class="progress-track"><div class="progress-fill" style="width:${progress.quizBest}%"></div></div>
          <span class="progress-label">${progress.quizBest > 0 ? "Meilleur score : " + progress.quizBest + "%" : "Pas encore tenté"}</span>
        </button>

        <button class="mode-card" data-view="association">
          <span class="mode-kicker">Rapidité</span>
          <span class="mode-title">Association</span>
          <span class="mode-stat">Relie les termes à leurs définitions, façon jeu de mémoire</span>
          <div class="progress-track"><div class="progress-fill" style="width:${progress.assocBest}%"></div></div>
          <span class="progress-label">${progress.assocBest > 0 ? "Meilleur score : " + progress.assocBest + "%" : "Pas encore tenté"}</span>
        </button>

        <button class="mode-card" data-view="labeling">
          <span class="mode-kicker">Visuel</span>
          <span class="mode-title">Schémas à légender</span>
          <span class="mode-stat">${labelTotal} planches anatomiques interactives</span>
          <div class="progress-track"><div class="progress-fill" style="width:${labelTotal ? (labelDoneCount / labelTotal) * 100 : 0}%"></div></div>
          <span class="progress-label">${labelDoneCount}/${labelTotal} complétées</span>
        </button>
      </div>
    </div>

    <div class="panel-card daily-goal-card">
      <div>
        <div class="section-kicker">Rythme du jour</div>
        <h2 class="chapter-title" style="font-size:1.3rem;">Objectif quotidien</h2>
        <p>${profile.dailyReviewedCount >= profile.dailyGoal ? "Objectif atteint. Tu peux consolider tes notions difficiles." : `${profile.dailyGoal - profile.dailyReviewedCount} carte${profile.dailyGoal - profile.dailyReviewedCount > 1 ? "s" : ""} pour terminer l’objectif.`}</p>
      </div>
      <div class="daily-goal-progress">
        <strong>${profile.dailyReviewedCount}/${profile.dailyGoal}</strong>
        <div class="progress-track"><div class="progress-fill" style="width:${dailyProgress}%"></div></div>
        <button class="btn-secondary" data-view="flashcards" type="button">Réviser maintenant</button>
      </div>
    </div>

    <div class="panel-card exam-card">
      <div class="section-kicker">Bilan</div>
      <h2 class="chapter-title" style="font-size:1.3rem;">Examen blanc</h2>
      <p>QCM chronométré mélangeant les 5 CM, avec un bilan par chapitre pour cibler tes révisions avant le partiel.</p>
      <button class="btn-primary" data-view="exam">Ouvrir l’examen blanc</button>
    </div>

    <div class="panel-card">
      <div class="section-kicker">Programme du semestre</div>
      <h2 class="chapter-title" style="font-size:1.3rem;">Plan des CM — Anatomie fonctionnelle</h2>
      <div class="plan-scroller">
        ${chapters
          .map(
            (item) => `
              <div class="plan-card ${item.id === chapter.id ? "active" : ""}" data-chapter="${item.id}">
                <strong>${item.code}</strong>
                <span>${item.title}</span>
              </div>
            `
          )
          .join("")}
      </div>
      <p class="plan-note">Les 5 CM du semestre sont maintenant intégrés. Dépose le PDF d’un futur cours dans le dossier pour que je fasse pareil avec.</p>
    </div>
  `;
}

/* ---------- Statistiques ---------- */

function renderStatsView() {
  const profile = getActiveProfile();
  const perChapter = chapters.map((chapter) => ({ chapter, stats: getChapterStats(profile, chapter) }));
  const missedQuestions = getGlobalMissedQuestions(profile);
  const totalCards = perChapter.reduce((sum, item) => sum + item.stats.totalCards, 0);
  const totalReviewed = perChapter.reduce((sum, item) => sum + item.stats.reviewedCards, 0);
  const totalReps = perChapter.reduce((sum, item) => sum + item.stats.totalReps, 0);
  const avgQuiz = Math.round(perChapter.reduce((sum, item) => sum + item.stats.quizBest, 0) / perChapter.length);
  const avgAssoc = Math.round(perChapter.reduce((sum, item) => sum + item.stats.assocBest, 0) / perChapter.length);
  const avgLabel = Math.round(perChapter.reduce((sum, item) => sum + item.stats.labelBest, 0) / perChapter.length);
  const badges = getBadgeStatus(profile);
  const unlockedCount = badges.filter((badge) => badge.unlocked).length;

  return `
    <div class="panel-card">
      <div class="section-kicker">Bilan personnel</div>
      <h1 class="chapter-title">Statistiques</h1>
      <p class="chapter-desc">Vue d’ensemble de ta progression, tous chapitres confondus.</p>
      <div class="dashboard-grid">
        <div class="mode-card" style="cursor:default;">
          <span class="mode-kicker">Flashcards</span>
          <span class="mode-title">${totalReviewed}/${totalCards}</span>
          <span class="mode-stat">notions révisées au moins une fois · ${totalReps} révisions cumulées</span>
        </div>
        <div class="mode-card" style="cursor:default;">
          <span class="mode-kicker">QCM</span>
          <span class="mode-title">${Number.isFinite(avgQuiz) ? avgQuiz : 0}%</span>
          <span class="mode-stat">score moyen (meilleur essai par chapitre)</span>
        </div>
        <div class="mode-card" style="cursor:default;">
          <span class="mode-kicker">Association</span>
          <span class="mode-title">${Number.isFinite(avgAssoc) ? avgAssoc : 0}%</span>
          <span class="mode-stat">score moyen (meilleur essai par chapitre)</span>
        </div>
        <div class="mode-card" style="cursor:default;">
          <span class="mode-kicker">Schémas</span>
          <span class="mode-title">${Number.isFinite(avgLabel) ? avgLabel : 0}%</span>
          <span class="mode-stat">score moyen (meilleur essai par chapitre)</span>
        </div>
      </div>
    </div>

    <div class="panel-card">
      <div class="section-kicker">Révision ciblée</div>
      <h2 class="chapter-title" style="font-size:1.3rem;">Erreurs à consolider</h2>
      <p class="chapter-desc">${missedQuestions.length ? `${missedQuestions.length} question${missedQuestions.length > 1 ? "s" : ""} à revoir, tous CM confondus. Une bonne réponse retire la question de cette liste.` : "Aucune erreur QCM à revoir pour le moment."}</p>
      <div class="actions"><button class="btn-primary" id="startGlobalQuizReviewBtn" type="button" ${missedQuestions.length ? "" : "disabled"}>Réviser mes erreurs (${missedQuestions.length})</button></div>
    </div>

    <div class="panel-card">
      <div class="section-kicker">Détail par chapitre</div>
      <h2 class="chapter-title" style="font-size:1.3rem;">Progression par CM</h2>
      <table class="stats-table">
        <thead>
          <tr><th>Chapitre</th><th>Flashcards</th><th>QCM</th><th>Association</th><th>Schémas</th></tr>
        </thead>
        <tbody>
          ${perChapter
            .map(
              ({ chapter, stats }) => `
                <tr>
                  <td>${chapter.code} · ${chapter.title}</td>
                  <td>${stats.masteryPercent}% maîtrisé</td>
                  <td>${stats.quizBest}%</td>
                  <td>${stats.assocBest}%</td>
                  <td>${stats.labelDoneCount}/${stats.labelTotal}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>

    <div class="panel-card">
      <div class="section-kicker">Succès</div>
      <h2 class="chapter-title" style="font-size:1.3rem;">Badges (${unlockedCount}/${badges.length})</h2>
      <div class="badge-grid">
        ${badges
          .map(
            (badge) => `
              <div class="badge-item ${badge.unlocked ? "unlocked" : "locked"}">
                <span class="badge-icon">${badge.icon}</span>
                <span class="badge-title">${badge.title}</span>
                <span class="badge-desc">${badge.description}</span>
              </div>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

/* ---------- Cours PDF ---------- */

function renderCoursesView() {
  const courseFiles = [
    { code: "CM1", title: "Généralités en anatomie fonctionnelle", file: "CM1 - Anatomie L1 .pdf" },
    { code: "CM2", title: "La région glutéale", file: "CM2 - Anatomie L1 -3.pdf" },
    { code: "CM3", title: "La cuisse", file: "CM3 - Anatomie L1 .pdf" },
    { code: "CM4", title: "La jambe", file: "CM4 - Anatomie L1 .pdf" },
    { code: "CM5", title: "Le pied", file: "CM5 - Anatomie L1 .pdf" }
  ];
  const activeCourse = courseFiles.find((course) => course.code === getActiveChapter().code) || courseFiles[0];

  return `
    <div class="panel-card">
      <div class="section-kicker">Documents du semestre</div>
      <h1 class="chapter-title">Cours PDF</h1>
      <p class="chapter-desc">Consulte les supports de cours sans quitter Atlas.</p>
      <div class="course-tabs">
        ${courseFiles
          .map(
            (course) => `<button class="course-tab ${course.code === activeCourse.code ? "active" : ""}" data-course-code="${course.code}" type="button">${course.code}<span>${course.title}</span></button>`
          )
          .join("")}
      </div>
    </div>
    <div class="panel-card pdf-panel">
      <div class="pdf-heading">
        <div>
          <div class="chapter-kicker">${activeCourse.code} · Support original</div>
          <h2 class="chapter-title" style="font-size:1.3rem;">${activeCourse.title}</h2>
        </div>
        <a class="btn-secondary" href="${encodeURI(activeCourse.file)}" target="_blank" rel="noopener">Ouvrir le PDF ↗</a>
      </div>
      <object class="pdf-viewer" data="${encodeURI(activeCourse.file)}" type="application/pdf">
        <p>Le lecteur PDF intégré n’est pas disponible dans ce navigateur. <a href="${encodeURI(activeCourse.file)}" target="_blank" rel="noopener">Ouvrir le cours PDF</a>.</p>
      </object>
    </div>
  `;
}

/* ---------- Flashcards ---------- */

function ensureReviewState(progress, cardId) {
  if (!progress.reviewState[cardId]) {
    progress.reviewState[cardId] = { intervalDays: 0, ease: 2.5, reps: 0, dueDate: 0, lastRating: null };
  }
  return progress.reviewState[cardId];
}

function getWeakCards(chapter, progress) {
  return chapter.cards.filter((card) => {
    const reviewState = progress.reviewState[card.id];
    return reviewState && (reviewState.lastRating === "repeat" || reviewState.lastRating === "hard");
  });
}

function getFavoriteCards(chapter, progress) {
  return chapter.cards.filter((card) => progress.favoriteCardIds.includes(card.id));
}

function getNextCard(chapter, progress, pool, respectDueDate) {
  const cards = pool && pool.length ? pool : chapter.cards;
  if (!cards.length) return null;
  if (!respectDueDate) return shuffle(cards)[0];
  const now = Date.now();
  const dueCards = cards.filter((card) => ensureReviewState(progress, card.id).dueDate <= now);
  if (!dueCards.length) return null;
  return shuffle(dueCards)[0];
}

function renderFlashcardsView() {
  const chapter = getActiveChapter();
  if (!chapter.cards.length) {
    return `
      <div class="panel-card">
        <div class="chapter-kicker">${chapter.code} · Flashcards</div>
        <h1 class="chapter-title">Flashcards</h1>
        <p class="empty-state">Aucune flashcard pour ce chapitre pour le moment. Dépose le PDF du cours ${chapter.code} dans le dossier pour que je génère les cartes.</p>
      </div>
    `;
  }
  const profile = getActiveProfile();
  const progress = getChapterProgress(profile, chapter.id);
  const weakCards = getWeakCards(chapter, progress);
  const favoriteCards = getFavoriteCards(chapter, progress);
  if ((flashcardState.mode === "weak" && !weakCards.length) || (flashcardState.mode === "favorites" && !favoriteCards.length)) {
    flashcardState.mode = "normal";
  }
  const pool = flashcardState.mode === "weak" ? weakCards : flashcardState.mode === "favorites" ? favoriteCards : chapter.cards;
  const reviewedCount = Object.keys(progress.reviewState).filter((id) => progress.reviewState[id].reps > 0).length;
  const respectDueDate = flashcardState.mode === "normal" && !flashcardState.forceAll;
  if (!flashcardState.currentCardId || !pool.some((card) => card.id === flashcardState.currentCardId)) {
    const next = getNextCard(chapter, progress, pool, respectDueDate);
    flashcardState.currentCardId = next ? next.id : null;
  }
  if (!flashcardState.currentCardId) {
    const dueSoon = chapter.cards
      .map((card) => ensureReviewState(progress, card.id).dueDate)
      .filter((d) => d > Date.now())
      .sort((a, b) => a - b)[0];
    const nextDueText = dueSoon ? new Date(dueSoon).toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" }) : null;
    return `
      <div class="panel-card">
        <div class="chapter-kicker">${chapter.code} · Flashcards</div>
        <h1 class="chapter-title">Flashcards</h1>
        <p class="status-pill">${reviewedCount}/${chapter.cards.length} cartes révisées au moins une fois</p>
        <p class="empty-state">Tu es à jour : aucune carte à réviser pour l’instant.${nextDueText ? ` Prochaine échéance : ${nextDueText}.` : ""}</p>
        <div class="actions"><button class="btn-secondary" id="continueAheadBtn" type="button">Réviser quand même en avance</button></div>
      </div>
    `;
  }
  const card = pool.find((item) => item.id === flashcardState.currentCardId) || pool[0];
  const isFavorite = progress.favoriteCardIds.includes(card.id);
  const note = progress.cardNotes[card.id] || "";

  return `
    <div class="panel-card">
      <div class="chapter-kicker">${chapter.code} · Flashcards</div>
      <h1 class="chapter-title">Flashcards</h1>
      <p class="status-pill">${reviewedCount}/${chapter.cards.length} cartes révisées au moins une fois</p>
      <div class="actions" style="margin-bottom:12px;">
        ${flashcardState.mode === "weak"
          ? `<button class="btn-secondary" id="toggleWeakModeBtn" type="button">← Revenir à toutes les cartes</button>`
          : `<button class="btn-secondary" id="toggleWeakModeBtn" type="button" ${weakCards.length ? "" : "disabled"}>🎯 Réviser les cartes difficiles (${weakCards.length})</button>`}
        ${flashcardState.mode === "favorites"
          ? `<button class="btn-secondary" id="toggleFavoriteModeBtn" type="button">← Revenir à toutes les cartes</button>`
          : `<button class="btn-secondary" id="toggleFavoriteModeBtn" type="button" ${favoriteCards.length ? "" : "disabled"}>★ Réviser mes favoris (${favoriteCards.length})</button>`}
      </div>
      <div class="study-card">
        <div class="card-tools">
          <button class="card-tool ${isFavorite ? "active" : ""}" id="favoriteCardBtn" type="button" title="${isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}" aria-label="${isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}">★</button>
          <button class="card-tool ${note ? "active" : ""}" id="toggleCardNoteBtn" type="button" title="Ajouter ou modifier une note" aria-label="Ajouter ou modifier une note">✎</button>
        </div>
        <div class="prompt">${flashcardState.showAnswer ? card.back : card.front}</div>
        <div class="answer">${flashcardState.showAnswer ? "Réponse" : "Clique pour retourner la carte"}</div>
      </div>
      ${flashcardState.showNote ? `
        <div class="card-note-editor">
          <label for="cardNoteInput">Note personnelle</label>
          <textarea id="cardNoteInput" maxlength="500" placeholder="Astuce mnémotechnique, précision du cours…">${escapeHtml(note)}</textarea>
          <div class="actions"><button class="btn-secondary" id="saveCardNoteBtn" type="button">Enregistrer la note</button></div>
        </div>` : ""}
      <div class="actions">
        <button class="btn-secondary" id="flipCardBtn" type="button">Retourner</button>
        <button data-grade="repeat" type="button">Encore</button>
        <button data-grade="hard" type="button">Difficile</button>
        <button data-grade="good" type="button">Bien</button>
        <button data-grade="easy" type="button">Facile</button>
      </div>
    </div>
  `;
}

function toggleWeakMode() {
  flashcardState.mode = flashcardState.mode === "weak" ? "normal" : "weak";
  flashcardState.currentCardId = null;
  flashcardState.showAnswer = false;
  flashcardState.forceAll = false;
  renderView();
}

function toggleFavoriteMode() {
  flashcardState.mode = flashcardState.mode === "favorites" ? "normal" : "favorites";
  flashcardState.currentCardId = null;
  flashcardState.showAnswer = false;
  flashcardState.forceAll = false;
  renderView();
}

function continueStudyingAhead() {
  flashcardState.forceAll = true;
  flashcardState.currentCardId = null;
  renderView();
}

function toggleFavoriteCard() {
  const chapter = getActiveChapter();
  const progress = getChapterProgress(getActiveProfile(), chapter.id);
  const cardId = flashcardState.currentCardId;
  if (!cardId) return;
  progress.favoriteCardIds = progress.favoriteCardIds.includes(cardId)
    ? progress.favoriteCardIds.filter((id) => id !== cardId)
    : [...progress.favoriteCardIds, cardId];
  saveState();
  renderView();
}

function toggleCardNote() {
  flashcardState.showNote = !flashcardState.showNote;
  renderView();
}

function saveCardNote() {
  const chapter = getActiveChapter();
  const progress = getChapterProgress(getActiveProfile(), chapter.id);
  const input = document.getElementById("cardNoteInput");
  if (!input || !flashcardState.currentCardId) return;
  const note = input.value.trim();
  if (note) progress.cardNotes[flashcardState.currentCardId] = note;
  else delete progress.cardNotes[flashcardState.currentCardId];
  flashcardState.showNote = false;
  saveState();
  renderView();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[character]);
}

function gradeCard(rating) {
  const chapter = getActiveChapter();
  const profile = getActiveProfile();
  const progress = getChapterProgress(profile, chapter.id);
  const card = chapter.cards.find((item) => item.id === flashcardState.currentCardId);
  if (!card) return;
  const reviewState = ensureReviewState(progress, card.id);
  let interval = reviewState.intervalDays || 0;
  let ease = reviewState.ease;

  switch (rating) {
    case "repeat": interval = 1; ease = Math.max(1.3, ease - 0.2); break;
    case "hard": interval = Math.max(1, Math.round((interval || 1) * 1.2)); ease = Math.max(1.3, ease - 0.1); break;
    case "good": interval = Math.max(1, Math.round((interval || 1) * 2)); ease += 0.05; break;
    case "easy": interval = Math.max(2, Math.round((interval || 1) * 3)); ease += 0.1; break;
  }

  reviewState.intervalDays = interval;
  reviewState.ease = Number(ease.toFixed(2));
  reviewState.reps += 1;
  reviewState.dueDate = Date.now() + interval * 86400000;
  reviewState.lastRating = rating;
  refreshDailyGoal(profile);
  profile.dailyReviewedCount += 1;
  profile.xp += 15;
  flashcardState.showAnswer = false;
  const pool = flashcardState.mode === "weak"
    ? getWeakCards(chapter, progress)
    : flashcardState.mode === "favorites"
      ? getFavoriteCards(chapter, progress)
      : chapter.cards;
  const respectDueDate = flashcardState.mode === "normal" && !flashcardState.forceAll;
  const next = pool.length ? getNextCard(chapter, progress, pool, respectDueDate) : null;
  flashcardState.currentCardId = next ? next.id : null;
  saveState();
  renderAll();
}

/* ---------- Quiz ---------- */

function renderQuizView() {
  const chapter = getActiveChapter();
  const isGlobalReview = Boolean(quizSession?.globalReview);
  const kicker = isGlobalReview ? "Tous les CM · Révision ciblée" : `${chapter.code} · QCM`;
  const title = isGlobalReview ? "Révision des erreurs" : "QCM";
  if (!chapter.quizQuestions.length) {
    return `
      <div class="panel-card">
        <div class="chapter-kicker">${chapter.code} · QCM</div>
        <h1 class="chapter-title">QCM</h1>
        <p class="empty-state">Aucune question pour ce chapitre pour le moment. Dépose le PDF du cours ${chapter.code} dans le dossier pour que je génère la banque de questions.</p>
      </div>
    `;
  }
  let body;
  if (!quizSession) {
    const profile = getActiveProfile();
    const progress = getChapterProgress(profile, chapter.id);
    const missedCount = progress.missedQuestionIds.length;
    body = `<p class="empty-state">Choisis une série de questions tirées au hasard dans la banque de ${chapter.quizQuestions.length} questions.</p>
      <div class="actions">
        <button class="btn-primary" id="startQuizBtn" type="button">Démarrer le quiz</button>
        ${missedCount ? `<button class="btn-secondary" id="startQuizReviewBtn" type="button">🎯 Réviser mes erreurs (${missedCount})</button>` : ""}
      </div>`;
  } else {
    const current = quizSession.questions[quizSession.currentIndex];
    if (!current) {
      const profile = getActiveProfile();
      const percent = Math.round((quizSession.score / quizSession.questions.length) * 100);
      if (!quizSession.globalReview) {
        const progress = getChapterProgress(profile, chapter.id);
        progress.quizBest = Math.max(progress.quizBest, percent);
      }
      profile.xp += 20;
      saveState();
      const completionText = quizSession.globalReview ? "Révision globale terminée !" : "Quiz terminé !";
      quizSession = null;
      body = `<p class="prompt">${completionText} Score : ${percent}%</p>
        <div class="actions"><button class="btn-primary" id="backToStatsBtn" type="button">Retour aux statistiques</button></div>`;
    } else {
      body = `
        <p class="status-pill">${isGlobalReview ? `${current.chapterCode} · ` : ""}Question ${quizSession.currentIndex + 1}/${quizSession.questions.length}</p>
        <div class="study-card">
          <div class="prompt">${current.prompt}</div>
        </div>
        <div class="option-list">
          ${current.options.map((option, index) => `<button data-answer="${index}" type="button">${option}</button>`).join("")}
        </div>
      `;
    }
  }
  return `
    <div class="panel-card">
      <div class="chapter-kicker">${kicker}</div>
      <h1 class="chapter-title">${title}</h1>
      ${body}
    </div>
  `;
}

function startQuiz(reviewMode) {
  const chapter = getActiveChapter();
  const profile = getActiveProfile();
  const progress = getChapterProgress(profile, chapter.id);
  let pool = chapter.quizQuestions;
  if (reviewMode && progress.missedQuestionIds.length) {
    pool = chapter.quizQuestions.filter((q) => progress.missedQuestionIds.includes(q.id));
  }
  quizSession = { questions: shuffle([...pool]).slice(0, Math.min(6, pool.length)), currentIndex: 0, score: 0, reviewMode: Boolean(reviewMode) };
  profile.xp += 10;
  saveState();
  renderAll();
}

function startGlobalQuizReview() {
  const profile = getActiveProfile();
  const questions = getGlobalMissedQuestions(profile);
  if (!questions.length) return;
  quizSession = { questions: shuffle(questions).slice(0, Math.min(10, questions.length)), currentIndex: 0, score: 0, reviewMode: true, globalReview: true };
  profile.xp += 10;
  state.currentView = "quiz";
  saveState();
  renderAll();
}

function answerQuiz(selectedIndex) {
  const current = quizSession.questions[quizSession.currentIndex];
  const profile = getActiveProfile();
  const chapter = getActiveChapter();
  const sourceChapter = chapters.find((item) => item.id === current.chapterId) || chapter;
  const progress = getChapterProgress(profile, sourceChapter.id);
  const buttons = document.querySelectorAll("[data-answer]");
  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === current.answerIndex) button.classList.add("correct");
    if (index === selectedIndex && index !== current.answerIndex) button.classList.add("wrong");
  });
  if (selectedIndex === current.answerIndex) {
    quizSession.score += 1;
    profile.xp += 10;
    progress.missedQuestionIds = progress.missedQuestionIds.filter((id) => id !== current.id);
  } else if (!progress.missedQuestionIds.includes(current.id)) {
    progress.missedQuestionIds.push(current.id);
  }
  quizSession.currentIndex += 1;
  saveState();
  renderTopbar();
  setTimeout(() => renderView(), 900);
}

/* ---------- Association ---------- */

function renderAssociationView() {
  const chapter = getActiveChapter();
  if (!chapter.associationPairs.length) {
    return `
      <div class="panel-card">
        <div class="chapter-kicker">${chapter.code} · Association</div>
        <h1 class="chapter-title">Association</h1>
        <p class="empty-state">Aucune paire pour ce chapitre pour le moment. Dépose le PDF du cours ${chapter.code} dans le dossier pour que je génère le jeu.</p>
      </div>
    `;
  }
  let body;
  if (!associationSession) {
    body = `<p class="empty-state">Associe chaque terme à sa définition le plus vite possible.</p>
      <div class="actions"><button class="btn-primary" id="startAssociationBtn" type="button">Lancer le jeu</button></div>`;
  } else {
    body = `
      <p class="status-pill">${associationSession.timeLeft}s restantes · Score ${associationSession.score}/${associationSession.pairs.length}</p>
      <div class="association-grid">
        <div>
          <h3>Termes</h3>
          ${associationSession.pairs
            .map((pair) => {
              const matched = associationSession.matched.includes(pair.term);
              return `<button class="term-btn ${matched ? "matched" : ""} ${associationSession.selectedTerm === pair.term ? "selected" : ""}" data-term="${pair.term}" type="button">${pair.term}</button>`;
            })
            .join("")}
        </div>
        <div>
          <h3>Définitions</h3>
          ${associationSession.pairs
            .map((pair) => {
              const matched = associationSession.matched.includes(pair.term);
              return `<button class="definition-btn ${matched ? "matched" : ""} ${associationSession.selectedDefinition === pair.definition ? "selected" : ""}" data-definition="${pair.definition}" type="button">${pair.definition}</button>`;
            })
            .join("")}
        </div>
      </div>
    `;
  }
  return `
    <div class="panel-card">
      <div class="chapter-kicker">${chapter.code} · Association</div>
      <h1 class="chapter-title">Association</h1>
      ${body}
    </div>
  `;
}

function startAssociation() {
  const chapter = getActiveChapter();
  const profile = getActiveProfile();
  const pairs = shuffle([...chapter.associationPairs]).slice(0, Math.min(6, chapter.associationPairs.length));
  associationSession = { pairs, timeLeft: 45, score: 0, selectedTerm: null, selectedDefinition: null, matched: [], timerId: null };
  profile.xp += 10;
  saveState();
  renderAll();
  associationSession.timerId = setInterval(() => {
    if (!associationSession) return;
    associationSession.timeLeft -= 1;
    if (associationSession.timeLeft <= 0) {
      clearInterval(associationSession.timerId);
      finishAssociation();
    } else {
      renderView();
    }
  }, 1000);
}

function chooseAssociationTerm(term) {
  if (!associationSession) return;
  associationSession.selectedTerm = term;
  renderView();
}

function chooseAssociationDefinition(definition) {
  if (!associationSession || !associationSession.selectedTerm) return;
  const pair = associationSession.pairs.find((item) => item.term === associationSession.selectedTerm);
  if (!pair) return;
  if (pair.definition === definition) {
    associationSession.score += 1;
    associationSession.matched.push(pair.term);
    associationSession.selectedTerm = null;
    associationSession.selectedDefinition = null;
    if (associationSession.score === associationSession.pairs.length) {
      finishAssociation();
      return;
    }
    renderView();
  } else {
    associationSession.selectedDefinition = definition;
    renderView();
    setTimeout(() => {
      if (!associationSession) return;
      associationSession.selectedTerm = null;
      associationSession.selectedDefinition = null;
      renderView();
    }, 500);
  }
}

function finishAssociation() {
  if (!associationSession) return;
  clearInterval(associationSession.timerId);
  const chapter = getActiveChapter();
  const profile = getActiveProfile();
  const progress = getChapterProgress(profile, chapter.id);
  const percent = Math.round((associationSession.score / associationSession.pairs.length) * 100);
  progress.assocBest = Math.max(progress.assocBest, percent);
  profile.xp += 20;
  associationSession = null;
  saveState();
  renderAll();
}

/* ---------- Labeling ---------- */

function renderLabelingView() {
  const chapter = getActiveChapter();
  const diagrams = COURSE_DIAGRAMS[chapter.id] || [];
  if (!chapter.labelingExercises.length) {
    return `
      <div class="panel-card">
        <div class="chapter-kicker">${chapter.code} · Schémas</div>
        <h1 class="chapter-title">Schémas à légender</h1>
        <p class="empty-state">Aucun schéma pour ce chapitre pour le moment. Dépose le PDF du cours ${chapter.code} dans le dossier pour que je génère les planches.</p>
      </div>
    `;
  }
  const activeDiagram = diagrams.find((diagram) => diagram.id === diagramState[chapter.id]) || diagrams[0];
  return `
    ${activeDiagram ? `
      <div class="panel-card diagram-panel">
        <div class="chapter-kicker">${chapter.code} · Planche de cours</div>
        <div class="diagram-heading">
          <div>
            <h1 class="chapter-title">${activeDiagram.title}</h1>
            <p class="chapter-desc">${activeDiagram.caption}</p>
          </div>
          <a class="btn-secondary" href="${activeDiagram.image}" target="_blank" rel="noopener">Agrandir ↗</a>
        </div>
        <div class="diagram-tabs">
          ${diagrams
            .map((diagram) => `<button class="diagram-tab ${diagram.id === activeDiagram.id ? "active" : ""}" data-diagram-id="${diagram.id}" type="button">${diagram.title}</button>`)
            .join("")}
        </div>
        <figure class="course-diagram">
          <img src="${activeDiagram.image}" alt="Planche du cours : ${activeDiagram.title}" />
          <figcaption>Extrait du support de cours ${chapter.code} · Utilise les repères de la planche avant de compléter l’exercice.</figcaption>
        </figure>
      </div>` : ""}
    <div class="panel-card">
      <div class="chapter-kicker">${chapter.code} · Schémas</div>
      <h1 class="chapter-title">Schémas à légender</h1>
      <p class="chapter-desc">Clique sur un repère du schéma pour choisir la bonne réponse. Les deux derniers exercices restent au format liste (ce sont des définitions, pas des repères spatiaux).</p>
      ${chapter.labelingExercises.map((exercise, index) => renderLabelingExercise(exercise, index)).join("")}
      <div class="actions"><button class="btn-primary" id="checkLabelingBtn" type="button">Vérifier</button></div>
      <p class="status-pill" id="labelingResult"></p>
    </div>
  `;
}

function renderLabelingExercise(exercise, index) {
  const answers = labelingAnswers[index] || {};
  if (!exercise.diagram) {
    return `
      <div class="labeling-item">
        <label>${exercise.title}</label>
        ${exercise.targets
          .map(
            (target, targetIndex) => `
              <span class="field"><strong>${target.name}</strong>${target.prompt ? `<small>${target.prompt}</small>` : ""}
                <select data-labeling-index="${index}" data-target-index="${targetIndex}">
                  <option value="">Choisir</option>
                  ${target.options.map((option) => `<option value="${option}" ${answers[targetIndex] === option ? "selected" : ""}>${option}</option>`).join("")}
                </select>
              </span>
            `
          )
          .join("")}
      </div>
    `;
  }

  const activeHere = activeLabelPin && activeLabelPin.exerciseIndex === index ? activeLabelPin.targetIndex : null;
  const pins = exercise.targets
    .map((target, targetIndex) => {
      const pin = exercise.diagram.pins[targetIndex];
      const answer = answers[targetIndex];
      let stateClass = "";
      if (labelingChecked) stateClass = answer === exercise.answers[targetIndex] ? "correct" : answer ? "wrong" : "unanswered";
      else if (answer) stateClass = "answered";
      if (activeHere === targetIndex) stateClass += " active";
      return `<button class="diagram-pin ${stateClass}" style="left:${pin.x}%; top:${pin.y}%" data-labeling-index="${index}" data-target-index="${targetIndex}" type="button" title="${target.name}">${targetIndex + 1}</button>`;
    })
    .join("");

  const legend = exercise.targets
    .map((target, targetIndex) => `<div class="legend-row"><span class="legend-num">${targetIndex + 1}</span><span class="legend-name">${target.name}</span><span class="legend-answer">${answers[targetIndex] || "—"}</span></div>`)
    .join("");

  const choicePanel =
    activeHere !== null
      ? `
    <div class="choice-panel">
      <p>${exercise.targets[activeHere].prompt || "Choisis la bonne réponse :"}</p>
      <div class="choice-list">
        ${exercise.targets[activeHere].options.map((option) => `<button class="choice-btn" data-choice="${escapeHtml(option)}" type="button">${option}</button>`).join("")}
      </div>
    </div>`
      : "";

  return `
    <div class="labeling-item">
      <label>${exercise.title}</label>
      <div class="diagram-stage">${exercise.diagram.svg}<div class="diagram-pins">${pins}</div></div>
      ${choicePanel}
      <div class="diagram-legend">${legend}</div>
    </div>
  `;
}

function selectDiagram(diagramId) {
  diagramState[getActiveChapter().id] = diagramId;
  renderView();
}

function selectLabelPin(exerciseIndex, targetIndex) {
  if (activeLabelPin && activeLabelPin.exerciseIndex === exerciseIndex && activeLabelPin.targetIndex === targetIndex) {
    activeLabelPin = null;
  } else {
    activeLabelPin = { exerciseIndex, targetIndex };
  }
  renderView();
}

function answerLabelPin(value) {
  if (!activeLabelPin) return;
  const { exerciseIndex, targetIndex } = activeLabelPin;
  if (!labelingAnswers[exerciseIndex]) labelingAnswers[exerciseIndex] = {};
  labelingAnswers[exerciseIndex][targetIndex] = value;
  activeLabelPin = null;
  labelingChecked = false;
  renderView();
}

function setLabelingAnswer(exerciseIndex, targetIndex, value) {
  if (!labelingAnswers[exerciseIndex]) labelingAnswers[exerciseIndex] = {};
  labelingAnswers[exerciseIndex][targetIndex] = value;
}

function checkLabeling() {
  const chapter = getActiveChapter();
  const profile = getActiveProfile();
  const progress = getChapterProgress(profile, chapter.id);
  let goodTotal = 0;
  let total = 0;
  const exerciseResults = chapter.labelingExercises.map(() => true);

  chapter.labelingExercises.forEach((exercise, exerciseIndex) => {
    exercise.targets.forEach((target, targetIndex) => {
      total += 1;
      const value = labelingAnswers[exerciseIndex] && labelingAnswers[exerciseIndex][targetIndex];
      const isCorrect = value === exercise.answers[targetIndex];
      if (isCorrect) goodTotal += 1;
      else exerciseResults[exerciseIndex] = false;
    });
  });

  labelingChecked = true;
  progress.labelDone = exerciseResults;
  const percent = total ? Math.round((goodTotal / total) * 100) : 0;
  progress.labelBest = Math.max(progress.labelBest, percent);
  profile.xp += 20;
  saveState();
  renderView();
  renderTopbar();
  const resultEl = document.getElementById("labelingResult");
  if (resultEl) resultEl.textContent = `Résultat : ${goodTotal}/${total} réponses correctes (${percent}%)`;
}

/* ---------- Examen blanc ---------- */

function renderExamView() {
  const allQuestions = chapters.flatMap((chapter) => chapter.quizQuestions.map((q) => ({ ...q, chapterCode: chapter.code })));
  if (!allQuestions.length) {
    return `
      <div class="panel-card">
        <div class="chapter-kicker">Bilan</div>
        <h1 class="chapter-title">Examen blanc</h1>
        <p class="empty-state">Aucune question disponible pour le moment.</p>
      </div>
    `;
  }
  let body;
  if (!examSession) {
    const profile = getActiveProfile();
    body = `
      <p class="empty-state">Compose une épreuve mélangeant les 5 CM. Pendant l’épreuve, aucune correction n’est affichée.</p>
      <div class="exam-config">
        <label>Nombre de questions
          <select id="examQuestionCount">
            <option value="10">10 questions</option>
            <option value="20" selected>20 questions</option>
            <option value="30">30 questions</option>
          </select>
        </label>
        <label>Durée
          <select id="examDuration">
            <option value="10">10 minutes</option>
            <option value="20" selected>20 minutes</option>
            <option value="30">30 minutes</option>
          </select>
        </label>
        <label class="exam-checkbox"><input id="examPenalty" type="checkbox" /> Retirer 0,25 point par erreur</label>
      </div>
      <p class="status-pill">${allQuestions.length} questions disponibles · Meilleur score : ${profile.examBest || 0}%</p>
      <div class="actions"><button class="btn-primary" id="startExamBtn" type="button">Démarrer l’examen blanc</button></div>`;
  } else {
    const current = examSession.questions[examSession.currentIndex];
    if (!current) {
      const result = evaluateExamSession(examSession);
      const profile = getActiveProfile();
      profile.examBest = Math.max(profile.examBest || 0, result.percent);
      profile.xp += 30;
      saveState();
      body = `
        <p class="prompt">${examSession.timeExpired ? "Temps écoulé." : "Examen terminé !"} Score global : ${result.percent}%</p>
        <div class="exam-summary">
          <span>${result.correct}/${examSession.questions.length} bonnes réponses</span>
          <span>${result.wrong} erreur${result.wrong > 1 ? "s" : ""}</span>
          <span>${result.skipped} sans réponse</span>
          ${examSession.penalty ? `<span>Pénalité : -${result.penalty.toFixed(2)} point${result.penalty > 0.25 ? "s" : ""}</span>` : ""}
        </div>
        <div class="exam-breakdown">
          ${Object.entries(result.byChapter)
            .map(([code, stats]) => `<div><strong>${code}</strong><span>${stats.correct}/${stats.total} · ${Math.round((stats.correct / stats.total) * 100)}%</span></div>`)
            .join("")}
        </div>
        <details class="exam-correction">
          <summary>Voir la correction détaillée</summary>
          ${examSession.questions
            .map((question, index) => {
              const answer = examSession.answers[index];
              const correct = answer === question.answerIndex;
              return `<div class="correction-item ${correct ? "correct" : "wrong"}">
                <strong>${question.chapterCode} · ${correct ? "Correct" : "À revoir"}</strong>
                <p>${question.prompt}</p>
                <span>Ta réponse : ${answer === undefined ? "Sans réponse" : question.options[answer]}</span>
                <span>Réponse attendue : ${question.options[question.answerIndex]}</span>
              </div>`;
            })
            .join("")}
        </details>
        <div class="actions"><button class="btn-primary" id="startExamBtn" type="button">Recommencer</button></div>
      `;
      examSession = null;
    } else {
      body = `
        <p class="status-pill">${current.chapterCode} · Question ${examSession.currentIndex + 1}/${examSession.questions.length} · ${formatRemainingTime(examSession.timeLeft)}</p>
        <div class="study-card"><div class="prompt">${current.prompt}</div></div>
        <div class="option-list">
          ${current.options.map((option, index) => `<button data-exam-answer="${index}" type="button">${option}</button>`).join("")}
        </div>
      `;
    }
  }
  return `
    <div class="panel-card">
      <div class="chapter-kicker">Bilan</div>
      <h1 class="chapter-title">Examen blanc</h1>
      ${body}
    </div>
  `;
}

function formatRemainingTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
}

function evaluateExamSession(session) {
  const byChapter = {};
  let correct = 0;
  let wrong = 0;
  let skipped = 0;
  session.questions.forEach((question, index) => {
    const answer = session.answers[index];
    const code = question.chapterCode;
    if (!byChapter[code]) byChapter[code] = { correct: 0, total: 0 };
    byChapter[code].total += 1;
    if (answer === undefined) {
      skipped += 1;
    } else if (answer === question.answerIndex) {
      correct += 1;
      byChapter[code].correct += 1;
    } else {
      wrong += 1;
    }
  });
  const penalty = session.penalty ? wrong * 0.25 : 0;
  const adjustedScore = Math.max(0, correct - penalty);
  return { byChapter, correct, wrong, skipped, penalty, percent: Math.round((adjustedScore / session.questions.length) * 100) };
}

function startExam() {
  const allQuestions = chapters.flatMap((chapter) => chapter.quizQuestions.map((q) => ({ ...q, chapterCode: chapter.code })));
  const requestedCount = Number(document.getElementById("examQuestionCount")?.value || 20);
  const durationMinutes = Number(document.getElementById("examDuration")?.value || 20);
  const penalty = Boolean(document.getElementById("examPenalty")?.checked);
  examSession = {
    questions: shuffle(allQuestions).slice(0, Math.min(requestedCount, allQuestions.length)),
    currentIndex: 0,
    score: 0,
    answers: [],
    timeLeft: durationMinutes * 60,
    penalty,
    timeExpired: false,
    timerId: null
  };
  renderAll();
  examSession.timerId = setInterval(() => {
    if (!examSession) return;
    examSession.timeLeft -= 1;
    if (examSession.timeLeft <= 0) {
      clearInterval(examSession.timerId);
      examSession.currentIndex = examSession.questions.length;
      examSession.timeExpired = true;
      renderView();
    } else {
      const pill = document.querySelector(".status-pill");
      if (pill) pill.textContent = `${examSession.questions[examSession.currentIndex].chapterCode} · Question ${examSession.currentIndex + 1}/${examSession.questions.length} · ${formatRemainingTime(examSession.timeLeft)}`;
    }
  }, 1000);
}

function answerExam(selectedIndex) {
  const current = examSession.questions[examSession.currentIndex];
  examSession.answers[examSession.currentIndex] = selectedIndex;
  if (selectedIndex === current.answerIndex) examSession.score += 1;
  examSession.currentIndex += 1;
  if (examSession.currentIndex >= examSession.questions.length) {
    clearInterval(examSession.timerId);
  }
  renderView();
}

/* ---------- Event binding ---------- */

function bindViewEvents(view) {
  document.querySelectorAll(".mode-card[data-view], .exam-card [data-view], .daily-goal-card [data-view]").forEach((el) => {
    el.addEventListener("click", () => {
      state.currentView = el.dataset.view;
      saveState();
      renderAll();
    });
  });

  document.querySelectorAll(".plan-card[data-chapter]").forEach((el) => {
    el.addEventListener("click", () => {
      state.activeChapterId = el.dataset.chapter;
      resetTransientSessions();
      saveState();
      renderAll();
    });
  });

  if (view === "courses") {
    document.querySelectorAll("[data-course-code]").forEach((button) => {
      button.addEventListener("click", () => {
        const chapter = chapters.find((item) => item.code === button.dataset.courseCode);
        if (!chapter) return;
        state.activeChapterId = chapter.id;
        saveState();
        renderAll();
      });
    });
  }

  if (view === "flashcards") {
    const flipBtn = document.getElementById("flipCardBtn");
    if (flipBtn) flipBtn.addEventListener("click", () => { flashcardState.showAnswer = !flashcardState.showAnswer; renderView(); });
    document.querySelectorAll("[data-grade]").forEach((btn) => btn.addEventListener("click", () => gradeCard(btn.dataset.grade)));
    const weakBtn = document.getElementById("toggleWeakModeBtn");
    if (weakBtn) weakBtn.addEventListener("click", toggleWeakMode);
    const favoriteModeBtn = document.getElementById("toggleFavoriteModeBtn");
    if (favoriteModeBtn) favoriteModeBtn.addEventListener("click", toggleFavoriteMode);
    const favoriteBtn = document.getElementById("favoriteCardBtn");
    if (favoriteBtn) favoriteBtn.addEventListener("click", toggleFavoriteCard);
    const noteBtn = document.getElementById("toggleCardNoteBtn");
    if (noteBtn) noteBtn.addEventListener("click", toggleCardNote);
    const saveNoteBtn = document.getElementById("saveCardNoteBtn");
    if (saveNoteBtn) saveNoteBtn.addEventListener("click", saveCardNote);
    const continueAheadBtn = document.getElementById("continueAheadBtn");
    if (continueAheadBtn) continueAheadBtn.addEventListener("click", continueStudyingAhead);
  }

  if (view === "quiz") {
    const startBtn = document.getElementById("startQuizBtn");
    if (startBtn) startBtn.addEventListener("click", () => startQuiz(false));
    const reviewBtn = document.getElementById("startQuizReviewBtn");
    if (reviewBtn) reviewBtn.addEventListener("click", () => startQuiz(true));
    const backToStatsBtn = document.getElementById("backToStatsBtn");
    if (backToStatsBtn) backToStatsBtn.addEventListener("click", () => { state.currentView = "stats"; saveState(); renderAll(); });
    document.querySelectorAll("[data-answer]").forEach((btn) => btn.addEventListener("click", () => answerQuiz(Number(btn.dataset.answer))));
  }

  if (view === "stats") {
    const globalReviewBtn = document.getElementById("startGlobalQuizReviewBtn");
    if (globalReviewBtn) globalReviewBtn.addEventListener("click", startGlobalQuizReview);
  }

  if (view === "association") {
    const startBtn = document.getElementById("startAssociationBtn");
    if (startBtn) startBtn.addEventListener("click", startAssociation);
    document.querySelectorAll("[data-term]").forEach((btn) => btn.addEventListener("click", () => chooseAssociationTerm(btn.dataset.term)));
    document.querySelectorAll("[data-definition]").forEach((btn) => btn.addEventListener("click", () => chooseAssociationDefinition(btn.dataset.definition)));
  }

  if (view === "labeling") {
    const checkBtn = document.getElementById("checkLabelingBtn");
    if (checkBtn) checkBtn.addEventListener("click", checkLabeling);
    document.querySelectorAll("[data-diagram-id]").forEach((button) => {
      button.addEventListener("click", () => selectDiagram(button.dataset.diagramId));
    });
    document.querySelectorAll("select[data-labeling-index]").forEach((select) => {
      select.addEventListener("change", () => {
        setLabelingAnswer(Number(select.dataset.labelingIndex), Number(select.dataset.targetIndex), select.value);
      });
    });
    document.querySelectorAll(".diagram-pin").forEach((button) => {
      button.addEventListener("click", () => selectLabelPin(Number(button.dataset.labelingIndex), Number(button.dataset.targetIndex)));
    });
    document.querySelectorAll(".choice-btn").forEach((button) => {
      button.addEventListener("click", () => answerLabelPin(button.dataset.choice));
    });
  }

  if (view === "exam") {
    const startBtn = document.getElementById("startExamBtn");
    if (startBtn) startBtn.addEventListener("click", startExam);
    document.querySelectorAll("[data-exam-answer]").forEach((btn) => btn.addEventListener("click", () => answerExam(Number(btn.dataset.examAnswer))));
  }
}

function bindGlobalEvents() {
  document.querySelectorAll(".nav-item[data-view]").forEach((item) => {
    item.addEventListener("click", () => {
      state.currentView = item.dataset.view;
      saveState();
      renderAll();
    });
  });

  document.getElementById("profileMenuBtn").addEventListener("click", () => {
    document.getElementById("profileDropdown").classList.toggle("hidden");
  });

  document.getElementById("globalSearchInput").addEventListener("input", (event) => renderSearchResults(event.target.value));

  document.addEventListener("click", (event) => {
    const search = document.querySelector(".global-search");
    if (search && !search.contains(event.target)) renderSearchResults("");
  });

  document.addEventListener("click", (event) => {
    const menu = document.querySelector(".profile-menu");
    if (menu && !menu.contains(event.target)) {
      document.getElementById("profileDropdown").classList.add("hidden");
    }
  });

  document.getElementById("profileSelect").addEventListener("change", (event) => {
    state.activeProfileId = event.target.value;
    resetTransientSessions();
    saveState();
    renderAll();
  });

  document.getElementById("newProfileForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("profileName");
    const name = input.value.trim();
    if (!name) return;
    const profile = { id: `profile-${Date.now()}`, name, xp: 0, level: 1, streak: 0, lastActiveDate: new Date().toDateString(), badges: [], examBest: 0, chapters: createEmptyChapterProgress() };
    state.profiles.push(profile);
    state.activeProfileId = profile.id;
    input.value = "";
    resetTransientSessions();
    saveState();
    renderAll();
  });

  document.getElementById("exportDataBtn").addEventListener("click", exportProgress);
  document.getElementById("importDataInput").addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) importProgress(file);
    event.target.value = "";
  });
}

function exportProgress() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `atlas-anatomie-progression-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function importProgress(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      if (!parsed || !Array.isArray(parsed.profiles) || !parsed.profiles.length) {
        throw new Error("Format invalide");
      }
      normalizeState(parsed);
      state = parsed;
      if (!state.profiles.some((profile) => profile.id === state.activeProfileId)) {
        state.activeProfileId = state.profiles[0].id;
      }
      resetTransientSessions();
      saveState();
      renderAll();
    } catch (error) {
      window.alert("Impossible d’importer ce fichier : il ne s’agit pas d’une sauvegarde Atlas valide.");
    }
  };
  reader.readAsText(file);
}

function renderAll() {
  const profile = getActiveProfile();
  if (!profile) return;
  refreshProfileSelect();
  renderTopbar();
  renderSidebar();
  renderView();
}

bindGlobalEvents();
renderAll();
saveState();
console.log("Atlas — Anatomie STAPS prêt.");
