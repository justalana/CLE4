import '../css/style.css'
import { Engine, DisplayMode, SolverStrategy, Vector, Input, Actor, Color } from "excalibur"
import { ResourceLoader } from './resources.js'
import { Home } from './scenes.js'
import { Level1 } from './levels.js'
import { Level2 } from './level2.js'
import { Level3 } from './level3.js'
import { Story } from './scenes.js'
import { LevelEnd } from './scenes.js'
import { LevelFail } from './levelFail.js'

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

        // this.on('postupdate', () => {
        //     const gamepad = this.input.gamepads.at(0)

        //     if (gamepad) {
        //         if (gamepad.wasButtonPressed(Input.Buttons.Face1)) {
        //             // console.log('A button pressed')
        //         }
        //     }
        // })
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

        const level2 = new Level2()
        this.add('level2', level2)

        const level3 = new Level3()
        this.add('level3', level3)

        const story = new Story()
        this.add('story', story)
    }
}
new Game()
