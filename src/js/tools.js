import { Actor, Keys, Timer, Vector, CollisionType, Shape, Engine } from "excalibur"
import { Resources } from './resources'
import { Toolbox } from "./toolbox"

export class Hammer extends Actor {

    constructor(x, y) {
        super({
            x, y, width: Resources.width, height: Resources.height,
            collisionType: CollisionType.Active
        })
        this.tools = []

        this.collider.set(Shape.Box(10, 40))

        this.on('exitviewport', () => this.kill())
        this.on('exitviewport', () => Resources.WaterSplash.play(0.2))
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Hammer.toSprite())
        this.pos.x = 30 + Math.random() * 1100
        this.pos.y = 0
        this.body.mass = 16

        this.on('collisionstart', (event, engine) => this.hitSomething(event, engine))
        this.engine = engine
    }

    hitSomething(event, engine) {
        if (event.other instanceof Toolbox) {
            this.engine.currentScene.updateScore();
            Resources.Pipe.play(0.1)
            this.kill()
        }
    }
}

export class Wrench extends Actor {

    constructor(x, y) {
        super({
            x, y, width: Resources.width, height: Resources.height,
            collisionType: CollisionType.Active
        })
        this.tools = []

        this.collider.set(Shape.Box(10, 40))

        this.on('exitviewport', () => this.kill())
        this.on('exitviewport', () => Resources.WaterSplash.play(0.2))
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Wrench.toSprite())
        this.pos.x = 30 + Math.random() * 1100
        this.pos.y = 0
        this.body.mass = 6


        this.on('collisionstart', (event, engine) => this.hitSomething(event, engine))
        this.engine = engine
    }

    hitSomething(event) {
        if (event.other instanceof Toolbox) {
            this.engine.currentScene.updateScore();
            Resources.Pipe.play(0.1)
            this.kill()
        }
    }
}

export class Saw extends Actor {

    constructor(x, y) {
        super({
            x, y, width: Resources.width, height: Resources.height,
            collisionType: CollisionType.Active
        })
        this.tools = []
        this.body.mass = 1

        this.collider.set(Shape.Box(10, 40))

        this.on('exitviewport', () => this.kill())
        this.on('exitviewport', () => Resources.WaterSplash.play(0.2))
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Saw.toSprite())
        this.pos.x = 30 + Math.random() * 1100
        this.pos.y = 0
        this.body.mass = 10

        this.on('collisionstart', (event, engine) => this.hitSomething(event, engine))
        this.engine = engine
    }

    hitSomething(event) {
        if (event.other instanceof Toolbox) {
            this.engine.currentScene.updateScore();
            Resources.Pipe.play(0.1)
            this.kill()
        }
    }
}

export class Sawblade extends Actor {

    constructor(x, y) {
        super({
            x, y, width: Resources.width, height: Resources.height,
            collisionType: CollisionType.Active
        })
        this.tools = []

        this.collider.set(Shape.Box(10, 40))

        this.on('exitviewport', () => this.kill())
        this.on('exitviewport', () => Resources.WaterSplash.play(0.2))
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Sawblade.toSprite())
        this.pos.x = 30 + Math.random() * 1100
        this.pos.y = 0
        this.body.mass = 20

        this.on('collisionstart', (event, engine) => this.hitSomething(event, engine))
        this.engine = engine
    }

    hitSomething(event) {
        if (event.other instanceof Toolbox) {
            this.engine.currentScene.updateScore();
            Resources.Pipe.play(0.1)
            this.kill()
        }
    }
}

export class Pickaxe extends Actor {

    constructor(x, y) {
        super({
            x, y, width: Resources.width, height: Resources.height,
            collisionType: CollisionType.Active
        })
        this.tools = []

        this.collider.set(Shape.Box(10, 40))

        this.on('exitviewport', () => this.kill())
        this.on('exitviewport', () => Resources.WaterSplash.play(0.2))
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Pickaxe.toSprite())
        this.pos.x = 30 + Math.random() * 1100
        this.pos.y = 0
        this.body.mass = 12

        this.on('collisionstart', (event, engine) => this.hitSomething(event, engine))
        this.engine = engine
    }

    hitSomething(event) {
        if (event.other instanceof Toolbox) {
            this.engine.currentScene.updateScore();
            Resources.Pipe.play(0.1)
            this.kill()
        }
    }
}

export class Drill extends Actor {

    constructor(x, y) {
        super({
            x, y, width: Resources.width, height: Resources.height,
            collisionType: CollisionType.Active
        })
        this.tools = []

        this.collider.set(Shape.Box(10, 40))

        this.on('exitviewport', () => this.kill())
        this.on('exitviewport', () => Resources.WaterSplash.play(0.2))
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Drill.toSprite())
        this.pos.x = 30 + Math.random() * 1100
        this.pos.y = 0
        this.body.mass = 15

        this.on('collisionstart', (event, engine) => this.hitSomething(event, engine))
        this.engine = engine
    }

    hitSomething(event) {
        if (event.other instanceof Toolbox) {
            this.engine.currentScene.updateScore();
            Resources.Pipe.play(0.1)
            this.kill()
        }
    }
}
