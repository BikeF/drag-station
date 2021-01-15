<template>
  <div>
    <el-row type="flex">
      <el-col :span="5">
       <div class="block">
         <ZxDrag>
           aaaaaaaaaaaaaaaaaaaa
         </ZxDrag>
         <ZxDrag>
           bbbbbbbbbbbbbbbb
         </ZxDrag>
         <ul>
           <li v-for="(item,index) in blockList" :key="index">
             <p>{{item.type}}</p>
             <ul class="block-lists">
                  <ZxDrag v-for="(block, j) in item.children" :key="j">
                    <li>
                      <p>{{block.name}}</p>
                      <p>{{block.number}}</p>
                    </li>
                  </ZxDrag>
             </ul>
           </li>
         </ul>
       </div>
      </el-col>
      <el-col :span="19">
        <div class="template">
          <div v-dragged style="width:200px;height:200px;border:1px solid blue;">

          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { ajaxGet } from "@/utils/ajax.js";
import ZxDrag from "@/components/ZxDrag.vue";
// import draggable from "vuedraggable";
export default defineComponent({
  name: "dragStation",
  components: {
    ZxDrag
  },
  setup() {
    const drawer = ref(true);
    const blockList = ref([
      {
        type: '图文类',
        children: [
          {
            name: '11',
            number: 10
          },{
            name: '11',
            number: 10
          },{
            name: '11',
            number: 10
          },{
            name: '11',
            number: 10
          },{
            name: '11',
            number: 10
          },
        ]
      }
    ])
    return {
      drawer,
      blockList
    };
  }
});
</script>

<style lang="scss" scoped>
.block {
  background-color: #fff;
  box-shadow: 0 0 4px 0 rgba(0,0,0,.2);
  padding: 20px;
  p {
    font-size: 12px;
    line-height: 18px;
  }
  .block-lists {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    li {
      width: 100px;
      height: 80px;
      text-align: center;
      cursor: pointer;
    }
    li:hover {
      background-color: #f2f2f2;
      box-shadow: 0 0 8px 1px rgba(0,0,0,.2);
    }
  }
}
</style>
