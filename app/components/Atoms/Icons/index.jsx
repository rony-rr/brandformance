import * as React from "react";
import Icon from "@ant-design/icons";

// create icons in base a svg
export const CustomIcon = ({ icon: Custom, ...rest }) => {
	return <Icon component={(props) => <Custom {...props} {...rest} />} />;
};

export const SVGGeo = (props) => (
	<svg
		width="14"
		height="21"
		viewBox="0 0 14 21"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M7.00001 9.83763C8.75636 9.83763 10.1802 8.46172 10.1802 6.76445C10.1802 5.06719 8.75636 3.69128 7.00001 3.69128C5.24366 3.69128 3.81985 5.06719 3.81985 6.76445C3.81985 8.46172 5.24366 9.83763 7.00001 9.83763Z"
			fill="currentColor"
		/>
		<path
			d="M7 0C3.56397 0 0 2.52565 0 6.76451C0 10.6325 6.25065 17.9975 6.50653 18.3154C6.63446 18.4567 6.79896 18.545 7 18.545C7.18277 18.545 7.36554 18.4567 7.49347 18.3154C7.76762 18.0151 14 10.6325 14 6.76451C14 3.03785 10.8564 0 7 0ZM7 11.074C4.55091 11.074 2.54047 9.14886 2.54047 6.76451C2.54047 4.38015 4.53264 2.455 7 2.455C9.46736 2.455 11.4595 4.38015 11.4595 6.76451C11.4595 9.14886 9.46736 11.074 7 11.074Z"
			fill="currentColor"
		/>
		<path
			d="M11.295 15.4895C10.0705 17.2027 8.91906 18.5803 8.48042 19.0925C8.11488 19.5164 7.58486 19.7637 7.01828 19.7637C6.4517 19.7637 5.92167 19.5164 5.55614 19.1102C5.09922 18.598 3.96606 17.2204 2.72324 15.5072C1.06005 16.0547 0 16.9378 0 17.9268C0 19.6224 3.1436 21 7 21C10.8564 21 14 19.6224 14 17.9268C14 16.9378 12.9399 16.0547 11.295 15.4895Z"
			fill="currentColor"
		/>
	</svg>
);


export const SVGSegmentation = (props) => (
	<svg
		width="25"
		height="25"
		viewBox="0 0 25 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M21.3199 8.76644C21.43 8.76644 21.4961 8.74443 21.5622 8.74443C21.9587 8.76644 22.3111 8.61234 22.5974 8.32616C22.9719 7.9299 23.3684 7.55566 23.7648 7.15941C25.8794 11.254 25.549 17.7482 20.615 21.9969C15.7471 26.2016 8.50031 25.9595 3.78658 21.4686C-0.750929 17.1318 -1.27957 9.82312 2.57511 4.89196C6.65006 -0.347405 13.3462 -1.05186 17.8617 1.23761C17.5533 1.54581 17.267 1.83199 16.9586 2.11818C16.3198 2.75659 16.3198 2.75659 16.2317 3.65917C13.4123 2.55846 10.6369 2.64652 7.94963 4.07743C6.12141 5.04605 4.75576 6.49899 3.85267 8.34817C2.00242 12.1126 2.86146 16.6035 5.98926 19.5534C8.91881 22.3271 13.5444 22.8995 17.1128 20.9182C19.2494 19.7295 20.7472 17.9683 21.5401 15.6569C22.3551 13.3454 22.245 11.0559 21.3199 8.76644Z"
			fill="currentColor"
		/>
		<path
			d="M18.4563 9.5811C19.7559 12.0467 19.3374 15.679 16.54 17.8144C13.8747 19.8617 10.0421 19.5755 7.70723 17.154C5.32834 14.6884 5.17416 10.8579 7.3548 8.26026C9.60153 5.57453 13.1699 5.33238 15.4166 6.56517C15.3725 6.6092 15.3285 6.67524 15.2844 6.71927C14.6236 7.37969 13.9849 8.04011 13.302 8.67852C13.2139 8.74457 13.0818 8.81061 12.9716 8.81061C10.8791 8.54644 9.02884 9.97736 8.76452 12.1347C8.52222 14.2041 10.0641 15.9652 11.9584 16.2294C14.2932 16.5376 16.3417 14.6884 16.2096 12.3549C16.1875 11.9366 16.2977 11.6945 16.584 11.4303C17.1567 10.9019 17.6854 10.3296 18.258 9.77923C18.3241 9.69117 18.3902 9.64714 18.4563 9.5811Z"
			fill="currentColor"
		/>
		<path
			d="M20.8354 2.29433C21.7826 1.50182 22.3993 1.41376 22.972 1.96412C23.3024 2.27232 23.4346 2.64655 23.3685 3.08684C23.3245 3.52712 23.0161 3.8133 22.6637 4.14352C23.3024 4.14352 23.8972 4.14352 24.4698 4.14352C24.58 4.14352 24.6901 4.16553 24.8002 4.20956C25.0425 4.34164 25.0646 4.64984 24.8663 4.86998C24.624 5.11214 24.3817 5.35429 24.1394 5.59645C23.4346 6.3009 22.7518 6.98334 22.0689 7.68779C21.9147 7.84189 21.7606 7.90793 21.5403 7.90793C20.7473 7.90793 19.9544 7.90793 19.1614 7.90793C18.9852 7.90793 18.8751 7.95196 18.7429 8.08404C17.0028 9.84517 15.2406 11.5843 13.5005 13.3454C13.1481 13.6976 12.7296 13.8958 12.201 13.7857C11.2758 13.5656 10.8793 12.4869 11.452 11.7384C11.5181 11.6503 11.6062 11.5623 11.6943 11.4742C13.4124 9.75712 15.1525 8.018 16.8706 6.3009C17.0028 6.16882 17.0689 6.01472 17.0689 5.81659C17.0689 5.04609 17.0468 4.25359 17.0689 3.48309C17.0689 3.30698 17.157 3.10885 17.2671 2.97677C18.1702 2.05217 19.0953 1.14959 19.9984 0.225001C20.1526 0.0709023 20.3068 -0.0391681 20.5271 0.0488884C20.7473 0.136945 20.7914 0.335072 20.7914 0.555213C20.8354 1.10557 20.8354 1.67793 20.8354 2.29433Z"
			fill="currentColor"
		/>
	</svg>
);

export const SVGRich = (props) => (
	<svg
		width="25"
		height="26"
		viewBox="0 0 25 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<g clipPath="url(#clip0)">
			<path
				d="M5.80883 23.0642C5.30895 21.3952 4.82592 19.7853 4.3291 18.128C5.15126 17.8946 5.66568 17.2534 6.29723 16.7718C7.75169 15.6599 9.37611 15.4373 11.0327 16.189C12.0462 16.6496 13.0574 16.8799 14.1552 16.8371C14.9031 16.8068 15.6541 16.8223 16.4027 16.8371C17.3504 16.8511 18.0815 17.4285 18.2346 18.2159C17.5808 18.2159 16.9179 18.205 16.255 18.2159C15.4252 18.2338 14.5961 18.2688 13.7671 18.3054C13.4854 18.3178 13.2817 18.4672 13.3078 18.7722C13.3338 19.0773 13.5451 19.1979 13.8321 19.1613C15.3877 18.9403 16.9416 19.1232 18.4956 19.1706C18.8562 19.1823 19.1593 19.1621 19.1991 18.6921C19.2045 18.6275 19.3178 18.559 19.3936 18.517C20.6888 17.8027 21.9858 17.0918 23.2847 16.3843C23.9131 16.0435 24.4559 16.1073 25.0032 16.5757C24.7024 16.7904 24.4107 17.0021 24.1152 17.2083C22.0032 18.6867 19.8843 20.1495 17.7791 21.6341C16.7181 22.3826 15.5392 22.5981 14.3014 22.4036C12.6502 22.1437 11.0097 21.8115 9.36539 21.4987C8.80731 21.3835 8.22705 21.497 7.75093 21.8146L5.80883 23.0642Z"
				fill="currentColor"
			/>
			<path
				d="M5.96781 7.12591C5.97148 6.18871 6.15673 5.26142 6.51297 4.39699C6.86921 3.53255 7.38947 2.7479 8.04405 2.08784C8.69863 1.42777 9.4747 0.90522 10.328 0.550014C11.1812 0.194808 12.095 0.013905 13.017 0.0176346C13.9391 0.0213642 14.8513 0.209653 15.7018 0.57175C16.5522 0.933848 17.3242 1.46266 17.9736 2.128C18.623 2.79334 19.1371 3.58218 19.4865 4.44946C19.836 5.31675 20.014 6.24551 20.0103 7.18271C19.9805 11.109 16.7952 14.2984 12.9317 14.275C9.09109 14.2525 5.9548 11.0327 5.96781 7.12591ZM13.296 6.78433C13.296 7.43871 13.3045 8.09386 13.296 8.74902C13.2891 9.10928 13.4491 9.29368 13.7944 9.29991C14.2653 9.32015 14.737 9.31625 15.2075 9.28824C16.0848 9.21043 16.6007 8.69922 16.6337 7.86277C16.662 7.14537 16.6604 6.42485 16.6337 5.70745C16.6038 4.91146 16.1292 4.3948 15.3468 4.31388C14.8304 4.27249 14.3122 4.25872 13.7944 4.27264C13.456 4.27264 13.2876 4.45472 13.2953 4.81731C13.306 5.4748 13.296 6.12918 13.296 6.78433ZM11.6839 8.28061C11.7466 8.50314 11.8094 8.714 11.8645 8.92642C11.9595 9.28902 12.1975 9.35593 12.5167 9.261C12.836 9.16608 13.0671 9.00112 12.9485 8.60896C12.5545 7.29917 12.158 5.99042 11.7589 4.6827C11.6448 4.30999 11.3432 4.23529 11.0118 4.23607C10.6803 4.23685 10.3871 4.32867 10.2746 4.70293C9.88416 5.99664 9.49426 7.29087 9.10487 8.58562C8.97856 9.0019 9.20898 9.17463 9.5504 9.27112C9.87727 9.36449 10.1031 9.2649 10.1911 8.91086C10.2439 8.69922 10.3044 8.49069 10.3603 8.28372L11.6839 8.28061Z"
				fill="currentColor"
			/>
			<path
				d="M0 16.4832C0.663697 16.4832 1.29218 16.4832 1.92066 16.4832C2.25825 16.4832 2.68617 16.382 2.9074 16.5509C3.12864 16.7197 3.15466 17.1648 3.25341 17.4924C4.06434 20.1851 4.87451 22.8778 5.68391 25.5705C5.72448 25.7052 5.75586 25.8429 5.79644 26.0008H1.14291C0.763978 22.8425 0.385051 19.6881 0 16.4832ZM4.43995 24.6337C4.44311 24.4784 4.41574 24.3241 4.35945 24.1797C4.30316 24.0353 4.21908 23.9037 4.11214 23.7928C4.0052 23.6818 3.87755 23.5937 3.73666 23.5335C3.59578 23.4734 3.4445 23.4424 3.29169 23.4425C3.13654 23.4375 2.98198 23.4642 2.83711 23.5209C2.69225 23.5775 2.56001 23.6631 2.44818 23.7726C2.33635 23.882 2.2472 24.0131 2.18597 24.1581C2.12473 24.303 2.09266 24.459 2.09164 24.6168C2.09062 24.7746 2.12067 24.931 2.18002 25.0768C2.23937 25.2226 2.32682 25.3548 2.43722 25.4657C2.54762 25.5766 2.67874 25.664 2.82286 25.7226C2.96697 25.7812 3.12118 25.81 3.27638 25.8071C3.4291 25.8094 3.58073 25.7807 3.7224 25.7226C3.86407 25.6646 3.99292 25.5784 4.10142 25.4692C4.20992 25.3599 4.29588 25.2297 4.35428 25.0863C4.41267 24.9428 4.44232 24.789 4.44148 24.6337H4.43995Z"
				fill="currentColor"
			/>
			<path
				d="M22.0581 16.0731L19.0152 17.7429L18.6631 17.0955C19.463 16.6645 20.2408 16.2124 21.0499 15.8233C21.3768 15.6677 21.7366 15.7938 22.0581 16.0731Z"
				fill="currentColor"
			/>
			<path
				d="M19.4057 15.7135C18.9395 15.9718 18.5376 16.2037 18.125 16.4137C18.0553 16.4488 17.9298 16.4005 17.8425 16.3624C17.6634 16.2846 17.4927 16.1858 17.2837 16.0784C17.9321 15.6325 18.5651 15.3306 19.4057 15.7135Z"
				fill="currentColor"
			/>
			<path
				d="M14.4521 8.24636V5.33706C15.3539 5.19623 15.5101 5.33006 15.5116 6.21631C15.5116 6.58253 15.5116 6.9485 15.5116 7.3142C15.5109 8.24169 15.4129 8.33273 14.4521 8.24636Z"
				fill="currentColor"
			/>
			<path
				d="M11.4384 7.33439H10.6094L11.0174 5.79688L11.4384 7.33439Z"
				fill="currentColor"
			/>
			<path
				d="M3.26435 25.0825C3.12273 24.8755 2.95815 24.7355 2.97882 24.6382C3.00714 24.5098 3.18168 24.4149 3.29421 24.3052C3.39449 24.4234 3.55831 24.5339 3.57438 24.6631C3.5874 24.7596 3.41592 24.8849 3.26435 25.0825Z"
				fill="currentColor"
			/>
		</g>
		<defs>
			<clipPath id="clip0">
				<rect width="25" height="26" fill="white" />
			</clipPath>
		</defs>
	</svg>
);

export const SVGConvencional = (props) => (
	<svg
		width="17"
		height="17"
		viewBox="0 0 17 17"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M14.4892 5.96118C14.5641 5.96118 14.609 5.94621 14.6539 5.94621C14.9233 5.96118 15.1628 5.85639 15.3574 5.66179C15.6119 5.39233 15.8814 5.13785 16.1508 4.8684C17.5879 7.65275 17.3634 12.0688 14.0102 14.9579C10.7019 17.8171 5.77689 17.6524 2.5734 14.5986C-0.510339 11.6496 -0.869609 6.67972 1.75007 3.32653C4.51945 -0.236235 9.07021 -0.715263 12.139 0.841576C11.9294 1.05115 11.7348 1.24576 11.5252 1.44036C11.0911 1.87448 11.0911 1.87448 11.0312 2.48823C9.11512 1.73975 7.22894 1.79963 5.40265 2.77265C4.16018 3.43132 3.23206 4.41931 2.61831 5.67676C1.36086 8.23656 1.94468 11.2904 4.07036 13.2963C6.06132 15.1825 9.20493 15.5717 11.63 14.2244C13.0821 13.416 14.1 12.2185 14.6389 10.6467C15.1928 9.07486 15.1179 7.51802 14.4892 5.96118Z"
			fill="currentColor"
		/>
		<path
			d="M12.5432 6.51497C13.4264 8.19156 13.1419 10.6615 11.2408 12.1136C9.42948 13.5058 6.82477 13.3112 5.23799 11.6645C3.62128 9.98792 3.51649 7.38321 4.99848 5.61679C6.52538 3.7905 8.95046 3.62584 10.4774 4.46413C10.4474 4.49407 10.4175 4.53898 10.3875 4.56892C9.93845 5.01801 9.50433 5.4671 9.04027 5.90122C8.98039 5.94612 8.89058 5.99103 8.81573 5.99103C7.39362 5.8114 6.13617 6.78442 5.95653 8.25144C5.79187 9.65859 6.83974 10.8562 8.12713 11.0358C9.7139 11.2454 11.1061 9.98792 11.0163 8.40114C11.0013 8.11672 11.0761 7.95205 11.2707 7.77242C11.66 7.41314 12.0192 7.02394 12.4084 6.6497C12.4533 6.58982 12.4983 6.55988 12.5432 6.51497Z"
			fill="currentColor"
		/>
		<path
			d="M14.1599 1.56015C14.8036 1.02125 15.2227 0.961369 15.6119 1.33561C15.8365 1.54518 15.9263 1.79967 15.8814 2.09906C15.8514 2.39845 15.6419 2.59306 15.4024 2.8176C15.8365 2.8176 16.2407 2.8176 16.6299 2.8176C16.7047 2.8176 16.7796 2.83257 16.8544 2.86251C17.0191 2.95233 17.034 3.1619 16.8993 3.3116C16.7347 3.47626 16.57 3.64093 16.4053 3.80559C15.9263 4.28462 15.4622 4.74868 14.9982 5.22771C14.8934 5.33249 14.7886 5.3774 14.6389 5.3774C14.1 5.3774 13.5611 5.3774 13.0222 5.3774C12.9024 5.3774 12.8276 5.40734 12.7378 5.49716C11.5552 6.69473 10.3576 7.87733 9.175 9.07489C8.93549 9.31441 8.65107 9.44913 8.2918 9.37429C7.66307 9.22459 7.39362 8.49108 7.78283 7.98211C7.82774 7.92223 7.88761 7.86236 7.94749 7.80248C9.11512 6.63485 10.2977 5.45225 11.4653 4.28462C11.5552 4.1948 11.6001 4.09002 11.6001 3.95529C11.6001 3.43135 11.5851 2.89245 11.6001 2.36851C11.6001 2.24875 11.66 2.11403 11.7348 2.02421C12.3486 1.39549 12.9773 0.781734 13.591 0.153011C13.6958 0.0482233 13.8006 -0.0266246 13.9503 0.0332539C14.1 0.0931323 14.1299 0.227859 14.1299 0.377555C14.1599 0.751795 14.1599 1.141 14.1599 1.56015Z"
			fill="currentColor"
		/>
	</svg>
);

export const SVGCalendar = (props) => (
	<svg
		width="24"
		height="25"
		viewBox="0 0 24 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M21.5 4.50008H18.8333V6.50008C18.8333 6.69268 18.7954 6.8834 18.7217 7.06135C18.648 7.23929 18.5399 7.40097 18.4038 7.53717C18.2676 7.67336 18.1059 7.78139 17.9279 7.8551C17.75 7.92881 17.5593 7.96674 17.3667 7.96674C17.1741 7.96674 16.9833 7.92881 16.8054 7.8551C16.6275 7.78139 16.4658 7.67336 16.3296 7.53717C16.1934 7.40097 16.0854 7.23929 16.0116 7.06135C15.9379 6.8834 15.9 6.69268 15.9 6.50008V4.50008H8.13333V6.50008C8.13333 6.88906 7.97881 7.26211 7.70376 7.53717C7.4287 7.81222 7.05565 7.96674 6.66667 7.96674C6.27768 7.96674 5.90463 7.81222 5.62958 7.53717C5.35452 7.26211 5.2 6.88906 5.2 6.50008V4.50008H2.53333C2.37468 4.49827 2.21728 4.5283 2.07043 4.58838C1.92359 4.64847 1.79029 4.73739 1.67841 4.84989C1.56653 4.9624 1.47835 5.09619 1.41907 5.24336C1.3598 5.39054 1.33065 5.54811 1.33333 5.70674V20.6267C1.33068 20.7826 1.35876 20.9374 1.41596 21.0824C1.47316 21.2274 1.55837 21.3597 1.66671 21.4718C1.77505 21.5838 1.9044 21.6734 2.04738 21.7355C2.19035 21.7975 2.34416 21.8308 2.5 21.8334H21.5C21.6558 21.8308 21.8096 21.7975 21.9526 21.7355C22.0956 21.6734 22.225 21.5838 22.3333 21.4718C22.4416 21.3597 22.5268 21.2274 22.584 21.0824C22.6412 20.9374 22.6693 20.7826 22.6667 20.6267V5.70674C22.6693 5.5509 22.6412 5.39607 22.584 5.25108C22.5268 5.10609 22.4416 4.97379 22.3333 4.86174C22.225 4.74968 22.0956 4.66007 21.9526 4.59802C21.8096 4.53596 21.6558 4.50268 21.5 4.50008ZM6.66667 17.8334H5.33333V16.5001H6.66667V17.8334ZM6.66667 14.5001H5.33333V13.1667H6.66667V14.5001ZM6.66667 11.1667H5.33333V9.83341H6.66667V11.1667ZM10.6667 17.8334H9.33333V16.5001H10.6667V17.8334ZM10.6667 14.5001H9.33333V13.1667H10.6667V14.5001ZM10.6667 11.1667H9.33333V9.83341H10.6667V11.1667ZM14.6667 17.8334H13.3333V16.5001H14.6667V17.8334ZM14.6667 14.5001H13.3333V13.1667H14.6667V14.5001ZM14.6667 11.1667H13.3333V9.83341H14.6667V11.1667ZM18.6667 17.8334H17.3333V16.5001H18.6667V17.8334ZM18.6667 14.5001H17.3333V13.1667H18.6667V14.5001ZM18.6667 11.1667H17.3333V9.83341H18.6667V11.1667Z"
			fill="currentColor"
		/>
		<path
			d="M6.66667 7.16659C6.84348 7.16659 7.01305 7.09635 7.13807 6.97132C7.2631 6.8463 7.33333 6.67673 7.33333 6.49992V2.49992C7.33333 2.32311 7.2631 2.15354 7.13807 2.02851C7.01305 1.90349 6.84348 1.83325 6.66667 1.83325C6.48986 1.83325 6.32029 1.90349 6.19526 2.02851C6.07024 2.15354 6 2.32311 6 2.49992V6.49992C6 6.67673 6.07024 6.8463 6.19526 6.97132C6.32029 7.09635 6.48986 7.16659 6.66667 7.16659Z"
			fill="currentColor"
		/>
		<path
			d="M17.3333 7.16659C17.5101 7.16659 17.6797 7.09635 17.8047 6.97132C17.9297 6.8463 18 6.67673 18 6.49992V2.49992C18 2.32311 17.9297 2.15354 17.8047 2.02851C17.6797 1.90349 17.5101 1.83325 17.3333 1.83325C17.1565 1.83325 16.9869 1.90349 16.8619 2.02851C16.7369 2.15354 16.6667 2.32311 16.6667 2.49992V6.49992C16.6667 6.67673 16.7369 6.8463 16.8619 6.97132C16.9869 7.09635 17.1565 7.16659 17.3333 7.16659Z"
			fill="currentColor"
		/>
	</svg>
);

export const SVGFacebook = (props) => (
	<svg
		width="30"
		height="30"
		viewBox="0 0 30 30"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M30 15C30 6.717 23.283 0 15 0C6.717 0 0 6.717 0 15C0 23.283 6.717 30 15 30C15.0881 30 15.1758 29.9982 15.2637 29.9966V18.3197H12.041V14.564H15.2637V11.8002C15.2637 8.59497 17.2204 6.85043 20.0796 6.85043C21.4487 6.85043 22.6257 6.95251 22.9688 6.99806V10.348H20.9972C19.4417 10.348 19.1405 11.0873 19.1405 12.1719V14.564H22.8598L22.375 18.3197H19.1405V29.4205C25.4102 27.6231 30 21.8468 30 15Z"
			fill="currentColor"
		/>
	</svg>
);

export const SVGLinkedin = (props) => (
	<svg
		width="17"
		height="17"
		viewBox="0 0 17 17"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M16.9625 10.2076V16.3918H13.3771V10.6221C13.3771 9.17336 12.8594 8.18402 11.5612 8.18402C10.5706 8.18402 9.98204 8.85009 9.72213 9.49503C9.62775 9.72552 9.60341 10.0456 9.60341 10.3689V16.3915H6.01772C6.01772 16.3915 6.06585 6.61953 6.01772 5.608H9.60368V7.13613C9.59646 7.14816 9.5863 7.15992 9.57988 7.17142H9.60368V7.13613C10.0802 6.40294 10.9299 5.35478 12.8351 5.35478C15.194 5.35478 16.9625 6.89601 16.9625 10.2076ZM2.26679 0.40995C1.04027 0.40995 0.237839 1.21506 0.237839 2.27285C0.237839 3.30818 1.01701 4.13655 2.21973 4.13655H2.24299C3.49357 4.13655 4.27114 3.30818 4.27114 2.27285C4.24734 1.21506 3.49357 0.40995 2.26679 0.40995ZM0.450948 16.3918H4.0353V5.608H0.450948V16.3918Z"
			fill="currentColor"
		/>
	</svg>
);

export const SVGArrowLeftIcon = (props) => (
	<svg
		width="7"
		height="12"
		viewBox="0 0 7 12"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M6.68998 0.710022C6.78268 0.802536 6.85623 0.912424 6.90641 1.0334C6.95659 1.15437 6.98242 1.28405 6.98242 1.41502C6.98242 1.54599 6.95659 1.67567 6.90641 1.79665C6.85623 1.91762 6.78268 2.02751 6.68998 2.12002L2.80998 6.00002L6.68998 9.88002C6.87696 10.067 6.982 10.3206 6.982 10.585C6.982 10.8494 6.87696 11.103 6.68998 11.29C6.503 11.477 6.2494 11.582 5.98498 11.582C5.72055 11.582 5.46696 11.477 5.27998 11.29L0.689978 6.70002C0.597274 6.60751 0.523726 6.49762 0.473545 6.37665C0.423364 6.25567 0.397534 6.12599 0.397534 5.99502C0.397534 5.86405 0.423364 5.73437 0.473545 5.6134C0.523726 5.49242 0.597274 5.38254 0.689978 5.29002L5.27998 0.700022C5.65998 0.320022 6.29998 0.320022 6.68998 0.710022Z"
			fill="currentColor"
		/>
	</svg>
);

export const SVGArrowRightIcon = (props) => (
	<svg
		width="7"
		height="12"
		viewBox="0 0 7 12"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M0.310022 0.710022C0.217319 0.802536 0.143771 0.912424 0.0935898 1.0334C0.0434083 1.15437 0.0175781 1.28405 0.0175781 1.41502C0.0175781 1.54599 0.0434083 1.67567 0.0935898 1.79665C0.143771 1.91762 0.217319 2.02751 0.310022 2.12002L4.19002 6.00002L0.310022 9.88002C0.123045 10.067 0.0180016 10.3206 0.0180016 10.585C0.0180016 10.8494 0.123045 11.103 0.310022 11.29C0.497 11.477 0.750596 11.582 1.01502 11.582C1.27945 11.582 1.53304 11.477 1.72002 11.29L6.31002 6.70002C6.40273 6.60751 6.47627 6.49762 6.52645 6.37665C6.57664 6.25567 6.60247 6.12599 6.60247 5.99502C6.60247 5.86405 6.57664 5.73437 6.52645 5.6134C6.47627 5.49242 6.40273 5.38254 6.31002 5.29002L1.72002 0.700022C1.34002 0.320022 0.700022 0.320022 0.310022 0.710022Z"
			fill="currentColor"
		/>
	</svg>
);

export const SVGArrow = () => (
	<svg
		width="55"
		height="6"
		viewBox="0 0 55 6"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M55 3L50 0.113244L50 5.88675L55 3ZM1 2.5C0.723858 2.5 0.5 2.72386 0.5 3C0.5 3.27614 0.723858 3.5 1 3.5L1 2.5ZM50.5 2.5L1 2.5L1 3.5L50.5 3.5L50.5 2.5Z"
			fill="#EB008A"
		/>
	</svg>
);


export const SVGArrowLarge = () => (
	<svg width="61" height="6" viewBox="0 0 61 6" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M61 3.00001L56 0.113253L56 5.88676L61 3.00001ZM1 2.5C0.723858 2.5 0.5 2.72386 0.5 3C0.5 3.27614 0.723858 3.5 1 3.5L1 2.5ZM56.5 2.5L1 2.5L1 3.5L56.5 3.5L56.5 2.5Z" fill="#EB008A"/>
	</svg>
);