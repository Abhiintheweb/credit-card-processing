

const healthCheck = async (ctx)=> {
    const response = {data:'Up and running.'};
    ctx.status = 200;
    ctx.body = response;
}

module.exports = {healthCheck}