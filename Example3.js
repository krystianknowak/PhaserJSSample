// import Phaser, {Scene} from 'Phaser';

class Example3 extends Phaser.Scene {
    constructor() {
        super({key: "Example3"});
    }

    preload() {
        this.load.audio('fire', ['assets/fire.mp3']);
    }

    create() {
        this.soundFX = this.sound.add("fire", {loop: "true"});
        this.soundFX.play();
        this.soundFX.rate = 4.0;

        this.input.keyboard.on('keydown_L', (e) => {
            this.soundFX.loop = !this.soundFX.loop;
            if (this.soundFX.loop) 
                this.soundFX.play();
        });

        this.input.keyboard.on("keydown_P", (e) => {
            if(this.soundFX.isPlaying) this.soundFX.pause();
            else this.soundFX.resume();
        })
    }

    update(delta) {

    }
}
