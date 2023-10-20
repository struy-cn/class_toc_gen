import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Button, message,Input,Radio,RadioGroup,RadioButton } from 'ant-design-vue';

const app = createApp(App)

app.use(router)
/* 会自动注册 Button 下的子组件, 例如 Button.Group */
app.use(Button)
app.use(Input)
app.use(Radio)
app.use(RadioGroup)
app.use(RadioButton)
app.config.globalProperties.$message = message;
app.mount('#app')