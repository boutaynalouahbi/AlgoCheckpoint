let phrase="je suis Boutayna LOUAHBI.";
const fonction=(phrase)=>{
let nbr_voyelles=0;
for (let i = 0; i < phrase.length; i++) {
    if(estVoyelle(phrase[i])){
        nbr_voyelles=nbr_voyelles+1;
    }
}
console.log("Le nombre de mot dans cette phrase : ",compterMot(phrase))
console.log("Le nombre de voyelle dans cette phrase : ",nbr_voyelles);
}
//fonction qui verifie si une lettre est un voyelle (true/false)
function estVoyelle(lettre) {
    const voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];
    lettre = lettre.toLowerCase();
    return voyelles.includes(lettre);
}
const compterMot=(phrase)=>{
 // Supprimer la ponctuation de la phrase
 var phraseSansPonctuation = phrase.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
 console.log("Phrase sans ponctuation",phraseSansPonctuation)
 // Diviser la phrase en mots
 var mots = phraseSansPonctuation.trim().split(" ");
  console.log("mot ",mots)
 // Retourner le nombre de mots
 return mots.length;
}
 fonction(phrase);