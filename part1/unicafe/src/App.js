import { useState } from "react";

const StatisticLine = ({ text, value }) => {
	return (
		<tr>
			<td> {text} </td>
			<td> {value} </td>
		</tr>
	);
};

const Statistics = ({ good, neutral, bad }) => {
	if (good + neutral + bad === 0) {
		return "No feedback given";
	}

	const averageScore = (good + -1 * bad) / (good + neutral + bad).toFixed(1);
	const positivePercentage = ((good * 100) / (good + neutral + bad)).toFixed(1);

	return (
		<div>
			<h1>Statistics</h1>
			<table>
				<tbody>
					<StatisticLine text="good" value={good} />
					<StatisticLine text="neutral" value={neutral} />
					<StatisticLine text="bad" value={bad} />
					<StatisticLine text="all" value={good + neutral + bad} />
					<StatisticLine text="average" value={averageScore} />
					<StatisticLine text="positive" value={positivePercentage + "%"} />
				</tbody>
			</table>
		</div>
	);
};

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const handleGoodBtn = () => {
		setGood(good + 1);
	};

	const handleNeutralBtn = () => {
		setNeutral(neutral + 1);
	};

	const handleBadBtn = () => {
		setBad(bad + 1);
	};

	return (
		<>
			<div>
				<h1>give feedback</h1>
				<button onClick={handleGoodBtn}>good</button>
				<button onClick={handleNeutralBtn}>neutral</button>
				<button onClick={handleBadBtn}>bad</button>
			</div>
			<Statistics good={good} neutral={neutral} bad={bad} />
		</>
	);
};

export default App;
