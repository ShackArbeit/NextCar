export async function fetchCars(){
   const headers= {
		'X-RapidAPI-Key': '8fc1ee453dmshe9fbaeecd230b43p1f950fjsn95faf50b85c3',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
    const response=await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
        headers:headers,
    })
    const result=await response.json();
    return result
}