import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import addressReducer from './addressReducer';
import authReducer from './authReducer';
import caseTypeReducer from './caseTypeReducer';
import cityReducer from './cityReducer';
import colorReducer from './colorReducer';
import companyReducer from './companyReducer';
import countryReducer from './countryReducer';
import customerReducer from './customerReducer';
import dealerReducer from './dealerReducer';
import districtReducer from './districtReducer';
import driverLicenceReducer from './driverLicenceReducer';
import employeeReducer from './employeeReducer';
import fuelTypeReducer from './fuelTypeReducer';
import gearTypeReducer from './gearTypeReducer';
import invoiceReducer from './invoiceReducer';
import orderReducer from './orderReducer';
import orderItemReducer from './orderItemReducer';
import paymentReducer from './paymentReducer';
import paymentTypeReducer from './paymentTypeReducer';
import townReducer from './townReducer';
import vehicleBrandReducer from './vehicleBrandReducer';
import vehicleCategoryReducer from './vehicleCategoryReducer';
import vehicleReducer from './vehicleReducer';
import vehicleModelReducer from './vehicleModelReducer';
import viewReducer from './viewReducer';

export default combineReducers({
    item: itemReducer,
    address: addressReducer,
    auth: authReducer,
    caseType: caseTypeReducer,
    city: cityReducer,
    color: colorReducer,
    company: companyReducer,
    country: countryReducer,
    customer: customerReducer,
    dealer: dealerReducer,
    district: districtReducer,
    driverLicence: driverLicenceReducer,
    employee: employeeReducer,
    fuelType: fuelTypeReducer,
    gearType: gearTypeReducer,
    invoice: invoiceReducer,
    order: orderReducer,
    orderItem: orderItemReducer,
    payment: paymentReducer,
    paymentType: paymentTypeReducer,
    town: townReducer,
    vehicleBrand: vehicleBrandReducer,
    vehicleCategory: vehicleCategoryReducer,
    vehicle: vehicleReducer,
    vehicleModel: vehicleModelReducer,
    view: viewReducer
})