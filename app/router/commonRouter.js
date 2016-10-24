import router from 'koa-router';
import BedService from '../service/baseinfo/bedService';
import FallPatientCompose from '../compose/fallNurse/fallPatientCompose';
import Util from '../util/util';
const CommonRouter = router();
/**
 * 公共路由
 */
CommonRouter.get('/getTest', (ctx, next) => {
  ctx.body = "getTest body";
});
CommonRouter.get('/mservice/:serviceName', (ctx, next) => {
  let baseUrl = Util.getBaseUrlByServiceName(ctx.params.serviceName);
  ctx.body = baseUrl;
});
CommonRouter.get('/info', (ctx, next) => {
  // let baseUrl = Util.getBaseUrlByServiceName(ctx.params.serviceName);
  ctx.body = '{"status":"UP"}';
});

CommonRouter.get('/summaryPatient/:status/:unitCode', async (ctx, next) => {
  let query=ctx.request.query;
  let fallPatientCompose=new FallPatientCompose(ctx);
  let result =await fallPatientCompose.getFallPatientSummary(ctx.params.status, ctx.params.unitCode, query.nursingLevel, query.page, query.size); 
  ctx.body =  JSON.stringify(result);
});
export default CommonRouter;