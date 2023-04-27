import { _decorator, Canvas, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CameraPos')
export class CameraPos extends Component {
    protected onLoad(): void {
        this.node.on(Node.EventType.MOUSE_MOVE, this.onMouseMove, this);
    }
    onMouseMove(event) {
        // Get the mouse position relative to the canvas
        const mousePos = event.getLocation();

    }

    start() {

    }

    update(deltaTime: number) {

    }
}

