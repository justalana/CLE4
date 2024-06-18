import { Scene, Label, Font, FontUnit, Vector, Color, Keys, Timer } from "excalibur"
import { Resources } from './resources.js'
import { UI } from './UI.js'
import { Hammer } from './tools.js'
import { Saw } from './tools.js'
import { Sawblade } from './tools.js'
import { Drill } from './tools.js'
import { Wrench } from './tools.js'
import { Pickaxe } from './tools.js'
import { Pufferfish } from './pufferfish.js'
import { Toolbox } from "./toolbox.js"
import { BG } from "./background.js"

export class Level1 extends Scene {

    tools = [
        "hammer",
        "pickaxe",
        "saw",
        "sawblade",
        "wrench",
        "drill"
    ];

    onInitialize(engine) {
        this.ui = new UI(this, engine)
        this.add(this.ui)

        this.tools = []
        this.pufferfishes = []

        this.createBackground()
        this.createToolbox()

        this.timer = new Timer({
            fcn: () => this.createTool(),
            interval: 5000,
            repeats: true
        })
        this.add(this.timer)
        this.timer.start()

        this.timer = new Timer({
            fcn: () => this.createHammer(),
            interval: 2000,
            repeats: true
        })
        this.add(this.timer)
        this.timer.start()

        this.timer = new Timer({
            fcn: () => this.createSaw(),
            interval: 2300,
            repeats: true
        })
        this.add(this.timer)
        this.timer.start()

        this.timer = new Timer({
            fcn: () => this.createSawblade(),
            interval: 2600,
            repeats: true
        })
        this.add(this.timer)
        this.timer.start()

        this.timer = new Timer({
            fcn: () => this.createDrill(),
            interval: 2900,
            repeats: true
        })
        this.add(this.timer)
        this.timer.start()

        this.timer = new Timer({
            fcn: () => this.createPickaxe(),
            interval: 1500,
            repeats: true
        })
        this.add(this.timer)
        this.timer.start()

        this.timer = new Timer({
            fcn: () => this.createWrench(),
            interval: 1800,
            repeats: true
        })
        this.add(this.timer)
        this.timer.start()
    }

    createBackground() {
        const bgCruise = new BG()
        bgCruise.graphics.use(Resources.BGHome.toSprite())
        this.add(bgCruise)
    }

    createToolbox() {
        const toolbox = new Toolbox()
        this.add(toolbox)
    }

    createDrill() {
        const drill = new Tool()
        this.add(drill)
        this.tools.push(drill)
    }

    createFish() {
        const pufferfish = new Pufferfish()
        this.add(pufferfish)
        this.pufferfishes.push(pufferfish)
    }

    updateScore() {
        if (this.ui) {
            this.engine.score++
            this.ui.updateScore(this.engine.score)
        }

        if (this.engine.score === 20) {
            this.engine.goToScene('gameOver')
        }
    }
}