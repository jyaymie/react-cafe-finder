import './CafeLocation.css';

function CafeLocation({ cafe }) {
	return (
		<div className='location-container'>
			<div className='address-container'>
				<p className='address'>{cafe.location.display_address[0]}</p>
				<p className='address'>{cafe.location.display_address[1]}</p>
				<p className='address'>{cafe.location.display_address[2]}</p>
				<p className='address'>{cafe.location.display_address[3]}</p>
			</div>
			<br />
			{/* Redirect users to Google Maps with the cafe's location mapped. */}
			<a
				href={`https://maps.google.com?q=${cafe.coordinates.latitude},${cafe.coordinates.longitude}`}
				target='_blank'
				className='map-link'>
				<strong>Map It 📍</strong>
			</a>
		</div>
	);
}

export default CafeLocation;
