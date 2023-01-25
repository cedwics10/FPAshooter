class Carte {
    /**
     * Paramètres pour définir une boîte
     * @param {*} x : nombre de pixels en dimension x
     * @param {*} y : nombre de pixels en dimension y
     * @param {*} z : nombre de pixels en dimension z 
     */
    constructor(nomMap, x, y, z,) {
        this.map = nomMap;

        this.dimensionX = x;
        this.dimensionY = y;
        this.dimensionZ = z;
    }

    zoneAutorise(a, b, c) {
        if (a < 0 || a > dimensionX) return false;
        if (b < 0 || b > dimensionX) return false;
        if (b < 0 || b > dimensionX) return false;
        return true;
    }
}