class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;

        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;

        this.upperImage = new Image();
        this.upperImage.src = config.upperSrc;
    }

    drawLowerImage(ctx){
        ctx.drawImage(this.lowerImage, 0, 0)
    }

    drawUpperImage(ctx){
        ctx.drawImage(this.upperImage, 0, 0)
    }
}


window.OverworldMaps = {
//Put in maps
    DemoRoom: {
        lowerSrc: "/rpg-game/images/maps/DemoLower.png",
        upperSrc: "/rpg-game/images/maps/DemoUpper.png",
        gameObjects: {
            hero: new GameObject({
                x: 5,
                y: 6,
            }),
            npc1: new GameObject({
                x: 7,
                y: 9,
                src: "/rpg-game/images/characters/people/npc1.png"

            })
        }
    },
    Kitchen: {
        lowerSrc: "/rpg-game/images/maps/KitchenLower.png",
        upperSrc: "/rpg-game/images/maps/KitchenUpper.png",
        gameObjects: {
            hero: new GameObject({
                x: 5,
                y: 6,
            }),
            npc1: new GameObject({
                x: 7,
                y: 9,
                src: "/rpg-game/images/characters/people/npc1.png"
        
            })           
        }
    }
}