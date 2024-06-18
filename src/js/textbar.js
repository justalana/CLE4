import { Actor, Keys, Timer, Vector } from "excalibur"
import { Resources } from './resources'

export class Whitebar extends Actor {
    constructor(x, y) {
        super({
            pos: new Vector(x, y),
            width: Resources.Whitebar.width,
            height: Resources.Whitebar.height,
        })

        this.graphics.use(Resources.Whitebar.toSprite())
    }
}

export class Greenbar extends Actor {
    constructor(x, y) {
        super({
            pos: new Vector(x, y),
            width: Resources.Greenbar.width,
            height: Resources.Greenbar.height
        })

        this.graphics.use(Resources.Greenbar.toSprite())
    }
}