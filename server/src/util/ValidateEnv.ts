import {cleanEnv} from 'envalid'
import {port, str } from 'envalid/dist/validators'

export default cleanEnv(process.env,{
    MONGODB_STRING_CONNECTION :str(),
    PORT:port()
})