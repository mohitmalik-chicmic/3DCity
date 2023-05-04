import { _decorator, Canvas, Component, Input, input, Node, v3, Vec3 } from 'cc';
import { manRotate } from './manRotate';
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
    @property({ type: Node })
    manRotate: Node = null;
    mouseeX
    pos = new Vec3(0, 0, 0)
    start() {

        input.on(Input.EventType.TOUCH_MOVE, function (event) {
            // var mousePos = this.node.parent
            //     .getComponent(UITransform)
            //     .convertToNodeSpaceAR(
            //         new Vec3(event.getUILocation().x, event.getUILocation().y, 0)
            //     );
            var mousePos = event.getLocation();
            mousePos.x
            this.mousex = mousePos.x;
            this.mouseeX = this.mousex
            this.mousey = mousePos.y;
            this.mousez = mousePos.x
            //  this.mousey.convertToNodeSpaceAR(event.getLocation().x, event.getLocation().y)

            this.node.eulerAngles = v3(this.node.eulerAngles.x, this.mousex, this.node.eulerAngles.z);
            // this.node.setPosition(new Vec3(0, 0, this.mousey));
            // console.log(this.mousex, "mouseX", this.mousey, "mouseY")
        }, this);
    }
    addDifference(manNode) {
        this.pos.x = (manNode.getPosition().x - this.node.getPosition().x) / 20;
        this.pos.y = manNode.getPosition().y - this.node.getPosition().y;
        this.pos.z = (manNode.getPosition().z - this.node.getPosition().z) / 20;
        let p = this.node.getPosition()
        this.node.setPosition(new Vec3(p.x + this.pos.x, p.y, p.z + this.pos.z))
    }

    update(deltaTime: number) {
        // this.manRotate.getComponent(manRotate).Time(this.mouseeX)
    }
}

