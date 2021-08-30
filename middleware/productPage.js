export default function (ctx) {
	if (ctx.route.fullPath == `/product/${ctx.route.params.id}`) { ctx.redirect(301, `/product/${ctx.route.params.id}/specifications`) }
}