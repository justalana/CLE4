import { Actor, Keys, Timer, Vector } from "excalibur"
import { Resources } from './resources'

export class Textbar extends Actor {
    constructor(x, y) {
        super({
            pos: new Vector(x, y),
            width: Resources.Whitebar.width,
            height: Resources.Whitebar.height,
        })
    }
}