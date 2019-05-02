class Example1 extends Phaser.Scene {
    constructor() {
        super({key: 'Example1'});
    }

    preload() {
        this.load.image('pad', 'assets/control.png')
        this.load.image('pad2', 'assets/pad.jpg')
    }

    create() {
        this.image = this.add.image(400, 300, 'pad');
        // this.image.scaleTo(0.5,0.5);
        this.image.displayWidth = 250;
        this.image.displayHeight = 250;
        // this.image.height = 250;

        this.input.keyboard.on('keyup_D', (event) => {
            this.image.x += 10;
        })

        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

        // this.input.keyboard.on('keyup_A', (event) => {
        //     this.image.x -= 10;
        // })

        this.input.on('pointerdown', (event) => {
            this.image.x = event.x;
            this.image.y = event.y;
        });

        this.input.keyboard.on('keyup_P', (event) => {
            let physicsImage = this.physics.add.image(this.image.x, this.image.y, 'pad');
            // this.physicsImage.displayWidth = 250;
            // this.physicsImage.displayHeight = 250;
            physicsImage.setVelocity(Phaser.Math.RND.integerInRange(-100, 100), -300);
            // physicsImage.setVelocity(300, -200);
        });

        this.input.keyboard.on('keyup', (event) => {
            if(event.key == "2") {
                this.scene.start("Example2");
            }
            if(event.key == "3") {
                this.scene.start("Example3");
            }
        });

    }

    update(delta) {
        if(this.key_A.isDown)
            this.image.x--;
        // if(this.input.keyboard.)
    }
}