import { createApp, h } from 'vue';
import Dialog from './Dialog.vue'
export const openDialog = (options) => {
    const { title, content, ok, cancal } = options;
    const dialogDiv = document.createElement('div');
    document.body.appendChild(dialogDiv);
    const app = createApp({
        render() {
            return h(Dialog,
                {
                    visible: true,
                    'onUpdate:visible': (newVisible) => {
                        if (newVisible === false) {
                            app.unmount()
                            dialogDiv.remove();
                        }
                    },ok,cancal
                }, { title, content })

        }
    });
    app.mount(dialogDiv)
}