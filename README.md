# RemyPaquier_7_29122021
Projet 7 réalisé dans le cadre de la formation developpeur front-end Openclassrooms.

Mise en place de la fonctionnalité de recherche en JavaScript pour un site de recettes de cuisine.

Fonctionnalité : recherche input principal / filtres 

Problématique : Mise en place de la fonctionnalité de recherche sur le site dans une optique de performance presque instantanée.
Comparaison de performance javascript entre for et forEach.
 
Option 1 : Utilisation de la boucle simple ‘’for’’
Dans cette option, nous utilisons la boucle ‘’for’’
Avantages  
   ⊕ Performances 
   
Inconvénients 
    ⊖ code moins lisible 
    ⊖ code plus long
 
 
Option 2 : Utilisation de la méthode tableau ‘’forEach’’
Dans cette option, nous utilisons la méthode de programmation déclarative ‘’forEach’’

Avantages  
   ⊕ Plus facile à écrire 
   ⊕ Plus expressive
    ⊕ Plus lisible
   	Inconvénients 
    ⊖ Légère perte de performances
 
 

Solution retenue :  
Pour une performance maximale de la fonctionnalité de recherche on peut considérer l’utilisation de la première option, à savoir la version qui utilise la programmation impérative avec la boucle for.
Cependant, vu le peu de gain obtenu (autour de 1% selon le test jsbench), le projet gagne en maintenabilité avec l’option 2, c’est celui que nous recommandons.

