<template>
	<header>
		<h1>{{ title }}</h1>
		<ButtonComp
			@btn-click="$emit('toggle-add-task')"
			:text="showAddTask ? 'Close' : 'Add Task'"
			:color="showAddTask ? 'red' : 'green'"
		/>
		<!-- <ButtonComp text="delete" color="red" />
		<ButtonComp text="update Task" color="blue" /> -->
	</header>
</template>

<script>
import ButtonComp from "./ButtonComp";

export default {
	name: "HeaderComp",
	props: {
		// title: {
		// 	type: String,
		// 	default: "hello world",
		// },
		title: String,
		showAddTask: Boolean,
	},
	components: {
		ButtonComp,
	},
};
</script>

<style scoped>
header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 40px;
}
</style>
