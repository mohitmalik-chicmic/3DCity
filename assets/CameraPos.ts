import { _decorator, Canvas, Component, Input, input, Node, v3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CameraPos')
export class CameraPos extends Component {
    // protected onLoad(): void {
    //     this.node.on(Node.EventType.MOUSE_MOVE, this.onMouseMove, this);
    // }
    // onMouseMove(event) {
    //     // Get the mouse position relative to the canvas
    //     const mousePos = event.getLocation();

    // }

    start() {

        input.on(Input.EventType.MOUSE_MOVE, function (event) {
            // var mousePos = this.node.parent
            //     .getComponent(UITransform)
            //     .convertToNodeSpaceAR(
            //         new Vec3(event.getUILocation().x, event.getUILocation().y, 0)
            //     );
            var mousePos = event.getLocation();
            mousePos.x
            this.mousex = mousePos.x;

            this.mousey = mousePos.y;
            this.mousez = mousePos.x
            //  this.mousey.convertToNodeSpaceAR(event.getLocation().x, event.getLocation().y)

            this.node.eulerAngles = v3(0, this.mousex, 0);
            // this.node.setPosition(new Vec3(0, 0, this.mousey));
            console.log(this.mousex, "mouseX", this.mousey, "mouseY")
        }, this);
    }


    update(deltaTime: number) {

    }
}

