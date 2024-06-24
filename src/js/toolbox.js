import { Actor, Keys, Timer, Vector, CollisionType, clamp, Input } from "excalibur"
import { Resources } from './resources'

export class Toolbox extends Actor {

    sprite
    constructor(x, y) {
        super({ width: 400, height: 50 })
        this.body.collisionType = CollisionType.Fixed
    }

    onInitialize(engine) {
        this.pos.x = 600
        this.pos.y = 650
        this.sprite = Resources.Toolbox.toSprite()
        this.graphics.use(this.sprite)
        this.vel = new Vector(0, 0)

        this.on('collisionstart', (event, engine) => this.hitSomething(event, engine))
    }

    onPreUpdate(engine) {
        let xspeed = 0
        let yspeed = 0

        engine.input.gamepads.enabled = true

        this.on('postupdate', () => {
            const gamepad = engine.input.gamepads.at(0)

            if (gamepad) {
                if (gamepad.isButtonHeld(Input.Buttons.DpadLeft)) {
                    this.vel = new Vector(-400, 0)
                }
                if (gamepad.isButtonHeld(Input.Buttons.DpadRight)) {
                    this.vel = new Vector(400, 0)
                }
            }
        })

        this.vel = new Vector(xspeed, yspeed);
        this.pos.x = clamp(this.pos.x, 200, engine.drawWidth - 200);
    }

    hitSomething(event) {
        if (event.other instanceof Toolbox) {
            this.engine.currentScene.updateScore();
            this.kill()
        }
    }
}