import { Actor, Keys, Timer, Vector, CollisionType, Shape, Engine } from "excalibur"
import { Resources } from './resources'
import { Toolbox } from "./toolbox"

export class Pufferfish extends Actor {

    sprite
    constructor(x, y) {
        super({
            x, y,
            width: Resources.Pufferfish.width,
            height: Resources.Pufferfish.height,
            collisionType: CollisionType.Active
        })

        this.pufferfishes = []

        this.collider.set(Shape.Box(10, 40))

        this.on('exitviewport', () => this.kill())
    }

    onInitialize(engine) {
        this.pos.x = 30 + Math.random() * 1100
        this.pos.y = 0
        this.sprite = Resources.Pufferfish.toSprite()
        this.graphics.use(this.sprite)
        this.body.mass = 3

        this.on('collisionstart', (event) => this.hitSomething(event, engine))
        this.on('exitviewport', () => this.kill())
    }

    hitSomething(event, engine) {
        if (event.other instanceof Toolbox) {
            engine.emit('pufferfish-exit', { Pufferfish: this })
            this.kill()
        }

    }
}