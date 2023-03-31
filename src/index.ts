import { VNode, DirectiveBinding, Comment } from "vue";

class VShowLazy {

    public mounted(el: HTMLElement, binding: DirectiveBinding, vNode: VNode, prevVnode: VNode) {
        const { value, oldValue } = binding;
        if (!value && oldValue === undefined) {
            const parentNode = el.parentNode;
            const comment = document.createComment("v-show-lazy");
            parentNode && parentNode.replaceChild(comment, el);
            vNode.el = comment;
            vNode.type = Comment;
            return
        }
        el.style.display = value ? "" : "none";
    }

    public updated(el: HTMLElement, binding: DirectiveBinding, vNode: VNode, prevVnode: VNode) {
         const { value } = binding;
         el.style.display = value ? "" : "none";
    }
}

export default new VShowLazy();