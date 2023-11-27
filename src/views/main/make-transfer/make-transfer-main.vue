<template>
	<v-row no-gutters justify="center">
		<v-col cols="12" sm="6" class="pr-2">
			<select-addressee-main :userList="userList" @selectedUser="selectedUser = $event"
				:hasSelectedUser="selectedUser != null ? true : false" />
		</v-col>
		<v-col cols="12" sm="6" class="pl-2">
			<set-data-transfer :selectedUser="selectedUser" @resetSelectedUser="selectedUser = null" />
		</v-col>
	</v-row>
</template>

<script>
import selectAddresseeMain from './components/select-addressee/select-addressee-main.vue'
import SetDataTransfer from './components/set-data-transfer/set-data-transfer.vue'
export default {
	components: { selectAddresseeMain, SetDataTransfer },
	data() {
		return {
			userList: [
				{
					id: '1',
					imagePath: 'https://randomuser.me/api/portraits/women/1.jpg',
					username: 'Juliana da Silva',
					pixKey: '1',
					phone: '(xx) xxxxx-xxxx'
				},
				{
					id: '2',
					imagePath: 'https://randomuser.me/api/portraits/women/2.jpg',
					username: 'Taina de Oliveira',
					pixKey: "1",
					phone: '(xx) xxxxx-xxxx'
				},
				{
					id: '3',
					imagePath: 'https://randomuser.me/api/portraits/women/3.jpg',
					username: 'Jussara Valdete',
					pixKey: "1",
					phone: '(xx) xxxxx-xxxx'
				},
				{
					id: '4',
					imagePath: 'https://randomuser.me/api/portraits/women/4.jpg',
					username: 'Christina Young',
					pixKey: "1",
					phone: '(xx) xxxxx-xxxx'
				},
				{
					id: '5',
					imagePath: 'https://randomuser.me/api/portraits/women/5.jpg',
					username: 'Mulher sem nome',
					pixKey: "1",
					phone: '(xx) xxxxx-xxxx'
				},
				{
					id: '6',
					imagePath: 'https://randomuser.me/api/portraits/women/6.jpg',
					username: 'Juliana da Silva',
					pixKey: "1",
					phone: '(xx) xxxxx-xxxx'
				},
				{
					id: '7',
					imagePath: 'https://randomuser.me/api/portraits/women/7.jpg',
					username: 'Juliana da Silva',
					pixKey: "1",
					phone: '(xx) xxxxx-xxxx'
				},
				{
					id: '8',
					imagePath: 'https://randomuser.me/api/portraits/women/8.jpg',
					username: 'Juliana da Silva',
					pixKey: "1",
					phone: '(xx) xxxxx-xxxx'
				},
				{
					id: '9',
					imagePath: 'https://randomuser.me/api/portraits/women/9.jpg',
					username: 'Juliana da Silva',
					pixKey: "1",
					phone: '(xx) xxxxx-xxxx'
				},
				{
					id: '10',
					imagePath: 'https://randomuser.me/api/portraits/women/10.jpg',
					username: 'Juliana da Silva',
					pixKey: "1",
					phone: '(xx) xxxxx-xxxx'
				},
			],
			selectedUser: null
		}
	},

}
</script>

<style></style>