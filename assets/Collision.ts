import { _decorator, BoxCollider, Component, CylinderCollider, ICollisionEvent, MeshCollider, Node } from 'cc';
import { manRotate } from './manRotate';
const { ccclass, property } = _decorator;

@ccclass('Collision')
export class Collision extends Component {
    @property({ type: Node })
    manNode: Node = null;
    playerMove: boolean = true;
    start() {
        this.checkCollision()
    }
    checkCollision() {
        const collider = this.node.getComponent(BoxCollider)!;
        collider.on('onCollisionEnter', this._onCollisionEnter, this);
        collider.on('onCollisionStay', this._onCollisionEnter, this);
        collider.on('onCollisionExit', this._onCollisionExit, this);
    }
    _onCollisionEnter(event: ICollisionEvent) {

        const otherCollider = event.otherCollider;
        if (otherCollider.node.name === 'group') {
            console.log("Other")
        }
        else {
            console.log("Collision Occured");
            this.playerMove = false

        }
    }
    _onCollisionExit() {
        this.playerMove = true
        console.log("END Collision")
    }
    update(deltaTime: number) {

    }
}



