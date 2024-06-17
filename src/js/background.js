import { Actor, Engine, Vector } from "excalibur"
import { Resources } from "./resources.js";

export class BGCruise extends Actor {

    constructor() {
        super({ width: 1280, height: 720 })
    }

    onInitialize(engine) {
        this.graphics.use(Resources.BGCruise.toSprite())
        this.pos = new Vector(640, 360)
    }
}

export class BGTaxi extends Actor {

    constructor() {
        super({ width: 1280, height: 720 })
    }

    onInitialize(engine) {
        this.graphics.use(Resources.BGTaxi.toSprite())
        this.pos = new Vector(640, 360)
    }
}