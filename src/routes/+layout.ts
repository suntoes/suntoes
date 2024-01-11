export function load({ url }: { url: { pathname: string } }) {
	return {
		url: url.pathname
	};
}
