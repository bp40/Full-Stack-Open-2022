const Header = (props) => {
	return <h1> {props.course.name} </h1>;
};

const Total = (props) => {
	const totalExercises = props.parts.reduce(
		(prev, current) => prev + current.exercises,
		0
	);

	return <p> Number of exercises {totalExercises} </p>;
};

const Content = (props) => {
	return (
		<div>
			{props.parts.map((part) => {
				return <Part partName={part.name} numOfExercises={part.exercises} />;
			})}
		</div>
	);
};

const Part = (props) => {
	return (
		<p>
			{props.partName} {props.numOfExercises}
		</p>
	);
};

const App = () => {
	const course = {
		name: "Half Stack application development",
		parts: [
			{
				name: "Fundamentals of React",
				exercises: 10,
			},
			{
				name: "Using props to pass data",
				exercises: 7,
			},
			{
				name: "State of a component",
				exercises: 14,
			},
		],
	};

	return (
		<div>
			<Header course={course} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
		</div>
	);
};

export default App;
