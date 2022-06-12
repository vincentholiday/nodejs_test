var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'vincentfor0214@gmail.com',
		pass: 'password...'
	}
});

var mailOptions = {
	from: 'vincentfor0214@gmail.comm',
	to: 'shehblockflood@gmail.com, vincentfor0214@yahoo.com.tw',
	subject: '幫烏克蘭炸爛俄坦克 他只靠一張嘴',
	text: '一級中士傅萊曼（Chris Freymann）從沒想過，自己能直接幫忙烏克蘭反抗入侵的俄軍。但隨著俄烏戰爭加劇，他透過電話，為在戰火下設法用「標槍」（Javelin）反戰車飛彈的烏克蘭人提供了技術支援。對方傳來問題，而傅萊曼則提供答案，等他們摧毀俄羅斯坦克後，就會傳送照片和錄影給他。 據軍事網（Military.com）報導，在俄烏爆發戰爭前，傅萊曼在華盛頓州國民警衛隊擔任機械化偵察員，並在烏克蘭部隊協訓計畫中擔任首席教官，教導學員如何使用肩射反坦克飛彈。而他在擔任教官期間，訓練了約200名烏軍。等美國訓練人員離開後，俄軍便在2月侵略了烏克蘭。然而，傅萊曼仍和烏克蘭部隊保持聯繫。他的學員如今都在前線戰鬥，當他們遇到技術問題，或是忘了操作細節時，仍會向他求助。'
};

transporter.sendMail(mailOptions, function(error, info) {
	if (error)
		console.log(error);
	else
		console.log('Email sent: %s', info.response);
});