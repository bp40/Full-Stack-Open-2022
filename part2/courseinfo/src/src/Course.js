const Course = (props) => {
	return (
		<>
			{props.courses.map((course) => {
				return (
					<div key={course.id}>
						<Header key={course.id} header={course.name} />
						<Content parts={course.parts} />
						<Total course={course} />
					</div>
				);
			})}
		</>
	);
};


const Header = ({ header }) => {
	return <h1>{header}</h1>;
};

const Content = ({ parts }) => {
	return parts.map((part) => {
		return <Part key={part.id} name={part.name} exercisesNo={part.exercises} />;
	});
};

const Part = ({ name, exercisesNo }) => {
	return (
		<p>
			{name} {exercisesNo}
		</p>
	);
};

const Total = ({ course }) => {
	const total = course.parts.reduce(
		(sum, current) => sum + current.exercises,
		0
	);

	return (
		<strong>
			<p>total of {total} exercises</p>
		</strong>
	);
};

export default Course;
