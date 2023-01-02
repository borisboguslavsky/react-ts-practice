import Row from "./Row";
import classes from "./Card.module.css";
import { useState } from "react";

interface WrapperComponentProps {
	title: string;
	description?: string;
	children?: React.ReactNode;
}

const WrapperComponent: React.FC<WrapperComponentProps> = (props) => {
	const [showDescription, setShowDescription] = useState(false);

	return (
		<div className={classes.wrapper}>
			<div className={classes.title}>
				<h2>{props.title}</h2>
				{props.description && (
					<button
						className={classes.infoButton}
						onClick={() => {
							setShowDescription((bool) => !bool);
						}}
					>
						ℹ
					</button>
				)}
			</div>
			{props.description && showDescription && (
				<div className={classes.description}>
					{props.description}
				</div>
			)}
			{props.children}
		</div>
	);
};

export default WrapperComponent;
