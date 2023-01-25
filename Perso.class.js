class Perso {
    constructor(carte, arme, nom, rayon) {
        this.nom = nom;

        this.x = mt_rand(0, carte.dimensionX)
        this.y = mt_rand(0, carte.dimensionY)
        this.z = mt_rand(0, carte.dimensionZ)

        this.rayon = rayon;
        this.arme = arme;
    }


    deplacerPerso(x, y) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    tirer(x, y) {
        // carte.nouvelleBalle(this);
    }


}