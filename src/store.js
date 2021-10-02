import { createStore } from "vuex";
import VuexORM from '@vuex-orm/core'
import User from '@/models/User'
import UserService from '@/models/UserService'
import Appointment from '@/models/Appointment'
import AppointmentBookedService from '@/models/AppointmentBookedService'
import Favourite from '@/models/Favourite'
import Migration from '@/models/Migration'
import PasswordReset from '@/models/PasswordReset'
import Permission from '@/models/Permission'
import RolePermission from '@/models/RolePermission'
import Role from '@/models/Role'
import ScheduleTiming from '@/models/ScheduleTiming'
import Service from '@/models/Service'
import SocialMedia from '@/models/SocialMedia'
import WorkingDay from '@/models/WorkingDay'
import Portfolio from '@/models/Portfolio'
 
const database = new VuexORM.Database()

database.register(User)
database.register(UserService)
database.register(Appointment)
database.register(AppointmentBookedService)
database.register(Favourite)
database.register(Migration)
database.register(PasswordReset)
database.register(Permission)
database.register(RolePermission)
database.register(Role)
database.register(ScheduleTiming)
database.register(Service)
database.register(SocialMedia)
database.register(WorkingDay)
database.register(Portfolio)

export default createStore({
	plugins: [VuexORM.install(database)]
});
