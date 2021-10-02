import { Model } from '@vuex-orm/core'
import User from './User'
import Appointment from './Appointment'
import Service from './Service'
export default class AppointmentBookedService extends Model {

	static entity = 'appointment_booked_services'

	static fields () {
		
		return {
			id: this.attr(null),
			braider_id: this.attr(null),
			appointment_id: this.attr(null),
			service_id: this.attr(''),
			title: this.attr(''),
			price: this.attr(''),
			duration_in_minutes: this.attr(''),
			user_id: this.attr(''),
			user: this.belongsTo(User, 'user_id'),
			braider: this.belongsTo(User, 'braider_id'),
			service: this.belongsTo(Service, 'service_id'),
			appointment: this.belongsTo(Appointment, 'appointment_id')
		}
	}
}