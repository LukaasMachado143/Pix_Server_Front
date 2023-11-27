<template>
	<v-row no-gutters justify="center" class="gap-4">
		<select-addressee-main :userList="userList" @selectedUser="selectedUser = $event"
			:hasSelectedUser="selectedUser != null ? true : false" />
	</v-row>
</template>

<script>
import selectAddresseeMain from './components/select-addressee/select-addressee-main.vue'
export default {
	components: { selectAddresseeMain },
	data() {
		return {
			userList: [
				{
					id: '1',
					imagePath: 'https://randomuser.me/api/portraits/women/1.jpg',
					username: 'Juliana da Silva',
					pixKey: '1',
				},
				{
					id: '2',
					imagePath: 'https://randomuser.me/api/portraits/women/2.jpg',
					username: 'Taina de Oliveira',
					pixKey: "1",
				},
				{
					id: '3',
					imagePath: 'https://randomuser.me/api/portraits/women/3.jpg',
					username: 'Jussara Valdete',
					pixKey: "1",
				},
				{
					id: '4',
					imagePath: 'https://randomuser.me/api/portraits/women/4.jpg',
					username: 'Christina Young',
					pixKey: "1",
				},
				{
					id: '5',
					imagePath: 'https://randomuser.me/api/portraits/women/5.jpg',
					username: 'Mulher sem nome',
					pixKey: "1",
				},
				{
					id: '6',
					imagePath: 'https://randomuser.me/api/portraits/women/6.jpg',
					username: 'Juliana da Silva',
					pixKey: "1",
				},
				{
					id: '7',
					imagePath: 'https://randomuser.me/api/portraits/women/7.jpg',
					username: 'Juliana da Silva',
					pixKey: "1",
				},
				{
					id: '8',
					imagePath: 'https://randomuser.me/api/portraits/women/8.jpg',
					username: 'Juliana da Silva',
					pixKey: "1",
				},
				{
					id: '9',
					imagePath: 'https://randomuser.me/api/portraits/women/9.jpg',
					username: 'Juliana da Silva',
					pixKey: "1",
				},
				{
					id: '10',
					imagePath: 'https://randomuser.me/api/portraits/women/10.jpg',
					username: 'Juliana da Silva',
					pixKey: "1",
				},
			],
			selectedUser: null
		}
	},

}
</script>

<style></style>