const componentmenuitem = {
  name: 'componentmenuitem',
  props: ['item'],
  data() {
    return {
      count: 0
    }
  },
  template: `
    <div class="menu-item">
      {{ this.item.text }} 
      <span v-if='this.item.span != ""'>{{ this.item.span }}</span>
    </div>
  `,
};
const componentsettingitem = {
  name: 'componentsettingitem',
  props: ['item'],
  data() {
    return {
      count: 0
    }
  },
  template: `
    <div class="setting-item">
      {{ this.item.text }} 
    </div>
  `,
};
const componentbilanitem = {
  name: 'componentbilanitem',
  props: ['item'],
  data() {
    return {
      count: 0
    }
  },
  template: `
    <div class="bilancellule">
      <div class="bilantitle">{{ this.item.title }}</div>
      <div class="bilandetail">{{ this.item.description }}</div>
    </div>
  `,
}
Vue.createApp({
  components: {
    componentmenuitem,
    componentsettingitem,
    componentbilanitem
  },
  data() {
    return {
      menuItems: [
        {text: "Markets", span:"", options:{}},
        {text: "Earn", span:"", options:{}},
        {text: "Finance", span:"", options:{}},
        {text: "NFT", span:"New", options:{}}
      ],
      settingItems: [
        {text: "Log In", type:""},
        {text: "Register", type:"btn"},
        {text: "Downloads", type:""},
        {text: "English", type:""},
      ],
      bilanItems: [
        {title: "$76 billion", description:"24h trading volume on Binance exchange"},
        {title: "600+", description:"Cryptocurrencies listed"},
        {title: "90 million", description:"Registered users who trust Binance"},
        {title: "<0.10%", description:"Lowest transaction fees"},
      ]
    }
  }
}).mount('#app')