<template>
	<div>
		<card-carousel-transfer v-for="transfers, index in transfersList" :key="index"
			:class="index == transfersList.length - 1 ? '' : 'mb-4'" :data="transfers" />
	</div>
</template>

<script>
import CardCarouselTransfer from './components/card-carousel-transfer.vue'
export default {
	components: { CardCarouselTransfer },
	data() {
		return {
			transfersList: [
				{
					title: 'Recebidas',
					type: "recived",
					list: [
						{ date: '2023-11-27T00:01:00', value: 150 },
						{ date: '2023-11-27T00:01:00', value: 200 },
						{ date: '2023-11-27T00:01:00', value: 10 },
						{ date: '2023-11-27T00:01:00', value: 63 },
						{ date: '2023-11-27T00:01:00', value: 150 },
						{ date: '2023-11-27T00:01:00', value: 856 },
						{ date: '2023-11-27T00:01:00', value: 45 },
						{ date: '2023-11-27T00:01:00', value: 4 },
					]
				},
				{
					title: 'Enviadas',
					type: "sended",
					list: [
						{ date: '2023-11-27T00:01:00', value: 12 },
						{ date: '2023-11-27T00:01:00', value: 1 },
						{ date: '2023-11-27T00:01:00', value: 150 },
						{ date: '2023-11-27T00:01:00', value: 150 },
						{ date: '2023-11-27T00:01:00', value: 152310 },
						{ date: '2023-11-27T00:01:00', value: 2 },
						{ date: '2023-11-27T00:01:00', value: 2232 },
						{ date: '2023-11-27T00:01:00', value: 224 },
					]
				},

			]
		}
	}
}
</script>

<style></style>
