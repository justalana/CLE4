import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    BGTaxi: new ImageSource('images/BG-watertaxi.JPG'),
    BGCruise: new ImageSource('images/BG-cruise.JPG'),
    BGHome: new ImageSource('images/BG-hole.JPG'),

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
}

const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }