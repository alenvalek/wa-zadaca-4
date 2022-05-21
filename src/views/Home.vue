<template>
	<v-container>
		<div class="text-h3 text-center">Knjige</div>
		<v-card class="my-5" elevation="3" v-for="book in books" :key="book.isbn">
			<v-card-title>
				<router-link :to="{ name: 'Detail', params: { id: book.isbn } }">
					{{ book.name }}
				</router-link>
			</v-card-title>
			<v-card-subtitle>
				{{ book.authors[0] }}
			</v-card-subtitle>
			<v-card-text>{{ new Date(book.released).toDateString() }}</v-card-text>
			<v-card-text>{{ book.url }}</v-card-text>
		</v-card>
	</v-container>
</template>

<script>
import axios from "axios";
export default {
	name: "Home",
	data() {
		return {
			books: [],
			loading: true,
		};
	},
	mounted() {
		this.fetchBooks();
	},
	methods: {
		async fetchBooks() {
			console.log("test");
			const res = await axios.get("http://localhost:5000");
			console.log(res.data);
			this.books = res.data;
			this.loading = false;
		},
	},
};
</script>
