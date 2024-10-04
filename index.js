// console.log('index js connected');

const loadAllPhones = async (status, searchText)=>{
	// console.log(searchText);
	document.getElementById('spinner').style.display = 'none';

	const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText? searchText: "iphone"}`);
	const data = await response.json();

	console.log(data);

	displayAllPhone(data.data.slice(0,6));

	if(status){
		displayAllPhone(data.data)
	}else{
		displayAllPhone(data.data.slice(0,6))
	}
}

const displayAllPhone = (phones)=>{
	// console.log(phones);
	const phoneContainer = document.getElementById('phones-container');
	phones.forEach((phone) =>{
		// console.log(phone);
		const {brand, image, slug} = phone;
		const div = document.createElement('div');
		div.innerHTML = `
		<div class="card m-2 bg-base-100 w-96 shadow-xl">
		<figure class="px-10 pt-10">
			<img
			src=${image}
			alt="Shoes"
			class="rounded-xl" />
		</figure>
		<div class="card-body items-center text-center">
			<h2 class="card-title">${brand}</h2>
			<p>${slug}</p>
			<div class="card-actions">
			<button onclick="phoneDetails()" class="btn btn-primary">Show Details</button>
			</div>
		</div>
		</div>
		`;

		phoneContainer.appendChild(div);
	})
}

const handleShowAll = () =>{
	loadAllPhones(true);
}


const handleSearch = ()=>{
	// console.log('hello');

	document.getElementById('spinner').style.display = 'block';

	const searchText = document.getElementById('search-box').value ;

	setTimeout(function(){
		loadAllPhones(false, searchText)
	}, 3000)
}


const phoneDetails = (slug)=>{
	console.log(slug);
}

loadAllPhones(false, 'iphone');