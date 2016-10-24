import router from 'koa-router';
import FallPatientCompose from '../compose/fallNurse/fallPatientCompose';
import Util from '../util/util';
const FallNurseRouter = router();
/**
 * 跌倒护理路由
 */

FallNurseRouter.get('/mservice/:serviceName', (ctx, next) => {
  let baseUrl = Util.getBaseUrlByServiceName(ctx.params.serviceName);
  ctx.body = baseUrl;
});
FallNurseRouter.get('/info', (ctx, next) => {
  // let baseUrl = Util.getBaseUrlByServiceName(ctx.params.serviceName);
  ctx.body = '{"status":"UP"}';
});

/**
 * 获取概要信息
 */
FallNurseRouter.get('/fallNurse/summaryPatient/:status/:unitCode', async (ctx, next) => {
  let query=ctx.request.query;
  let fallPatientCompose=new FallPatientCompose(ctx);
  let result =await fallPatientCompose.getFallPatientSummary(ctx.params.status, ctx.params.unitCode, query.nursingLevel, query.page, query.size); 
  ctx.body =  JSON.stringify(result);
});
export default FallNurseRouter;