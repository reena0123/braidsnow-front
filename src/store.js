import { createStore } from "vuex";
import VuexORM from '@vuex-orm/core'
import User from '@/models/User'
import UserService from '@/models/UserService'

const database = new VuexORM.Database()

database.register(User)
database.register(UserService)

export default createStore({
	plugins: [VuexORM.install(database)]
});
