/**
 * 烟花
 * @author xuwanwan */

class Fire {
  constructor(options) {
    super(options);
    const me = this;
    me.x = options.site.o;
    me.ex = options.site.e;
    me.y = options.site.y;
    me.ey = options.site.ey;
    me.vx = options.speed.x;
    me.vy = options.speed.y;
  }

  updata() {
    const me = this;
    me.x += me.vx;
    if (me.x > me.ex) {
      me.x = me.ex;
    }
    me.draw();
  }

  draw() {
    const me = this;
    me.up();
  }

  up() {
    const me = this;
    let ctx = me.options.ctx;

    ctx.beginPath();
    ctx.arc(me.x, me.y, 50, 0, Math.PI * 2, true);
    ctx.stroke();
  }

  boom() {
    const me = this;
    let ctx = me.options.ctx;
  }
};

class Firework {
  constructor(options) {
    super(options);
    this.fireDist = {};
    this.init();
  }

  init() {
    const me = this;
    let dom = document.createElement('canvas');
    dom.width = me.options.width;
    dom.height = me.options.height;
    let ctx = dom.getContext('2d');
    me.dom = dom;
    me.ctx = ctx;
    me.createFire();
  }

  createFire() {
    const me = this;
    let ctx = me.ctx;
    let options = me.options;
    for (let i = 0; i < options.sum; i++) {
      let fire = new Fire({
        site: options.site[i],
        speed: options.speed[i]
      });
      me.fireDist[fire + 'i'] = fire;
    }
  }
}

export default Firework;
