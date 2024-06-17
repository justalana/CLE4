import { Actor, Keys, Timer, Vector } from "excalibur"
import { Resources } from './resources'
import { UI } from './UI.js'


export class Whitebar extends Actor {
    ui
    constructor(x, y) {
        super({
            pos: new Vector(x, y),
            width: Resources.Whitebar.width,
            height: Resources.Whitebar.height,
            // scale: new Vector(a, b)
        })

        this.graphics.use(Resources.Whitebar.toSprite())
    }

    onInitialize(engine) {
        console.log('yippie')
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