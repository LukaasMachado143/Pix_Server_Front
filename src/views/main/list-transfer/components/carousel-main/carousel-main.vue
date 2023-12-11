<template>
  <div>
    <Card-carousel-transfer
      v-for="(transfers, index) in transfersLists"
      :key="index"
      :class="index == transfersLists.length - 1 ? '' : 'mb-4'"
      :data="transfers"
    />
  </div>
</template>

<script>
import TransferService from "@/services/transfer-service";
import CardCarouselTransfer from "./components/card-carousel-transfer.vue";
export default {
  components: { CardCarouselTransfer },
  data() {
    return {
      transfersLists: [
        {
          title: "Recebidas",
          type: "received",
          isLoading: false,
          list: [],
        },
        {
          title: "Enviadas",
          type: "sended",
          isLoading: false,
          list: [],
        },
      ],
      service: new TransferService(),
    };
  },
  computed: {
    pixKey() {
      return this.$store.getters["userStore/pixKey"];
    },
  },
  methods: {
    getReceivedTransfers() {
      this.transfersLists[0].isLoading = true;
      this.service
        .getListTrasnfer("received", this.pixKey)
        .then((res) => {
          if (res.data.success) this.transfersLists[0].list = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.transfersLists[0].isLoading = false;
        });
    },
    getSendedTransfers() {
      this.transfersLists[1].isLoading = true;
      this.service
        .getListTrasnfer("sended", this.pixKey)
        .then((res) => {
          if (res.data.success) this.transfersLists[1].list = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.transfersLists[1].isLoading = false;
        });
    },
  },
  watch: {
    pixKey: {
      handler(value) {
        if (value) {
          this.getReceivedTransfers();
          this.getSendedTransfers();
        }
      },
      immediate: true,
    },
  },
};
</script>

<style>
</style>