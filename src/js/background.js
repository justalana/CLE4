import { Actor, Engine, Vector } from "excalibur"
import { Resources } from "./resources.js";

export class BG extends Actor {

    constructor() {
        super({ width: 1280, height: 720 })
    }

    onInitialize(engine) {
        this.pos = new Vector(640, 360)
    }
}