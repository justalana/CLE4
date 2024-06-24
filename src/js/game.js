import '../css/style.css'
import { Engine, DisplayMode, SolverStrategy, Vector, Input, Actor, Color } from "excalibur"
import { ResourceLoader } from './resources.js'
import { Home } from './scenes.js'
import { Level1 } from './levels.js'
import { Story } from './scenes.js'
import { LevelEnd } from './scenes.js'
import { LevelFail } from './levelFail.js'
import { End } from './scenes.js'


export class Game extends Engine {
    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen,
            suppressPlayButton: true,
            physics: {
                solver: SolverStrategy.Realistic,
                gravity: new Vector(0, 300),
            }
        })

        this.score = 0

        this.start(ResourceLoader).then(() => this.startGame())

        this.input.gamepads.enabled = true

        this.input.gamepads.on('connect', (gp) => {
            console.log('Gamepad connected:', gp)
        })

        this.input.gamepads.on('disconnect', (gp) => {
            console.log('Gamepad disconnected:', gp)
        })
    }

    startGame() {
        const home = new Home()
        this.add('home', home)
        this.goToScene('home')

        const level1 = new Level1()
        this.add('level1', level1)

        const levelEnd = new LevelEnd()
        this.add('levelEnd', levelEnd)

        const levelFail = new LevelFail()
        this.add('levelFail', levelFail)

        const story = new Story()
        this.add('story', story)

        const end = new End()
        this.add('end', end)
    }
}
new Game()
