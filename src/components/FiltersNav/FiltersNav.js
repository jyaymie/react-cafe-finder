import './FiltersNav.css';
import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function FiltersNav({ cafes, searchParams, setSearchParams, setPriceFilter }) {
	// Create a state for the Price dropdown.
	const [isOpen, setIsOpen] = useState(false);

	// Create states for the Price checkboxes.
	const [is1$Checked, setIs1$Checked] = useState(false);
	const [is2$Checked, setIs2$Checked] = useState(false);
	const [is3$Checked, setIs3$Checked] = useState(false);
	const [is4$Checked, setIs4$Checked] = useState(false);

	const handleFilterByPrice = (e) => {
		e.preventDefault();
		let price1 = '';
		let price2 = '';
		let price3 = '';
		let price4 = '';

		if (is1$Checked) {
			price1 = '1';
		}
		if (
			(is1$Checked && is2$Checked) ||
			(is1$Checked && is3$Checked) ||
			(is1$Checked && is4$Checked) ||
			(is1$Checked && is2$Checked && is3$Checked) ||
			(is1$Checked && is2$Checked && is4$Checked) ||
			(is1$Checked && is3$Checked && is4$Checked) ||
			(is1$Checked && is2$Checked && is3$Checked && is4$Checked)
		) {
			price1 = '1,';
		}
		if (is2$Checked) {
			price2 = '2';
		}
		if (
			(is2$Checked && is3$Checked) ||
			(is2$Checked && is4$Checked) ||
			(is2$Checked && is3$Checked && is4$Checked)
		) {
			price2 = '2,';
		}
		if (is3$Checked) {
			price3 = '3';
		}
		if (is3$Checked && is4$Checked) {
			price3 = '3,';
		}
		if (is4$Checked) {
			price4 = '4';
		}

		setPriceFilter(`${price1}${price2}${price3}${price4}`);
		setSearchParams({
			location: searchParams.get('location'),
			price: `${price1}${price2}${price3}${price4}`,
		});
		setIsOpen(!isOpen);
	};

	// When results have loaded, show the navigation bar.
	if (cafes.length) {
		return (
			// Render a navigation bar using Bootstrap styling.
			<div className='navbar-container'>
				<Navbar variant='dark' expand='sm'>
					<Navbar.Brand>Filters</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse>
						<Nav>
							<NavDropdown
								title='Price'
								autoClose='outside'
								show={isOpen}
								onToggle={() => {
									setIsOpen(!isOpen);
								}}>
								<NavDropdown.Item onClick={() => setIs1$Checked(!is1$Checked)}>
									<label htmlFor='price-1$'>
										<input
											type='checkbox'
											name='price-1$'
											id='price-1$'
											checked={is1$Checked}
											readOnly
										/>{' '}
										$
									</label>
								</NavDropdown.Item>
								<NavDropdown.Item onClick={() => setIs2$Checked(!is2$Checked)}>
									<label htmlFor='price-2$'>
										<input
											type='checkbox'
											name='price-2$'
											id='price-2$'
											checked={is2$Checked}
											readOnly
										/>{' '}
										$$
									</label>
								</NavDropdown.Item>
								<NavDropdown.Item onClick={() => setIs3$Checked(!is3$Checked)}>
									<label htmlFor='price-3$'>
										<input
											type='checkbox'
											name='price-3$'
											id='price-3$'
											checked={is3$Checked}
											readOnly
										/>{' '}
										$$$
									</label>
								</NavDropdown.Item>
								<NavDropdown.Item onClick={() => setIs4$Checked(!is4$Checked)}>
									<label htmlFor='price-4$'>
										<input
											type='checkbox'
											name='price-4$'
											id='price-4$'
											checked={is4$Checked}
											readOnly
										/>{' '}
										$$$$
									</label>
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item onClick={handleFilterByPrice}>
									Apply
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}

export default FiltersNav;
