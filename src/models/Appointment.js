import { Model } from '@vuex-orm/core'
import User from './User'

export default class Appointment extends Model {

	static entity = 'appointments'

	static fields () {
		
		return {
			id: this.attr(null),
			braider_id: this.attr(null),
			user_id: this.attr(null),
			full_name: this.attr(''),
			email_id: this.attr(''),
			phone: this.attr(''),
			schedule_date: this.attr(''),
			schedule_time: this.attr(''),
			address: this.attr(''),
			zip_code: this.attr(''),
			total_amount: this.attr(''),
			paid_paid: this.attr(''),
			due_amount: this.attr(''),
			payment_status: this.attr(''),
			txn_id: this.attr(''),
			status: this.attr(''),
			created_at: this.attr(''),
			updated_at: this.attr(''),
			user: this.belongsTo(User, 'user_id'),
			braider: this.belongsTo(User, 'braider_id')
		}
	}
}