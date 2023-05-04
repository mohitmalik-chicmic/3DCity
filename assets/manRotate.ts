import { _decorator, Component, EventKeyboard, input, Input, KeyCode, macro, Node, Quat, SkeletalAnimation, tween, UITransform, v3, Vec3 } from 'cc';

import { CameraPos } from './CameraPos';
const { ccclass, property } = _decorator;
enum KEY {
    SPACE = 32,
    UP = 38,
    LEFT = 37,
    RIGHT = 39
}
@ccclass('manRotate')
export class manRotate extends Component {

    changeY = 0
    changePos: Vec3 = null;
    // @property({ type: Node })
    // camearaNode: Node = null;
    deltaTime: number;
    deltatime: number;
    speed = 5
    playerMove: boolean;
    CharacterPosition: Vec3;
    pos: any;
    moveCharacter: boolean;
    start() {
        input.on(Input.EventType.TOUCH_MOVE, function (event) {
            var mousePos = event.getLocation();
            mousePos.x
            this.mousex = mousePos.x;
            this.mousey = mousePos.y;
            this.mousez = mousePos.x
            this.node.eulerAngles = v3(0, this.mousex, 0);
            // if (this.mousey < 135)
            //     this.node.eulerAngles = v3(this.mousey, this.mousex, 0);
            // else
            //     this.node.eulerAngles = v3(this.node.eulerAngles.x, this.mousex, 0);
            // console.log(this.mousex, "mouseX", this.mousey, "mouseY")
        }, this);
        this.changePos = this.node.getPosition();
        input.on(Input.EventType.KEY_PRESSING, this.onKeyPressing, this)
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this)
    }
    onKeyPressing(event: EventKeyboard) {

        switch (event.keyCode) {
            case KeyCode.ARROW_UP: {
                console.log("UP Pressed");
                // this.node.eulerAngles = v3(0, this.pos, 0)
                this.moveCharacter = true
                // this.characterPosition()
            }
                break;
            case 37: {    //Left Arrow
                this.CharacterPosition = new Vec3();
                let Destination = new Vec3();
                Destination.x =
                    this.node.getPosition().x -
                    this.node.right.x
                Destination.y = this.node.getPosition().y;
                Destination.z =
                    this.node.getPosition().z -
                    this.node.right.z
                Vec3.lerp(
                    this.CharacterPosition,
                    this.node.getPosition(),
                    Destination,
                    1
                );
                this.node.setPosition(this.CharacterPosition);
            }
                break;
            case 39: { //Right Arrow

                this.CharacterPosition = new Vec3();
                let Destination = new Vec3();
                Destination.x =
                    this.node.getPosition().x +
                    this.node.right.x
                Destination.y = this.node.getPosition().y;
                Destination.z =
                    this.node.getPosition().z +
                    this.node.right.z
                Vec3.lerp(
                    this.CharacterPosition,
                    this.node.getPosition(),
                    Destination,
                    1
                );
                this.node.setPosition(this.CharacterPosition);
            }
                break;
        }
    }
    onKeyUp(event: EventKeyboard) {
        // this.node.eulerAngles = v3(0, this.pos, 0)
        this.moveCharacter = false
        // this.characterPosition()
    }

    characterPosition() {
        // this.CharacterPosition = new Vec3();
        // let Destination = new Vec3();
        // Destination.x =
        //     this.node.getPosition().x +
        //     this.node.forward.x
        // Destination.y = this.node.getPosition().y;
        // Destination.z =
        //     this.node.getPosition().z +
        //     this.node.forward.z
        // Vec3.lerp(
        //     this.CharacterPosition,
        //     this.node.getPosition(),
        //     Destination,
        //     0.5
        // );
        // this.node.setPosition(this.CharacterPosition);
        // this.camearaNode.getComponent(CameraPos).addDifference(this.node)
        // else {

        // }
    }
    // exitCollision() {
    //     let pos = this.node.getPosition();

    // }
    update(deltaTime: number) {
        if (this.moveCharacter) {
            this.deltatime = deltaTime
            this.CharacterPosition = new Vec3();
            let Destination = new Vec3();
            Destination.x =
                this.node.getPosition().x +
                this.node.forward.x * deltaTime * this.speed
            Destination.y = this.node.getPosition().y;
            Destination.z =
                this.node.getPosition().z +
                this.node.forward.z * deltaTime * this.speed
            Vec3.lerp(
                this.CharacterPosition,
                this.node.getPosition(),
                Destination,
                0.5
            );
            this.node.setPosition(this.CharacterPosition);
        }
    }
    // Time(node) {
    //     this.pos = node
    // }

}
