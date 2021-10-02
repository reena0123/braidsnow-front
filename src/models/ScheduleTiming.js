import { Model } from '@vuex-orm/core'
import User from './User'
import WorkingDay from './WorkingDay'

export default class ScheduleTiming extends Model {

	static entity = 'schedule_timings'
	static fields () {
		
		return {
			id: this.attr(null),
			braider_id: this.attr(null),
			working_day_id: this.attr(null),
			start_time: this.attr(''),
			end_time: this.attr(''),
			status: this.attr(null),
			created_at: this.attr(''),
			updated_at: this.attr(''),
			braider: this.belongsTo(User, 'braider_id'),
			working_day: this.belongsTo(WorkingDay, 'working_day_id')

		}
	}
}