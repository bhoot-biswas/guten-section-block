const {
	createElement
} = wp.element;
export default function Section({
	tagName,
	className,
	style,
	children
}) {

	return createElement(
		tagName, {
			className: className,
			style: style
		},
		createElement(
			'div', {
				className: 'container',
			},
			children
		)
	)
}
