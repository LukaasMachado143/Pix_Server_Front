<template>
	<v-slide-item>
		<v-card class="mr-2 pa-2" color="white black--text">
			<v-row no-gutters align="center">
				<span class="font-weight-bold mr-1">Data:</span>
				<span>{{ localDate }}</span>
			</v-row>
			<v-row no-gutters align="center">
				<span class="font-weight-bold mr-1">Hora:</span>
				<span>{{ localHour }}</span>
			</v-row>
			<v-row no-gutters align="center">
				<span class="font-weight-bold mr-1">Valor:</span>
				<span :class="`font-weight-bold  background ${type == 'recived' ? 'background-green' : 'background-red'}`">{{
					setCurrency(value) }}</span>
			</v-row>
		</v-card>
	</v-slide-item>
</template>

<script>
import setCurrency from '@/utils/setCurrency.js'
import setDate from '@/utils/setDate.js'
import setHour from '@/utils/setHour.js'

export default {
	props: ['date', 'value', 'type'],
	data() {
		return {
			localDate: null,
			localHour: null
		}
	},
	methods: {
		setCurrency,
		setDate,
		setHour

	},
	watch: {
		date: {
			handler(value) {
				this.localDate = this.setDate(value)
				this.localHour = this.setHour(value)
			}, immediate: true, deep: true
		}
	}

}
</script>
<style lang="scss" scoped>
.background {
	border-radius: 15px;
	padding: 4px;
}

.background-green {
	background-color: rgba(0, 128, 0, 0.300);
}

.background-red {
	background-color: rgba(255, 0, 0, 0.300);
}
</style>