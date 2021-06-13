import React, { useRef, useEffect, useState } from 'react';
import 'flickity-imagesloaded';
import CheckIcon from '@material-ui/icons/Check';
import cars from '../../../helpers/cars';
import ButtonGreen from '../../components/ButtonGreen/ButtonGreen';
import CarCards from '../../components/CarCards/CarCards';
import 'flickity/dist/flickity.min.css';
import user from '../../../assets/icons/user-silhouette.png';
import dashboard from '../../../assets/icons/dashboard.png';
import shift from '../../../assets/icons/shift.png';
import carImg from '../../../assets/icons/car.png';
import dollarSign from '../../../assets/icons/dollar-sign-symbol-bold-text.png';
import { TweenMax, Power3 } from 'gsap';
import { Link } from 'react-router-dom';

import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormGroup,
    CInput,
    CLabel,
    CSelect,
    CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { connect } from 'react-redux';
import { openNavbar, openFooter } from '../../../store/actions/viewActions';
import { getDriverLicences } from '../../../store/actions/driverLicenceActions';
import API from '../../../service/api';

const checkStyle = {
    height: '18px',
}

const similarVehiclesStyle = {
    marginBottom: '25px',
}

const congratsMsg = 'Congrats you booked a fake ';

const rewardMsg = '\nCheck the console (F12)  for your reward';

const Book = (props) => {

    const [customer, setCustomer] = useState({});
    const [order, setOrder] = useState({});
    const [form, setForm] = useState({});
    const [vehicle, setVehicle] = useState({})



    const { params: { vehicleId } } = props.match;

    const onChange = (e) => {
        if (e.target.name === "birthDate") {
            let birthDate = new Date(e.target.value.split('-')[0], e.target.value.split('-')[1], e.target.value.split('-')[2]);
            console.log('birthDate',birthDate);
            setForm({...form, birthDate});
        } else {
            setForm({ ...form, [e.target.name]: e.target.value });
        }
        
    }

    const resetForm = (e) => {
        setForm({});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setCustomer(form);
        API.postData('/Customer/add', form).then((res) => {
            let firstDate = new Date(form.firstDate.split('-')[0], form.firstDate.split('-')[1], form.firstDate.split('-')[2])
            let lastDate = new Date(form.lastDate.split('-')[0], form.lastDate.split('-')[1], form.lastDate.split('-')[2])
            let dayCount = (lastDate - firstDate) / (1000 * 3600 * 24);
            let body = {
                customerID: res.data.data.id,
                dealerID: 1,
                vehicleID: vehicleId,
                totalAmount: vehicle.dailyCost * dayCount,
                startingDate: firstDate,
                endDate: lastDate
            }
            console.log('body',body)
            API.postData('/Order/add', body);
            console.log(`asd`, res.data);
        })
        props.history.push("/vehicleModels");
    }

    useEffect(() => {
        API.getData(`/Vehicle/getbyid?id=${vehicleId}`).then(res => {
            setVehicle(res.data.data);
        })
        props.openNavbar();
        props.openFooter();
        props.getDriverLicences();
    }, [])


    let currentCar;

    cars.forEach((car) => {
        if (car.id === Number(vehicleId)) {
            currentCar = car;
        }
    });

    let similarArray = [];

    cars.forEach((car, index) => {
        if (car === currentCar) {
            return;
        } else if (car.type === currentCar.type) {
            similarArray.push(car);
        }
    });

    let carImgContainer = useRef(null);
    let carDescriptionContainer = useRef(null);

    useEffect(() => {
        TweenMax.to(carImgContainer, 0.5, {
            x: 0,
            opacity: 1,
            ease: Power3.easeIn,
        });

        TweenMax.to(carDescriptionContainer, 0.5, {
            x: 0,
            ease: Power3.easeIn,
        });

    }, [currentCar]);

    return (
        <>
            <div className='SingleCar top-offset' >
                {cars.map(car => {
                    if (car.id === Number(vehicleId)) {
                        return (
                            <div key={car.id} className='SingleCarContainer' >
                                <div
                                    className='SingleCarImgs box-shadow'
                                    ref={el => { carImgContainer = el }}
                                >
                                    <img
                                        src={car.images[0]}
                                        alt={car.name}
                                        className='SingleCarImg'
                                    />
                                </div>
                                <div
                                    className='SingleCarDescription box-shadow'
                                    ref={el => { carDescriptionContainer = el }}
                                >

                                    <div className='SingleCarDescriptionH1'>
                                        <h1>{car.name}</h1>
                                    </div>
                                    <div className='SingleCarSpecs' >
                                        <div className='SingleCarSpec' >
                                            <img
                                                className='SingleCarSpecImg'
                                                src={user}
                                                alt='seats'
                                            ></img>
                                            <p>{car.seats} Seats</p>
                                        </div>
                                        <div className='SingleCarSpec' >
                                            <img
                                                className='SingleCarSpecImg'
                                                src={shift}
                                                alt='transmission'
                                            ></img>
                                            <p>Auto</p>
                                            <p></p>
                                        </div>
                                        <div className='SingleCarSpec' >
                                            <img
                                                className='SingleCarSpecImg'
                                                src={carImg}
                                                alt='car doors'
                                            ></img>
                                            <p>{car.doors} Doors</p>
                                        </div>
                                        <div className='SingleCarSpec' >
                                            <img
                                                className='SingleCarSpecImg'
                                                src={dashboard}
                                                alt='mpg dashboard'
                                            ></img>
                                            <p>{car.mpg} mpg</p>
                                        </div>
                                    </div>
                                    <div className='SingleCarFeatures' >
                                        <div className='SingleCarFeature'>
                                            <CheckIcon
                                                style={checkStyle}
                                            />
                                            <p>Audio Input</p>
                                        </div>
                                        <div className='SingleCarFeature'>
                                            <CheckIcon
                                                style={checkStyle}
                                            />
                                            <p>Bluetooth</p>
                                        </div>
                                        <div className='SingleCarFeature'>
                                            <CheckIcon
                                                style={checkStyle}
                                            />
                                            <p>Heated Seats</p>
                                        </div>
                                        <div className='SingleCarFeature'>
                                            <CheckIcon
                                                style={checkStyle}
                                            />
                                            <p>All Wheel Drive</p>
                                        </div>
                                        <div className='SingleCarFeature'>
                                            <CheckIcon
                                                style={checkStyle}
                                            />
                                            <p>A/C & Heating</p>
                                        </div>
                                        <div className='SingleCarFeature'>
                                            <CheckIcon
                                                style={checkStyle}
                                            />
                                            <p>Dual Airbags</p>
                                        </div>
                                    </div>
                                    <div className='SingleCarPrice' >
                                        <div className='SingleCarPriceH2' >
                                            <img
                                                src={dollarSign}
                                                alt='dollar sign'
                                            >
                                            </img>
                                            <h2>{car.price} <span>Per Day</span></h2>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    }
                    return null;
                })}
            </div>

            <CForm style={{ padding: '5%', paddingRight: '10%', paddingLeft: '10%' }} onSubmit={onSubmit}>
                <CRow>
                    <CCol xs="12" sm="12">
                        <CCard>
                            <CCardHeader>
                                Kişisel Bilgileriniz
                        </CCardHeader>
                            <CCardBody>
                                <CRow>
                                    <CCol xs="12">
                                        <CFormGroup row>
                                            <CCol md="6">
                                                <CLabel htmlFor="name">İsim</CLabel>
                                                <CInput type="text" placeholder="İsim" required name="name" onChange={onChange} />
                                            </CCol>
                                            <CCol md="6">
                                                <CLabel htmlFor="name">Soyisim</CLabel>
                                                <CInput type="text" placeholder="Soyisim" required name="surname" onChange={onChange} />
                                            </CCol>
                                        </CFormGroup>
                                        <CFormGroup row>
                                            <CCol md="6">
                                                <CLabel htmlFor="name">E-Posta</CLabel>
                                                <CInput type="text" placeholder="E-posta" required name="email" onChange={onChange} />
                                            </CCol>
                                            <CCol md="6">
                                                <CLabel htmlFor="name">TC Kimlik Numarası</CLabel>
                                                <CInput type="text" placeholder="TC No" required name="citizenId" onChange={onChange} />
                                            </CCol>
                                        </CFormGroup>
                                        <CFormGroup row>
                                            <CCol md="6">
                                                <CLabel htmlFor="name">Telefon Numarası</CLabel>
                                                <CInput type="text" placeholder="İsim" required name="phone_1" onChange={onChange} />
                                            </CCol>
                                            <CCol md="6">
                                                <CLabel htmlFor="select">Ehliyet</CLabel>
                                                <CSelect custom name="driverLicenceID" id="select" onChange={onChange}>
                                                    {props.driverLicence.driverLicences.map(driverLicence => {
                                                        return (
                                                            <option key={driverLicence.id} value={driverLicence.id}>{driverLicence.licenceClass}</option>
                                                        )
                                                    })}
                                                </CSelect>
                                            </CCol>
                                        </CFormGroup>
                                        <CFormGroup row>
                                            <CCol md="12">
                                                <CLabel htmlFor="date-input">Doğum Tarihi</CLabel>
                                                <CInput type="date" id="date-input" name="birthDate" placeholder="date" required onChange={onChange} />
                                            </CCol>
                                        </CFormGroup>
                                        <CFormGroup row>

                                            <CCol md="6">
                                                <CLabel htmlFor="date-input">Başlangıç Tarihi</CLabel>
                                                <CInput type="date" id="date-input" name="firstDate" placeholder="date" required onChange={onChange} />
                                            </CCol>
                                            <CCol md="6">
                                                <CLabel htmlFor="date-input">Bitiş Tarihi</CLabel>
                                                <CInput type="date" id="date-input" name="lastDate" placeholder="date" required onChange={onChange} />
                                            </CCol>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                                <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Kaydet</CButton>
                                <CButton type="reset" size="sm" color="danger" onClick={resetForm}><CIcon name="cil-ban" /> Resetle</CButton>
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
            </CForm>
        </>


    )
}

const mapStateToProps = (state) => ({
    view: state.view,
    driverLicence: state.driverLicence
});

export default connect(mapStateToProps, { openNavbar, openFooter, getDriverLicences })(Book);