import React from 'react';
import ReactDom from 'react-dom';
import App from 'components/App/App';
import getRouter from './router/router';

// router热替换
renderWithHotReload(App);
//webpack 模块热替换
if(module.hot){
	console.log('哈哈');
	module.hot.accept('components/App/App', () => {
		const nextApp = require('components/App/App').default;
		renderWithHotReload(nextApp);
	});
}

ReactDom.render(<App/>,document.getElementById('app'));
