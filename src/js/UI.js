import { ScreenElement, Label, Color, Font, FontUnit, Vector, Timer } from 'excalibur'
import { Resources } from './resources.js'
import { Heart } from "./hearts.js"
import { Textbar } from "./textbar.js"


export class UI extends ScreenElement {
    constructor(game, engine) {
        super()
        this.engine = engine
        this.hearts = []
        this.timeLeft = 6
        this.score = 0
    }

    onInitialize(engine) {
        const whitebar = new Textbar(140, 100)
        whitebar.graphics.use(Resources.Whitebar.toSprite())
        this.addChild(whitebar)
        whitebar.scale = new Vector(1.5, 3.5)

        this.scoreText = new Label({
            text: `Score: ${this.score}`,
            pos: new Vector(70, 30),
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px,
                color: Color.Black
            })
        })

        this.counterTime = new Label({
            text: `Time left: ${this.timeLeft}`,
            pos: new Vector(40, 120),
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px,
                color: Color.Black
            })
        })
        this.addChild(this.counterTime)

        const self = this

        this.timer = new Timer({
            fcn: function () {
                self.counter(engine)
            },
            interval: 1000,
            repeats: true
        })
        engine.add(this.timer)
        this.timer.start()

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

    onActivate(ctx,) {
        this.timeLeft = 6
        this.score = 0
        this.updateTimer()
        this.resetHearts()
        this.updateScore()
    }

    counter(engine) {
        this.timeLeft--
        this.updateTimer()
        if (this.timeLeft === 0) {
            engine.goToScene('levelEnd')
        }
    }

    updateTimer() {
        this.counterTime.text = `Time left: ${this.timeLeft}`
    }

    updateScore(score, scoreText) {
        this.scoreText.text = `Score: ${this.score}`
    }

    reduceHealth(engine) {
        if (this.hearts.length > 0) {
            const heart = this.hearts.pop()
            heart.kill()
        }

        if (this.hearts.length === 0) {
            engine.goToScene('levelFail')
        }
    }

    resetHearts() {
        this.hearts.forEach(heart => heart.kill())
        this.hearts = []

        for (let i = 0; i < 3; i++) {
            const heart = new Heart()
            heart.graphics.use(Resources.Heart.toSprite())
            heart.pos = new Vector(1150 + (i * 40), 50)
            this.addChild(heart)
            this.hearts.push(heart)
        }
    }
}