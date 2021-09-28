import { Model } from '@vuex-orm/core'
import UserService from './UserService'

export default class User extends Model {

	static entity = 'users'

	static fields () {
		
		return {
			id: this.attr(null),
			role_id: this.attr(null),
			name: this.attr(''),
			email: this.attr(''),
			avatar: this.attr(''),
			state: this.attr(''),
			city: this.attr(''),
			zipcode: this.attr(''),
			business_name: this.attr(''),
			website_link: this.attr(''),
			business_phone_number: this.attr(''),
			introduction: this.attr(''),
			special_introduction: this.attr(''),
			policy_procedure: this.attr(''),
			booking_deposit_amount: this.attr(''),
			coupon_code: this.attr(''),
			do_you_braid_out_of_a_shop: this.attr(false),
			do_you_braid_from_home: this.attr(false),
			are_you_a_mobile: this.attr(false),
			can_you_provide_hair: this.attr(false),
			do_you_wash_hair: this.attr(false),
			status: this.attr(false),
			api_token: this.attr(''),
			created_at: this.attr(''),
			updated_at: this.attr(''),
			user_services: this.hasMany(UserService, 'user_id')
		}
	}
}