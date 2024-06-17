import { Actor, Keys, Timer, Vector } from "excalibur"
import { Resources } from './resources'
import { UI } from './UI.js'


export class Whitebar extends Actor {
    constructor(x, y) {
        super({
            x, y,
            width: Resources.Whitebar.width,
            height: Resources.Whitebar.height
        })
    }

    onInitialize() {
        this.ui = new UI(this, engine)
        this.addChild(this.ui)
    }
}

export class Greenbar extends Actor {
    constructor(x, y) {
        super({
            x, y,
            width: Resources.Greenbar.width,
            height: Resources.Greenbar.height
        })
    }

    onInitialize() {
        this.ui = new UI(this, engine)
        this.addChild(this.ui)
    }
}