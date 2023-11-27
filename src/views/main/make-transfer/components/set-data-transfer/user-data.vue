<template>
	<v-row no-gutters>
		<v-col cols="auto">
			<v-img :src="data?.imagePath" class="main-image" />
		</v-col>
		<v-col class="pl-4">
			<v-row no-gutters align="center">
				<h3 class="mr-1">Nome:</h3>
				<span>{{ data?.username }}</span>
			</v-row>
			<v-row no-gutters align="center">
				<h3 class="mr-1">Telefone:</h3>
				<span>{{ data?.phone }}</span>
			</v-row>
			<v-row no-gutters align="center">
				<h3 class="mr-1">Chave Pix:</h3>
				<span>{{ data?.pixKey }}</span>
			</v-row>
		</v-col>
	</v-row>
</template>

<script>
export default {
	props: ['data']

}
</script>
<style lang="scss" scoped>
.main-image {
	width: 100px;
	height: 100px;
	border-radius: 25px !important;
}
</style>