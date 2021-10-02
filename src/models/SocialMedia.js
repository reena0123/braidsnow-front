import { Model } from '@vuex-orm/core'

export default class SocialMedia extends Model {

	static entity = 'social_media'
	static fields () {
		
		return {
			id: this.attr(null),
			facebook_url: this.attr(''),
			twitter_url: this.attr(''),
			instagram_url: this.attr(''),
			pinterest_url: this.attr(''),
			linkedin_url: this.attr(''),
			youtube_url: this.attr(''),
			
		}
	}
}