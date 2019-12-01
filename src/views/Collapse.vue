<template>
  <div class="collapse-page">
    <P>折叠面板</P>
    <div>
      <DrCollapse v-model="activeNames1" @change="handleChange">
        <DrCollapseItem name="1" title="素还真">
          <div>
            神半圣亦半仙，全儒全道是全贤，脑中真书藏万卷，掌握文武半边天。
          </div>
          <div>
            霹雳化身最多的首席男主角，温文儒雅、器宇轩昂、超凡脱俗、武学莫测高深、足智多谋、博学多才、谦虚有礼，处世圆融冷静、
            慈悲亲和、关怀众生；以武林和平、天下大同为己任，“谋为天下谋、利为天下利” - 无我、无为
          </div>
        </DrCollapseItem>
        <DrCollapseItem name="2" title="叶小钗">
          <div>
            叶小钗一生悲情，命运多舛，亲人恩人朋友一个个离他而去，遭遇令人心酸，却也因此练就了超绝的禅定功夫。
          </div>
          <div>
            耿直专一、守信重诺的侠客，虽为侍童出身，但不屈不挠的个性，丰富的人生阅历，让其成为中原武林不可或缺的一员，
            享有“刀狂剑痴”之盛名，披肩的白发和脸上的英雄疤，搭配沉默无言的特色，营造出该角色独特的风范。
          </div>
        </DrCollapseItem>
        <DrCollapseItem name="3" title="一页书">
          <div>
            世事如棋，乾坤莫测，笑尽英雄啊！
          </div>
          <div>
            高深的禅修大般若与武学修为，法相庄严、胸怀无私、正气凛然，出道以来屡次帮助素还真携手共同弭平武林狼烟、扭转乾坤化解危机。
          </div>
        </DrCollapseItem>
      </DrCollapse>
    </div>
    <p>手风琴模式</p>
    <div>
      <DrCollapse v-model="activeNames2" accordion>
        <DrCollapseItem :name="0">
          <template slot="title">
            <span class="collapse-page-title">风之痕</span><DrIcon icon="dr-icon-appreciate"></DrIcon>
          </template>
          <div>
            昂首千丘远，啸傲风间；堪寻敌手共论剑，高处不胜寒。
          </div>
          <div>
            魔界传说中的绝代剑者，无人能出其右，平生追求剑术极致，崇尚自由不受拘束，对权力等武林斗争毫无兴趣，创造出“风之痕”与“魔流剑”二种
            完全截然不同的剑法，一为冷静快意，一为狠野疯狂。与剑痞忆秋年论交，彼此为知己，也为堪称敌手的至交好友
          </div>
        </DrCollapseItem>
        <DrCollapseItem :name="1">
          <template slot="title">
            <span class="collapse-page-title">倦收天</span><DrIcon icon="dr-icon-favor"></DrIcon>
          </template>
          <div>
            江天一色无纤尘，鱼龙潜跃观道身。天人焉有两般义？道不虚行只在人。
          </div>
          <div>
            夕边倦看收天幕，崇岭尽眺原无乡。共道长途郁垒远，挥手已渡圻岸江。
          </div>
          <div>
            人称“北芳秀” [1]  的道门剑界先天，属于道真一派，其独创剑法“九阳天诀”，曾击退翼天大魔等黑暗势力入侵，名震道界，
            被推崇为道真一脉顶峰。倦收天傲而不骄，无心红尘盛名，亦不沾染俗世，仅对曙光景致情有独钟，因此常居永旭之巅，看遍各种气候所出现的旭日奇景。
          </div>
        </DrCollapseItem>
        <DrCollapseItem :name="2">
          <template slot="title">
            <span class="collapse-page-title">原无乡</span><DrIcon icon="dr-icon-like"></DrIcon>
          </template>
          <div>
            啸傲八表域中，独骋威雄，惯玄影无踪，任太虚，萧瑟鸣风。
          </div>
          <div>
            夕边倦看收天幕，崇岭尽眺原无乡。共道长途郁垒远，挥手已渡圻岸江。
          </div>
          <div>
            原无乡与倦收天并称道真双秀，个性看似潇洒不羁，实则情感内敛，重情重义，幽默风趣。曾在道门
            与天羌族的战役中，为护挚友倦收天而失去双手，后继承道真双宝中的“银骠玄解”，受封银骠当家。
          </div>
        </DrCollapseItem>
      </DrCollapse>
    </div>
    <P>嵌套面板</P>
    <div class="collapse-shdjs">
      <DrCollapse v-model="activeNames3">
        <DrCollapseItem name="1" title="魔吞不动城">
          <div class="collapse-shdjs-header">
            魔吞不动城， 是以城主麒麟星（素还真、一线生）为最高领导，目的为维护武林和平，实现黑暗救赎为目的。
          </div>
          <DrCollapse v-model="activeNames3_1">
            <DrCollapseItem name="1" title="解锋镝">
              <div>
                生有生，大道自有徵，死无死，何用百年算。掩筝罢弦听渊默，苍茫天地何解莲
              </div>
              <div>
                在清香白莲亡心后，被埋入葬神之野九丈地底，开启九轮天的玄天魔能，
                却意外激荡清香白莲体内的芬陀利华清净无垢体作用，因而修补伤体，让素还真重生成为解锋镝。
              </div>
            </DrCollapseItem>
            <DrCollapseItem name="2" title="乱世狂刀">
              <div>
                一箫一剑平生意，负尽狂名十五年。箫中弦音藏柔情，剑下腥血寄恨仇；来何汹涌须挥剑，去向缠绵可付箫。
              </div>
            </DrCollapseItem>
          </DrCollapse>
        </DrCollapseItem>
        <DrCollapseItem name="2" title="玄黄三乘">
          <div class="collapse-shdjs-header">
            九天玄尊为维护三界平衡而钦点「玄黄三乘」，分别是：天迹·神毓逍遥、地冥·无神论、人觉·非常君。
          </div>
          <DrCollapse v-model="activeNames3_2">
            <DrCollapseItem name="1" title="天迹">
              <div>
                击冥霄，辟晴曌，万里卓然乘云涛；天有行，地无迹，千秋怎堪一剑扫，神光毓逍遥。
              </div>
              <div>
                天地人玄黄三乘之一，傲立仙道之巅，实力深不可测的顶先天。
              </div>
            </DrCollapseItem>
            <DrCollapseItem name="2" title="地冥">
              <div>
                九天玄尊钦点的“玄黄三乘”之一，拥有多重的身份与名字，更与天迹有着一张相似的脸孔。
              </div>
            </DrCollapseItem>
          </DrCollapse>
        </DrCollapseItem>
        <DrCollapseItem name="3" title="君奉天">
          <div>
            正天地所不正，判黑白所不判，犯人鬼所不犯，破日月所不破。儒法、无情，法儒、无私。
          </div>
          <div>
            儒门剑客宗师，剑法造诣顶尖，为墨倾池、玉离经等人的前辈，尊号「法儒无私」。
          </div>
        </DrCollapseItem>
      </DrCollapse>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames1: ['2'],
      activeNames2: [0],
      activeNames3: ['1'],
      activeNames3_1: [],
      activeNames3_2: []
    };
  },
  methods: {
    handleChange(arr) {
      console.log(arr)
    }
  }
}
</script>

<style lang="scss" scoped>
  .collapse-page {
    padding-bottom: 100PX;
    > p {
      margin-bottom: 20px;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }
    > div {
      margin: 0 auto 30px;
      width: 600px;
      .collapse-page-title {
        margin-right: 6px;
      }
      &.collapse-shdjs {
        .collapse-shdjs-header {
          margin-bottom: 10px;
        }
        ::v-deep .dr-collapse-item-content-slot {
          padding: 0 16px 10px;
        }
      }
    }
  }
</style>
