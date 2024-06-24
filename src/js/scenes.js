import { Scene, Label, Font, FontUnit, Vector, Color, Input } from "excalibur"
import { Resources } from './resources.js'
import { Textbar } from "./textbar.js"
import { BG } from "./background.js"
import { A } from "./A.js"

export class Home extends Scene {
    onInitialize(engine) {
        this.createBackground(engine)
        const whitebar = new Textbar(650, 120)
        whitebar.graphics.use(Resources.Whitebar.toSprite())
        this.add(whitebar)
        whitebar.scale = new Vector(3.5, 3.5)

        const greenbarStart = new Textbar(280, 385)
        greenbarStart.graphics.use(Resources.Greenbar.toSprite())
        this.add(greenbarStart)
        greenbarStart.scale = new Vector(2.8, 2.5)

        this.title = new Label({
            text: `Seas Of Salvage`,
            pos: new Vector(400, 80),
            font: new Font({
                family: 'impact',
                size: 80,
                unit: FontUnit.Px,
                color: Color.Black
            })
        })
        engine.add(this.title)

        this.start = new Label({
            text: 'Start your journey',
            pos: new Vector(60, 350),
            font: new Font({
                family: 'impact',
                size: 60,
                unit: FontUnit.Px,
                color: Color.Black
            })
        })
        engine.add(this.start)

        const a = new A(520, 450)
        a.graphics.use(Resources.A.toSprite())
        this.add(a)
        a.scale = new Vector(0.07, 0.07)

        this.on('postupdate', () => {
            const gamepad = this.input.gamepads.at(0)

            if (gamepad) {
                if (gamepad.wasButtonPressed(Input.Buttons.Face1)) {
                    engine.goToScene('story')
                }
            }
        })
    }

    createBackground(engine) {
        const background = new BG()
        background.graphics.use(Resources.BGTaxi.toSprite())
        engine.add(background)
    }
}

export class Story extends Scene {
    onInitialize(engine) {
        this.createBackground(engine)
        const whitebar = new Textbar(1000, 120)
        whitebar.graphics.use(Resources.Whitebar.toSprite())
        this.add(whitebar)
        whitebar.scale = new Vector(2.5, 2.5)

        this.text1 = new Label({
            text: `The Holland America line used to be one of the \ngreatest boat travel lines there was.\n\n But everything changed when my boat wasn't \n good enough anymore...`,
            pos: new Vector(800, 80),
            font: new Font({
                family: 'Poppins',
                size: 20,
                unit: FontUnit.Px,
                color: Color.Black
            })
        })
        engine.add(this.text1)

        const whitebar2 = new Textbar(1000, 300)
        whitebar2.graphics.use(Resources.Whitebar.toSprite())
        this.add(whitebar2)
        whitebar2.scale = new Vector(2.5, 2.5)

        this.text2 = new Label({
            text: `That's why I must upgrade my boat!\n I must fix my boat so that the line can \nbe restored again.\n But I can't seem to find my tools..`,
            pos: new Vector(800, 260),
            font: new Font({
                family: 'Poppins',
                size: 20,
                unit: FontUnit.Px,
                color: Color.Black
            })
        })
        engine.add(this.text2)

        const whitebar3 = new Textbar(1000, 480)
        whitebar3.graphics.use(Resources.Whitebar.toSprite())
        this.add(whitebar3)
        whitebar3.scale = new Vector(2.5, 2.5)

        this.text3 = new Label({
            text: `If you can gather my tools from the leaking deck, \n I'll make sure the boat is ready to go.\n Use your arrows to catch the tools.\n Try to catch 40 tools before the timer runs out.\n P.S. Don't catch the fish. Good luck!`,
            pos: new Vector(800, 420),
            font: new Font({
                family: 'Poppins',
                size: 20,
                unit: FontUnit.Px,
                color: Color.Black
            })
        })
        engine.add(this.text3)

        const greenbarStart = new Textbar(1070, 620)
        greenbarStart.graphics.use(Resources.Greenbar.toSprite())
        this.add(greenbarStart)
        greenbarStart.scale = new Vector(1.6, 1.5)

        this.start = new Label({
            text: `Gather tools`,
            pos: new Vector(970, 600),
            font: new Font({
                family: 'Impact',
                size: 40,
                unit: FontUnit.Px,
                color: Color.Black
            })
        })
        engine.add(this.start)

        const a = new A(1200, 650)
        a.graphics.use(Resources.A.toSprite())
        this.add(a)
        a.scale = new Vector(0.04, 0.04)

        this.on('postupdate', () => {
            const gamepad = this.input.gamepads.at(0)

            if (gamepad) {
                if (gamepad.wasButtonPressed(Input.Buttons.Face1)) {
                    engine.goToScene('level1')
                }
            }
        })
    }

    createBackground(engine) {
        const background = new BG()
        background.graphics.use(Resources.BGIntro.toSprite())
        engine.add(background)
    }
}

export class LevelEnd extends Scene {
    onInitialize(engine) {
        this.createBackground(engine)
        const greenbar = new Textbar(680, 110)
        greenbar.graphics.use(Resources.Whitebar.toSprite())
        greenbar.scale = new Vector(3.5, 2.5)
        this.add(greenbar)

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

            const greenbarStart = new Textbar(280, 385)
            greenbarStart.graphics.use(Resources.Greenbar.toSprite())
            this.add(greenbarStart)
            greenbarStart.scale = new Vector(2.8, 2.5)

            this.start = new Label({
                text: 'Return to boat',
                pos: new Vector(60, 350),
                font: new Font({
                    family: 'impact',
                    size: 60,
                    unit: FontUnit.Px,
                    color: Color.Black
                })
            })
            engine.add(this.start)

            const a = new A(520, 450)
            a.graphics.use(Resources.A.toSprite())
            this.add(a)
            a.scale = new Vector(0.07, 0.07)

            const greenbarScore = new Textbar(290, 620)
            greenbarScore.graphics.use(Resources.Whitebar.toSprite())
            this.add(greenbarScore)
            greenbarScore.scale = new Vector(2.3, 1.5)

            this.finalScore = new Label({
                text: `Your final score is ${this.engine.score}`,
                pos: new Vector(130, 600),
                font: new Font({
                    family: 'impact',
                    size: 40,
                    unit: FontUnit.Px,
                    color: Color.Black
                })
            })
            engine.add(this.finalScore)

            this.on('postupdate', () => {
                const gamepad = this.input.gamepads.at(0)

                if (gamepad) {
                    if (gamepad.wasButtonPressed(Input.Buttons.Face1)) {
                        console.log('pressed');
                        engine.goToScene('end')
                    }
                }
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

            const greenbarScore = new Textbar(390, 520)
            greenbarScore.graphics.use(Resources.Whitebar.toSprite())
            this.add(greenbarScore)
            greenbarScore.scale = new Vector(2.3, 1.5)

            this.finalScore = new Label({
                text: `Your final score is ${this.engine.score}`,
                pos: new Vector(230, 500),
                font: new Font({
                    family: 'impact',
                    size: 40,
                    unit: FontUnit.Px,
                    color: Color.Black
                })
            })
            engine.add(this.finalScore)
        }
    }

    createBackground(engine) {
        const background = new BG()
        if (this.engine.score <= 38) {
            background.graphics.use(Resources.BGFish.toSprite())
        } else {
            background.graphics.use(Resources.BGFixed.toSprite())
        }
        engine.add(background)
    }
}

export class End extends Scene {
    onInitialize(engine) {
        this.createBackground(engine)
        const whitebar = new Textbar(650, 120)
        whitebar.graphics.use(Resources.Whitebar.toSprite())
        this.add(whitebar)
        whitebar.scale = new Vector(3.5, 3.5)

        this.title = new Label({
            text: `Boat restored`,
            pos: new Vector(400, 80),
            font: new Font({
                family: 'impact',
                size: 80,
                unit: FontUnit.Px,
                color: Color.Black
            })
        })
        engine.add(this.title)
    }

    createBackground(engine) {
        const background = new BG()
        background.graphics.use(Resources.BGCruise.toSprite())
        engine.add(background)
    }
}