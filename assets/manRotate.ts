import { _decorator, Component, EventKeyboard, input, Input, macro, Node, Quat, tween, UITransform, v3, Vec3 } from 'cc';
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
    deltaTime: number;
    deltatime: number;
    speed = 20
    start() {
        input.on(Input.EventType.MOUSE_MOVE, function (event) {
            var mousePos = event.getLocation();
            mousePos.x
            this.mousex = mousePos.x;

            this.mousey = mousePos.y;
            this.mousez = mousePos.x
            this.node.eulerAngles = v3(0, this.mousex, 0);
            console.log(this.mousex, "mouseX", this.mousey, "mouseY")
        }, this);
        this.changePos = this.node.getPosition();
        input.on(Input.EventType.KEY_PRESSING, this.onKeyPressing, this)
    }

    onKeyPressing(event: EventKeyboard) {
        switch (event.keyCode) {
            case 38: {
                // this.changePos.z += 2
                console.log("UP Pressed");
                let CharacterPosition = new Vec3();
                let Destination = new Vec3();

                Destination.x =
                    this.node.getPosition().x +
                    this.node.forward.x
                Destination.y = this.node.getPosition().y;
                Destination.z =
                    this.node.getPosition().z +
                    this.node.forward.z
                Vec3.lerp(
                    CharacterPosition,
                    this.node.getPosition(),
                    Destination,
                    0.5
                );

                this.node.setPosition(CharacterPosition);
            }
        }
    }
    update(deltaTime: number) {
        this.deltatime = deltaTime
    }

}
