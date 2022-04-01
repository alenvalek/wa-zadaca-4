<template>
	<v-container>
		<div class="text-h3">{{ book.name }}</div>
		<div class="text-h6">ISBN: {{ book.isbn }}</div>
		<div class="text-h6" v-for="(author, index) in book.authors" :key="author">
			Autor {{ index + 1 }}: {{ author ? author : "-" }}
		</div>
		<div class="text-h6">Izdavač: {{ book.publisher }}</div>
		<div class="text-h6">Zemlja podrijetla: {{ book.country }}</div>
		<div v-if="book.characters" class="text-h6">
			Broj likova: {{ book.characters.length }}
		</div>
		<v-btn color="error" @click="redirectToHome">Vrati me</v-btn>
	</v-container>
</template>

<script>
import axios from "axios";

export default {
	name: "Detail",
	data() {
		return {
			book: {},
		};
	},
	mounted() {
		this.fetchBookDetails();
	},
	methods: {
		async fetchBookDetails() {
			const id = this.$route.params.id;
			console.log(id);
			const res = await axios.get(
				`https://www.anapioficeandfire.com/api/books/${id}`
			);
			this.book = res.data;
		},
		redirectToHome() {
			this.$router.push({ name: "Home" });
		},
	},
};
</script>

<style></style>
