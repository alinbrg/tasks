<template>
	<header>
		<h1>{{ title }}</h1>
		<ButtonComp
			v-show="homePage"
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
	computed: {
		homePage() {
			if (this.$route.path === "/tasks/main") {
				return true;
			} else {
				return false;
			}
		},
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
