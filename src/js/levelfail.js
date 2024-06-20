import { Scene, Label, Font, FontUnit, Vector, Color, Keys, Timer } from "excalibur"
import { Resources } from './resources.js'
import { Textbar } from "./textbar.js"
import { BG } from "./background.js"

export class LevelFail extends Scene {
    onInitialize(engine) {
        this.createBackground(engine)
        const greenbar = new Textbar(600, 100)
        greenbar.graphics.use(Resources.Greenbar.toSprite())
        this.add(greenbar)
        greenbar.scale = new Vector(4.5, 2.5)

        this.title = new Label({
            text: `Fish don't belong in a toolbox ) :`,
            pos: new Vector(220, 70),
            font: new Font({
                family: 'impact',
                size: 60,
                unit: FontUnit.Px,
                color: Color.Black
            })
        })
        engine.add(this.title)

        this.home = new Label({
            text: `Return to Boat`,
            pos: new Vector(240, 340),
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px,
                color: Color.Black
            })
        })
        engine.add(this.home)

        this.retry = new Label({
            text: `Try again`,
            pos: new Vector(240, 230),
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px,
                color: Color.Black
            })
        })
        engine.add(this.retry)
    }

    createBackground(engine) {
        const bg = new BG()
        bg.graphics.use(Resources.BGCruise.toSprite())
        this.add(bg)
    }
}