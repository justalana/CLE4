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
        const whitebar = new Textbar(140, 50)
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
        background.graphics.use(Resources.BGCruise.toSprite())
        engine.add(background)
    }
}