import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    BGTaxi: new ImageSource('images/BG-watertaxi.JPG'),
    BGCruise: new ImageSource('images/BG-cruise.JPG'),
    BGHole: new ImageSource('images/BG-hole.JPG'),
    BGFixed: new ImageSource('images/BG-fix.PNG'),
    BGFish: new ImageSource('images/BG-vissen.PNG'),
    BGIntro: new ImageSource('images/BG-intro.PNG'),
    Drill: new ImageSource('images/drill.png'),
    Hammer: new ImageSource('images/hammer.png'),
    Pickaxe: new ImageSource('images/pickaxe.png'),
    Saw: new ImageSource('images/saw.png'),
    Sawblade: new ImageSource('images/sawblade.png'),
    Wrench: new ImageSource('images/wrench.png'),
    Pufferfish: new ImageSource('images/Pufferfish.png'),
    Toolbox: new ImageSource('images/toolbox.png'),
    Heart: new ImageSource('images/heart.png'),
    Whitebar: new ImageSource('images/whitebar.png'),
    Greenbar: new ImageSource('images/greenbar.png'),
    WaterSplash: new Sound('Sounds/splash2.wav'),
    Pipe: new Sound('Sounds/pipe.mp3'),
    A: new ImageSource('images/A.png')
}

const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }