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
        const whitebar = new Whitebar(140, 50)
        this.addChild(whitebar)
        whitebar.scale = new Vector(1.5, 1.5)

        this.addChild(this.scoreText)

        for (let i = 0; i < 3; i++) {
            const heart = new Heart()
            heart.graphics.use(Resources.Heart.toSprite())
            heart.pos = new Vector(1150 + (i * 40), 50)
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