import { HTTP_REQUEST } from "../utils/request"
var app=getApp();
//const base_url="http://10.60.17.43:8080/gdzcgl";
const base_url=app.globalData.base_url

class requestModel extends HTTP_REQUEST{
  getScrapList({current,size}){
   return this.request({
     url:base_url+"/rest/destroyrecord/list?current="+current+'&size='+size,
     method:'POST'
   })
  }
  getInventoryList({limit,page}){
    return this.request({
      url:base_url+"/rest/check/list",
      method:'POST',
      data:{
        limit,
        page
      }
    })
   }
   getNewList({current,size}){
    return this.request({
      url:base_url+"/rest/destroyrecord/remindlist",
      method:'POST',
      data:{
        current,
        size
      }
    })
   }
   getCheckDetail(id){
    return this.request({
      url:base_url+"/rest/check/detail?id="+id,
      method:'POST'
    })
   }
   detailHandle({id,status}){
    return this.request({
      url:base_url+"/rest/check/detailHandle?id="+id+'&status='+status,
      method:'GET'
    })
   }
   destroyrecordAuditPass(id){
    return this.request({
      url:base_url+"/rest/destroyrecord/auditPass/"+id,
      method:'GET'
    })
   }
   destroyrecordAuditNoPass(id){
    return this.request({
      url:base_url+"/rest/destroyrecord/auditNoPass/"+id,
      method:'GET'
    })
   }
   destroyrecordDetail(id){
    return this.request({
      url:base_url+"/rest/destroyrecord/detail/"+id,
      method:'GET'
    })
   }
   getGoodsRecordList({size,current,id}){
    return this.request({
      url:base_url+"/rest/goodsRecord/list",
      method:'GET',
      data:{
        size,
        current,
        id
      }
    })
   }
   getCheckDetail(id){
    return this.request({
      url:base_url+"/rest/check/detail?id="+id,
      method:'GET'
    })
   }
}
export { requestModel };