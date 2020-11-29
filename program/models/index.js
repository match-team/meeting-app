import { HTTP_REQUEST } from "../utils/request"

class requestModel extends HTTP_REQUEST{
  getScrapList({current,size}){
   return this.request({
     url:"http://10.60.235.27/rest/destroyrecord/list",
     method:'POST',
     data:{
       current,
       size
     }
   })
  }
  getInventoryList({limit,page}){
    return this.request({
      url:"http://10.60.17.43:8080/gdzcgl/rest/check/list",
      method:'POST',
      data:{
        limit,
        page
      }
    })
   }
   getNewList({current,size}){
    return this.request({
      url:"http://10.60.235.27/rest/destroyrecord/remindlist",
      method:'POST',
      data:{
        current,
        size
      }
    })
   }
  
  
}
export { requestModel };