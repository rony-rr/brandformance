import React from "react";

interface IProps {
	html?: any;
	className?: string;
}

const Wysiwyg = ({ html = "", className = '' }: IProps) => <div
	className={`wysiwyg ` + className}
	dangerouslySetInnerHTML={{ __html: html }}
/>;

export default Wysiwyg;
