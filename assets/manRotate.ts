import { _decorator, Component, EventKeyboard, input, Input, Node, Quat, tween, v3, Vec3 } from 'cc';
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
    @property({ type: Node })
    camera: Node = null;
    start() {
        this.changePos = this.node.getPosition();
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this)
        this.node.eulerAngles = v3(0, 0, 0)
        //     input.on(Input.EventType.KEY_PRESSING, this.onKeyPressing, this)
    }
    onKeyDown(event: EventKeyboard) {
        // if (this.changeY >= -270)
        //     this.changeY = 90
        // if (this.changeY >= 270)
        //     this.changeY = -90
        switch (event.keyCode) {
            case 37: {
                console.log("Left Pressed")
                this.changeY -= 90
                tween(this.node)
                    .to(1, { eulerAngles: v3(0, this.changeY, 0) })
                    .start()
                console.log("Change", this.node.eulerAngles.y)
            }
                break;
            case 38: {
                //     console.log("UP Pressed");
                //     this.changePos.z -= 0.1
                //     this.node.setPosition(this.changePos);
                //     this.node.eulerAngles = v3(0, 180, 0);
                //     console.log("Change", this.node.eulerAngles.y)
                // }


                if (this.node.eulerAngles.y == 90) {   //Right
                    this.changePos.x += 0.3
                    tween(this.node)
                        .to(0, { position: this.changePos })
                    this.node.setPosition(this.changePos);
                }
                if (this.node.eulerAngles.y == -90) {   //Left 
                    this.changePos.x -= 0.3
                    tween(this.node)
                        .to(0, { position: this.changePos })
                    this.node.setPosition(this.changePos);
                }
                if (this.node.eulerAngles.y == 180 || this.node.eulerAngles.y == -180) {   //Forward
                    this.changePos.z -= 0.3
                    tween(this.node)
                        .to(0, { position: this.changePos })
                    this.node.setPosition(this.changePos);
                }
                if (this.node.eulerAngles.y == 0) {      //BackWard
                    this.changePos.z += 0.3
                    console.log("BackWard Clicked")
                    tween(this.node)
                        .to(0, { position: this.changePos })
                    this.node.setPosition(this.changePos);
                }
            }
                break;
            case 39: {
                console.log("Right Pressed")
                this.changeY += 90
                tween(this.node)
                    .to(1, { eulerAngles: v3(0, this.changeY, 0) })
                    .start()
                // this.node.eulerAngles = v3(0, this.changeY, 0);
                // this.node.eulerAngles = v3(0, 90, 0);
                console.log("Change", this.node.eulerAngles.y)
            }
                break;
            // case 40: {
            //     console.log("Down Pressed")
            //     this.node.eulerAngles = v3(0, 0, 0);
            //     console.log("Change", this.camera.eulerAngles)
            //     // let angle = this.camera.eulerAngles.y
            //     // angle = 170;//
            //     this.camera.eulerAngles = v3(this.camera.eulerAngles.x, 170, this.camera.eulerAngles.z)
            //     // this.camera.setPosition(new Vec3(this.camera.getPosition().x, this.camera.getPosition().y, -7))
            // }
            //     break;
        }

    }
    update(deltaTime: number) {

    }
}

function newVec3(changePos: Vec3): Readonly<Vec3> {
    throw new Error('Function not implemented.');
}
// function newVec3(changePos: Vec3): Readonly<Vec3> {
//     throw new Error('Function not implemented.');
// }
