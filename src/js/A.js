import { Actor, Vector } from "excalibur"
import { Resources } from './resources'

export class A extends Actor {
    constructor(x, y) {
        super({
            pos: new Vector(x, y),
            width: Resources.A.width,
            height: Resources.A.height,
        })
    }
}