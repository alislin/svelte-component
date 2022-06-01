/*
 * @Author: Lin Ya
 * @Date: 2022-06-01 11:36:42
 * @LastEditors: Lin Ya
 * @LastEditTime: 2022-06-01 14:33:07
 * @Description: file content
 */
import App from './components/App.svelte';

const app = new App({
	target: document.body,
	props: {
		title: '读取数据',
		description:"加载中...",
	}
});

export default app;