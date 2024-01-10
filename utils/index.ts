import { CarProps } from "@/types";
import { FilterProps } from "@/types";



export async function fetchCars(filters:FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;
  // Set the required headers for the API request
  const headers= {
		'X-RapidAPI-Key': '8fc1ee453dmshe9fbaeecd230b43p1f950fjsn95faf50b85c3',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
  // Set the required headers for the API request
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );

  const result = await response.json();
  return result;
}



export const calculateCarRent=(city_mpg:number,year: number)=>{
    const basePricePerDay = 50; // 每天的基本租金價格（美元）
  const mileageFactor = 0.1; // 每行駛英里額外費率
  const ageFactor = 0.05; //  車齡每年的附加費率

  //  根據里程和年齡計算附加費率
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // 計算每天的總租金
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
}





export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;
  
    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    // url.searchParams.append('zoomLevel', zoomLevel);
    url.searchParams.append('angle', `${angle}`);
  
    return `${url}`;
  } 