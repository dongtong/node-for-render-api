
module.exports = app => {
	console.log('boot.js....')
	const port = app.get('port');
	app.listen(port, () => {
		console.log(`App starting - port ${port}`);
	});
}