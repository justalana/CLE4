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
    constructor() {
        super()
        this.score = 0
        this.timer = 0
    }

    onInitialize(engine) {
        this.tools = []
        this.pufferfishes = []

        this.createBackground()
        this.createToolbox()
        this.createUi()

        this.timer = new Timer({
            fcn: () => this.createFish(),
            interval: 1000,
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

    onActivate(ctx) {
        this.score = 0
        this.timer = 0

        // this.ui.updateScore(this.score)
        this.ui.onActivate()
    }

    onPreUpdate(engine, delta) {
        // Update timer
        this.timer += delta

        // Game logic, such as checking for game over, collisions, etc.
    }

    createBackground() {
        const bgHole = new BG()
        bgHole.graphics.use(Resources.BGHole.toSprite())
        this.add(bgHole)
    }

    createToolbox() {
        const toolbox = new Toolbox()
        this.add(toolbox)
    }

    createHammer() {
        const hammer = new Hammer()
        this.add(hammer)
        this.tools.push(hammer)
    }

    createWrench() {
        const wrench = new Wrench()
        this.add(wrench)
        this.tools.push(wrench)
    }

    createPickaxe() {
        const pickaxe = new Pickaxe()
        this.add(pickaxe)
        this.tools.push(pickaxe)
    }

    createSaw() {
        const saw = new Saw()
        this.add(saw)
        this.tools.push(saw)
    }

    createSawblade() {
        const sawblade = new Sawblade()
        this.add(sawblade)
        this.tools.push(sawblade)
    }

    createDrill() {
        const drill = new Drill()
        this.add(drill)
        this.tools.push(drill)
    }

    createFish() {
        const pufferfish = new Pufferfish()
        this.add(pufferfish)
        this.pufferfishes.push(pufferfish)
    }

    createUi(engine) {
        this.ui = new UI(this, engine)
        this.add(this.ui)
    }

    updateScore() {
        if (this.ui) {
            this.engine.score++
            this.ui.updateScore(this.engine.score)
        }
    }

    levelEnd() {
        if (timeLeft === 0) {
            this.engine.goToScene('levelEnd')
        }
    }
}