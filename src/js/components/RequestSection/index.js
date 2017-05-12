import apiCofig from '../../../api-list.json'

export const RequestSectionHtml = (children) => {
	return `
	<section class="request-section">
		<aside class="request-format">
			${children}
		</aside>
		<h1>title</h1>
		<div class="request-url">
			soemurl
		</div>
	</section>`;
}

//side effects
export const RequestSectionActions = (state, lastState) => {
	const title = document.querySelector('.request-section h1')
	const url = document.querySelector('.request-url')

	if(state.currentApiIndex !== lastState.currentApiIndex) {
		title.textContent = apiCofig.apis[state.currentApiIndex].title;
	}
	if(state.format !== lastState.format) {
		url.textContent =  `${apiCofig.apis[state.currentApiIndex].title}?format=${state.format}`
	}
}

