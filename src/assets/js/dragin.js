/**
 * 拖拽
 */

import '@/assets/styles/dragin';
import { addEvent, addClass } from './utils';

class Dragin {
    constructor(elem, options) {
        this.elem = elem;
        this.setOptions(options);
        this.setup();
    }

    // 设置配置
    setOptions({ start = noop, move = noop, end = noop, posi }) {
        this.callback = { start, move, end };
        this.posi = posi;
    }

    // 启动
    setup() {

        // this.elem.classList.add('dragin');
        addClass(this.elem, 'dragin');
        addEvent(this.elem, 'mousedown', (e) => {
            this.start(e);
        }, false)
    }

    start(e) {
        // this.elem.style.ev
        this.cx = this.elem.offsetLeft;
        this.cy = this.elem.offsetTop;
        this.disX = e.clientX - this.cx;
        this.disY = e.clientY - this.cy;

        this.unbind = addEvent(document, 'mousemove', (e) => {
            this.move(e);
        });

        this.unbind2 = addEvent(document, 'mouseup', () => {
            this.end();
        });


        this.callback.start(this.cx, this.cy);
    }

    move(e) {
        this.cx = e.clientX + this.disX;
        this.cy = e.clientY + this.disY;
        this.elem.style.left = this.cx + 'px';
        this.elem.style.top = this.cy + 'px';

        this.callback.move(this.cx, this.cy);
    }

    end() {

        // 释放事件
        this.unbind();
        this.unbind2();

        this.callback.end();
    }
}

/* new Vue({
    data() {
        return {
            x = 0, y = 0
        }
    },
    mounted() {
        let that = this;
        new Dragin(this.$refs.elem, {
            start(x, y) {
                
            },
            move(x, y) {
                that.x = x;
                that.y = y;
            },
            end() {
        
            }
        })
    }
}) */
