import React, { useState, useEffect } from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CCollapse,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CFade,
    CForm,
    CFormGroup,
    CFormText,
    CValidFeedback,
    CInvalidFeedback,
    CTextarea,
    CInput,
    CInputFile,
    CInputCheckbox,
    CInputRadio,
    CInputGroup,
    CInputGroupAppend,
    CInputGroupPrepend,
    CDropdown,
    CInputGroupText,
    CLabel,
    CSelect,
    CRow,
    CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { connect } from 'react-redux';
import { addVehicleModel } from 'src/store/actions/vehicleModelActions';
import { getVehicleModels } from 'src/store/actions/vehicleModelActions';
import { getVehicleBrands } from 'src/store/actions/vehicleBrandActions';
import { getVehicleCategories } from 'src/store/actions/vehicleCategoryActions';
import { getFuelTypes } from 'src/store/actions/fuelTypeActions';
import { getGearTypes } from 'src/store/actions/gearTypeActions';
import { getCaseTypes } from 'src/store/actions/caseTypeActions';
import { Redirect } from "react-router-dom";

const AddVehicleModel = (props) => {

    const [vehicleModel, setVehicleModel] = useState({});

    const onChange = (e) => {
        setVehicleModel({ ...vehicleModel, [e.target.name]: e.target.value });
    }

    const resetForm = (e) => {
        setVehicleModel({});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.addVehicleModel(vehicleModel);
        props.history.push("/vehicleModels");
    }

    useEffect(() => {
        if (props.vehicleBrand.vehicleBrands && props.vehicleBrand.vehicleBrands.length > 0) {
            setVehicleModel({name: '', vehicleModelID: props.vehicleBrand.vehicleBrands[0].id});
        }
    }, [props.vehicleModel.vehicleModels])

    useEffect(() => {
        props.getVehicleModels();
        props.getVehicleBrands();
        props.getVehicleCategories();
        props.getFuelTypes();
        props.getGearTypes();
        props.getCaseTypes();
    }, [])

    useEffect(() => {
        console.log('vehicleModel',vehicleModel)
    }, [vehicleModel])

    return (
        <CForm onSubmit={onSubmit}>
            <CRow>
                <CCol xs="12" sm="12">
                    <CCard>
                        <CCardHeader>
                            Araç Markası Ekle
                        </CCardHeader>
                        <CCardBody>
                            <CRow>
                                <CCol xs="12">
                                    <CFormGroup>
                                        <CLabel htmlFor="name">Marka İsmi</CLabel>
                                        <CInput type="text" placeholder="Marka İsmi" required name="name" onChange={onChange} />
                                    </CFormGroup>
                                    <CFormGroup>
                                        <CLabel htmlFor="select">Benzin Tipi</CLabel>
                                        <CSelect custom name="fuelTypeID" id="select" onChange={onChange}>
                                            {props.fuelType.fuelTypes.map(fuelType => {
                                                return (
                                                    <option key={fuelType.id} value={fuelType.id}>{fuelType.name}</option>
                                                )
                                            })}
                                        </CSelect>
                                    </CFormGroup>
                                    <CFormGroup>
                                        <CLabel htmlFor="select">Vites Tipi</CLabel>
                                        <CSelect custom name="gearTypeID" id="select" onChange={onChange}>
                                            {props.gearType.gearTypes.map(gearType => {
                                                return (
                                                    <option key={gearType.id} value={gearType.id}>{gearType.name}</option>
                                                )
                                            })}
                                        </CSelect>
                                    </CFormGroup>
                                    <CFormGroup>
                                        <CLabel htmlFor="select">Kasa Tipi</CLabel>
                                        <CSelect custom name="caseTypeID" id="select" onChange={onChange}>
                                            {props.caseType.caseTypes.map(caseType => {
                                                return (
                                                    <option key={caseType.id} value={caseType.id}>{caseType.name}</option>
                                                )
                                            })}
                                        </CSelect>
                                    </CFormGroup>
                                    <CFormGroup>
                                        <CLabel htmlFor="select">Araç Kategorisi</CLabel>
                                        <CSelect custom name="vehicleBrandID" id="select" onChange={onChange}>
                                            {props.vehicleCategory.vehicleCategories.map(vehicleCategory => {
                                                return (
                                                    <option key={vehicleCategory.id} value={vehicleCategory.id}>{vehicleCategory.name}</option>
                                                )
                                            })}
                                        </CSelect>
                                    </CFormGroup>
                                    <CFormGroup>
                                        <CLabel htmlFor="select">Araç Markası</CLabel>
                                        <CSelect custom name="vehicleBrandID" id="select" onChange={onChange}>
                                            {props.vehicleBrand.vehicleBrands.map(vehicleBrand => {
                                                return (
                                                    <option key={vehicleBrand.id} value={vehicleBrand.id}>{vehicleBrand.name} - {/*vehicleBrand.vehicleCategory.name*/}</option>
                                                )
                                            })}
                                        </CSelect>
                                    </CFormGroup>
                                    <CFormGroup>
                                        <CLabel htmlFor="select">Araç Modeli</CLabel>
                                        <CSelect custom name="vehicleBrandID" id="select" onChange={onChange}>
                                            {props.vehicleBrand.vehicleBrands.map(vehicleBrand => {
                                                return (
                                                    <option key={vehicleBrand.id} value={vehicleBrand.id}>{vehicleBrand.name} - {/*vehicleBrand.vehicleCategory.name*/}</option>
                                                )
                                            })}
                                        </CSelect>
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

    )
}

const mapStateToProps = (state) => ({
    vehicleModel: state.vehicleModel,
    vehicleBrand: state.vehicleBrand,
    vehicleCategory: state.vehicleCategory,
    fuelType: state.fuelType,
    caseType: state.caseType,
    gearType: state.gearType,
    auth: state.auth
});

export default connect(mapStateToProps, { addVehicleModel, getVehicleModels, getVehicleBrands, getVehicleCategories, getFuelTypes, getCaseTypes, getGearTypes })(AddVehicleModel);

