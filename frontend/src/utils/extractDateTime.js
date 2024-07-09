export function extractDateTime(dateString) {
	const date = new Date(dateString);
	
	const day = padZero(date.getDate());
	const month = getMonthName(date.getMonth());
	const year = date.getFullYear();
	
	let hours = date.getHours();
	const minutes = padZero(date.getMinutes());
	const ampm = hours >= 12 ? 'PM' : 'AM';
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	hours = padZero(hours);
	
	return `${hours}:${minutes} ${ampm} - ${day} ${month} '${year-2000}`;
}

// Helper function to pad single-digit numbers with a leading zero
function padZero(number) {
	return number.toString().padStart(2, "0");
}

// Helper function to get the month name
function getMonthName(monthIndex) {
	const months = [
		"January", "February", "March", "April", "May", "June", 
		"July", "August", "September", "October", "November", "December"
	];
	return months[monthIndex];
}
