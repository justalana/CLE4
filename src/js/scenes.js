import { Scene, Label, Font, FontUnit, Vector, Color, Keys, Timer } from "excalibur"
import { Resources } from './resources.js'
import { Textbar } from "./textbar.js"
import { BG } from "./background.js"

export class Home extends Scene {
    onInitialize(engine) {
        this.createBackground(engine)
        const whitebar = new Textbar(140, 50)
        whitebar.graphics.use(Resources.Whitebar.toSprite())
        this.add(whitebar)
        whitebar.scale = new Vector(3.5, 3.5)

        this.title = new Label({
            text: `Seas Of Salvage`,
            pos: new Vector(400, 30),
            font: new Font({
                family: 'impact',
                size: 80,
                unit: FontUnit.Px,
                color: Color.Black
            })
        })
        engine.add(this.title)

        this.start = new Label({
            text: 'Press SPACE to start  ( :',
            pos: new Vector(30, 500),
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px,
                color: Color.White
            })
        })
        engine.add(this.start)
    }

    onPreUpdate(engine) {
        let kb = engine.input.keyboard

        if (kb.wasPressed(Keys.Space)) {
            engine.goToScene('level1')
        }
    }

    createBackground(engine) {
        const background = new BG()
        // if (background) {
        //     BG.graphics.use(Resources.BGTaxi.toSprite())
        // }
        background.graphics.use(Resources.BGTaxi.toSprite())
        engine.add(background)
    }
}

export class LevelEnd extends Scene {
    onInitialize(engine) {
        this.createBackground(engine)
        const greenbar = new Textbar(670, 110)
        greenbar.graphics.use(Resources.Whitebar.toSprite())
        this.add(greenbar)
        greenbar.scale = new Vector(3.5, 2.5)

        if (this.engine.score >= 39) {
            this.title = new Label({
                text: `Well done lad`,
                pos: new Vector(400, 70),
                font: new Font({
                    family: 'impact',
                    size: 80,
                    unit: FontUnit.Px,
                    color: Color.Black
                })
            })
            engine.add(this.title)

            this.nextLevel = new Label({
                text: `Go to next level`,
                pos: new Vector(400, 130),
                font: new Font({
                    family: 'impact',
                    size: 40,
                    unit: FontUnit.Px,
                    color: Color.Black
                })
            })
            engine.add(this.nextLevel)
            this.nextLevel.on('pointerdown', () => {
                engine.goToScene('level2')
            })
        }

        if (this.engine.score <= 38) {
            this.title = new Label({
                text: `Yer almost had it`,
                pos: new Vector(400, 70),
                font: new Font({
                    family: 'impact',
                    size: 80,
                    unit: FontUnit.Px,
                    color: Color.Black
                })
            })
            engine.add(this.title)

            const greenbarRetry = new Textbar(350, 260)
            greenbarRetry.graphics.use(Resources.Greenbar.toSprite())
            this.add(greenbarRetry)
            greenbarRetry.scale = new Vector(1.7, 1.5)

            this.retry = new Label({
                text: `Try again`,
                pos: new Vector(240, 240),
                font: new Font({
                    family: 'impact',
                    size: 40,
                    unit: FontUnit.Px,
                    color: Color.Black
                })
            })
            engine.add(this.retry)
            this.retry.on('pointerdown', () => {
                engine.goToScene('level1')
            })
        }

        const greenbarScore = new Textbar(390, 520)
        greenbarScore.graphics.use(Resources.Whitebar.toSprite())
        this.add(greenbarScore)
        greenbarScore.scale = new Vector(2.1, 1.5)

        const greenbarHome = new Textbar(350, 390)
        greenbarHome.graphics.use(Resources.Greenbar.toSprite())
        this.add(greenbarHome)
        greenbarHome.scale = new Vector(1.7, 1.5)

        // this.finalScore = new Label({
        //     text: `Your final score is ${this.score}`,
        //     pos: new Vector(240, 500),
        //     font: new Font({
        //         family: 'impact',
        //         size: 40,
        //         unit: FontUnit.Px,
        //         color: Color.Black
        //     })
        // })
        // engine.add(this.finalScore)

        this.home = new Label({
            text: `Return to Boat`,
            pos: new Vector(240, 370),
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px,
                color: Color.Black
            })
        })
        engine.add(this.home)
        this.home.on('pointerdown', () => {
            engine.goToScene('home')
        })
    }

    onActivate(engine) {
        this.engine.score = 0
    }

    onPreUpdate() {
        this.home.on('pointerdown', () => {
            this.engine.goToScene('home')
        })
    }

    createBackground(engine) {
        const background = new BG()
        // if (background) {
        //     BG.graphics.use(Resources.BGTaxi.toSprite())
        // }
        background.graphics.use(Resources.BGCruise.toSprite())
        engine.add(background)
    }
}