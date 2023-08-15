class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;
        this.walls = config.walls || {};

        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;

        this.upperImage = new Image();
        this.upperImage.src = config.upperSrc;
    }

    drawLowerImage(ctx, cameraPerson){
        ctx.drawImage(
            this.lowerImage, 
            utils.withGrid(10.5) - cameraPerson.x,
            utils.withGrid(6) - cameraPerson.y
        )

    }

    drawUpperImage(ctx, cameraPerson){
        ctx.drawImage(
            this.upperImage, 
            utils.withGrid(10.5) - cameraPerson.x,
            utils.withGrid(6) - cameraPerson.y
            )
    }
}


window.OverworldMaps = {
//Put in maps
    DemoRoom: {
        lowerSrc: "/rpg-game/images/maps/DemoLower.png",
        upperSrc: "/rpg-game/images/maps/DemoUpper.png",
        gameObjects: {
            hero: new Person({
                isPlayerControlled: true,
                x: utils.withGrid(5),
                y: utils.withGrid(6),
            }),
            npc1: new Person({
                
                x: utils.withGrid(7),
                y: utils.withGrid(9),
                src: "/rpg-game/images/characters/people/npc1.png"

            })
        },
        walls: {
            //"16,16": true
            [utils.asGridCoord(7,6)]: true,
            [utils.asGridCoord(8,6)]: true,
            [utils.asGridCoord(7,7)]: true,
            [utils.asGridCoord(8,7)]: true,
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