// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  try{
  const result = await cloud.openapi.subscribeMessage.send({
    touser: cloud.getWXContext().OPENID,
    page:`/pages/blog-comment/bog-comment?blogId=${event.blogId}`,
    lang: 'zh_CN',
    data:{
      thing1:{
        value:'有人评价了'
      },
      thing3:{
        value:event.content
      }
    },
    templateId:'TO_qUe8fibO19PMz-jDJ2f2xG8RlfdQHjuazNYMtNCw',
    formId:event.formId,
    miniprogramState: 'developer'
  })
  return result
  }catch(err){
    console.log(err)
    return err
  }
}