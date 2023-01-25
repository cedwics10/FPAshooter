class Balle {
    constructor(carte, x, y, z, dX, dY, dZ) {
        this.x = x;
        this.y = y;
        this.z = z;

        this.deltaX = dX;
        this.deltaY = dY;
        this.deltaZ = dZ;

        this.carte = carte;
    }

    deplacer(deltaA, deltaB, deltaC) {
        x += deltaA;
        y += deltaB;
        z += deltaC;

        if (this.carte.zoneAutorise()) {
            this.x = x;
            this.y = y;
            this.z = z;
        }
    }

    dessinerTrajectire() {
        const deplacement = (e) => {
            this.deplacer();
        };
        document.setInterval(deplacement, 1000);
    }
}