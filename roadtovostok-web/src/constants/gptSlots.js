/**
 * GAM 版位常量：与后台 snippet、index.html defineSlot、各页 GptAdWrap 使用的 DOM id 一致。
 * 整站 GPT 已注释时下方导出为空数组占位；恢复 GPT 时请取消块注释并删除占位导出。
 */

/*
export const GPT_BANNERS = Object.freeze([
  {
    domId: 'div-gpt-ad-1778058544474-0',
    unitPath:
      '/23346398271/roadtovostok.org_all_0506/roadtovostok.org_0506_banner_1',
  },
  {
    domId: 'div-gpt-ad-1778058654238-0',
    unitPath:
      '/23346398271/roadtovostok.org_all_0506/roadtovostok.org_0506_banner_2',
  },
  {
    domId: 'div-gpt-ad-1778058736404-0',
    unitPath:
      '/23346398271/roadtovostok.org_all_0506/roadtovostok.org_0506_banner_3',
  },
])
*/

/** GPT 关闭时的占位（避免误 import 旧代码时报错）；与 GptAdWrap 内注释联动 */
export const GPT_BANNERS = Object.freeze([])
