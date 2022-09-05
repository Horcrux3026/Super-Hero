const name = document.getElementById("superheroes");
const id = document.getElementById("superhero");
const btn1 = document.getElementById("find-superheroes");
const btn2 = document.getElementById("find-superhero");

btn1.addEventListener("click", async function () {
	let url = `https://superhero-hunter-app-mini-server.onrender.com/api/v1/superheroes/${name.value}`;
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			console.log(data.data);
		});
});

btn2.addEventListener("click", async function () {
	let url = `https://superhero-hunter-app-mini-server.onrender.com/api/v1/superhero/${id.value.toString()}`;
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			console.log(data.data);
		});
});
