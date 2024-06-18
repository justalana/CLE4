import '../css/style.css'
import { Engine, DisplayMode, SolverStrategy, Vector } from "excalibur"
import { ResourceLoader } from './resources.js'
import { Home } from './scenes.js'
import { Level1 } from './levels.js'
import { LevelEnd } from './scenes.js'


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
    }

    startGame() {
        const home = new Home()
        this.add('home', home)
        this.goToScene('home')

        const level1 = new Level1()
        this.add('level1', level1)

        const levelEnd = new LevelEnd()
        this.add('levelEnd', levelEnd)
    }
}

new Game()
