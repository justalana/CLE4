import { ScreenElement, Label, Color, Font, FontUnit, Vector, Timer } from 'excalibur'
import { Resources } from './resources.js'
import { Heart } from "./hearts.js"
import { Textbar } from "./textbar.js"

let timeLeft = 6

export class UI extends ScreenElement {
    constructor(game, engine) {
        super()
        this.engine = engine
        this.hearts = []
    }

    onInitialize(engine) {
        const whitebar = new Textbar(140, 100)
        whitebar.graphics.use(Resources.Whitebar.toSprite())
        this.addChild(whitebar)
        whitebar.scale = new Vector(1.5, 3.5)

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
        this.scoreText.on('pointerdown', () => {
            this.engine.goToScene('levelEnd')
        })

        this.counterTime = new Label({
            text: `Time left: ${timeLeft}`,
            pos: new Vector(40, 120),
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px,
                color: Color.Black
            })
        })
        this.engine.add(this.counterTime)

        this.timer = new Timer({
            fcn: () => this.counter(),
            interval: 1000,
            repeats: true
        })
        this.engine.add(this.timer)
        this.timer.start()

        this.addChild(this.scoreText)

        for (let i = 0; i < 3; i++) {
            const heart = new Heart()
            heart.graphics.use(Resources.Heart.toSprite())
            heart.pos = new Vector(1150 + (i * 40), 50)
            this.addChild(heart)
            this.hearts.push(heart)
        }

        engine.on('pufferfish-exit', () => this.reduceHealth(engine, timeLeft))
    }

    counter() {
        timeLeft--
        this.counterTime.text = `Time left: ${timeLeft}`
        if (timeLeft === 0) {
            this.engine.goToScene('levelEnd')
        }
    }

    updateScore(score, scoreText) {
        this.scoreText.text = `Score: ${score}`
    }

    reduceHealth(engine) {
        if (this.hearts.length > 0) {
            const heart = this.hearts.pop()
            heart.kill()
        }

        if (this.hearts.length === 0) {
            this.engine.goToScene('levelFail')
        }
    }

}