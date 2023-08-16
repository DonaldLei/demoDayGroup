class GameObject {
    constructor(config){
        this.id = null;
        this.isMounted = false;
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.direction = config.direction || "down";
        this.sprite = new Sprite({
            gameObject: this,
            src: config.src || "/rpg-game/images/characters/people/hero.png",
        });

        this.behaviorLoop = config.behaviorLoop || [];
        this.behaviorLoopIndex = 0;

    }

    mount(map){
        console.log("mounting")
        this.isMounted = true;
        map.addWall(this.x, this.y);

        setTimeout(() => {
            this.doBehaviorEvent(map);
        }, 10)
    }

    update(){
}

async doBehaviorEvent(map){

    //don't do anything if a important cutscene is playing or no config to do anything
    if (map.isCutscenePlaying || this.behaviorLoop.length === 0){
        return;
    }

    //set up event
    let eventConfig = this.behaviorLoop[this.behaviorLoopIndex];
    eventConfig.who = this.id;
    //create event
    const eventHandler = new overworldEvent({map, event: eventConfig});
    await eventHandler.init();
    //setting new event
    this.behaviorLoopIndex += 1;
    if (this.behaviorLoopIndex === this.behaviorLoop.length){
        this.behaviorLoopIndex = 0;
    }
    //repeat
    this.doBehaviorEvent(map);
    }   
}