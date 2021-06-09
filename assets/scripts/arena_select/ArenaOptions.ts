import iSpriteWithName from './iSpriteWithName';

const { ccclass } = cc._decorator;
@ccclass
export default class ArenaOptions extends cc.Component {
  public spriteList: Array<iSpriteWithName> = [];

  public _selectedIndex = 0;

  private get selectedIndex() {
    return this._selectedIndex;
  }

  private set selectedIndex(newIndex: number) {
    this.spriteList[this.selectedIndex].sprite.node.scale = 0.2;
    this.spriteList[newIndex].sprite.node.scale = 0.3;
    this._selectedIndex = newIndex;
  }

  public onLoad(): void {
    this.spriteList = this.node.children.map(c => ({
      sprite: c.getComponent(cc.Sprite),
    }));
    this.selectedIndex = 0;
  }

  public selectUp(): void {
    if (this.selectedIndex > 0) {
      this.selectedIndex -= 1;
    } else {
      this.selectedIndex = this.spriteList.length - 1;
    }
  }

  public selectDown(): void {
    if (this.selectedIndex < this.spriteList.length - 1) {
      this.selectedIndex += 1;
    } else {
      this.selectedIndex = 0;
    }
  }

  public selectOption(): void {
    if (this.selectedIndex === 0) {
      cc.director.loadScene('shopping');
    }
    if (this.selectedIndex === 1) {
      cc.director.loadScene('center');
    }
    if (this.selectedIndex === 2) {
      cc.director.loadScene('place');
    }
    if (this.selectedIndex === 3) {
      cc.director.loadScene('cinesystem');
    }
    if (this.selectedIndex === 4) {
      cc.director.loadScene('trevo');
    }
  }
}
