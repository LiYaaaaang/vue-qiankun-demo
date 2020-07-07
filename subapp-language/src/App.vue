<template>
	<div id="subapp-language">
		<div id="nav">
			<router-link to="/java">Java</router-link> |
			<router-link to="/javascript">JavaScript</router-link>
		</div>
		<router-view />
	</div>
</template>

<style lang="scss">
#subapp-language {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
