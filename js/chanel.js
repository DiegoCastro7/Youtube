const url = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2cdacea104mshefa0be4d9952708p1c1c4ajsn8bd26b7c7768',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}