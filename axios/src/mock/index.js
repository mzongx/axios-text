import Mock from 'mockjs'

const List = [];
const count = 10;

// for (let i = 0; i < count; i++) {
	List.push(Mock.mock('www.miao.com',{
		name: '@cname',
		'age|1-100': 1,
		color: '@color'
	}))
// }


 
export default Mock.mock('/getInviteList/',{
	data: {
		'list|0-10': [{
			
			'icon': '@image',
			'name': '@cname',
			'inviteTime': '@date'
		}],
		'hasMore|0-1': 1,
		'invitePeopleNum|1-50': 20,
		'getAwardNum|10-600': 12,
		'hasAward|0-1': 1
	}
})