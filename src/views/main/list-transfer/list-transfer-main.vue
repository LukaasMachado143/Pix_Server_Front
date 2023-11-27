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
					type: "recived"
				},
				{
					title: 'Enviadas',
					type: "sended"
				},

			]
		}
	}
}
</script>

<style></style>
