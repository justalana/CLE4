import { ScreenElement, Label, Color, Font, FontUnit, Vector } from 'excalibur'
import { Resources } from './resources.js'
import { Heart } from "./hearts.js"
import { Whitebar } from "./textbar.js"
import { Greenbar } from "./textbar.js"

export class UI extends ScreenElement {
    constructor(game, engine) {
        super()
        this.engine = engine
        this.hearts = []
    }

    onInitialize(engine) {
        this.scoreText = new Label({
            text: `Score: ${engine.score}`,
            pos: new Vector(70, 30),
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px,
                color: Color.Black
            })
        })
        this.addChild(this.scoreText)
        // this.addChild(new Whitebar())

        for (let i = 0; i < 3; i++) {
            const heart = new Heart()
            heart.graphics.use(Resources.Heart.toSprite())
            heart.pos = new Vector(870 + (i * 40), 50)
            this.addChild(heart)
            this.hearts.push(heart)
        }

        engine.on('pufferfish-exit', () => this.reduceHealth(engine))
    }

    updateScore(score) {
        this.scoreText.text = `Score: ${score}`
    }

    reduceHealth(engine) {
        if (this.hearts.length > 0) {
            const heart = this.hearts.pop()
            heart.kill()
        }

        if (this.hearts.length === 0) {
            this.engine.goToScene('gameOver')
        }
    }
}