import Message from './src/message'
import { AppContext } from 'vue'

const _Message = Message

_Message.install = (app: AppContext) => {
  app.config.globalProperties.$message = _Message
}

export default _Message
