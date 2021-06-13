import React, { useState, useEffect} from 'react';

import { Button, Menu, MenuItem, createMuiTheme, ThemeProvider, makeStyles, Slider } from '@material-ui/core';
import Pagination from '@material-ui/lab/pagination';
import FilterListIcon from '@material-ui/icons/FilterList';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import cars from '../../../helpers/cars';
import CarCards from '../../components/CarCards/CarCards';
import LocationSelect from '../../components/LocationSelect/LocationSelect';
import TypeSelect from '../../components/TypeSelect/TypeSelect';
import DatePickers from '../../components/DatePickers/DatePickers';

import { connect } from 'react-redux';
import { openNavbar, openFooter } from '../../../store/actions/viewActions';

const useStyles = makeStyles({
  labelRoot: {
    marginLeft: '8px',
    color: '#000000',
  },
  formControl: {
    margin: '8px',
  },
  rootSelect: {
    width: '190px'
  },
  dateInput: {
    width: '110px',
    margin: '8px',
  },
})



const sliderMarks = [
  {
    value: 30,
    label: '$30'
  },
  {
    value: 65,
    label: '$65'
  },
  {
    value: 100,
    label: '$100'
  }
]

const Vehicles = (props) => {
  const classes = useStyles();

  const [carData] = useState(cars);
  const [page, setPage] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);
  const [price, setPrice] = useState([30, 100]);
  const [type, setType] = useState('');
  const [dateLower, handleDateLower] = useState(new Date());
  const [dateUpper, handleDateUpper] = useState(new Date());

  // handle state from home page form
  let locationState = props.location.state;

  useEffect(() => {
    props.openNavbar();
    props.openFooter();
  }, [])

  const theme = createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#00D60F',
      },
    }
  });

  async function setStateType() {
    const stateType = await locationState.type;
    setType(stateType);
  }

  if(locationState) {
    setStateType();
  }

  const handleFilterClick = () => {
    const vehicleGrid = document.querySelector('.VehiclesGrid');
    vehicleGrid.classList.toggle('showFilters');
  }

  const handleSortClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleSortClose = () => {
    setAnchorEl(null);
  }

  const handleType = (event) => {
    if(locationState) {
      locationState.type = event.target.value;
    }
    setType(event.target.value);
  }

  const handlePrice = (event, newValue) => {
    if (newValue[0] < newValue[1]) {
      setPrice(newValue);
    }       
  }

  const handleBlurLower = () => {
    if (price[0] < 30) {
      setPrice([30, price[1]]);
    } else if (price[0] > 99) {
      setPrice([99, price[1]]);
    } else if (price[0] > price[1]) {
      setPrice([[price[1] - 1], price[1]]);
    }
  }

  function priceText() {
    return `$${price[0]} to $${price[1]}`;
  }

  function filterCars(car) {
    if(car.price >= price[0] && car.price <= price[1]) {
      if(type === '') {
        return car
      } else if (car.type === type.toLowerCase()) {
        return car
      }
    }
  }

  let filteredCars = carData.filter(filterCars)

  const handlePriceLow = () => {
    carData.sort(function (a, b) {
      return a.price - b.price;
    });

    setAnchorEl(null);
  }

  const handlePriceHigh = () => {
    carData.sort(function (a, b) {
      return b.price - a.price;
    });

    setAnchorEl(null);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);
  
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  }

  let minIndex = (page - 1) * 15;
  let maxIndex = page * 15 - 1;

  

  return (
    <div className='top-offset Vehicles'>
      <div className='VehiclesFilter'>
        <div className='VehiclesFilterHeader' >
          <div className='VehiclesFilterText'>
            <p>{filteredCars.length} Sonuç Bulundu</p>
          </div>
          <div className='VehiclesFilterButtons'>
            <Button 
              color='default' 
              variant='contained' 
              disableElevation
              style={{width: '100px', marginRight: '16px'}}
              endIcon={<FilterListIcon/>}
              onClick={handleFilterClick}
            >
              Filtrele
            </Button>
            <Button 
              color='default' 
              variant='contained' 
              disableElevation
              style={{width: '100px'}}
              endIcon={<ExpandMoreIcon/>}
              onClick={handleSortClick}
            >
              Sırala
            </Button>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleSortClose}
              anchorReference="anchorOrigin"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <MenuItem
                onClick={handlePriceLow}
              >
                Fiyat Artan
              </MenuItem>
              <MenuItem
                onClick={handlePriceHigh}
              >
                Fiyat Azalan
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
      <div 
        className='VehiclesFilter VehiclesForm' 
        style={{
          marginTop: '16px',
          zIndex: '1',
        }}
      >
        <ThemeProvider theme={theme}>
          <LocationSelect
            labelRoot={classes.labelRoot}
            formControl={classes.formControl}
            rootSelect={classes.rootSelect}
          />
          <TypeSelect
            labelRoot={classes.labelRoot}
            formControl={classes.formControl}
            rootSelect={classes.rootSelect}
            type={type}
            handleType={handleType}
          />
          <DatePickers
            dateInputClass={classes.dateInput}
            dashStyle={{display: 'none'}}
            dateLower={dateLower}
            handleDateLower={handleDateLower}
            dateUpper={dateUpper}
            handleDateUpper={handleDateUpper}
          />
          <div
            style={{
              padding: '8px 24px 0 24px',
            }}
          >
            <p style={{
              margin: '0 0 4px 4px',
            }}>Price Range</p>
            <Slider
              value={price}
              onChange={handlePrice}
              valueLabelDisplay='auto'
              aria-labelledby='price-slider'
              getAriaValueText={priceText}
              min={30}
              max={100}
              onBlur={handleBlurLower}
              marks={sliderMarks}
              style={{
                width: '222.5px',
                margin: '0 auto',
              }}
            />
          </div>
        </ThemeProvider>
      </div>
      
      
      <div className='VehiclesGrid'>
        <CarCards
          cars={filteredCars}
          minIndex={minIndex} 
          maxIndex={maxIndex}
        />
      </div>
      <div 
        className='VehiclesPagination' >
        <Pagination 
          count={filteredCars.length >= 15 ? 2 : 1} 
          shape='rounded' 
          size='large'
          page={page}
          onChange={handlePageChange}
          style={{
            minHeight: '100%',
          }}
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  view: state.view,
  vehicle: state.vehicle
});

export default connect(mapStateToProps, { openNavbar, openFooter })(Vehicles);